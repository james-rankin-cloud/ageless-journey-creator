import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sparkles, Clock, Grid3X3, Heart, Shield, MapPin } from "lucide-react";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceTransformationSection from "@/components/ServiceTransformationSection";
import dermapeelImg from "@/assets/dermapeel.jpg";
import homeImg1 from "@/assets/about-us-1.jpg";
import homeImg8 from "@/assets/our-locations-home.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const glutathioneBenefits = [
  "Neutralizes harmful free radicals at the source.",
  "Lightens and brightens skin by inhibiting melanin.",
  "Promotes deep cellular resurfacing without irritation.",
];

const targetedSolutions = [
  { icon: Sparkles, title: "Radiance Boost", desc: "Instantly improves texture and tone for a natural, luminous glow." },
  { icon: Clock, title: "Anti-Aging", desc: "Reduces fine lines and wrinkles through powerful resurfacing." },
  { icon: Grid3X3, title: "Pore Refinement", desc: "Minimizes the appearance of large pores and uneven texture." },
];

const journeySteps = [
  { num: "1", title: "Treatment Day", desc: "The procedure is virtually painless and takes about 15 minutes to apply.", active: true },
  { num: "2", title: "Days 1-2", desc: "Skin may feel tight. The peeling process begins around the mouth and nose.", active: false },
  { num: "3", title: "Days 3-5", desc: "The peak of peeling. Old, damaged skin sloughs away to reveal fresh cells.", active: false },
  { num: "4", title: "Day 7", desc: "The process is complete. Your skin is fully refreshed, clear, and glowing.", active: false },
];

