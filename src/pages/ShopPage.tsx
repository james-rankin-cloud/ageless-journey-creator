import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Star, Heart, Sparkles, Award, Truck, Check } from "lucide-react";

import mask1 from "@/assets/shop-1.jpeg";
import mask2 from "@/assets/shop-2.jpeg";
import mask3 from "@/assets/shop-3.jpeg";
import mask4 from "@/assets/shop-4.jpeg";

const SQUARE_URL = "https://ageless-store.vercel.app/";

const heroImages = [mask1, mask2, mask3, mask4];

const bundles = [
  {
    name: "Red Light Glow Bundle",
    badge: "Popular • Clinically Proven Combo",
    highlight: "Perfect after in-clinic treatments",
    savings: "Save 15% when bundled",
    items: [
      "Omnilux Contour Face Mask",
      "CE Ferulic Serum (30 ml)",
      "10× Bio Cellulose Sheet Masks",
      "Step-by-step guide",
      "15% bundle discount",
    ],
    desc: "Our most popular at-home combo. Extend your in-clinic glow with medical-grade red light therapy, our best-selling antioxidant serum, and hydrating sheet masks.",
    images: [mask2, mask1],
  },
  {
    name: "Skin Renewal Kit",
    badge: "Staff Pick • Best for Recovery",
    highlight: "Ideal for post-treatment skin",
    items: [
      "Phyto A+ Brightening Treatment",
      "HA Intensifier (30 ml)",
      "Physical Fusion SPF 50",
      "Epidermal Repair cream",
    ],
    desc: "A complete daily regimen for radiant, protected skin. Medical-grade actives our aestheticians trust for post-treatment recovery and daily protection.",
    images: [mask4],
  },
  {
    name: "Collagen Boost Pack",
    badge: "Anti-Aging • Visible Firmness",
    highlight: "Build collagen from the inside out",
    items: [
      "Dermal Collagen Powder (30 servings)",
      "Cleansing Complex",
      "Active Peel Singles (6-pack)",
    ],
    desc: "Combine our clinical peel with daily collagen supplementation for visible firmness. Perfect as a standalone routine or paired with in-clinic microneedling.",
    images: [],
  },
  {
    name: "Energy & Recovery Bundle",
    badge: "Biohacking • Peak Performance",
    highlight: "Pairs perfectly with IV therapy",
    savings: "Save 10% when bundled",
    items: [
      "Lipo Matrix supplement",
      "Omnilux Mask Combo (Face + Neck)",
      "P-TIOX Serum (30 ml)",
    ],
    desc: "Recover faster and feel energized. Designed to complement our biohacking and IV therapy treatments for those who want peak performance at home.",
    images: [mask3, mask4],
  },
  {
    name: "Hormone Support Essentials",
    badge: "Wellness • Physician-Selected",
    highlight: "Support your BHRT protocol at home",
    items: [
      "Dermal Collagen Powder (30 servings)",
      "Curated Supplement Stack",
      "Wellness tracking journal",
    ],
    desc: "Support your hormone balancing protocol at home with physician-selected supplements and daily collagen. Designed for clients on BHRT programs.",
    images: [],
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 leading-[1.1]">
              Premium Products We Personally Use &amp; Recommend in Clinic
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We only endorse what we trust in-clinic. Shop the full secure collection on our official store.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative bg-gradient-to-br from-secondary via-card to-accent rounded-3xl overflow-hidden border border-border/40"
          >
            <div className="grid lg:grid-cols-2 gap-0">
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
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading={i > 1 ? "lazy" : "eager"}
                    />
                  </motion.div>
                ))}
              </div>

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
                {/* Image collage */}
                {b.images.length > 0 && (
                  <div className="relative overflow-hidden">
                    <div className={`grid ${b.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-1`}>
                      {b.images.map((img, j) => (
                        <div key={j} className="h-52 overflow-hidden">
                          <img src={img} alt={`${b.name} product ${j + 1}`} className="w-full h-full object-cover object-center" loading="lazy" />
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent pointer-events-none" />
                    {b.savings && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-md">
                        {b.savings}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-accent text-xs font-bold text-foreground tracking-wide">
                      {b.badge}
                    </span>
                    {b.highlight && (
                      <span className="text-xs text-primary font-semibold">{b.highlight}</span>
                    )}
                  </div>

                  <h3 className="font-bold text-foreground text-xl mb-2">{b.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{b.desc}</p>

                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-3">Everything You Get</p>
                    <ul className="space-y-2">
                      {b.items.map((item) => (
                        <li key={item} className="text-sm text-foreground flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <a
                      href={SQUARE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/15 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97] text-sm"
                    >
                      Shop on Our Store <ExternalLink className="h-4 w-4" />
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
