import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, MapPin, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/lib/auth";
import logo from "@/assets/header-logo.png";

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
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

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
      <div className="container mx-auto flex items-center justify-between py-3 md:py-5 px-4 md:px-6 lg:px-8">
        <Link to="/" className="relative z-10 flex items-center">
          <img
            src={logo}
            alt="Ageless Living™ Wellness Centre logo - premium wellness clinic in British Columbia"
            className="h-12 md:h-16 lg:h-20 transition-all duration-300"
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
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-clinic-teal to-clinic-teal text-white text-sm font-medium transition-all duration-200 hover:from-clinic-teal/90 hover:to-clinic-teal/90 active:scale-[0.97] shadow-lg shadow-clinic-teal/20"
          >
            Book a time
          </Link>

          {/* User Menu */}
          {isAuthenticated ? (
            <div
              className="relative"
              onMouseEnter={() => setUserMenuOpen(true)}
              onMouseLeave={() => setUserMenuOpen(false)}
            >
              <button className="w-9 h-9 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center hover:ring-2 hover:ring-primary/30 transition-all">
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </button>
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 pt-2"
                  >
                    <div className="bg-card border border-border rounded-xl shadow-lg py-2 min-w-[200px]">
                      <div className="px-4 py-2.5 border-b border-border">
                        <p className="text-sm font-semibold text-foreground">{user?.firstName} {user?.lastName}</p>
                        <p className="text-xs text-muted-foreground">{user?.email}</p>
                      </div>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <User className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <button
                        onClick={() => { logout(); setUserMenuOpen(false); navigate("/"); }}
                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : null}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-3 text-foreground rounded-full hover:bg-secondary/50 active:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-0 bg-card z-40 flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between py-4 px-5 border-b border-border shrink-0">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                <img
                  src={logo}
                  alt="Ageless Living™ Wellness Centre logo"
                  className="h-12"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-3 text-foreground rounded-full hover:bg-secondary/50 active:bg-secondary transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-5">
              <div className="flex flex-col gap-2">
                {/* Home Link */}
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center py-4 px-4 text-lg font-semibold text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Services */}
                <div className="border-t border-border pt-2 mt-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-4 px-4 text-lg font-semibold text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
                  >
                    Services
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 flex flex-col gap-1">
                          {services.map((svc) => (
                            <Link
                              key={svc.href}
                              to={svc.href}
                              className="py-3 px-4 text-base text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-lg transition-colors"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileServicesOpen(false);
                              }}
                            >
                              {svc.label}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            className="py-3 px-4 text-base font-medium text-clinic-teal hover:bg-secondary/30 rounded-lg transition-colors"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileServicesOpen(false);
                            }}
                          >
                            View All Services
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile About */}
                <div>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="w-full flex items-center justify-between py-4 px-4 text-lg font-semibold text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
                  >
                    About
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 flex flex-col gap-1">
                          {aboutItems.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="py-3 px-4 text-base text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-lg transition-colors"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileAboutOpen(false);
                              }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Locations */}
                <div>
                  <button
                    onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                    className="w-full flex items-center justify-between py-4 px-4 text-lg font-semibold text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
                  >
                    Locations
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${mobileLocationsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileLocationsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 flex flex-col gap-1">
                          {locations.map((loc) => (
                            <Link
                              key={loc.label}
                              to={loc.href}
                              className="flex items-center gap-3 py-3 px-4 text-base text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-lg transition-colors"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileLocationsOpen(false);
                              }}
                            >
                              <MapPin className="w-4 h-4 text-clinic-teal" />
                              {loc.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </nav>

            {/* Fixed Bottom CTA */}
            <div className="shrink-0 p-5 border-t border-border bg-card space-y-3">
              {isAuthenticated && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary">
                  <div className="w-9 h-9 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center shrink-0">
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{user?.firstName} {user?.lastName}</p>
                    <div className="flex gap-3 mt-1">
                      <Link
                        to="/dashboard"
                        className="text-xs text-clinic-teal font-medium"
                        onClick={() => setMobileOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => { logout(); setMobileOpen(false); navigate("/"); }}
                        className="text-xs text-muted-foreground font-medium"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <Link
                to="/book"
                className="w-full flex items-center justify-center py-4 rounded-full bg-clinic-teal text-white text-base font-semibold shadow-sm hover:bg-clinic-teal-container transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book a time
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
