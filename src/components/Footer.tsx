import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/full-logo.png";

const locations = [
  { name: "Langley", address: "20689 Fraser Hwy, Langley, BC V3A 4G4", phone: "(604) 427-0120" },
  { name: "Victoria", address: "740 Hillside Ave #120, Victoria, BC V8T 1Z4", phone: "(250) 590-5321" },
  { name: "Kelowna", address: "1708 Dolphin Ave #101, Kelowna, BC V1Y 9S4", phone: "(250) 868-9289" },
];

export default function Footer() {
  return (
    <footer className="bg-wellness-charcoal text-white/80">
      <div className="container mx-auto section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logo} alt="Ageless Living™" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-white/60">
              Modern treatments, expert guidance, and a commitment to helping you live better — at any age.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/treatments" className="hover:text-white transition-colors">Treatments</Link>
              <Link to="/journey" className="hover:text-white transition-colors">Our Journey</Link>
              <Link to="/locations" className="hover:text-white transition-colors">Locations & Team</Link>
              <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
              <Link to="/book" className="hover:text-white transition-colors">Book Now</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Locations</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {locations.map((l) => (
                <div key={l.name} className="text-sm space-y-1.5">
                  <h5 className="font-semibold text-white">{l.name}</h5>
                  <p className="flex items-start gap-1.5 text-white/50"><MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />{l.address}</p>
                  <p className="flex items-center gap-1.5 text-white/50"><Phone className="h-3.5 w-3.5 shrink-0" />{l.phone}</p>
                  <p className="flex items-center gap-1.5 text-white/50"><Mail className="h-3.5 w-3.5 shrink-0" />info@agelessliving.com</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Ageless Living™ Wellness Centre. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://agelessliving.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Official Site</a>
            <a href="https://ageless-living.square.site/s/shop" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Shop</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
