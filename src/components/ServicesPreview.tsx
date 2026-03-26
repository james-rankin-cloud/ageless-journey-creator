import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import skinImg from "@/assets/treatment-skin.jpg";
import hormoneImg from "@/assets/treatment-hormone.jpg";
import biohackingImg from "@/assets/treatment-biohacking.jpg";

const services = [
  {
    title: "Skin Rejuvenation",
    desc: "Advanced aesthetic treatments including Botox, fillers, laser therapy, and medical-grade skincare protocols tailored to your unique needs.",
    img: skinImg,
  },
  {
    title: "Hormone Balancing",
    desc: "Comprehensive hormone testing and bio-identical hormone restoration to reclaim your energy, mood, and vitality at any stage of life.",
    img: hormoneImg,
  },
  {
    title: "Biohacking",
    desc: "Cutting-edge IV therapy, NAD+, peptides, red light therapy, and longevity protocols designed to optimize your body's performance.",
    img: biohackingImg,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ServicesPreview() {
  return (
    <section className="section-y bg-background">
      <div className="container mx-auto section-padding">
        <motion.p
          className="label-sm mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Services
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden mb-5">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground border border-border/50">
                  Service
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all duration-200 border-b border-foreground pb-0.5"
          >
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
