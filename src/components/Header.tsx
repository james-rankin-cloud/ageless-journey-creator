import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/Ageless_logo1.png";

const navItems = [
  { label: "Home", href: "/" },
];

const services = [
  { label: "Skin Rejuvenation", href: "/services#skin-rejuvenation" },
  { label: "Hormone Balancing", href: "/services#hormone-balancing" },
  { label: "Biohacking", href: "/services#biohacking" },
  { label: "Health Weight", href: "/services#health-weight" },
];

const aboutItems = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const locations = [
  { label: "Victoria", href: "/locations/victoria" },
  { label: "Langley", href: "/locations/langley" },
  { label: "Kelowna", href: "/locations/kelowna" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border))]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 section-padding">
        <Link to="/" className="relative z-10 flex items-center">
          <img
            src={logo}
            alt="Ageless Living™ Wellness Centre logo - premium wellness clinic in British Columbia"
            className="h-16 md:h-20 lg:h-24 transition-all duration-300"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                >
                  <div className="bg-card border border-border rounded-xl shadow-lg py-2 min-w-[220px]">
                    {services.map((svc) => (
                      <Link
                        key={svc.href}
                        to={svc.href}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {svc.label}
                      </Link>
                    ))}
                    <div className="border-t border-border my-1" />
                    <Link
                      to="/services"
                      className="block px-4 py-2.5 text-sm font-medium text-clinic-teal hover:bg-secondary/50 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      View All Services
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                >
                  <div className="bg-card border border-border rounded-xl shadow-lg py-2 min-w-[180px]">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        onClick={() => setAboutOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Locations
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {locationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                >
                  <div className="bg-card border border-border rounded-xl shadow-lg py-2 min-w-[180px]">
                    {locations.map((loc) => (
                      <Link
                        key={loc.label}
                        to={loc.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                      >
                        <MapPin className="w-4 h-4 text-primary" />
                        {loc.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/book"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-clinic-teal to-cyan-500 text-white text-sm font-medium transition-all duration-200 hover:from-clinic-teal/90 hover:to-cyan-500/90 active:scale-[0.97] shadow-lg shadow-cyan-500/20"
          >
            Book a time
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground active:scale-95"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-0 bg-card z-40 overflow-hidden"
          >
            <div className="flex items-center justify-between py-5 section-padding container mx-auto">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                <img
                  src={logo}
                  alt="Ageless Living™ Wellness Centre logo"
                  className="h-16 md:h-20"
                />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-foreground">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center gap-8 pt-16">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-3xl font-bold text-foreground hover:text-muted-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Services */}
              <div className="text-center">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="text-lg font-semibold text-muted-foreground mb-4 hover:text-foreground transition-colors flex items-center gap-2"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-3"
                    >
                      {services.map((svc) => (
                        <Link
                          key={svc.href}
                          to={svc.href}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          {svc.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile About */}
              <div className="text-center">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="text-lg font-semibold text-muted-foreground mb-4 hover:text-foreground transition-colors flex items-center gap-2"
                >
                  About
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-3"
                    >
                      {aboutItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileAboutOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Locations */}
              <div className="text-center">
                <p className="text-lg font-semibold text-muted-foreground mb-4">Locations</p>
                <div className="flex flex-col gap-3">
                  {locations.map((loc) => (
                    <Link
                      key={loc.label}
                      to={loc.href}
                      className="flex items-center justify-center gap-2 text-xl font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <MapPin className="w-5 h-5 text-primary" />
                      {loc.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/book"
                className="mt-4 inline-flex items-center px-8 py-3.5 rounded-full bg-gradient-to-r from-clinic-teal to-cyan-500 text-white text-base font-medium shadow-lg shadow-cyan-500/20"
                onClick={() => setMobileOpen(false)}
              >
                Book a time
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
