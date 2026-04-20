import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sun, Syringe, Wind, Brain, Flame, Zap, AudioLines, Sparkles, ArrowRight, MapPin } from "lucide-react";
import biohackingImg from "@/assets/biohacking.jpg";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceTransformationSection from "@/components/ServiceTransformationSection";

const ease = [0.16, 1, 0.3, 1] as const;

export default function BiohackingPage() {
  return (
    <>
      <Helmet>
        <title>Biohacking & Longevity | Ageless Living - Precision Cellular Optimization</title>
        <meta
          name="description"
          content="Advanced biohacking protocols including Red Light Therapy, HBOT, IV Therapy, PEMF, and Neurointegrator. Optimize your cellular health at Ageless Living."
        />
      </Helmet>

      {/* HERO */}
      <section className="pt-28 pb-16 md:pb-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-block px-4 py-1.5 bg-clinic-teal-light text-clinic-teal rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
                The Future of Performance
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-foreground">
                Biohacking: Developed by{" "}
                <span className="bg-gradient-to-r from-clinic-teal to-clinic-teal bg-clip-text text-transparent font-medium">Leaders.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Giving our members access to the best when it comes to weight loss, strength, muscle gains, and age management. You will be able to train harder, recover quicker, and focus better than ever before.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#services"
                  className="px-6 py-3 bg-gradient-to-r from-clinic-teal to-clinic-teal text-white rounded-full text-sm font-semibold shadow-lg shadow-clinic-teal/20 hover:from-clinic-teal/90 hover:to-clinic-teal/90 transition-all"
                >
                  Explore Modalities
                </a>
                <Link
                  to="/locations/kelowna"
                  className="px-6 py-3 border border-border bg-card text-foreground rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  View Locations
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <div className="absolute -inset-4 bg-clinic-teal/10 rounded-xl blur-2xl" />
              <img
                src={biohackingImg}
                alt="Modern biohacking facility with advanced therapeutic equipment"
                className="relative w-full aspect-[4/5] object-cover object-center rounded-xl shadow-2xl"
                width={600}
                height={750}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="scroll-mt-24 py-20 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <motion.div
            className="mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl font-semibold tracking-tight mb-4 text-foreground">The Clinical Suite</h2>
            <p className="text-muted-foreground">
              Explore our targeted biological optimization protocols designed for cellular restoration and peak neural performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* PBM Therapy - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="md:col-span-8 bg-card p-8 rounded-xl border border-border/40 hover:shadow-lg transition-all group"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Photobiomodulation (PBM) / Red Light Therapy</h3>
                    <div className="flex gap-2">
                      {["Victoria", "Langley", "Kelowna"].map((loc) => (
                        <span key={loc} className="px-2.5 py-0.5 bg-secondary text-muted-foreground text-[10px] font-bold uppercase rounded-full tracking-wider">
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Sun className="w-8 h-8 text-clinic-teal/40 group-hover:text-clinic-teal transition-colors" />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  Photobiomodulation uses specific wavelengths of focused red and near-infrared (NIR) light to trigger a photochemical reaction within the mitochondria. This process enhances cellular energy production (ATP), stimulating natural healing, reducing systemic inflammation, and boosting energy levels. It is a premier choice for pro athletes looking for recovery and individuals seeking advanced aesthetics through improved skin health.
                </p>
                <div className="h-40 rounded-lg overflow-hidden mt-auto bg-secondary">
                  <div className="w-full h-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
                    <Sun className="w-16 h-16 text-red-400/50" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* IV Therapy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
              className="md:col-span-4 bg-card p-6 rounded-xl border border-border/40 hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="mb-4">
                <Syringe className="w-7 h-7 text-clinic-teal mb-3" />
                <h3 className="text-lg font-bold mb-2 text-foreground">IV Therapy</h3>
                <span className="px-2.5 py-0.5 bg-clinic-teal/10 text-clinic-teal text-[10px] font-bold uppercase rounded-full">
                  Kelowna Only
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Our IV Nutrients deliver a full, concentrated blend of essential vitamins and antioxidants directly into your bloodstream, bypassing the digestive system for 100% absorption. Set within a calming clinical environment designed for relaxation, these protocols ensure total body replenishment.
              </p>
              <div className="mt-auto border-t border-border/40 pt-4">
                <button className="text-clinic-teal text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Full Menu <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* HBOT */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12, ease }}
              className="md:col-span-4 bg-card p-6 rounded-xl border border-border/40 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold mb-3 text-foreground">Hyperbaric Oxygen Therapy (HBOT)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Experience the healing power of 100% pure oxygen within a state-of-the-art pressurized chamber. HBOT significantly increases the amount of oxygen your blood can carry, which stimulates the release of growth factors and stem cells. This advanced protocol promotes deep tissue repair, reduces swelling, and enhances overall brain health and cognitive function.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Langley", "Kelowna"].map((loc) => (
                  <span key={loc} className="px-2.5 py-0.5 bg-secondary text-muted-foreground text-[10px] font-bold rounded-full uppercase">
                    {loc}
                  </span>
                ))}
              </div>
              <div className="h-32 rounded-lg overflow-hidden bg-secondary flex items-center justify-center">
                <Wind className="w-12 h-12 text-clinic-teal/30" />
              </div>
            </motion.div>

            {/* Neurointegrator - Dark Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16, ease }}
              className="md:col-span-8 grid md:grid-cols-2 bg-foreground text-background rounded-xl overflow-hidden"
            >
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-3">Neurointegrator</h3>
                <p className="text-background/70 text-sm leading-relaxed mb-4">
                  The Neurointegrator system provides Bio-Integrative Neurofeedback designed to identify and retrain irregular brain patterns. By balancing neural activity, this non-invasive therapy works toward symptom elimination for conditions such as ADHD, anxiety, depression, and insomnia, leading to sustained mental clarity and emotional resilience.
                </p>
                <span className="text-clinic-teal text-xs font-bold tracking-widest uppercase mb-6">
                  Available at Langley
                </span>
                <Link
                  to="/book?location=langley"
                  className="w-fit px-5 py-2.5 bg-gradient-to-r from-clinic-teal to-clinic-teal text-white rounded-full text-xs font-bold uppercase tracking-widest hover:from-clinic-teal/90 hover:to-clinic-teal/90 shadow-lg shadow-clinic-teal/20 transition-all"
                >
                  Book Clinical Consultation
                </Link>
              </div>
              <div className="bg-clinic-teal/20 flex items-center justify-center p-8">
                <Brain className="w-24 h-24 text-clinic-teal/30" />
              </div>
            </motion.div>

            {/* Small Cards Grid */}
            <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Brain Tap */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="bg-card p-5 rounded-xl border border-border/40 hover:border-clinic-teal/30 transition-all flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <AudioLines className="w-5 h-5 text-clinic-teal" />
                  <span className="text-[9px] font-bold text-muted-foreground uppercase bg-secondary px-2 py-0.5 rounded">
                    Kelowna
                  </span>
                </div>
                <h4 className="font-bold mb-2 text-foreground text-sm">Brain Tap</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Utilizing light and sound guided meditation, Brain Tap helps you achieve optimal brainwave states for deep relaxation and peak performance.
                </p>
              </motion.div>

              {/* Infrared Sauna */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
                className="bg-card p-5 rounded-xl border border-border/40 hover:border-clinic-teal/30 transition-all flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <Flame className="w-5 h-5 text-clinic-teal" />
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[9px] font-bold text-muted-foreground uppercase bg-secondary px-2 py-0.5 rounded">
                      Langley
                    </span>
                    <span className="text-[9px] font-bold text-muted-foreground uppercase bg-secondary px-2 py-0.5 rounded">
                      Kelowna
                    </span>
                  </div>
                </div>
                <h4 className="font-bold mb-2 text-foreground text-sm">Far Infrared Sauna</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Built on 40 years of healing research, our saunas use deep-penetrating heat to facilitate a 600 calorie burn per session while promoting intensive toxin elimination.
                </p>
              </motion.div>

              {/* NuCalm */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="bg-card p-5 rounded-xl border border-border/40 hover:border-clinic-teal/30 transition-all flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <Sparkles className="w-5 h-5 text-clinic-teal" />
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[9px] font-bold text-muted-foreground uppercase bg-secondary px-2 py-0.5 rounded">
                      Victoria
                    </span>
                    <span className="text-[9px] font-bold text-muted-foreground uppercase bg-secondary px-2 py-0.5 rounded">
                      Langley
                    </span>
                  </div>
                </div>
                <h4 className="font-bold mb-2 text-foreground text-sm">NuCalm</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Clinically proven to reset nervous system health, NuCalm brings you to a state of deep relaxation within minutes. Best used for recovery.
                </p>
              </motion.div>

              {/* PEMF */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease }}
                className="bg-card p-5 rounded-xl border border-border/40 hover:border-clinic-teal/30 transition-all flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <Zap className="w-5 h-5 text-clinic-teal" />
                  <span className="text-[9px] font-bold text-muted-foreground uppercase bg-secondary px-2 py-0.5 rounded">
                    All Clinics
                  </span>
                </div>
                <h4 className="font-bold mb-2 text-foreground text-sm">PEMF</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Pulsed Electromagnetic Field therapy creates harmonic resonance for your 75 trillion cells. This stabilizes cellular frequency and activates the body's natural repair system.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.youtube.com/embed/52vmzZQf8-g"
              title="Ageless Living Philosophy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY QUOTE */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto section-padding text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-2xl md:text-4xl font-light tracking-tight leading-tight text-foreground mb-10">
              "We provide the tools. Your biology provides the{" "}
              <span className="font-semibold italic text-clinic-teal">transformation.</span>"
            </h2>
            <div className="w-20 h-px bg-clinic-teal mx-auto mb-10" />
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs font-bold">
              Ageless Living Philosophy
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ REAL RESULTS — interactive transformation slider ═══ */}
      <ServiceTransformationSection
        variant="biohacking"
        serviceSlug="biohacking"
        title="Performance, Measured"
        subtitle="Drag to compare — the clarity, recovery and energy our clients report after a full biohacking protocol."
      />

      <ServiceCTA
        title="Ready to optimize your biology?"
        description="Book a consultation with our biohacking specialists and discover your personalized protocol."
        primaryButtonText="Book Online"
        secondaryButtonText="View Kelowna Hub"
        secondaryButtonLink="/locations/kelowna"
      />
    </>
  );
}
