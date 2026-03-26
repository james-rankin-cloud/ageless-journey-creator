import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";
import clinicImg from "@/assets/hero-clinic.jpg";
import skinImg from "@/assets/treatment-skin.jpg";

export default function BentoBlock() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(5, Math.min(95, x)));
    },
    []
  );

  return (
    <section className="section-y bg-background">
      <div className="container mx-auto section-padding">
        <div className="grid md:grid-cols-5 gap-4">
          {/* Card A: Dark ambient card (3 cols) */}
          <motion.div
            className="md:col-span-3 relative rounded-2xl overflow-hidden min-h-[400px] flex items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={clinicImg} alt="Ageless Living clinic" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            <div className="relative p-8 md:p-10 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Modern beauty with tender care
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                We use the latest techniques, high-quality products, and equipment to deliver spectacular results tailored to your unique needs.
              </p>
            </div>
          </motion.div>

          {/* Card B: Before/After slider (2 cols) */}
          <motion.div
            className="md:col-span-2 relative rounded-2xl overflow-hidden min-h-[400px] cursor-ew-resize select-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            ref={containerRef}
            onPointerDown={() => setDragging(true)}
            onPointerUp={() => setDragging(false)}
            onPointerLeave={() => setDragging(false)}
            onPointerMove={(e) => dragging && handleMove(e.clientX)}
          >
            {/* After image (full) */}
            <img
              src={skinImg}
              alt="After treatment"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            {/* Before image (clipped, desaturated) */}
            <img
              src={skinImg}
              alt="Before treatment"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.85] contrast-[0.9] sepia-[0.15]"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              draggable={false}
            />
            {/* Labels */}
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 text-xs font-medium text-foreground backdrop-blur-sm">Before</span>
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card/90 text-xs font-medium text-foreground backdrop-blur-sm">After</span>
            {/* Drag handle */}
            <div
              className="absolute top-0 bottom-0 z-10"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
              <div className="w-0.5 h-full bg-white/80" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center border border-border">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
