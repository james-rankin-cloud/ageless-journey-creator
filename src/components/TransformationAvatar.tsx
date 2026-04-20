import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, TrendingUp, Zap, Heart } from "lucide-react";
import { AVATAR_BEFORE, AVATAR_AFTER } from "@/lib/placeholders";

/**
 *  <TransformationAvatar />
 *  ------------------------------------------------------------------
 *  A premium, interactive anti-aging visualization used on the home
 *  page and (in specialised variants) on every service page.
 *
 *  The component renders a portrait avatar inside a glassmorphic
 *  panel with:
 *    • an orbiting accent ring
 *    • a scanning diagnostic beam
 *    • pin-point annotations keyed to the chosen `variant`
 *    • animated metric chips
 *    • a BEFORE ↔ AFTER toggle that cross-fades the two portraits
 *
 *  USAGE
 *    <TransformationAvatar variant="home" />                // default
 *    <TransformationAvatar variant="botox" accent="rose" /> // per-page
 *
 *  SWAPPING THE IMAGES
 *    The default BEFORE / AFTER portraits live in
 *      `src/lib/placeholders.ts`  →  AVATAR_BEFORE, AVATAR_AFTER
 *    Swap those paths once you have production clinical photos.
 *    You can also override per-instance via the `before` / `after`
 *    props below.
 */

const ease = [0.16, 1, 0.3, 1] as const;

export type AvatarVariant =
  | "home"
  | "botox"
  | "filler"
  | "ultrafacial"
  | "laser"
  | "peel"
  | "microneedling"
  | "belkyra"
  | "dermaplaning"
  | "biohacking"
  | "hormone"
  | "weight";

type Annotation = {
  /** Position on the portrait, as % of container (0-100) */
  x: number;
  y: number;
  label: string;
  delta: string;
};

type Metric = {
  icon: typeof Sparkles;
  label: string;
  value: string;
};

type VariantConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  accentClass: string; // tailwind class (text-* or bg-*)
  annotations: Annotation[];
  metrics: Metric[];
};

