import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import skinImg from "@/assets/home-4.jpg";

export default function PromoPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("promo-seen")) return;
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setShow(false);
    sessionStorage.setItem("promo-seen", "1");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Image */}
            <div className="hidden md:block">
              <img src={skinImg} alt="Promotion" className="w-full h-full object-cover" />
            </div>

            {/* Right: Content */}
            <div className="p-8 relative">
              <button
                onClick={close}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4 text-foreground" />
              </button>

              <span className="label-sm text-foreground/60 mb-3 block">New Client Offer</span>
              <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                10% off your first visit
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Experience the Ageless Living difference. Book your first treatment and enjoy an exclusive welcome discount.
              </p>
              <div className="mb-6 px-4 py-2.5 rounded-full bg-secondary border border-border inline-flex items-center gap-2 text-sm font-bold text-foreground tracking-wider">
                WELCOME10
              </div>
              <div>
                <Link
                  to="/book"
                  onClick={close}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
                >
                  Book a time
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
