import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Droplets, Sun, Zap, Scissors, Grid3X3, Syringe, Heart, Activity, Pill, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import servicesHeroImg from "@/assets/services-hero.jpg";
import hormoneImg from "@/assets/hormone-clinic.jpg";
import biohackingImg from "@/assets/biohacking-hub.jpg";
import weightImg from "@/assets/weight-clinic.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Pillar 1: Skin Rejuvenation treatments ─── */
const skinTreatments = [
  { icon: Sparkles, name: "Botox / Dysport", desc: "Cosmetic injections to smooth fine lines and wrinkles.", locations: ["Victoria", "Langley", "Kelowna"] },
  { icon: Droplets, name: "Cosmetic Dermal Filler", desc: "Restore volume and contour with Restylane®, Revanesse®, PRP, and Sculptra®.", locations: ["Victoria", "Langley", "Kelowna"] },
  { icon: Sun, name: "Customized UltraFacial", desc: "HydraFacial and AquaFirme treatments customized to your skin.", locations: ["Victoria", "Langley", "Kelowna"] },
  { icon: Zap, name: "Laser & IPL/BBL", desc: "Medical-grade laser to reduce sun damage, redness, and texture.", locations: ["Victoria", "Langley", "Kelowna"] },
  { icon: Heart, name: "The Perfect Derma™ Peel", desc: "Powerful glutathione peel for acne, scarring, and melasma.", locations: ["Victoria", "Langley", "Kelowna"] },
  { icon: Grid3X3, name: "Microneedling", desc: "Collagen induction therapy for dramatic skin texture improvement.", locations: ["Victoria", "Langley", "Kelowna"] },
  { icon: Syringe, name: "Belkyra™", desc: "Injectable treatment to reduce submental fat (double chin).", locations: ["Victoria", "Langley", "Kelowna"] },
  { icon: Scissors, name: "Dermaplaning", desc: "Manual exfoliation for smoother, brighter skin.", locations: ["Victoria", "Langley", "Kelowna"] },
];


