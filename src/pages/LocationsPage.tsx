import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Syringe, Dumbbell, Heart, Pill, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { getStaffByLocation, getStaffAltText, type Location } from "@/data/staffData";

const locationData: Record<Location, { name: string; initial: string; address: string }> = {
  langley: { name: "Langley", initial: "L", address: "415-20178 96th Ave, Langley, BC V1M 0B2" },
  victoria: { name: "Victoria", initial: "V", address: "1-101 Burnside Rd W, Victoria, BC V9A 1B7" },
  kelowna: { name: "Kelowna", initial: "K", address: "102-3320 Richter Street, Kelowna, BC V1W 4V5" },
};

const locationServices: Record<Location, { category: string; subs: string[] }[]> = {
  langley: [
    { category: "Skin Rejuvenation", subs: ["Botox / Dysport", "Cosmetic Dermal Filler", "Customized HydraFacial", "Laser & IPL Photorejuvenation", "The Perfect Derma™ Peel", "Medical Microneedling", "Belkyra™", "Dermaplaning"] },
    { category: "Hormone Balancing (BHRT)", subs: ["Physician Consult", "Nutritionist Consultation", "Lab Work & Follow-Up"] },
    { category: "IV Therapy & NAD+", subs: ["NAD+ Infusion", "Vitamin & Mineral IV", "Immunity Boost"] },
    { category: "Aesthetic Injectables", subs: ["Lip Enhancement", "Jawline Contouring", "Cheek Augmentation"] },
    { category: "Microneedling & Peels", subs: ["Collagen Induction Therapy", "Active Peel Singles"] },
    { category: "Peptide Therapy", subs: ["Custom Peptide Protocols"] },
  ],
  victoria: [
    { category: "Skin Rejuvenation", subs: ["Botox / Dysport", "Cosmetic Dermal Filler", "Customized HydraFacial", "Laser & IPL Photorejuvenation", "The Perfect Derma™ Peel", "Medical Microneedling", "Belkyra™", "Dermaplaning"] },
    { category: "Aesthetic Injectables", subs: ["Lip Enhancement", "Jawline Contouring", "Cheek Augmentation"] },
    { category: "IV Therapy & NAD+", subs: ["NAD+ Infusion", "Vitamin & Mineral IV"] },
    { category: "Hormone Balancing (BHRT)", subs: ["Physician Consult", "Lab Work & Follow-Up"] },
    { category: "Men's Health & Vitality", subs: ["Testosterone Optimization", "Sexual Health"] },
    { category: "Peptide Therapy", subs: ["Custom Peptide Protocols"] },
  ],
  kelowna: [
    { category: "Biohacking", subs: ["Red Light Therapy (PBM)", "IV Therapy", "HBOT", "Neurointegrator", "Brain Tap", "Far Infrared Sauna", "NuCalm", "PEMF"] },
    { category: "Hormone Balancing (BHRT)", subs: ["Physician Consult", "Nutritionist Consultation", "Lab Work & Follow-Up"] },
    { category: "IV Therapy & NAD+", subs: ["NAD+ Infusion", "Vitamin & Mineral IV", "Immunity Boost"] },
    { category: "Health Weight Management", subs: ["Medical Assessment", "Custom Nutrition Plan", "Ongoing Monitoring"] },
    { category: "Men's Health & Vitality", subs: ["Testosterone Optimization", "Sexual Health"] },
    { category: "Peptide Therapy", subs: ["Custom Peptide Protocols"] },
    { category: "Nutritional Counseling", subs: ["Dietary Planning", "Supplement Guidance"] },
  ],
};

const treatmentIcons: Record<string, React.ElementType> = {
  "Skin Rejuvenation": Sparkles,
  "Hormone Balancing (BHRT)": Heart,
  "IV Therapy & NAD+": Syringe,
  "Health Weight Management": Dumbbell,
  "Microneedling & Peels": Sparkles,
  "Aesthetic Injectables": Stethoscope,
  "Biohacking": Dumbbell,
  "Men's Health & Vitality": Heart,
  "Peptide Therapy": Pill,
  "Nutritional Counseling": Pill,
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function LocationsPage() {
  const [active, setActive] = useState<Location>("langley");

  const filteredTeam = getStaffByLocation(active);
  const services = locationServices[active];

  const jsonLd = Object.values(locationData).map((l) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Ageless Living™ — ${l.name}`,
    address: { "@type": "PostalAddress", streetAddress: l.address.split(",")[0], addressLocality: l.name, addressRegion: "BC", addressCountry: "CA" },
  }));

  return (
    <>
      <Helmet>
        <title>Locations & Team | Ageless Living™ — Langley, Kelowna, Victoria</title>
        <meta name="description" content="Meet our expert clinicians and aestheticians across three BC locations: Langley, Kelowna, and Victoria." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="pt-36 pb-28 bg-wellness-warm">
        <div className="container mx-auto section-padding">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">Our Clinics</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-foreground mb-5 leading-[1.08] tracking-tight">
              Serving British Columbia<br className="hidden md:block" /> for Over a Decade
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">Three beautiful clinics, one exceptional standard of care.</p>
          </motion.div>

          {/* Location tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {(Object.keys(locationData) as Location[]).map((key, i) => {
              const loc = locationData[key];
              return (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  onClick={() => setActive(key)}
                  className={`text-left rounded-lg px-6 py-5 transition-all duration-300 min-w-[220px] ${
                    active === key
                      ? "bg-primary text-primary-foreground shadow-xl shadow-primary/25"
                      : "bg-card text-foreground border border-border/30 hover:shadow-lg hover:border-primary/20"
                  }`}
                >
                  <h3 className="text-lg font-bold mb-1">{loc.name}</h3>
                  <p className={`text-xs leading-relaxed ${active === key ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{loc.address}</p>
                </motion.button>
              );
            })}
          </div>

          {/* Content for selected location */}
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease }}>

              {/* Services at Location */}
              <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-3 tracking-tight">Services at {locationData[active].name}</h2>
                <p className="text-muted-foreground mb-10 max-w-xl text-lg leading-relaxed">Detailed treatments and sub-services available at this clinic.</p>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {services.map((s) => {
                    const Icon = treatmentIcons[s.category] || Sparkles;
                    return (
                      <div key={s.category} className="bg-card rounded-3xl border border-border/20 p-8 hover:shadow-xl hover:border-primary/15 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-bold text-foreground text-base">{s.category}</h3>
                        </div>
                        <ul className="space-y-2.5">
                          {s.subs.map((sub) => (
                            <li key={sub} className="flex items-center gap-2.5 text-sm text-muted-foreground leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Team at Location */}
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-3 tracking-tight">Meet the Team at {locationData[active].name}</h2>
                <p className="text-muted-foreground mb-12 max-w-xl text-lg leading-relaxed">Our expert aestheticians and clinicians are specially trained for the treatments offered at this location.</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredTeam.map((member, i) => (
                    <Link key={member.slug} to={`/our-team/${member.slug}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: i * 0.07, ease }}
                        className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group border border-border/20"
                      >
                        <div className="aspect-square overflow-hidden bg-muted">
                          <img src={member.image} alt={getStaffAltText(member)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" />
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold text-foreground text-sm mb-1">{member.name}</h3>
                          <p className="text-xs text-primary font-medium">{member.role}</p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </>
  );
}
