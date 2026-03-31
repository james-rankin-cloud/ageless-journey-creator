import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Sparkles, Syringe, Dumbbell, Heart, Pill, Stethoscope, Clock, Instagram, Facebook, Linkedin, Twitter, GraduationCap } from "lucide-react";
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
  education: string[];
  specializations: string[];
  treatments: string[];
  availability: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
}

const allTeam: TeamMember[] = [
  {
    name: "Michael Forbes, BSc Pharm",
    role: "Owner & Pharmacist",
    img: "https://agelessliving.com/wp-content/uploads/2022/06/mike-768x768.png",
    locations: ["langley", "kelowna"],
    bio: "Michael founded Ageless Living with a vision to bring evidence-based wellness solutions to British Columbia. With decades of pharmaceutical expertise, he leads our hormone restoration and longevity programs with genuine care for every client's journey.",
    education: ["BSc Pharmacy — UBC", "Compounding Pharmacist Certification", "Advanced Hormone Restoration Training"],
    specializations: ["Hormone Restoration Certified", "Compounding Pharmacist", "Longevity Medicine"],
    treatments: ["Hormone Balancing (BHRT)", "IV Therapy & NAD+", "Peptide Therapy"],
    availability: "Mon–Fri 9:00am–5:00pm",
  },
  {
    name: "Dr. Jean Paul Lim, MD, FRCPC",
    role: "Owner & Internal Medicine Specialist",
    img: "https://agelessliving.com/wp-content/uploads/2022/06/Screenshot-2024-06-14-at-10.23.47%E2%80%AFAM-768x767.png",
    locations: ["langley", "kelowna"],
    bio: "Dr. Lim brings a rare combination of internal medicine and longevity expertise. Board-certified and fellowship-trained, he designs personalized biohacking and metabolic protocols that help clients unlock peak performance and vitality.",
    education: ["MD — University of Alberta", "FRCPC Internal Medicine", "Fellowship in Metabolic Health"],
    specializations: ["FRCPC Internal Medicine", "Longevity Specialist", "Metabolic Health"],
    treatments: ["Biohacking", "Hormone Balancing (BHRT)", "Health Weight Management"],
    availability: "Mon–Thu 9:00am–5:00pm",
  },
  {
    name: "Sarita Hutton",
    role: "Owner & Director of Aesthetic Medicine",
    img: "https://agelessliving.com/wp-content/uploads/2022/06/4-768x768.png",
    locations: ["victoria"],
    bio: "Sarita is a passionate aesthetic nurse specialist who leads our Victoria clinic with artistry and precision. Her advanced training in facial aesthetics and skin science has made her one of BC's most sought-after aesthetic practitioners.",
    education: ["Aesthetic Nurse Specialist Certification", "Advanced Injectable Training", "Skin Science Diploma"],
    specializations: ["Aesthetic Nurse Specialist", "Advanced Injectables", "Skin Science"],
    treatments: ["Skin Rejuvenation", "Aesthetic Injectables", "IV Therapy & NAD+"],
    availability: "Mon–Fri 9:00am–5:00pm • Sat by appointment",
    instagram: "https://www.instagram.com/agelessliving_bc/",
  },
  {
    name: "Dr. Tracey Lotze, MD",
    role: "Hormone & Sexual Health Specialist",
    img: "https://agelessliving.com/wp-content/uploads/2024/06/Dr.Tracey-White-Dress-uncropped-13-1-768x793.jpg",
    locations: ["kelowna", "victoria"],
    bio: "Dr. Lotze specializes in hormone optimization and sexual health, bringing compassionate care and deep medical knowledge to every consultation. She helps clients regain confidence and vitality through personalized hormone protocols.",
    education: ["MD — McMaster University", "Hormone Optimization Fellowship", "Women's Health Certification"],
    specializations: ["Hormone Optimization", "Sexual Health Medicine", "Women's Health"],
    treatments: ["Hormone Balancing (BHRT)", "Men's Health & Vitality", "Peptide Therapy"],
    availability: "Tue–Fri 9:00am–4:30pm",
  },
  {
    name: "Dr. Jason Boxtart, ND",
    role: "Men's Health Specialist",
    img: "https://agelessliving.com/wp-content/uploads/2024/04/jason-768x768.jpg",
    locations: ["kelowna", "victoria"],
    bio: "Dr. Boxtart is a naturopathic doctor focused on men's health and vitality. His integrative approach combines evidence-based natural medicine with cutting-edge peptide therapy to help men feel their strongest at every stage of life.",
    education: ["ND — Boucher Institute of Naturopathic Medicine", "Men's Health Specialization", "Peptide Protocol Training"],
    specializations: ["Naturopathic Medicine", "Men's Health", "Peptide Protocols"],
    treatments: ["Men's Health & Vitality", "Peptide Therapy", "Health Weight Management"],
    availability: "Mon–Fri 9:00am–5:00pm",
  },
  {
    name: "Yvonne Ng",
    role: "Certified Medical Aesthetician",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/yvonne-bio-photo-e1758061895992-768x768.jpg",
    locations: ["langley"],
    bio: "Yvonne's meticulous approach to skin health has earned her a loyal following at our Langley clinic. Certified in advanced aesthetics, she creates customized skin rejuvenation plans that deliver visible, lasting results.",
    education: ["Certified Medical Aesthetician", "Advanced Microneedling Certification", "Chemical Peel Specialist"],
    specializations: ["Certified Medical Aesthetician", "Microneedling Expert", "Chemical Peels"],
    treatments: ["Skin Rejuvenation", "Microneedling & Peels"],
    availability: "Mon–Fri 10:00am–6:00pm",
  },
  {
    name: "Avnit Bhullar",
    role: "Medical Aesthetician",
    img: "https://agelessliving.com/wp-content/uploads/2024/06/Diseno-sin-titulo-5.png",
    locations: ["langley"],
    bio: "Avnit combines artistic vision with clinical precision to deliver beautiful aesthetic results. Her warm approach helps clients feel at ease during every treatment, making their experience as enjoyable as the results.",
    education: ["Medical Aesthetician Diploma", "Aesthetic Injectable Training", "Facial Contouring Certification"],
    specializations: ["Aesthetic Injectables", "Skin Analysis", "Facial Contouring"],
    treatments: ["Skin Rejuvenation", "Aesthetic Injectables"],
    availability: "Tue–Sat 9:00am–5:00pm",
  },
  {
    name: "Shelley McBride",
    role: "Clinic Manager, MOA",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-6.png",
    locations: ["langley"],
    bio: "Shelley is the welcoming face of our Langley clinic. As clinic manager, she ensures every client's experience is seamless from booking to follow-up, coordinating care with our entire clinical team.",
    education: ["Medical Office Administration Diploma", "Client Experience Certification"],
    specializations: ["Clinic Operations", "Patient Coordination", "Client Experience"],
    treatments: [],
    availability: "Mon–Fri 8:30am–5:00pm",
  },
  {
    name: "Jenny Hwang, RN",
    role: "Aesthetic Nurse",
    img: "https://agelessliving.com/wp-content/uploads/2025/04/1-768x768.png",
    locations: ["victoria"],
    bio: "Jenny brings registered nursing expertise to our Victoria aesthetic practice. Her clinical precision and gentle technique make her a trusted choice for skin rejuvenation and IV therapy treatments.",
    education: ["BSN — Registered Nurse", "Aesthetic Nursing Certificate", "IV Therapy Specialist"],
    specializations: ["Registered Nurse", "Aesthetic Nursing", "IV Therapy"],
    treatments: ["Skin Rejuvenation", "IV Therapy & NAD+"],
    availability: "Mon–Fri 9:00am–5:00pm",
  },
  {
    name: "Constanza Moraga Herrera",
    role: "Nutritional Practitioner",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-4.png",
    locations: ["kelowna"],
    bio: "Constanza takes a holistic approach to nutrition, designing plans that complement our clinical treatments. She helps clients fuel their transformation from the inside out with personalized dietary protocols.",
    education: ["Nutritional Science Diploma", "Holistic Wellness Certification", "Metabolic Nutrition Training"],
    specializations: ["Nutritional Science", "Holistic Wellness", "Metabolic Nutrition"],
    treatments: ["Nutritional Counseling", "Health Weight Management"],
    availability: "Mon–Thu 9:00am–4:00pm",
  },
  {
    name: "Rachel Bowman Fassio",
    role: "Clinical Nutritionist",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-3.png",
    locations: ["kelowna"],
    bio: "Rachel's evidence-based nutritional counseling pairs perfectly with our Kelowna clinic's treatment offerings. She guides clients toward sustainable lifestyle changes that amplify their clinical results.",
    education: ["Clinical Nutrition Degree", "Dietary Planning Certification", "Supplement Guidance Specialist"],
    specializations: ["Clinical Nutrition", "Dietary Planning", "Supplement Guidance"],
    treatments: ["Nutritional Counseling"],
    availability: "Mon–Fri 9:00am–5:00pm",
  },
  {
    name: "Melissa Zitterer",
    role: "Clinic Manager, MOA",
    img: "https://agelessliving.com/wp-content/uploads/2025/09/image0-10-e1757724838812.jpeg",
    locations: ["kelowna"],
    bio: "Melissa keeps our Kelowna clinic running smoothly, managing scheduling, client communications, and day-to-day operations with efficiency and warmth. She's your first point of contact for an exceptional experience.",
    education: ["Medical Office Administration Diploma", "Client Relations Training"],
    specializations: ["Clinic Operations", "Client Relations", "Schedule Management"],
    treatments: [],
    availability: "Mon–Fri 8:30am–5:00pm",
  },
  {
    name: "Lucy Watson",
    role: "Clinic Manager",
    img: "https://agelessliving.com/wp-content/uploads/2024/04/3-768x768.png",
    locations: ["victoria"],
    bio: "Lucy oversees the Victoria clinic with a keen eye for client experience and operational excellence. Her warm, organized approach ensures every visit is comfortable and efficient.",
    education: ["Business Administration Diploma", "Healthcare Management Certificate"],
    specializations: ["Clinic Management", "Client Experience", "Team Coordination"],
    treatments: [],
    availability: "Mon–Fri 8:30am–5:00pm",
  },
  {
    name: "Madison Allen",
    role: "Clinic Administrator, MOA",
    img: "https://agelessliving.com/wp-content/uploads/2024/04/Ageless-Website-Team-Photos-2-768x768.png",
    locations: ["victoria"],
    bio: "Madison supports our Victoria team with administrative expertise and a friendly, professional demeanor. She helps ensure your booking and check-in experience is always seamless.",
    education: ["Medical Office Administration Diploma", "Client Service Certification"],
    specializations: ["Medical Office Administration", "Client Support", "Scheduling"],
    treatments: [],
    availability: "Mon–Fri 9:00am–5:00pm",
  },
];

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
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.07, ease }}
                      onClick={() => setSelectedMember(member)}
                      className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group border border-border/20"
                    >
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-foreground text-sm mb-1">{member.name}</h3>
                        <p className="text-xs text-primary font-medium">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
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
              className="bg-card rounded-3xl shadow-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto"
            >
              <div className="relative">
                <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                  <X className="h-4 w-4 text-foreground" />
                </button>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 shrink-0 bg-muted flex items-center justify-center p-4">
                    <img src={selectedMember.img} alt={selectedMember.name} className="w-full max-w-[360px] aspect-square object-cover rounded-2xl" />
                  </div>

                  <div className="flex-1 p-8 md:p-10 space-y-7">
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{selectedMember.name}</h2>
                      <p className="text-sm text-primary font-semibold mt-1.5">{selectedMember.role}</p>
                    </div>

                    {/* Social */}
                    <div className="flex gap-2.5">
                      {[
                        { icon: Instagram, url: selectedMember.instagram },
                        { icon: Facebook, url: selectedMember.facebook },
                        { icon: Linkedin, url: selectedMember.linkedin },
                        { icon: Twitter, url: selectedMember.twitter },
                      ].map(({ icon: SocialIcon, url }, idx) =>
                        url ? (
                          <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-200">
                            <SocialIcon className="h-4 w-4 text-accent-foreground" />
                          </a>
                        ) : (
                          <span key={idx} className="w-9 h-9 rounded-full bg-accent/40 flex items-center justify-center">
                            <SocialIcon className="h-4 w-4 text-muted-foreground/40" />
                          </span>
                        )
                      )}
                    </div>

                    {/* Bio */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">My Journey at Ageless Living</h3>
                      <p className="text-sm text-muted-foreground leading-[1.9]">{selectedMember.bio}</p>
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">Education & Certifications</h3>
                      <ul className="space-y-2">
                        {selectedMember.education.map((e) => (
                          <li key={e} className="flex items-center gap-2.5 text-sm text-foreground">
                            <GraduationCap className="h-3.5 w-3.5 text-primary shrink-0" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Services */}
                    {selectedMember.treatments.length > 0 && (
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">Services I Specialize In</h3>
                        <ul className="space-y-2">
                          {selectedMember.treatments.map((t) => {
                            const TIcon = treatmentIcons[t] || Sparkles;
                            return (
                              <li key={t} className="flex items-center gap-3 text-sm text-foreground">
                                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><TIcon className="h-3.5 w-3.5 text-primary" /></div>
                                {t}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* Availability */}
                    <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground text-xs uppercase tracking-wider block mb-1">Availability</span>
                        {selectedMember.availability}
                      </div>
                    </div>

                    {/* CTA */}
                    {selectedMember.treatments.length > 0 && (
                      <Link
                        to="/book"
                        onClick={() => setSelectedMember(null)}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97] w-full justify-center text-sm"
                      >
                        Book with {selectedMember.name.split(",")[0].split(" ")[0]} at {locationData[active].name} <ArrowRight className="h-4 w-4" />
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
