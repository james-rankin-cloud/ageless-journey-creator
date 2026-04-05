import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import shopImg from "@/assets/shop-1.jpeg";
import logo from "@/assets/footer-logo.png";

/**
 * Global "Visit Shop" module rendered above the footer on every page.
 * Premium clinical layout: deep ageless-blue backdrop, oversized outlined
 * wordmark watermark, editorial typographic call-out and a high-contrast CTA.
 */
export default function VisitShopCta() {
  return (
    <section
      aria-labelledby="visit-shop-heading"
      className="relative bg-background"
    >
      <div className="container mx-auto px-6 lg:px-16 py-28 md:py-40">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-ageless-blue-deep text-white">
          {/* Decorative outlined wordmark watermark */}
          <span
            aria-hidden
            className="logo-watermark pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-white/[0.07] text-[22vw] md:text-[16vw] leading-none"
          >
            ageless
          </span>

          {/* Faint logo mark badge */}
          <div className="pointer-events-none absolute top-8 left-8 md:top-10 md:left-10 opacity-25">
            <img
              src={logo}
              alt=""
              aria-hidden
              className="h-6 brightness-0 invert"
            />
          </div>

          {/* Soft gradient orbs */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-ageless-blue/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 p-10 sm:p-14 md:p-20 lg:p-24">
            {/* LEFT — editorial copy */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="eyebrow text-white/60">The Ageless Living™ Shop</p>
                <h2
                  id="visit-shop-heading"
                  className="mt-8 font-display text-5xl sm:text-6xl md:text-7xl leading-[0.92] tracking-[-0.03em] font-extralight uppercase"
                >
                  Clinic-grade
                  <br />
                  <span className="text-white/70 font-light">rituals,</span>
                  <br />
                  curated for home.
                </h2>
                <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-white/70 font-light">
                  Continue your treatment at home with the exact medical-grade
                  skincare, red-light devices and longevity supplements our
                  practitioners use in clinic. Hand-picked. Never filler.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-5">
                <Link
                  to="/shop"
                  className="group inline-flex items-center gap-3 rounded-full bg-white text-ageless-blue-deep pl-7 pr-3 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all hover:bg-ageless-blue hover:text-white"
                >
                  Visit the Shop
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ageless-blue-deep text-white transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
                <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">
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
                <div className="absolute inset-0 bg-gradient-to-t from-ageless-blue-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">
                      Featured bundle
                    </p>
                    <p className="mt-1 font-display text-xl font-light uppercase text-white tracking-tight">
                      Red Light Glow
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
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
