import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  LogOut,
  Plus,
  XCircle,
  CheckCircle2,
  History,
  Settings,
  ChevronRight,
} from "lucide-react";
import { useAuth, type Booking } from "@/lib/auth";

const ease = [0.16, 1, 0.3, 1] as const;

type Tab = "upcoming" | "history" | "profile";

function StatusBadge({ status }: { status: Booking["status"] }) {
  const styles = {
    upcoming: "bg-primary/10 text-primary",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-600",
  };
  const labels = { upcoming: "Upcoming", completed: "Completed", cancelled: "Cancelled" };

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
      {status === "completed" && <CheckCircle2 className="h-3 w-3" />}
      {status === "cancelled" && <XCircle className="h-3 w-3" />}
      {status === "upcoming" && <Clock className="h-3 w-3" />}
      {labels[status]}
    </span>
  );
}

function BookingCard({ booking, onCancel }: { booking: Booking; onCancel?: (id: string) => void }) {
  const dateObj = new Date(booking.date + "T00:00:00");
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
      className="p-5 rounded-2xl border border-border bg-background hover:shadow-sm transition-shadow"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="font-semibold text-foreground text-sm">{booking.service}</h3>
          {booking.subServices.length > 0 && (
            <p className="text-xs text-muted-foreground mt-0.5">{booking.subServices.join(", ")}</p>
          )}
        </div>
        <StatusBadge status={booking.status} />
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
          <span>{booking.location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <User className="h-3.5 w-3.5 text-primary shrink-0" />
          <span>{booking.clinician || "Any Available"}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
          <span>{booking.time}</span>
        </div>
      </div>

      {booking.status === "upcoming" && onCancel && (
        <div className="mt-4 pt-3 border-t border-border flex gap-3">
          <button
            onClick={() => onCancel(booking.id)}
            className="text-xs font-medium text-destructive hover:underline"
          >
            Cancel Appointment
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default function DashboardPage() {
  const { user, isAuthenticated, logout, getBookings, cancelBooking, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("upcoming");
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    phone: user?.phone || "",
    preferredLocation: user?.preferredLocation || "langley",
  });

  if (!isAuthenticated || !user) {
    navigate("/login", { replace: true });
    return null;
  }

  const bookings = getBookings();
  const upcoming = bookings
    .filter((b) => b.status === "upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const history = bookings
    .filter((b) => b.status !== "upcoming")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handleCancel = (id: string) => {
    cancelBooking(id);
    // Force re-render by toggling tab
    setTab("upcoming");
  };

  const handleProfileSave = () => {
    updateProfile({
      firstName: profileForm.firstName,
      lastName: profileForm.lastName,
      phone: profileForm.phone,
      preferredLocation: profileForm.preferredLocation as "langley" | "kelowna" | "victoria",
    });
    setEditingProfile(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const tabs: { key: Tab; label: string; icon: typeof Calendar }[] = [
    { key: "upcoming", label: "Upcoming", icon: Calendar },
    { key: "history", label: "History", icon: History },
    { key: "profile", label: "Profile", icon: Settings },
  ];

  return (
    <>
      <Helmet>
        <title>Client Portal | Ageless Living™</title>
        <meta name="description" content="Manage your Ageless Living appointments, view your history, and update your profile." />
      </Helmet>

      <section className="pt-32 pb-24 bg-card min-h-screen">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
          >
            <div>
              <h1 className="text-2xl md:text-3xl font-medium text-foreground">
                Welcome back, {user.firstName}
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Manage your appointments and profile
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.97]"
              >
                <Plus className="h-4 w-4" />
                Book Appointment
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all active:scale-[0.97]"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-secondary rounded-2xl mb-8 max-w-md">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  tab === t.key
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
                {t.key === "upcoming" && upcoming.length > 0 && (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                    {upcoming.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-3xl">
            {/* Upcoming */}
            {tab === "upcoming" && (
              <motion.div
                key="upcoming"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {upcoming.length > 0 ? (
                  <div className="space-y-4">
                    {upcoming.map((b) => (
                      <BookingCard key={b.id} booking={b} onCancel={handleCancel} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Calendar className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No upcoming appointments</h3>
                    <p className="text-muted-foreground text-sm mb-6">Book your next visit to get started.</p>
                    <Link
                      to="/book"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.97]"
                    >
                      <Plus className="h-4 w-4" />
                      Book Now
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </motion.div>
            )}

            {/* History */}
            {tab === "history" && (
              <motion.div
                key="history"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {history.length > 0 ? (
                  <div className="space-y-4">
                    {history.map((b) => (
                      <BookingCard key={b.id} booking={b} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <History className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No appointment history</h3>
                    <p className="text-muted-foreground text-sm">Your past appointments will appear here.</p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Profile */}
            {tab === "profile" && (
              <motion.div
                key="profile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 md:p-8 rounded-2xl border border-border bg-background">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-foreground">Profile Information</h2>
                    {!editingProfile && (
                      <button
                        onClick={() => setEditingProfile(true)}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Edit
                      </button>
                    )}
                  </div>

                  {editingProfile ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                          <input
                            type="text"
                            value={profileForm.firstName}
                            onChange={(e) => setProfileForm({ ...profileForm, firstName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                          <input
                            type="text"
                            value={profileForm.lastName}
                            onChange={(e) => setProfileForm({ ...profileForm, lastName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                        <input
                          type="tel"
                          value={profileForm.phone}
                          onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Preferred Location</label>
                        <select
                          value={profileForm.preferredLocation}
                          onChange={(e) => setProfileForm({ ...profileForm, preferredLocation: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        >
                          <option value="langley">Langley</option>
                          <option value="kelowna">Kelowna</option>
                          <option value="victoria">Victoria</option>
                        </select>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={handleProfileSave}
                          className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.97]"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={() => setEditingProfile(false)}
                          className="px-6 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-1">First Name</p>
                          <p className="text-sm text-foreground font-medium">{user.firstName}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-1">Last Name</p>
                          <p className="text-sm text-foreground font-medium">{user.lastName}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Email</p>
                        <p className="text-sm text-foreground font-medium">{user.email}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Phone</p>
                        <p className="text-sm text-foreground font-medium">{user.phone}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Preferred Location</p>
                        <p className="text-sm text-foreground font-medium capitalize">{user.preferredLocation}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Member Since</p>
                        <p className="text-sm text-foreground font-medium">
                          {new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
