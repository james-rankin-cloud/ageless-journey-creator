import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink, Sparkles, Syringe, Dumbbell, Heart, Pill, Apple, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

type Location = "langley" | "kelowna" | "victoria";

const locationData: Record<Location, { name: string; address: string; phone: string; email: string; hours: string; mapSrc: string; directionsUrl: string }> = {
  langley: {
    name: "Langley",
    address: "415-20178 96th Ave, Langley, BC V1M 0B2",
    phone: "+1 (236) 326-6830",
    email: "langley@agelessliving.ca",
    hours: "Mon–Fri 9am–5pm",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.0!2d-122.66!3d49.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d35a60e75e77%3A0x0!2zNDnCsDEwJzQ4LjAiTiAxMjLCsDM5JzM2LjAiVw!5e0!3m2!1sen!2sca!4v1",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=415-20178+96th+Ave+Langley+BC+V1M+0B2",
  },
  victoria: {
    name: "Victoria",
    address: "1-101 Burnside Rd W, Victoria, BC V9A 1B7",
    phone: "+1 (250) 590-5787",
    email: "wellness@agelessliving.ca",
    hours: "Mon–Fri 9am–5pm",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.0!2d-123.38!3d48.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sen!2sca!4v1",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1-101+Burnside+Rd+W+Victoria+BC+V9A+1B7",
  },
  kelowna: {
    name: "Kelowna",
    address: "102-3320 Richter Street, Kelowna, BC V1W 4V5",
    phone: "+1 (778) 760-9827",
    email: "kelowna@agelessliving.ca",
    hours: "Mon–Fri 9am–5pm",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.0!2d-119.48!3d49.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sen!2sca!4v1",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=102-3320+Richter+Street+Kelowna+BC+V1W+4V5",
  },
};

type TreatmentItem = { icon: React.ElementType; name: string };

const treatmentsAtLocation: Record<Location, TreatmentItem[]> = {
  langley: [
    { icon: Sparkles, name: "Skin Rejuvenation" },
    { icon: Heart, name: "Hormone Balancing (BHRT)" },
    { icon: Syringe, name: "IV Therapy & NAD+" },
    { icon: Dumbbell, name: "Health Weight Management" },
    { icon: Sparkles, name: "Microneedling & Peels" },
    { icon: Stethoscope, name: "Aesthetic Injectables" },
  ],
  kelowna: [
    { icon: Heart, name: "Hormone Balancing (BHRT)" },
    { icon: Syringe, name: "IV Therapy & NAD+" },
    { icon: Dumbbell, name: "Health Weight Management" },
    { icon: Apple, name: "Nutritional Counseling" },
    { icon: Pill, name: "Peptide Therapy" },
    { icon: Stethoscope, name: "Men's Health & Vitality" },
  ],
  victoria: [
    { icon: Sparkles, name: "Skin Rejuvenation" },
    { icon: Heart, name: "Hormone Balancing (BHRT)" },
    { icon: Syringe, name: "IV Therapy & NAD+" },
    { icon: Stethoscope, name: "Aesthetic Injectables" },
    { icon: Pill, name: "Peptide Therapy" },
    { icon: Dumbbell, name: "Men's Health & Vitality" },
  ],
};

