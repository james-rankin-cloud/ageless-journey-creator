import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  {
    id: "victoria",
    name: "Victoria",
    address: "1-101 Burnside Rd W, Victoria, BC V9A 1B7",
    phone: "+1 (250) 590-5787",
    email: "wellness@agelessliving.ca",
    note: "Hours may vary due to weather or staff training. We recommend calling ahead to confirm we are open.",
  },
  {
    id: "langley",
    name: "Langley",
    address: "415-20178 96 Ave, Langley, BC V1M 0B2",
    phone: "+1 (236) 326-6830",
    email: "langley@agelessliving.ca",
  },
  {
    id: "kelowna",
    name: "Kelowna",
    address: "102-3320 Richter Street, Kelowna, BC V1W 4V5",
    phone: "+1 (778) 760-9827",
    email: "kelowna@agelessliving.ca",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function HomeLocations() {
  return (
    <section className="section-y bg-background">
      <div className="container mx-auto section-padding">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="label-sm mb-4">Locations</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Visit Ageless Living
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{loc.name}</h3>
              </div>

              <div className="space-y-4 flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {loc.address}
                </p>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`mailto:${loc.email}`}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {loc.email}
                  </a>
                </div>

                {loc.note && (
                  <p className="text-xs text-muted-foreground/80 leading-relaxed pt-2 border-t border-border">
                    {loc.note}
                  </p>
                )}
              </div>

              <Link
                to="/book"
                className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              >
                Book Consultation
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
