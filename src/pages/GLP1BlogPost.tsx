import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { User, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import blog1Img from "@/assets/blog1.png";

const ease = [0.16, 1, 0.3, 1] as const;

export default function GLP1BlogPost() {
  return (
    <>
      <Helmet>
        <title>Understanding GLP-1 Agonists | Ageless Living™</title>
        <meta
          name="description"
          content="The science behind medical weight loss and metabolic health using GLP-1 agonists at Ageless Living™."
        />
      </Helmet>

      <main className="pt-20 pb-20 bg-background">
        {/* Editorial Header Section */}
        <header className="max-w-7xl mx-auto px-8 pt-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-clinic-teal-light text-clinic-teal px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase">
                  Medical Weight Loss / Longevity
                </span>
                <span className="text-muted-foreground text-sm font-medium">January 6, 2026</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-4">
                Understanding GLP-1 Agonists: The Science Behind Medical Weight Loss & Metabolic Health
              </h1>
              <div className="flex items-center gap-4 py-4 border-t border-border/20">
                <div className="w-10 h-10 rounded-full bg-clinic-teal-light flex items-center justify-center">
                  <User className="w-5 h-5 text-clinic-teal" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Dr. Jean Paul Lim, MD, FRCPC</p>
                  <p className="text-muted-foreground text-sm">Medical Director, Ageless Living</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Visual Section */}
        <section className="max-w-7xl mx-auto px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="rounded-2xl overflow-hidden aspect-video relative shadow-lg group"
          >
            <img
              alt="Clinical Environment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={blog1Img}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>
        </section>

        {/* Content Canvas */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Side Navigation / Table of Contents */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-24 self-start h-fit">
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border/10">
                <h4 className="text-xs font-medium tracking-[0.2em] text-clinic-teal uppercase mb-4">Key Insights</h4>
                <ul className="space-y-3">
                  <li>
                    <a className="text-foreground font-medium hover:text-clinic-teal transition-colors block leading-tight" href="#intro">
                      Biological Reality
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#what-are">
                      What are GLP-1s?
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#how-work">
                      Mechanisms of Action
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#mental-health">
                      Mental Health & Alcohol
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#holistic">
                      The Ageless Approach
                    </a>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border/30">
                  <div className="bg-clinic-teal/5 p-4 rounded-xl">
                    <p className="text-xs font-medium text-clinic-teal mb-2 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      CLINIC LOCATIONS
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">Victoria • Langley • Kelowna</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Reading Body */}
            <article className="lg:col-span-8 lg:col-start-5 prose prose-lg max-w-none" id="intro">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8"
              >
                <h2 className="text-xl font-medium mb-4 text-foreground">Introduction: It's Not Just Willpower. It's Biology.</h2>
                <p className="text-base font-medium text-foreground leading-relaxed opacity-90 italic mb-0">
                  For decades, the prevailing advice for weight loss has been simple: "Eat less, move more." Yet, for millions of people, this equation simply does not work.
                </p>
              </motion.div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                At Ageless Living, we understand that obesity and weight loss resistance are rarely failures of character or willpower. They are often complex, chronic metabolic conditions driven by hormonal signals that regulate hunger, satiety, and energy storage. When these signals are disrupted, the body fights to maintain a higher "set point," making long-term weight loss nearly impossible through diet alone.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                This is where the new generation of metabolic therapies—specifically GLP-1 Agonists—has changed the landscape of longevity medicine.
              </p>

              <h2 id="what-are" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                What Are GLP-1 Agonists?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                GLP-1 (Glucagon-like Peptide-1) is a naturally occurring hormone produced in the gut after you eat. Its primary job is to tell your brain, "I am full," and to signal your body to release insulin to handle the sugar from your food.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                In many patients struggling with weight, this natural signal is blunted or ineffective. Modern medical treatments use GLP-1 receptor agonists to mimic this natural hormone, but with a longer duration of action. You have likely heard these referred to by their active ingredients or brand names in the media:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease }}
                  className="bg-card p-5 rounded-2xl border-l-4 border-clinic-teal shadow-sm"
                >
                  <h4 className="font-medium text-clinic-teal mb-2">Semaglutide</h4>
                  <p className="text-sm text-muted-foreground mb-0">
                    The active ingredient found in medications like Ozempic® (approved for Type 2 Diabetes) and Wegovy® (approved for weight management).
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease }}
                  className="bg-card p-5 rounded-2xl border-l-4 border-clinic-teal/60 shadow-sm"
                >
                  <h4 className="font-medium text-clinic-teal mb-2">Tirzepatide</h4>
                  <p className="text-sm text-muted-foreground mb-0">
                    The active ingredient in Mounjaro®, which acts as a dual agonist (targeting both GLP-1 and GIP receptors) for potentially potent metabolic effects.
                  </p>
                </motion.div>
              </div>

              <h2 id="how-work" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                How Do These Treatments Work?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                These medications do not "melt fat" directly. Instead, they correct the underlying metabolic dysfunction that causes weight gain. They work through three primary mechanisms:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="text-clinic-teal font-medium">—</span>
                  <div>
                    <strong className="text-foreground">Slowing Gastric Emptying:</strong>{" "}
                    <span className="text-muted-foreground">By slowing down how fast food leaves the stomach, you feel physically fuller for longer after smaller meals.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-clinic-teal font-medium">—</span>
                  <div>
                    <strong className="text-foreground">Regulating Insulin:</strong>{" "}
                    <span className="text-muted-foreground">They improve insulin sensitivity and blood sugar control, which shifts the body from "fat storage" mode to a more metabolically flexible state.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-clinic-teal font-medium">—</span>
                  <div>
                    <strong className="text-foreground">Targeting the Brain:</strong>{" "}
                    <span className="text-muted-foreground">Crucially, GLP-1 receptors are found in the brain's appetite centers, directly influencing how you think about food.</span>
                  </div>
                </li>
              </ul>

              <h2 id="mental-health" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Beyond the Scale: Mental Health & The Alcohol Connection
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                One of the most profound benefits of GLP-1 therapy is psychological. Weight management is rarely just about calories; it is deeply tied to our mental health, stress, and reward pathways.
              </p>

              <h3 className="text-lg font-semibold text-clinic-teal mb-3 mt-6">Silencing "Food Noise"</h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Many patients suffer from constant, intrusive thoughts about food—what to eat next, guilt over what was just eaten, or fighting intense cravings. This "food noise" is a significant mental burden that depletes willpower and increases anxiety.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                GLP-1 agonists work on the brain's reward center to turn this volume down. Patients often report a newfound sense of mental freedom and peace. When you aren't constantly fighting your biology, you regain the mental bandwidth to focus on your work, your family, and your life.
              </p>

              <h3 className="text-lg font-semibold text-clinic-teal mb-3 mt-6">Breaking the Alcohol Cycle</h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Alcohol is a major, often overlooked, contributor to weight gain. Not only is it calorie-dense, but it also spikes cortisol and disrupts sleep, making weight loss impossible. Interestingly, the same dopamine reward pathways that drive sugar cravings also drive the desire for alcohol.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Many patients on GLP-1 therapy report a spontaneous reduction in their desire to drink. The "reward" signal from a glass of wine is dampened, making it easier to cut back or stop completely. This offers a dual benefit: removing empty calories and reducing the inflammatory stress alcohol places on the liver and metabolism.
              </p>

              <h2 id="holistic" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                The Ageless Difference: A Holistic Approach
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                While GLP-1 agonists are powerful tools, they are not a standalone cure. Taking these medications without proper medical supervision can lead to suboptimal results or unwanted side effects, such as muscle loss or significant skin laxity. At Ageless Living, our Physician-Supervised Medical Weight Program takes a multimodal approach to ensure you look as healthy as you feel.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease }}
                  className="p-6 rounded-xl bg-secondary/50 transition-all hover:bg-card hover:shadow-lg border border-border/10"
                >
                  <div className="w-10 h-10 rounded-full bg-clinic-teal-light flex items-center justify-center mb-3">
                    <User className="w-5 h-5 text-clinic-teal" />
                  </div>
                  <h4 className="font-medium text-base mb-3 text-foreground">1. Addressing "Ozempic Face"</h4>
                  <p className="text-sm text-muted-foreground mb-0">
                    Rapid weight loss can lead to skin sagging. We integrate collagen-building skincare and RF Microneedling early in your journey to maintain elasticity.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease }}
                  className="p-6 rounded-xl bg-secondary/50 transition-all hover:bg-card hover:shadow-lg border border-border/10"
                >
                  <div className="w-10 h-10 rounded-full bg-clinic-teal-light flex items-center justify-center mb-3">
                    <User className="w-5 h-5 text-clinic-teal" />
                  </div>
                  <h4 className="font-medium text-base mb-3 text-foreground">2. Muscle & Mobility</h4>
                  <p className="text-sm text-muted-foreground mb-0">
                    Longevity is tied to muscle. Access our Ageless Moving App for structured, personalized exercise plans to ensure you lose fat, not muscle.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease }}
                  className="p-6 rounded-xl bg-secondary/50 transition-all hover:bg-card hover:shadow-lg border border-border/10"
                >
                  <div className="w-10 h-10 rounded-full bg-clinic-teal-light flex items-center justify-center mb-3">
                    <User className="w-5 h-5 text-clinic-teal" />
                  </div>
                  <h4 className="font-medium text-base mb-3 text-foreground">3. Hormone Optimization</h4>
                  <p className="text-sm text-muted-foreground mb-0">
                    We assess your full hormonal panel—thyroid, cortisol, and sex hormones—to ensure your body is primed to release weight.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease }}
                  className="p-6 rounded-xl bg-secondary/50 transition-all hover:bg-card hover:shadow-lg border border-border/10"
                >
                  <div className="w-10 h-10 rounded-full bg-clinic-teal-light flex items-center justify-center mb-3">
                    <User className="w-5 h-5 text-clinic-teal" />
                  </div>
                  <h4 className="font-medium text-base mb-3 text-foreground">4. Biohacking & Recovery</h4>
                  <p className="text-sm text-muted-foreground mb-0">
                    We support patients with IV Vitamin Therapy and nutrient optimization to maintain hydration and energy during metabolic shifts.
                  </p>
                </motion.div>
              </div>

              <h2 id="eligibility" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Is Medical Weight Management Right for You?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                These therapies are not for everyone. They are prescription medical treatments intended for individuals with specific BMI criteria or weight-related health conditions (such as hypertension, insulin resistance, or dyslipidemia).
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                If you are tired of the "yo-yo" diet cycle and are looking for a science-backed, physician-led path to metabolic and mental health, it may be time to look at your biology.
              </p>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="mt-12 p-8 rounded-2xl bg-clinic-teal text-white relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-medium mb-4">Next Steps</h2>
                  <p className="leading-relaxed mb-6 max-w-xl opacity-95">
                    Your journey to a healthier weight and improved longevity starts with a comprehensive assessment. Book a consultation at our Victoria, Langley, or Kelowna clinics today. Let's determine if a medically supervised metabolic program is the right tool to help you discover your best self.
                  </p>
                  <Link
                    to="/book"
                    className="inline-block bg-white text-clinic-teal px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg"
                  >
                    Book Your Consultation
                  </Link>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-[80px]"></div>
              </motion.div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
