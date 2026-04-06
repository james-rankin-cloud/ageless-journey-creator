import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Sun, Sparkles, Zap, MapPin } from "lucide-react";
import ServiceCTA from "@/components/ServiceCTA";
import laserImg from "@/assets/laser.jpg";
import skinImg from "@/assets/services-1.jpg";
import homeImg5 from "@/assets/botox-3.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  { icon: Heart, title: "Redness & Rosacea", desc: "Gently calming the skin's appearance by targeting visible capillaries and persistent flushing." },
  { icon: Sun, title: "Pigmentation", desc: "Erasing sun spots, age spots, and freckles for a clear, uniform canvas." },
  { icon: Sparkles, title: "Hair Removal", desc: "Long-lasting smoothness achieved through medical-grade precision and speed." },
  { icon: Zap, title: "Texture", desc: "Stimulating collagen production to create a firmer, smoother, and more resilient feel." },
];

const journeySteps = [
  { num: "01", title: "Consultation", desc: "Every journey begins with a clinical assessment. We evaluate your unique skin type, history, and aesthetic goals to create a bespoke protocol." },
  { num: "02", title: "The Session", desc: "Experience a gentle warming sensation as the light pulses work. We prioritize your safety with specialized clinical eye protection and cooling gels." },
  { num: "03", title: "Recovery", desc: "Minimal downtime is a hallmark of light therapy. We emphasize strict SPF post-treatment to protect your new, luminous results." },
];

export default function LaserIplBblPage() {
  return (
    <>
      <Helmet>
        <title>Laser & IPL/BBL Photorejuvenation | Ageless Living™</title>
        <meta name="description" content="Unveil your skin's natural brilliance with medical-grade light therapies designed for precision correction of sun damage, redness, and texture." />
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-16 md:pb-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-6 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="space-y-4">
                <span className="text-clinic-teal font-semibold tracking-[0.2em] uppercase text-xs">
                  Advanced Dermatology
                </span>
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[1.05]">
                  Laser & IPL/BBL{" "}
                  <span className="text-clinic-teal italic font-light">Photorejuvenation</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-light">
                  The Light of Transformation: Unveil your skin's natural brilliance with our medical-grade light therapies designed for precision correction.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-clinic-teal to-clinic-teal text-white rounded-full px-10 py-4 font-semibold hover:from-clinic-teal/90 hover:to-clinic-teal/90 transition-all shadow-xl shadow-clinic-teal/20"
                >
                  Book Your Clinical Assessment
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
              className="lg:col-span-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <div className="relative">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-foreground/10">
                  <img
                    src={laserImg}
                    alt="Radiant skin after laser photorejuvenation treatment"
                    className="w-full h-full object-cover object-top"
                    width={800}
                    height={1000}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl max-w-xs hidden lg:block border border-border/50">
                  <p className="text-xs text-clinic-teal font-bold uppercase tracking-widest mb-2">Primary Goal</p>
                  <p className="text-foreground font-medium text-sm">Restoring cellular vitality and erasing signs of environmental aging.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ INTRODUCTION ═══ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                A Masterclass in<br />Non-Invasive<br />Skin Correction.
              </h2>
            </motion.div>
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <p className="text-xl text-muted-foreground leading-relaxed font-light mb-8">
                Unveil your skin's natural brilliance. Our medical-grade laser therapies are meticulously designed to target sun damage, persistent redness, and unwanted hair, while simultaneously refining your skin's overall texture and tone.
              </p>
              <div className="h-px w-24 bg-clinic-teal/30 mb-8" />
              <p className="text-muted-foreground italic">
                Clinical Excellence in every pulse.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGY BREAKDOWN ═══ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-foreground">The Clinical Edge</h2>
            <p className="text-muted-foreground tracking-wide uppercase text-xs font-bold">World-Class Light Technology</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ICON IPL System */}
            <motion.div
              className="bg-card p-10 rounded-[2rem] flex flex-col justify-between border border-border/40 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div>
                <span className="text-clinic-teal font-bold text-sm tracking-widest uppercase mb-4 block">Victoria & Langley</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">ICON® IPL System</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 font-light">
                  The ICON® system stands as the gold standard for addressing complex vascular and pigmented lesions. Designed with advanced contact cooling, it ensures a comfortable clinical experience while delivering high-intensity light pulses that seek out imperfections.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden aspect-video bg-secondary">
                <img
                  src={laserImg}
                  alt="ICON IPL medical laser device at Ageless Living clinic"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={450}
                />
              </div>
            </motion.div>

            {/* Sciton BBL */}
            <motion.div
              className="bg-foreground p-10 rounded-[2rem] flex flex-col justify-between shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <div>
                <span className="text-clinic-teal-light font-bold text-sm tracking-widest uppercase mb-4 block">Kelowna</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-background">Sciton® BBL (BroadBand Light)</h3>
                <p className="text-background/70 leading-relaxed mb-8 font-light">
                  Sciton® BBL is engineered to "turn back the clock" at a molecular level. By influencing gene expression associated with aging, this technology offers unmatched precision for skin rejuvenation, targeting brown spots and small facial veins with transformative speed.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden aspect-video bg-background/10">
                <img
                  src={skinImg}
                  alt="Skin rejuvenation treatment at Ageless Living clinic"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                  width={800}
                  height={450}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TREATMENT BENEFITS ═══ */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto section-padding">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="aspect-square rounded-full border border-clinic-teal/10 absolute -top-10 -left-10 w-full h-full animate-pulse" />
              <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={homeImg5}
                  alt="Radiant skin after laser treatment at Ageless Living"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={800}
                />
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 space-y-12"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Targeted Correction</h2>
                <p className="text-muted-foreground text-lg font-light">Precision therapy for every skin concern.</p>
              </div>
              <div className="space-y-8">
                {benefits.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.title} className="flex gap-6 group">
                      <Icon className="w-7 h-7 text-clinic-teal group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 text-foreground">{b.title}</h4>
                        <p className="text-muted-foreground font-light">{b.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ THE JOURNEY ═══ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground">The Journey to Brilliance</h2>
            <div className="mt-4 flex justify-center gap-1">
              <div className="w-2 h-2 rounded-full bg-clinic-teal/20" />
              <div className="w-2 h-2 rounded-full bg-clinic-teal/40" />
              <div className="w-2 h-2 rounded-full bg-clinic-teal/60" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="bg-card p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-500 border border-border/40"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <div className="w-12 h-12 rounded-full bg-clinic-teal-light flex items-center justify-center mb-6">
                  <span className="text-clinic-teal font-bold">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCATIONS ═══ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Available at All Locations</h2>
            <p className="text-muted-foreground font-light">Experience our light therapy treatments at any of our clinics.</p>
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

      <ServiceCTA />
    </>
  );
}
