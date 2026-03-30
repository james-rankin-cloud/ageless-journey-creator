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
      <section className="bg-gradient-to-br from-clinic-teal/5 via-white to-white py-20 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-sm order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJpm49UmOc04bOjEko7atKFnzhW807a4jaFktPPEpWZABH95ieH4UjsbSiMaWmxg80yoRi91p6NN2t3RA3dRjTzSPxGePNrEn6Z4Ejp-47GQuHsX5soBvbk91hqFpLGXEcrFxBzarksFBa6sXfHhEa0fod9w-PzbyfO45i-hfDxllQx6rj1TIHZvCg2wFUDdOhlZK4JPkj5YUfWitrkM7N8R_D_lHYtxkqE2LR4G5ChkEQhwmitORKPo1M4LgEvgxbB0hH-Ei5eYk"
              alt="Practitioner with patient at Ageless Living clinical setting"
              className="w-full h-full object-cover aspect-[4/3]"
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
              <span className="text-clinic-teal font-medium italic">at any age.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Ageless Living brings together the best of what's possible: The guidance, tools and technologies to help you live better, longer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Branding Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start border-b border-border/20 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight">
                Live better, longer.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md font-light">
                How we care for ourselves has the power to shape our body, mind and spirit, and ultimately our experience of aging. Evidence suggests as much as 80% of health is influenced by how we live each day. The upshot? Wellbeing is in our hands.
              </p>

              {/* Values Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Picture your possible.</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed font-light">
                    Ageless Living brings together the best of what's possible: the guidance, tools and technologies to help you live better, longer.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Collaborative care.</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed font-light">
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
              {/* Brand Mark - Teal 'A' SVG */}
              <div className="w-64 h-64 md:w-80 md:h-80 text-clinic-teal opacity-90">
                <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 5L10 85H25L50 30L75 85H90L50 5Z" fill="currentColor" />
                  <path d="M35 65H65V75H35V65Z" fill="currentColor" />
                  <path d="M30 75H70V80H30V75Z" fill="currentColor" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-6 block">
                Across Multiple Locations
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-tight leading-tight mb-8">
                Serving British Columbia for over a decade.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md font-light mb-12">
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcXnzOPndvCJmIdJuGMI-XoOMID4xlqH8ulhmCHRzuCUlwVqQ9qnO6ssVIgPfZvhx4unx_aeGyI81nCPbLLSiNIVZkZYzRsqm68l5yxxvIp9hpI_PzdZzGNG2Nl6flOrsIYPnsR2gFnutkFv_Kgscd-NjTA1o3qAwE0fdsqa4QGemvGEBy0FbJfe1PWOAYdcVEzE8bl2_eW9AfXjD14l1mygF7urilvHJC6psXUNiyZ8ylIdbIJqxGr4rbJ1GWbblgcap3e5dYqq8"
                alt="Clinical team consulting at Ageless Living"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute top-8 left-8">
                <div className="text-2xl font-light tracking-tighter text-clinic-teal">
                  Ageless<span className="text-muted-foreground">Living</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground mb-8">
              Ready to begin your journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              Your best self is waiting. Join the hundreds of British Columbians who have chosen the clinical sanctuary of Ageless Living.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                to="/book"
                className="bg-foreground text-background px-10 py-4 rounded-full text-sm font-bold transition-all hover:opacity-90 active:scale-95"
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className="text-clinic-teal font-bold text-sm border-b border-clinic-teal/20 hover:border-clinic-teal px-4 py-1 transition-all"
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
