import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import icon from "@/assets/ageless-icon.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-wellness-cream">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ageless Living™ Wellness Centre interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-card/30" />
      </div>

      <div className="relative container mx-auto section-padding pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={icon} alt="" className="h-12 w-12 mb-6" aria-hidden />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.08]"
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Discover your best self,{" "}
            <span className="text-gradient">at any age.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Modern treatments • Expert guidance • Langley • Victoria • Kelowna
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#journey"
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
            >
              Start Your Journey
            </a>
            <a
              href="#booking"
              className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-[0.97]"
            >
              Book Now
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <strong className="text-foreground">4.9</strong> Google Reviews
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              Serving British Columbia
            </span>
            <span className="text-muted-foreground/60">10+ Years of Excellence</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
