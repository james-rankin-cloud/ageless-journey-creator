import { motion } from "framer-motion";

const team = [
  {
    name: "Michael Forbes, BSc Pharm",
    role: "Owner & Pharmacist",
    img: "https://agelessliving.com/wp-content/uploads/2022/06/mike-768x768.png",
    email: "michael@agelessliving.ca",
    phone: "+1 (236) 326-6830",
  },
  {
    name: "Dr. Jean Paul Lim, MD",
    role: "Internal Medicine Specialist",
    img: "https://agelessliving.com/wp-content/uploads/2022/06/Screenshot-2024-06-14-at-10.23.47%E2%80%AFAM-768x767.png",
    email: "info@agelessliving.ca",
    phone: "+1 (236) 326-6830",
  },
  {
    name: "Sarita Hutton",
    role: "Director of Aesthetic Medicine",
    img: "https://agelessliving.com/wp-content/uploads/2022/06/4-768x768.png",
    email: "wellness@agelessliving.ca",
    phone: "+1 (250) 590-5787",
  },
];

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
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:border-muted-foreground/20 transition-colors duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-foreground mb-1">{m.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{m.role}</p>
                <div className="space-y-1 text-sm">
                  <a href={`mailto:${m.email}`} className="block text-muted-foreground hover:text-foreground transition-colors">{m.email}</a>
                  <a href={`tel:${m.phone.replace(/[^+\d]/g, "")}`} className="block text-muted-foreground hover:text-foreground transition-colors">{m.phone}</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