const VARIANTS: Record<AvatarVariant, VariantConfig> = {
  home: {
    eyebrow: "Visualise the Ageless™ Effect",
    title: "Your transformation, quantified",
    subtitle:
      "A living map of your care plan — every treatment targets a measurable signal of vitality.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 32, y: 28, label: "Forehead smoothing", delta: "−42%" },
      { x: 70, y: 34, label: "Under-eye brightness", delta: "+31%" },
      { x: 50, y: 58, label: "Cheek volume", delta: "+18%" },
      { x: 36, y: 74, label: "Jawline definition", delta: "+26%" },
    ],
    metrics: [
      { icon: Sparkles, label: "Collagen", value: "+34%" },
      { icon: TrendingUp, label: "Firmness", value: "+28%" },
      { icon: Heart, label: "Hydration", value: "+41%" },
      { icon: Zap, label: "Energy", value: "+22%" },
    ],
  },
  botox: {
    eyebrow: "Neuromodulator Mapping",
    title: "See your expression, softened",
    subtitle:
      "Our injectors map every dynamic line before you ever hold a mirror.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 46, y: 22, label: "Forehead", delta: "−38%" },
      { x: 48, y: 30, label: "Glabella", delta: "−52%" },
      { x: 24, y: 34, label: "Crow's feet", delta: "−45%" },
      { x: 74, y: 34, label: "Crow's feet", delta: "−45%" },
    ],
    metrics: [
      { icon: Sparkles, label: "Line depth", value: "−46%" },
      { icon: TrendingUp, label: "Smoothness", value: "+51%" },
      { icon: Heart, label: "Natural look", value: "100%" },
    ],
  },
  filler: {
    eyebrow: "Volumetric Contour Map",
    title: "Restore the architecture of youth",
    subtitle:
      "Strategic filler returns the lost contour that frames a youthful face.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 50, y: 44, label: "Cheeks", delta: "+22%" },
      { x: 50, y: 62, label: "Lips", delta: "+15%" },
      { x: 50, y: 80, label: "Chin", delta: "+18%" },
      { x: 28, y: 70, label: "Jawline", delta: "+26%" },
    ],
    metrics: [
      { icon: TrendingUp, label: "Volume", value: "+24%" },
      { icon: Sparkles, label: "Symmetry", value: "+19%" },
      { icon: Heart, label: "Confidence", value: "+48%" },
    ],
  },
  ultrafacial: {
    eyebrow: "Skin Signal Analysis",
    title: "A diagnostic-led facial",
    subtitle:
      "Every step is tuned to what your skin is telling us — live, in real time.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 50, y: 22, label: "Texture", delta: "+34%" },
      { x: 30, y: 50, label: "Pores", delta: "−41%" },
      { x: 70, y: 50, label: "Tone", delta: "+28%" },
      { x: 50, y: 72, label: "Hydration", delta: "+52%" },
    ],
    metrics: [
      { icon: Sparkles, label: "Radiance", value: "+38%" },
      { icon: Heart, label: "Hydration", value: "+52%" },
      { icon: TrendingUp, label: "Texture", value: "+34%" },
    ],
  },
  laser: {
    eyebrow: "Photothermal Map",
    title: "Target. Clear. Reveal.",
    subtitle:
      "Wavelength-specific light erases pigment, redness and sun damage.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 30, y: 36, label: "Sun spots", delta: "−62%" },
      { x: 70, y: 36, label: "Sun spots", delta: "−62%" },
      { x: 50, y: 54, label: "Redness", delta: "−48%" },
      { x: 50, y: 76, label: "Tone", delta: "+32%" },
    ],
    metrics: [
      { icon: Sparkles, label: "Clarity", value: "+44%" },
      { icon: TrendingUp, label: "Even tone", value: "+37%" },
      { icon: Zap, label: "Downtime", value: "Low" },
    ],
  },
  peel: {
    eyebrow: "Cellular Renewal",
    title: "Reset your skin at the source",
    subtitle:
      "A medical-grade peel turns over the top layers so fresh skin can speak.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 32, y: 40, label: "Acne scars", delta: "−36%" },
      { x: 68, y: 40, label: "Melasma", delta: "−44%" },
      { x: 50, y: 60, label: "Texture", delta: "+42%" },
      { x: 50, y: 78, label: "Glow", delta: "+58%" },
    ],
    metrics: [
      { icon: Sparkles, label: "Glow", value: "+58%" },
      { icon: TrendingUp, label: "Evenness", value: "+42%" },
      { icon: Heart, label: "Confidence", value: "+47%" },
    ],
  },
  microneedling: {
    eyebrow: "Collagen Induction",
    title: "Rebuild from beneath",
    subtitle:
      "Micro-channels trigger your own collagen to remodel the dermis.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 50, y: 30, label: "Fine lines", delta: "−39%" },
      { x: 28, y: 52, label: "Pores", delta: "−44%" },
      { x: 72, y: 52, label: "Scars", delta: "−31%" },
      { x: 50, y: 74, label: "Firmness", delta: "+35%" },
    ],
    metrics: [
      { icon: Sparkles, label: "Collagen", value: "+46%" },
      { icon: TrendingUp, label: "Firmness", value: "+35%" },
      { icon: Heart, label: "Texture", value: "+41%" },
    ],
  },
  belkyra: {
    eyebrow: "Submental Contour",
    title: "Redefine the jaw-to-neck line",
    subtitle:
      "Permanent reduction of the submental fat pocket, no surgery.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 50, y: 66, label: "Submental fat", delta: "−48%" },
      { x: 32, y: 70, label: "Jawline", delta: "+29%" },
      { x: 68, y: 70, label: "Jawline", delta: "+29%" },
      { x: 50, y: 82, label: "Profile", delta: "+34%" },
    ],
    metrics: [
      { icon: TrendingUp, label: "Definition", value: "+34%" },
      { icon: Sparkles, label: "Profile", value: "+41%" },
      { icon: Heart, label: "Permanent", value: "Yes" },
    ],
  },
  dermaplaning: {
    eyebrow: "Surface Refinement",
    title: "Instant luminosity",
    subtitle:
      "Gentle exfoliation leaves skin silky, bright and flawlessly smooth.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 30, y: 36, label: "Peach fuzz", delta: "−100%" },
      { x: 70, y: 36, label: "Dead cells", delta: "−92%" },
      { x: 50, y: 56, label: "Softness", delta: "+48%" },
      { x: 50, y: 76, label: "Glow", delta: "+54%" },
    ],
    metrics: [
      { icon: Sparkles, label: "Smoothness", value: "+48%" },
      { icon: TrendingUp, label: "Glow", value: "+54%" },
      { icon: Zap, label: "Downtime", value: "None" },
    ],
  },
  biohacking: {
    eyebrow: "Cellular Performance",
    title: "Peak mind, peak body",
    subtitle:
      "NAD+, red light, HBOT and IV therapies recalibrate you at the cellular level.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 50, y: 20, label: "Cognition", delta: "+31%" },
      { x: 30, y: 46, label: "Energy", delta: "+44%" },
      { x: 70, y: 46, label: "Recovery", delta: "+38%" },
      { x: 50, y: 74, label: "Sleep", delta: "+29%" },
    ],
    metrics: [
      { icon: Zap, label: "Energy", value: "+44%" },
      { icon: TrendingUp, label: "Focus", value: "+31%" },
      { icon: Heart, label: "Recovery", value: "+38%" },
    ],
  },
  hormone: {
    eyebrow: "Endocrine Signal Map",
    title: "Balance, restored",
    subtitle:
      "Bio-identical protocols return hormones to their optimal set-points.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 50, y: 22, label: "Mood", delta: "+38%" },
      { x: 30, y: 46, label: "Energy", delta: "+45%" },
      { x: 70, y: 46, label: "Libido", delta: "+42%" },
      { x: 50, y: 72, label: "Sleep", delta: "+34%" },
    ],
    metrics: [
      { icon: Heart, label: "Mood", value: "+38%" },
      { icon: Zap, label: "Energy", value: "+45%" },
      { icon: Sparkles, label: "Clarity", value: "+33%" },
    ],
  },
  weight: {
    eyebrow: "Metabolic Reset",
    title: "A body that works with you",
    subtitle:
      "GLP-1 support, metabolic testing and nutrition — supervised every step.",
    accentClass: "text-clinic-teal",
    annotations: [
      { x: 50, y: 30, label: "Appetite", delta: "−42%" },
      { x: 50, y: 52, label: "Metabolism", delta: "+28%" },
      { x: 30, y: 70, label: "Body fat", delta: "−18%" },
      { x: 70, y: 70, label: "Lean mass", delta: "+9%" },
    ],
    metrics: [
      { icon: TrendingUp, label: "Metabolism", value: "+28%" },
      { icon: Heart, label: "Energy", value: "+31%" },
      { icon: Sparkles, label: "Confidence", value: "+46%" },
    ],
  },
};

