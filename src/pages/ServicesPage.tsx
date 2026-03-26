import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, MapPin, Play } from "lucide-react";
import { Link } from "react-router-dom";
import skinImg from "@/assets/treatment-skin.jpg";
import hormoneImg from "@/assets/treatment-hormone.jpg";
import biohackingImg from "@/assets/treatment-biohacking.jpg";
import weightImg from "@/assets/treatment-weight.jpg";
import VideoTestimonial from "@/components/VideoTestimonial";

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
}

const treatments: Treatment[] = [
  {
    title: "Skin Rejuvenation",
    desc: "Advanced aesthetic treatments to restore your skin's youthful glow. From laser therapy to medical-grade skincare protocols tailored to your unique needs.",
    img: skinImg,
    subServices: [
      { name: "Botox / Dysport", desc: "Cosmetic injections to smooth fine lines and wrinkles.", locations: "Victoria, Langley, Kelowna" },
      { name: "Cosmetic Dermal Filler", desc: "Restore volume and contour with Restylane®, Revanesse®, PRP, and Sculptra®.", locations: "Victoria, Langley, Kelowna" },
      { name: "Customized UltraFacial", desc: "HydraFacial and AquaFirme treatments customized to your skin.", locations: "Victoria, Langley, Kelowna" },
      { name: "Laser & IPL/BBL", desc: "Medical-grade laser to reduce sun damage, redness, and improve texture.", locations: "Victoria, Langley, Kelowna" },
      { name: "The Perfect Derma™ Peel", desc: "Powerful glutathione peel for acne, scarring, and melasma.", locations: "Victoria, Langley, Kelowna" },
      { name: "Medical Microneedling", desc: "Collagen induction therapy for dramatic skin texture improvement.", locations: "Victoria, Langley, Kelowna" },
      { name: "Belkyra™", desc: "Injectable treatment to reduce submental fat (double chin).", locations: "Victoria, Langley, Kelowna" },
      { name: "Dermaplaning", desc: "Manual exfoliation for smoother, brighter skin.", locations: "Victoria, Langley, Kelowna" },
    ],
  },
  {
    title: "Hormone Balancing",
    desc: "Comprehensive hormone testing and bio-identical hormone restoration to reclaim your energy, mood, and vitality.",
    img: hormoneImg,
    subServices: [
      { name: "Bio-Identical Hormone Replacement (BHRT)", desc: "Customized hormone protocols to restore balance and vitality.", locations: "Victoria, Langley, Kelowna" },
      { name: "Comprehensive Blood Panels", desc: "Detailed lab testing to identify hormonal imbalances.", locations: "Victoria, Langley, Kelowna" },
      { name: "Thyroid Optimization", desc: "Targeted thyroid assessment and treatment.", locations: "Victoria, Langley, Kelowna" },
      { name: "Testosterone Therapy", desc: "Evidence-based testosterone restoration for men and women.", locations: "Victoria, Langley, Kelowna" },
      { name: "Progesterone & Estrogen Protocols", desc: "Balanced hormonal support for perimenopause and menopause.", locations: "Victoria, Langley, Kelowna" },
    ],
  },
  {
    title: "Biohacking",
    desc: "Cutting-edge IV therapy, NAD+, peptides, and longevity protocols designed to optimize your body's performance.",
    img: biohackingImg,
    subServices: [
      { name: "Red Light Therapy (PBM)", desc: "Light therapy that stimulates cellular repair and boosts collagen.", locations: "Kelowna" },
      { name: "IV Therapy", desc: "Medical-grade intravenous nutrient infusions.", locations: "Victoria, Langley, Kelowna" },
      { name: "Hyperbaric Oxygen Therapy (HBOT)", desc: "Pressurized oxygen therapy for tissue repair and brain health.", locations: "Kelowna" },
      { name: "Neurointegrator", desc: "Advanced neurofeedback for focus and mental clarity.", locations: "Kelowna" },
      { name: "Far Infrared Sauna", desc: "Deep-penetrating heat for detox and recovery.", locations: "Kelowna" },
      { name: "PEMF Therapy", desc: "Electromagnetic therapy for pain reduction and healing.", locations: "Kelowna" },
    ],
  },
  {
    title: "Health Weight",
    desc: "Medically supervised weight management combining nutrition science, metabolic testing, and ongoing support.",
    img: weightImg,
    subServices: [
      { name: "GLP-1 Support (Semaglutide)", desc: "Physician-prescribed medication for sustainable weight loss.", locations: "Victoria, Langley, Kelowna" },
      { name: "Metabolic Testing", desc: "Comprehensive metabolic assessment.", locations: "Victoria, Langley, Kelowna" },
      { name: "InBody Composition Analysis", desc: "Advanced body composition scanning.", locations: "Victoria, Langley, Kelowna" },
      { name: "Nutritional Counseling", desc: "Personalized dietary guidance.", locations: "Victoria, Langley, Kelowna" },
    ],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ServicesPage() {
  const [selected, setSelected] = useState<Treatment | null>(null);

  return (
    <>
      <Helmet>
        <title>Services | Ageless Living™ — Treatments & Care</title>
        <meta name="description" content="Explore our full range of wellness treatments: skin rejuvenation, hormone balancing, biohacking, and health weight programs." />
      </Helmet>

      {/* Hero */}
      <section className="pt-36 pb-20 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl"
          >
            <p className="label-sm mb-4">Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-[1.08]">
              Amazing care &<br />exceptional quality
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Ageless Living™ brings together the best of what's possible: the guidance, tools, and technologies to help you live better, longer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatment Cards Grid */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="group cursor-pointer"
                onClick={() => setSelected(t)}
              >
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground border border-border/50">
                    Service
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b border-foreground pb-0.5 group-hover:gap-3 transition-all duration-200">
                  See our treatments <ArrowRight className="h-4 w-4" />
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-14 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/book"
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            >
              Book a time
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Treatment Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center">
                  <X className="h-4 w-4 text-foreground" />
                </button>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{selected.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{selected.desc}</p>
                </div>
                <div className="space-y-3">
                  {selected.subServices.map((sub) => (
                    <div key={sub.name} className="p-4 rounded-xl bg-secondary border border-border/30">
                      <h4 className="font-bold text-foreground text-sm mb-1">{sub.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-1.5">{sub.desc}</p>
                      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" /> {sub.locations}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/book"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
                >
                  Book this treatment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <VideoTestimonial />
    </>
  );
}
