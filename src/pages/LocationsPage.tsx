import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Sparkles, Syringe, Dumbbell, Heart, Pill, Stethoscope, Clock, Instagram, Linkedin } from "lucide-react";
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
  availability: string;
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
    availability: "Mon–Fri 9:00–5:00",
  },
  {
    name: "Dr. Jean Paul Lim, MD, FRCPC",
    role: "Owner & Internal Medicine Specialist",
    img: "https://agelessliving.com/wp-content/uploads/2022/06/Screenshot-2024-06-14-at-10.23.47%E2%80%AFAM-768x767.png",
    locations: ["langley", "kelowna"],
    bio: "Dr. Lim brings a rare combination of internal medicine and longevity expertise. Board-certified and fellowship-trained, he designs personalized biohacking and metabolic protocols that help clients unlock peak performance and vitality.",
    specializations: ["FRCPC Internal Medicine", "Longevity Specialist", "Metabolic Health"],
    treatments: ["Biohacking", "Hormone Balancing (BHRT)", "Health Weight Management"],
    availability: "Mon–Thu 9:00–5:00",
  },
  {
    name: "Sarita Hutton",
    role: "Owner & Director of Aesthetic Medicine",
    img: "https://agelessliving.com/wp-content/uploads/2022/06/4-768x768.png",
    locations: ["victoria"],
    bio: "Sarita is a passionate aesthetic nurse specialist who leads our Victoria clinic with artistry and precision. Her advanced training in facial aesthetics and skin science has made her one of BC's most sought-after aesthetic practitioners.",
    specializations: ["Aesthetic Nurse Specialist", "Advanced Injectables", "Skin Science"],
    treatments: ["Skin Rejuvenation", "Aesthetic Injectables", "IV Therapy & NAD+"],
    availability: "Mon–Fri 9:00–5:00, Sat by appointment",
    instagram: "https://www.instagram.com/agelessliving_bc/",
  },
  {
    name: "Dr. Tracey Lotze, MD",
    role: "Hormone & Sexual Health Specialist",
    img: "https://agelessliving.com/wp-content/uploads/2024/06/Dr.Tracey-White-Dress-uncropped-13-1-768x793.jpg",
    locations: ["kelowna", "victoria"],
    bio: "Dr. Lotze specializes in hormone optimization and sexual health, bringing compassionate care and deep medical knowledge to every consultation. She helps clients regain confidence and vitality through personalized hormone protocols.",
    specializations: ["Hormone Optimization", "Sexual Health Medicine", "Women's Health"],
    treatments: ["Hormone Balancing (BHRT)", "Men's Health & Vitality", "Peptide Therapy"],
    availability: "Tue–Fri 9:00–4:30",
  },
  {
    name: "Dr. Jason Boxtart, ND",
    role: "Men's Health Specialist",
    img: "https://agelessliving.com/wp-content/uploads/2024/04/jason-768x768.jpg",
    locations: ["kelowna", "victoria"],
    bio: "Dr. Boxtart is a naturopathic doctor focused on men's health and vitality. His integrative approach combines evidence-based natural medicine with cutting-edge peptide therapy to help men feel their strongest at every stage of life.",
    specializations: ["Naturopathic Medicine", "Men's Health", "Peptide Protocols"],
    treatments: ["Men's Health & Vitality", "Peptide Therapy", "Health Weight Management"],
    availability: "Mon–Fri 9:00–5:00",
  },
  {
    name: "Yvonne Ng",
    role: "Certified Medical Aesthetician",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/yvonne-bio-photo-e1758061895992-768x768.jpg",
    locations: ["langley"],
    bio: "Yvonne's meticulous approach to skin health has earned her a loyal following at our Langley clinic. Certified in advanced aesthetics, she creates customized skin rejuvenation plans that deliver visible, lasting results.",
    specializations: ["Certified Medical Aesthetician", "Microneedling Expert", "Chemical Peels"],
    treatments: ["Skin Rejuvenation", "Microneedling & Peels"],
    availability: "Mon–Fri 10:00–6:00",
  },
  {
    name: "Avnit Bhullar",
    role: "Medical Aesthetician",
    img: "https://agelessliving.com/wp-content/uploads/2024/06/Diseno-sin-titulo-5.png",
    locations: ["langley"],
    bio: "Avnit combines artistic vision with clinical precision to deliver beautiful aesthetic results. Her warm approach helps clients feel at ease during every treatment, making their experience as enjoyable as the results.",
    specializations: ["Aesthetic Injectables", "Skin Analysis", "Facial Contouring"],
    treatments: ["Skin Rejuvenation", "Aesthetic Injectables"],
    availability: "Tue–Sat 9:00–5:00",
  },
  {
    name: "Shelley McBride",
    role: "Clinic Manager, MOA",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-6.png",
    locations: ["langley"],
    bio: "Shelley is the welcoming face of our Langley clinic. As clinic manager, she ensures every client's experience is seamless from booking to follow-up, coordinating care with our entire clinical team.",
    specializations: ["Clinic Operations", "Patient Coordination", "Client Experience"],
    treatments: [],
    availability: "Mon–Fri 8:30–5:00",
  },
  {
    name: "Jenny Hwang, RN",
    role: "Aesthetic Nurse",
    img: "https://agelessliving.com/wp-content/uploads/2025/04/1-768x768.png",
    locations: ["victoria"],
    bio: "Jenny brings registered nursing expertise to our Victoria aesthetic practice. Her clinical precision and gentle technique make her a trusted choice for skin rejuvenation and IV therapy treatments.",
    specializations: ["Registered Nurse", "Aesthetic Nursing", "IV Therapy"],
    treatments: ["Skin Rejuvenation", "IV Therapy & NAD+"],
    availability: "Mon–Fri 9:00–5:00",
  },
  {
    name: "Constanza Moraga Herrera",
    role: "Nutritional Practitioner",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-4.png",
    locations: ["kelowna"],
    bio: "Constanza takes a holistic approach to nutrition, designing plans that complement our clinical treatments. She helps clients fuel their transformation from the inside out with personalized dietary protocols.",
    specializations: ["Nutritional Science", "Holistic Wellness", "Metabolic Nutrition"],
    treatments: ["Nutritional Counseling", "Health Weight Management"],
    availability: "Mon–Thu 9:00–4:00",
  },
  {
    name: "Rachel Bowman Fassio",
    role: "Clinical Nutritionist",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-3.png",
    locations: ["kelowna"],
    bio: "Rachel's evidence-based nutritional counseling pairs perfectly with our Kelowna clinic's treatment offerings. She guides clients toward sustainable lifestyle changes that amplify their clinical results.",
    specializations: ["Clinical Nutrition", "Dietary Planning", "Supplement Guidance"],
    treatments: ["Nutritional Counseling"],
    availability: "Mon–Fri 9:00–5:00",
  },
  {
    name: "Melissa Zitterer",
    role: "Clinic Manager, MOA",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/image0-10-e1757724838812.jpeg",
    locations: ["kelowna"],
    bio: "Melissa keeps our Kelowna clinic running smoothly, managing scheduling, client communications, and day-to-day operations with efficiency and warmth. She's your first point of contact for an exceptional experience.",
    specializations: ["Clinic Operations", "Client Relations", "Schedule Management"],
    treatments: [],
    availability: "Mon–Fri 8:30–5:00",
  },
  {
    name: "Lucy Watson",
    role: "Clinic Manager",
    img: "https://agelessliving.com/wp-content/uploads/2024/04/3-768x768.png",
    locations: ["victoria"],
    bio: "Lucy oversees the Victoria clinic with a keen eye for client experience and operational excellence. Her warm, organized approach ensures every visit is comfortable and efficient.",
    specializations: ["Clinic Management", "Client Experience", "Team Coordination"],
    treatments: [],
    availability: "Mon–Fri 8:30–5:00",
  },
  {
    name: "Madison Allen",
    role: "Clinic Administrator, MOA",
    img: "https://agelessliving.com/wp-content/uploads/2024/04/Ageless-Website-Team-Photos-2-768x768.png",
    locations: ["victoria"],
    bio: "Madison supports our Victoria team with administrative expertise and a friendly, professional demeanor. She helps ensure your booking and check-in experience is always seamless.",
    specializations: ["Medical Office Administration", "Client Support", "Scheduling"],
    treatments: [],
    availability: "Mon–Fri 9:00–5:00",
  },
];

