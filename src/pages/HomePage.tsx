import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";

import heroPortrait from "@/assets/home-1.jpg";
import heroSecondary from "@/assets/home-2.jpg";
import heroTertiary from "@/assets/home-3.jpg";
import skinImg from "@/assets/services-1.jpg";
import hormoneImg from "@/assets/services-2.jpg";
import biohackingImg from "@/assets/services-3.jpg";
import weightImg from "@/assets/services-4.jpg";
import ourLocationsImg from "@/assets/our-locations-home.jpg";
import victoriaImg from "@/assets/victoria.png";
import langleyImg from "@/assets/langley.jpg";
import kelownaImg from "@/assets/kelowna.jpg";
import aboutImg from "@/assets/about-us-1.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    n: "01",
    title: "Skin Rejuvenation",
    blurb:
      "Advanced aesthetic therapies — from injectables to laser — tuned to your skin's biology.",
    href: "/services#skin-rejuvenation",
    img: skinImg,
  },
  {
    n: "02",
    title: "Hormone Balancing",
    blurb:
      "Bio-identical hormone restoration and lab-led protocols that reclaim your vitality.",
    href: "/services#hormone-balancing",
    img: hormoneImg,
  },
  {
    n: "03",
    title: "Biohacking & Longevity",
    blurb:
      "Red light, HBOT, IV therapy, PEMF — cellular optimisation for peak performance.",
    href: "/services#biohacking",
    img: biohackingImg,
  },
  {
    n: "04",
    title: "Health & Weight",
    blurb:
      "Physician-led GLP-1, metabolic testing and InBody composition for sustainable results.",
    href: "/services#health-weight",
    img: weightImg,
  },
];

