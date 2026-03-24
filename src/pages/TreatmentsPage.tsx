import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, ClipboardList, Stethoscope, Heart, X, Sparkles, MapPin, Play } from "lucide-react";
import { Link } from "react-router-dom";
import skinImg from "@/assets/treatment-skin.jpg";
import hormoneImg from "@/assets/treatment-hormone.jpg";
import biohackingImg from "@/assets/treatment-biohacking.jpg";
import weightImg from "@/assets/treatment-weight.jpg";

interface SubService {
  name: string;
  desc: string;
  locations: string;
}

interface Treatment {
  title: string;
  desc: string;
  img: string;
  subServices: SubService[];
  processText?: string;
  youtubeId: string;
  videoTitle: string;
}

const treatments: Treatment[] = [
  {
    title: "Skin Rejuvenation",
    desc: "Advanced aesthetic treatments to restore your skin's youthful glow. From laser therapy to medical-grade skincare protocols tailored to your unique needs.",
    img: skinImg,
    youtubeId: "ysqJNnXbS0E",
    videoTitle: "Skin Rejuvenation at Ageless Living",
    subServices: [
      { name: "Botox / Dysport", desc: "When performed by our certified and experienced clinical injectors, cosmetic injections can be one of the simplest and most effective ways to take years off your appearance.", locations: "Victoria, Langley, Kelowna" },
      { name: "Cosmetic Dermal Filler", desc: "Smooth away lines and restore volume quickly and easily with cosmetic dermal fillers. Enhance and contour areas such as cheeks, lips, chin, and jawline. We offer treatments with Restylane®, Revanesse®, PRP, and Sculptra®.", locations: "Victoria, Langley, Kelowna" },
      { name: "Customized UltraFacial", desc: "Our Victoria and Langley locations offer customized HydraFacials, while our Kelowna location offers customized AquaFirme Facials.", locations: "Victoria, Langley, Kelowna" },
      { name: "Laser & IPL/BBL Photorejuvenation", desc: "All our locations offer medical-grade laser treatments to reduce sun damage, redness, unwanted hair, and improve skin texture. Our Victoria and Langley locations offer IPL treatments with an ICON® laser, while our Kelowna location provides BBL treatments with a Sciton® laser.", locations: "Victoria, Langley, Kelowna" },
      { name: "The Perfect Derma™ Peel", desc: "The Perfect Derma™️ Peel is a powerful glutathione peel treatment designed to completely resurface the skin. This system targets stubborn acne, scarring, melasma, and deep hyperpigmentation.", locations: "Victoria, Langley, Kelowna" },
      { name: "Medical Microneedling", desc: "Medical Microneedling Collagen Induction Therapy introduces controlled micro-injury into the skin, triggering a wound healing response and the release of natural growth factors. Skin texture issues are dramatically improved with a series of treatments.", locations: "Victoria, Langley, Kelowna" },
      { name: "Belkyra™", desc: "BELKYRA™️ is an injectable used to reduce the fat in the submental area (double chin). It contains a synthetic form of deoxycholic acid, which destroys fat cells when injected.", locations: "Victoria, Langley, Kelowna" },
      { name: "Dermaplaning", desc: "Dermaplaning is a manual exfoliation technique that removes dead skin cells and vellus hair (peach fuzz) to reveal smoother, brighter skin and enhance product absorption.", locations: "Victoria, Langley, Kelowna" },
    ],
  },
  {
    title: "Hormone Balancing",
    desc: "Comprehensive hormone testing and bio-identical hormone restoration to reclaim your energy, mood, and vitality at any stage of life.",
    img: hormoneImg,
    youtubeId: "K7XdYmVmJ0A",
    videoTitle: "Hormones — Ageless Living Episode 27",
    processText: "The Ageless Living philosophy is deeply rooted in education. We believe that the best outcomes happen when patients understand the why behind their treatment — not just the what. During your initial consultation, we take the time to explain the science of hormone optimization, how imbalances affect your health, and what personalized restoration looks like for you.\n\nPhysician Consult: Our physician conducts a comprehensive health assessment, reviews your detailed bloodwork panel, and identifies hormonal imbalances affecting your energy, mood, weight, sleep, and vitality. Together, you'll design a bio-identical hormone replacement therapy (BHRT) protocol customized to your unique biology.\n\nNutritionist Consultation: Our nutritional practitioner works alongside your physician to create a dietary and supplement plan that supports your hormonal restoration — optimizing gut health, metabolism, and long-term wellness.\n\nFollow Up: Your hormone levels are closely monitored through regular testing. Our clinicians adjust your protocol as your body responds, ensuring safe, effective, and lasting results at every stage of your journey.",
    subServices: [
      { name: "Bio-Identical Hormone Replacement (BHRT)", desc: "Customized hormone protocols using bio-identical hormones to restore balance, energy, and vitality.", locations: "Victoria, Langley, Kelowna" },
      { name: "Comprehensive Blood Panels", desc: "Detailed lab testing to identify hormonal imbalances and guide treatment decisions.", locations: "Victoria, Langley, Kelowna" },
      { name: "Thyroid Optimization", desc: "Targeted thyroid assessment and treatment to support metabolism and energy levels.", locations: "Victoria, Langley, Kelowna" },
      { name: "Testosterone Therapy", desc: "Evidence-based testosterone restoration for men and women experiencing low T symptoms.", locations: "Victoria, Langley, Kelowna" },
      { name: "Progesterone & Estrogen Protocols", desc: "Balanced hormonal support for perimenopause, menopause, and overall hormonal health.", locations: "Victoria, Langley, Kelowna" },
    ],
  },
  {
    title: "Biohacking",
    desc: "Cutting-edge IV therapy, NAD+, peptides, and longevity protocols designed to optimize your body's performance and slow the aging process.",
    img: biohackingImg,
    youtubeId: "ysqJNnXbS0E",
    videoTitle: "Biohacking & Red Light Therapy at Ageless Living",
    subServices: [
      { name: "Photobiomodulation (PBM) / Red Light Therapy", desc: "Clinically proven light therapy that stimulates cellular repair, reduces inflammation, boosts collagen, and accelerates healing at the mitochondrial level.", locations: "Kelowna" },
      { name: "IV Therapy", desc: "Medical-grade intravenous nutrient infusions tailored to your goals — from energy and immunity to recovery and anti-aging. Includes vitamin drips, glutathione, and custom formulations.", locations: "Victoria, Langley, Kelowna" },
      { name: "Hyperbaric Oxygen Therapy (HBOT)", desc: "Pressurized oxygen therapy that enhances circulation, promotes tissue repair, and supports brain health and athletic recovery.", locations: "Kelowna" },
      { name: "Neurointegrator", desc: "Advanced neurofeedback technology that helps retrain brain patterns, improve focus, reduce stress, and support mental clarity.", locations: "Kelowna" },
      { name: "Brain Tap", desc: "Guided audio-visual entrainment sessions designed to reduce stress, enhance sleep quality, and boost cognitive performance.", locations: "Kelowna" },
      { name: "Far Infrared Sauna", desc: "Deep-penetrating infrared heat therapy for detoxification, muscle recovery, circulation, and relaxation.", locations: "Kelowna" },
      { name: "NuCalm", desc: "A patented neuroscience-based system that naturally reduces stress and improves recovery by guiding your brain into deep relaxation without drugs.", locations: "Kelowna" },
      { name: "PEMF (Pulsed Electromagnetic Field Therapy)", desc: "Non-invasive electromagnetic therapy that stimulates cellular repair, reduces pain, and accelerates healing.", locations: "Kelowna" },
    ],
  },
  {
    title: "Health Weight",
    desc: "Medically supervised weight management combining nutrition science, metabolic testing, and ongoing clinician support for lasting results.",
    img: weightImg,
    youtubeId: "K7XdYmVmJ0A",
    videoTitle: "Health Weight & Longevity at Ageless Living",
    processText: "Your weight is a direct function of your diet and metabolism. At Ageless Living, we understand that lasting weight management requires more than willpower — it requires medical insight, metabolic understanding, and ongoing professional support.\n\nWhat makes Ageless Living different? Our program is unique and medically-based. We don't believe in one-size-fits-all diets or trendy shortcuts. Instead, our physicians and nutritional practitioners work together to identify the root causes of weight gain — from hormonal imbalances and insulin resistance to metabolic slowdown and stress — and address them with evidence-based solutions.\n\nWhat is Health Weight? Health Weight is our comprehensive, medically supervised weight management program that combines GLP-1 receptor agonist support (Semaglutide), metabolic testing, InBody composition analysis, nutritional counseling, and personalized meal planning. Every step is guided by our clinical team, with regular check-ins and adjustments to keep you progressing toward your goals safely and sustainably.",
    subServices: [
      { name: "GLP-1 Receptor Agonists (Semaglutide)", desc: "Physician-prescribed medication that supports appetite regulation and sustainable weight loss.", locations: "Victoria, Langley, Kelowna" },
      { name: "Metabolic Testing", desc: "Comprehensive metabolic assessment to understand your body's calorie needs and fat-burning efficiency.", locations: "Victoria, Langley, Kelowna" },
      { name: "InBody Composition Analysis", desc: "Advanced body composition scanning to track lean mass, fat mass, and hydration over time.", locations: "Victoria, Langley, Kelowna" },
      { name: "Nutritional Counseling", desc: "Personalized dietary guidance from our clinical nutritionists tailored to your metabolic profile and goals.", locations: "Victoria, Langley, Kelowna" },
    ],
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
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

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
                className="group relative rounded-lg overflow-hidden cursor-pointer"
                onClick={() => { setSelectedTreatment(t); setVideoPlaying(false); }}
              >
                <div className="relative aspect-[16/9]">
                  <img src={t.img} alt={t.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-xl font-bold text-white mb-1">{t.title}</h2>
                  </div>
                </div>
                <div className="bg-card p-6 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-primary font-medium">
                    {t.subServices.slice(0, 4).map((sub) => (
                      <span key={sub.name} className="bg-accent px-2.5 py-1 rounded-sm">{sub.name}</span>
                    ))}
                    {t.subServices.length > 4 && <span className="bg-accent px-2.5 py-1 rounded-sm">+{t.subServices.length - 4} more</span>}
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                    <Link
                      to="/book"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg hover:bg-primary/90 transition-all duration-200 active:scale-[0.97]"
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
              className="bg-card rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header image */}
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-3xl">
                <img src={selectedTreatment.img} alt={selectedTreatment.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
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

              <div className="p-6 md:p-8 space-y-8">
                {/* Process text if available */}
                {selectedTreatment.processText && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Stethoscope className="h-4 w-4 text-primary" />
                      <h4 className="text-sm font-bold uppercase tracking-widest text-primary">The Process</h4>
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                      {selectedTreatment.processText.split("\n\n").map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sub-services */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Services Included</h4>
                  </div>
                  <div className="space-y-3">
                    {selectedTreatment.subServices.map((sub) => (
                      <div key={sub.name} className="bg-accent/40 rounded-2xl p-5 border border-border/20">
                        <h5 className="font-bold text-foreground text-sm mb-1.5">{sub.name}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-2">{sub.desc}</p>
                        <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                          <MapPin className="h-3 w-3" />
                          Available at: {sub.locations}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aesthetician note */}
                <div className="bg-accent/50 rounded-2xl p-5 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Stethoscope className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-bold text-foreground">How Our Aestheticians Guide You</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your clinician will assess your unique needs, design a phased treatment plan, and adjust your protocol based on how your body responds — ensuring safe, effective, and lasting results.
                  </p>
                </div>

                {/* YouTube Video */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Play className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Watch & Learn</h4>
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-muted aspect-video relative">
                    <img
                      src={selectedTreatment.img}
                      alt={selectedTreatment.videoTitle}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/40 flex flex-col items-center justify-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center shadow-lg">
                        <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                      <span className="text-white font-semibold text-sm tracking-wide bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-sm">Video Coming Soon</span>
                    </div>
                  </div>
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
