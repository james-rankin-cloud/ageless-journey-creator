import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Info, Zap, Scale, FlaskConical, Sparkles, ExternalLink } from "lucide-react";
import { getStaffByLocation, getStaffAltText } from "@/data/staffData";

const ease = [0.16, 1, 0.3, 1] as const;

const treatments = [
  {
    icon: Zap,
    title: "Biohacking",
    desc: "Developed by leaders in the medical and pharmaceutical field.",
  },
  {
    icon: Scale,
    title: "Health Weight",
    desc: "Physician-supervised Health Weight program approaches your weight concerns on an individual holistic basis for sustainable weight loss.",
  },
  {
    icon: FlaskConical,
    title: "Hormone Balancing",
    desc: "Board-certified in anti-aging and regenerative medicine and help both men and women.",
  },
  {
    icon: Sparkles,
    title: "Skin Rejuvenation",
    desc: "Certified, experienced skin health experts offer a broad selection of treatments to best suit your unique needs.",
  },
];

const teamMembers = getStaffByLocation("kelowna");

export default function KelownaPage() {
  return (
    <>
      <Helmet>
        <title>Kelowna Clinic | Ageless Living - BC Wellness Centre</title>
        <meta
          name="description"
          content="Visit Ageless Living Kelowna Clinic at 102-3320 Richter Street. Expert aesthetic and functional medicine services including skin rejuvenation, hormone balancing, and biohacking."
        />
      </Helmet>

      {/* HERO */}
      <section className="pt-28 pb-12 md:pb-20 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="text-clinic-teal font-bold tracking-[0.2em] uppercase text-[10px]">
                Visit Ageless Living
              </span>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground leading-[1.05]">
                Kelowna Clinic
              </h1>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-clinic-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground text-sm">Address</p>
                    <p className="text-muted-foreground text-sm">102-3320 Richter Street, Kelowna, BC V1W 4V5</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-clinic-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground text-sm">Phone</p>
                    <p className="text-muted-foreground text-sm">+1 (778) 760-9827</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-clinic-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">kelowna@agelessliving.ca</p>
                  </div>
                </div>

                <div className="bg-secondary/50 p-5 rounded-xl border-l-4 border-clinic-teal">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-bold text-clinic-teal">Online Booking:</span> We offer online booking for Aesthetic treatments.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/book?location=kelowna"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-clinic-teal to-cyan-500 text-white rounded-full px-6 py-3 text-sm font-bold tracking-tight shadow-lg shadow-cyan-500/20 hover:from-clinic-teal/90 hover:to-cyan-500/90 transition-all"
                >
                  Book Consultation
                </Link>
                <a
                  href="https://maps.google.com/?q=102-3320+Richter+Street,+Kelowna,+BC+V1W+4V5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-6 py-3 text-sm font-bold tracking-tight shadow-lg hover:shadow-xl transition-all"
                >
                  Get Directions <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <div className="aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=680&h=850&fit=crop"
                  alt="Modern minimalist aesthetic clinic reception in Kelowna"
                  className="w-full h-full object-cover"
                  width={680}
                  height={850}
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card p-3 rounded-xl shadow-xl hidden md:block border border-border/50">
                <div className="w-40 h-28 rounded-lg overflow-hidden grayscale">
                  <img
                    src="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=250&h=170&fit=crop"
                    alt="Scenic view of Kelowna BC with Okanagan Lake"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-[9px] font-bold uppercase tracking-widest mt-2 text-clinic-teal">
                  Kelowna, BC
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Ageless Living™</span> brings together the best of what's possible: The guidance, tools and technologies to help you live better, longer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
              Treatments available in Kelowna
            </h2>
            <p className="text-clinic-teal text-xl font-light italic">
              "Picture Your Possible."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {treatments.map((treatment, i) => {
              const Icon = treatment.icon;
              return (
                <motion.div
                  key={treatment.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="bg-card p-6 rounded-xl hover:shadow-xl transition-all duration-500 group border border-border/40"
                >
                  <div className="w-10 h-10 bg-clinic-teal-light rounded-full flex items-center justify-center mb-5 text-clinic-teal group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{treatment.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{treatment.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAP & HOURS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <motion.div
              className="lg:col-span-2 rounded-[1.75rem] overflow-hidden shadow-inner bg-secondary h-[420px] relative"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.123456789!2d-119.49!3d49.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDUyJzQ4LjAiTiAxMTnCsDI5JzI0LjAiVw!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kelowna Clinic Location"
                className="grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-clinic-teal text-white p-3 rounded-full shadow-2xl">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-clinic-teal text-white p-10 rounded-[1.75rem] flex flex-col justify-center"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <h3 className="text-2xl font-bold mb-5">Our Clinic Hours</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-bold">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>Saturday</span>
                  <span className="font-bold">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Sunday</span>
                  <span className="font-bold">Closed</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-2 text-xs opacity-80">
                <Info className="w-3.5 h-3.5" />
                <span>Walk-ins based on availability.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="text-clinic-teal font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">
              Excellence in Care
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Meet the Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <Link key={member.slug} to={`/our-team/${member.slug}`}>
                <motion.div
                  className="group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-5 relative max-w-[280px] mx-auto">
                    <img
                      src={member.image}
                      alt={getStaffAltText(member)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-foreground text-center">{member.name}</h4>
                  <p className="text-clinic-teal text-[10px] font-bold uppercase tracking-wider text-center">
                    {member.role}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto section-padding">
          <motion.div
            className="max-w-3xl mx-auto bg-foreground text-center p-10 md:p-16 rounded-[2rem] relative overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-background tracking-tight">
                Ready to begin your journey?
              </h2>
              <p className="text-background/60 text-base max-w-xl mx-auto">
                Book your consultation at our Kelowna clinic today and discover the path to your
                best self.
              </p>
              <Link
                to="/book?location=kelowna"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-clinic-teal to-cyan-500 text-white rounded-full px-8 py-4 font-bold text-base hover:from-clinic-teal/90 hover:to-cyan-500/90 transition-all shadow-xl shadow-cyan-500/20"
              >
                Book Your Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