const locations = [
  {
    name: "Victoria",
    address: "740 Hillside Ave #120",
    href: "/locations/victoria",
    img: victoriaImg,
  },
  {
    name: "Langley",
    address: "415-20178 96th Ave",
    href: "/locations/langley",
    img: langleyImg,
  },
  {
    name: "Kelowna",
    address: "1708 Dolphin Ave #101",
    href: "/locations/kelowna",
    img: kelownaImg,
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Ageless Living™ Wellness Centre",
    description:
      "Modern treatments, expert guidance, and a commitment to helping you live better — at any age. Serving Langley, Victoria, and Kelowna, BC.",
    url: "https://agelessliving.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "287",
      bestRating: "5",
    },
  };

  return (
    <>
      <Helmet>
        <title>Ageless Living™ Wellness Centre | Modern Treatments in BC</title>
        <meta
          name="description"
          content="Discover your best self at any age. Skin rejuvenation, hormone balancing, biohacking & more across Langley, Victoria & Kelowna."
        />
        <link rel="canonical" href="https://agelessliving.com" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ══════════════ HERO — editorial asymmetric grid ══════════════ */}
      <section className="relative overflow-hidden bg-background pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-clinic-teal/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            {/* LEFT — headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="col-span-12 lg:col-span-7 xl:col-span-8"
            >
              <p className="eyebrow mb-8">
                <span className="hairline pb-2">Ageless Living™ · Est. 2014</span>
              </p>
              <h1 className="font-display text-[13vw] sm:text-[9vw] lg:text-[7.5vw] xl:text-[6.8vw] leading-[0.92] tracking-[-0.035em] font-light text-foreground">
                Live better,
                <br />
                <em className="italic font-light text-clinic-teal [font-feature-settings:'ss01']">
                  longer
                </em>
                <span className="text-muted-foreground/60"> —</span>
                <br />
                at any age.
              </h1>
            </motion.div>

            {/* RIGHT — portrait stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="col-span-12 lg:col-span-5 xl:col-span-4 relative"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-border/40 shadow-xl">
                <img
                  src={heroPortrait}
                  alt="Ageless Living patient enjoying a premium wellness treatment"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block w-36 aspect-square overflow-hidden rounded-2xl border border-background shadow-xl">
                <img
                  src={heroSecondary}
                  alt="Ageless Living clinical treatment room"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Sub row — intro + CTAs + stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-16 md:mt-24 grid grid-cols-12 gap-6 lg:gap-10 items-start"
          >
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light max-w-md">
                A collaborative sanctuary of physicians, longevity specialists
                and licensed practitioners — guiding you through modern
                medicine's most effective tools.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/book"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-7 pr-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all hover:bg-clinic-teal"
                >
                  Book a Consultation
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  Explore Treatments
                </Link>
              </div>
            </div>

            {/* Empty column for breathing space (asymmetry) */}
            <div className="hidden lg:block lg:col-span-2" />

            {/* Stats */}
            <div className="col-span-12 md:col-span-7 lg:col-span-6 grid grid-cols-3 gap-6 md:gap-10 md:border-l md:border-border/40 md:pl-10">
              {[
                { k: "10+", v: "Years in BC" },
                { k: "3", v: "Clinic locations" },
                { k: "4.9★", v: "287 reviews" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-4xl md:text-5xl font-light text-foreground tracking-[-0.02em]">
                    {s.k}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ PILLARS — editorial list ══════════════ */}
      <section className="relative bg-secondary/40 py-24 md:py-36">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24 items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow mb-6">
                <span className="hairline pb-2">Our Four Pillars</span>
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.025em] font-light text-foreground">
                Medicine,{" "}
                <em className="italic text-clinic-teal">re-imagined</em> —
                across four disciplines.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
                Every pillar is led by board-certified physicians and
                integrated under one roof, so your care never feels fragmented.
              </p>
            </div>
          </div>

          {/* Editorial rows */}
          <div className="border-t border-foreground/10">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease }}
              >
                <Link
                  to={p.href}
                  className="group grid grid-cols-12 gap-6 py-10 md:py-14 border-b border-foreground/10 items-center transition-colors hover:bg-background/60"
                >
                  <p className="col-span-2 md:col-span-1 font-display italic text-2xl md:text-3xl text-clinic-teal font-light">
                    {p.n}
                  </p>
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="font-display text-3xl md:text-5xl tracking-[-0.02em] font-light text-foreground transition-colors group-hover:text-clinic-teal">
                      {p.title}
                    </h3>
                  </div>
                  <p className="col-span-12 md:col-span-4 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                    {p.blurb}
                  </p>
                  <div className="col-span-12 md:col-span-2 flex md:justify-end">
                    <div className="relative h-20 w-28 md:h-24 md:w-32 overflow-hidden rounded-xl">
                      <img
                        src={p.img}
                        alt={`${p.title} at Ageless Living`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/30">
                        <ArrowUpRight className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PHILOSOPHY — large quote + portrait ══════════════ */}
      <section className="relative bg-background py-24 md:py-36 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="col-span-12 md:col-span-5"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
                <img
                  src={aboutImg}
                  alt="Ageless Living clinician discussing a personalised wellness plan"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="col-span-12 md:col-span-7"
            >
              <p className="eyebrow mb-6"><span className="hairline pb-2">Our Philosophy</span></p>
              <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-[-0.02em] font-light text-foreground">
                "Ageing is not a diagnosis — it's a{" "}
                <em className="italic text-clinic-teal">relationship</em> with
                your own biology. Our role is to help you listen, and respond
                with precision."
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-foreground/30" />
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Ageless Living™ Medical Team
                </p>
              </div>
              <Link
                to="/about-us"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-foreground border-b border-foreground/30 pb-1 hover:border-clinic-teal hover:text-clinic-teal transition-colors"
              >
                More About Us <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ LOCATIONS — image cards ══════════════ */}
      <section className="relative bg-secondary/40 py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 mb-16 items-end">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow mb-6"><span className="hairline pb-2">Visit Us</span></p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.025em] font-light text-foreground">
                Three <em className="italic text-clinic-teal">sanctuaries</em>.
                <br />
                One standard of care.
              </h2>
            </div>
            <p className="col-span-12 md:col-span-4 md:col-start-9 text-base md:text-lg leading-relaxed text-muted-foreground font-light">
              From Vancouver Island to the Okanagan — step into a space
              designed around calm, clarity and clinical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <Link to={loc.href} className="group block">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem]">
                    <img
                      src={loc.img}
                      alt={`Ageless Living ${loc.name} clinic exterior`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
                    <div className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-foreground transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-2 flex items-center gap-2">
                        <MapPin className="h-3 w-3" /> British Columbia
                      </p>
                      <h3 className="font-display text-3xl md:text-4xl font-light text-white tracking-[-0.02em]">
                        {loc.name}
                      </h3>
                      <p className="text-xs mt-1 text-white/70">{loc.address}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CLOSING CTA ══════════════ */}
      <section className="relative bg-background py-24 md:py-36">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-7">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.025em] font-light text-foreground">
                Begin your{" "}
                <em className="italic text-clinic-teal">ageless</em> chapter.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light mb-8">
                A single consultation is all it takes. We'll listen, test, and
                design a protocol that's unmistakably yours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/book"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-7 pr-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all hover:bg-clinic-teal"
                >
                  Book Now
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-all hover:border-foreground"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
