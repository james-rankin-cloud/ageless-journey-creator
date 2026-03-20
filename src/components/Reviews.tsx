import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Sarah M.", text: "The hormone balancing program changed my life. I feel like myself again after years of fatigue and mood swings.", location: "Langley" },
  { name: "David R.", text: "Dr. Lim and the team are incredibly knowledgeable. The biohacking treatments have given me energy I haven't felt in decades.", location: "Kelowna" },
  { name: "Jennifer T.", text: "Sarita is an absolute artist. My skin has never looked better. The clinic is beautiful and welcoming.", location: "Victoria" },
  { name: "Mark H.", text: "After struggling with weight for years, the Health Weight program finally gave me a sustainable plan that works. Down 30 lbs!", location: "Langley" },
  { name: "Lisa K.", text: "From the first consultation to follow-up, every step was professional and caring. I recommend Ageless Living to everyone.", location: "Victoria" },
  { name: "Robert W.", text: "The IV therapy sessions have been incredible for my recovery and focus. The staff make you feel right at home.", location: "Kelowna" },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-card overflow-hidden">
      <motion.div
        className="container mx-auto section-padding mb-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">What Our Clients Say</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Real Results, Real People</h2>
      </motion.div>

      {/* Scrolling ticker */}
      <div className="relative">
        <div className="flex animate-scroll-left gap-6 w-max">
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[340px] bg-secondary rounded-2xl p-6 shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-foreground">{r.name}</span>
                <span className="text-xs text-muted-foreground">{r.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
