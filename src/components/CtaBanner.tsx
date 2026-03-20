import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import logo from "@/assets/full-logo.png";

export default function CtaBanner() {
  return (
    <section className="bg-background border-t-2 border-primary/20">
      <div className="container mx-auto section-padding py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <img src={logo} alt="Ageless Living™" className="h-9 hidden md:block opacity-60" />
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                Ready to start your Ageless Journey?
              </h2>
              <p className="text-muted-foreground text-sm">
                Book your consultation today.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
            >
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://ageless-living.square.site/s/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border bg-card text-foreground font-semibold hover:shadow-md transition-all duration-200 active:scale-[0.97]"
            >
              Shop on Our Store <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
