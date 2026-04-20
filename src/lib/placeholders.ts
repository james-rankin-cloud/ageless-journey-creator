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
 *  Current placeholders come from the supplied  `/photos`  folder:
 *     • no_zoom_in_or_zoom_out_create__Kling_30__00466.mp4  (hero video)
 *     • download (3).png                                    (before photo)
 *     • download (4).png                                    (after photo)
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
 *
 *  Example (uncomment and swap in when ready):
 *
 *    export const SERVICE_BEFORE_AFTER = {
 *      botox: {
 *        before: "/photos/botox/botox-victoria-forehead-before.webp",
 *        after:  "/photos/botox/botox-victoria-forehead-after.webp",
 *      },
 *      ...
 *    };
 *
 *  For now every service page uses the default pair defined above so you
 *  can visually validate the slider placement; swap them in one service at
 *  a time as production photos arrive.
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
