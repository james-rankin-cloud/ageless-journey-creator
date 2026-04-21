import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import TransformationAvatar, {
  type AvatarVariant,
} from "@/components/TransformationAvatar";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  SERVICE_BEFORE_AFTER,
  SERVICE_PHASE_MEDIA,
  type ServicePhaseMedia,
} from "@/lib/placeholders";

/**
 *  <ServiceTransformationSection />
 *  ------------------------------------------------------------------
 *  Displays the three-phase client journey for an individual service
 *  page (Before → Mid-Protocol → Final Result) plus a real
 *  before/after comparison slider and the TransformationAvatar map.
 *
 *  Per-service media is sourced from `SERVICE_PHASE_MEDIA` and
 *  `SERVICE_BEFORE_AFTER` in `src/lib/placeholders.ts` — every service
 *  page renders this component, no per-page prop wiring needed.
 */

const ease = [0.16, 1, 0.3, 1] as const;

type Props = {
  variant: AvatarVariant;
  /** Must match a key in SERVICE_PHASE_MEDIA / SERVICE_BEFORE_AFTER */
  serviceSlug: string;
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  /** Optional per-phase copy overrides — sensible defaults exist */
  phases?: [
    { label: string; caption: string },
    { label: string; caption: string },
    { label: string; caption: string }
  ];
};

const DEFAULT_PHASES: Props["phases"] = [
  { label: "Before Treatment", caption: "Your starting point — captured at your initial consultation." },
  { label: "Mid-Protocol", caption: "1-2 weeks in: early softening, improved tone, brightening." },
  { label: "Final Result", caption: "After the full course — real results from a real client." },
];

export default function ServiceTransformationSection({
  variant,
  serviceSlug,
  title = "Your Transformation, Step by Step",
  eyebrow = "Client Journey",
  subtitle = "Every client follows the same three-phase flow. Tap a phase to see the change you can expect.",
  phases = DEFAULT_PHASES,
}: Props) {
  const photos =
    SERVICE_BEFORE_AFTER[serviceSlug] ?? SERVICE_BEFORE_AFTER.botox;
  const phaseMedia: ServicePhaseMedia =
    SERVICE_PHASE_MEDIA[serviceSlug] ?? SERVICE_PHASE_MEDIA.botox;

  const ordered = [phaseMedia.phase1, phaseMedia.phase2, phaseMedia.phase3];
  const [active, setActive] = useState(0);
  const current = ordered[active];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <p className="eyebrow mb-3 md:mb-4">
            <span className="hairline pb-2 text-xs md:text-sm">{eyebrow}</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Phase tabs */}
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="inline-flex items-center rounded-full border border-border bg-background p-1">
            {phases.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active === i
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={active === i}
              >
                <span
                  className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                    active === i ? "bg-background/10" : "bg-secondary"
                  }`}
                >
                  {i < active ? <Check className="w-3 h-3" /> : i + 1}
                </span>
                <span className="hidden sm:inline">{p.label}</span>
                <span className="sm:hidden">{p.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Phase media */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(15,60,74,0.2)] ring-1 ring-foreground/10 aspect-[4/3] bg-secondary">
              {current.video ? (
                <video
                  key={current.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src={current.video} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={current.src}
                  alt={current.alt ?? `${serviceSlug} — phase ${active + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                Phase {active + 1} · {phases[active].label}
              </span>
            </div>
            <p className="mt-3 text-center text-xs md:text-sm text-muted-foreground italic">
              {phases[active].caption}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Final comparison slider + annotated avatar */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 md:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h3 className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3 font-semibold">
              Drag to compare · Real client
            </h3>
            <BeforeAfterSlider
              before={photos.before}
              after={photos.after}
              alt={`${serviceSlug.replace(/-/g, " ")} treatment result`}
              aspect="4/3"
            />
            <p className="mt-3 text-xs text-muted-foreground italic">
              Results vary per client — shown with permission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <TransformationAvatar variant={variant} compact />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
