import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Sparkles, Droplet, Clock } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  {
    title: "The Amazing Glow",
    desc: "By removing the dull, dead skin layer, we reveal the fresh, healthy cells beneath, resulting in an instant luminosity that radiates through makeup and serums.",
    featured: true,
    span: 2,
  },
  {
    title: "Deeper Penetration",
    desc: "Without the barrier of dead skin and hair, your expensive serums and moisturizers can penetrate significantly deeper, increasing their efficacy by up to 60%.",
    featured: false,
    icon: Droplet,
  },
  {
    title: "Flawless Application",
    desc: 'Makeup sits seamlessly on the skin, avoiding the "cakey" look often caused by surface texture and fine hair.',
    featured: false,
  },
  {
    title: "The Perfect Add-on",
    desc: "Dermaplaning prepares the skin beautifully for chemical peels or hydrating facials, allowing active ingredients to work without obstruction.",
    dark: true,
    span: 2,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Clinical Consultation",
    desc: "We begin with a thorough analysis of your skin type and concerns to ensure Dermaplaning is the ideal pathway for your aesthetic goals.",
  },
  {
    num: "02",
    title: "Precision Treatment",
    desc: "Your practitioner performs the exfoliation with focused precision, moving across the contours of your face to clear all debris and vellus hair.",
  },
  {
    num: "03",
    title: "Post-Care Ritual",
    desc: "The treatment concludes with the application of soothing, medical-grade hydration and SPF to protect your newly revealed complexion.",
  },
];

export default function DermaplaningPage() {
  return (
    <>
      <Helmet>
        <title>Dermaplaning | Ageless Living - Manual Exfoliation Treatment</title>
        <meta
          name="description"
          content="Dermaplaning is a highly effective manual exfoliation procedure using a sterile surgical-grade scalpel to remove dead skin cells and fine vellus hair for smoother, brighter skin."
        />
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-16 md:pb-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-7 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </Link>
              <div className="space-y-4">
                <span className="uppercase tracking-[0.3em] text-muted-foreground text-xs font-semibold">
                  Manual Exfoliation Specialist
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.9]">
                  Dermaplaning
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-xl font-light leading-relaxed">
                  Precision Manual Exfoliation for a complexion that reflects pure clarity and light.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 bg-clinic-teal text-white rounded-full px-10 py-4 font-semibold hover:bg-clinic-teal-container transition-all shadow-xl shadow-clinic-teal/10"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/prices"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-border bg-card text-foreground font-semibold transition-all hover:bg-secondary"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-foreground/5 transform lg:rotate-2">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=1000&fit=crop"
                  alt="Professional dermaplaning treatment in a clinical setting"
                  className="w-full h-full object-cover"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-teal/20 to-transparent" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-card p-6 rounded-2xl shadow-xl border border-border/50 hidden lg:block">
                <Clock className="w-6 h-6 text-clinic-teal mb-3" />
                <p className="text-sm font-medium text-foreground">
                  Immediate results with zero downtime. The ultimate skin refresh.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ THE TECHNIQUE ═══ */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="space-y-4">
                <div className="h-64 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=300&fit=crop"
                    alt="Professional surgical tool"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-sm border border-border/40">
                  <h4 className="font-bold text-clinic-teal mb-2">Vellus Hair</h4>
                  <p className="text-sm text-muted-foreground">
                    Effortlessly removes 'peach fuzz' for a smoother texture.
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-clinic-teal p-6 rounded-2xl shadow-lg text-white">
                  <h4 className="font-bold mb-2">Manual Precision</h4>
                  <p className="text-sm opacity-90">
                    Expertly guided manual exfoliation using surgical-grade instruments.
                  </p>
                </div>
                <div className="h-80 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=500&fit=crop"
                    alt="Smooth skin result"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 space-y-8"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                The Technique
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dermaplaning is a highly effective manual exfoliation procedure. Our practitioners
                use a sterile, surgical-grade scalpel held at a precise 45-degree angle to gently
                abrade the surface of the skin.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                This controlled process removes the outermost layer of dead skin cells (the stratum
                corneum) along with fine vellus hair, commonly known as "peach fuzz." Unlike other
                methods, it is entirely painless and provides an immediate transformation in skin
                clarity.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-clinic-teal mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Safe & Effective</span>
                    <span className="text-muted-foreground">
                      Suitable for most skin types, including sensitive and pregnant clients.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-clinic-teal mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Medical Grade</span>
                    <span className="text-muted-foreground">
                      Conducted under strict clinical protocols for maximum safety.
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ RADIANT RESULTS ═══ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Radiant Results
            </h2>
            <p className="text-xl text-muted-foreground">
              A single treatment unlocks a multitude of benefits for your daily skincare ritual.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* The Amazing Glow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="md:col-span-2 bg-card rounded-3xl p-10 flex flex-col justify-end shadow-sm border border-border/40 min-h-[280px] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-clinic-teal/5 to-transparent transition-opacity group-hover:opacity-100" />
              <Sparkles className="w-10 h-10 text-clinic-teal mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                The Amazing Glow
              </h3>
              <p className="text-muted-foreground max-w-md">
                By removing the dull, dead skin layer, we reveal the fresh, healthy cells beneath,
                resulting in an instant luminosity that radiates through makeup and serums.
              </p>
            </motion.div>

            {/* Deeper Penetration */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="bg-clinic-teal rounded-3xl p-10 flex flex-col justify-between shadow-xl text-white min-h-[280px]"
            >
              <Droplet className="w-8 h-8" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Deeper Penetration</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Without the barrier of dead skin and hair, your expensive serums and moisturizers
                  can penetrate significantly deeper, increasing their efficacy by up to 60%.
                </p>
              </div>
            </motion.div>

            {/* Flawless Application */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="bg-secondary rounded-3xl p-10 flex flex-col shadow-sm border border-border/40 min-h-[200px]"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Flawless Application</h3>
              <p className="text-muted-foreground text-sm">
                Makeup sits seamlessly on the skin, avoiding the "cakey" look often caused by
                surface texture and fine hair.
              </p>
            </motion.div>

            {/* The Perfect Add-on */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="md:col-span-2 bg-foreground rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl min-h-[200px]"
            >
              <div className="flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-clinic-teal text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                  Synergistic Care
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-background mb-4">
                  The Perfect 'Add-on'
                </h3>
                <p className="text-background/60 text-sm">
                  Dermaplaning prepares the skin beautifully for chemical peels or hydrating facials,
                  allowing active ingredients to work without obstruction.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden grayscale opacity-80">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop"
                  alt="Skincare serums"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ THE EXPERIENCE ═══ */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                The Experience
              </h2>
              <p className="text-xl text-muted-foreground">
                A meticulously curated journey from consultation to post-care perfection.
              </p>
            </motion.div>
            <div className="text-right">
              <span className="text-4xl font-light text-clinic-teal/30">45 Minutes</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <div className="text-[5rem] font-extrabold text-secondary/50 transition-colors group-hover:text-clinic-teal-light leading-none mb-4">
                  {step.num}
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24">
        <div className="container mx-auto section-padding">
          <motion.div
            className="max-w-4xl mx-auto bg-clinic-teal text-center p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter">
                Ready to reveal your glow?
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
                Join us at the clinic for a precision treatment that redefines your skin's natural
                brilliance.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-white text-clinic-teal rounded-full px-10 py-5 font-bold text-lg hover:bg-white/90 transition-all shadow-xl"
              >
                Book Your Session
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