const locationServices: Record<Location, string[]> = {
  langley: ["Skin Rejuvenation", "Hormone Balancing (BHRT)", "IV Therapy & NAD+", "Peptide Therapy", "Aesthetic Injectables", "Microneedling & Peels"],
  victoria: ["Skin Rejuvenation", "Aesthetic Injectables", "IV Therapy & NAD+", "Hormone Balancing (BHRT)", "Men's Health & Vitality", "Peptide Therapy"],
  kelowna: ["Biohacking", "Hormone Balancing (BHRT)", "IV Therapy & NAD+", "Peptide Therapy", "Health Weight Management", "Men's Health & Vitality", "Nutritional Counseling"],
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
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredTeam = allTeam.filter((m) => m.locations.includes(active));
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

      <section className="pt-32 pb-24 bg-wellness-warm">
        <div className="container mx-auto section-padding">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Clinics</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.1]">
              Serving British Columbia for Over a Decade
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">Three beautiful clinics, one exceptional standard of care.</p>
          </motion.div>

          {/* Location tabs */}
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
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${active === key ? "bg-primary-foreground/20" : "bg-primary/10"}`}>
                    <span className={`text-xl font-bold ${active === key ? "text-primary-foreground" : "text-primary"}`}>{loc.initial}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{loc.name}</h3>
                  <p className={`text-sm leading-relaxed ${active === key ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{loc.address}</p>
                </motion.button>
              );
            })}
          </div>

          {/* Team at Location */}
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease }}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Team at {locationData[active].name}</h2>
              <p className="text-muted-foreground mb-10 max-w-xl">Our expert aestheticians and clinicians are specially trained for the treatments offered at this location.</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                {filteredTeam.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease }}
                    onClick={() => setSelectedMember(member)}
                    className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-border/30"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-foreground text-sm">{member.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Services at Location */}
              <div className="bg-card rounded-2xl border border-border/30 p-8 md:p-10">
                <h3 className="text-xl font-bold text-foreground mb-6">Services Available at {locationData[active].name}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((s) => {
                    const Icon = treatmentIcons[s] || Sparkles;
                    return (
                      <div key={s} className="flex items-center gap-3 p-3 rounded-xl bg-accent/30">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{s}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm" onClick={() => setSelectedMember(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              <div className="relative">
                <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                  <X className="h-4 w-4 text-foreground" />
                </button>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 aspect-square md:aspect-auto bg-muted shrink-0">
                    <img src={selectedMember.img} alt={selectedMember.name} className="w-full h-full object-cover md:rounded-l-2xl" />
                  </div>

                  <div className="flex-1 p-6 md:p-8 space-y-5">
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{selectedMember.name}</h2>
                      <p className="text-sm text-primary font-semibold">{selectedMember.role}</p>
                    </div>

                    {/* Social */}
                    <div className="flex gap-2">
                      {selectedMember.instagram ? (
                        <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:bg-accent/70 transition-colors">
                          <Instagram className="h-3.5 w-3.5 text-accent-foreground" />
                        </a>
                      ) : (
                        <span className="w-8 h-8 rounded-full bg-accent/50 flex items-center justify-center"><Instagram className="h-3.5 w-3.5 text-muted-foreground/50" /></span>
                      )}
                      {selectedMember.linkedin ? (
                        <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:bg-accent/70 transition-colors">
                          <Linkedin className="h-3.5 w-3.5 text-accent-foreground" />
                        </a>
                      ) : (
                        <span className="w-8 h-8 rounded-full bg-accent/50 flex items-center justify-center"><Linkedin className="h-3.5 w-3.5 text-muted-foreground/50" /></span>
                      )}
                    </div>

                    {/* Bio */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">My Journey at Ageless Living</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
                    </div>

                    {/* Services */}
                    {selectedMember.treatments.length > 0 && (
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Services I Provide</h3>
                        <ul className="space-y-1.5">
                          {selectedMember.treatments.map((t) => {
                            const Icon = treatmentIcons[t] || Sparkles;
                            return (
                              <li key={t} className="flex items-center gap-2.5 text-sm text-foreground">
                                <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0"><Icon className="h-3 w-3 text-primary" /></div>
                                {t}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* Availability */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{selectedMember.availability}</span>
                    </div>

                    {/* CTA */}
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
