# Ageless Living™ — Production Launch & Growth Plan

This document captures **what still needs to happen** to take the site from a polished marketing build to a production-grade booking, SEO-optimised, secure platform. It picks up where the current polish pass stops.

Tracking branch: `claude/polish-ageless-living-site-NSzq5`.

---

## 1. Executive summary

The site is a well-structured React 18 / Vite / Tailwind / shadcn/ui build. Content, component library, routing and visual design are in good shape. The three highest-leverage remaining workstreams are:

1. **Real booking backend** (auth, availability, confirmations) — currently frontend-only.
2. **Image QA & replacement** — any remaining AI-generated imagery must be swapped for real, compressed, WebP clinic photography.
3. **Local SEO dominance** — Google Business Profile, city-specific landing pages, content cadence and structured data finish.

---

## 2. Booking system — what's left to build

### Current state
- `BookNowPage.tsx` provides a clean multi-step UI (location → service → clinician → date → time → confirm).
- Auth lives in `src/lib/auth.tsx` and is **client-only**, persisted to `localStorage`. Not secure for real accounts.
- Time slots are generated deterministically by `generateSlots(day)` — they are **not** real availability.
- "Confirmation" only mutates local state. No email, no database row, no calendar push.

### Target architecture (recommended: Supabase)

| Concern | Recommendation |
| --- | --- |
| Database & auth | **Supabase** — Postgres + Row Level Security + email/password + Google & Apple OAuth |
| Availability source of truth | Either (a) integrate with **Jane App API** (clinic already uses Jane App) or (b) clinician schedule + Supabase `bookings` table with unique slot constraint |
| Booking confirmations | **Resend** or **Postmark** transactional email; optional Twilio SMS |
| Calendar sync | Google Calendar API push for each clinician |
| Rate limiting | Supabase Edge Functions + upstash Redis; per-IP + per-account limits on `POST /bookings` |
| Validation | Re-use the existing Zod schemas on the edge function before writes |
| Secrets | `.env.local` + Vercel/Netlify env; never commit |

### Data model (minimum)

```sql
create table profiles (
  id uuid primary key references auth.users on delete cascade,
  first_name text,
  last_name text,
  phone text,
  preferred_location text,
  created_at timestamptz default now()
);

create table clinicians (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  specialty text,
  location text check (location in ('langley','kelowna','victoria')),
  avatar_url text
);

create table availability (
  id uuid primary key default gen_random_uuid(),
  clinician_id uuid references clinicians,
  day_of_week smallint check (day_of_week between 0 and 6),
  start_time time,
  end_time time,
  slot_minutes smallint default 30
);

create table bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade,
  clinician_id uuid references clinicians,
  location text,
  main_service text not null,
  sub_services text[] default '{}',
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text check (status in ('pending','confirmed','cancelled','completed')) default 'pending',
  created_at timestamptz default now(),
  unique (clinician_id, starts_at)
);
```

### Implementation checklist

- [ ] Create Supabase project; copy `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` into `.env`.
- [ ] Replace `src/lib/auth.tsx` with a Supabase `AuthProvider` (email/password + Google + Apple).
- [ ] Add `src/lib/supabase.ts` singleton.
- [ ] Build `/api/availability?clinician=&date=` Supabase Edge Function returning open slots.
- [ ] Wire `BookNowPage` `generateSlots()` to that endpoint; remove deterministic mock.
- [ ] On confirm: `supabase.from('bookings').insert(...)` → trigger → Resend email.
- [ ] Add RLS: users can `select/insert` their own bookings; clinicians can read theirs.
- [ ] Add a `/dashboard` query to the real `bookings` table.
- [ ] Add server-side rate limiting on the booking endpoint (3/min per user, 10/day per IP).

### Effort estimate
~4–6 engineering days for a proficient full-stack dev. Worth doing before launch; until then keep the Jane App link as the authoritative booking path.

---

## 3. SEO plan (local-first, wellness)

Victoria / Langley / Kelowna are the three target markets.

