import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Stethoscope, Heart, ArrowRight, Play, Shield, Leaf, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "A thorough initial assessment to understand your goals, health history, and what matters most to you. We take time to listen — every journey starts with connection.",
    details: [
      "60–90 minute in-depth health & wellness evaluation",
      "Review of bloodwork, medical history, and lifestyle factors",
      "Goal-setting session with your dedicated clinician",
      "Customized roadmap presented before you leave",
    ],
  },
  {
    icon: ClipboardList,
    title: "Personalized Plan",
    desc: "Your clinician designs a custom treatment protocol tailored to your unique biology, lifestyle, and timeline. No two plans look the same.",
    details: [
      "Evidence-based treatment selection from 30+ modalities",
      "Nutritional & supplement guidance aligned to your goals",
      "Timeline with milestones so you can track progress",
      "Transparent pricing — no surprise costs",
    ],
  },
  {
    icon: Stethoscope,
    title: "Guided Treatments",
    desc: "Our doctors, nurses, and aestheticians guide you through every treatment with attentive, hands-on care. You'll always know what to expect.",
    details: [
      "Board-certified physicians and specialist nurses on-site",
      "Medical-grade equipment in a spa-like environment",
      "Real-time comfort checks and post-treatment care notes",
      "Same-day follow-up call for first-time treatments",
    ],
  },
  {
    icon: Heart,
    title: "Ongoing Support & Results",
    desc: "Regular follow-ups, progress tracking, and plan adjustments to ensure lasting, visible results. We're with you for the long run.",
    details: [
      "Scheduled check-ins at 30, 60, and 90 days",
      "Before-and-after documentation with clinical photography",
      "Plan adjustments as your body responds and evolves",
      "Lifetime access to your wellness records and history",
    ],
  },
];

const values = [
  { icon: Shield, title: "Safety First", desc: "Every protocol is physician-approved and follows Health Canada guidelines. Your wellbeing is non-negotiable." },
  { icon: Leaf, title: "Evidence-Based", desc: "We combine peer-reviewed science with clinical experience — no trends, no guesswork, just results." },
  { icon: Users, title: "Collaborative Care", desc: "Your team — physician, aesthetician, nutritionist — works together so nothing falls through the cracks." },
  { icon: Award, title: "Over a Decade of Trust", desc: "Since 2012, thousands of British Columbians have trusted Ageless Living with their health and beauty goals." },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function JourneyPage() {
  return (
    <>
      <Helmet>
        <title>Our Journey | Ageless Living™ — How We Guide Your Wellness</title>
        <meta name="description" content="Step-by-step: from consultation to lasting results. See how our expert aestheticians and clinicians guide you at every stage." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Your Ageless Journey</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-5 leading-[1.1]">How The Process Works</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expert aestheticians and clinicians guide you through every step — from first conversation to lasting transformation.
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
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 relative z-10">
                    <s.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pt-1 flex-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {i + 1}</span>
                  <h2 className="text-xl font-bold text-foreground mt-1 mb-2">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/book" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]">
              Begin Your Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-wellness-warm">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Why Ageless Living</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Built on Trust & Science</h2>
            <p className="text-muted-foreground leading-relaxed">The principles that guide every interaction, treatment, and outcome.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="bg-card rounded-lg border border-border/20 p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <v.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Watch & Learn</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">See How We Help Clients Transform</h2>
            <p className="text-muted-foreground leading-relaxed">Watch how our clinicians guide real clients through every stage of their journey.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border/30">
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
                  <span className="text-white font-semibold text-lg tracking-wide bg-black/30 px-5 py-2 backdrop-blur-sm">Video Coming Soon</span>
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
