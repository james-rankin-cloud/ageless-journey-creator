import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import clinicImg from "@/assets/our-locations-home.jpg";
import skinImg from "@/assets/services-1.jpg";
import hormoneImg from "@/assets/hormone-balancing.jpg";
import biohackingImg from "@/assets/biohacking.jpg";
import weightImg from "@/assets/health-weight.jpg";
import mask1 from "@/assets/shop-1.jpeg";

const galleryImages = [clinicImg, skinImg, hormoneImg, biohackingImg, weightImg, mask1];

export default function BrandStatement() {
  return (
    <section className="section-y bg-card overflow-hidden">
      <div className="container mx-auto section-padding mb-14">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-5">
            With us, you are
            <br />
            seen & heard
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            We meet you with presence, honesty, and care. Small details matter, and with us, they make a difference.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
          >
            Book a time
          </Link>
        </motion.div>
      </div>

      {/* Auto-scrolling gallery */}
      <div className="relative">
        <div className="flex animate-scroll-left gap-4 w-max hover:[animation-play-state:paused]">
          {[...galleryImages, ...galleryImages].map((src, i) => (
            <div key={i} className="w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src={src}
                alt={`Clinic atmosphere ${(i % galleryImages.length) + 1}`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
