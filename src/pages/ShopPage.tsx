import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, Package, ShieldCheck } from "lucide-react";

const products = [
  { name: "Clinical Skincare Collection", desc: "Medical-grade serums, cleansers, and moisturizers used in our clinic treatments." },
  { name: "Hormone Support Supplements", desc: "Physician-curated supplements to support hormonal balance and vitality." },
  { name: "IV & Recovery Formulas", desc: "Oral supplements designed to complement your in-clinic IV therapy protocols." },
  { name: "Anti-Aging Essentials", desc: "Premium retinols, peptide creams, and SPF protection our clinicians trust daily." },
  { name: "Wellness Bundles", desc: "Curated treatment bundles combining our best products for comprehensive care." },
  { name: "Hair & Scalp Health", desc: "Growth serums and scalp treatments backed by clinical research and results." },
];

const bundles = [
  { name: "Energy Boost Bundle", desc: "Combines our top IV-support supplements with adaptogens for sustained daily energy.", pairs: "Pairs with Biohacking treatments" },
  { name: "Skin Renewal Kit", desc: "Medical-grade cleanser, retinol serum, and SPF — the essentials for at-home glow.", pairs: "Pairs with Skin Rejuvenation" },
  { name: "Hormone Support Pack", desc: "Curated supplements plus lifestyle guides to complement your hormone protocol.", pairs: "Pairs with Hormone Balancing" },
  { name: "Healthy Weight Starter", desc: "Metabolic support, protein shakes, and a nutrition planning guide.", pairs: "Pairs with Health Weight program" },
];

const SQUARE_URL = "https://ageless-living.square.site/s/shop";

export default function ShopPage() {
  return (
    <>
      <Helmet>
        <title>Shop | Ageless Living™ — Premium Products & At-Home Bundles</title>
        <meta name="description" content="Browse professional-grade products we trust in clinic. At-home bundles that match our services — shop securely on Square." />
      </Helmet>

      {/* Products section */}
      <section className="pt-32 pb-24 bg-wellness-warm">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Products</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.1]">Premium Products We Personally Use &amp; Recommend</h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
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
                <h2 className="font-bold text-foreground mb-2">{p.name}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <a href={SQUARE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                  View on Square <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* At-Home Bundles section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-14"
          >
            <div className="flex items-center gap-2 mb-3">
              <Package className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">At-Home & Online Options</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Can't Come In? We've Got You Covered.</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Order complete self-guided bundles online that match our in-clinic services. Same professional-grade products, delivered to your door.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {bundles.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-wellness-warm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border/50"
              >
                <h3 className="font-bold text-foreground text-lg mb-2">{b.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{b.desc}</p>
                <p className="text-xs text-primary font-medium mb-4">{b.pairs}</p>
                <a href={SQUARE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-md shadow-primary/15 hover:shadow-primary/25 transition-all duration-200 active:scale-[0.97]">
                  Shop This Bundle on Square <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-xl px-5 py-3 w-fit"
          >
            <ShieldCheck className="h-4 w-4 text-primary" />
            Secure checkout — same professional-grade products we use in clinic.
          </motion.div>
        </div>
      </section>
    </>
  );
}
