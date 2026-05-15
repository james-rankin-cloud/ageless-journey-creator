/**
 * Newsletter subscriber capture.
 *
 * Production wire-up:
 *   Replace the body of `saveSubscriber()` with a `fetch("/api/subscribe", …)`
 *   call against your server route or a serverless function (e.g. Vercel,
 *   Netlify, Supabase, AWS Lambda) that persists to the production database
 *   of choice. A reference Vercel-style handler is included in
 *   `api/subscribe.ts` at the repo root.
 *
 *   For now this keeps a local-storage fallback so the UI is fully wired
 *   during dev / demo, and gracefully degrades if the API is offline.
 */

export interface Subscriber {
  id: string;
  name: string;
  email: string;
  source: "newsletter" | "promo";
  createdAt: string;
}

const STORAGE_KEY = "ageless_subscribers";

function getLocal(): Subscriber[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveLocal(list: Subscriber[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export interface SubscribeResult {
  success: boolean;
  error?: string;
  subscriber?: Subscriber;
}

export async function saveSubscriber(input: {
  name: string;
  email: string;
  source?: Subscriber["source"];
}): Promise<SubscribeResult> {
  const subscriber: Subscriber = {
    id: generateId(),
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    source: input.source ?? "newsletter",
    createdAt: new Date().toISOString(),
  };

  // Best-effort POST to the server endpoint (no-op if unavailable in dev).
  try {
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscriber),
    });
  } catch {
    // Swallow network errors — fall through to local persistence so the
    // form still feels responsive during development / preview builds.
  }

  const existing = getLocal();
  if (existing.some((s) => s.email === subscriber.email)) {
    return { success: false, error: "This email is already on our list." };
  }
  saveLocal([...existing, subscriber]);
  return { success: true, subscriber };
}

export function listSubscribers(): Subscriber[] {
  return getLocal();
}
