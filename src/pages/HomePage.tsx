import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, FlaskConical, Zap, Scale, MapPin } from "lucide-react";

import skinImg from "@/assets/services-1.jpg";
import hormoneImg from "@/assets/hormone-balancing.jpg";
import biohackingImg from "@/assets/biohacking.jpg";
import weightImg from "@/assets/health-weight.jpg";
import aboutImg from "@/assets/about-us-1.jpg";
import aboutImg2 from "@/assets/about-us-3.jpg";
import ourLocationsImg from "@/assets/our-locations-home.jpg";
import botoxImg from "@/assets/botox-2.jpg";
import victoriaImg from "@/assets/victoria.png";
import langleyImg from "@/assets/langley.jpg";
import kelownaImg from "@/assets/kelowna.jpg";
import logo from "@/assets/footer-logo.png";

const ease = [0.16, 1, 0.3, 1] as const;

const treatments = [
  {
    icon: Sparkles,
    title: "Skin Rejuvenation",
    description: "Restore your natural glow with our advanced aesthetic therapies.",
    href: "/services#skin-rejuvenation",
    img: skinImg,
  },
  {
    icon: FlaskConical,
    title: "Hormone Balancing",
    description: "Optimize your internal harmony through clinical expertise.",
    href: "/services#hormone-balancing",
    img: hormoneImg,
  },
  {
    icon: Zap,
    title: "Biohacking",
    description: "Unlock peak performance with evidence-based longevity tools.",
    href: "/services#biohacking",
    img: biohackingImg,
  },
  {
    icon: Scale,
    title: "Health Weight",
    description: "A sustainable wellness journey tailored to your unique physiology.",
    href: "/services#health-weight",
    img: weightImg,
  },
];

