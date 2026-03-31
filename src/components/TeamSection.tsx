import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getFeaturedStaff, getStaffAltText } from "@/data/staffData";

const featured = getFeaturedStaff();

const ease = [0.16, 1, 0.3, 1] as const;

export default function TeamSection() {
  return (
    <section className="section-y bg-background">
      <div className="container mx-auto section-padding">
        <motion.div
          className="max-w-xl mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Dedicated team of experts
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every little detail counts, and with our team, it creates a meaningful and lasting impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((m, i) => (
            <Link key={m.slug} to={`/our-team/${m.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-muted-foreground/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={m.image}
                    alt={getStaffAltText(m)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-foreground mb-1">{m.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{m.role}</p>
                  {m.email && (
                    <div className="space-y-1 text-sm">
                      <span className="block text-muted-foreground">{m.email}</span>
                      {m.phone && <span className="block text-muted-foreground">{m.phone}</span>}
                    </div>
                  )}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
