import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Activity,
  HeartPulse,
  Moon,
  Sparkles as Sparkle,
  Flame,
  Dumbbell,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

type Stage = {
  id: number;
  key: "baseline" | "transition" | "peak";
  label: string;
  duration: string;
  headline: string;
  description: string;
  cues: string[];
  biomarkers: Array<{
    icon: typeof Activity;
    name: string;
    delta: string;
    trend: "down" | "up";
  }>;
  // Visual styling per stage — drives the avatar tone, halo, posture.
  figure: {
    skinTone: string;          // gradient stop A
    skinTone2: string;         // gradient stop B
    haloFrom: string;
    haloTo: string;
    haloOpacity: number;
    postureTilt: number;       // degrees of slump (0 = upright)
    glowBlur: number;
  };
};

const STAGES: Stage[] = [
  {
    id: 1,
    key: "baseline",
    label: "Baseline",
    duration: "Pre-treatment",
    headline: "Where most patients start.",
    description:
      "Subclinical inflammation, hormonal dysregulation and metabolic drag are quietly shaping how you look and feel — long before any diagnosis catches it.",
    cues: [
      "Systemic puffiness, dull skin tone",
      "Suboptimal body composition",
      "Forward head, rounded shoulders",
      "Mental fog, low afternoon energy",
    ],
    biomarkers: [
      { icon: Flame, name: "Inflammation", delta: "elevated", trend: "up" },
      { icon: HeartPulse, name: "Resting HR", delta: "elevated", trend: "up" },
      { icon: Moon, name: "Deep sleep", delta: "limited", trend: "down" },
      { icon: Sparkle, name: "Skin clarity", delta: "dulled", trend: "down" },
    ],
    figure: {
      skinTone: "#C9A98F",
      skinTone2: "#9E826B",
      haloFrom: "rgba(180,170,160,0.18)",
      haloTo: "rgba(180,170,160,0)",
      haloOpacity: 0.4,
      postureTilt: 4,
      glowBlur: 0,
    },
  },
  {
    id: 2,
    key: "transition",
    label: "Transition",
    duration: "Weeks 4 — 16",
    headline: "The system is recalibrating.",
    description:
      "Hormones are rebalanced, cellular energy production lifts, inflammation drops. The visible body softens, sharpens, and starts moving like it remembers how to.",
    cues: [
      "Visible reduction in puffiness",
      "Skin tone evening out, fewer breakouts",
      "Posture lengthening, shoulders open",
      "Steadier energy, mental clarity returning",
    ],
    biomarkers: [
      { icon: Flame, name: "Inflammation", delta: "trending ↓", trend: "down" },
      { icon: HeartPulse, name: "Resting HR", delta: "improving ↓", trend: "down" },
      { icon: Moon, name: "Deep sleep", delta: "lengthening ↑", trend: "up" },
      { icon: Dumbbell, name: "Lean mass", delta: "rebuilding ↑", trend: "up" },
    ],
    figure: {
      skinTone: "#D9BFA8",
      skinTone2: "#B19377",
      haloFrom: "rgba(99,151,140,0.32)",
      haloTo: "rgba(99,151,140,0)",
      haloOpacity: 0.7,
      postureTilt: 2,
      glowBlur: 6,
    },
  },
  {
    id: 3,
    key: "peak",
    label: "Peak Vitality",
    duration: "Month 6+",
    headline: "Internal health, made visible.",
    description:
      "Optimised hormones, recovered metabolism, glowing skin. The aesthetic outcome is the side-effect — what you're really wearing is a healthier cell.",
    cues: [
      "Toned, energetic, optimised composition",
      "Clear, luminous skin with even tone",
      "Strong, confident upright posture",
      "Sharp focus, stable mood, deep sleep",
    ],
    biomarkers: [
      { icon: Flame, name: "Inflammation", delta: "well-controlled", trend: "down" },
      { icon: HeartPulse, name: "VO₂ max", delta: "strong ↑", trend: "up" },
      { icon: Moon, name: "Deep sleep", delta: "restored ↑", trend: "up" },
      { icon: Sparkle, name: "Skin elasticity", delta: "improved ↑", trend: "up" },
    ],
    figure: {
      skinTone: "#E8CDB3",
      skinTone2: "#C19F80",
      haloFrom: "rgba(229,193,98,0.32)",
      haloTo: "rgba(99,151,140,0.0)",
      haloOpacity: 1,
      postureTilt: 0,
      glowBlur: 14,
    },
  },
];

const AUTO_ADVANCE_MS = 5500;