/* ─── Pillar 4: Health Weight ─── */
const weightTreatments = [
  { icon: Pill, name: "GLP-1 Support (Semaglutide)", desc: "Physician-prescribed medication for sustainable loss." },
  { icon: Activity, name: "Metabolic Testing", desc: "Comprehensive metabolic assessment." },
  { icon: Scale, name: "InBody Composition Analysis", desc: "Advanced body composition scanning." },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle hash scrolling on navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Treatments | Ageless Living™ — Aesthetic & Functional Medicine</title>
        <meta name="description" content="Science-backed treatments across four specialized pillars: Skin Rejuvenation, Hormone Balancing, Biohacking, and Health Weight." />
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-clinic-teal-light text-clinic-teal text-xs font-semibold tracking-wide uppercase mb-6">
                Medical Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.08] mb-6">
                Expertise in{" "}
                <em className="italic text-clinic-teal font-light">Aesthetic</em> &{" "}
                <em className="italic text-clinic-teal font-light">Functional</em>{" "}
                Medicine
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
                Science-backed treatments across four specialized pillars: Skin Rejuvenation, Hormone Balancing, Biohacking, and Health Weight.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="#skin-rejuvenation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-clinic-teal to-cyan-500 text-white font-medium text-sm transition-all hover:from-clinic-teal/90 hover:to-cyan-500/90 shadow-lg shadow-cyan-500/20"
                >
                  Explore Treatments
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium text-sm transition-all hover:bg-secondary"
                >
                  Our Clinical Approach
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="relative"
            >
              <img
                src={servicesHeroImg}
                alt="Premium aesthetic clinic interior"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                width={800}
                height={600}
              />
              <div className="absolute -bottom-6 left-6 right-6 bg-card rounded-xl p-4 border border-border/50 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-clinic-teal-light flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-clinic-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Patient Focused</p>
                    <p className="text-xs text-muted-foreground">Personalized care plans designed by licensed practitioners to optimize your unique biology.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PILLAR 1 — SKIN REJUVENATION ═══ */}
      <section id="skin-rejuvenation" className="scroll-mt-24 py-20 md:py-28 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground">Skin Rejuvenation</h2>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Pillar One / 04</span>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Advanced aesthetic treatments to restore your skin's youthful glow and cellular health.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skinTreatments.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease }}
                  className={`group bg-card rounded-xl p-5 border border-border/40 hover:border-clinic-teal/30 hover:shadow-md transition-all duration-300 ${t.name === "Botox / Dysport" || t.name === "Cosmetic Dermal Filler" || t.name === "Customized UltraFacial" || t.name === "Laser & IPL/BBL" || t.name === "The Perfect Derma™ Peel" || t.name === "Microneedling" || t.name === "Belkyra™" || t.name === "Dermaplaning" ? "cursor-pointer" : ""}`}
                  onClick={() => {
                    if (t.name === "Botox / Dysport") navigate("/services/botox-dysport");
                    if (t.name === "Cosmetic Dermal Filler") navigate("/services/cosmetic-dermal-filler");
                    if (t.name === "Customized UltraFacial") navigate("/services/customized-ultrafacial");
                    if (t.name === "Laser & IPL/BBL") navigate("/services/laser-ipl-bbl");
                    if (t.name === "The Perfect Derma™ Peel") navigate("/services/perfect-derma-peel");
                    if (t.name === "Microneedling") navigate("/services/microneedling");
                    if (t.name === "Belkyra™") navigate("/services/belkyra");
                    if (t.name === "Dermaplaning") navigate("/services/dermaplaning");
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-clinic-teal-light flex items-center justify-center">
                      <Icon className="w-4 h-4 text-clinic-teal" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1.5">{t.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{t.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.locations.map((loc) => (
                      <span key={loc} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground uppercase tracking-wider">
                        {loc}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PILLAR 2 — HORMONE BALANCING ═══ */}
      <section id="hormone-balancing" className="scroll-mt-24 py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto section-padding">
          <motion.p
            className="label-sm mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pillar Two
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-medium text-foreground mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            Hormone Balancing
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left — Image + CTA */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div
                className="relative group cursor-pointer"
                onClick={() => navigate("/services/hormone-balancing")}
              >
                <img
                  src={hormoneImg}
                  alt="Hormone balancing clinic"
                  className="w-full rounded-2xl object-cover aspect-[3/4] max-h-[480px] transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  width={512}
                  height={700}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 rounded-2xl transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm text-foreground font-semibold px-6 py-3 rounded-full shadow-lg">
                    View Details <ArrowUpRight className="w-4 h-4 inline ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right — Description */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                Comprehensive hormone testing and bio-identical hormone restoration to reclaim your energy, mood, and vitality. Our board-certified physicians specialize in personalized protocols for both men and women.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Victoria", "Langley", "Kelowna"].map((loc) => (
                  <span key={loc} className="text-[10px] font-semibold px-3 py-1 rounded-full bg-card border border-border text-muted-foreground uppercase tracking-widest">
                    {loc}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services/hormone-balancing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-clinic-teal to-cyan-500 text-white font-medium text-sm transition-all hover:from-clinic-teal/90 hover:to-cyan-500/90 shadow-lg shadow-cyan-500/20"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium text-sm transition-all hover:bg-secondary"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PILLAR 3 — BIOHACKING & LONGEVITY ═══ */}
      <section id="biohacking" className="scroll-mt-24 py-20 md:py-28 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Image */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div
                className="relative group cursor-pointer"
                onClick={() => navigate("/services/biohacking")}
              >
                <img
                  src={biohackingImg}
                  alt="Biohacking and longevity hub"
                  className="w-full rounded-2xl object-cover aspect-[3/4] max-h-[480px] transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  width={512}
                  height={700}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 rounded-2xl transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm text-foreground font-semibold px-6 py-3 rounded-full shadow-lg">
                    View Details <ArrowUpRight className="w-4 h-4 inline ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right — Description */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="space-y-6"
            >
              <p className="label-sm">Pillar Three</p>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground">
                Biohacking & Longevity
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Advanced cellular optimization protocols designed for peak performance and longevity. Access cutting-edge technologies including Red Light Therapy, HBOT, IV Therapy, PEMF, Neurointegrator, and Far Infrared Sauna — developed by leaders in the medical and pharmaceutical field.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Victoria", "Langley", "Kelowna"].map((loc) => (
                  <span key={loc} className="text-[10px] font-semibold px-3 py-1 rounded-full bg-card border border-border text-muted-foreground uppercase tracking-widest">
                    {loc}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services/biohacking"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-clinic-teal to-cyan-500 text-white font-medium text-sm transition-all hover:from-clinic-teal/90 hover:to-cyan-500/90 shadow-lg shadow-cyan-500/20"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium text-sm transition-all hover:bg-secondary"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PILLAR 4 — HEALTH WEIGHT ═══ */}
      <section id="health-weight" className="scroll-mt-24 py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Image */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div
                className="relative group cursor-pointer"
                onClick={() => navigate("/services/health-weight")}
              >
                <img
                  src={weightImg}
                  alt="Health weight management"
                  className="w-full rounded-2xl object-cover aspect-[3/4] max-h-[520px] transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  width={512}
                  height={700}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 rounded-2xl transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm text-foreground font-semibold px-6 py-3 rounded-full shadow-lg">
                    View Details <ArrowUpRight className="w-4 h-4 inline ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right — Content */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <p className="label-sm mb-3">Pillar Four</p>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Health Weight</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Medically supervised weight management combining nutrition science, metabolic testing, and ongoing support for sustainable health.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/services/health-weight"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-clinic-teal to-cyan-500 text-white font-medium text-sm transition-all hover:from-clinic-teal/90 hover:to-cyan-500/90 shadow-lg shadow-cyan-500/20"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium text-sm transition-all hover:bg-secondary"
                >
                  Book a Consultation
                </Link>
              </div>

              <div className="space-y-4">
                {weightTreatments.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={t.name}
                      className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border/40 group hover:border-clinic-teal/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-clinic-teal-light flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-clinic-teal" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-foreground text-sm mb-0.5">{t.name}</h3>
                        <p className="text-xs text-muted-foreground">{t.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-20 md:py-28 bg-clinic-teal">
        <div className="container mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4">
              Ready to start your{" "}
              <br className="hidden md:block" />
              aesthetic journey?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              Book a comprehensive consultation with our medical team at any of our three locations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-clinic-teal font-semibold text-sm transition-all hover:bg-white/90"
              >
                Book Online
              </Link>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm transition-all hover:bg-white/10"
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
