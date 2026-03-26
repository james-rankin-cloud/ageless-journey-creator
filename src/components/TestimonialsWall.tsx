import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const reviews = [
  { name: "Sarah M.", text: "The hormone balancing program changed my life. I feel like myself again after years of fatigue and mood swings.", location: "Langley" },
  { name: "David R.", text: "Dr. Lim and the team are incredibly knowledgeable. The biohacking treatments have given me energy I haven't felt in decades.", location: "Kelowna" },
  { name: "Jennifer T.", text: "Sarita is an absolute artist. My skin has never looked better. The clinic is beautiful and welcoming.", location: "Victoria" },
  { name: "Mark H.", text: "After struggling with weight for years, the Health Weight program finally gave me a sustainable plan that works. Down 30 lbs!", location: "Langley" },
  { name: "Lisa K.", text: "From the first consultation to follow-up, every step was professional and caring. I recommend Ageless Living to everyone.", location: "Victoria" },
  { name: "Robert W.", text: "The IV therapy sessions have been incredible for my recovery and focus. The staff make you feel right at home.", location: "Kelowna" },
  { name: "Amanda C.", text: "I was nervous about injectables but the team put me completely at ease. The results are natural and beautiful.", location: "Langley" },
  { name: "James P.", text: "The red light therapy and sauna sessions in Kelowna are a game changer. I feel 10 years younger.", location: "Kelowna" },
];

const row1 = reviews.slice(0, 4);
const row2 = reviews.slice(4);

function ReviewCard({ r }: { r: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-card rounded-2xl border border-border p-6">
      <div className="flex items-center gap-2 mb-3">
        {/* Google icon placeholder */}
        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">G</div>
        <span className="text-sm font-bold text-foreground">{r.name}</span>
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
    </div>
  );
}

export default function TestimonialsWall() {
  return (
    <section className="section-y bg-background overflow-hidden">
      <div className="container mx-auto section-padding mb-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The wall of appreciation
          </motion.h2>
          <a
            href="https://www.google.com/search?q=ageless+living+wellness+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Read testimonials <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Row 1 */}
      <div className="mb-4">
        <div className="flex animate-scroll-left gap-4 w-max hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((r, i) => (
            <ReviewCard key={`r1-${i}`} r={r} />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div>
        <div className="flex animate-scroll-left-slow gap-4 w-max hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2].map((r, i) => (
            <ReviewCard key={`r2-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
