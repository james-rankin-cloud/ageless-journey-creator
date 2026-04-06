import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import logo from "@/assets/footer-logo.png";

const locations = [
  { name: "Langley", address: "20689 Fraser Hwy, Langley, BC V3A 4G4", phone: "(604) 427-0120" },
  { name: "Victoria", address: "740 Hillside Ave #120, Victoria, BC V8T 1Z4", phone: "(250) 590-5321" },
  { name: "Kelowna", address: "1708 Dolphin Ave #101, Kelowna, BC V1Y 9S4", phone: "(250) 868-9289" },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "", location: "Langley" });

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's Start a Conversation</h2>

            <form
              onSubmit={(e) => { e.preventDefault(); }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <select
                value={formState.location}
                onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {locations.map((l) => (
                  <option key={l.name}>{l.name}</option>
                ))}
              </select>
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Locations list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h3 className="text-xl font-bold text-foreground">Our Locations</h3>
            {locations.map((l) => (
              <div key={l.name} className="bg-secondary rounded-2xl p-6">
                <h4 className="font-bold text-foreground mb-3">{l.name}</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{l.address}</p>
                  <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" />{l.phone}</p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />info@agelessliving.com</p>
                </div>
              </div>
            ))}

            {/* Newsletter */}
            <div className="bg-accent rounded-2xl p-6">
              <h4 className="font-bold text-foreground mb-2">Stay in the Loop</h4>
              <p className="text-sm text-muted-foreground mb-4">Get wellness tips and exclusive offers.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold active:scale-95 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Ageless Living™" className="h-8" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ageless Living™ Wellness Centre. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="https://agelessliving.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Official Site</a>
            <a href="https://ageless-store.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Shop</a>
            <a href="https://ageless.janeapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Book Online</a>
          </div>
        </div>
      </div>
    </section>
  );
}
