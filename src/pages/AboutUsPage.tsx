import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const locations = [
  { name: "Kelowna", href: "/locations/kelowna" },
  { name: "Victoria", href: "/locations/victoria" },
  { name: "Langley", href: "/locations/langley" },
];

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Ageless Living™ — Helping you discover your best self</title>
        <meta
          name="description"
          content="Ageless Living brings together the best of what's possible: The guidance, tools and technologies to help you live better, longer."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-clinic-teal/5 via-white to-white pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-sm order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <img
              src="/src/assets/about-us-1.jpg"
              alt="Practitioner with patient at Ageless Living clinical setting"
              className="w-full h-full object-cover object-center aspect-[4/3]"
            />
          </motion.div>
          <motion.div
            className="max-w-xl order-1 md:order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-6 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1] mb-8">
              Helping you discover your best self,{" "}
              <span className="bg-gradient-to-r from-clinic-teal to-cyan-500 bg-clip-text text-transparent font-medium italic">at any age.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Ageless Living brings together the best of what's possible: The guidance, tools and technologies to help you live better, longer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Branding Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start border-b border-border/20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
                Live better, longer.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md font-light">
                How we care for ourselves has the power to shape our body, mind and spirit, and ultimately our experience of aging. Evidence suggests as much as 80% of health is influenced by how we live each day. The upshot? Wellbeing is in our hands.
              </p>

              {/* Values Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Picture your possible.</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    Ageless Living brings together the best of what's possible: the guidance, tools and technologies to help you live better, longer.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Collaborative care.</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    The brainchild of pharmacist and physician (MD) founders, Ageless blends the best of traditional medicine with groundbreaking wellness therapies, taking your health to the next level.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center md:justify-end items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/src/assets/about-us-2.png"
                  alt="Ageless Living brand"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                Across Multiple Locations
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight leading-tight mb-6">
                Serving British Columbia for over a decade.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md font-light mb-8">
                Ageless Living™ now has three locations in BC. You can find location hours, addresses, and more by clicking a location below.
              </p>

              {/* Location Links */}
              <div className="flex flex-wrap gap-8">
                {locations.map((loc) => (
                  <Link
                    key={loc.name}
                    to={loc.href}
                    className="flex items-center gap-2 group"
                  >
                    <MapPin className="w-5 h-5 text-clinic-teal" />
                    <span className="text-sm font-semibold text-foreground group-hover:text-clinic-teal transition-colors">
                      {loc.name}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <img
                src="/src/assets/about-us-3.jpg"
                alt="Clinical team consulting at Ageless Living"
                className="w-full h-full object-cover object-center aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute top-8 left-8">
                <div className="text-2xl font-light tracking-tight text-clinic-teal">
                  Ageless<span className="text-muted-foreground">Living</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
              Ready to begin your journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Your best self is waiting. Join the hundreds of British Columbians who have chosen the clinical sanctuary of Ageless Living.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                to="/book"
                className="bg-gradient-to-r from-clinic-teal to-cyan-500 text-white px-10 py-4 rounded-full text-sm font-bold transition-all hover:from-clinic-teal/90 hover:to-cyan-500/90 active:scale-95 shadow-lg shadow-cyan-500/20"
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-clinic-teal to-cyan-500 bg-clip-text text-transparent font-bold text-sm border-b border-cyan-500/20 hover:border-cyan-500 px-4 py-1 transition-all"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
