import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const locations = [
  { name: "Langley", address: "20689 Fraser Hwy, Langley, BC V3A 4G4", phone: "(604) 427-0120" },
  { name: "Victoria", address: "740 Hillside Ave #120, Victoria, BC V8T 1Z4", phone: "(250) 590-5321" },
  { name: "Kelowna", address: "1708 Dolphin Ave #101, Kelowna, BC V1Y 9S4", phone: "(250) 868-9289" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "", location: "Langley" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Ageless Living™ — Get in Touch</title>
        <meta name="description" content="Contact Ageless Living™ Wellness Centre. Reach us at our Langley, Victoria, or Kelowna locations." />
      </Helmet>

      <section className="pt-32 pb-24 bg-card">
        <div className="container mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Contact Us</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.1]">Let's Start a Conversation</h1>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-accent rounded-2xl p-8 text-center">
                  <p className="text-lg font-bold text-foreground mb-2">Thank you!</p>
                  <p className="text-muted-foreground">We've received your message and will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="Your Name" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="email" placeholder="Email Address" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <select value={formState.location} onChange={(e) => setFormState({ ...formState, location: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                    {locations.map((l) => <option key={l.name}>{l.name}</option>)}
                  </select>
                  <textarea placeholder="Your Message" rows={4} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                  <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]">
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-foreground">Our Locations</h2>
              {locations.map((l) => (
                <div key={l.name} className="bg-secondary rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-3">{l.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{l.address}</p>
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" />{l.phone}</p>
                    <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />info@agelessliving.com</p>
                  </div>
                </div>
              ))}

              <div className="bg-accent rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-2">Stay in the Loop</h3>
                <p className="text-sm text-muted-foreground mb-4">Get wellness tips and exclusive offers.</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold active:scale-95 transition-transform">Subscribe</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
