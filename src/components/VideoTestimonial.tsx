import { motion } from "framer-motion";
import { Play } from "lucide-react";
import clinicImg from "@/assets/hero-clinic.jpg";

export default function VideoTestimonial() {
  return (
    <section className="section-y bg-card">
      <div className="container mx-auto section-padding text-center">
        <motion.div
          className="max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            "Have never been happier with the way I look and feel"
          </h2>
          <p className="text-muted-foreground text-lg">— Sarah M., Langley</p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden relative group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <img
            src={clinicImg}
            alt="Client testimonial video"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors duration-300">
            <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <Play className="h-8 w-8 text-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
