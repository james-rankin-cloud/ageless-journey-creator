import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCTA from "@/components/ServiceCTA";
import hormoneBalancingImg from "@/assets/hormone-balancing.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HormoneBalancingPage() {
  return (
    <>
      <Helmet>
        <title>Hormone Balancing | Ageless Living™ — Bio-Identical Hormone Therapy</title>
        <meta name="description" content="Restore balance and vitality with bio-identical hormone replacement therapy (BHRT). MD-directed programs for men and women at all ages. Available in Victoria, Langley, and Kelowna." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-secondary/30 overflow-hidden pt-20">
        <div className="container mx-auto section-padding w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-clinic-teal/10 text-clinic-teal font-semibold text-xs tracking-[0.2em] uppercase mb-6">
                Well-being & Vitality
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.05] mb-8">
                Hormone<br />
                <span className="bg-gradient-to-r from-clinic-teal to-cyan-500 bg-clip-text text-transparent font-light">Balancing</span>
              </h1>
              <div className="space-y-5 max-w-xl">
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  Hormones affect us throughout our entire lives. Hormone imbalance can start at an early age, and affects both men and women.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  There are many reasons why imbalances occur, including age, stress, lack of sleep, birth control pills, inflammation, pregnancy, post-pregnancy, diet, weight, menopause, perimenopause, and thyroid problems.
                </p>
                <p className="text-clinic-teal font-bold">Unexpected factors. Expected results.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Additionally, with increasing pollutants and toxins in our environment and food, our bodies are under constant attack. Even when we are eating healthy and living a healthy lifestyle, we may not be hormonally healthy. As a result, we may experience symptoms varying from weight gain, acne, bloating, inflammation, low sex drive, decreased sexual function, low energy, and brain fog, to a whole array of diseases. Ageless Living Hormone & Weight Balancing Programs are MD directed; Ageless physicians are board-certified in anti-aging and regenerative medicine and help both men and women of all ages achieve optimal health and function.
                </p>
                <p className="text-sm italic text-clinic-teal font-semibold">Available at: Victoria, Langley, Kelowna</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/book"
                  className="bg-gradient-to-r from-clinic-teal to-cyan-500 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-cyan-500/20 hover:from-clinic-teal/90 hover:to-cyan-500/90 transition-all"
                >
                  Start Your Journey
                </Link>
                <button className="flex items-center gap-2 text-clinic-teal font-bold px-6 py-4 hover:gap-3 transition-all">
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
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-20">
                <img
                  src={hormoneBalancingImg}
                  alt="Hormone Balancing Clinical Excellence"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-clinic-teal/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-wellness-warm/30 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Test Hormones Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="lg:col-span-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Why test your hormones?</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hormone imbalances can be responsible for a variety of unpleasant symptoms including wrinkles, weight gain, low libido, night sweats, hot flashes, mood swings, stress, loss of muscle mass, fatigue, and even hair loss.
                </p>
                <p>
                  Having your hormones tested is one of the most accurate ways to understand the causes of any symptoms you are suffering from and allows us to formulate a treatment plan to help reduce their severity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="lg:col-span-6"
            >
              <div className="bg-card p-10 rounded-3xl shadow-sm border border-border/20 mb-8">
                <h3 className="text-2xl font-bold mb-4">What are the benefits of hormone balancing?</h3>
                <p className="text-muted-foreground">Explore how restorative therapy can transform your daily vitality and long-term health outcomes.</p>
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={hormoneBalancingImg}
                  alt="Clinical aesthetics"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-clinic-teal/60 to-transparent flex items-center p-12">
                  <h3 className="text-3xl font-bold text-white max-w-xs">Restoring Balance, Naturally.</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto section-padding text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-12"
          >
            Understanding Hormone Balance
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.youtube.com/embed/DawhEAeJk4c"
              title="Understanding Hormone Balance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* BHRT vs HRT Section */}
      <section className="bg-foreground text-primary-foreground py-20 md:py-24">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">
                BHRT vs HRT:<br />
                <span className="text-clinic-teal-light">Therapeutic Evolution</span>
              </h2>
              <div className="space-y-8 text-lg text-primary-foreground/80 leading-relaxed">
                <p>
                  Hormone therapies have made great progress over the last decade. Earlier therapies like Hormone Replacement Therapy (HRT) which used animal hormones, came with its own problems and were actually found to increase the risk of certain cancers.
                </p>
                <p>
                  Today, Bio-identical hormone restoration or optimization therapy (BHRT) helps boost our natural hormone levels, which may decline with age. These hormones are identical to the natural hormones in our body, unlike HRT, and actually help reduce the risk of some cancers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-8 text-center border border-white/10">
                <span className="text-4xl font-bold text-clinic-teal-light mb-2">100%</span>
                <p className="text-xs uppercase tracking-widest text-primary-foreground/70">Identical to Natural</p>
              </div>
              <div className="aspect-square bg-clinic-teal rounded-3xl flex flex-col items-center justify-center p-8 text-center">
                <span className="text-4xl font-bold text-white mb-2">MD</span>
                <p className="text-xs uppercase tracking-widest text-white/90">Board Certified Care</p>
              </div>
              <div className="col-span-2 aspect-[16/9] bg-secondary/10 rounded-3xl overflow-hidden">
                <img
                  src={hormoneBalancingImg}
                  alt="Laboratory setting"
                  className="w-full h-full object-cover opacity-50 grayscale"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-clinic-teal font-bold tracking-[0.2em] uppercase text-sm">Path to Balance</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">The Process</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="font-bold text-foreground">What to expect during your initial consultation:</p>
              <p>The Ageless Living philosophy is deeply rooted in education. In order to best prepare you, we gathered everything you should expect from us during your consultation, so we are educated on your body and can give you the absolute best care and treatment options.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 md:p-10 rounded-3xl shadow-sm border border-border/30 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8 items-start"
            >
              <div className="w-20 h-20 rounded-full bg-clinic-teal flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-bold mb-6">Physician Consult</h4>
                <div className="space-y-4">
                  <ul className="space-y-2 text-muted-foreground text-lg">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-clinic-teal shrink-0" />
                      You will meet your Ageless Living Physician to review your medical history.
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-clinic-teal shrink-0" />
                      Review your hormone cascade.
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-clinic-teal shrink-0" />
                      Follow-up tests (may include serum, saliva, and/or urine).
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed pt-4 border-t border-border/20">
                    When your Ageless Living Physician reviews your hormone cascade they will have the most thorough understanding of the hormones in your body, and how they operate. During this review, your physician will be available to answer any questions you may have and educate you on your results.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 md:p-10 rounded-3xl shadow-sm border border-border/30 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8 items-start"
            >
              <div className="w-20 h-20 rounded-full bg-clinic-teal flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-bold mb-6">Nutritionist Consultation</h4>
                <div className="space-y-4">
                  <ul className="space-y-2 text-muted-foreground text-lg">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-clinic-teal shrink-0" />
                      Meet your Ageless Living Nutritionist.
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-clinic-teal shrink-0" />
                      Full nutritional history review.
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-clinic-teal shrink-0" />
                      Test results are reviewed with the nutritionist and physician.
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-clinic-teal shrink-0" />
                      Formulate your treatment plan.
                    </li>
                  </ul>
                  <div className="bg-clinic-teal/10 p-6 rounded-2xl border-l-4 border-clinic-teal mt-6">
                    <p className="text-foreground italic mb-4">You will have access to an Ageless Living Pharmacist who is knowledgeable about HRT if you have any questions about your medications.</p>
                    <p className="text-muted-foreground text-sm">We take your health and our relationship with our patients very seriously. That's why we strive to educate ourselves and our clients on the most up-to-date information regarding the risks and benefits of hormone restoration therapy. Your Ageless Living team will ensure you fully understand your hormone restoration therapy options and are prepared and comfortable with your personalized treatment plan.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-8 md:p-10 rounded-3xl shadow-sm border border-border/30 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8 items-start"
            >
              <div className="w-20 h-20 rounded-full bg-clinic-teal flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-bold mb-6">The Follow Up</h4>
                <div className="space-y-6">
                  <ul className="space-y-4 text-muted-foreground text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-clinic-teal shrink-0 mt-1" />
                      A follow-up assessment will take place three months after beginning your treatment.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-clinic-teal shrink-0 mt-1" />
                      You will meet with your Ageless Living team and discuss how the program has worked for you. During this time, adjustments to your treatment plan may be recommended.
                    </li>
                  </ul>
                  <div className="bg-secondary/30 p-8 rounded-2xl border border-border/20">
                    <p className="text-muted-foreground leading-relaxed">The Ageless Living team truly cares about your health and well-being. Our goal is to improve your life. We encourage you to prepare any questions, comments, or concerns you may have so that our team can ensure you are fully informed.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA />
    </>
  );
}
