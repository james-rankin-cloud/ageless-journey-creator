import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredLocation: "langley" | "kelowna" | "victoria";
  createdAt: string;
}

export interface Booking {
  id: string;
  userId: string;
  location: string;
  service: string;
  subServices: string[];
  clinician: string | null;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => { success: boolean; error?: string };
  signup: (data: SignupData) => { success: boolean; error?: string };
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  getBookings: () => Booking[];
  addBooking: (booking: Omit<Booking, "id" | "userId" | "createdAt">) => void;
  cancelBooking: (id: string) => void;
}

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  preferredLocation: "langley" | "kelowna" | "victoria";
}

interface StoredUser extends User {
  password: string;
}

const USERS_KEY = "ageless_users";
const SESSION_KEY = "ageless_session";
const BOOKINGS_KEY = "ageless_bookings";

function getStoredUsers(): StoredUser[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveStoredUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getSession(): User | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSession(user: User | null) {
  if (user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(SESSION_KEY);
  }
}

function getStoredBookings(): Booking[] {
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveStoredBookings(bookings: Booking[]) {
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>(() => {
    const user = getSession();
    return { user, isAuthenticated: !!user };
  });

  const login = useCallback((email: string, password: string) => {
    const users = getStoredUsers();
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!found) return { success: false, error: "No account found with that email." };
    if (found.password !== password) return { success: false, error: "Incorrect password." };

    const { password: _, ...user } = found;
    saveSession(user);
    setState({ user, isAuthenticated: true });
    return { success: true };
  }, []);

  const signup = useCallback((data: SignupData) => {
    const users = getStoredUsers();
    if (users.some((u) => u.email.toLowerCase() === data.email.toLowerCase())) {
      return { success: false, error: "An account with that email already exists." };
    }

    const newUser: StoredUser = {
      id: generateId(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      password: data.password,
      preferredLocation: data.preferredLocation,
      createdAt: new Date().toISOString(),
    };

    saveStoredUsers([...users, newUser]);
    const { password: _, ...user } = newUser;
    saveSession(user);
    setState({ user, isAuthenticated: true });

    // Seed some past booking history for demo purposes
    const bookings = getStoredBookings();
    const seedBookings: Booking[] = [
      {
        id: generateId(),
        userId: user.id,
        location: data.preferredLocation.charAt(0).toUpperCase() + data.preferredLocation.slice(1),
        service: "Skin Rejuvenation",
        subServices: ["Botox / Dysport"],
        clinician: "Any Available",
        date: "2026-02-14",
        time: "10:00 AM",
        status: "completed",
        createdAt: "2026-02-10T09:00:00Z",
      },
      {
        id: generateId(),
        userId: user.id,
        location: data.preferredLocation.charAt(0).toUpperCase() + data.preferredLocation.slice(1),
        service: "Initial Consultation",
        subServices: [],
        clinician: "Dr. Jean Paul Lim",
        date: "2026-01-20",
        time: "2:00 PM",
        status: "completed",
        createdAt: "2026-01-15T09:00:00Z",
      },
    ];
    saveStoredBookings([...bookings, ...seedBookings]);

    return { success: true };
  }, []);

  const logout = useCallback(() => {
    saveSession(null);
    setState({ user: null, isAuthenticated: false });
  }, []);

  const updateProfile = useCallback((data: Partial<User>) => {
    setState((prev) => {
      if (!prev.user) return prev;
      const updated = { ...prev.user, ...data };
      saveSession(updated);

      // Also update in stored users list
      const users = getStoredUsers();
      const idx = users.findIndex((u) => u.id === updated.id);
      if (idx !== -1) {
        users[idx] = { ...users[idx], ...data };
        saveStoredUsers(users);
      }

      return { ...prev, user: updated };
    });
  }, []);

  const getBookings = useCallback(() => {
    if (!state.user) return [];
    return getStoredBookings().filter((b) => b.userId === state.user!.id);
  }, [state.user]);

  const addBooking = useCallback(
    (booking: Omit<Booking, "id" | "userId" | "createdAt">) => {
      if (!state.user) return;
      const newBooking: Booking = {
        ...booking,
        id: generateId(),
        userId: state.user.id,
        createdAt: new Date().toISOString(),
      };
      const bookings = getStoredBookings();
      saveStoredBookings([...bookings, newBooking]);
    },
    [state.user],
  );

  const cancelBooking = useCallback((id: string) => {
    const bookings = getStoredBookings();
    const updated = bookings.map((b) => (b.id === id ? { ...b, status: "cancelled" as const } : b));
    saveStoredBookings(updated);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        signup,
        logout,
        updateProfile,
        getBookings,
        addBooking,
        cancelBooking,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
