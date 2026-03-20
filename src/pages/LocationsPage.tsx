import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Location = "langley" | "kelowna" | "victoria";

const locationData: Record<Location, { name: string; address: string; phone: string; hours: string; mapUrl: string }> = {
  langley: { name: "Langley", address: "20689 Fraser Hwy, Langley, BC V3A 4G4", phone: "(604) 427-0120", hours: "Mon–Fri 9am–5pm", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.6!2d-122.6!3d49.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sen!2sca!4v1" },
  kelowna: { name: "Kelowna", address: "1708 Dolphin Ave #101, Kelowna, BC V1Y 9S4", phone: "(250) 868-9289", hours: "Mon–Fri 9am–5pm", mapUrl: "" },
  victoria: { name: "Victoria", address: "740 Hillside Ave #120, Victoria, BC V8T 1Z4", phone: "(250) 590-5321", hours: "Mon–Fri 9am–5pm", mapUrl: "" },
};

const teamData: Record<Location, { name: string; role: string; img: string; bio: string }[]> = {
  langley: [
    { name: "Michael Forbes, BSc Pharm", role: "Owner, Pharmacist, Certified in Hormone Restoration", img: "https://agelessliving.com/wp-content/uploads/2022/06/mike-768x768.png", bio: "Co-founder with deep expertise in compounding pharmacy and bio-identical hormone therapy." },
    { name: "Dr. Jean Paul Lim, MD, FRCPC", role: "Owner, Internal Medicine & Longevity Specialist", img: "https://agelessliving.com/wp-content/uploads/2022/06/Screenshot-2024-06-14-at-10.23.47%E2%80%AFAM-768x767.png", bio: "Board-certified internist focused on preventive medicine and longevity optimization." },
    { name: "Shelley McBride", role: "MOA, Clinic Manager", img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-6.png", bio: "Keeps the Langley clinic running smoothly and ensures every client feels welcome." },
    { name: "Yvonne Ng", role: "Certified Medical Aesthetician", img: "https://agelessliving.com/wp-content/uploads/2025/09/yvonne-bio-photo-e1758061895992-768x768.jpg", bio: "Specializes in advanced skin treatments with a gentle, detail-oriented approach." },
    { name: "Avnit Bhullar", role: "Medical Aesthetician", img: "https://agelessliving.com/wp-content/uploads/2024/06/Diseno-sin-titulo-5.png", bio: "Expert in aesthetic treatments with a passion for helping clients feel confident." },
  ],
  kelowna: [
    { name: "Michael Forbes, BSc Pharm", role: "Owner, Pharmacist", img: "https://agelessliving.com/wp-content/uploads/2022/06/mike-768x768.png", bio: "Co-founder overseeing hormone therapy programs across all locations." },
    { name: "Dr. Jean Paul Lim, MD, FRCPC", role: "Owner, Internal Medicine Specialist", img: "https://agelessliving.com/wp-content/uploads/2022/06/Screenshot-2024-06-14-at-10.23.47%E2%80%AFAM-768x767.png", bio: "Leads longevity and preventive medicine programs." },
    { name: "Dr. Tracey Lotze, MD", role: "Hormone and Sexual Health Specialist", img: "https://agelessliving.com/wp-content/uploads/2024/06/Dr.Tracey-White-Dress-uncropped-13-1-768x793.jpg", bio: "Specializes in hormone optimization and sexual health for all genders." },
    { name: "Dr. Jason Boxtart, ND", role: "Men's Health Specialist", img: "https://agelessliving.com/wp-content/uploads/2024/04/jason-768x768.jpg", bio: "Naturopathic doctor focused on male vitality, hormones, and performance." },
    { name: "Constanza Moraga Herrera", role: "Nutritional Practitioner", img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-4.png", bio: "Guides clients through microbiota analysis and personalized nutrition plans." },
    { name: "Rachel Bowman Fassio", role: "Clinical Nutritionist", img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-3.png", bio: "Combines clinical nutrition with holistic health strategies." },
    { name: "Melissa Zitterer", role: "Clinic Manager, MOA", img: "https://agelessliving.com/wp-content/uploads/2025/09/image0-10-e1757724838812.jpeg", bio: "Ensures a warm and organized experience at the Kelowna location." },
  ],
  victoria: [
    { name: "Sarita Hutton", role: "Owner, Aesthetic Nurse Specialist, Director of Aesthetic Medicine", img: "https://agelessliving.com/wp-content/uploads/2022/06/4-768x768.png", bio: "Founder of the Victoria clinic with extensive nursing and aesthetics expertise." },
    { name: "Dr. Tracey Lotze, MD", role: "Hormone and Sexual Health Specialist", img: "https://agelessliving.com/wp-content/uploads/2024/06/Dr.Tracey-White-Dress-uncropped-13-1-768x793.jpg", bio: "Expert in hormone therapy and sexual wellness." },
    { name: "Dr. Jason Boxtart, ND", role: "Men's Health Specialist", img: "https://agelessliving.com/wp-content/uploads/2024/04/jason-768x768.jpg", bio: "Naturopathic men's health and vitality specialist." },
    { name: "Jenny Hwang, RN", role: "Aesthetic Nurse Mentee", img: "https://agelessliving.com/wp-content/uploads/2025/04/1-768x768.png", bio: "Registered nurse trained in advanced aesthetic procedures." },
    { name: "Lucy Watson", role: "Clinic Manager", img: "https://agelessliving.com/wp-content/uploads/2024/04/3-768x768.png", bio: "Manages the Victoria clinic with warmth and professionalism." },
    { name: "Madison Allen", role: "Clinic Administrator, MOA", img: "https://agelessliving.com/wp-content/uploads/2024/04/Ageless-Website-Team-Photos-2-768x768.png", bio: "Handles scheduling, intake, and client communications." },
  ],
};

export default function LocationsPage() {
  const [active, setActive] = useState<Location>("langley");
  const loc = locationData[active];
  const team = teamData[active];

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
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Locations & Team</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.1]">Serving British Columbia for Over a Decade</h1>
          </motion.div>

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
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm mb-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-primary" /><span className="text-foreground">{loc.address}</span></div>
                <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-primary" /><span className="text-foreground">{loc.phone}</span></div>
                <div className="flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-primary" /><span className="text-foreground">{loc.hours}</span></div>
              </div>

              <h2 className="text-xl font-bold text-foreground mb-6">Meet the {loc.name} Team</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {team.map((member, i) => (
                  <motion.div
                    key={member.name + active}
                    initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-foreground text-sm">{member.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{member.role}</p>
                      <p className="text-xs text-muted-foreground/70 mt-2 leading-relaxed">{member.bio}</p>
                      <Link to="/book" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all duration-200">
                        Book with {member.name.split(",")[0].split(" ")[0]} <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
