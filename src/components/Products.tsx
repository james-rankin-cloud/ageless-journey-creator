import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const products = [
  { name: "Clinical Skincare Collection", desc: "Medical-grade serums, cleansers, and moisturizers used in our clinic treatments." },
  { name: "Hormone Support Supplements", desc: "Physician-curated supplements to support hormonal balance and vitality." },
  { name: "IV & Recovery Formulas", desc: "Oral supplements designed to complement your in-clinic IV therapy protocols." },
  { name: "Anti-Aging Essentials", desc: "Premium retinols, peptide creams, and SPF protection our clinicians trust daily." },
  { name: "Wellness Bundles", desc: "Curated treatment bundles combining our best products for comprehensive care." },
  { name: "Hair & Scalp Health", desc: "Growth serums and scalp treatments backed by clinical research and results." },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-wellness-warm">
      <div className="container mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Premium Products We Personally Use &amp; Recommend
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We only endorse what we trust in-clinic. Shop the full secure collection on our official Square store.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <span className="text-xl">✦</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <a
                href="https://ageless-living.square.site/s/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                View on Square <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
