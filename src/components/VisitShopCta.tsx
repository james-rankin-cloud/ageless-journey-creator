import { ArrowUpRight } from "lucide-react";
import shopImg from "@/assets/shop-1.jpeg";

/**
 *  <VisitShopCta />
 *  ------------------------------------------------------------------
 *  Minimal, editorial shop CTA shown above the footer on every page.
 *  Uses the site's neutral palette — clinic-teal is reserved for the
 *  primary button and the hover accent. No large blue background.
 */

export default function VisitShopCta() {
  return (
    <section
      aria-labelledby="visit-shop-heading"
      className="bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3 md:mb-4">
              <span className="hairline pb-2 text-xs md:text-sm">The Ageless Living™ Shop</span>
            </p>
            <h2
              id="visit-shop-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight leading-[1.1] mb-5"
            >
              Shop our products on our online store.
            </h2>
            <p className="max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground mb-7">
              Continue your treatment at home with the same medical-grade skincare,
              red-light devices and longevity supplements our practitioners use in
              clinic. Hand-picked. Never filler.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://ageless-store.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-clinic-teal text-white pl-7 pr-3 py-3 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-clinic-teal-container"
              >
                Visit the Shop
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-clinic-teal transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Free shipping over $150
              </span>
            </div>
          </div>

          {/* Product image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <img
                src={shopImg}
                alt="Ageless Living signature home skincare and longevity products"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="rounded-xl bg-white/90 backdrop-blur-sm border border-white/60 px-4 py-2.5 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    Featured bundle
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground tracking-tight">
                    Red Light Glow
                  </p>
                </div>
                <span className="rounded-full bg-foreground text-background px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
                  Save 15%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
