import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ClipboardList, Stethoscope, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import skinImg from "@/assets/treatment-skin.jpg";
import hormoneImg from "@/assets/treatment-hormone.jpg";
import biohackingImg from "@/assets/treatment-biohacking.jpg";
import weightImg from "@/assets/treatment-weight.jpg";

const treatments = [
  { title: "Skin Rejuvenation", desc: "Advanced aesthetic treatments to restore your skin's youthful glow. From laser therapy to medical-grade skincare protocols tailored to your unique needs.", img: skinImg },
  { title: "Hormone Balancing", desc: "Comprehensive hormone testing and bio-identical hormone restoration to reclaim your energy, mood, and vitality at any stage of life.", img: hormoneImg },
  { title: "Biohacking", desc: "Cutting-edge IV therapy, NAD+, peptides, and longevity protocols designed to optimize your body's performance and slow the aging process.", img: biohackingImg },
  { title: "Health Weight", desc: "Medically supervised weight management combining nutrition science, metabolic testing, and ongoing clinician support for lasting results.", img: weightImg },
];

const planSteps = [
  { icon: MessageSquare, title: "In-depth Consultation", desc: "We listen carefully to your goals, review your health history, and identify exactly what will make the biggest difference for you." },
  { icon: ClipboardList, title: "Custom Treatment Plan", desc: "Your aesthetician designs a personalized protocol — selecting the right combination of treatments, products, and timing for your unique biology." },
  { icon: Stethoscope, title: "Guided Support", desc: "Throughout your journey, our clinicians are hands-on — adjusting your plan, monitoring progress, and ensuring you're comfortable every step of the way." },
  { icon: Heart, title: "Visible Results", desc: "With consistent care and expert guidance, you'll see real, lasting improvements — in how you look, how you feel, and how you live." },
];

export default function TreatmentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ageless Living Treatments",
    itemListElement: treatments.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "MedicalTherapy", name: t.title, description: t.desc },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Treatments | Ageless Living™ — Skin, Hormones, Biohacking & More</title>
        <meta name="description" content="Explore our full range of wellness treatments: skin rejuvenation, hormone balancing, biohacking, and health weight programs." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="pt-32 pb-24 bg-wellness-warm">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Treatments</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.1]">Picture Your Possible.</h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Ageless Living™ brings together the best of what's possible: the guidance, tools, and technologies to help you live better, longer.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {treatments.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-2">{t.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                  <Link to="/book" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200">
                    Book This Treatment <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Aestheticians Help */}
      <section className="py-24 bg-card">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Your Plan</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Our Aestheticians Help You Achieve Your Goal</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every treatment starts with understanding you. Here's how our expert team creates your custom plan.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {planSteps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative text-center"
              >
                <div className="text-6xl font-bold text-primary/10 absolute -top-2 left-1/2 -translate-x-1/2">{i + 1}</div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-5">
                    <s.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-14"
          >
            <Link to="/book" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]">
              Start Your Plan <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
