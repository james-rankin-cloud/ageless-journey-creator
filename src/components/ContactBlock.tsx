import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Mail } from "lucide-react";

export default function ContactBlock() {
  return (
    <section className="section-y bg-card">
      <div className="container mx-auto section-padding">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact us</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Do you have questions or want to book a time? We are here and ready to help you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              >
                <Mail className="h-4 w-4" />
                Write to us
              </Link>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                Chat with us
              </button>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-sm text-muted-foreground"
          >
            <div>
              <p className="text-foreground font-medium mb-1">Address</p>
              <p>415-20178 96th Ave</p>
              <p>Langley, BC V1M 0B2</p>
            </div>
            <div>
              <p className="text-foreground font-medium mb-1">Phone</p>
              <a href="tel:+12363266830" className="hover:text-foreground transition-colors">+1 (236) 326-6830</a>
            </div>
            <div>
              <p className="text-foreground font-medium mb-1">Parking</p>
              <p>Free parking available</p>
            </div>
            <div>
              <p className="text-foreground font-medium mb-1">Hours</p>
              <p>Mon. to Fri. — 9 AM to 5 PM</p>
              <p>Saturday — By appointment</p>
              <p>Sunday — Closed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
