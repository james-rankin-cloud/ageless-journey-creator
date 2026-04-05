import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import shopImg from "@/assets/shop-1.jpeg";

/**
 * Global "Visit Shop" module rendered above the footer on every page.
 * Premium editorial layout: asymmetric 12-col grid, typographic hero
 * call-out, product photo, and a single high-contrast CTA.
 */
export default function VisitShopCta() {
  return (
    <section
      aria-labelledby="visit-shop-heading"
      className="relative bg-background"
    >
      <div className="container mx-auto px-6 lg:px-16 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-gradient-to-br from-[#0f2e2d] via-[#0b2423] to-[#061716] text-white">
          {/* Decorative type — giant outlined "SHOP" */}
          <span
            aria-hidden
            className="pointer-events-none select-none absolute -top-10 -right-6 md:-right-10 font-display italic text-[10rem] md:text-[16rem] leading-none text-white/[0.06] tracking-tighter"
          >
            shop
          </span>

          {/* Soft gradient orbs */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-clinic-teal/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-200/10 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 p-8 sm:p-12 md:p-16 lg:p-20">
            {/* LEFT — editorial copy */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="eyebrow text-white/60">The Ageless Living Shop</p>
                <h2
                  id="visit-shop-heading"
                  className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-[-0.025em] font-light"
                >
                  Clinic-grade{" "}
                  <em className="italic font-light text-clinic-teal/90 [font-feature-settings:'ss01']">
                    rituals
                  </em>
                  ,
                  <br />
                  curated for home.
                </h2>
                <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-white/70 font-light">
                  Continue your treatment at home with the exact medical-grade
                  skincare, red-light devices, and longevity supplements our
                  practitioners use in clinic. Hand-picked. Never filler.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/shop"
                  className="group inline-flex items-center gap-3 rounded-full bg-white text-[#0b2423] pl-7 pr-3 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition-all hover:bg-clinic-teal hover:text-white"
                >
                  Visit the Shop
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b2423] text-white transition-transform group-hover:rotate-45 group-hover:bg-white group-hover:text-[#0b2423]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Free shipping over $150
                </span>
              </div>
            </div>

            {/* RIGHT — product image card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={shopImg}
                  alt="Ageless Living signature home skincare and longevity products"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061716]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                      Featured bundle
                    </p>
                    <p className="font-display text-xl italic font-light text-white">
                      Red Light Glow
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
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
