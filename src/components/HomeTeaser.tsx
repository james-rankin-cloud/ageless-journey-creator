import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, ShoppingBag, CalendarCheck } from "lucide-react";

const cards = [
  { icon: Sparkles, title: "Our Treatments", desc: "Skin rejuvenation, hormone balancing, biohacking, and more — tailored to your goals.", to: "/treatments" },
  { icon: MapPin, title: "Locations & Team", desc: "Meet our expert clinicians across Langley, Victoria, and Kelowna.", to: "/locations" },
  { icon: ShoppingBag, title: "Shop & Bundles", desc: "At-home bundles and professional-grade products we trust in clinic.", to: "https://ageless-store.vercel.app/", external: true },
  { icon: CalendarCheck, title: "Book Your Visit", desc: "Choose your location, services, and preferred clinician — all in one place.", to: "/book" },
];

export default function HomeTeaser() {
  return (
    <section className="py-24 bg-wellness-warm">
      <div className="container mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore What We Offer</h2>
          <p className="text-muted-foreground leading-relaxed">Everything you need to start your wellness journey, all in one place.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {c.external ? (
                <a
                  href={c.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <c.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ) : (
              <Link
                to={c.to}
                className="block bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <c.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
