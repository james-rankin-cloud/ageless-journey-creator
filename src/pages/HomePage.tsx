import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, MapPin, Play } from "lucide-react";

import skinImg from "@/assets/services-1.jpg";
import hormoneImg from "@/assets/services-2.jpg";
import biohackingImg from "@/assets/services-3.jpg";
import weightImg from "@/assets/services-4.jpg";
import victoriaImg from "@/assets/victoria.png";
import langleyImg from "@/assets/langley.jpg";
import kelownaImg from "@/assets/kelowna.jpg";
import logo from "@/assets/footer-logo.png";

const ease = [0.16, 1, 0.3, 1] as const;

const VIDEO_WEBM = "/human_graphic.webm";
const VIDEO_MP4 = "/human_graphic.mp4";

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

/** Reusable framed, muted looping video player */
function LoopVideo({
  caption,
  eyebrow,
  className = "",
  aspect = "aspect-[16/10]",
}: {
  caption?: string;
  eyebrow?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-[1.25rem] border border-border/40 bg-ageless-blue-deep ${aspect} ${className}`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      >
        <source src={VIDEO_WEBM} type="video/webm" />
        <source src={VIDEO_MP4} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ageless-blue-deep/70 via-ageless-blue-deep/10 to-transparent" />
      {(caption || eyebrow) && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
          <div className="text-white">
            {eyebrow && (
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                {eyebrow}
              </p>
            )}
            {caption && (
              <p className="mt-2 font-display text-lg md:text-xl font-light tracking-tight">
                {caption}
              </p>
            )}
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md">
            <Play className="h-4 w-4" fill="currentColor" />
          </span>
        </div>
      )}
    </div>
  );
}

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

      {/* ══════════════ HERO — full-width video + editorial overlay ══════════════ */}
      <section className="relative bg-background pt-28 md:pt-36">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Top headline row */}
          <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="col-span-12"
            >
              <p className="eyebrow mb-8">
                <span className="hairline pb-2">Ageless Living™ · Est. 2014</span>
              </p>
              <h1 className="font-display text-[14vw] sm:text-[9vw] lg:text-[7.4vw] leading-[0.95] tracking-[-0.035em] font-extralight text-foreground uppercase">
                Live better,
                <br />
                <span className="text-ageless-blue font-light">longer.</span>
              </h1>
            </motion.div>
          </div>

          {/* Full-width framed hero video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="relative"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[1.5rem] border border-border/40 bg-ageless-blue-deep shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={VIDEO_WEBM} type="video/webm" />
                <source src={VIDEO_MP4} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ageless-blue-deep/60 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 p-6 md:p-10">
                <p className="max-w-md text-sm md:text-base text-white/90 font-light leading-relaxed">
                  A collaborative sanctuary of physicians, longevity specialists
                  and licensed practitioners — guiding you through modern
                  medicine's most effective tools.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/book"
                    className="group inline-flex items-center gap-3 rounded-full bg-white text-ageless-blue-deep pl-7 pr-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all hover:bg-ageless-blue hover:text-white"
                  >
                    Book a Consultation
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ageless-blue-deep text-white transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10"
                  >
                    Explore Treatments
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10 items-start border-y border-border/50 py-14"
          >
            {[
              { k: "10+", v: "Years in BC" },
              { k: "3", v: "Clinic locations" },
              { k: "4.9★", v: "287 reviews" },
              { k: "4", v: "Clinical pillars" },
            ].map((s, i) => (
              <div
                key={s.v}
                className={`col-span-6 md:col-span-3 ${
                  i > 0 ? "md:border-l md:border-border/40 md:pl-10" : ""
                }`}
              >
                <p className="font-display text-5xl md:text-6xl font-extralight text-foreground tracking-[-0.02em]">
                  {s.k}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.v}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ PILLARS — editorial list ══════════════ */}
      <section className="relative bg-background py-32 md:py-48">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 mb-20 md:mb-28 items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow mb-6">
                <span className="hairline pb-2">Our Four Pillars</span>
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.025em] font-extralight text-foreground uppercase">
                Medicine,
                <br />
                <span className="text-ageless-blue font-light">re-imagined</span> —
                <br />
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
                  className="group grid grid-cols-12 gap-6 py-10 md:py-16 border-b border-foreground/10 items-center transition-colors hover:bg-ageless-blue-soft/50"
                >
                  <p className="col-span-2 md:col-span-1 font-display text-2xl md:text-3xl text-ageless-blue font-light tabular-nums">
                    {p.n}
                  </p>
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="font-display text-3xl md:text-5xl tracking-[-0.02em] font-light uppercase text-foreground transition-colors group-hover:text-ageless-blue">
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
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-ageless-blue/40">
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

      {/* ══════════════ PHILOSOPHY — video 2 ══════════════ */}
      <section className="relative bg-ageless-blue-soft py-32 md:py-48 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="col-span-12 md:col-span-6"
            >
              <LoopVideo
                eyebrow="Inside the clinic"
                caption="Precision, calm & clinical rigor"
                aspect="aspect-[4/5]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="col-span-12 md:col-span-6"
            >
              <p className="eyebrow mb-6">
                <span className="hairline pb-2">Our Philosophy</span>
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] font-light text-foreground uppercase">
                Ageing is not a diagnosis.
                <br />
                It is a{" "}
                <span className="text-ageless-blue">relationship</span>
                <br />
                with your own biology.
              </h2>
              <p className="mt-10 max-w-lg text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                Our role is to help you listen, and respond with precision —
                through diagnostics, clinical expertise and technology that
                meets you where you are today.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-ageless-blue" />
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  Ageless Living™ Medical Team
                </p>
              </div>
              <Link
                to="/about-us"
                className="mt-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground border-b border-foreground/30 pb-1 hover:border-ageless-blue hover:text-ageless-blue transition-colors"
              >
                More About Us <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS — video 3 ══════════════ */}
      <section className="relative bg-background py-32 md:py-48">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 mb-20 items-end">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow mb-6">
                <span className="hairline pb-2">Patient Stories</span>
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.025em] font-extralight text-foreground uppercase">
                Real results.
                <br />
                <span className="text-ageless-blue font-light">Real people.</span>
              </h2>
            </div>
            <p className="col-span-12 md:col-span-4 md:col-start-9 text-base md:text-lg leading-relaxed text-muted-foreground font-light">
              Over a decade of patients across British Columbia who've
              redefined how they age — quietly, confidently, on their terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { q: "The most thoughtful care I've experienced in a decade.", who: "Eleanor · Victoria" },
              { q: "Ten years younger in how I feel, not just how I look.", who: "Marcus · Langley" },
              { q: "They treat the whole person, not the symptom.", who: "Priya · Kelowna" },
            ].map((t, i) => (
              <motion.figure
                key={t.who}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="flex flex-col gap-6"
              >
                <LoopVideo aspect="aspect-[4/5]" />
                <blockquote className="font-display text-xl md:text-2xl leading-snug tracking-[-0.01em] font-light text-foreground">
                  "{t.q}"
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.who}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ LOCATIONS ══════════════ */}
      <section className="relative bg-ageless-blue-soft py-32 md:py-48">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 mb-20 items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow mb-6">
                <span className="hairline pb-2">Visit Us</span>
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.025em] font-extralight text-foreground uppercase">
                Three{" "}
                <span className="text-ageless-blue font-light">sanctuaries</span>.
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
                    <div className="absolute inset-0 bg-gradient-to-t from-ageless-blue-deep/85 via-ageless-blue-deep/10 to-transparent" />
                    <div className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-ageless-blue-deep transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-white/70 mb-2 flex items-center gap-2">
                        <MapPin className="h-3 w-3" /> British Columbia
                      </p>
                      <h3 className="font-display text-3xl md:text-4xl font-light uppercase text-white tracking-[-0.02em]">
                        {loc.name}
                      </h3>
                      <p className="text-xs mt-1 text-white/75">{loc.address}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CLOSING CTA — logo watermark + video 4 ══════════════ */}
      <section className="relative bg-ageless-blue-deep text-white overflow-hidden">
        {/* Oversized outlined wordmark watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center select-none"
        >
          <span className="logo-watermark text-white/[0.07] text-[28vw] md:text-[22vw] leading-none">
            ageless
          </span>
        </div>

        {/* Faint centered logo mark as decorative badge */}
        <div className="pointer-events-none absolute top-14 left-1/2 -translate-x-1/2 opacity-20">
          <img
            src={logo}
            alt=""
            className="h-8 brightness-0 invert"
            aria-hidden
          />
        </div>

        <div className="relative container mx-auto px-6 lg:px-16 py-40 md:py-56">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow mb-6 text-white/60">
                <span className="hairline pb-2">Begin</span>
              </p>
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-[-0.03em] font-extralight uppercase">
                Begin your
                <br />
                <span className="text-white/70 font-light">ageless</span> chapter.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="text-base md:text-lg leading-relaxed text-white/70 font-light mb-10">
                A single consultation is all it takes. We'll listen, test, and
                design a protocol that's unmistakably yours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/book"
                  className="group inline-flex items-center gap-3 rounded-full bg-white text-ageless-blue-deep pl-7 pr-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all hover:bg-ageless-blue hover:text-white"
                >
                  Book Now
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ageless-blue-deep text-white transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10"
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
