import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Info, Zap, Scale, FlaskConical, Sparkles, ExternalLink } from "lucide-react";

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

const teamMembers = [
  {
    name: "Shelley McBride",
    role: "MOA, Clinic Manager",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDylm8Fw5ylj5CziqJ5EMslGTz9jXcmGsKNapwYM_K0lJiA5uhpgl6-6q9ni0Q3ZmKkHQycTWOxADVL5aIhc2SPWubytyapuzvGlULRlPM2s93zLvJp0R9Xu1ytoFW5AgjSqSwB2j6U6i56mdmbXS1PtR9AXiKI5__q5SwVSU_c2NREqxZPx4pfxl_hYg6b5rhpjGFTx4wMjqQOLreQWZo9CuaY8DnTB1_scUwr_4Gd8lnoCbyJPl8iGlY2P_ghSaQaB9SvGxT4gGI",
  },
  {
    name: "Yvonne Ng",
    role: "Certified Medical Aesthetician",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQYi7jRkE01HcLF5qt7iYFvK4l354Abx9vuOmR429jWymOFxtmuDOCGV6Ct2ZnFqHvhii7HbyCKrqDbRReRaAEXwhV6oUKiq4gWGIvQeOX0lInsg9q7MM6MSM5T0ncTtnm8GVhHDctC6ED0BfX-KhQEgz8XW4mq2Npzyaer9QCSlYIBmlXP_Xfcl-XJ1-6GDprfYCTo23nW9I-a2sl5fgNLLT1_nbIeySnnevCmY4u4mUXXyJTdbyH0M2V4GcD755fUcDOry_-3Qw",
  },
  {
    name: "Avnit Bhullar",
    role: "Medical Aesthetician",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFFekFq84n8diDb_M3Ku4SRYIjHIej4vCFvUPyfsN6xUStY7DK80ECoJ8LTsKYWq0IUxu4ANGZ6PClvQ6tdMtqQr5DHj1iuZAKGZGI00CCz84o0LKiY9FrlC30p9t8jWRcFoDDgwX6w88nkcQBQ1iJYZP55BcCQwuZY3mPRSLOtI9Bx1A0gJh5WZ4ZBk5gIM8_Z2buo7XIBPTQZhX0ayHE63niO2CT1TYlo_g3t6YqgcOZf3oZFKiun1Dd5sEWhHxgUx0ZizrxkpY",
  },
  {
    name: "Michael Forbes, BSc Pharm",
    role: "Owner, Pharmacist, Certified in Hormone Restoration",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvAGaGfI_Z3N6SAzNypttQYkatars93iS-hZttjKc5-k3gV-sEi1WysbdKGmvr4_LlR6rRZ4d8Oz7c-AUPsUCvu7zWzyCAm_DID1pEIWR1BQeqJpfpzrdaCfpyYOW5TP-U3FRu8EbL0HadaBwKZ3MvJIg52cvWF7F_4ISrpwjKwGuGq2xguVBoHB_9Aq-nox0sz6WplBa3bju2w-3_3nAE8h65cMPtt-bRzR-5kG4Uj1dsQWYaD45Vzf2ueSF4OWvvuN8uUnpXYoY",
  },
  {
    name: "Dr. Jean Paul Lim, MD, FRCPC",
    role: "Owner, Internal Medicine, Complex Care, and Longevity Specialist",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB_03kcfzVw4nxqwkS6arONW9SPtvAlGc8nHzCWIuowwHuzAy8A3lr1-1T3ZS_u402vAQ0VmHM_b4I_0SfPmrCfKN1DyJrSnx8w39eWIN7YO49V0xTWKNgI4CGAvrJ77haoE0yqOZI1_yxmZJ28AbvWksddrVU5Xngu4QeV083my39kBt1BVV5IQEISEqVjitgSIdZ3QspfWTJCx89q-pF1-5sO8beY2Nm8ZLtjimqjsVNxgMgAq7Sj8thoMKHwcnCd13DoZppU40",
  },
];

