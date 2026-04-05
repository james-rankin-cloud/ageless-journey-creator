import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import skinImg from "@/assets/services-1.jpg";
import hormoneImg from "@/assets/services-2.jpg";
import biohackingImg from "@/assets/services-3.jpg";
import weightImg from "@/assets/services-4.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Pillar data (unified shape) ─── */
type Treatment = { name: string; desc: string; href?: string };

type Pillar = {
  id: string;
  n: string;
  label: string;
  title: string;
  italic: string;
  intro: string;
  image: string;
  treatments: Treatment[];
};

const pillars: Pillar[] = [
  {
    id: "skin-rejuvenation",
    n: "01",
    label: "Pillar One",
    title: "Skin",
    italic: "Rejuvenation",
    intro:
      "Advanced aesthetic treatments to restore your skin's youthful glow and cellular health — injectables, laser, micro-needling and medical peels delivered by licensed practitioners.",
    image: skinImg,
    treatments: [
      { name: "Botox / Dysport", desc: "Smooth fine lines and wrinkles.", href: "/services/botox-dysport" },
      { name: "Cosmetic Dermal Filler", desc: "Restylane®, Revanesse®, PRP, Sculptra®.", href: "/services/cosmetic-dermal-filler" },
      { name: "Customized UltraFacial", desc: "HydraFacial + AquaFirme, tailored.", href: "/services/customized-ultrafacial" },
      { name: "Laser & IPL/BBL", desc: "Reduce sun damage, redness, texture.", href: "/services/laser-ipl-bbl" },
      { name: "The Perfect Derma™ Peel", desc: "Glutathione peel for acne & melasma.", href: "/services/perfect-derma-peel" },
      { name: "Microneedling", desc: "Collagen induction therapy.", href: "/services/microneedling" },
      { name: "Belkyra™", desc: "Target submental fat (double chin).", href: "/services/belkyra" },
      { name: "Dermaplaning", desc: "Manual exfoliation for glow.", href: "/services/dermaplaning" },
    ],
  },
  {
    id: "hormone-balancing",
    n: "02",
    label: "Pillar Two",
    title: "Hormone",
    italic: "Balancing",
    intro:
      "Comprehensive hormone testing and bio-identical hormone restoration to reclaim your energy, mood and vitality — personalised protocols for men and women, led by board-certified physicians.",
    image: hormoneImg,
    treatments: [
      { name: "BHRT Protocols", desc: "Personalised bio-identical hormones.", href: "/services/hormone-balancing" },
      { name: "Lab-Led Diagnostics", desc: "Full hormone panel & follow-up.", href: "/services/hormone-balancing" },
      { name: "Menopause Support", desc: "Evidence-based symptom management.", href: "/services/hormone-balancing" },
      { name: "Men's Health", desc: "Testosterone optimisation.", href: "/services/hormone-balancing" },
    ],
  },
  {
    id: "biohacking",
    n: "03",
    label: "Pillar Three",
    title: "Biohacking &",
    italic: "Longevity",
    intro:
      "Advanced cellular optimisation for peak performance and longevity — access cutting-edge technologies including Red Light, HBOT, IV Therapy, PEMF, Neurointegrator and Far Infrared Sauna.",
    image: biohackingImg,
    treatments: [
      { name: "Red Light Therapy", desc: "Cellular energy & skin support.", href: "/services/biohacking" },
      { name: "HBOT", desc: "Hyperbaric oxygen therapy.", href: "/services/biohacking" },
      { name: "IV Therapy", desc: "Vitamin, mineral & NAD+ infusions.", href: "/services/biohacking" },
      { name: "PEMF & Neurointegrator", desc: "Nervous-system optimisation.", href: "/services/biohacking" },
    ],
  },
  {
    id: "health-weight",
    n: "04",
    label: "Pillar Four",
    title: "Health &",
    italic: "Weight",
    intro:
      "Medically-supervised weight management combining nutrition science, metabolic testing and ongoing support for sustainable health outcomes.",
    image: weightImg,
    treatments: [
      { name: "GLP-1 Support (Semaglutide)", desc: "Physician-prescribed medication.", href: "/services/health-weight" },
      { name: "Metabolic Testing", desc: "Full metabolic assessment.", href: "/services/health-weight" },
      { name: "InBody Composition", desc: "Advanced body composition scan.", href: "/services/health-weight" },
    ],
  },
];

