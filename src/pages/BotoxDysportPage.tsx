import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Zap, Sparkles, Eye, Frown, Activity } from "lucide-react";
import ServiceCTA from "@/components/ServiceCTA";
import botoxHeroImg from "@/assets/botox-hero.jpg";
import botoxResultsImg from "@/assets/botox-results.jpg";
import botoxPrecisionImg from "@/assets/botox-precision.jpg";
import areaForeheadImg from "@/assets/area-forehead.jpg";
import areaGlabellaImg from "@/assets/area-glabella.jpg";
import areaCrowsFeetImg from "@/assets/area-crows-feet.jpg";
import areaMassetersImg from "@/assets/area-masseters.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const signsOfAging = [
  { icon: Frown, label: "Dynamic Wrinkles" },
  { icon: Activity, label: "Frown Lines" },
  { icon: Eye, label: "Crow's Feet" },
  { icon: Sparkles, label: "Deep Furrows" },
];

const steps = [
  { num: "01", title: "Muscle Relaxation", desc: "Precision injections temporarily block the signal from the nerve to the facial muscles." },
  { num: "02", title: "Surface Smoothing", desc: "As the muscle activity reduces, the overlying skin begins to flatten and smooth out." },
  { num: "03", title: "Youthful Restoration", desc: "The result is a refreshed, rested appearance that looks entirely natural." },
];

const benefits = [
  { icon: Clock, title: "Quick Results", desc: "Noticeable softening within 3-7 days, reaching full effect by day 14." },
  { icon: Zap, title: "Minimal Downtime", desc: 'Often called a "lunchtime procedure"—return to your day immediately.' },
  { icon: Sparkles, title: "Natural Outcomes", desc: "Our expert injectors ensure you still look like you—just more refreshed." },
];

const commonAreas = [
  { img: areaForeheadImg, title: "Forehead", desc: "Smoothes horizontal lines caused by lifting your eyebrows." },
  { img: areaGlabellaImg, title: "Glabella", desc: 'Treats the "11 lines" or frown lines between the eyebrows.' },
  { img: areaCrowsFeetImg, title: "Crow's Feet", desc: "Softens the fine lines that fan out from the corners of the eyes." },
  { img: areaMassetersImg, title: "Masseters", desc: "Slims the jawline and alleviates discomfort from teeth grinding." },
];

export default function BotoxDysportPage() {
  return (
    <>
      <Helmet>
        <title>Botox / Dysport | Ageless Living™</title>
        <meta name="description" content="Soften lines and restore your youthful glow with precision neuromodulators. Book a consultation today." />
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section className="pt-28 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </Link>
              <div className="space-y-4">
                <span className="text-clinic-teal font-semibold tracking-[0.2em] uppercase text-xs">
                  Neuromodulators
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Botox / Dysport
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-md font-light">
                  Soften lines and restore your youthful glow with precision neuromodulators.
                </p>
              </div>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-clinic-teal text-white rounded-full px-10 py-4 font-semibold hover:bg-clinic-teal-container transition-all shadow-xl shadow-clinic-teal/10"
              >
                Book a Consultation
              </Link>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-2xl shadow-foreground/5">
                <img
                  src={botoxHeroImg}
                  alt="Modern aesthetic clinic treatment room"
                  className="w-full h-full object-cover"
                  width={1024}
                  height={768}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-teal/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SIGNS OF AGING ═══ */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Cards grid */}
            <motion.div
              className="order-2 lg:order-1 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="space-y-4 pt-12">
                {signsOfAging.slice(0, 2).map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="bg-card p-8 rounded-xl aspect-square flex flex-col justify-end border-b-4 border-clinic-teal/20">
                      <Icon className="w-8 h-8 text-clinic-teal mb-4" />
                      <h4 className="font-bold text-lg text-foreground">{s.label}</h4>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-4">
                {signsOfAging.slice(2).map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="bg-card p-8 rounded-xl aspect-square flex flex-col justify-end border-b-4 border-clinic-teal/20">
                      <Icon className="w-8 h-8 text-clinic-teal mb-4" />
                      <h4 className="font-bold text-lg text-foreground">{s.label}</h4>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="order-1 lg:order-2 space-y-6"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-foreground">Signs of Aging</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Over time, repeated facial expressions like squinting or frowning lead to dynamic wrinkles. These etched lines can make you look tired, angry, or older than you feel. We specialize in identifying these early markers and softening them before they become permanent resting creases.
              </p>
              <div className="pt-4 flex items-center gap-4 text-clinic-teal font-medium">
                <span className="h-px w-12 bg-clinic-teal" />
                Restore your confidence
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto section-padding text-center space-y-16">
          <motion.div
            className="max-w-2xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground">How it Works</h2>
            <p className="text-muted-foreground font-light">A scientific approach to effortless beauty.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-border/30" />
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="space-y-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <div className="w-16 h-16 bg-clinic-teal text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto ring-8 ring-background">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE ═══ */}
      <section className="py-16 md:py-20 bg-clinic-teal text-white overflow-hidden">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              className="lg:col-span-5 space-y-12"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Why Choose Botox/Dysport</h2>
              <ul className="space-y-8">
                {benefits.map((b) => {
                  const Icon = b.icon;
                  return (
                    <li key={b.title} className="flex gap-6 items-start">
                      <div className="bg-white/10 p-2 rounded-lg">
                        <Icon className="w-5 h-5 text-clinic-teal-light" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">{b.title}</h4>
                        <p className="text-white/70 font-light">{b.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={botoxResultsImg}
                  alt="Natural aesthetic results"
                  className="rounded-xl w-full aspect-[3/4] object-cover mt-12"
                  loading="lazy"
                  width={600}
                  height={800}
                />
                <img
                  src={botoxPrecisionImg}
                  alt="Clinical precision"
                  className="rounded-xl w-full aspect-[3/4] object-cover"
                  loading="lazy"
                  width={600}
                  height={800}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ COMMON AREAS ═══ */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto section-padding space-y-16">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-foreground">Common Areas</h2>
              <p className="text-muted-foreground font-light max-w-md">Targeted precision for specific aesthetic goals.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonAreas.map((area, i) => (
              <motion.div
                key={area.title}
                className="bg-card p-1 rounded-xl group transition-all hover:-translate-y-2 duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                  <img
                    src={area.img}
                    alt={area.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    width={512}
                    height={640}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-lg font-bold text-foreground mb-1">{area.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA />
    </>
  );
}