const locations = [
  { name: "Victoria", address: "740 Hillside Ave #120", city: "Victoria, BC", href: "/locations/victoria", img: victoriaImg },
  { name: "Langley", address: "415-20178 96th Ave", city: "Langley, BC", href: "/locations/langley", img: langleyImg },
  { name: "Kelowna", address: "1708 Dolphin Ave #101", city: "Kelowna, BC", href: "/locations/kelowna", img: kelownaImg },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Ageless Living™ Wellness Centre",
    description: "Modern treatments, expert guidance, and a commitment to helping you live better — at any age. Serving Langley, Victoria, and Kelowna, BC.",
    url: "https://agelessliving.com",
    image: "https://agelessliving.com/wp-content/uploads/2022/06/ageless-living-logo.png",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "287", bestRating: "5" },
    address: [
      { "@type": "PostalAddress", streetAddress: "415-20178 96th Ave", addressLocality: "Langley", addressRegion: "BC", postalCode: "V1M 0B2", addressCountry: "CA" },
      { "@type": "PostalAddress", streetAddress: "1708 Dolphin Ave #101", addressLocality: "Kelowna", addressRegion: "BC", postalCode: "V1Y 9S4", addressCountry: "CA" },
      { "@type": "PostalAddress", streetAddress: "740 Hillside Ave #120", addressLocality: "Victoria", addressRegion: "BC", postalCode: "V8T 1Z4", addressCountry: "CA" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Ageless Living™ Wellness Centre | Modern Treatments in BC</title>
        <meta name="description" content="Discover your best self at any age. Skin rejuvenation, hormone balancing, biohacking & more across Langley, Victoria & Kelowna." />
        <link rel="canonical" href="https://agelessliving.com" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ══════════════ HERO — text left, video right ══════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-36 lg:pb-28">
        <div className="pointer-events-none absolute top-20 left-10 w-72 h-72 bg-clinic-teal/8 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-20 w-96 h-96 bg-clinic-teal/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <p className="eyebrow mb-4 md:mb-6">
                <span className="hairline pb-2 text-xs md:text-sm">Est. 2014 · British Columbia</span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground tracking-tight leading-[1.05] mb-5 md:mb-6">
                Discover your best self,{" "}
                <span className="text-clinic-teal">at any age.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mb-8 md:mb-10 leading-relaxed">
                With Ageless Living™ wide range of modern treatments and services there is something for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/book"
                  className="group inline-flex items-center justify-center gap-3 bg-clinic-teal hover:bg-clinic-teal-container text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-semibold text-xs md:text-sm uppercase tracking-widest transition-all text-center"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/our-team"
                  className="flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-full border-2 border-foreground/15 text-foreground font-semibold text-xs md:text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>

            {/* Right: Video */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="relative"
            >
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-border/30">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/human_graphic.webm" type="video/webm" />
                  <source src="/human_graphic.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS STRIP ══════════════ */}
      <section className="bg-clinic-teal text-white py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-6 text-center">
            {[
              { k: "10+", v: "Years in BC" },
              { k: "3", v: "Clinic locations" },
              { k: "4.9★", v: "Patient rating" },
              { k: "287+", v: "Happy reviews" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <p className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                  {s.k}
                </p>
                <p className="mt-1.5 md:mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/70">
                  {s.v}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TREATMENTS — cards with images ══════════════ */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4 md:gap-6">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="eyebrow mb-3 md:mb-4"><span className="hairline pb-2 text-xs md:text-sm">Our Four Pillars</span></p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-4 md:mb-5">
                Our Treatments
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Picture Your Possible. Ageless Living™ brings together the best of what's possible: The guidance, tools and technologies to help you live better, longer.
              </p>
            </motion.div>
            <Link
              to="/services"
              className="group flex items-center gap-2 text-clinic-teal font-semibold uppercase tracking-widest text-xs md:text-sm border-b-2 border-clinic-teal/20 pb-1 hover:border-clinic-teal transition-all shrink-0"
            >
              View All Services
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {treatments.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <Link
                  to={t.href}
                  className="group block rounded-xl md:rounded-2xl overflow-hidden bg-white border border-border/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  {/* Card image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={t.img}
                      alt={`${t.title} at Ageless Living`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Card body */}
                  <div className="p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-clinic-teal-light flex items-center justify-center">
                        <t.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-clinic-teal" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-clinic-teal transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ ABOUT / PHILOSOPHY — image + text side-by-side ══════════════ */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-secondary/50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
            {/* Left: Two stacked images */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              <div className="rounded-xl md:rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={aboutImg}
                  alt="Ageless Living clinician consultation"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl md:rounded-2xl overflow-hidden aspect-[3/4] mt-6 md:mt-8">
                <img
                  src={aboutImg2}
                  alt="Ageless Living clinical treatment"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <span className="inline-block px-3 md:px-4 py-1.5 rounded-full bg-clinic-teal/10 text-clinic-teal text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] mb-4 md:mb-6 border border-clinic-teal/15">
                Our Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-5 md:mb-6 leading-[1.1]">
                Clinical Excellence & Collaborative Expertise
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                Our clinical sanctuary is powered by a multidisciplinary team of physicians, specialists, and clinical managers across Langley, Victoria, and Kelowna. Together, we bring a decade of experience to your longevity journey, ensuring every treatment plan meets the highest standards of safety and clinical efficacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/about-us"
                  className="group inline-flex items-center justify-center gap-3 bg-clinic-teal hover:bg-clinic-teal-container text-white px-6 md:px-7 py-3 md:py-3.5 rounded-full font-semibold text-xs md:text-sm uppercase tracking-widest transition-all"
                >
                  About Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/faqs"
                  className="inline-flex items-center justify-center px-6 md:px-7 py-3 md:py-3.5 rounded-full border-2 border-foreground/15 text-foreground text-xs md:text-sm font-semibold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
                >
                  FAQ
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ FEATURED CLINIC IMAGE ══════════════ */}
      <section className="py-16 md:py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="lg:col-span-7 rounded-xl md:rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={ourLocationsImg}
                alt="Ageless Living wellness clinic interior showcasing modern medical facilities"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="lg:col-span-5"
            >
              <p className="eyebrow mb-3 md:mb-4"><span className="hairline pb-2 text-xs md:text-sm">Inside the Clinic</span></p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-3 md:mb-4">
                A space designed for calm, clarity & precision.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 md:mb-6">
                Every detail of our clinics is designed to support your wellness journey — from the moment you walk in to the follow-up after your treatment.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-clinic-teal border-b-2 border-clinic-teal/20 pb-1 hover:border-clinic-teal transition-all"
              >
                Visit Us <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ GALLERY STRIP — fill with photos ══════════════ */}
      <section className="bg-background pb-6 md:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {[aboutImg2, botoxImg, ourLocationsImg, aboutImg].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="rounded-lg md:rounded-xl overflow-hidden aspect-square"
              >
                <img
                  src={img}
                  alt="Ageless Living clinic treatment and wellness"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ LOCATIONS ══════════════ */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-secondary/50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
          >
            <p className="eyebrow mb-3 md:mb-4"><span className="hairline pb-2 text-xs md:text-sm">Visit Us</span></p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-3 md:mb-4">
              Our Locations
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Serving British Columbia for over a decade. Ageless Living™ has three locations across BC.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <Link to={loc.href} className="group block">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-4">
                    <img
                      src={loc.img}
                      alt={`Ageless Living ${loc.name} clinic`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/5 to-transparent" />
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/90 text-foreground transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5 text-white">
                      <p className="text-[9px] md:text-[10px] uppercase tracking-[0.24em] text-white/70 flex items-center gap-1.5 mb-1">
                        <MapPin className="h-2.5 w-2.5 md:h-3 md:w-3" /> British Columbia
                      </p>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-tight">
                        {loc.name}
                      </h3>
                      <p className="text-[10px] md:text-xs text-white/70 mt-0.5">{loc.address}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CLOSING CTA — with logo watermark ══════════════ */}
      <section className="relative bg-clinic-teal text-white overflow-hidden">
        {/* Oversized logo watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center select-none"
        >
          <span className="logo-watermark text-white/[0.08] text-[28vw] md:text-[20vw]">
            ageless
          </span>
        </div>
        {/* Small logo badge */}
        <div className="pointer-events-none absolute top-8 md:top-10 left-1/2 -translate-x-1/2 opacity-25">
          <img src={logo} alt="" className="h-5 md:h-7 brightness-0 invert" aria-hidden />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-28 lg:py-36 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-5 md:mb-6">
              Ready to start your
              <br />
              wellness journey?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-lg mx-auto leading-relaxed px-4">
              Book a comprehensive consultation with our medical team at any of our three BC locations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4 sm:px-0">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-white text-clinic-teal font-semibold text-xs md:text-sm uppercase tracking-widest hover:bg-white/90 transition-all"
              >
                Book Online
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full border-2 border-white/30 text-white font-semibold text-xs md:text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
