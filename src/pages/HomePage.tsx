import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, FlaskConical, Zap, Scale, MapPin, Phone } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const treatments = [
  {
    icon: Sparkles,
    title: "Skin Rejuvenation",
    description: "Restore your natural glow with our advanced aesthetic therapies.",
    href: "/services#skin-rejuvenation",
    gradient: "from-rose-500/10 to-orange-500/10",
    iconColor: "text-rose-500",
    hoverBg: "hover:bg-gradient-to-br hover:from-rose-500 hover:to-orange-500",
  },
  {
    icon: FlaskConical,
    title: "Hormone Balancing",
    description: "Optimize your internal harmony through clinical expertise.",
    href: "/services#hormone-balancing",
    gradient: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-500",
    hoverBg: "hover:bg-gradient-to-br hover:from-violet-500 hover:to-purple-500",
  },
  {
    icon: Zap,
    title: "Biohacking",
    description: "Unlock peak performance with evidence-based longevity tools.",
    href: "/services#biohacking",
    gradient: "from-clinic-teal/10 to-emerald-500/10",
    iconColor: "text-clinic-teal",
    hoverBg: "hover:bg-gradient-to-br hover:from-clinic-teal hover:to-emerald-500",
  },
  {
    icon: Scale,
    title: "Health Weight",
    description: "A sustainable wellness journey tailored to your unique physiology.",
    href: "/services#health-weight",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500",
    hoverBg: "hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-500",
  },
];

const locations = [
  {
    name: "Victoria Clinic",
    href: "/locations/victoria",
    address: "1-101 Burnside Rd W",
    city: "Victoria, BC",
    gradient: "from-clinic-teal/5 to-cyan-500/5",
    hoverGradient: "hover:from-clinic-teal/10 hover:to-cyan-500/10"
  },
  {
    name: "Langley Clinic",
    href: "/locations/langley",
    address: "415-20178 96th Ave",
    city: "Langley, BC",
    gradient: "from-violet-500/5 to-purple-500/5",
    hoverGradient: "hover:from-violet-500/10 hover:to-purple-500/10"
  },
  {
    name: "Kelowna Clinic",
    href: "/locations/kelowna",
    address: "102-3320 Richter Street",
    city: "Kelowna, BC",
    gradient: "from-amber-500/5 to-orange-500/5",
    hoverGradient: "hover:from-amber-500/10 hover:to-orange-500/10"
  },
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
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-gradient-to-br from-clinic-teal/5 via-background to-amber-50/30 pt-28 pb-16 lg:pt-32 lg:pb-20">
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-clinic-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            {/* Left: Text Content */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground tracking-tight leading-[1.05] mb-6">
                Discover your best self, <br />
                <span className="bg-gradient-to-r from-clinic-teal to-cyan-500 bg-clip-text text-transparent italic font-light">at any age.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
                With Ageless Living™ wide range of modern treatments and services there is something for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/about-us"
                  className="bg-gradient-to-r from-clinic-teal to-cyan-500 hover:from-clinic-teal/90 hover:to-cyan-500/90 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-cyan-500/25 text-center"
                >
                  Explore our Locations
                </Link>
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-bold text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
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
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-background via-clinic-teal/[0.02] to-background overflow-hidden">
        {/* Subtle decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-clinic-teal/30 to-transparent" />
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-14 gap-6">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-6">
                Our Treatments
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Picture Your Possible. Ageless Living™ brings together the best of what's possible: The guidance, tools and technologies to help you live better, longer.
              </p>
            </motion.div>
            <Link
              to="/services"
              className="group flex items-center gap-2 bg-gradient-to-r from-clinic-teal to-cyan-500 bg-clip-text text-transparent font-bold uppercase tracking-widest text-sm border-b-2 border-cyan-500/20 pb-1 hover:border-cyan-500 transition-all shrink-0"
            >
              View All Services
              <ArrowRight className="w-4 h-4 text-clinic-teal transition-transform group-hover:translate-x-1" />
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
                  className={`group relative p-10 rounded-xl bg-gradient-to-br ${treatment.gradient} transition-all ${treatment.hoverBg} hover:-translate-y-2 border border-border/10 block h-full`}
                >
                  <treatment.icon className={`w-10 h-10 ${treatment.iconColor} mb-6 group-hover:text-white transition-colors`} />
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
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-clinic-teal/5 via-secondary/30 to-amber-50/20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-clinic-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-2">
              Serving British Columbia for over a decade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ageless Living™ now has three locations in BC. You can find location hours, addresses, and more by clicking a location below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease }}
              >
                <Link
                  to={location.href}
                  className={`group block relative rounded-xl bg-gradient-to-br ${location.gradient} ${location.hoverGradient} border border-border/20 p-6 hover:shadow-xl hover:border-clinic-teal/30 transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-clinic-teal transition-colors">
                      {location.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-clinic-teal group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {location.city}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership/Expertise Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-t from-clinic-teal/5 via-background to-background overflow-hidden">
        {/* Decorative gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-clinic-teal/5 to-amber-100/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 lg:px-16 text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-clinic-teal/20 to-emerald-500/20 text-clinic-teal text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-clinic-teal/20">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-8 leading-[1.1]">
              Clinical Excellence & Collaborative Expertise
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light mb-8">
              Our clinical sanctuary is powered by a multidisciplinary team of physicians, specialists, and clinical managers across Langley, Victoria, and Kelowna. Together, we bring decades of experience to your longevity journey, ensuring every treatment plan meets the highest standards of safety and clinical efficacy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/about-us"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-clinic-teal to-cyan-500 text-white text-sm font-bold uppercase tracking-widest hover:from-clinic-teal/90 hover:to-cyan-500/90 transition-all flex items-center gap-3 shadow-lg shadow-cyan-500/20"
              >
                Meet our full team
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-full border-2 border-clinic-teal/30 text-foreground text-sm font-bold uppercase tracking-widest hover:bg-clinic-teal/10 hover:border-clinic-teal/50 transition-all"
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
