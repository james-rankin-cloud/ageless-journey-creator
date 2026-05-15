/**
 * Performance Packages — lead capture (athletic / fitness clientele).
 *
 * Mirrors the newsletter persistence pattern: best-effort POST to
 * `/api/performance-interest`, with a localStorage fallback so the form is
 * fully wired during dev / preview. A reference Vercel-style handler lives
 * at `api/performance-interest.ts`.
 */

export type PerformancePackageId = "mens" | "womens" | "unsure";

export interface PerformanceLead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  package: PerformancePackageId;
  notes?: string;
  createdAt: string;
}

const STORAGE_KEY = "ageless_performance_leads";

function getLocal(): PerformanceLead[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveLocal(list: PerformanceLead[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export interface PerformanceLeadResult {
  success: boolean;
  error?: string;
  lead?: PerformanceLead;
}

export async function savePerformanceLead(input: {
  fullName: string;
  email: string;
  phone: string;
  package: PerformancePackageId;
  notes?: string;
}): Promise<PerformanceLeadResult> {
  const lead: PerformanceLead = {
    id: generateId(),
    fullName: input.fullName.trim(),
    email: input.email.trim().toLowerCase(),
    phone: input.phone.trim(),
    package: input.package,
    notes: input.notes?.trim() || undefined,
    createdAt: new Date().toISOString(),
  };

  try {
    await fetch("/api/performance-interest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
  } catch {
    // Fall through to local persistence.
  }

  const existing = getLocal();
  saveLocal([...existing, lead]);
  return { success: true, lead };
}

export function listPerformanceLeads(): PerformanceLead[] {
  return getLocal();
}
