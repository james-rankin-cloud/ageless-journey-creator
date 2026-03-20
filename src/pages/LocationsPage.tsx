import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Sparkles, Syringe, Dumbbell, Heart, Pill, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

type Location = "langley" | "kelowna" | "victoria";

const locationData: Record<Location, { name: string; initial: string; address: string }> = {
  langley: { name: "Langley", initial: "L", address: "415-20178 96th Ave, Langley, BC V1M 0B2" },
  victoria: { name: "Victoria", initial: "V", address: "1-101 Burnside Rd W, Victoria, BC V9A 1B7" },
  kelowna: { name: "Kelowna", initial: "K", address: "102-3320 Richter Street, Kelowna, BC V1W 4V5" },
};

interface TeamMember {
  name: string;
  role: string;
  img: string;
  locations: Location[];
  bio: string;
  specializations: string[];
  treatments: string[];
  instagram?: string;
  linkedin?: string;
}

const allTeam: TeamMember[] = [
  {
    name: "Michael Forbes, BSc Pharm",
    role: "Owner & Pharmacist",
    img: "https://agelessliving.com/wp-content/uploads/2022/06/mike-768x768.png",
    locations: ["langley", "kelowna"],
    bio: "Michael founded Ageless Living with a vision to bring evidence-based wellness solutions to British Columbia. With decades of pharmaceutical expertise, he leads our hormone restoration and longevity programs with genuine care for every client's journey.",
    specializations: ["Hormone Restoration Certified", "Compounding Pharmacist", "Longevity Medicine"],
    treatments: ["Hormone Balancing (BHRT)", "IV Therapy & NAD+", "Peptide Therapy"],
  },
  {
    name: "Dr. Jean Paul Lim, MD, FRCPC",
    role: "Owner & Internal Medicine Specialist",
    img: "https://agelessliving.com/wp-content/uploads/2022/06/Screenshot-2024-06-14-at-10.23.47%E2%80%AFAM-768x767.png",
    locations: ["langley", "kelowna"],
    bio: "Dr. Lim brings a rare combination of internal medicine and longevity expertise. Board-certified and fellowship-trained, he designs personalized biohacking and metabolic protocols that help clients unlock peak performance and vitality.",
    specializations: ["FRCPC Internal Medicine", "Longevity Specialist", "Metabolic Health"],
    treatments: ["Biohacking", "Hormone Balancing (BHRT)", "Health Weight Management"],
  },
  {
    name: "Sarita Hutton",
    role: "Owner & Director of Aesthetic Medicine",
    img: "https://agelessliving.com/wp-content/uploads/2022/06/4-768x768.png",
    locations: ["victoria"],
    bio: "Sarita is a passionate aesthetic nurse specialist who leads our Victoria clinic with artistry and precision. Her advanced training in facial aesthetics and skin science has made her one of BC's most sought-after aesthetic practitioners.",
    specializations: ["Aesthetic Nurse Specialist", "Advanced Injectables", "Skin Science"],
    treatments: ["Skin Rejuvenation", "Aesthetic Injectables", "IV Therapy & NAD+"],
  },
  {
    name: "Dr. Tracey Lotze, MD",
    role: "Hormone & Sexual Health Specialist",
    img: "https://agelessliving.com/wp-content/uploads/2024/06/Dr.Tracey-White-Dress-uncropped-13-1-768x793.jpg",
    locations: ["kelowna", "victoria"],
    bio: "Dr. Lotze specializes in hormone optimization and sexual health, bringing compassionate care and deep medical knowledge to every consultation. She helps clients regain confidence and vitality through personalized hormone protocols.",
    specializations: ["Hormone Optimization", "Sexual Health Medicine", "Women's Health"],
    treatments: ["Hormone Balancing (BHRT)", "Men's Health & Vitality", "Peptide Therapy"],
  },
  {
    name: "Dr. Jason Boxtart, ND",
    role: "Men's Health Specialist",
    img: "https://agelessliving.com/wp-content/uploads/2024/04/jason-768x768.jpg",
    locations: ["kelowna", "victoria"],
    bio: "Dr. Boxtart is a naturopathic doctor focused on men's health and vitality. His integrative approach combines evidence-based natural medicine with cutting-edge peptide therapy to help men feel their strongest at every stage of life.",
    specializations: ["Naturopathic Medicine", "Men's Health", "Peptide Protocols"],
    treatments: ["Men's Health & Vitality", "Peptide Therapy", "Health Weight Management"],
  },
  {
    name: "Yvonne Ng",
    role: "Certified Medical Aesthetician",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/yvonne-bio-photo-e1758061895992-768x768.jpg",
    locations: ["langley"],
    bio: "Yvonne's meticulous approach to skin health has earned her a loyal following at our Langley clinic. Certified in advanced aesthetics, she creates customized skin rejuvenation plans that deliver visible, lasting results.",
    specializations: ["Certified Medical Aesthetician", "Microneedling Expert", "Chemical Peels"],
    treatments: ["Skin Rejuvenation", "Microneedling & Peels"],
  },
  {
    name: "Avnit Bhullar",
    role: "Medical Aesthetician",
    img: "https://agelessliving.com/wp-content/uploads/2024/06/Diseno-sin-titulo-5.png",
    locations: ["langley"],
    bio: "Avnit combines artistic vision with clinical precision to deliver beautiful aesthetic results. Her warm approach helps clients feel at ease during every treatment, making their experience as enjoyable as the results.",
    specializations: ["Aesthetic Injectables", "Skin Analysis", "Facial Contouring"],
    treatments: ["Skin Rejuvenation", "Aesthetic Injectables"],
  },
  {
    name: "Shelley McBride",
    role: "Clinic Manager, MOA",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-6.png",
    locations: ["langley"],
    bio: "Shelley is the welcoming face of our Langley clinic. As clinic manager, she ensures every client's experience is seamless from booking to follow-up, coordinating care with our entire clinical team.",
    specializations: ["Clinic Operations", "Patient Coordination", "Client Experience"],
    treatments: [],
  },
  {
    name: "Jenny Hwang, RN",
    role: "Aesthetic Nurse",
    img: "https://agelessliving.com/wp-content/uploads/2025/04/1-768x768.png",
    locations: ["victoria"],
    bio: "Jenny brings registered nursing expertise to our Victoria aesthetic practice. Her clinical precision and gentle technique make her a trusted choice for skin rejuvenation and IV therapy treatments.",
    specializations: ["Registered Nurse", "Aesthetic Nursing", "IV Therapy"],
    treatments: ["Skin Rejuvenation", "IV Therapy & NAD+"],
  },
  {
    name: "Constanza Moraga Herrera",
    role: "Nutritional Practitioner",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-4.png",
    locations: ["kelowna"],
    bio: "Constanza takes a holistic approach to nutrition, designing plans that complement our clinical treatments. She helps clients fuel their transformation from the inside out with personalized dietary protocols.",
    specializations: ["Nutritional Science", "Holistic Wellness", "Metabolic Nutrition"],
    treatments: ["Nutritional Counseling", "Health Weight Management"],
  },
  {
    name: "Rachel Bowman Fassio",
    role: "Clinical Nutritionist",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-3.png",
    locations: ["kelowna"],
    bio: "Rachel's evidence-based nutritional counseling pairs perfectly with our Kelowna clinic's treatment offerings. She guides clients toward sustainable lifestyle changes that amplify their clinical results.",
    specializations: ["Clinical Nutrition", "Dietary Planning", "Supplement Guidance"],
    treatments: ["Nutritional Counseling"],
  },
  {
    name: "Melissa Zitterer",
    role: "Clinic Manager, MOA",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/image0-10-e1757724838812.jpeg",
    locations: ["kelowna"],
    bio: "Melissa keeps our Kelowna clinic running smoothly, managing scheduling, client communications, and day-to-day operations with efficiency and warmth. She's your first point of contact for an exceptional experience.",
    specializations: ["Clinic Operations", "Client Relations", "Schedule Management"],
    treatments: [],
  },
  {
    name: "Lucy Watson",
    role: "Clinic Manager",
    img: "https://agelessliving.com/wp-content/uploads/2024/04/3-768x768.png",
    locations: ["victoria"],
    bio: "Lucy oversees the Victoria clinic with a keen eye for client experience and operational excellence. Her warm, organized approach ensures every visit is comfortable and efficient.",
    specializations: ["Clinic Management", "Client Experience", "Team Coordination"],
    treatments: [],
  },
  {
    name: "Madison Allen",
    role: "Clinic Administrator, MOA",
    img: "https://agelessliving.com/wp-content/uploads/2024/04/Ageless-Website-Team-Photos-2-768x768.png",
    locations: ["victoria"],
    bio: "Madison supports our Victoria team with administrative expertise and a friendly, professional demeanor. She helps ensure your booking and check-in experience is always seamless.",
    specializations: ["Medical Office Administration", "Client Support", "Scheduling"],
    treatments: [],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

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

export default function LocationsPage() {
  const [active, setActive] = useState<Location>("langley");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const jsonLd = Object.values(locationData).map((l) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Ageless Living™ — ${l.name}`,
    address: { "@type": "PostalAddress", streetAddress: l.address.split(",")[0], addressLocality: l.name, addressRegion: "BC", addressCountry: "CA" },
  }));

  // Deduplicate team members across locations
  const uniqueTeam = allTeam.filter((member, index, self) =>
    index === self.findIndex((m) => m.name === member.name)
  );

  return (
    <>
      <Helmet>
        <title>Locations & Team | Ageless Living™ — Langley, Kelowna, Victoria</title>
        <meta name="description" content="Meet our expert clinicians and aestheticians across three BC locations: Langley, Kelowna, and Victoria." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="pt-32 pb-24 bg-wellness-warm">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Clinics</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.1]">
              Serving British Columbia for Over a Decade
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Three beautiful clinics, one exceptional standard of care.
            </p>
          </motion.div>

          {/* Location tabs as cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {(Object.keys(locationData) as Location[]).map((key, i) => {
              const loc = locationData[key];
              return (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  onClick={() => setActive(key)}
                  className={`text-left rounded-2xl p-7 transition-all duration-300 ${
                    active === key
                      ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-[1.02]"
                      : "bg-card text-foreground border border-border/40 hover:shadow-lg"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    active === key ? "bg-primary-foreground/20" : "bg-primary/10"
                  }`}>
                    <span className={`text-xl font-bold ${active === key ? "text-primary-foreground" : "text-primary"}`}>
                      {loc.initial}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{loc.name}</h3>
                  <p className={`text-sm leading-relaxed ${active === key ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {loc.address}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Full team grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Our Full Team Across All Locations</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Click on any team member to learn more about their expertise and book directly.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {uniqueTeam.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                onClick={() => setSelectedMember(member)}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-border/30"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-sm">{member.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {member.locations.map((loc) => (
                      <span key={loc} className="px-2 py-0.5 rounded-full bg-accent text-[10px] font-medium text-accent-foreground">
                        {locationData[loc].name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team member modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="h-4 w-4 text-foreground" />
                </button>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 aspect-square md:aspect-auto bg-muted shrink-0">
                    <img
                      src={selectedMember.img}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover md:rounded-l-2xl"
                    />
                  </div>

                  <div className="flex-1 p-6 md:p-8">
                    <h2 className="text-xl font-bold text-foreground mb-1">{selectedMember.name}</h2>
                    <p className="text-sm text-primary font-semibold mb-4">{selectedMember.role}</p>

                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">My Journey at Ageless Living</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{selectedMember.bio}</p>

                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Specializations</h3>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {selectedMember.specializations.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-accent text-xs font-medium text-accent-foreground">{s}</span>
                      ))}
                    </div>

                    {selectedMember.treatments.length > 0 && (
                      <>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Treatments I Specialize In</h3>
                        <ul className="space-y-2 mb-6">
                          {selectedMember.treatments.map((t) => {
                            const Icon = treatmentIcons[t] || Sparkles;
                            return (
                              <li key={t} className="flex items-center gap-2.5 text-sm text-foreground">
                                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                  <Icon className="h-3.5 w-3.5 text-primary" />
                                </div>
                                {t}
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    )}

                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Locations</h3>
                    <div className="flex gap-2 mb-6">
                      {selectedMember.locations.map((loc) => (
                        <span key={loc} className="px-3 py-1 rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          {locationData[loc].name}
                        </span>
                      ))}
                    </div>

                    {selectedMember.treatments.length > 0 && (
                      <Link
                        to="/book"
                        onClick={() => setSelectedMember(null)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97] w-full justify-center"
                      >
                        Book with {selectedMember.name.split(",")[0].split(" ")[0]} <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
