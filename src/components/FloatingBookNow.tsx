import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingBookNow() {
  return (
    <motion.a
      href="#booking"
      className="fixed bottom-6 left-6 z-40 hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/35 transition-all duration-200 active:scale-[0.97]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Calendar className="h-4 w-4" />
      Book Now
    </motion.a>
  );
}
