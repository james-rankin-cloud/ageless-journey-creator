import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, FlaskConical, Zap, Scale, Check } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { HOME_PHASE_MEDIA } from "@/lib/placeholders";

const ease = [0.16, 1, 0.3, 1] as const;

type Phase = {
  id: number;
  icon: typeof Sparkles;
  label: string;
  shortLabel: string;
  headline: string;
  description: string;
  benefits: string[];
  href: string;
  media: { before: string; after: string; video?: string };
  caption: string;
};

const phases: Phase[] = [
  {
    id: 1,
    icon: Sparkles,
    label: "Skin Rejuvenation",
    shortLabel: "Skin",
    headline: "Phase 1 · Restore your natural glow",
    description:
      "We start on the surface. Botox, dermal fillers, laser & IPL, microneedling and medical facials soften lines and even tone — setting the visual foundation for everything that follows.",
    benefits: ["Botox & Dysport", "Dermal Fillers", "Laser & IPL", "Microneedling", "Medical Peels"],
    href: "/services#skin-rejuvenation",
    media: HOME_PHASE_MEDIA.skin,
    caption: "Drag to reveal skin before vs. after a full rejuvenation course.",
  },
  {
    id: 2,
    icon: FlaskConical,
    label: "Hormone Balancing",
    shortLabel: "Hormones",
    headline: "Phase 2 · Rebalance your chemistry",
    description:
      "Bioidentical hormone therapy resolves the fatigue, brain fog, low libido and menopausal symptoms that skincare alone can't touch. Your physician designs a personalised protocol around your lab results.",
    benefits: ["Bioidentical Hormones", "Energy & Focus", "Libido & Vitality", "Menopause Relief", "Thyroid Support"],
    href: "/services#hormone-balancing",
    media: HOME_PHASE_MEDIA.hormones,
    caption: "Typical energy + mood transformation by week 12 of therapy.",
  },
  {
    id: 3,
    icon: Zap,
    label: "Biohacking",
    shortLabel: "Biohacking",
    headline: "Phase 3 · Unlock peak performance",
    description:
      "NAD+, IV therapy, red-light, hyperbaric oxygen and cryotherapy work at a cellular level to improve recovery, stamina and mental acuity — stimulating your body's own regeneration processes.",
    benefits: ["NAD+ Therapy", "IV Infusions", "Red-Light", "HBOT & Cryo", "Regenerative Medicine"],
    href: "/services#biohacking",
    media: HOME_PHASE_MEDIA.biohacking,
    caption: "Clients report sharper focus and faster recovery within 4 weeks.",
  },
  {
    id: 4,
    icon: Scale,
    label: "Health Weight",
    shortLabel: "Weight",
    headline: "Phase 4 · Sustain your transformation",
    description:
      "A physician-supervised, root-cause approach to weight and metabolic health. GLP-1 support, metabolic testing and nutrition planning lock in the gains you've made across phases 1–3.",
    benefits: ["GLP-1 Support", "Metabolic Testing", "Nutrition Planning", "Physician Supervised", "Long-Term Support"],
    href: "/services#health-weight",
    media: HOME_PHASE_MEDIA.weight,
    caption: "Composition change over a 16-week physician-led programme.",
  },
];

export default function TransformationJourney() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <p className="eyebrow mb-3 md:mb-4">
            <span className="hairline pb-2 text-xs md:text-sm">The Four-Phase Journey</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-4 md:mb-5 leading-tight">
            Your transformation, in four phases.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Every client moves through the same considered sequence. Tap a phase to
            see the visual change you can expect, and how it sets up the next.
          </p>
        </motion.div>

        {/* Phase progress — numbered steps (mobile tabs / desktop rail) */}
        <div className="mb-10 md:mb-14">
          {/* Mobile */}
          <div className="flex md:hidden gap-2 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4">
            {phases.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                  active === i
                    ? "bg-foreground text-background shadow-sm"
                    : "bg-secondary text-muted-foreground"
                }`}
                aria-pressed={active === i}
              >
                <span className="text-[10px] opacity-60">0{p.id}</span>
                {p.shortLabel}
                {i < active && <Check className="w-3 h-3 ml-0.5" />}
              </button>
            ))}
          </div>

          {/* Desktop — a cleaner stepper */}
          <div className="hidden md:block max-w-5xl mx-auto">
            <div className="relative grid grid-cols-4 gap-6">
              {/* Background line */}
              <div className="absolute top-6 left-[12.5%] right-[12.5%] h-px bg-border" />
              {/* Active fill */}
              <motion.div
                className="absolute top-6 left-[12.5%] h-px bg-clinic-teal"
                initial={false}
                animate={{ width: `${(active / (phases.length - 1)) * 75}%` }}
                transition={{ duration: 0.5, ease }}
              />

              {phases.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  className="relative z-10 flex flex-col items-center gap-3 group"
                  aria-pressed={active === i}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300 ${
                      i <= active
                        ? "border-clinic-teal bg-clinic-teal text-white"
                        : "border-border bg-background text-muted-foreground group-hover:border-clinic-teal/40"
                    }`}
                  >
                    {i < active ? <Check className="w-5 h-5" /> : `0${p.id}`}
                  </span>
                  <span className="text-center">
                    <span
                      className={`block text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                        i <= active ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {p.label}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease }}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center"
          >
            {/* Media — before/after slider (or looping video) */}
            <div>
              {phase.media.video ? (
                <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(15,60,74,0.25)] ring-1 ring-clinic-teal/10 aspect-[4/3]">
                  <video
                    key={phase.media.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={phase.media.video} type="video/mp4" />
                  </video>
                  <span className="absolute top-4 left-4 rounded-full bg-black/55 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                    Phase {phase.id} · Result
                  </span>
                </div>
              ) : (
                <BeforeAfterSlider
                  before={phase.media.before}
                  after={phase.media.after}
                  alt={`${phase.label} transformation — phase ${phase.id}`}
                  aspect="4/3"
                />
              )}
              <p className="mt-3 text-xs text-muted-foreground italic">{phase.caption}</p>
            </div>

            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-clinic-teal-light text-clinic-teal text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] mb-4 md:mb-5">
                <phase.icon className="w-3.5 h-3.5" />
                {phase.label}
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-4 leading-tight">
                {phase.headline}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                {phase.description}
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-7">
                {phase.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-clinic-teal shrink-0" />
                    <span className="text-xs md:text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={phase.href}
                  className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 md:py-3.5 rounded-full font-semibold text-xs md:text-sm uppercase tracking-widest hover:bg-clinic-teal transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {active < phases.length - 1 ? (
                  <button
                    onClick={() => setActive(active + 1)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 md:py-3.5 rounded-full border border-foreground/15 text-foreground text-xs md:text-sm font-semibold uppercase tracking-widest hover:border-foreground/40 transition-all"
                  >
                    Next Phase
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 md:py-3.5 rounded-full border border-foreground/15 text-foreground text-xs md:text-sm font-semibold uppercase tracking-widest hover:border-foreground/40 transition-all"
                  >
                    Start Your Journey
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
