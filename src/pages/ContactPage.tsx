import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";

const locations = [
  {
    name: "Langley",
    address: "415-20178 96th Ave, Langley, BC V1M 0B2",
    phone: "+1 (236) 326-6830",
    email: "langley@agelessliving.ca",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.0!2d-122.6586!3d49.1784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzQyLjIiTiAxMjLCsDM5JzMxLjAiVw!5e0!3m2!1sen!2sca!4v1",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=415-20178+96th+Ave,+Langley,+BC+V1M+0B2",
  },
  {
    name: "Victoria",
    address: "1-101 Burnside Rd W, Victoria, BC V9A 1B7",
    phone: "+1 (250) 590-5787",
    email: "wellness@agelessliving.ca",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.0!2d-123.3774!3d48.4450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDI2JzQyLjAiTiAxMjPCsDIyJzM4LjYiVw!5e0!3m2!1sen!2sca!4v1",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1-101+Burnside+Rd+W,+Victoria,+BC+V9A+1B7",
  },
  {
    name: "Kelowna",
    address: "102-3320 Richter Street, Kelowna, BC V1W 4V5",
    phone: "+1 (778) 760-9827",
    email: "kelowna@agelessliving.ca",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.0!2d-119.4960!3d49.8710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDUyJzE1LjYiTiAxMTnCsDI5JzQ1LjYiVw!5e0!3m2!1sen!2sca!4v1",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=102-3320+Richter+Street,+Kelowna,+BC+V1W+4V5",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Ageless Living™ — Our Locations in BC</title>
        <meta name="description" content="Find Ageless Living™ Wellness Centre in Langley, Victoria, or Kelowna. Get directions or give us a call." />
      </Helmet>

      <section className="pt-32 pb-24 bg-card">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Contact Us</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 leading-[1.1]">
              Our Locations
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Three locations across British Columbia.
            </p>
          </motion.div>

          <div className="space-y-10">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="bg-secondary rounded-3xl overflow-hidden border border-border/40"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Info */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-foreground mb-5">{loc.name}</h2>
                    <div className="space-y-3 mb-6">
                      <p className="flex items-start gap-3 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {loc.address}
                      </p>
                      <a href={`tel:${loc.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="h-4 w-4 text-primary shrink-0" />
                        {loc.phone}
                      </a>
                      <a href={`mailto:${loc.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-4 w-4 text-primary shrink-0" />
                        {loc.email}
                      </a>
                    </div>
                    <a
                      href={loc.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/15 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97] w-fit text-sm"
                    >
                      <Navigation className="h-4 w-4" /> Get Directions
                    </a>
                  </div>

                  {/* Map */}
                  <div className="h-64 lg:h-auto min-h-[280px]">
                    <iframe
                      src={loc.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Google Maps - ${loc.name} location`}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
