import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Play, Stethoscope, Users, FlaskConical, ShieldCheck, MapPin, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import hormoneHeroImg from "@/assets/treatment-hormone.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const locations = [
  { name: "Victoria", address: "1-101 Burnside Rd W, Victoria, BC V9A 1B7" },
  { name: "Langley", address: "415-20178 96 Ave, Langley, BC V1M 0B2" },
  { name: "Kelowna", address: "102-3320 Richter Street, Kelowna, BC V1W 4V5" },
];

const processSteps = [
  {
    number: "01",
    title: "Physician Consult",
    desc: "Meet your Physician to review medical history, hormone cascade, and follow-up tests.",
  },
  {
    number: "02",
    title: "Nutritionist Consultation",
    desc: "Meet your Nutritionist for a full nutritional history review, test results review, and formulating your treatment plan.",
    note: "Access to a Pharmacist provided",
  },
  {
    number: "03",
    title: "The Follow Up",
    desc: "A follow-up assessment takes place three months after beginning your treatment to discuss progress and make adjustments.",
  },
];

export default function HormoneBalancingPage() {
  return (
    <>
      <Helmet>
        <title>Hormone Balancing | Ageless Living™ — Bio-Identical Hormone Therapy</title>
        <meta name="description" content="Restore balance and vitality with bio-identical hormone replacement therapy (BHRT). MD-directed programs for men and women at all ages. Available in Victoria, Langley, and Kelowna." />
      </Helmet>

      {/* ═══ HERO SECTION ═══ */}
      <section className="pt-24 lg:pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-clinic-teal-light text-clinic-teal text-xs font-semibold tracking-widest uppercase mb-6">
                Well-being & Vitality
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-6">
                Hormone<br />
                <span className="text-clinic-teal">Balancing</span>
              </h1>
              <div className="space-y-5 max-w-lg">
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  Hormones affect us throughout our entire lives. Hormone imbalance can start at an early age, and affects both men and women.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  There are many reasons why imbalances occur, including age, stress, lack of sleep, birth control pills, inflammation, pregnancy, post-pregnancy, diet, weight, menopause, perimenopause, and thyroid problems. Unexpected factors. Expected results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Additionally, with increasing pollutants and toxins in our environment and food, our bodies are under constant attack. Even when we are eating healthy and living a healthy lifestyle, we may not be hormonally healthy.
                </p>
                <p className="text-sm font-semibold text-clinic-teal italic">
                  Available at: Victoria, Langley, Kelowna
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-clinic-teal text-white font-semibold shadow-lg shadow-clinic-teal/20 hover:shadow-clinic-teal/30 transition-all"
                >
                  Start Your Journey
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-4 text-clinic-teal font-semibold hover:gap-3 transition-all">
                  <Play className="w-5 h-5" />
                  Watch the Story
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img
                  src={hormoneHeroImg}
                  alt="Hormone balancing treatment consultation at Ageless Living clinic"
                  className="w-full h-full object-cover"
                  width={600}
                  height={750}
                />
              </div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-clinic-teal-light/40 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-wellness-warm rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WHY TEST YOUR HORMONES ═══ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="lg:col-span-5"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                Why test your hormones?
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Hormone imbalances can be responsible for a variety of unpleasant symptoms including wrinkles, weight gain, low libido, night sweats, hot flashes, mood swings, stress, loss of muscle mass, fatigue, and even hair loss.
                </p>
                <p>
                  Having your hormones tested is one of the most accurate ways to understand the causes of any symptoms you are suffering from and allows us to formulate a treatment plan to help reduce their severity.
                </p>
                <p className="text-foreground font-medium">
                  As a result, we may experience symptoms varying from weight gain, acne, bloating, inflammation, low sex drive, decreased sexual function, low energy, and brain fog, to a whole array of diseases.
                </p>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="bg-card rounded-2xl p-8 border border-border/40 hover:border-clinic-teal/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-clinic-teal-light flex items-center justify-center mb-5">
                  <Stethoscope className="w-6 h-6 text-clinic-teal" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">MD Directed Programs</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ageless Living programs are MD directed; physicians are board-certified in anti-aging and regenerative medicine.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08, ease }}
                className="bg-card rounded-2xl p-8 border border-border/40 hover:border-clinic-teal/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-clinic-teal-light flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-clinic-teal" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">All Ages & Genders</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We help both men and women of all ages achieve optimal health and function through scientific optimization.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16, ease }}
                className="md:col-span-2 relative h-56 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={hormoneHeroImg}
                  alt="Hormone therapy consultation at Ageless Living"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-clinic-teal/70 to-transparent flex items-center p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white max-w-xs leading-tight">
                    Restoring Balance, Naturally.
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BHRT VS HRT COMPARISON ═══ */}
      <section className="py-20 md:py-28 bg-foreground text-primary-foreground">
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                BHRT vs HRT:<br />
                <span className="text-clinic-teal-light">Therapeutic Evolution</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/70 leading-relaxed mb-10">
                <p>
                  Hormone therapies have made great progress over the last decade. Earlier therapies like Hormone Replacement Therapy (HRT) which used animal hormones, came with its own problems and were actually found to increase the risk of certain cancers.
                </p>
                <p>
                  Today, Bio-identical hormone restoration or optimization therapy (BHRT) helps boost our natural hormone levels, which may decline with age. These hormones are identical to the natural hormones in our body, unlike HRT, and actually help reduce the risk of some cancers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-5 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-clinic-teal-light/20 flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="w-5 h-5 text-clinic-teal-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white">Bio-identical Perfection</h4>
                    <p className="text-primary-foreground/60 text-sm">
                      Molecularly identical structures ensure your body recognizes and utilizes the hormones exactly as it would its own.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-clinic-teal-light/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-clinic-teal-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white">Risk Mitigation</h4>
                    <p className="text-primary-foreground/60 text-sm">
                      Unlike traditional animal-derived HRT, modern BHRT is clinically associated with reducing certain long-term risks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                <span className="text-4xl font-bold text-clinic-teal-light mb-2">100%</span>
                <p className="text-xs uppercase tracking-widest text-primary-foreground/60">Identical to Natural</p>
              </div>
              <div className="aspect-square bg-clinic-teal rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                <span className="text-4xl font-bold text-white mb-2">MD</span>
                <p className="text-xs uppercase tracking-widest text-white/80">Board Certified Care</p>
              </div>
              <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src={hormoneHeroImg}
                  alt="Professional clinical laboratory setting"
                  className="w-full h-full object-cover opacity-40 grayscale"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ THE PROCESS ═══ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-clinic-teal mb-3 block">
              Path to Balance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Process</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Ageless Living philosophy is deeply rooted in education. What to expect during your initial consultation:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-border/30 -translate-y-1/2 hidden lg:block -z-10" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="bg-card border border-border/40 p-8 rounded-2xl group hover:border-clinic-teal/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-clinic-teal transition-colors">
                  <span className="text-lg font-bold text-clinic-teal group-hover:text-white transition-colors">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.desc}</p>
                {step.note && (
                  <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-sm text-clinic-teal font-semibold">
                    <ClipboardList className="w-4 h-4" />
                    {step.note}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCATIONS ═══ */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="lg:w-1/3"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                Visit Our Clinics
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Select your nearest clinical location to begin your hormone balancing journey in a space designed for restorative peace.
              </p>
              <ul className="space-y-4">
                {locations.map((loc) => (
                  <li
                    key={loc.name}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/40 shadow-sm"
                  >
                    <MapPin className="w-5 h-5 text-clinic-teal flex-shrink-0" />
                    <div>
                      <span className="font-bold text-foreground block">{loc.name}</span>
                      <span className="text-xs text-muted-foreground">{loc.address}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="lg:w-2/3 w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-secondary"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10494.77340890825!2d-123.3875!3d48.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f738bddb06171%3A0x38e8f3741ebb48ed!2sVictoria%2C%20BC!5e0!3m2!1sen!2sca!4v1234567890"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ageless Living clinic locations map"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-20 md:py-24 bg-clinic-teal">
        <div className="container mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Ready to restore balance?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              Book a comprehensive hormone consultation with our board-certified physicians.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-clinic-teal font-semibold text-sm transition-all hover:bg-white/90"
              >
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm transition-all hover:bg-white/10"
              >
                View All Treatments
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
