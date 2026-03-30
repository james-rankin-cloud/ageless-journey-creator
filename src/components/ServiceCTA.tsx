import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as const;

interface ServiceCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function ServiceCTA({
  title = "Ready to start your aesthetic journey?",
  description = "Book a comprehensive consultation with our medical team at any of our three locations.",
  primaryButtonText = "Book Online",
  primaryButtonLink = "/book",
  secondaryButtonText = "View Our Locations",
  secondaryButtonLink = "/about-us",
}: ServiceCTAProps) {
  return (
    <section className="py-20 md:py-24 bg-clinic-teal">
      <div className="container mx-auto section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            {title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to={primaryButtonLink}
              className="bg-white text-clinic-teal px-10 py-4 rounded-full font-bold shadow-xl hover:bg-stone-50 transition-all"
            >
              {primaryButtonText}
            </Link>
            <Link
              to={secondaryButtonLink}
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
