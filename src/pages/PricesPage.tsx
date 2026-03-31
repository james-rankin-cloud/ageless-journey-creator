import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VideoTestimonial from "@/components/VideoTestimonial";
import ContactBlock from "@/components/ContactBlock";

const categories = [
  {
    name: "Skin Rejuvenation",
    items: [
      { name: "Botox / Dysport", duration: "30 minutes", price: "$250 – $600" },
      { name: "Cosmetic Dermal Filler (per syringe)", duration: "45 minutes", price: "$550 – $850" },
      { name: "Customized UltraFacial", duration: "60 minutes", price: "$200 – $350" },
      { name: "Laser & IPL/BBL Photorejuvenation", duration: "45 minutes", price: "$300 – $500" },
      { name: "The Perfect Derma™ Peel", duration: "30 minutes", price: "$350" },
      { name: "Medical Microneedling", duration: "60 minutes", price: "$350 – $500" },
      { name: "Belkyra™ (per treatment)", duration: "30 minutes", price: "$600 – $1,200" },
      { name: "Dermaplaning", duration: "30 minutes", price: "$125" },
    ],
  },
  {
    name: "Hormone Balancing",
    items: [
      { name: "Initial Physician Consultation", duration: "60 minutes", price: "$350" },
      { name: "Comprehensive Blood Panel", duration: "15 minutes", price: "$200 – $500" },
      { name: "Bio-Identical Hormone Therapy (BHRT) — Monthly", duration: "Ongoing", price: "$150 – $400/mo" },
      { name: "Thyroid Optimization Follow-up", duration: "30 minutes", price: "$150" },
      { name: "Nutritionist Consultation", duration: "45 minutes", price: "$125" },
    ],
  },
  {
    name: "Biohacking",
    items: [
      { name: "IV Therapy — Standard Drip", duration: "45 minutes", price: "$200 – $350" },
      { name: "NAD+ Infusion", duration: "2–4 hours", price: "$500 – $1,000" },
      { name: "Red Light Therapy (PBM) Session", duration: "20 minutes", price: "$50" },
      { name: "Hyperbaric Oxygen Therapy", duration: "60 minutes", price: "$150" },
      { name: "Far Infrared Sauna Session", duration: "30 minutes", price: "$40" },
      { name: "PEMF Therapy Session", duration: "30 minutes", price: "$75" },
    ],
  },
  {
    name: "Health Weight",
    items: [
      { name: "Initial Medical Assessment", duration: "60 minutes", price: "$350" },
      { name: "GLP-1 Support (Semaglutide) — Monthly", duration: "Ongoing", price: "$400 – $600/mo" },
      { name: "InBody Composition Analysis", duration: "15 minutes", price: "$50" },
      { name: "Nutritional Counseling Session", duration: "45 minutes", price: "$125" },
      { name: "Metabolic Testing", duration: "30 minutes", price: "$200" },
    ],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function PricesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Helmet>
        <title>Prices | Ageless Living™ — Transparent Treatment Pricing</title>
        <meta name="description" content="Affordable prices for every beauty and wellness need. View treatment costs for skin rejuvenation, hormone balancing, biohacking, and weight management." />
      </Helmet>

      {/* Hero */}
      <section className="pt-36 pb-20 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl"
          >
            <p className="label-sm mb-4">Prices</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-5 leading-[1.08]">
              Affordable prices for every wellness need
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              We believe in full transparency. Here's what our treatments cost — no hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs + Price List */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto section-padding">
          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-4">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Price list */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl"
          >
            <div className="divide-y divide-border">
              {categories[activeTab].items.map((item) => (
                <div key={item.name} className="flex items-center justify-between py-5 gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-sm mb-0.5">{item.name}</h3>
                    <p className="text-xs text-muted-foreground">{item.duration}</p>
                  </div>
                  <span className="text-sm font-bold text-foreground whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/book"
                className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              >
                Book a time
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoTestimonial />
      <ContactBlock />
    </>
  );
}
