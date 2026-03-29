import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/ageless-living-logo-teal.png";

const servicesPillars = [
  { label: "Skin Rejuvenation", href: "/services#skin-rejuvenation" },
  { label: "Hormone Balancing", href: "/services#hormone-balancing" },
  { label: "Biohacking & Longevity", href: "/services#biohacking" },
  { label: "Health Weight", href: "/services#health-weight" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Prices", href: "/prices" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border))]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 section-padding">
        <Link to="/">
          <img src={logo} alt="Ageless Living™ Wellness Centre logo - premium wellness clinic in British Columbia" className="h-10 md:h-14" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                    location.pathname.startsWith("/services")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    >
                      <div className="bg-card border border-border rounded-xl shadow-lg p-2 min-w-[220px]">
                        {servicesPillars.map((pillar) => (
                          <Link
                            key={pillar.href}
                            to={pillar.href}
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                          >
                            {pillar.label}
                          </Link>
                        ))}
                        <div className="border-t border-border my-2" />
                        <Link
                          to="/services"
                          className="block px-4 py-2.5 text-sm font-medium text-clinic-teal hover:bg-clinic-teal-light rounded-lg transition-colors"
                        >
                          View All Services
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
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
            )
          )}
          <Link
            to="/book"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
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
            className="lg:hidden fixed inset-0 top-0 bg-card z-40 overflow-y-auto"
          >
            <div className="flex items-center justify-between py-5 section-padding container mx-auto">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img src={logo} alt="Ageless Living™ Wellness Centre logo" className="h-10" />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-foreground">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6 pt-12 pb-20">
              <Link
                to="/"
                className="text-2xl font-bold text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              {/* Services with expandable submenu */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="text-2xl font-bold text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2"
                >
                  Services
                  <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col items-center gap-3 mt-4 overflow-hidden"
                    >
                      {servicesPillars.map((pillar) => (
                        <Link
                          key={pillar.href}
                          to={pillar.href}
                          className="text-base text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {pillar.label}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        className="text-base font-semibold text-clinic-teal"
                        onClick={() => setMobileOpen(false)}
                      >
                        View All Services
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/prices"
                className="text-2xl font-bold text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Prices
              </Link>
              <Link
                to="/about"
                className="text-2xl font-bold text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="text-2xl font-bold text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/book"
                className="mt-6 inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-base font-medium"
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
