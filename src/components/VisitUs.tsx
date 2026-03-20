import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  { initial: "L", name: "Langley", address: "415-20178 96th Ave, Langley, BC V1M 0B2", rating: "4.9", reviews: "142" },
  { initial: "V", name: "Victoria", address: "1-101 Burnside Rd W, Victoria, BC V9A 1B7", rating: "4.9", reviews: "89" },
  { initial: "K", name: "Kelowna", address: "102-3320 Richter Street, Kelowna, BC V1W 4V5", rating: "4.8", reviews: "56" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function VisitUs() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Clinics</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Us in BC</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Three beautiful clinics designed for your comfort and exceptional care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border/40 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-bold text-primary">{loc.initial}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{loc.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{loc.address}</p>
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-sm font-semibold text-foreground ml-1.5">{loc.rating}</span>
                <span className="text-xs text-muted-foreground ml-1">({loc.reviews} reviews)</span>
              </div>
              <Link
                to="/locations"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
              >
                View Location <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
          >
            See All Locations <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
