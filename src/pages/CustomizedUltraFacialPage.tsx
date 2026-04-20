import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Droplets, Wind, Hand, Shield, Waves, CircleDot, Timer, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ultraFacialHeroImg from "@/assets/customized_ultrafacial.jpg";
import ultraFacialBenefitsImg from "@/assets/our-locations-home.jpg";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceTransformationSection from "@/components/ServiceTransformationSection";

const ease = [0.16, 1, 0.3, 1] as const;

const processSteps = [
  { icon: Hand, label: "Cleansing" },
  { icon: Sparkles, label: "Exfoliation" },
  { icon: Wind, label: "Extraction" },
  { icon: Droplets, label: "Hydration" },
  { icon: Shield, label: "Protection" },
];

const benefits = [
  {
    icon: Waves,
    title: "Gentle Exfoliation",
    desc: "Chemical and physical resurfacing without the irritation of traditional peels.",
  },
  {
    icon: CircleDot,
    title: "Deep Cleansing",
    desc: "Vortex-suction removes impurities and oil from deep within the pore structure.",
  },
  {
    icon: Timer,
    title: "No Downtime",
    desc: "Return to your daily routine immediately with no redness or recovery period required.",
  },
  {
    icon: Droplets,
    title: "Intense Hydration",
    desc: "Saturated with clinical serums containing hyaluronic acid and peptides for long-lasting plumpness.",
    featured: true,
  },
];

export default function CustomizedUltraFacialPage() {
  return (
    <>
      <Helmet>
        <title>Customized UltraFacial | Ageless Living™ — HydraFacial & AquaFirme</title>
        <meta
          name="description"
          content="Experience elite skin health with our Customized UltraFacial. HydraFacial in Victoria and Langley, AquaFirme in Kelowna. Safe for pregnancy and breastfeeding."
        />
      </Helmet>

      {/* ═══ HERO SECTION ═══ */}
      <section className="pt-24 lg:pt-32 pb-20 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-clinic-teal/10 text-clinic-teal mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold tracking-widest uppercase">Clinical Sanctuary Excellence</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.08] mb-6">
                Customized
                <br />
                <span className="text-clinic-teal font-light">UltraFacial</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                An elite skin health experience tailored to your unique biology. Available as{" "}
                <span className="text-foreground font-semibold">HydraFacial</span> in Victoria and Langley, and{" "}
                <span className="text-foreground font-semibold">AquaFirme</span> in Kelowna.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-clinic-teal to-clinic-teal text-white font-semibold shadow-lg shadow-clinic-teal/20 hover:from-clinic-teal/90 hover:to-clinic-teal/90 transition-all"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
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
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-clinic-teal/10">
                <img
                  src={ultraFacialHeroImg}
                  alt="Customized UltraFacial treatment at Ageless Living clinic"
                  className="w-full h-full object-cover object-top"
                  width={600}
                  height={750}
                />
              </div>

              {/* Floating tech badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease }}
                className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs hidden md:block"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-clinic-teal mb-2">Technology Highlight</p>
                <p className="text-sm text-muted-foreground">
                  Utilizing HydraFacial MD® and AquaFirme® medical-grade systems for peerless skin rejuvenation.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ INTRO / NARRATIVE SECTION ═══ */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto section-padding">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">The Science of Radiant Health</h2>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              "Our Customized UltraFacial is not a standard spa service; it is a clinical intervention. By synthesizing
              HydraFacial MD® or AquaFirme® technology with our signature sanctuary approach, we deliver a multi-stage
              protocol that respects the skin's integrity while achieving transformative results."
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="flex flex-col items-center p-4 rounded-xl bg-secondary/50"
                >
                  <Icon className="w-6 h-6 text-clinic-teal mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{step.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ KEY FEATURES (SAFETY) ═══ */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="bg-clinic-teal p-10 md:p-12 rounded-2xl text-white flex flex-col justify-center"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Safe for Pregnancy & Breastfeeding</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                We understand the unique needs of expectant and nursing mothers. Our Customized UltraFacial utilizes
                non-toxic, medical-grade formulations that provide intensive care without compromising safety.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="bg-card p-10 md:p-12 rounded-2xl border border-border/40 flex flex-col justify-center"
            >
              <div className="w-14 h-14 rounded-full bg-clinic-teal-light flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-clinic-teal" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Medical-Grade Efficacy</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Leveraging patented vortex-fusion delivery systems, we infuse potent antioxidants and hyaluronic acid
                deeper than traditional facials, ensuring a clinical standard of excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS SECTION (BENTO) ═══ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <p className="text-clinic-teal font-bold tracking-widest uppercase text-xs mb-3">Clinical Outcomes</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The UltraFacial Benefits</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              Experience immediate transformation with zero downtime. A sanctuary for your skin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Featured large card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="md:col-span-2 row-span-2 bg-secondary/50 rounded-2xl p-10 flex flex-col justify-end min-h-[400px] relative overflow-hidden group"
            >
              <img
                src={ultraFacialBenefitsImg}
                alt="Clear hydrated skin after UltraFacial treatment"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="relative z-10">
                <Sparkles className="w-10 h-10 text-clinic-teal mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">Immediate Radiant Glow</h4>
                <p className="text-muted-foreground">
                  Walk out with a visibly brighter, smoother complexion that glows with internal health and vitality.
                </p>
              </div>
            </motion.div>

            {/* Benefit cards */}
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className={`rounded-2xl p-8 ${
                    benefit.featured
                      ? "bg-clinic-teal text-white"
                      : "bg-card border border-border/40"
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-4 ${benefit.featured ? "text-white" : "text-clinic-teal"}`} />
                  <h4 className={`text-lg font-bold mb-2 ${benefit.featured ? "text-white" : "text-foreground"}`}>
                    {benefit.title}
                  </h4>
                  <p className={`text-sm ${benefit.featured ? "text-white/80" : "text-muted-foreground"}`}>
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ LOCATIONS SECTION ═══ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-card border border-border/40">
              <p className="text-xs font-bold uppercase tracking-widest text-clinic-teal mb-2">Victoria & Langley</p>
              <p className="text-lg font-bold text-foreground">HydraFacial MD®</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/40">
              <p className="text-xs font-bold uppercase tracking-widest text-clinic-teal mb-2">Kelowna</p>
              <p className="text-lg font-bold text-foreground">AquaFirme®</p>
            </div>
            <div className="p-6 rounded-xl bg-clinic-teal-light">
              <p className="text-xs font-bold uppercase tracking-widest text-clinic-teal mb-2">All Locations</p>
              <p className="text-lg font-bold text-clinic-teal">Customized Protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* ═══ REAL RESULTS — interactive transformation slider ═══ */}
      <ServiceTransformationSection
        variant="ultrafacial"
        serviceSlug="customized-ultrafacial"
        title="The UltraFacial Glow"
        subtitle="Drag to compare — plumper, clearer, visibly brighter skin in a single session."
      />

      <ServiceCTA />
    </>
  );
}
