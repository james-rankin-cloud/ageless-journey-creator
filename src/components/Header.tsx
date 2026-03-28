import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/ageless-living-logo-teal.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Prices", href: "/prices" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
        <Link to="/">
          <img src={logo} alt="Ageless Living™ Wellness Centre logo - premium wellness clinic in British Columbia" className="h-10 md:h-14" />
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
            className="lg:hidden fixed inset-0 top-0 bg-card z-40 overflow-hidden"
          >
            <div className="flex items-center justify-between py-5 section-padding container mx-auto">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img src={logo} alt="Ageless Living™ Wellness Centre logo" className="h-10" />
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
              <Link
                to="/book"
                className="mt-4 inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-base font-medium"
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
