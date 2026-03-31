import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Sparkles, PenTool, Triangle, FileText, Stethoscope, Heart, ShieldCheck } from "lucide-react";
import dermalFillerHeroImg from "@/assets/treatment-skin.jpg";
import dermalFillerProductImg from "@/assets/botox-precision.jpg";
import ServiceCTA from "@/components/ServiceCTA";

const ease = [0.16, 1, 0.3, 1] as const;

const focusAreas = [
  {
    icon: Droplets,
    title: "Lips",
    desc: "Restore hydration, define borders, or add subtle volume for a natural, soft appearance.",
  },
  {
    icon: Sparkles,
    title: "Cheeks",
    desc: "Lift the mid-face and restore youthful contours that have diminished over time.",
  },
  {
    icon: PenTool,
    title: "Jawline",
    desc: "Create a defined, structural profile and improve the separation between neck and face.",
  },
  {
    icon: Triangle,
    title: "Chin",
    desc: "Enhance projection and balance facial proportions for a more harmonious aesthetic.",
  },
];

const products = [
  {
    number: "01",
    name: "Restylane®",
    desc: "Versatile range for smoothing wrinkles and enhancing lips with XpresHAn Technology™.",
  },
  {
    number: "02",
    name: "Revanesse®",
    desc: "Advanced hyaluronic acid formula optimized for volume and smoothness.",
  },
  {
    number: "03",
    name: "PRP (Platelet-Rich Plasma)",
    desc: "Harnessing your body's own growth factors to stimulate collagen and tissue repair.",
  },
  {
    number: "04",
    name: "Sculptra®",
    desc: "A poly-L-lactic acid (PLLA) collagen stimulator for gradual, long-lasting restoration.",
  },
];

const experienceSteps = [
  {
    icon: FileText,
    title: "Pre-Treatment Consultation",
    desc: "Every journey begins with a detailed facial analysis. We discuss your aesthetic goals, medical history, and create a bespoke treatment plan unique to your anatomy.",
  },
  {
    icon: Stethoscope,
    title: "The Procedure",
    desc: "Treatments typically take 30–60 minutes. We utilize topical numbing agents and ultra-fine needles or cannulas to ensure a comfortable, clinical-grade experience.",
  },
  {
    icon: Heart,
    title: "Recovery & Results",
    desc: "Results are visible immediately. While some minor swelling or bruising may occur, most patients resume normal activities within 24–48 hours.",
  },
];

export default function CosmeticDermalFillerPage() {
  return (
    <>
      <Helmet>
        <title>Cosmetic Dermal Filler | Ageless Living™ — Restore Volume & Contour</title>
        <meta
          name="description"
          content="Smooth away lines and restore volume with premium cosmetic dermal fillers including Restylane®, Revanesse®, PRP, and Sculptra®. Available in Victoria, Langley, and Kelowna."
        />
      </Helmet>

      {/* ═══ HERO SECTION ═══ */}
      <section className="pt-24 lg:pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-clinic-teal-light text-clinic-teal text-xs font-semibold tracking-widest uppercase mb-6">
                Premium Aesthetics
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.08] mb-6">
                Cosmetic
                <br />
                <span className="text-clinic-teal font-light">Dermal Filler</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                Smooth away lines and restore volume quickly and easily with cosmetic dermal fillers. A non-surgical path to refined radiance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-clinic-teal text-white font-semibold shadow-lg shadow-clinic-teal/20 hover:shadow-clinic-teal/30 transition-all"
                >
                  Book Consultation
                </Link>
                <Link
                  to="/prices"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-card text-foreground font-semibold transition-all hover:bg-secondary"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={dermalFillerHeroImg}
                  alt="Professional dermal filler consultation at Ageless Living clinic"
                  className="w-full h-full object-cover"
                  width={600}
                  height={750}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease }}
                className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border/50 hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-clinic-teal" />
                  <span className="font-bold text-foreground">Medical Excellence</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Board-certified specialists
                  <br />
                  and premium formulations.
                </p>
              </motion.div>

              {/* Background accents */}
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-clinic-teal-light/40 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FOCUS AREAS SECTION ═══ */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Precision Artistry</h2>
              <p className="text-muted-foreground leading-relaxed">
                Enhance and contour your natural features with localized precision. Our fillers are designed to integrate seamlessly with your unique facial structure.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 mx-12 bg-border/50" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className={`bg-card p-8 rounded-2xl border border-border/40 hover:border-clinic-teal/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${
                    i % 2 === 1 ? "lg:mt-8" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-clinic-teal-light flex items-center justify-center mb-6 group-hover:bg-clinic-teal transition-colors">
                    <Icon className="w-5 h-5 text-clinic-teal group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT SHOWCASE SECTION ═══ */}
      <section className="py-16 md:py-20 bg-background overflow-hidden">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">World-Class Formulations</h2>
            <p className="text-muted-foreground leading-relaxed">
              We curate only the most rigorous, FDA-approved products to ensure longevity, safety, and natural-looking results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="space-y-4"
            >
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="flex items-center gap-6 p-6 rounded-xl bg-secondary/50 border-l-4 border-transparent hover:border-clinic-teal hover:bg-secondary transition-all cursor-default"
                >
                  <div className="text-3xl font-light text-clinic-teal/40">{product.number}</div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{product.name}</h4>
                    <p className="text-sm text-muted-foreground">{product.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="relative"
            >
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-clinic-teal-light/30 rounded-full blur-3xl opacity-50" />
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={dermalFillerProductImg}
                  alt="Premium dermal filler products at Ageless Living clinic"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={450}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE SECTION ═══ */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
          >
            The Ageless Experience
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {experienceSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="bg-card p-8 rounded-2xl border border-border/40 shadow-sm"
                >
                  <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Icon className="w-6 h-6 text-clinic-teal" />
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA />
    </>
  );
}
