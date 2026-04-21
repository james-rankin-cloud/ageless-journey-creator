import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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

function ReviewCard({ r }: { r: typeof reviews[0] }) {
  return (
    <article className="flex flex-col h-full rounded-2xl bg-card border border-border/60 p-6 md:p-7 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-[11px] font-semibold text-foreground">
          {r.name[0]}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{r.name}</p>
          <p className="text-[11px] text-muted-foreground">{r.location}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
    </article>
  );
}

const AUTO_MS = 6500;

export default function TestimonialsWall() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [perPage, setPerPage] = useState(3);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const updatePerPage = () => {
      const w = window.innerWidth;
      setPerPage(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const totalPages = Math.ceil(reviews.length / perPage);

  useEffect(() => {
    if (page >= totalPages) setPage(0);
  }, [perPage, totalPages, page]);

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setPage((p) => (p + delta + totalPages) % totalPages);
    },
    [totalPages]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, go]);

  const start = page * perPage;
  const visible = reviews.slice(start, start + perPage);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <div>
            <p className="eyebrow mb-3">
              <span className="hairline pb-2 text-xs md:text-sm">Wall of Appreciation</span>
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
              Trusted by clients across BC.
            </h2>
          </div>
          <a
            href="https://www.google.com/search?q=ageless+living+wellness+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-clinic-teal hover:text-foreground transition-colors"
          >
            Read all on Google →
          </a>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current == null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchStartX.current = null;
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {visible.map((r, i) => (
                <ReviewCard key={`${page}-${i}`} r={r} />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-border text-foreground hover:border-clinic-teal hover:text-clinic-teal transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > page ? 1 : -1);
                    setPage(i);
                  }}
                  aria-label={`Page ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === page ? "w-8 bg-foreground" : "w-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonials"
              className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-border text-foreground hover:border-clinic-teal hover:text-clinic-teal transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