export default function EvolutionTimeline() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const hoverRef = useRef(false);

  const stage = STAGES[active];
  const progress = useMemo(() => (active / (STAGES.length - 1)) * 100, [active]);

  // Auto-advance unless paused or user is hovering.
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      if (hoverRef.current) return;
      setActive((i) => (i + 1) % STAGES.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [playing]);

  const goPrev = () => setActive((i) => (i - 1 + STAGES.length) % STAGES.length);
  const goNext = () => setActive((i) => (i + 1) % STAGES.length);

  return (
    <section
      className="relative overflow-hidden bg-vitality-sage/40 py-20 md:py-28 lg:py-36"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      {/* Soft ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-vitality-forest/[0.05] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-vitality-blue/[0.06] blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <p className="eyebrow mb-3">
            <span className="hairline pb-2 text-xs md:text-sm">The Vitality Evolution</span>
          </p>
          <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            One person.{" "}
            <span className="italic text-vitality-forest">Three stages of</span> healthspan.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Forget cherry-picked before-and-afters of different faces. This is what
            longevity medicine actually looks like — the same body, optimised from
            the cell outward.
          </p>
        </motion.div>

        {/* Stage progress rail */}
        <div className="mx-auto mb-10 max-w-4xl">
          <div className="relative">
            {/* Track */}
            <div className="absolute left-[8.333%] right-[8.333%] top-1/2 h-px -translate-y-1/2 bg-border" />
            {/* Filled progress */}
            <motion.div
              aria-hidden
              className="absolute left-[8.333%] top-1/2 h-px -translate-y-1/2 origin-left bg-gradient-to-r from-vitality-forest via-vitality-moss to-vitality-glow"
              initial={false}
              animate={{ width: `${(progress / 100) * 83.333}%` }}
              transition={{ duration: 0.6, ease }}
            />
            {/* Stops */}
            <div className="relative grid grid-cols-3">
              {STAGES.map((s, i) => {
                const reached = i <= active;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center gap-3"
                    aria-pressed={active === i}
                    aria-label={`Show stage ${s.id}: ${s.label}`}
                  >
                    <span
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 text-xs font-semibold transition-all duration-500 md:h-14 md:w-14 md:text-sm ${
                        reached
                          ? "border-vitality-forest bg-vitality-forest text-background shadow-[0_0_0_4px_rgba(34,86,72,0.08)]"
                          : "border-border bg-background text-muted-foreground group-hover:border-vitality-forest/40"
                      }`}
                    >
                      0{s.id}
                    </span>
                    <span className="text-center">
                      <span
                        className={`block text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors md:text-xs ${
                          reached ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {s.label}
                      </span>
                      <span className="mt-1 hidden text-[10px] text-muted-foreground md:block">
                        {s.duration}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main canvas: figure (left) + copy (right) */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* ── Figure card ─────────────────────────────────────────── */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-vitality-sage to-background ring-1 ring-vitality-forest/10">
              {/* Background grid */}
              <svg
                aria-hidden
                className="absolute inset-0 h-full w-full opacity-[0.05]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="vitalityGrid"
                    width="32"
                    height="32"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 32 0 L 0 0 0 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#vitalityGrid)" />
              </svg>

              {/* Stage label chip */}
              <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-vitality-forest" />
                Stage 0{stage.id} · {stage.label}
              </div>

              {/* Duration chip */}
              <div className="absolute right-5 top-5 z-10 rounded-full bg-foreground/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-background backdrop-blur">
                {stage.duration}
              </div>

              {/* Halo glow behind figure */}
              <motion.div
                key={`halo-${stage.key}`}
                aria-hidden
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: stage.figure.haloOpacity, scale: 1 }}
                transition={{ duration: 0.9, ease }}
                className="absolute left-1/2 top-[58%] z-0 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${stage.figure.haloFrom} 0%, ${stage.figure.haloTo} 70%)`,
                  filter: `blur(${stage.figure.glowBlur}px)`,
                }}
              />

              {/* The avatar SVG */}
              <AvatarFigure stage={stage} />

              {/* Biomarker callouts — orbit the figure */}
              <BiomarkerCallouts stage={stage} />
            </div>

            {/* Controls strip */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                onClick={goPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-vitality-forest hover:text-vitality-forest md:h-11 md:w-11"
                aria-label="Previous stage"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={() => setPlaying((p) => !p)}
                className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-background transition-colors hover:bg-vitality-forest md:text-xs"
              >
                {playing ? (
                  <>
                    <Pause className="h-3 w-3" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3" /> Auto-play
                  </>
                )}
              </button>

              <button
                onClick={goNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-vitality-forest hover:text-vitality-forest md:h-11 md:w-11"
                aria-label="Next stage"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ── Copy column ─────────────────────────────────────────── */}
          <div className="lg:pl-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-vitality-forest/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-vitality-forest">
                  <Activity className="h-3 w-3" />
                  Stage 0{stage.id}
                </span>

                <h3 className="mt-5 font-display text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
                  {stage.headline}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {stage.description}
                </p>

                <ul className="mt-7 space-y-2.5">
                  {stage.cues.map((cue) => (
                    <li
                      key={cue}
                      className="flex items-start gap-3 text-sm text-foreground md:text-[15px]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vitality-forest" />
                      {cue}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/book"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-vitality-forest px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-vitality-forest-deep md:text-sm"
                  >
                    Map your baseline
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground/40 md:text-sm"
                  >
                    Inside the protocol
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Regulatory disclaimer — required for medical advertising in BC.
            Stage descriptors are qualitative, not a guarantee of outcome. */}
        <p className="mx-auto mt-12 max-w-3xl text-center text-[11px] leading-relaxed text-muted-foreground md:mt-16 md:text-xs">
          Illustrative stage descriptors based on patterns observed in our clinics.
          Individual results vary and depend on baseline health, protocol adherence and
          physician assessment. Not a treatment guarantee or substitute for personalised
          medical advice.
        </p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   Avatar — a stylised full-body silhouette that morphs across stages.
   Skin tone, posture tilt and a soft halo respond to the active stage.
   No real photography is required; this reads as a clinical diagram
   rather than a stock model, which is exactly the longevity-clinic feel.
   ════════════════════════════════════════════════════════════════════════ */
function AvatarFigure({ stage }: { stage: Stage }) {
  const gradId = `skin-${stage.key}`;
  return (
    <motion.svg
      key={stage.key}
      viewBox="0 0 240 360"
      className="absolute inset-0 z-[1] mx-auto h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stage.figure.skinTone} />
          <stop offset="100%" stopColor={stage.figure.skinTone2} />
        </linearGradient>
      </defs>

      <motion.g
        initial={false}
        animate={{ rotate: stage.figure.postureTilt }}
        transition={{ duration: 0.9, ease }}
        style={{ transformOrigin: "120px 340px" }}
      >
        {/* Head */}
        <circle cx="120" cy="62" r="28" fill={`url(#${gradId})`} />
        {/* Neck */}
        <rect x="111" y="84" width="18" height="14" rx="6" fill={`url(#${gradId})`} />
        {/* Torso — slight asymmetry at baseline (rounded shoulder),
            symmetric / lifted at peak. We morph via path. */}
        <motion.path
          initial={false}
          animate={{
            d:
              stage.key === "baseline"
                ? "M84 100 Q120 96 156 100 L162 200 Q120 214 78 200 Z"
                : stage.key === "transition"
                ? "M82 98 Q120 92 158 98 L160 202 Q120 210 80 202 Z"
                : "M80 96 Q120 88 160 96 L158 204 Q120 208 82 204 Z",
          }}
          transition={{ duration: 0.9, ease }}
          fill={`url(#${gradId})`}
        />
        {/* Arms */}
        <rect x="62" y="104" width="14" height="92" rx="7" fill={`url(#${gradId})`} />
        <rect x="164" y="104" width="14" height="92" rx="7" fill={`url(#${gradId})`} />
        {/* Legs */}
        <rect x="98" y="208" width="18" height="118" rx="9" fill={`url(#${gradId})`} />
        <rect x="124" y="208" width="18" height="118" rx="9" fill={`url(#${gradId})`} />

        {/* Peak-vitality gold rim light */}
        {stage.key === "peak" && (
          <motion.circle
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.0, ease }}
            cx="120"
            cy="62"
            r="30"
            fill="none"
            stroke="hsl(var(--vitality-glow))"
            strokeWidth="0.8"
          />
        )}
      </motion.g>
    </motion.svg>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   Biomarker callouts — small clinical chips orbiting the figure that
   communicate "this is medicine, not a med-spa." Positions are stable;
   the values + trend arrows swap with the active stage.
   ════════════════════════════════════════════════════════════════════════ */
function BiomarkerCallouts({ stage }: { stage: Stage }) {
  // Fixed slots around the avatar — top-left, top-right, bottom-left, bottom-right.
  const slots = [
    { className: "left-3 top-[22%] md:left-4" },
    { className: "right-3 top-[16%] md:right-5" },
    { className: "left-3 bottom-[18%] md:left-5" },
    { className: "right-3 bottom-[26%] md:right-4" },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[2]">
      {stage.biomarkers.map((m, i) => {
        const Icon = m.icon;
        const positive = m.trend === "up";
        return (
          <motion.div
            key={`${stage.key}-${m.name}`}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease }}
            className={`absolute ${slots[i].className} flex max-w-[150px] items-center gap-2 rounded-full bg-background/95 px-3 py-1.5 shadow-[0_8px_24px_-12px_rgba(20,40,30,0.25)] ring-1 ring-border backdrop-blur`}
          >
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                positive
                  ? "bg-vitality-forest/10 text-vitality-forest"
                  : "bg-vitality-blue/10 text-vitality-blue"
              }`}
            >
              <Icon className="h-3 w-3" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {m.name}
              </span>
              <span
                className={`text-[11px] font-semibold ${
                  positive ? "text-vitality-forest" : "text-vitality-blue"
                }`}
              >
                {m.delta}
              </span>
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
