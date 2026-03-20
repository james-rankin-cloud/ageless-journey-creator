import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Stethoscope, Heart } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "A thorough initial assessment to understand your goals, health history, and what matters most to you." },
  { icon: ClipboardList, title: "Personalized Plan", desc: "Your clinician designs a custom treatment protocol tailored to your unique biology and lifestyle." },
  { icon: Stethoscope, title: "Guided by Experts", desc: "Our doctors and clinicians guide you through every treatment with attentive, hands-on care." },
  { icon: Heart, title: "Ongoing Support", desc: "Regular follow-ups, progress tracking, and plan adjustments to ensure lasting, visible results." },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-card">
      <div className="container mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Your Ageless Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How The Process Works</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our expert clinicians guide you through every step to achieve your health &amp; beauty goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="text-6xl font-bold text-primary/10 absolute -top-2 left-1/2 -translate-x-1/2">
                {i + 1}
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-5">
                  <s.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
