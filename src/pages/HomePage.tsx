import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, FlaskConical, Zap, Scale } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const treatments = [
  {
    icon: Sparkles,
    title: "Skin Rejuvenation",
    description: "Restore your natural glow with our advanced aesthetic therapies.",
    href: "/services#skin-rejuvenation",
  },
  {
    icon: FlaskConical,
    title: "Hormone Balancing",
    description: "Optimize your internal harmony through clinical expertise.",
    href: "/services#hormone-balancing",
  },
  {
    icon: Zap,
    title: "Biohacking",
    description: "Unlock peak performance with evidence-based longevity tools.",
    href: "/services#biohacking",
  },
  {
    icon: Scale,
    title: "Health Weight",
    description: "A sustainable wellness journey tailored to your unique physiology.",
    href: "/services#health-weight",
  },
];

const locations = [
  { name: "Victoria Clinic", href: "/locations/victoria" },
  { name: "Langley Clinic", href: "/locations/langley" },
  { name: "Kelowna Clinic", href: "/locations/kelowna" },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Ageless Living™ Wellness Centre",
    description: "Modern treatments, expert guidance, and a commitment to helping you live better — at any age. Serving Langley, Victoria, and Kelowna, BC.",
    url: "https://agelessliving.com",
    image: "https://agelessliving.com/wp-content/uploads/2022/06/ageless-living-logo.png",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "287", bestRating: "5" },
    address: [
      { "@type": "PostalAddress", streetAddress: "415-20178 96th Ave", addressLocality: "Langley", addressRegion: "BC", postalCode: "V1M 0B2", addressCountry: "CA" },
      { "@type": "PostalAddress", streetAddress: "1708 Dolphin Ave #101", addressLocality: "Kelowna", addressRegion: "BC", postalCode: "V1Y 9S4", addressCountry: "CA" },
      { "@type": "PostalAddress", streetAddress: "740 Hillside Ave #120", addressLocality: "Victoria", addressRegion: "BC", postalCode: "V8T 1Z4", addressCountry: "CA" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Ageless Living™ Wellness Centre | Modern Treatments in BC</title>
        <meta name="description" content="Discover your best self at any age. Skin rejuvenation, hormone balancing, biohacking & more across Langley, Victoria & Kelowna." />
        <link rel="canonical" href="https://agelessliving.com" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section with Video */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-secondary/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            {/* Left: Text Content */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tighter leading-[1] mb-6">
                Discover your best self, <br />
                <span className="text-clinic-teal italic font-medium">at any age.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
                With Ageless Living™ wide range of modern treatments and services there is something for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/about-us"
                  className="bg-clinic-teal hover:bg-clinic-teal/90 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-clinic-teal/10 text-center"
                >
                  Explore our Locations
                </Link>
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-border text-foreground font-bold text-sm uppercase tracking-widest hover:bg-secondary/50 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Video */}
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-video max-w-md lg:max-w-lg ml-auto shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/human_graphic.webm" type="video/webm" />
                <source src="/human_graphic.mp4" type="video/mp4" />
              </video>
              {/* Soft gradient overlay on left edge */}
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-14 gap-6">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter mb-6">
                Our Treatments
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Picture Your Possible. Ageless Living™ brings together the best of what's possible: The guidance, tools and technologies to help you live better, longer.
              </p>
            </motion.div>
            <Link
              to="/services"
              className="group flex items-center gap-2 text-clinic-teal font-bold uppercase tracking-widest text-sm border-b-2 border-clinic-teal/20 pb-1 hover:border-clinic-teal transition-all shrink-0"
            >
              View All Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease }}
              >
                <Link
                  to={treatment.href}
                  className="group relative p-10 rounded-xl bg-secondary/30 transition-all hover:bg-clinic-teal hover:-translate-y-2 border border-border/10 block h-full"
                >
                  <treatment.icon className="w-10 h-10 text-clinic-teal mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-white transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {treatment.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-20 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter mb-6">
                Our Locations
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light mb-8">
                Serving British Columbia for over a decade. Ageless Living™ now has three locations in BC: Victoria, Langley, and Kelowna.
              </p>
              <div className="space-y-4">
                {locations.map((location) => (
                  <Link
                    key={location.name}
                    to={location.href}
                    className="flex items-center justify-between p-6 rounded-xl bg-background border border-border/20 hover:border-clinic-teal transition-all cursor-pointer group"
                  >
                    <span className="text-xl font-bold group-hover:text-clinic-teal transition-colors">
                      {location.name}
                    </span>
                    <ArrowRight className="w-5 h-5 text-clinic-teal group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-square lg:h-[600px] shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcwqCZmwJA0EcX5w59fkVeRpz6k7kL3aHr5G6196CrvPe2DRivF3_PmFO9hNs6i65BChEowHyZJiS98AA0Ne69XwMkyL4S1S4rJCjBFKiXf22efKdzv9bITXYmrB_PI8t_emry4ei3bD4KTEqtA6WxPxhylsZcqELhsIcUfocq4jYs0g1CF6tMChbXromhoVF_pBk-MCXwQsOqDelITBMY7OKkBHga4R-th8LHeqGM6O9_dp6rTdw-0AXZpjZOqSm8nG7AVUF494U"
                alt="Ageless Living clinical environment in British Columbia"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-clinic-teal/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership/Expertise Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-16 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-clinic-teal/10 text-clinic-teal text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter mb-8 leading-[1.1]">
              Clinical Excellence & Collaborative Expertise
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light mb-8">
              Our clinical sanctuary is powered by a multidisciplinary team of physicians, specialists, and clinical managers across Langley, Victoria, and Kelowna. Together, we bring decades of experience to your longevity journey, ensuring every treatment plan meets the highest standards of safety and clinical efficacy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/about-us"
                className="px-8 py-4 rounded-full bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-clinic-teal transition-all flex items-center gap-3"
              >
                Meet our full team
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-full border border-border text-foreground text-sm font-bold uppercase tracking-widest hover:bg-secondary/50 transition-all"
              >
                Clinical Standards
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
