import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heart, Beaker, Utensils, ShieldCheck } from "lucide-react";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceTransformationSection from "@/components/ServiceTransformationSection";
import healthWeightImg from "@/assets/health-weight.jpg";
import homeImg4 from "@/assets/home-4.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HealthWeightPage() {
  return (
    <>
      <Helmet>
        <title>Health Weight | Ageless Living™ — Metabolic Excellence</title>
        <meta
          name="description"
          content="Medically supervised weight management combining nutrition science, metabolic testing, and ongoing support for sustainable health at Ageless Living™."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-clinic-teal-light text-clinic-teal text-xs font-semibold tracking-wide uppercase mb-5">
                Metabolic Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[0.95] mb-6">
                Health Weight
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Your weight is a direct function of your diet and metabolism. Our bodies need positive change through scientific precision and holistic care.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={healthWeightImg}
                  alt="Modern clinical consultation room with minimalist furniture and serene atmosphere"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="order-2 md:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={healthWeightImg}
                    alt="Ageless Living health and weight management consultation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden mt-8">
                  <img
                    src={homeImg4}
                    alt="Ageless Living wellness clinic treatment room"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="order-1 md:order-2 space-y-5"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-clinic-teal">
                The Modern Epidemic
              </h2>
              <div className="space-y-3 text-muted-foreground text-base leading-relaxed">
                <p>
                  A combined high fat and high carbohydrate diet (the typical North American diet) is harmful to your body; it leads to inflammation which underpins most of our chronic diseases like obesity, heart disease, joint pains, etc.
                </p>
                <p>
                  Our body is not made to manage the persistent consumption of large amounts of refined carbohydrates in the presence of a large amount of fat.
                </p>
                <p className="font-medium text-foreground">
                  As a result of this diet and our increasingly sedentary lifestyle, the rates of chronic physical and mental illnesses and pain are increasing. There is too much stress, too little sleep, and too many chemicals in our environment and our foods, all combined with our poor lifestyle choices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different (Bento Grid) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              What makes Ageless Living different?
            </h2>
            <div className="h-1 w-20 bg-clinic-teal mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-5">
            {/* Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="md:col-span-8 bg-card p-6 md:p-10 rounded-xl shadow-sm border border-border/40 flex flex-col justify-between"
            >
              <div>
                <Beaker className="w-8 h-8 text-clinic-teal mb-5" />
                <h3 className="text-xl md:text-2xl font-bold mb-5">Correcting the Cause</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Some of the worst advice you can give someone struggling with weight is to try a fad diet like the keto diet. Excessive weight is often a symptom of an underlying problem. To regain your health and well-being, and lose weight, begins when you correct the cause – your gut microbiome, your metabolism, your mental health, and your hormones.
                </p>
              </div>
              <div className="flex gap-4 items-center pt-6">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-card overflow-hidden bg-secondary">
                    <img
                      src="https://agelessliving.com/wp-content/uploads/2022/06/Screenshot-2024-06-14-at-10.23.47%E2%80%AFAM-768x767.png"
                      alt="Dr. Jean Paul Lim, Ageless Living physician"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-card overflow-hidden bg-secondary">
                    <img
                      src="https://agelessliving.com/wp-content/uploads/2022/06/mike-768x768.png"
                      alt="Michael Forbes, Ageless Living practitioner"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Expert Physician Oversight
                </span>
              </div>
            </motion.div>

            {/* Side Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="md:col-span-4 bg-clinic-teal text-white p-6 md:p-10 rounded-xl shadow-xl flex flex-col justify-center text-center"
            >
              <Heart className="w-10 h-10 mx-auto mb-5" />
              <h3 className="text-lg md:text-xl font-bold mb-3">Beyond the Bandage</h3>
              <p className="text-white/90 leading-relaxed">
                Many who have tried dieting at some point will tell you that they regain all the weight they lost. Why? Because most programs are simply a bandage.
              </p>
            </motion.div>

            {/* Bottom Features */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="md:col-span-4 bg-card p-5 md:p-6 rounded-xl shadow-sm border border-border/40"
            >
              <h4 className="text-base md:text-lg font-bold mb-2 flex items-center gap-2">
                <Beaker className="w-4 h-4 text-clinic-teal" />
                Individualized
              </h4>
              <p className="text-muted-foreground">
                Approaching your concerns on a holistic basis from initial consultation to result.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="md:col-span-4 bg-card p-5 md:p-6 rounded-xl shadow-sm border border-border/40"
            >
              <h4 className="text-base md:text-lg font-bold mb-2 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-clinic-teal" />
                Assessment
              </h4>
              <p className="text-muted-foreground">
                Comprehensive hormone testing and detailed nutrition and diet assessment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease }}
              className="md:col-span-4 bg-card p-5 md:p-6 rounded-xl shadow-sm border border-border/40"
            >
              <h4 className="text-base md:text-lg font-bold mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-clinic-teal" />
                Safety First
              </h4>
              <p className="text-muted-foreground">
                Unique, medically-based program ensuring maximum results with total safety.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.youtube.com/embed/bgG2bRnN8lU"
              title="The Science of Metabolism"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ═══ REAL RESULTS — interactive transformation slider ═══ */}
      <ServiceTransformationSection
        variant="weight"
        serviceSlug="health-weight"
        title="Real Client Progress"
        subtitle="Drag to compare — physician-supervised change that sticks, without extreme diets."
      />

      <ServiceCTA
        title="Ready to reclaim your health?"
        description="At Ageless Living, we develop a comprehensive plan to help you attain your Health Weight and keep it off."
        primaryButtonText="Schedule Your Consultation"
      />
    </>
  );
}
