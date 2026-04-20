import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BEFORE_PHOTO, AFTER_PHOTO } from "@/lib/placeholders";

/**
 *  <BeforeAfterSlider />
 *  ------------------------------------------------------------------
 *  A draggable before / after image comparison. Supports pointer,
 *  touch and keyboard (←/→) interaction.
 *
 *  SWAPPING IMAGES
 *    • Pass `before=` and `after=` as props for per-instance control.
 *    • Or swap the global defaults in  `src/lib/placeholders.ts`
 *      (BEFORE_PHOTO / AFTER_PHOTO).
 *    • For production photos, prefer <800×1000 .webp files under
 *      200 KB, saved under `public/photos/<service>/`.
 *
 *  USAGE
 *    <BeforeAfterSlider before="/photos/x-before.webp"
 *                       after="/photos/x-after.webp"
 *                       alt="Botox forehead 3-month result"
 *                       aspect="4/3" />
 */

type Props = {
  before?: string;
  after?: string;
  alt?: string;
  /** Aspect ratio, e.g. "4/3" | "1/1" | "3/4" */
  aspect?: string;
  /** Initial handle position (0-100, % from left) */
  initial?: number;
  className?: string;
};

export default function BeforeAfterSlider({
  before = BEFORE_PHOTO,
  after = AFTER_PHOTO,
  alt = "Treatment comparison — before and after",
  aspect = "4/3",
  initial = 50,
  className = "",
}: Props) {
  const [pos, setPos] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromEvent = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, raw)));
  }, []);

  // Global listeners while dragging
  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => updateFromEvent(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, updateFromEvent]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none overflow-hidden rounded-2xl md:rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(15,60,74,0.25)] ring-1 ring-clinic-teal/10 bg-clinic-teal-light ${className}`}
      style={{ aspectRatio: aspect }}
      onPointerDown={(e) => {
        setDragging(true);
        updateFromEvent(e.clientX);
      }}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
      }}
    >
      {/* AFTER image — bottom layer */}
      <img
        src={after}
        alt={`${alt} — after`}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* BEFORE image — clipped to handle position */}
      <div
        className="absolute inset-0 h-full"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={`${alt} — before`}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full object-cover"
          style={{
            width: containerRef.current
              ? `${containerRef.current.clientWidth}px`
              : "100%",
          }}
        />
      </div>

      {/* Corner labels */}
      <span className="absolute top-4 left-4 rounded-full bg-black/55 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
        Before
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground">
        After
      </span>

      {/* Divider line + handle */}
      <div
        className="pointer-events-none absolute inset-y-0"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.25)]" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-foreground/10"
          animate={{ scale: dragging ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronLeft className="h-4 w-4 text-clinic-teal" />
          <ChevronRight className="h-4 w-4 text-clinic-teal" />
        </motion.div>
      </div>
    </div>
  );
}
