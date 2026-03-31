import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, User, Check, ChevronRight, LogIn, Clock, ChevronDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
type Location = "langley" | "kelowna" | "victoria";

const mainServices = [
  "Skin Rejuvenation",
  "Hormone Balancing",
  "Biohacking",
  "Health Weight",
  "Follow-up Appointment",
  "Initial Consultation",
];

const subServiceMap: Record<string, { name: string; locationNote?: string }[]> = {
  "Skin Rejuvenation": [
    { name: "Botox / Dysport" },
    { name: "Cosmetic Dermal Filler" },
    { name: "Customized UltraFacial" },
    { name: "Laser & IPL/BBL Photorejuvenation" },
    { name: "The Perfect Derma™ Peel" },
    { name: "Medical Microneedling" },
    { name: "Belkyra™" },
    { name: "Dermaplaning" },
  ],
  "Biohacking": [
    { name: "Red Light Therapy (PBM)", locationNote: "Kelowna only" },
    { name: "IV Therapy" },
    { name: "Hyperbaric Oxygen Therapy (HBOT)", locationNote: "Kelowna only" },
    { name: "Neurointegrator", locationNote: "Kelowna only" },
    { name: "Brain Tap", locationNote: "Kelowna only" },
    { name: "Far Infrared Sauna", locationNote: "Kelowna only" },
    { name: "NuCalm", locationNote: "Kelowna only" },
    { name: "PEMF Therapy", locationNote: "Kelowna only" },
  ],
  "Hormone Balancing": [
    { name: "Bio-Identical Hormone Replacement (BHRT)" },
    { name: "Comprehensive Blood Panels" },
    { name: "Thyroid Optimization" },
    { name: "Testosterone Therapy" },
    { name: "Progesterone & Estrogen Protocols" },
  ],
  "Health Weight": [
    { name: "GLP-1 Support (Semaglutide)" },
    { name: "Metabolic Testing" },
    { name: "InBody Composition Analysis" },
    { name: "Nutritional Counseling" },
  ],
};