export default function PerfectDermaPeelPage() {
  return (
    <>
      <Helmet>
        <title>The Perfect Derma™ Peel | Ageless Living™</title>
        <meta name="description" content="A transformative medical-grade chemical peel featuring Glutathione for all skin types. Treats acne, scarring, melasma, and signs of aging." />
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-16 md:pb-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-clinic-teal" />
                  Advanced Resurfacing
                </div>
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[1.05]">
                  The Perfect{" "}
                  <span className="text-clinic-teal font-light">Derma™ Peel</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-light">
                  A transformative medical-grade chemical peel that delivers professional results for all skin types, featuring the powerful antioxidant Glutathione.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/book"
                  className="bg-gradient-to-r from-clinic-teal to-clinic-teal text-white px-10 py-4 rounded-full font-semibold shadow-lg shadow-clinic-teal/20 hover:from-clinic-teal/90 hover:to-clinic-teal/90 transition-all"
                >
                  Book Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-card text-foreground font-semibold hover:bg-secondary transition-all"
                >
                  Back to All Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary shadow-2xl shadow-foreground/5">
                <img
                  src={dermapeelImg}
                  alt="Professional clinical setting for Perfect Derma Peel treatment"
                  className="w-full h-full object-cover object-center"
                  width={1024}
                  height={768}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-border/50">
                <Shield className="w-8 h-8 text-clinic-teal mb-4" />
                <p className="text-foreground font-semibold">Medical Grade Authority</p>
                <p className="text-sm text-muted-foreground mt-2">Only administered by certified medical professionals in our clinics.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ GLUTATHIONE ADVANTAGE ═══ */}
      <section className="py-16 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto section-padding">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="w-full lg:w-1/2 order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="w-64 h-64 bg-clinic-teal/10 rounded-full absolute -top-12 -left-12 blur-3xl" />
              <img
                src={dermapeelImg}
                alt="The Perfect Derma Peel treatment at Ageless Living"
                className="relative z-10 w-full rounded-xl shadow-lg aspect-square object-cover"
                loading="lazy"
                width={600}
                height={600}
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <h2 className="text-sm uppercase tracking-widest text-clinic-teal font-bold">The Science of Renewal</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">The Glutathione Advantage</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike traditional peels, The Perfect Derma™ Peel is the only treatment that includes{" "}
                <span className="text-clinic-teal font-semibold">Glutathione</span>—the body's master antioxidant. This key ingredient penetrates deep into the cellular level to fight oxidant damage and prevent premature aging.
              </p>
              <ul className="space-y-4 pt-4">
                {glutathioneBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-clinic-teal mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TARGETED SOLUTIONS ═══ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-4xl font-bold text-foreground">Targeted Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Addressing specific skin concerns with surgical precision and clinical care.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Large Bento Item - Hyperpigmentation */}
            <motion.div
              className="md:col-span-2 bg-card p-10 rounded-xl flex flex-col justify-between border border-border/40 hover:shadow-lg transition-shadow duration-500"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="max-w-md">
                <Heart className="w-12 h-12 text-clinic-teal mb-6" />
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Deep Hyperpigmentation & Melasma</h4>
                <p className="text-muted-foreground leading-relaxed">The synergistic blend of TCA, Retinoic Acid, and Glutathione creates a powerful tool for lifting stubborn pigmentation that other peels often miss.</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Clinical Efficacy: 94%</span>
                <div className="h-1 w-48 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-clinic-teal w-[94%]" />
                </div>
              </div>
            </motion.div>

            {/* Vertical Bento Item - Acne */}
            <motion.div
              className="bg-clinic-teal text-white p-10 rounded-xl flex flex-col justify-between"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <div>
                <Heart className="w-10 h-10 mb-6" />
                <h4 className="text-2xl font-bold mb-4">Acne & Scarring</h4>
                <p className="text-white/80 leading-relaxed">Diminishes active acne and softens the appearance of post-inflammatory scars by encouraging rapid collagen production.</p>
              </div>
            </motion.div>

            {/* Small Bento Items */}
            {targetedSolutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  className="bg-secondary/50 p-8 rounded-xl border-t-4 border-clinic-teal/20"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                >
                  <Icon className="w-7 h-7 text-clinic-teal mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-foreground">{solution.title}</h4>
                  <p className="text-sm text-muted-foreground">{solution.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHAT TO EXPECT ═══ */}
      <section className="py-16 bg-foreground text-background rounded-[2rem] mx-4 md:mx-8">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-4xl font-bold mb-4">What to Expect</h2>
            <p className="text-background/60">A 15-minute treatment, followed by a 7-day transformation.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 w-full h-px bg-white/10 hidden md:block" />

            {journeySteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative space-y-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold relative z-10 ${step.active ? "bg-clinic-teal text-white" : "bg-clinic-teal/40 text-white"}`}>
                  {step.num}
                </div>
                <h4 className="font-semibold text-lg">{step.title}</h4>
                <p className="text-sm text-background/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ POST-PEEL RESULTS ═══ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            className="bg-secondary/30 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Post-Peel <br /><span className="text-clinic-teal">Radiance</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  Our patients experience a dramatic improvement in skin clarity and texture. The result is a refined, radiant complexion that looks as healthy as it feels.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-secondary flex-shrink-0">
                      <img
                        src={homeImg1}
                        alt="Ageless Living patient after Perfect Derma Peel"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-lg italic text-clinic-teal">"My skin hasn't looked this clear in ten years."</p>
                      <p className="text-sm text-muted-foreground">— Sarah M., Clinical Patient</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[400px] lg:min-h-[500px]">
                <img
                  src={homeImg8}
                  alt="Radiant skin result at Ageless Living wellness clinic"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-transparent lg:block hidden" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ LOCATIONS ═══ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Available at All Locations</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Victoria", "Langley", "Kelowna"].map((loc) => (
              <div key={loc} className="flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border/40">
                <MapPin className="w-4 h-4 text-clinic-teal" />
                <span className="text-foreground font-medium">{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REAL RESULTS — interactive transformation slider ═══ */}
      <ServiceTransformationSection
        variant="peel"
        serviceSlug="perfect-derma-peel"
        title="Skin, Reset"
        subtitle="Drag to compare — clearer tone, softer texture and a luminous finish."
      />

      <ServiceCTA
        title="Ready to Transform Your Skin?"
        description="Experience the power of Glutathione and reveal your most radiant complexion."
        primaryButtonText="Book Your Peel"
        secondaryButtonText="Explore More Treatments"
        secondaryButtonLink="/services"
      />
    </>
  );
}
