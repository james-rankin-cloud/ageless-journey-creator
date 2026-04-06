import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import skinImg from "@/assets/services-1.jpg";
import hormoneImg from "@/assets/hormone-balancing.jpg";
import biohackingImg from "@/assets/biohacking.jpg";
import weightImg from "@/assets/health-weight.jpg";

const treatments = [
  {
    title: "Skin Rejuvenation",
    desc: "Advanced aesthetic treatments to restore your skin's youthful glow. From laser therapy to medical-grade skincare protocols tailored to your unique needs.",
    img: skinImg,
  },
  {
    title: "Hormone Balancing",
    desc: "Comprehensive hormone testing and bio-identical hormone restoration to reclaim your energy, mood, and vitality at any stage of life.",
    img: hormoneImg,
  },
  {
    title: "Biohacking",
    desc: "Cutting-edge IV therapy, NAD+, peptides, and longevity protocols designed to optimize your body's performance and slow the aging process.",
    img: biohackingImg,
  },
  {
    title: "Health Weight",
    desc: "Medically supervised weight management combining nutrition science, metabolic testing, and ongoing clinician support for lasting results.",
    img: weightImg,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" } as const,
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Treatments() {
  return (
    <section id="treatments" className="py-24 bg-wellness-warm">
      <div className="container mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Treatments</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Picture Your Possible.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ageless Living™ brings together the best of what's possible: the guidance, tools, and technologies to help you live better, longer.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                <a
                  href="#booking"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
                >
                  Learn How This Helps You <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
