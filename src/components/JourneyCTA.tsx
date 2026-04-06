import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  FlaskConical,
  Zap,
  Scale,
  CalendarCheck,
  ChevronRight,
} from "lucide-react";

import aboutImg from "@/assets/about-us-1.jpg";
import logo from "@/assets/footer-logo.png";

const ease = [0.16, 1, 0.3, 1] as const;

const journeySteps = [
  {
    icon: Sparkles,
    label: "Skin Rejuvenation",
    desc: "Glow from the outside in",
  },
  {
    icon: FlaskConical,
    label: "Hormone Balancing",
    desc: "Restore your inner vitality",
  },
  {
    icon: Zap,
    label: "Biohacking",
    desc: "Optimize mind & body",
  },
  {
    icon: Scale,
    label: "Health Weight",
    desc: "Sustainable transformation",
  },
];

export default function JourneyCTA() {
  return (
    <section className="relative bg-gradient-to-b from-secondary/60 to-background overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4] max-h-[520px] md:max-h-[600px] shadow-2xl">
              <img
                src={aboutImg}
                alt="Ageless Living wellness consultation with expert clinician"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Bottom content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <img
                  src={logo}
                  alt=""
                  className="h-5 md:h-6 brightness-0 invert mb-3 md:mb-4"
                  aria-hidden
                />
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-sm">
                  Empowering your journey towards vitality, longevity, and
                  personalized health.
                </p>
              </div>
            </div>

            {/* Floating card — journey steps preview (hidden on small mobile) */}
            <div className="hidden sm:block absolute -right-2 md:-right-6 top-8 md:top-12 w-56 md:w-64 bg-white rounded-2xl shadow-xl p-4 md:p-5 border border-border/30 z-10">
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] text-clinic-teal mb-3">
                Your Journey
              </p>
              <div className="space-y-2.5 md:space-y-3">
                {journeySteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2.5">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-clinic-teal-light flex items-center justify-center shrink-0">
                      <step.icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-clinic-teal" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] md:text-xs font-semibold text-foreground truncate">
                        {step.label}
                      </p>
                      <p className="text-[9px] md:text-[10px] text-muted-foreground truncate">
                        {step.desc}
                      </p>
                    </div>
                    {i < journeySteps.length - 1 && (
                      <ChevronRight className="w-3 h-3 text-muted-foreground/40 shrink-0 ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Text + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <span className="inline-block px-3 md:px-4 py-1.5 rounded-full bg-clinic-teal/10 text-clinic-teal text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] mb-4 md:mb-6 border border-clinic-teal/15">
              Start Here
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-5 md:mb-6 leading-[1.08]">
              Help Me Create My{" "}
              <span className="text-clinic-teal">Ageless Living</span> Journey
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              Not sure where to start? That's okay — most people aren't. Our
              team will help you understand what's possible and build a
              personalized wellness plan that fits your goals, your body, and
              your life.
            </p>

            {/* Mini journey preview — mobile only */}
            <div className="sm:hidden grid grid-cols-2 gap-2.5 mb-6">
              {journeySteps.map((step) => (
                <div
                  key={step.label}
                  className="flex items-center gap-2 bg-white rounded-xl p-3 border border-border/30"
                >
                  <div className="w-7 h-7 rounded-lg bg-clinic-teal-light flex items-center justify-center shrink-0">
                    <step.icon className="w-3 h-3 text-clinic-teal" />
                  </div>
                  <span className="text-[10px] font-semibold text-foreground leading-tight">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Key points */}
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {[
                "Comprehensive initial consultation to understand your goals",
                "Custom treatment plan designed by our clinical team",
                "Ongoing support with regular check-ins and adjustments",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-clinic-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CalendarCheck className="w-2.5 h-2.5 text-clinic-teal" />
                  </div>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/book"
                className="group inline-flex items-center justify-center gap-3 bg-clinic-teal hover:bg-clinic-teal-container text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-semibold text-xs md:text-sm uppercase tracking-widest transition-all text-center"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full border-2 border-foreground/15 text-foreground text-xs md:text-sm font-semibold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