export default function LangleyPage() {
  return (
    <>
      <Helmet>
        <title>Langley Clinic | Ageless Living - BC Wellness Centre</title>
        <meta
          name="description"
          content="Visit Ageless Living Langley Clinic at 415-20178 96 Ave. Expert aesthetic and functional medicine services including skin rejuvenation, hormone balancing, and biohacking."
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
                Our Sanctuary
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-[1.05]">
                Langley Clinic
              </h1>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-clinic-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground text-sm">Address</p>
                    <p className="text-muted-foreground text-sm">415-20178 96 Ave, Langley, BC V1M 0B2</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-clinic-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground text-sm">Phone</p>
                    <p className="text-muted-foreground text-sm">+1 (236) 326-6830</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-clinic-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">langley@agelessliving.ca</p>
                  </div>
                </div>

                <div className="bg-secondary/50 p-5 rounded-xl border-l-4 border-clinic-teal">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-bold text-clinic-teal">Note:</span> Hours may vary due to
                    weather or staff training. We recommend calling ahead to confirm we are open.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/book?location=langley"
                  className="inline-flex items-center gap-2 bg-clinic-teal text-white rounded-full px-6 py-3 text-sm font-bold tracking-tight shadow-lg hover:shadow-xl transition-all"
                >
                  Book Consultation
                </Link>
                <a
                  href="https://maps.google.com/?q=415-20178+96+Ave,+Langley,+BC+V1M+0B2"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJpUD9zmlTasOajvYU3X_tSzbow7KXWiuEHEd7Ha0uab1ikXhLM1d3GLwdoMNtcQ0AEAZuLaDT_sykIxxYIswYrzYdh0AU6OmzBhfgxhq5qmni_s7jINuZYfEzMotxdz-CNXHnBMP2W_TqB3ktqEiYz_prVtHpFda3me-Zq1AaKnMwm5rxJeztCl324AWqfyCA7-Ti7_hvq-G1-TAygYWBxPpmeHDnfsmPic0Nya7a4Ysqs4cTYeK407WlebBsNBQxqwmFJRNyies"
                  alt="Modern minimalist aesthetic clinic reception in Langley with soft natural lighting and warm wood accents"
                  className="w-full h-full object-cover"
                  width={680}
                  height={850}
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card p-3 rounded-xl shadow-xl hidden md:block border border-border/50">
                <div className="w-40 h-28 rounded-lg overflow-hidden grayscale">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiwGCQmcpoC5qlH-wTW83syX7hBSaJ0ETDbY-BBe8nAM5WvTi4CuYiEGYG-efaQenQ6fyP9SVLXWj4SaRHKJfVAKcJ2dpna0xdNEGkgoxgD5aDbDEqPGbFv4H77Es71b8Xe7M7lgx1wFftdKCAXKZ86FYi2eQzBJYCyc8JVa-P-SK_6jXStM67PXHwExed3-T9V4_fDJMgta6rrnkoKxfrT0SCuxIpDhNja0lqxSxoXx4Q4SdkaaMX2qwQu15O7S4vf0tLeDmnZe4"
                    alt="Suburban landscape of Langley BC with lush greenery"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-[9px] font-bold uppercase tracking-widest mt-2 text-clinic-teal">
                  Langley, BC
                </p>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-3">
              Treatments available in Langley
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.123456789!2d-122.67!3d49.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA5JzAwLjAiTiAxMjLCsDQwJzEyLjAiVw!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Langley Clinic Location"
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
              Meet the Langley Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-5 relative max-w-[280px] mx-auto">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold mb-1 text-foreground text-center">{member.name}</h4>
                <p className="text-clinic-teal text-[10px] font-bold uppercase tracking-wider text-center">
                  {member.role}
                </p>
              </motion.div>
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
              <h2 className="text-2xl md:text-4xl font-bold text-background tracking-tighter">
                Ready to begin your journey?
              </h2>
              <p className="text-background/60 text-base max-w-xl mx-auto">
                Book your consultation at our Langley clinic today and discover the path to your
                best self.
              </p>
              <Link
                to="/book?location=langley"
                className="inline-flex items-center gap-2 bg-clinic-teal text-white rounded-full px-8 py-4 font-bold text-base hover:opacity-90 transition-all shadow-xl"
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