### On-page (do these next)
- [ ] Swap placeholder OG image (`pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev`) for a branded 1200×630 WebP hosted on `/og/default.webp` and per-city variants.
- [ ] Unique `<title>` and `meta description` per route, within 55/155 chars.
- [ ] `MedicalClinic` schema on each `/locations/*` page, including `openingHours`, `telephone`, `geo` coordinates, `priceRange`, `sameAs`.
- [ ] FAQPage schema on `/faqs` (it's already a perfect candidate).
- [ ] Article schema on every blog post.
- [ ] BreadcrumbList schema on service + location pages.
- [ ] H1 audit: exactly one `<h1>` per page.
- [ ] Alt text audit: every `<img>` has descriptive alt including location/service keyword.
- [ ] Internal linking: each service page cross-links to the two most-related services and all three location pages.

### Technical SEO
- [x] `sitemap.xml` at `/sitemap.xml` (added in this pass).
- [x] `robots.txt` blocks private routes (`/dashboard`, `/login`, `/signup`).
- [ ] Submit sitemap in **Google Search Console** + **Bing Webmaster Tools**.
- [ ] Register and **verify** Google Business Profile for all three clinics.
- [ ] Convert remaining JPG/PNG assets to **WebP** (target <150 KB each). Use `sharp` or `squoosh`.
- [ ] Set explicit `width` / `height` on every `<img>` to stabilise CLS.
- [ ] Add `fetchpriority="high"` to the hero video poster/image on the homepage.
- [ ] Serve with `Cache-Control: public, max-age=31536000, immutable` for hashed assets (configure at hosting layer — Vercel/Netlify/Cloudflare).
- [ ] Enable Brotli compression at the edge.

### Content cadence
- Target 1 new 1500-word blog per month per pillar (Skin, Hormones, Biohacking, Weight).
- Internal link to relevant service page within first 150 words.
- Add city-mention paragraph (“…our Victoria clinic on Hillside Ave…”) to 3–5 evergreen posts.

### Local SEO tactics
- Encourage reviews: after each confirmed booking, transactional email with a direct GBP review link per location.
- NAP (Name / Address / Phone) consistency across every directory (Yelp, Healthgrades, RateMDs, Facebook).
- City-specific landing pages already exist — extend each with a testimonial from a local patient, 3 “Near me” neighborhoods, and an FAQ specific to that clinic.

---

## 4. Performance / Core Web Vitals

Target: **95+ Lighthouse Mobile** for all top pages.

### Done in this pass
- [x] Route-aware chunk splitting (`react-vendor`, `ui-vendor`, `query-vendor`, `form-vendor`).
- [x] `preconnect` / `dns-prefetch` for own asset origin + Jane App.
- [x] Skip-to-content link for keyboard users.
- [x] Security headers in dev + `<meta>` fallbacks.

### Remaining
- [ ] **Images to WebP + correct sizing** (biggest single win). Most `.jpg` are 500 KB–1.5 MB; target <150 KB.
- [ ] Replace homepage `autoPlay` video (`human_graphic.webm`) with `poster="/hero-poster.webp"` and `preload="metadata"`, and lazy-mount it with `loading="lazy"` on below-the-fold.
- [ ] Add `decoding="async"` to every `<img>` that isn't LCP.
- [ ] Defer `framer-motion` for below-the-fold sections by dynamic import where appropriate.
- [ ] Audit `lucide-react` — import icons individually (already done) and ensure tree-shaking.
- [ ] Add a service worker (Workbox) for offline logo + last-visited content. Nice-to-have.
- [ ] Run Lighthouse CI on `dev` branch; set a budget file.

---

## 5. Security

### In-place after this pass
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Permissions-Policy` denies camera/mic/geolocation
- `/dashboard`, `/login`, `/signup` disallowed for crawlers

### Must add before launch
- [ ] **Content-Security-Policy** at the hosting edge (Vercel `vercel.json` or Netlify `_headers`). Starter:
  ```
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https: blob:;
  media-src 'self' https:;
  connect-src 'self' https://*.supabase.co https://ageless.janeapp.com;
  frame-src https://ageless.janeapp.com;
  font-src 'self' data:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
  ```
- [ ] Strict-Transport-Security: `max-age=63072000; includeSubDomains; preload`.
- [ ] Rate-limit the booking + contact endpoints (when backend lands).
- [ ] Turnstile / hCaptcha on contact + signup to block spam.
- [ ] Rotate any secret that has been in a `.env.example` or public commit.
- [ ] Dependency scanning (GitHub Dependabot already works; enable on push).

---

## 6. Accessibility

- [x] Skip-to-content link (added).
- [x] ChatBot has `aria-label`, `aria-expanded`, labelled input.
- [x] Booking progress bar has `role="progressbar"` + aria values.
- [ ] Contrast pass: audit every teal-on-white CTA at 4.5:1 minimum.
- [ ] Keyboard-only walkthrough of entire booking flow.
- [ ] `prefers-reduced-motion` honoured — wrap Framer Motion animations in a guard.
- [ ] Form fields: every `<input>` pairs with `<label>` (FAQ/Contact audit).
- [ ] Heading hierarchy: no skipped levels (h1 → h2 → h3).

---

## 7. Imagery

### Immediate action required
A manual review of every image in `public/` and `src/assets/` is needed to identify and remove any AI-generated photography. Without visual inspection I cannot reliably flag which files are generated. Recommended process:

1. Export every image at thumbnail scale into a grid (e.g., a Figma board).
2. Flag any with: plastic skin, inconsistent anatomy, nonsensical backgrounds, artefact jewelry/hands, unnatural hair detail.
3. Replace with:
   - **Real clinic photography** (preferred) — schedule a half-day shoot at each clinic.
   - **High-end stock** — Stocksy, Death to Stock, Getty. Avoid Shutterstock wellness stereotypes.

### Image pipeline
- Source at 2560×1707 WebP.
- Derive `@1x`, `@2x` via `<picture>` + `srcset`.
- Compress with `cwebp -q 80`.
- Filename pattern (per `CLAUDE.md`): `[service]-[location]-[descriptor].webp` — e.g. `microneedling-victoria-treatment-room.webp`.
- Alt text formula: `{service/subject} at Ageless Living {location}` — include the keyword once, naturally.

---

## 8. Analytics, trust & conversion

- [ ] Google Analytics 4 via GTM (respect CSP above).
- [ ] Consent banner with Cookiebot or Klaro (PIPEDA-aware; BC/Canadian audience).
- [ ] Meta/Facebook Pixel + LinkedIn Insight Tag (ad retargeting).
- [ ] Microsoft Clarity (free heat-maps / session recording).
- [ ] Trust bar under hero: "Physician-led · 10+ years in BC · 4.9★ / 287 reviews" — already done, keep.
- [ ] Add real patient video testimonials to `/locations/*` pages.
- [ ] Add a sticky mobile "Book now" CTA on service pages (header already has it but below-the-fold sticky works well on mobile).

---

## 9. Legal / compliance (before launching booking)

- [ ] Privacy Policy (PIPEDA + BC PIPA compliant).
- [ ] Terms of Service.
- [ ] Medical disclaimer on every service page footer.
- [ ] Cookie banner (see analytics section).
- [ ] GDPR export + delete flow for `/dashboard`.
- [ ] PHIPA / provincial health information handling review with a BC lawyer if storing medical intake.

---

## 10. Launch runbook

1. Migrate to Supabase; wire real auth + bookings.
2. Image sweep → WebP → deploy.
3. CSP / HSTS at hosting edge.
4. GA4 + GBP + Search Console verify.
5. Run Lighthouse CI on `main`; fix until 95+ mobile.
6. Soft-launch to existing list; collect 30 bookings; iterate.
7. Paid local ads (Meta + Google local service ads) turned on 2 weeks post-launch.

---

## 11. What was changed in this pass

- Removed "Help me create my Ageless Living Journey" section from `HomePage.tsx`; deleted `JourneyCTA.tsx`.
- Rewrote `ChatBot.tsx`: moved to bottom-left, expanded knowledge base (17 intent clusters), added proper `aria-*`, mounted globally via `Layout.tsx`, pill CTA on desktop / icon on mobile.
- Added skip-to-main-content link.
- Fixed `BookNowPage` type bugs (`null` vs `undefined`), removed dead constants, added compact mobile step indicator, made "Confirm Booking" button full-width on mobile, added `role="progressbar"` and aria values.
- Replaced `index.html` with full meta (OG, Twitter, viewport, theme-color, robots, geo, canonical, security headers, preconnect, Organisation JSON-LD, `<noscript>` fallback, `apple-touch-icon`, webmanifest).
- Added `/public/sitemap.xml` (32 URLs, matching real routes).
- Added `/public/site.webmanifest`.
- Tightened `/public/robots.txt` — still allows indexing but blocks `/dashboard`, `/login`, `/signup`, points to sitemap.
- Added `vite.config.ts` build-time chunk splitting and dev-server security headers.
- Deleted unused `FloatingBookNow.tsx`.

Note: **`ruff` and `vulture` are Python tools** and do not apply to this TypeScript project. The equivalent is `npm run lint` (ESLint), which was used instead.
