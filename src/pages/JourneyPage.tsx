import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Stethoscope, Heart, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "A thorough initial assessment to understand your goals, health history, and what matters most to you. We take time to listen — every journey starts with connection." },
  { icon: ClipboardList, title: "Personalized Plan", desc: "Your clinician designs a custom treatment protocol tailored to your unique biology, lifestyle, and timeline. No two plans look the same." },
  { icon: Stethoscope, title: "Guided Treatments", desc: "Our doctors, nurses, and aestheticians guide you through every treatment with attentive, hands-on care. You'll always know what to expect." },
  { icon: Heart, title: "Ongoing Support & Results", desc: "Regular follow-ups, progress tracking, and plan adjustments to ensure lasting, visible results. We're with you for the long run." },
];

export default function JourneyPage() {
  // Video placeholder — replace with real YouTube IDs when available

  return (
    <>
      <Helmet>
        <title>Our Journey | Ageless Living™ — How We Guide Your Wellness</title>
        <meta name="description" content="Step-by-step: from consultation to lasting results. See how our expert aestheticians and clinicians guide you at every stage." />
      </Helmet>

      <section className="pt-32 pb-24 bg-card">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Your Ageless Journey</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.1]">How The Process Works</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expert aestheticians and clinicians guide you through every step to reach your exact health &amp; beauty goals.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 relative z-10">
                    <s.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pt-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {i + 1}</span>
                  <h2 className="text-xl font-bold text-foreground mt-1 mb-2">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link to="/book" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]">
              Begin Your Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-wellness-warm">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Watch & Learn</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See How We Help Clients Transform</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Watch how our aestheticians guide real clients to their goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/30">
              <div className="relative aspect-video bg-muted">
                <img
                  src="https://agelessliving.com/wp-content/uploads/2022/06/ageless-langley-clinic-768x512.jpg"
                  alt="Ageless Living clinic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/40 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center shadow-2xl">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                  <span className="text-white font-semibold text-lg tracking-wide bg-black/30 px-5 py-2 rounded-full backdrop-blur-sm">Video Coming Soon</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Discover how personalized care and expert guidance create real, lasting transformations.
                </p>
                <Link
                  to="/treatments"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
                >
                  Explore Our Treatments <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
