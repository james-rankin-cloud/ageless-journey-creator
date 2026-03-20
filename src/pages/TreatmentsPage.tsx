import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, ClipboardList, Stethoscope, Heart, X, Sparkles, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import skinImg from "@/assets/treatment-skin.jpg";
import hormoneImg from "@/assets/treatment-hormone.jpg";
import biohackingImg from "@/assets/treatment-biohacking.jpg";
import weightImg from "@/assets/treatment-weight.jpg";

const treatments = [
  {
    title: "Skin Rejuvenation",
    desc: "Advanced aesthetic treatments to restore your skin's youthful glow. From laser therapy to medical-grade skincare protocols tailored to your unique needs.",
    img: skinImg,
    detailBenefits: "Reduce wrinkles, sun damage, acne scars, and uneven tone. Our clinicians use a combination of microneedling, chemical peels, IPL photofacials, and medical-grade skincare to reveal smoother, brighter skin.",
    helps: "Fine lines & wrinkles, hyperpigmentation, acne scarring, dull or uneven skin tone, loss of elasticity",
    technologies: "SkinPen Microneedling, IPL Photofacial, VI Peel, SkinCeuticals Professional Protocols, LED Light Therapy",
    aestheticianNote: "Your aesthetician will assess your skin's condition, design a phased treatment plan, and adjust products and sessions based on how your skin responds over time.",
  },
  {
    title: "Hormone Balancing",
    desc: "Comprehensive hormone testing and bio-identical hormone restoration to reclaim your energy, mood, and vitality at any stage of life.",
    img: hormoneImg,
    detailBenefits: "Restore hormonal balance using bio-identical hormone replacement therapy (BHRT). Our physicians run comprehensive panels and customize dosing to address fatigue, weight gain, mood swings, and low libido.",
    helps: "Fatigue & low energy, weight gain, mood instability, low libido, perimenopause & menopause symptoms, andropause",
    technologies: "Bio-Identical Hormone Replacement Therapy (BHRT), Comprehensive Blood Panels, Thyroid Optimization, Testosterone Therapy, Progesterone & Estrogen Protocols",
    aestheticianNote: "Our clinicians monitor your hormone levels through regular testing and adjust your protocol as your body responds, ensuring safe and effective results.",
  },
  {
    title: "Biohacking",
    desc: "Cutting-edge IV therapy, NAD+, peptides, and longevity protocols designed to optimize your body's performance and slow the aging process.",
    img: biohackingImg,
    detailBenefits: "Push beyond conventional wellness with IV nutrient therapy, NAD+ infusions, peptide protocols, and advanced longevity strategies used by top-performing athletes and executives.",
    helps: "Low energy & brain fog, slow recovery, aging & cellular decline, immune support, athletic performance optimization",
    technologies: "IV Nutrient Therapy, NAD+ Infusions, Peptide Therapy (BPC-157, CJC/Ipamorelin), Glutathione Drips, Vitamin Injections",
    aestheticianNote: "Your clinician will build a personalized biohacking stack based on your bloodwork, goals, and lifestyle — adjusting frequency and dosing for peak results.",
  },
  {
    title: "Health Weight",
    desc: "Medically supervised weight management combining nutrition science, metabolic testing, and ongoing clinician support for lasting results.",
    img: weightImg,
    detailBenefits: "Achieve sustainable weight loss with medical supervision, metabolic testing, GLP-1 medication support, and nutrition coaching. Our programs address the root cause — not just the symptoms.",
    helps: "Stubborn weight, metabolic plateau, insulin resistance, emotional eating patterns, post-pregnancy weight",
    technologies: "GLP-1 Receptor Agonists (Semaglutide), Metabolic Testing, InBody Composition Analysis, Nutritional Counseling, Meal Planning",
    aestheticianNote: "Our nutritional practitioners and physicians work together to create a plan that fits your lifestyle, adjusting medications and diet as you progress toward your goal.",
  },
];

const planSteps = [
  { icon: MessageSquare, title: "In-depth Consultation", desc: "We listen carefully to your goals, review your health history, and identify exactly what will make the biggest difference for you." },
  { icon: ClipboardList, title: "Custom Treatment Plan", desc: "Your aesthetician designs a personalized protocol — selecting the right combination of treatments, products, and timing for your unique biology." },
  { icon: Stethoscope, title: "Guided Support", desc: "Throughout your journey, our clinicians are hands-on — adjusting your plan, monitoring progress, and ensuring you're comfortable every step of the way." },
  { icon: Heart, title: "Visible Results", desc: "With consistent care and expert guidance, you'll see real, lasting improvements — in how you look, how you feel, and how you live." },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function TreatmentsPage() {
  const [selectedTreatment, setSelectedTreatment] = useState<typeof treatments[0] | null>(null);

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
            transition={{ duration: 0.6, ease }}
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
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="group rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedTreatment(t)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-2">{t.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                  <div className="flex items-center justify-between">
                    <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200">
                      Learn How This Helps You <ArrowRight className="h-4 w-4" />
                    </button>
                    <Link
                      to="/book"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.97]"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Detail Modal */}
      <AnimatePresence>
        {selectedTreatment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedTreatment(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.3, ease }}
              className="bg-card rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-3xl">
                <img src={selectedTreatment.img} alt={selectedTreatment.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <button
                  onClick={() => setSelectedTreatment(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center hover:bg-card transition-colors"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{selectedTreatment.title}</h3>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Benefits</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedTreatment.detailBenefits}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary">What It Helps</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTreatment.helps.split(", ").map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-accent text-xs font-medium text-foreground">{item}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Technologies & Methods</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTreatment.technologies.split(", ").map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-foreground border border-border/40">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/50 rounded-2xl p-5 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Stethoscope className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-bold text-foreground">How Our Aestheticians Guide You</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedTreatment.aestheticianNote}</p>
                </div>

                <Link
                  to="/book"
                  onClick={() => setSelectedTreatment(null)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
                >
                  Book This Treatment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* How Our Aestheticians Help */}
      <section className="py-24 bg-card">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
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
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
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
