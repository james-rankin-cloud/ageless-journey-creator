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

type Treatment = { name: string; desc: string; href?: string };

type Pillar = {
  id: string;
  n: string;
  label: string;
  title: string;
  accent: string;
  intro: string;
  image: string;
  treatments: Treatment[];
};

const pillars: Pillar[] = [
  {
    id: "skin-rejuvenation",
    n: "01",
    label: "Pillar One",
    title: "Skin Rejuvenation",
    accent: "Skin Rejuvenation",
    intro:
      "Advanced aesthetic treatments to restore your skin's youthful glow and cellular health — injectables, laser, micro-needling and medical peels delivered by licensed practitioners.",
    image: skinImg,
    treatments: [
      { name: "Botox / Dysport", desc: "Cosmetic injections to smooth fine lines and wrinkles.", href: "/services/botox-dysport" },
      { name: "Cosmetic Dermal Filler", desc: "Restore volume and contour with Restylane®, Revanesse®, PRP, and Sculptra®.", href: "/services/cosmetic-dermal-filler" },
      { name: "Customized UltraFacial", desc: "HydraFacial and AquaFirme treatments customized to your skin.", href: "/services/customized-ultrafacial" },
      { name: "Laser & IPL/BBL", desc: "Medical-grade laser to reduce sun damage, redness, and texture.", href: "/services/laser-ipl-bbl" },
      { name: "The Perfect Derma™ Peel", desc: "Powerful glutathione peel for acne, scarring, and melasma.", href: "/services/perfect-derma-peel" },
      { name: "Microneedling", desc: "Collagen induction therapy for dramatic skin texture improvement.", href: "/services/microneedling" },
      { name: "Belkyra™", desc: "Injectable treatment to reduce submental fat (double chin).", href: "/services/belkyra" },
      { name: "Dermaplaning", desc: "Manual exfoliation for smoother, brighter skin.", href: "/services/dermaplaning" },
    ],
  },
  {
    id: "hormone-balancing",
    n: "02",
    label: "Pillar Two",
    title: "Hormone Balancing",
    accent: "Hormone Balancing",
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
    title: "Biohacking & Longevity",
    accent: "Biohacking & Longevity",
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
    title: "Health & Weight",
    accent: "Health & Weight",
    intro:
      "Medically-supervised weight management combining nutrition science, metabolic testing and ongoing support for sustainable health outcomes.",
    image: weightImg,
    treatments: [
      { name: "GLP-1 Support (Semaglutide)", desc: "Physician-prescribed medication for sustainable loss.", href: "/services/health-weight" },
      { name: "Metabolic Testing", desc: "Comprehensive metabolic assessment.", href: "/services/health-weight" },
      { name: "InBody Composition Analysis", desc: "Advanced body composition scanning.", href: "/services/health-weight" },
    ],
  },
];

export default function ServicesPage() {
  const location = useLocation();
  const [active, setActive] = useState<string>(pillars[0].id);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location.hash]);

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

      {/* ══════════════ HERO — text + hero image ══════════════ */}
      <section className="relative bg-background pt-32 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-clinic-teal/[0.06] blur-3xl" />
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-clinic-teal-light text-clinic-teal text-xs font-semibold tracking-wide uppercase mb-6">
                Medical Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.08] mb-6 tracking-tight">
                Expertise in{" "}
                <span className="text-clinic-teal">Aesthetic</span> &{" "}
                <span className="text-clinic-teal">Functional</span>{" "}
                Medicine
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
                Science-backed treatments across four specialized pillars — designed by physicians, refined over a decade of clinical practice across British Columbia.
              </p>
              <Link
                to="/book"
                className="group inline-flex items-center gap-3 bg-clinic-teal hover:bg-clinic-teal-container text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest transition-all"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <img
                src={skinImg}
                alt="Premium aesthetic clinic interior at Ageless Living"
                className="w-full rounded-2xl object-cover object-center aspect-[4/3] shadow-xl"
                width={800}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ STICKY SIDE-NAV + PILLARS ══════════════ */}
      <section className="relative bg-background py-16 md:py-24">
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
                        className={`group relative -ml-px flex items-baseline gap-4 border-l-2 py-4 pl-6 transition-all ${
                          isActive
                            ? "border-clinic-teal"
                            : "border-transparent hover:border-foreground/30"
                        }`}
                      >
                        <span
                          className={`font-display text-sm font-medium transition-colors ${
                            isActive ? "text-clinic-teal" : "text-muted-foreground"
                          }`}
                        >
                          {p.n}
                        </span>
                        <span
                          className={`text-base font-medium tracking-tight transition-colors ${
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {p.title}
                        </span>
                      </a>
                    );
                  })}
                </nav>

                <Link
                  to="/book"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-clinic-teal text-white pl-6 pr-3 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all hover:bg-clinic-teal-container"
                >
                  Book Consultation
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>
            </aside>

            {/* Mobile chip nav */}
            <div className="lg:hidden col-span-12 -mx-6 overflow-x-auto scrollbar-none mb-8">
              <div className="flex gap-3 px-6 min-w-max">
                {pillars.map((p) => (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all ${
                      active === p.id
                        ? "border-clinic-teal bg-clinic-teal text-white"
                        : "border-foreground/15 text-foreground hover:border-foreground/30"
                    }`}
                  >
                    {p.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Pillar sections */}
            <div className="col-span-12 lg:col-span-9 space-y-24 md:space-y-32">
              {pillars.map((p, idx) => (
                <article
                  id={p.id}
                  key={p.id}
                  className="scroll-mt-28"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease }}
                  >
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-display text-xl text-clinic-teal font-semibold">
                        {p.n}
                      </span>
                      <p className="eyebrow">{p.label}</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-8">
                      {p.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start mb-10">
                      <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden rounded-2xl">
                        <img
                          src={p.image}
                          alt={`${p.title} at Ageless Living`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-5 md:pt-4">
                        <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
                          {p.intro}
                        </p>
                        <Link
                          to={p.treatments[0]?.href ?? "/book"}
                          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-clinic-teal border-b-2 border-clinic-teal/20 pb-1 hover:border-clinic-teal transition-all"
                        >
                          Learn More <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Treatment rows */}
                    <div className="border-t border-foreground/10">
                      {p.treatments.map((t, i) => {
                        const Row = (
                          <div
                            key={`${t.name}-inner`}
                            className="group grid grid-cols-12 gap-4 items-center py-5 border-b border-foreground/10 transition-colors hover:bg-clinic-teal-light/50"
                          >
                            <span className="col-span-2 md:col-span-1 text-sm text-muted-foreground font-medium">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="col-span-10 md:col-span-4 text-lg md:text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-clinic-teal">
                              {t.name}
                            </h3>
                            <p className="col-span-12 md:col-span-6 text-sm text-muted-foreground">
                              {t.desc}
                            </p>
                            <div className="col-span-12 md:col-span-1 flex md:justify-end">
                              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-clinic-teal" />
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
                    <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA BANNER ══════════════ */}
      <section className="py-20 md:py-28 bg-clinic-teal">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4 tracking-tight">
              Ready to start your
              <br className="hidden md:block" />
              aesthetic journey?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              Book a comprehensive consultation with our medical team at any of our three locations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-clinic-teal font-semibold text-sm uppercase tracking-widest hover:bg-white/90 transition-all"
              >
                Book Online
              </Link>
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                View Our Locations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
