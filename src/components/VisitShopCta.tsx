import { ArrowUpRight } from "lucide-react";
import shopImg from "@/assets/shop-1.jpeg";
import logo from "@/assets/footer-logo.png";

export default function VisitShopCta() {
  return (
    <section
      aria-labelledby="visit-shop-heading"
      className="relative bg-background"
    >
      <div className="container mx-auto px-6 lg:px-16 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-clinic-teal text-white">
          {/* Watermark */}
          <span
            aria-hidden
            className="logo-watermark pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-white/[0.08] text-[20vw] md:text-[14vw]"
          >
            shop
          </span>

          {/* Logo badge */}
          <div className="pointer-events-none absolute top-6 left-6 md:top-8 md:left-8 opacity-20">
            <img src={logo} alt="" aria-hidden className="h-6 brightness-0 invert" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-10 md:p-14 lg:p-16">
            {/* Left copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60 mb-6">
                The Ageless Living™ Shop
              </p>
              <h2
                id="visit-shop-heading"
                className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-6"
              >
                Clinic-grade rituals,
                <br />
                curated for home.
              </h2>
              <p className="max-w-lg text-base md:text-lg leading-relaxed text-white/75 mb-8">
                Continue your treatment at home with the exact medical-grade
                skincare, red-light devices, and longevity supplements our
                practitioners use in clinic. Hand-picked. Never filler.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://ageless-store.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-white text-clinic-teal pl-7 pr-3 py-3 text-sm font-semibold uppercase tracking-widest transition-all hover:bg-white/90"
                >
                  Visit the Shop
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clinic-teal text-white transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Free shipping over $150
                </span>
              </div>
            </div>

            {/* Right product image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                <img
                  src={shopImg}
                  alt="Ageless Living signature home skincare and longevity products"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-teal/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">
                      Featured bundle
                    </p>
                    <p className="mt-1 text-lg font-medium text-white tracking-tight">
                      Red Light Glow
                    </p>
                  </div>
                  <span className="rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
                    Save 15%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
