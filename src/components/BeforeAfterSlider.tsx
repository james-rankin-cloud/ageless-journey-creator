import { useRef, useState, useCallback, useEffect, useLayoutEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  const target = useMotionValue(initial);
  const pos = useSpring(target, { stiffness: 320, damping: 32, mass: 0.5 });
  const clipLeft = useTransform(pos, (v) => `${v}%`);
  const [posValue, setPosValue] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return pos.on("change", (v) => setPosValue(v));
  }, [pos]);

  // Track container width so the "before" image renders at its true pixel
  // size — the old implementation read clientWidth synchronously during
  // render which was stale on the first paint.
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const updateFromEvent = useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const raw = ((clientX - rect.left) / rect.width) * 100;
      target.set(Math.max(0, Math.min(100, raw)));
    },
    [target]
  );

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => updateFromEvent(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging, updateFromEvent]);

  return (
    <div
      ref={containerRef}
      className={`group relative w-full select-none overflow-hidden rounded-2xl md:rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(15,60,74,0.25)] ring-1 ring-foreground/10 bg-secondary ${
        dragging ? "cursor-grabbing" : "cursor-grab"
      } ${className}`}
      style={{ aspectRatio: aspect, touchAction: "none" }}
      onPointerDown={(e) => {
        (e.target as Element).setPointerCapture?.(e.pointerId);
        setDragging(true);
        updateFromEvent(e.clientX);
      }}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(posValue)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") target.set(Math.max(0, target.get() - 4));
        if (e.key === "ArrowRight") target.set(Math.min(100, target.get() + 4));
      }}
    >
      {/* AFTER image — bottom layer, always at full width */}
      <img
        src={after}
        alt={`${alt} — after`}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none will-change-transform transition-transform duration-700 group-hover:scale-[1.02]"
      />

      {/* BEFORE image — clipped to spring-animated handle position */}
      <motion.div
        className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
        style={{ width: clipLeft }}
      >
        <img
          src={before}
          alt={`${alt} — before`}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full object-cover object-center max-w-none will-change-transform"
          style={{ width: width ? `${width}px` : "100%" }}
        />
      </motion.div>

      {/* Soft top-fade for label legibility */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/25 to-transparent" />

      {/* Corner labels */}
      <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white pointer-events-none">
        Before
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground pointer-events-none">
        After
      </span>

      {/* Divider line + handle */}
      <motion.div
        className="pointer-events-none absolute inset-y-0"
        style={{ left: clipLeft }}
      >
        <div className="absolute inset-y-0 -translate-x-1/2 w-px bg-white shadow-[0_0_14px_rgba(0,0,0,0.35)]" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-[0_8px_28px_-6px_rgba(0,0,0,0.45)] ring-1 ring-foreground/10"
          animate={{ scale: dragging ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 340, damping: 22 }}
        >
          <ChevronLeft className="h-3.5 w-3.5 text-foreground" />
          <ChevronRight className="h-3.5 w-3.5 text-foreground" />
        </motion.div>
      </motion.div>
    </div>
  );
}
