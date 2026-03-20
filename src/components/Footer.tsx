import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/full-logo.png";

const locations = [
  { name: "Langley", address: "415-20178 96th Ave, Langley, BC V1M 0B2", phone: "+1 (236) 326-6830" },
  { name: "Victoria", address: "1-101 Burnside Rd W, Victoria, BC V9A 1B7", phone: "+1 (250) 590-5787" },
  { name: "Kelowna", address: "102-3320 Richter Street, Kelowna, BC V1W 4V5", phone: "+1 (778) 760-9827" },
];

const quickLinks = [
  { label: "Treatments", to: "/treatments" },
  { label: "Our Journey", to: "/journey" },
  { label: "Locations & Team", to: "/locations" },
  { label: "Shop", to: "/shop" },
  { label: "Book Now", to: "/book" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/agelessliving_bc/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/agelesslivingwellness", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/ageless-living-wellness/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/agelesslivingbc", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-wellness-charcoal text-white/80">
      <div className="container mx-auto section-padding py-24 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <img src={logo} alt="Ageless Living™" className="h-10" />
            <p className="text-sm leading-[1.9] text-white/50 max-w-xs">
              Modern treatments, expert guidance, and a commitment to helping you live better — at any age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-xs uppercase tracking-[0.2em]">Quick Links</h4>
            <div className="flex flex-col gap-4 text-sm">
              {quickLinks.map((l) => (
                <Link key={l.to} to={l.to} className="text-white/50 hover:text-white transition-colors leading-relaxed">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-6 text-xs uppercase tracking-[0.2em]">Our Locations</h4>
            <div className="grid sm:grid-cols-3 gap-8">
              {locations.map((l) => (
                <div key={l.name} className="text-sm space-y-3">
                  <h5 className="font-semibold text-white text-base">{l.name}</h5>
                  <p className="flex items-start gap-2.5 text-white/45 leading-[1.8]">
                    <MapPin className="h-3.5 w-3.5 mt-1.5 shrink-0" />{l.address}
                  </p>
                  <p className="flex items-center gap-2.5 text-white/45 leading-[1.8]">
                    <Phone className="h-3.5 w-3.5 shrink-0" />{l.phone}
                  </p>
                  <p className="flex items-center gap-2.5 text-white/45 leading-[1.8]">
                    <Mail className="h-3.5 w-3.5 shrink-0" />info@agelessliving.ca
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/60 hover:scale-110 transition-all duration-200"
            >
              <s.icon className="h-4 w-4 text-white/70" />
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/35">
          <p className="leading-[1.8]">© {new Date().getFullYear()} Ageless Living™ Wellness Centre. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="https://agelessliving.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              Official Site
            </a>
            <a href="https://ageless-living.square.site/s/shop" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              Shop
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