const cliniciansByLocation: Record<Location, { name: string; specialty: string; img: string; avail: string[] }[]> = {
  langley: [
    { name: "Dr. Jean Paul Lim", specialty: "Internal Medicine & Longevity", img: "https://agelessliving.com/wp-content/uploads/2022/06/Screenshot-2024-06-14-at-10.23.47%E2%80%AFAM-768x767.png", avail: ["Mon", "Wed", "Fri"] },
    { name: "Michael Forbes", specialty: "Hormone Restoration", img: "https://agelessliving.com/wp-content/uploads/2022/06/mike-768x768.png", avail: ["Tue", "Thu"] },
    { name: "Yvonne Ng", specialty: "Medical Aesthetics", img: "https://agelessliving.com/wp-content/uploads/2025/09/yvonne-bio-photo-e1758061895992-768x768.jpg", avail: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
    { name: "Avnit Bhullar", specialty: "Medical Aesthetics", img: "https://agelessliving.com/wp-content/uploads/2024/06/Diseno-sin-titulo-5.png", avail: ["Mon", "Wed", "Fri"] },
  ],
  kelowna: [
    { name: "Dr. Tracey Lotze", specialty: "Hormone & Sexual Health", img: "https://agelessliving.com/wp-content/uploads/2024/06/Dr.Tracey-White-Dress-uncropped-13-1-768x793.jpg", avail: ["Mon", "Wed"] },
    { name: "Dr. Jason Boxtart", specialty: "Men's Health", img: "https://agelessliving.com/wp-content/uploads/2024/04/jason-768x768.jpg", avail: ["Tue", "Thu", "Fri"] },
    { name: "Constanza Moraga", specialty: "Nutrition & Microbiota", img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-4.png", avail: ["Mon", "Tue", "Wed", "Thu"] },
    { name: "Rachel Bowman Fassio", specialty: "Clinical Nutrition", img: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-3.png", avail: ["Wed", "Fri"] },
  ],
  victoria: [
    { name: "Sarita Hutton", specialty: "Aesthetic Nurse Specialist", img: "https://agelessliving.com/wp-content/uploads/2022/06/4-768x768.png", avail: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
    { name: "Dr. Tracey Lotze", specialty: "Hormone & Sexual Health", img: "https://agelessliving.com/wp-content/uploads/2024/06/Dr.Tracey-White-Dress-uncropped-13-1-768x793.jpg", avail: ["Tue", "Thu"] },
    { name: "Dr. Jason Boxtart", specialty: "Men's Health", img: "https://agelessliving.com/wp-content/uploads/2024/04/jason-768x768.jpg", avail: ["Mon", "Wed"] },
    { name: "Jenny Hwang", specialty: "Aesthetic Nursing", img: "https://agelessliving.com/wp-content/uploads/2025/04/1-768x768.png", avail: ["Mon", "Wed", "Fri"] },
  ],
};

function generateSlots(day: number) {
  const slots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"];
  return slots.filter((_, i) => (i + day) % 3 !== 0);
}

export default function BookNowPage() {
  const [location, setLocation] = useState<Location>("langley");
  const [selectedMain, setSelectedMain] = useState<string | null>(null);
  const [selectedSubs, setSelectedSubs] = useState<string[]>([]);
  const [selectedClinician, setSelectedClinician] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const clinicians = cliniciansByLocation[location];




  const selectMain = (s: string) => {
    if (selectedMain === s) {
      setSelectedMain(null);
      setSelectedSubs([]);
    } else {
      setSelectedMain(s);
      setSelectedSubs([]);
    }
  };

  const toggleSub = (sub: string) => {
    setSelectedSubs((prev) => prev.includes(sub) ? prev.filter((x) => x !== sub) : [...prev, sub]);
  };

  const hasSelection = selectedMain !== null;
  const subOptions = selectedMain ? subServiceMap[selectedMain] : undefined;

  const step = confirmed ? 5 : selectedTime ? 4 : selectedDate ? 3 : hasSelection ? 2 : 1;
  const handleConfirm = () => setConfirmed(true);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const summaryServices = selectedSubs.length > 0
    ? `${selectedMain} — ${selectedSubs.join(", ")}`
    : selectedMain || "";

  return (
    <>
      <Helmet>
        <title>Book Now | Ageless Living™ — Schedule Your Visit</title>
        <meta name="description" content="Book your appointment at Ageless Living™. Select your location, services, clinician, and preferred time." />
      </Helmet>

      <section className="pt-32 pb-24 bg-card min-h-screen">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Book Now</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 leading-[1.1]">Schedule Your Visit</h1>
            <p className="text-muted-foreground leading-relaxed">Select your location, choose services, and pick a time that works for you.</p>
          </motion.div>

          {/* Progress bar */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-2">
              {["Location", "Services", "Clinician & Date", "Time", "Confirm"].map((label, i) => (
                <span key={label} className={step > i ? "text-primary font-semibold" : ""}>{label}</span>
              ))}
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div className="h-full bg-primary rounded-full" animate={{ width: `${(step / 5) * 100}%` }} transition={{ duration: 0.3 }} />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Step 1: Location */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">1</span>
                Select Location
              </h2>
              <div className="flex gap-3 flex-wrap">
                {(["langley", "kelowna", "victoria"] as Location[]).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => { setLocation(loc); setSelectedClinician(null); setSelectedDate(null); setSelectedTime(null); setConfirmed(false); }}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.97] ${
                      location === loc ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                    }`}
                  >
                    {loc.charAt(0).toUpperCase() + loc.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Main Service + Sub-services */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>2</span>
                Choose Service
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {mainServices.map((s) => (
                  <button
                    key={s}
                    onClick={() => selectMain(s)}
                    className={`flex items-center gap-3 p-4 rounded-xl text-left text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                      selectedMain === s
                        ? "bg-accent border-2 border-primary text-foreground shadow-sm"
                        : "bg-card border-2 border-border text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      selectedMain === s ? "bg-primary border-primary" : "border-border"
                    }`}>
                      {selectedMain === s && <Check className="h-3 w-3 text-primary-foreground" />}
                    </div>
                    <span className="flex-1">{s}</span>
                    {subServiceMap[s] && <ChevronDown className={`h-4 w-4 transition-transform ${selectedMain === s ? "rotate-180 text-primary" : "text-muted-foreground"}`} />}
                  </button>
                ))}
              </div>

              {/* Sub-services */}
              <AnimatePresence>
                {subOptions && subOptions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-5 rounded-2xl bg-accent/40 border border-border/30">
                      <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-1.5">
                        <ChevronRight className="h-3.5 w-3.5 text-primary" />
                        Select specific {selectedMain} services (optional)
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {subOptions.map((sub) => (
                          <button
                            key={sub.name}
                            onClick={() => toggleSub(sub.name)}
                            className={`flex items-center gap-2.5 p-3 rounded-xl text-left text-sm transition-all duration-200 active:scale-[0.98] ${
                              selectedSubs.includes(sub.name)
                                ? "bg-card border-2 border-primary shadow-sm"
                                : "bg-card/50 border-2 border-transparent hover:border-border"
                            }`}
                          >
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 ${
                              selectedSubs.includes(sub.name) ? "bg-primary border-primary" : "border-border"
                            }`}>
                              {selectedSubs.includes(sub.name) && <Check className="h-2.5 w-2.5 text-primary-foreground" />}
                            </div>
                            <span className="flex-1 text-foreground">{sub.name}</span>
                            {sub.locationNote && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium shrink-0">{sub.locationNote}</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Step 3: Clinician + Date */}
            <AnimatePresence>
              {hasSelection && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-10 overflow-hidden"
                >
                  <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>3</span>
                    Preferred Clinician &amp; Date
                  </h2>

                  <p className="text-sm text-muted-foreground mb-3">Choose a clinician (optional — select "Any Available" for first opening)</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    <button
                      onClick={() => setSelectedClinician(null)}
                      className={`flex items-center gap-3 p-4 rounded-xl text-left text-sm transition-all duration-200 active:scale-[0.97] ${
                        selectedClinician === null ? "bg-accent border-2 border-primary shadow-sm" : "bg-card border-2 border-border hover:border-primary/40"
                      }`}
                    >
                      <User className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <p className="font-semibold text-foreground">Any Available</p>
                        <p className="text-xs text-muted-foreground">First opening with any clinician</p>
                      </div>
                    </button>
                    {clinicians.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedClinician(c.name)}
                        className={`flex items-center gap-3 p-4 rounded-xl text-left text-sm transition-all duration-200 active:scale-[0.97] ${
                          selectedClinician === c.name ? "bg-accent border-2 border-primary shadow-sm" : "bg-card border-2 border-border hover:border-primary/40"
                        }`}
                      >
                        <img src={c.img} alt={c.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">{c.name}</p>
                          <p className="text-xs text-muted-foreground">{c.specialty}</p>
                          <p className="text-xs text-primary mt-0.5">{c.avail.join(", ")}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-primary" /> Select a Date
                  </p>
                  <div className="bg-card rounded-lg border border-border p-2 inline-block">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(d) => { setSelectedDate(d); setSelectedTime(null); setConfirmed(false); }}
                      disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                      className="pointer-events-auto"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 4: Time slots */}
            <AnimatePresence>
              {selectedDate !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-10 overflow-hidden"
                >
                  <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step >= 4 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>4</span>
                    Available Times
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {generateSlots(selectedDate ? selectedDate.getDate() : 1).map((slot) => (
                      <button
                        key={slot}
                        onClick={() => { setSelectedTime(slot); setConfirmed(false); }}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                          selectedTime === slot ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        <Clock className="h-3.5 w-3.5 inline mr-1.5" />{slot}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 5: Confirm */}
            <AnimatePresence>
              {selectedTime && !confirmed && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-10"
                >
                  <div className="bg-accent rounded-2xl p-6 md:p-8">
                    <h2 className="text-lg font-bold text-foreground mb-4">Booking Summary</h2>
                    <div className="space-y-2 text-sm mb-6">
                      <p><strong className="text-foreground">Location:</strong> <span className="text-muted-foreground">{location.charAt(0).toUpperCase() + location.slice(1)}</span></p>
                      <p><strong className="text-foreground">Services:</strong> <span className="text-muted-foreground">{summaryServices}</span></p>
                      <p><strong className="text-foreground">Clinician:</strong> <span className="text-muted-foreground">{selectedClinician || "Any Available"}</span></p>
                      <p><strong className="text-foreground">Date:</strong> <span className="text-muted-foreground">{selectedDate ? format(selectedDate, "EEEE, MMMM d") : ""}</span></p>
                      <p><strong className="text-foreground">Time:</strong> <span className="text-muted-foreground">{selectedTime}</span></p>
                    </div>
                    <button
                      onClick={handleConfirm}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
                    >
                      <CalendarIcon className="h-4 w-4" /> Confirm Booking <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Confirmed */}
            <AnimatePresence>
              {confirmed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-10"
                >
                  <div className="bg-accent rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h2>
                    <p className="text-muted-foreground mb-6">You'll receive a confirmation email shortly with all the details.</p>
                    <div className="bg-card rounded-xl p-4 text-sm text-left space-y-1 max-w-sm mx-auto">
                      <p><strong>{location.charAt(0).toUpperCase() + location.slice(1)}</strong></p>
                      <p>{summaryServices}</p>
                      <p>{selectedClinician || "Any Available Clinician"}</p>
                      <p>{selectedDate ? format(selectedDate, "EEEE, MMMM d") : ""} at {selectedTime}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Client Portal tease */}
            <div className="flex items-center gap-3 p-5 rounded-2xl bg-secondary text-sm">
              <LogIn className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Already a client?</p>
                <p className="text-muted-foreground">Log in to view your history, notes, invoices &amp; rebook easily.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