type Props = {
  variant?: AvatarVariant;
  before?: string;
  after?: string;
  className?: string;
  /** If true renders a compact, right-hand-rail version used inside service pages. */
  compact?: boolean;
};

export default function TransformationAvatar({
  variant = "home",
  before = AVATAR_BEFORE,
  after = AVATAR_AFTER,
  className = "",
  compact = false,
}: Props) {
  const cfg = VARIANTS[variant];
  const [showAfter, setShowAfter] = useState(false);
  const [annotationIdx, setAnnotationIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Auto-cycle annotations
  useEffect(() => {
    const t = setInterval(
      () => setAnnotationIdx((i) => (i + 1) % cfg.annotations.length),
      2400
    );
    return () => clearInterval(t);
  }, [cfg.annotations.length]);

  // Auto-toggle before/after periodically for demo effect
  useEffect(() => {
    const t = setInterval(() => setShowAfter((v) => !v), 4800);
    return () => clearInterval(t);
  }, []);

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      {/* ─── Glass panel wrapper ──────────────────────────────────── */}
      <div
        className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-clinic-teal-light/40 to-white border border-clinic-teal/10 shadow-[0_30px_80px_-20px_rgba(15,60,74,0.18)] ${
          compact ? "p-5 md:p-6" : "p-6 md:p-10"
        }`}
      >
        {/* Soft ambient glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-clinic-teal/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 w-80 h-80 bg-clinic-teal/10 rounded-full blur-3xl" />

        {/* Header */}
        {!compact && (
          <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 md:mb-8">
            <div>
              <p className="eyebrow mb-2">
                <span className="hairline pb-2 text-[10px] md:text-xs">
                  {cfg.eyebrow}
                </span>
              </p>
              <h3 className="font-display text-2xl md:text-3xl tracking-tight text-foreground leading-[1.15] max-w-sm">
                {cfg.title}
              </h3>
            </div>
            <button
              onClick={() => setShowAfter((v) => !v)}
              className="self-start inline-flex items-center gap-2 rounded-full border border-clinic-teal/25 bg-white/70 backdrop-blur px-4 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-clinic-teal hover:bg-clinic-teal hover:text-white transition-all"
              aria-label="Toggle before after"
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  showAfter ? "bg-clinic-teal" : "bg-muted-foreground/50"
                }`}
              />
              {showAfter ? "After" : "Before"}
            </button>
          </div>
        )}

        {/* Main grid */}
        <div
          className={`relative grid gap-6 md:gap-8 ${
            compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-[1.1fr_1fr]"
          }`}
        >
          {/* ─── Portrait stage ──────────────────────────────────── */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            {/* Orbit rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-clinic-teal/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border border-dashed border-clinic-teal/15"
              animate={{ rotate: -360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            />

            {/* Portrait */}
            <div className="absolute inset-6 rounded-full overflow-hidden ring-1 ring-clinic-teal/20 bg-clinic-teal-light">
              <AnimatePresence mode="sync">
                <motion.img
                  key={showAfter ? "after" : "before"}
                  src={showAfter ? after : before}
                  alt={
                    showAfter
                      ? "After treatment — radiant, refreshed skin"
                      : "Before treatment — consultation portrait"
                  }
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.7, ease }}
                />
              </AnimatePresence>

              {/* Scan beam */}
              <motion.div
                aria-hidden
                className="absolute inset-x-0 h-[22%] bg-gradient-to-b from-transparent via-clinic-teal/40 to-transparent"
                initial={{ top: "-20%" }}
                animate={{ top: ["-20%", "120%"] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Pin annotations */}
            {cfg.annotations.map((a, i) => (
              <Pin
                key={`${a.label}-${i}`}
                x={a.x}
                y={a.y}
                label={a.label}
                delta={a.delta}
                active={i === annotationIdx}
              />
            ))}

            {/* Orbit dot */}
            <motion.span
              aria-hidden
              className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-clinic-teal shadow-[0_0_0_6px_rgba(90,170,180,0.18)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "50% 100%" }}
            />
          </div>

          {/* ─── Right: metrics + subtitle ────────────────────────── */}
          <div className="relative flex flex-col justify-center gap-4 md:gap-5">
            {!compact && (
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">
                {cfg.subtitle}
              </p>
            )}

            <div className="grid grid-cols-2 gap-2.5 md:gap-3">
              {cfg.metrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur border border-foreground/5 p-3 md:p-4"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-clinic-teal-light">
                        <Icon className="h-3.5 w-3.5 text-clinic-teal" />
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {m.label}
                      </span>
                    </div>
                    <p className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground">
                      {m.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {compact && (
              <button
                onClick={() => setShowAfter((v) => !v)}
                className="self-start inline-flex items-center gap-2 rounded-full border border-clinic-teal/25 bg-white/70 backdrop-blur px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-clinic-teal hover:bg-clinic-teal hover:text-white transition-all"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    showAfter ? "bg-clinic-teal" : "bg-muted-foreground/50"
                  }`}
                />
                {showAfter ? "After" : "Before"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Pin annotation ─────────────────────────────────────────────────────
function Pin({
  x,
  y,
  label,
  delta,
  active,
}: {
  x: number;
  y: number;
  label: string;
  delta: string;
  active: boolean;
}) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <motion.div
        animate={{ scale: active ? 1.1 : 0.9, opacity: active ? 1 : 0.55 }}
        transition={{ duration: 0.4, ease }}
        className="relative -translate-x-1/2 -translate-y-1/2"
      >
        {/* Outer ping */}
        <motion.span
          className="absolute inset-0 rounded-full bg-clinic-teal/30"
          animate={
            active
              ? { scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }
              : { scale: 1, opacity: 0 }
          }
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        {/* Core dot */}
        <span className="relative block h-2.5 w-2.5 rounded-full bg-clinic-teal ring-2 ring-white shadow-md" />
        {/* Label */}
        <motion.span
          animate={{
            opacity: active ? 1 : 0,
            y: active ? 0 : 4,
          }}
          transition={{ duration: 0.3, ease }}
          className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground text-white text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 shadow-lg"
        >
          {label}
          <span className="ml-1.5 text-clinic-teal-light">{delta}</span>
        </motion.span>
      </motion.div>
    </div>
  );
}
