import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    text: "The hormone balancing program changed my life. I feel like myself again after years of fatigue and mood swings.",
    location: "Langley",
    service: "Hormone Balancing",
  },
  {
    name: "David R.",
    text: "Dr. Lim and the team are incredibly knowledgeable. The biohacking treatments have given me energy I haven't felt in decades.",
    location: "Kelowna",
    service: "Biohacking",
  },
  {
    name: "Jennifer T.",
    text: "Sarita is an absolute artist. My skin has never looked better. The clinic is beautiful and welcoming.",
    location: "Victoria",
    service: "Skin Rejuvenation",
  },
  {
    name: "Mark H.",
    text: "After struggling with weight for years, the Health Weight program finally gave me a sustainable plan that works. Down 30 lbs!",
    location: "Langley",
    service: "Health Weight",
  },
  {
    name: "Lisa K.",
    text: "From the first consultation to follow-up, every step was professional and caring. I recommend Ageless Living to everyone.",
    location: "Victoria",
    service: "Initial Consultation",
  },
  {
    name: "Robert W.",
    text: "The IV therapy sessions have been incredible for my recovery and focus. The staff make you feel right at home.",
    location: "Kelowna",
    service: "Biohacking",
  },
];

const AUTO_MS = 7000;

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((i) => (i + delta + reviews.length) % reviews.length);
    },
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, go]);

  const review = reviews[index];

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-3 md:mb-4">
            <span className="hairline pb-2 text-xs md:text-sm">What Clients Say</span>
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            Real results, real people.
          </h2>
        </motion.div>

        <div
          className="relative max-w-3xl mx-auto"
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
          aria-label="Client reviews"
        >
          <div className="relative min-h-[280px] md:min-h-[260px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-background border border-border/60 shadow-sm p-8 md:p-12 text-center"
              >
                <Quote className="h-8 w-8 text-clinic-teal mx-auto mb-5 opacity-80" />
                <div className="flex gap-0.5 justify-center mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 max-w-xl mx-auto">
                  "{review.text}"
                </p>
                <p className="font-semibold text-sm text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {review.service} · {review.location}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-between mt-6 md:mt-8">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground hover:border-clinic-teal hover:text-clinic-teal transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-foreground"
                      : "w-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground hover:border-clinic-teal hover:text-clinic-teal transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
