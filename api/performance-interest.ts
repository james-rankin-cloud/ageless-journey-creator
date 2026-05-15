/**
 * Reference serverless handler for Performance Packages interest leads.
 *
 * Vercel / Next-style route handler (Request → Response). Swap the body's
 * persistence section for your real DB driver before deploy. See
 * `api/subscribe.ts` for matching examples (Supabase / Prisma / pg).
 *
 * Expected payload:
 *   {
 *     id: string;
 *     fullName: string;
 *     email: string;
 *     phone: string;
 *     package: "mens" | "womens" | "unsure";
 *     notes?: string;
 *     createdAt: string;
 *   }
 */

interface PerformanceLeadPayload {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  package: string;
  notes?: string;
  createdAt: string;
}

const VALID_PACKAGES = new Set(["mens", "womens", "unsure"]);

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string): boolean {
  // Permissive: at least 7 digits anywhere in the string.
  return (value.match(/\d/g) ?? []).length >= 7;
}

export async function POST(req: Request): Promise<Response> {
  let body: PerformanceLeadPayload;
  try {
    body = (await req.json()) as PerformanceLeadPayload;
  } catch {
    return Response.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const fullName = body.fullName?.trim();
  const email = body.email?.trim().toLowerCase();
  const phone = body.phone?.trim();
  const pkg = body.package;

  if (
    !fullName ||
    !email ||
    !phone ||
    !pkg ||
    !isValidEmail(email) ||
    !isValidPhone(phone) ||
    !VALID_PACKAGES.has(pkg)
  ) {
    return Response.json(
      {
        success: false,
        error: "All fields are required and must be valid.",
      },
      { status: 400 }
    );
  }

  // ──────────────────────────────────────────────────────────────────────
  //  REPLACE this block with your real DB driver / CRM call.
  //
  //  Supabase:
  //    const { error } = await supabase.from("performance_leads").insert({
  //      full_name: fullName,
  //      email,
  //      phone,
  //      package: pkg,
  //      notes: body.notes,
  //      created_at: body.createdAt,
  //    });
  //
  //  Or pipe to HubSpot / Mailchimp / ConvertKit via their REST APIs.
  // ──────────────────────────────────────────────────────────────────────

  return Response.json({ success: true, email, package: pkg });
}
