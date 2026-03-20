import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Star, Heart, Sparkles, Award, Truck } from "lucide-react";

import mask1 from "@/assets/mask-product-1.jpeg";
import mask2 from "@/assets/mask-product-2.jpeg";
import mask3 from "@/assets/mask-product-3.jpeg";
import mask4 from "@/assets/mask-product-4.jpeg";

const SQUARE_URL = "https://ageless-living.square.site/s/shop";

const heroImages = [mask1, mask2, mask3, mask4];

const bundles = [
  {
    name: "Red Light Glow Bundle",
    badge: "Most Popular",
    savings: "Save 15% when bundled",
    items: ["Omnilux Contour Mask", "CE Ferulic Serum", "Bio Cellulose Sheet Mask"],
    desc: "The perfect combo after in-clinic treatments. Extend your glow at home with clinical-grade red light therapy and our best-selling serum.",
    image: mask2,
    hasImage: true,
  },
  {
    name: "Skin Renewal Kit",
    badge: "Staff Pick",
    items: ["Phyto A+ Brightening Treatment", "HA Intensifier", "Physical Fusion SPF 50", "Epidermal Repair"],
    desc: "A complete daily regimen for radiant, protected skin. Medical-grade actives our aestheticians trust for post-treatment recovery.",
    hasImage: false,
  },
  {
    name: "Collagen Boost Pack",
    badge: "Anti-Aging",
    items: ["Dermal Collagen Powder", "Cleansing Complex", "Active Peel Singles"],
    desc: "Build collagen from the inside out. Combine our clinical peel with daily collagen supplementation for visible firmness.",
    hasImage: false,
  },
  {
    name: "Energy & Recovery Bundle",
    badge: "Biohacking",
    items: ["Lipo Matrix", "Omnilux Mask Combo", "P-TIOX Serum"],
    desc: "Recover faster and feel energized. Pairs perfectly with our IV therapy and biohacking treatments.",
    image: mask3,
    hasImage: true,
  },
  {
    name: "Hormone Support Essentials",
    badge: "Wellness",
    items: ["Dermal Collagen Powder", "Curated Supplement Stack"],
    desc: "Support your hormone balancing protocol at home with physician-selected supplements and daily collagen.",
    hasImage: false,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ShopPage() {
  return (
    <>
      <Helmet>
        <title>Shop | Ageless Living™ — Premium Products & At-Home Bundles</title>
        <meta name="description" content="Shop professional-grade red light therapy masks, skincare bundles, and wellness products trusted by our clinicians. Secure checkout on our official store." />
      </Helmet>

      {/* ── Hero: Red Light Therapy Masks ── */}
      <section className="pt-32 pb-20 bg-card">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl mb-10"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Products</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.1]">
              Premium Products We Personally Use &amp; Recommend in Clinic
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We only endorse what we trust in-clinic. Shop the full secure collection on our official store.
            </p>
          </motion.div>

          {/* Featured product */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative bg-gradient-to-br from-secondary via-card to-accent rounded-3xl overflow-hidden border border-border/40"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image grid */}
              <div className="grid grid-cols-2 gap-2 p-4 lg:p-6">
                {heroImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.1, ease }}
                    className="relative rounded-2xl overflow-hidden aspect-square group"
                  >
                    <img
                      src={img}
                      alt={`Ageless Living Red Light Therapy Mask - view ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={i > 1 ? "lazy" : "eager"}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                    <Star className="h-3 w-3 fill-current" /> Best Seller
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-foreground text-xs font-bold uppercase tracking-wide">
                    <Heart className="h-3 w-3" /> Clinically Loved
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Red Light Therapy Masks — Our Best-Seller
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Omnilux Contour Mask &amp; Combo use clinically proven wavelengths to stimulate collagen, reduce fine lines, and clear acne — the same technology our aestheticians trust in-clinic.
                </p>

                <ul className="space-y-2.5 mb-8">
                  {[
                    "FDA-cleared, medical-grade LED technology",
                    "Anti-aging + Anti-acne + Inflammation modes",
                    "Used & recommended by our clinicians daily",
                    "10-minute sessions, visible results in 4 weeks",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href={SQUARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-200 active:scale-[0.97] w-fit text-base"
                >
                  Shop on Our Store <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Curated At-Home Bundles ── */}
      <section className="py-24 bg-wellness-warm">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl mb-14"
          >
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Curated At-Home Bundles</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Extend Your Results Between Visits
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Complete self-guided kits that match our in-clinic services. Same professional-grade products, delivered to your door.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {bundles.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border/40 flex flex-col"
              >
                {b.hasImage && b.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    {b.savings && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-md">
                        {b.savings}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent text-xs font-bold text-foreground uppercase tracking-wide">
                      {b.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-foreground text-xl mb-2">{b.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{b.desc}</p>

                  <ul className="space-y-1.5 mb-6">
                    {b.items.map((item) => (
                      <li key={item} className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <a
                      href={SQUARE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-md shadow-primary/15 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
                    >
                      Shop on Our Store <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-16 bg-card">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary rounded-2xl p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center text-center md:text-left">
              {[
                { icon: ShieldCheck, text: "Same professional-grade products we use daily in-clinic" },
                { icon: Award, text: "Secure checkout on our official store" },
                { icon: Truck, text: "Free shipping on bundles over $150" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
