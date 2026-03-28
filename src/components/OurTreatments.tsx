import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function OurTreatments() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto section-padding">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <motion.p
            className="label-sm mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Treatments
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            Picture Your Possible.
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
          >
            Ageless Living™ brings together the best of what's possible: the guidance, tools, and technologies to help you live better, longer.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