const teamData: Record<Location, { name: string; role: string; img: string; treatments: string[] }[]> = {
  langley: [
    { name: "Michael Forbes, BSc Pharm", role: "Owner, Pharmacist, Certified in Hormone Restoration", img: "https://agelessliving.com/wp-content/uploads/2022/06/mike-768x768.png", treatments: ["Hormone Balancing", "IV Therapy"] },
    { name: "Dr. Jean Paul Lim, MD, FRCPC", role: "Owner, Internal Medicine & Longevity Specialist", img: "https://agelessliving.com/wp-content/uploads/2022/06/Screenshot-2024-06-14-at-10.23.47%E2%80%AFAM-768x767.png", treatments: ["Biohacking", "Hormone Balancing", "Health Weight"] },
    { name: "Shelley McBride", role: "MOA, Clinic Manager", img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-6.png", treatments: [] },
    { name: "Yvonne Ng", role: "Certified Medical Aesthetician", img: "https://agelessliving.com/wp-content/uploads/2025/09/yvonne-bio-photo-e1758061895992-768x768.jpg", treatments: ["Skin Rejuvenation", "Microneedling", "Peels"] },
    { name: "Avnit Bhullar", role: "Medical Aesthetician", img: "https://agelessliving.com/wp-content/uploads/2024/06/Diseno-sin-titulo-5.png", treatments: ["Skin Rejuvenation", "Aesthetic Injectables"] },
  ],
  kelowna: [
    { name: "Michael Forbes, BSc Pharm", role: "Owner, Pharmacist", img: "https://agelessliving.com/wp-content/uploads/2022/06/mike-768x768.png", treatments: ["Hormone Balancing"] },
    { name: "Dr. Jean Paul Lim, MD, FRCPC", role: "Owner, Internal Medicine Specialist", img: "https://agelessliving.com/wp-content/uploads/2022/06/Screenshot-2024-06-14-at-10.23.47%E2%80%AFAM-768x767.png", treatments: ["Biohacking", "Hormone Balancing"] },
    { name: "Dr. Tracey Lotze, MD", role: "Hormone and Sexual Health Specialist", img: "https://agelessliving.com/wp-content/uploads/2024/06/Dr.Tracey-White-Dress-uncropped-13-1-768x793.jpg", treatments: ["Hormone Balancing", "Men's Health"] },
    { name: "Dr. Jason Boxtart, ND", role: "Men's Health Specialist", img: "https://agelessliving.com/wp-content/uploads/2024/04/jason-768x768.jpg", treatments: ["Men's Health", "Peptide Therapy"] },
    { name: "Constanza Moraga Herrera", role: "Nutritional Practitioner", img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-4.png", treatments: ["Nutritional Counseling", "Health Weight"] },
    { name: "Rachel Bowman Fassio", role: "Clinical Nutritionist", img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-3.png", treatments: ["Nutritional Counseling"] },
    { name: "Melissa Zitterer", role: "Clinic Manager, MOA", img: "https://agelessliving.com/wp-content/uploads/2025/09/image0-10-e1757724838812.jpeg", treatments: [] },
  ],
  victoria: [
    { name: "Sarita Hutton", role: "Owner, Aesthetic Nurse Specialist, Director of Aesthetic Medicine", img: "https://agelessliving.com/wp-content/uploads/2022/06/4-768x768.png", treatments: ["Skin Rejuvenation", "Aesthetic Injectables"] },
    { name: "Dr. Tracey Lotze, MD", role: "Hormone and Sexual Health Specialist", img: "https://agelessliving.com/wp-content/uploads/2024/06/Dr.Tracey-White-Dress-uncropped-13-1-768x793.jpg", treatments: ["Hormone Balancing", "Men's Health"] },
    { name: "Dr. Jason Boxtart, ND", role: "Men's Health Specialist", img: "https://agelessliving.com/wp-content/uploads/2024/04/jason-768x768.jpg", treatments: ["Men's Health", "Peptide Therapy"] },
    { name: "Jenny Hwang, RN", role: "Aesthetic Nurse Mentee", img: "https://agelessliving.com/wp-content/uploads/2025/04/1-768x768.png", treatments: ["Skin Rejuvenation", "IV Therapy"] },
    { name: "Lucy Watson", role: "Clinic Manager", img: "https://agelessliving.com/wp-content/uploads/2024/04/3-768x768.png", treatments: [] },
    { name: "Madison Allen", role: "Clinic Administrator, MOA", img: "https://agelessliving.com/wp-content/uploads/2024/04/Ageless-Website-Team-Photos-2-768x768.png", treatments: [] },
  ],
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function LocationsPage() {
  const [active, setActive] = useState<Location>("langley");
  const loc = locationData[active];
  const team = teamData[active];
  const treatments = treatmentsAtLocation[active];

  const jsonLd = Object.values(locationData).map((l) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Ageless Living™ — ${l.name}`,
    address: { "@type": "PostalAddress", streetAddress: l.address.split(",")[0], addressLocality: l.name, addressRegion: "BC", addressCountry: "CA" },
    telephone: l.phone,
    openingHours: "Mo-Fr 09:00-17:00",
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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Locations & Team</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.1]">Serving British Columbia for Over a Decade</h1>
          </motion.div>

          {/* Location tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {(Object.keys(locationData) as Location[]).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.97] ${
                  active === key ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {locationData[key].name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
              {/* Location info card */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm mb-6">
                <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-primary" /><span className="text-foreground">{loc.address}</span></div>
                  <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-primary" /><a href={`tel:${loc.phone}`} className="text-foreground hover:text-primary transition-colors">{loc.phone}</a></div>
                  <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-primary" /><a href={`mailto:${loc.email}`} className="text-foreground hover:text-primary transition-colors">{loc.email}</a></div>
                  <div className="flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-primary" /><span className="text-foreground">{loc.hours}</span></div>
                </div>
                <div className="rounded-xl overflow-hidden h-48 mb-4">
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${loc.name} map`}
                  />
                </div>
                <a
                  href={loc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.97]"
                >
                  Get Directions <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Two-column: Treatments + Team */}
              <div className="grid lg:grid-cols-5 gap-6">
                {/* Left: Treatments Available */}
                <div className="lg:col-span-2">
                  <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm h-full">
                    <h2 className="text-lg font-bold text-foreground mb-5">Treatments Available Here</h2>
                    <ul className="space-y-3">
                      {treatments.map((t) => (
                        <li key={t.name} className="flex items-center gap-3 text-sm text-foreground">
                          <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center shrink-0">
                            <t.icon className="h-4 w-4 text-accent-foreground" />
                          </div>
                          {t.name}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mt-6 leading-relaxed border-t border-border/40 pt-4">
                      Our expert aestheticians and clinicians are specially trained for the treatments offered at each location.
                    </p>
                  </div>
                </div>

                {/* Right: Team */}
                <div className="lg:col-span-3">
                  <h2 className="text-lg font-bold text-foreground mb-5">Who Can Perform Them</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {team.map((member, i) => (
                      <motion.div
                        key={member.name + active}
                        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: i * 0.06, ease }}
                        className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                      >
                        <div className="flex gap-4 p-4">
                          <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted shrink-0">
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-foreground text-sm truncate">{member.name}</h3>
                            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{member.role}</p>
                            {member.treatments.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {member.treatments.map((t) => (
                                  <span key={t} className="px-2 py-0.5 rounded-full bg-accent text-[10px] font-medium text-foreground">{t}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        {member.treatments.length > 0 && (
                          <div className="px-4 pb-4">
                            <Link
                              to="/book"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all duration-200"
                            >
                              Book with {member.name.split(",")[0].split(" ")[0]} <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
