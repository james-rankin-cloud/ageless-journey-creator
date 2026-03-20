import { Helmet } from "react-helmet-async";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Check, ChevronRight, LogIn, Clock } from "lucide-react";

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

// Generate realistic available time slots
function generateSlots(day: number) {
  const slots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"];
  // Pseudo-random removal based on day to simulate real availability
  return slots.filter((_, i) => (i + day) % 3 !== 0);
}

export default function BookNowPage() {
  const [location, setLocation] = useState<Location>("langley");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedClinician, setSelectedClinician] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const clinicians = cliniciansByLocation[location];

  // Generate next 14 available dates
  const availableDates = useMemo(() => {
    const dates: Date[] = [];
    const now = new Date();
    for (let i = 1; dates.length < 14; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      if (d.getDay() !== 0 && d.getDay() !== 6) dates.push(d);
    }
    return dates;
  }, []);

  const toggleService = (s: string) => {
    setSelectedServices((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  const step = confirmed ? 5 : selectedTime ? 4 : selectedDate !== null ? 3 : selectedServices.length > 0 ? 2 : 1;

  const handleConfirm = () => setConfirmed(true);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.1]">Schedule Your Visit</h1>
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

            {/* Step 2: Services */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>2</span>
                Choose Service(s)
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleService(s)}
                    className={`flex items-center gap-3 p-4 rounded-xl text-left text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                      selectedServices.includes(s)
                        ? "bg-accent border-2 border-primary text-foreground shadow-sm"
                        : "bg-card border-2 border-border text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                      selectedServices.includes(s) ? "bg-primary border-primary" : "border-border"
                    }`}>
                      {selectedServices.includes(s) && <Check className="h-3 w-3 text-primary-foreground" />}
                    </div>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Clinician + Date */}
            <AnimatePresence>
              {selectedServices.length > 0 && (
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

                  {/* Clinician cards */}
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

                  {/* Date picker */}
                  <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" /> Select a Date
                  </p>
                  <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
                    {availableDates.map((d, i) => (
                      <button
                        key={i}
                        onClick={() => { setSelectedDate(i); setSelectedTime(null); setConfirmed(false); }}
                        className={`flex flex-col items-center px-4 py-3 rounded-xl text-sm transition-all duration-200 shrink-0 active:scale-[0.97] ${
                          selectedDate === i ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="text-xs font-medium">{dayNames[d.getDay()]}</span>
                        <span className="text-lg font-bold">{d.getDate()}</span>
                        <span className="text-xs">{monthNames[d.getMonth()]}</span>
                      </button>
                    ))}
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
                    {generateSlots(selectedDate).map((slot) => (
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
                      <p><strong className="text-foreground">Services:</strong> <span className="text-muted-foreground">{selectedServices.join(", ")}</span></p>
                      <p><strong className="text-foreground">Clinician:</strong> <span className="text-muted-foreground">{selectedClinician || "Any Available"}</span></p>
                      <p><strong className="text-foreground">Date:</strong> <span className="text-muted-foreground">{selectedDate !== null && availableDates[selectedDate] ? availableDates[selectedDate].toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" }) : ""}</span></p>
                      <p><strong className="text-foreground">Time:</strong> <span className="text-muted-foreground">{selectedTime}</span></p>
                    </div>
                    <button
                      onClick={handleConfirm}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
                    >
                      <Calendar className="h-4 w-4" /> Confirm Booking <ChevronRight className="h-4 w-4" />
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
                      <p>{selectedServices.join(", ")}</p>
                      <p>{selectedClinician || "Any Available Clinician"}</p>
                      <p>{selectedDate !== null && availableDates[selectedDate] ? availableDates[selectedDate].toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" }) : ""} at {selectedTime}</p>
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
