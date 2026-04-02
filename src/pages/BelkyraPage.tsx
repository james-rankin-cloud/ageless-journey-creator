import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowDown, Check, FlaskConical, Sparkles, Activity } from "lucide-react";
import ServiceCTA from "@/components/ServiceCTA";
import belkyraImg from "@/assets/belkyra.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const scienceCards = [
  {
    icon: FlaskConical,
    title: "Deoxycholic Acid",
    desc: "A naturally occurring substance in the human body that aids in the breakdown and absorption of dietary fat.",
    featured: false,
  },
  {
    icon: Sparkles,
    title: "Cellular Disruption",
    desc: "When injected into submental fat, Belkyra destroys the cell membrane, preventing those cells from storing or accumulating fat in the future.",
    featured: true,
  },
  {
    icon: Activity,
    title: "Natural Elimination",
    desc: "Once the fat cells are neutralized, your body's natural metabolism processes and clears the debris over several weeks.",
    featured: false,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Clinical Consultation",
    desc: "We assess your submental fat distribution and skin elasticity to ensure you are an ideal candidate. A personalized treatment roadmap is designed for your specific anatomy.",
    points: ["Medical Clearance", "Photo Documentation"],
  },
  {
    num: "02",
    title: "Precise Treatment",
    desc: "The area is marked using a surgical grid to ensure even distribution. Using micro-fine needles, Belkyra is strategically administered. Comfort is prioritized throughout.",
    points: ["Topical Numbing", "20-30 Minute Session"],
  },
  {
    num: "03",
    title: "Recovery & Aftercare",
    desc: "Minor swelling is a positive indicator that the product is working. We provide cooling compresses and a tailored post-care kit to manage the initial 48-72 hours.",
    points: ["Detailed Instructions", "Scheduled Follow-up"],
  },
];

export default function BelkyraPage() {
  return (
    <>
      <Helmet>
        <title>Belkyra | Ageless Living - Double Chin Reduction Treatment</title>
        <meta
          name="description"
          content="Belkyra is an injectable treatment specifically formulated to reduce fat in the submental area beneath the chin to create a beautifully defined, sculpted profile without surgery."
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
                <span className="inline-block px-4 py-1.5 rounded-full bg-clinic-teal-light text-clinic-teal text-xs font-semibold tracking-wide uppercase">
                  Advanced Injectable
                </span>
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
                  Belkyra
                  <br />
                  <span className="text-clinic-teal font-light italic">Submental Contouring</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
                  BELKYRA is an injectable treatment specifically formulated to reduce fat in the
                  submental area—the region beneath the chin—to create a beautifully defined,
                  sculpted profile without surgery.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-clinic-teal to-cyan-500 text-white rounded-full px-10 py-4 font-semibold hover:from-clinic-teal/90 hover:to-cyan-500/90 transition-all shadow-xl shadow-cyan-500/20"
                >
                  Start Your Transformation
                </Link>
                <button
                  onClick={() => {
                    document.getElementById("science")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 text-clinic-teal font-semibold hover:underline"
                >
                  View Results <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-foreground/5">
                <img
                  src={belkyraImg}
                  alt="Woman with defined jawline showcasing Belkyra treatment results"
                  className="w-full h-full object-cover object-top"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-teal/10 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-xl p-6 rounded-2xl border border-border/50 shadow-lg hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-clinic-teal-light flex items-center justify-center">
                    <Check className="w-5 h-5 text-clinic-teal" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      FDA Approved
                    </p>
                    <p className="text-sm font-semibold text-foreground">Clinically Proven Results</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ THE SCIENCE ═══ */}
      <section id="science" className="py-16 bg-secondary/30 scroll-mt-24">
        <div className="container mx-auto section-padding">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              The Science of Dissolving
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Understanding the biological mechanism behind non-surgical fat reduction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {scienceCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className={`p-10 rounded-xl ${
                    card.featured
                      ? "bg-clinic-teal text-white shadow-lg md:-translate-y-4"
                      : "bg-card border border-border/40"
                  }`}
                >
                  <div
                    className={`mb-6 ${card.featured ? "text-clinic-teal-light" : "text-clinic-teal"}`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      card.featured ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ THE EXPERIENCE ═══ */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto section-padding">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              The Ageless Experience
            </h2>
            <p className="text-background/60 max-w-2xl mx-auto">
              Medical precision meets spa-like tranquility in our curated treatment journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <div className="text-6xl font-light text-background/10 absolute -top-10 -left-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-6 pt-4">{step.title}</h3>
                <p className="text-background/60 text-sm leading-relaxed mb-8">{step.desc}</p>
                <ul className="space-y-3">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs uppercase tracking-widest text-clinic-teal-light"
                    >
                      <Check className="w-4 h-4" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready to redefine your profile?"
        description="Book your comprehensive consultation today and discover if Belkyra is the right path for your aesthetic goals."
        primaryButtonText="Book Your Consultation"
      />
    </>
  );
}