export default function ServicesPage() {
  const location = useLocation();
  const [active, setActive] = useState<string>(pillars[0].id);

  // Smooth-scroll to hash on mount / change
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location.hash]);

  // IntersectionObserver to highlight active nav link
  useEffect(() => {
    const sections = pillars
      .map((p) => document.getElementById(p.id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Treatments | Ageless Living™ — Aesthetic & Functional Medicine</title>
        <meta
          name="description"
          content="Science-backed treatments across four specialized pillars: Skin Rejuvenation, Hormone Balancing, Biohacking, and Health Weight."
        />
      </Helmet>

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative bg-background pt-36 md:pt-44 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-clinic-teal/[0.07] blur-3xl" />
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="col-span-12 md:col-span-8"
            >
              <p className="eyebrow mb-8"><span className="hairline pb-2">Our Treatments · Four Pillars</span></p>
              <h1 className="font-display text-[13vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.92] tracking-[-0.035em] font-light text-foreground">
                Aesthetic &{" "}
                <em className="italic text-clinic-teal">functional</em>
                <br />
                medicine, under
                <br />
                one roof.
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="col-span-12 md:col-span-4 text-base md:text-lg leading-relaxed text-muted-foreground font-light"
            >
              Science-backed treatments across four specialised pillars —
              designed by physicians, refined over a decade of clinical
              practice across British Columbia.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════ STICKY SIDE-NAV + PILLARS ══════════════ */}
      <section className="relative bg-background pb-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            {/* Sticky side navigation */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32">
                <p className="eyebrow mb-8">Explore Pillars</p>
                <nav className="flex flex-col border-l border-foreground/10">
                  {pillars.map((p) => {
                    const isActive = active === p.id;
                    return (
                      <a
                        key={p.id}
                        href={`#${p.id}`}
                        className={`group relative -ml-px flex items-baseline gap-4 border-l-2 py-5 pl-6 transition-all ${
                          isActive
                            ? "border-clinic-teal"
                            : "border-transparent hover:border-foreground/30"
                        }`}
                      >
                        <span
                          className={`font-display italic text-sm transition-colors ${
                            isActive ? "text-clinic-teal" : "text-muted-foreground"
                          }`}
                        >
                          {p.n}
                        </span>
                        <span
                          className={`font-display text-xl tracking-[-0.01em] transition-colors ${
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {p.title} {p.italic}
                        </span>
                      </a>
                    );
                  })}
                </nav>

                <Link
                  to="/book"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-3 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all hover:bg-clinic-teal"
                >
                  Book Consultation
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>
            </aside>

            {/* Mobile horizontal chip nav */}
            <div className="lg:hidden col-span-12 -mx-6 overflow-x-auto scrollbar-none mb-10">
              <div className="flex gap-3 px-6 min-w-max">
                {pillars.map((p) => (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                      active === p.id
                        ? "border-clinic-teal bg-clinic-teal text-white"
                        : "border-foreground/15 text-foreground"
                    }`}
                  >
                    {p.n} · {p.title} {p.italic}
                  </a>
                ))}
              </div>
            </div>

            {/* Pillar sections */}
            <div className="col-span-12 lg:col-span-9 space-y-32 md:space-y-40">
              {pillars.map((p, idx) => (
                <article
                  id={p.id}
                  key={p.id}
                  className="scroll-mt-32"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease }}
                  >
                    <div className="flex items-baseline gap-6 mb-8">
                      <span className="font-display italic text-2xl text-clinic-teal font-light">
                        {p.n}
                      </span>
                      <p className="eyebrow">{p.label}</p>
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.025em] font-light text-foreground mb-10">
                      {p.title}{" "}
                      <em className="italic text-clinic-teal">{p.italic}</em>
                    </h2>

                    <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start mb-12">
                      <div className="col-span-12 md:col-span-7 relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                        <img
                          src={p.image}
                          alt={`${p.title} ${p.italic} at Ageless Living`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="col-span-12 md:col-span-5 md:pt-6">
                        <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light mb-8">
                          {p.intro}
                        </p>
                        <Link
                          to={p.treatments[0]?.href ?? "/book"}
                          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-foreground border-b border-foreground/30 pb-1 hover:border-clinic-teal hover:text-clinic-teal transition-colors"
                        >
                          Learn More <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Treatment list — editorial rows */}
                    <div className="border-t border-foreground/10">
                      {p.treatments.map((t, i) => {
                        const Row = (
                          <div
                            key={`${t.name}-inner`}
                            className="group grid grid-cols-12 gap-4 items-center py-6 border-b border-foreground/10 transition-colors hover:bg-secondary/60"
                          >
                            <span className="col-span-2 md:col-span-1 font-display italic text-muted-foreground">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="col-span-10 md:col-span-4 font-display text-xl md:text-2xl font-light tracking-[-0.01em] text-foreground transition-colors group-hover:text-clinic-teal">
                              {t.name}
                            </h3>
                            <p className="col-span-12 md:col-span-6 text-sm text-muted-foreground font-light">
                              {t.desc}
                            </p>
                            <div className="col-span-12 md:col-span-1 flex md:justify-end">
                              <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-clinic-teal" />
                            </div>
                          </div>
                        );
                        return t.href ? (
                          <Link to={t.href} key={t.name} className="block">
                            {Row}
                          </Link>
                        ) : (
                          <div key={t.name}>{Row}</div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {idx < pillars.length - 1 && (
                    <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CLOSING CTA ══════════════ */}
      <section className="relative bg-secondary/40 py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <p className="eyebrow mb-6"><span className="hairline pb-2">Begin</span></p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.025em] font-light text-foreground">
                Ready to start your{" "}
                <em className="italic text-clinic-teal">aesthetic</em> journey?
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light mb-8">
                Book a comprehensive consultation with our medical team at any
                of our three BC locations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/book"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-7 pr-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all hover:bg-clinic-teal"
                >
                  Book Online
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-all hover:border-foreground"
                >
                  Our Locations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
