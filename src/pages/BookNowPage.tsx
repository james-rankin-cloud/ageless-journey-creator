import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import {
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_TEL,
  CLINIC_EMAIL,
} from "@/lib/links";

const ease = [0.16, 1, 0.3, 1] as const;

const locations = [
  { name: "Langley", address: "415-20178 96th Ave, Langley, BC", href: "/locations/langley" },
  { name: "Victoria", address: "740 Hillside Ave #120, Victoria, BC", href: "/locations/victoria" },
  { name: "Kelowna", address: "1708 Dolphin Ave #101, Kelowna, BC", href: "/locations/kelowna" },
];

export default function BookNowPage() {
  return (
    <>
      <Helmet>
        <title>Book Now | Ageless Living™ — Reserve Your Consultation</title>
        <meta
          name="description"
          content="Contact Ageless Living™ to book your consultation. Speak with our wellness team directly by phone or email — every booking begins with a personal conversation."
        />
      </Helmet>

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-clinic-teal/[0.06] blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          >
            <p className="eyebrow mb-4">
              <span className="hairline pb-2 text-xs md:text-sm">Reserve Your Visit</span>
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-foreground tracking-tight leading-[1.05] mb-6">
              Speak with our team
              <br />
              <span className="italic text-clinic-teal">to secure your spot.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Every Ageless Living™ journey begins with a personal conversation.
              Reach out by phone or email and our wellness concierge will tailor
              your consultation, location and preferred clinician.
            </p>
          </motion.div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative rounded-3xl border border-border/60 bg-card shadow-[0_30px_80px_-30px_rgba(15,60,74,0.18)] overflow-hidden">
              {/* Subtle gradient header */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-clinic-teal/0 via-clinic-teal/40 to-clinic-teal/0" />

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2.5 mb-2">
                  <Sparkles className="h-4 w-4 text-clinic-teal" />
                  <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground font-semibold">
                    Contact to Book
                  </p>
                </div>
                <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-8">
                  Get in touch directly.
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Phone */}
                  <a
                    href={`tel:${CLINIC_PHONE_TEL}`}
                    className="group relative flex flex-col p-6 rounded-2xl border border-border/60 bg-background hover:bg-secondary/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-clinic-teal-light text-clinic-teal">
                        <Phone className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">
                        Call us
                      </span>
                    </div>
                    <p className="text-lg md:text-xl font-medium text-foreground tracking-tight mb-1">
                      {CLINIC_PHONE_DISPLAY}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Speak with our wellness concierge.
                    </p>
                    <ArrowUpRight className="absolute top-6 right-6 h-4 w-4 text-muted-foreground transition-all group-hover:text-clinic-teal group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${CLINIC_EMAIL}?subject=Booking%20Enquiry`}
                    className="group relative flex flex-col p-6 rounded-2xl border border-border/60 bg-background hover:bg-secondary/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-clinic-teal-light text-clinic-teal">
                        <Mail className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">
                        Email us
                      </span>
                    </div>
                    <p className="text-lg md:text-xl font-medium text-foreground tracking-tight mb-1 break-all">
                      {CLINIC_EMAIL}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Reply within one business day.
                    </p>
                    <ArrowUpRight className="absolute top-6 right-6 h-4 w-4 text-muted-foreground transition-all group-hover:text-clinic-teal group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Hours */}
                <div className="mt-8 flex items-start gap-3 rounded-2xl bg-secondary/60 px-5 py-4">
                  <Clock className="h-4 w-4 text-clinic-teal mt-0.5 shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p className="text-foreground font-medium mb-0.5">Clinic hours</p>
                    <p>Mon – Fri · 9 AM – 5 PM &nbsp;·&nbsp; Sat · By appointment</p>
                  </div>
                </div>

                {/* Primary CTA */}
                <a
                  href={`tel:${CLINIC_PHONE_TEL}`}
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-clinic-teal text-white font-semibold text-xs md:text-sm uppercase tracking-[0.18em] hover:bg-clinic-teal-container transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call to book
                </a>
              </div>
            </div>

            {/* Locations strip */}
            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              {locations.map((loc) => (
                <Link
                  key={loc.name}
                  to={loc.href}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card/40 hover:bg-card transition-colors"
                >
                  <MapPin className="h-4 w-4 text-clinic-teal mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{loc.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{loc.address}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
