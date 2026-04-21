/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  PLACEHOLDER ASSETS — SWAP INSTRUCTIONS
 * ═══════════════════════════════════════════════════════════════════════════
 *
 *  Every premium-redesign image / video path is defined in this single file.
 *  To replace a placeholder with a production asset later, you ONLY need to:
 *
 *    1. Drop your final file into  `public/photos/`   (or a sub-folder).
 *    2. Update the corresponding string below to point at its filename.
 *    3. Save — Vite will hot-reload it everywhere automatically.
 *
 *  For each field below, the comment shows WHERE the asset is rendered and
 *  WHAT kind of production file is expected (dimensions, orientation, etc.).
 *  Leave the `%20` URL-encoding in place — browsers need it for paths with
 *  spaces / parentheses.
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ─── Home page ─────────────────────────────────────────────────────────────
export const HERO_VIDEO_MP4 =
  "/photos/no_zoom_in_or_zoom_out_create__Kling_30__00466.mp4";
//  ↑ Full-screen hero background video on `/` (HomePage.tsx).
//    Replace with a landscape 1920×1080 (or larger) .mp4 — looping, muted,
//    ~8-20s, H.264, <15 MB. Ideally also supply a .webm version and add it
//    as a <source> in the component for better compression.

export const HERO_POSTER =
  "/photos/download%20(3).png";
//  ↑ Fallback image shown before the video loads. Swap with a still frame
//    from your hero video (same aspect ratio as the video).

// ─── Transformation avatar ────────────────────────────────────────────────
export const AVATAR_BEFORE = "/photos/download%20(3).png";
export const AVATAR_AFTER = "/photos/download%20(4).png";
//  ↑ Used inside <TransformationAvatar />. The avatar shows a portrait that
//    morphs from BEFORE → AFTER. Replace with square or 3:4 portrait images
//    (min 800×1000 px, .webp preferred, <200 KB each). Face should be
//    centered; background subtle / neutral.

// ─── Before / after comparison slider ─────────────────────────────────────
export const BEFORE_PHOTO = "/photos/download%20(3).png";
export const AFTER_PHOTO = "/photos/download%20(4).png";
//  ↑ Default before / after pair used by <BeforeAfterSlider />. For each
//    service page you can override these by passing `before=` / `after=`
//    props — see `/src/components/ServiceTransformationSection.tsx`.

/**
 *  ─── PER-SERVICE BEFORE / AFTER OVERRIDES ───────────────────────────────
 *  Add real clinical before / after photos per service here later. Each
 *  entry should be a REAL client photo (with permission) saved under
 *  `/public/photos/<service-name>/...` following the naming rule:
 *
 *      [service]-[location]-[descriptor]-before.webp
 *      [service]-[location]-[descriptor]-after.webp
 */
export const SERVICE_BEFORE_AFTER: Record<
  string,
  { before: string; after: string; altBefore?: string; altAfter?: string }
> = {
  // key = serviceSlug used by <ServiceTransformationSection />
  botox: { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  "cosmetic-dermal-filler": { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  "customized-ultrafacial": { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  "laser-ipl-bbl": { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  "perfect-derma-peel": { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  microneedling: { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  belkyra: { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  dermaplaning: { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  biohacking: { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  "hormone-balancing": { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  "health-weight": { before: BEFORE_PHOTO, after: AFTER_PHOTO },
};

/**
 *  ─── HOME PAGE · FOUR-PHASE TRANSFORMATION MEDIA ────────────────────────
 *  The home-page TransformationJourney section walks clients through the
 *  four pillars of the Ageless Living™ method. Each phase needs a
 *  before + after asset (photo OR short looping video) that visually
 *  demonstrates the result of that phase.
 *
 *  REQUIRED ASSETS (see checklist in spec.md for full naming spec)
 *    phase 1 — skin-rejuvenation-home-before.webp / -after.webp
 *    phase 2 — hormone-balancing-home-before.webp / -after.webp
 *    phase 3 — biohacking-home-before.webp        / -after.webp
 *    phase 4 — health-weight-home-before.webp     / -after.webp
 *
 *  Optionally also provide an 8-15s looping .mp4 per phase for an even
 *  more premium feel (set `video` property; both can coexist — video
 *  will be used if provided, image is fallback).
 */
export type PhaseMedia = {
  before: string;
  after: string;
  /** Optional 8-15s looping mp4 — renders in place of the after still */
  video?: string;
};

export const HOME_PHASE_MEDIA: Record<
  "skin" | "hormones" | "biohacking" | "weight",
  PhaseMedia
> = {
  skin: { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  hormones: { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  biohacking: { before: BEFORE_PHOTO, after: AFTER_PHOTO },
  weight: { before: BEFORE_PHOTO, after: AFTER_PHOTO },
};

/**
 *  ─── SERVICE PAGE · PHASED TRANSFORMATION MEDIA ─────────────────────────
 *  Every individual service page shows a 3-phase client journey:
 *    phase 1 — "Before treatment"
 *    phase 2 — "Mid-protocol" (1-2 weeks in)
 *    phase 3 — "Final result" (after full course)
 *
 *  Each phase needs one image (or short video) per service. Paths below
 *  default to the placeholder pair so every page renders during dev.
 *  Swap these one service at a time as production photography arrives.
 *
 *  Naming convention for production files:
 *      /public/photos/<service>/<service>-phase{1|2|3}.webp
 *      /public/photos/<service>/<service>-phase{1|2|3}.mp4   (optional)
 */
export type ServicePhaseMedia = {
  phase1: { src: string; video?: string; alt?: string };
  phase2: { src: string; video?: string; alt?: string };
  phase3: { src: string; video?: string; alt?: string };
};

const defaultPhaseMedia = (slug: string): ServicePhaseMedia => ({
  phase1: { src: BEFORE_PHOTO, alt: `${slug} — before treatment` },
  phase2: { src: BEFORE_PHOTO, alt: `${slug} — mid-protocol` },
  phase3: { src: AFTER_PHOTO, alt: `${slug} — final result` },
});

export const SERVICE_PHASE_MEDIA: Record<string, ServicePhaseMedia> = {
  botox: defaultPhaseMedia("botox"),
  "cosmetic-dermal-filler": defaultPhaseMedia("cosmetic-dermal-filler"),
  "customized-ultrafacial": defaultPhaseMedia("customized-ultrafacial"),
  "laser-ipl-bbl": defaultPhaseMedia("laser-ipl-bbl"),
  "perfect-derma-peel": defaultPhaseMedia("perfect-derma-peel"),
  microneedling: defaultPhaseMedia("microneedling"),
  belkyra: defaultPhaseMedia("belkyra"),
  dermaplaning: defaultPhaseMedia("dermaplaning"),
  biohacking: defaultPhaseMedia("biohacking"),
  "hormone-balancing": defaultPhaseMedia("hormone-balancing"),
  "health-weight": defaultPhaseMedia("health-weight"),
};
