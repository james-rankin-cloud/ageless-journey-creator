import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import TeamSection from "@/components/TeamSection";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", date: "", time: "" });

  return (
    <>
      <Helmet>
        <title>About Us | Ageless Living™ — Our Story & Team</title>
        <meta name="description" content="Learn about Ageless Living™ Wellness Centre — our philosophy, our expert team, and our commitment to helping you live better at any age." />
      </Helmet>

      {/* Hero */}
      <section className="pt-36 pb-20 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl"
          >
            <p className="label-sm mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.08]">
              With us, you are seen & heard
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Since 2012, Ageless Living™ has been BC's trusted destination for evidence-based aesthetic and wellness care. We combine medical expertise with genuine compassion — because how you feel matters just as much as how you look.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Our philosophy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe the best outcomes happen when patients understand the why behind their treatment — not just the what. Every protocol is physician-approved, evidence-based, and tailored to your unique biology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach is collaborative: your physician, aesthetician, and nutritionist work as one team so nothing falls through the cracks.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Our commitment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over a decade of trust, thousands of British Columbians, and three clinics across the province — Langley, Victoria, and Kelowna. Each location is designed for comfort and exceptional care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We don't believe in one-size-fits-all solutions. Your journey is unique, and your care should be too.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* Contact Form */}
      <section className="section-y bg-card">
        <div className="container mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Get in touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Have a question or ready to book? Fill out the form and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                  />
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
                >
                  <Send className="h-4 w-4" /> Send message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="rounded-2xl overflow-hidden min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.0!2d-122.6586!3d49.1784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzQyLjIiTiAxMjLCsDM5JzMxLjAiVw!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ageless Living Langley location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
