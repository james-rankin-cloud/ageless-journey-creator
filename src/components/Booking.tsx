import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ExternalLink, LogIn } from "lucide-react";

type Location = "langley" | "kelowna" | "victoria";

const services = [
  "Initial Consultation",
  "Hormone Balancing Assessment",
  "Skin Rejuvenation Treatment",
  "Biohacking / IV Therapy",
  "Health Weight Program",
  "Follow-up Appointment",
  "Aesthetic Treatment",
];

const staffByLocation: Record<Location, { name: string; avail: string; specialty: string }[]> = {
  langley: [
    { name: "Dr. Jean Paul Lim", avail: "Mon, Wed, Fri", specialty: "Internal Medicine & Longevity" },
    { name: "Michael Forbes", avail: "Tue, Thu", specialty: "Hormone Restoration" },
    { name: "Yvonne Ng", avail: "Mon–Fri", specialty: "Medical Aesthetics" },
    { name: "Avnit Bhullar", avail: "Mon, Wed, Fri", specialty: "Medical Aesthetics" },
  ],
  kelowna: [
    { name: "Dr. Tracey Lotze", avail: "Mon, Wed", specialty: "Hormone & Sexual Health" },
    { name: "Dr. Jason Boxtart", avail: "Tue, Thu, Fri", specialty: "Men's Health" },
    { name: "Constanza Moraga", avail: "Mon–Thu", specialty: "Nutrition & Microbiota" },
    { name: "Rachel Bowman Fassio", avail: "Wed, Fri", specialty: "Clinical Nutrition" },
  ],
  victoria: [
    { name: "Sarita Hutton", avail: "Mon–Fri", specialty: "Aesthetic Nurse Specialist" },
    { name: "Dr. Tracey Lotze", avail: "Tue, Thu", specialty: "Hormone & Sexual Health" },
    { name: "Dr. Jason Boxtart", avail: "Mon, Wed", specialty: "Men's Health" },
    { name: "Jenny Hwang", avail: "Mon, Wed, Fri", specialty: "Aesthetic Nursing" },
  ],
};

export default function Booking() {
  const [location, setLocation] = useState<Location>("langley");
  const [service, setService] = useState("");
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);

  const staff = staffByLocation[location];

  return (
    <section id="booking" className="py-24 bg-card">
      <div className="container mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Book Now</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Schedule Your Visit</h2>
          <p className="text-muted-foreground leading-relaxed">
            Select your location, choose a service, and view clinician availability — all powered by Jane App.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Location tabs */}
          <div className="flex gap-2 mb-8 justify-center flex-wrap">
            {(["langley", "kelowna", "victoria"] as Location[]).map((loc) => (
              <button
                key={loc}
                onClick={() => { setLocation(loc); setSelectedStaff(null); }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.97] ${
                  location === loc
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {loc.charAt(0).toUpperCase() + loc.slice(1)}
              </button>
            ))}
          </div>

          {/* Service select */}
          <div className="mb-8">
            <label className="text-sm font-semibold text-foreground mb-2 block">Choose Service</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full p-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="">Select a service…</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Staff cards */}
          <div className="mb-8">
            <label className="text-sm font-semibold text-foreground mb-4 block flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              Available Clinicians
            </label>
            <div className="grid sm:grid-cols-2 gap-4">
              {staff.map((s) => (
                <motion.button
                  key={s.name + location}
                  onClick={() => setSelectedStaff(s.name)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 active:scale-[0.97] ${
                    selectedStaff === s.name
                      ? "border-primary bg-accent shadow-md"
                      : "border-border bg-card hover:border-primary/40 hover:shadow-sm"
                  }`}
                >
                  <h4 className="font-bold text-foreground text-sm">{s.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{s.specialty}</p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-primary">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{s.avail}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Booking CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="https://ageless.janeapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
            >
              <Calendar className="h-4 w-4" />
              {selectedStaff ? `Book with ${selectedStaff.split(" ")[0]}` : "Book on Jane App"}
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
            <a
              href="https://ageless.janeapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
            >
              <LogIn className="h-4 w-4" />
              Client Portal — History, Notes & Rebooking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
