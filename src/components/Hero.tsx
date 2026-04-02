import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";
import { Link } from "react-router-dom";
import portrait1 from "@/assets/home-1.jpg";
import portrait2 from "@/assets/home-2.jpg";
import portrait3 from "@/assets/home-3.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto section-padding pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-foreground leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              Discover your
              <br />
              best self, at any age.
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              With Ageless Living™ wide range of modern treatments and services, there is something for everyone.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <Link
                to="/book"
                className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              >
                Free consultation
              </Link>
            </motion.div>
          </div>

          {/* Right: 3 portrait photos */}
          <motion.div
            className="relative flex gap-3 justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            {[portrait1, portrait2, portrait3].map((src, i) => (
              <div
                key={i}
                className={`w-[30%] max-w-[200px] rounded-2xl overflow-hidden ${
                  i === 1 ? "mt-8" : i === 2 ? "mt-4" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Client portrait ${i + 1}`}
                  className="w-full h-full object-cover object-top aspect-[3/4]"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}

            {/* Floating badges */}
            <motion.div
              className="absolute -bottom-4 left-0 right-0 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border shadow-sm text-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  Rated on Google · <span className="text-foreground font-medium">(287)</span>
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border shadow-sm text-sm">
                <Check className="h-3.5 w-3.5 text-foreground" />
                <span className="text-muted-foreground">Certified wellness clinic</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
