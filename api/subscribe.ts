/**
 * Reference serverless handler for newsletter subscribers.
 *
 * This file is shaped for Vercel / Next-style route handlers (Request →
 * Response). Swap the body's persistence section for your real database
 * driver — examples below assume `process.env.DATABASE_URL`.
 *
 * Expected payload:
 *   { id: string; name: string; email: string; source: string; createdAt: string }
 *
 * If you deploy to a different host (Netlify Functions, AWS Lambda,
 * Cloudflare Workers, Supabase Edge Functions), copy the validation block
 * and adapt the request/response signature.
 */

interface SubscriberPayload {
  id: string;
  name: string;
  email: string;
  source: string;
  createdAt: string;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request): Promise<Response> {
  let body: SubscriberPayload;
  try {
    body = (await req.json()) as SubscriberPayload;
  } catch {
    return Response.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();

  if (!name || !email || !isValidEmail(email)) {
    return Response.json(
      { success: false, error: "Name and a valid email are required." },
      { status: 400 }
    );
  }

  // ──────────────────────────────────────────────────────────────────────
  //  REPLACE this block with your real DB driver. Examples:
  //
  //  Supabase:
  //    const { error } = await supabase
  //      .from("subscribers")
  //      .insert({ name, email, source: body.source, created_at: body.createdAt });
  //
  //  Prisma:
  //    await prisma.subscriber.create({
  //      data: { name, email, source: body.source, createdAt: body.createdAt },
  //    });
  //
  //  Postgres (node-postgres):
  //    await pool.query(
  //      "INSERT INTO subscribers (name, email, source, created_at) VALUES ($1,$2,$3,$4) ON CONFLICT (email) DO NOTHING",
  //      [name, email, body.source, body.createdAt],
  //    );
  // ──────────────────────────────────────────────────────────────────────

  return Response.json({ success: true, email });
}
