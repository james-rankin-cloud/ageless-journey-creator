import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/header-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Prices", to: "/prices" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "Book a Time", to: "/book" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="container mx-auto section-padding py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16">
          {/* Left: Logo + nav */}
          <div>
            <img src={logo} alt="Ageless Living™" className="h-8 mb-8 brightness-0 invert" />
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm text-card/60 hover:text-card transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Locations + hours */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-card/60 mb-6">
              <div>
                <p className="text-card font-medium mb-1">Victoria</p>
                <p>740 Hillside Ave #120</p>
                <p>Victoria, BC V8T 1Z4</p>
              </div>
              <div>
                <p className="text-card font-medium mb-1">Langley</p>
                <p>415-20178 96th Ave</p>
                <p>Langley, BC V1M 0B2</p>
              </div>
              <div>
                <p className="text-card font-medium mb-1">Kelowna</p>
                <p>1708 Dolphin Ave #101</p>
                <p>Kelowna, BC V1Y 9S4</p>
              </div>
              <div>
                <p className="text-card font-medium mb-1">Contact</p>
                <p>+1 (236) 326-6830</p>
              </div>
            </div>
            <div className="text-sm text-card/60">
              <p className="text-card font-medium mb-1">Hours</p>
              <p>Mon. to Fri. — 9 AM to 5 PM</p>
              <p>Saturday — By appointment</p>
              <p>Sunday — Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-card/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-card/40">
            © {new Date().getFullYear()} Ageless Living™ Wellness Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/agelessliving_bc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-card/40 hover:text-card transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/agelesslivingwellness" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-card/40 hover:text-card transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
