import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, FlaskConical, Zap, Scale, Check } from "lucide-react";

import skinImg from "@/assets/services-1.jpg";
import hormoneImg from "@/assets/hormone-balancing.jpg";
import biohackingImg from "@/assets/biohacking.jpg";
import weightImg from "@/assets/health-weight.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const stages = [
  {
    id: 0,
    icon: Sparkles,
    label: "Skin Rejuvenation",
    shortLabel: "Skin",
    img: skinImg,
    color: "from-rose-100 to-rose-50",
    accentColor: "bg-rose-100 text-rose-600",
    ringColor: "ring-rose-300",
    headline: "Restore Your Natural Glow",
    description:
      "Our certified skin health experts offer treatments including Botox, dermal fillers, laser therapy, microneedling, and customized ultrafacials — all tailored to reveal your most radiant self.",
    benefits: ["Botox & Dysport", "Dermal Fillers", "Laser & IPL", "Microneedling", "Chemical Peels"],
    href: "/services#skin-rejuvenation",
    avatarState: "Beginning your journey — refreshed, glowing skin sets the foundation.",
  },
  {
    id: 1,
    icon: FlaskConical,
    label: "Hormone Balancing",
    shortLabel: "Hormones",
    img: hormoneImg,
    color: "from-violet-100 to-violet-50",
    accentColor: "bg-violet-100 text-violet-600",
    ringColor: "ring-violet-300",
    headline: "Optimize Your Internal Harmony",
    description:
      "Bioidentical hormone therapy addresses fatigue, brain fog, low libido, and menopausal symptoms. Our physicians create a personalized protocol to restore your natural balance.",
    benefits: ["Bioidentical Hormones", "Fatigue & Energy", "Libido & Vitality", "Menopause Relief", "Brain Clarity"],
    href: "/services#hormone-balancing",
    avatarState: "Internal balance restored — energy, clarity, and vitality return.",
  },
  {
    id: 2,
    icon: Zap,
    label: "Biohacking",
    shortLabel: "Biohacking",
    img: biohackingImg,
    color: "from-emerald-100 to-emerald-50",
    accentColor: "bg-emerald-100 text-emerald-600",
    ringColor: "ring-emerald-300",
    headline: "Unlock Peak Performance",
    description:
      "Leading-edge treatments and innovative technologies improve stamina, recovery, mental acuity, and productivity — all while stimulating the body's own regeneration processes.",
    benefits: ["NAD+ Therapy", "IV Infusions", "Red Light Therapy", "Cryotherapy", "Regenerative Medicine"],
    href: "/services#biohacking",
    avatarState: "Peak performance unlocked — sharper mind, stronger body.",
  },
  {
    id: 3,
    icon: Scale,
    label: "Health Weight",
    shortLabel: "Weight",
    img: weightImg,
    color: "from-amber-100 to-amber-50",
    accentColor: "bg-amber-100 text-amber-600",
    ringColor: "ring-amber-300",
    headline: "Sustainable Wellness, Your Way",
    description:
      "Our physician-supervised program takes a holistic, individualized approach to sustainable weight management — addressing the root causes, not just the symptoms.",
    benefits: ["GLP-1 Therapy", "Metabolic Testing", "Nutrition Planning", "Physician-Supervised", "Long-Term Support"],
    href: "/services#health-weight",
    avatarState: "Your transformation complete — balanced, confident, ageless.",
  },
];

export default function TransformationJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = stages[activeStage];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <p className="eyebrow mb-3 md:mb-4">
            <span className="hairline pb-2 text-xs md:text-sm">Your Transformation</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-4 md:mb-5">
            Visualize Your Ageless Journey
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Every service builds on the last. See how our four pillars of wellness work together
            to help you look, feel, and perform at your best — at any age.
          </p>
        </motion.div>

        {/* Progress Bar — Mobile: horizontal scroll tabs, Desktop: full bar */}
        <div className="mb-8 md:mb-12">
          {/* Mobile: scrollable tabs */}
          <div className="flex md:hidden gap-2 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4">
            {stages.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveStage(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeStage === i
                    ? "bg-clinic-teal text-white shadow-md"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                <s.icon className="w-3.5 h-3.5" />
                {s.shortLabel}
                {i < activeStage && <Check className="w-3 h-3 ml-0.5" />}
              </button>
            ))}
          </div>

          {/* Desktop: progress bar with connected steps */}
          <div className="hidden md:block max-w-4xl mx-auto">
            <div className="relative flex items-center justify-between">
              {/* Background line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
              {/* Active line */}
              <motion.div
                className="absolute top-1/2 left-0 h-0.5 bg-clinic-teal -translate-y-1/2"
                initial={false}
                animate={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease }}
              />

              {stages.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(i)}
                  className="relative z-10 flex flex-col items-center gap-2 group"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                      i <= activeStage
                        ? "bg-clinic-teal border-clinic-teal text-white scale-110"
                        : "bg-white border-border text-muted-foreground group-hover:border-clinic-teal/50"
                    }`}
                  >
                    {i < activeStage ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <s.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                      i <= activeStage ? "text-clinic-teal" : "text-muted-foreground"
                    }`}
                  >
                    {s.shortLabel}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center"
          >
            {/* Image side */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} rounded-2xl md:rounded-3xl -z-10 scale-[1.02]`} />
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <img
                  src={stage.img}
                  alt={`${stage.label} treatment at Ageless Living`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-6 h-6 md:w-7 md:h-7 rounded-lg ${stage.accentColor} flex items-center justify-center`}>
                        <stage.icon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-foreground">
                        Stage {stage.id + 1} of 4
                      </span>
                    </div>
                    <p className="text-[10px] md:text-xs text-muted-foreground italic leading-relaxed">
                      {stage.avatarState}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${stage.accentColor} text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] mb-4 md:mb-5`}>
                <stage.icon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                {stage.label}
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-3 md:mb-4 leading-tight">
                {stage.headline}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 md:mb-6">
                {stage.description}
              </p>

              {/* Benefits list */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 md:mb-8">
                {stage.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-clinic-teal shrink-0" />
                    <span className="text-xs md:text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={stage.href}
                  className="group inline-flex items-center justify-center gap-2 bg-clinic-teal hover:bg-clinic-teal-container text-white px-6 py-3 md:py-3.5 rounded-full font-semibold text-xs md:text-sm uppercase tracking-widest transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {activeStage < stages.length - 1 && (
                  <button
                    onClick={() => setActiveStage(activeStage + 1)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 md:py-3.5 rounded-full border-2 border-foreground/15 text-foreground text-xs md:text-sm font-semibold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
                  >
                    Next Stage
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
