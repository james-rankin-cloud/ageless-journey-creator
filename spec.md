# Ageless Living™ Website Architecture Specification

## Changelog — Transformation Journey & Journey CTA (2026-04-06)

Added two new homepage sections per owner feedback to better visualize the Ageless Living service journey and port over the "Help Me Create My Ageless Living Journey" concept from the agelessliving.com site.

### New Components

#### TransformationJourney (`src/components/TransformationJourney.tsx`)
- **Purpose**: Interactive visual journey showing how a client transforms through the 4 service pillars (Skin Rejuvenation → Hormone Balancing → Biohacking → Health Weight)
- **Desktop**: Connected progress bar with step nodes, animated active line, stage content panel with image + text
- **Mobile**: Horizontal scrollable pill tabs, stacked layout, full-width CTAs
- **Features**: Stage badge overlay on images showing progression ("Stage 1 of 4"), avatar state description, benefits grid, animated transitions between stages via Framer Motion AnimatePresence
- **Interaction**: Click any stage to jump to it, or use "Next Stage" button to progress linearly

#### JourneyCTA (`src/components/JourneyCTA.tsx`)
- **Purpose**: "Help Me Create My Ageless Living Journey" call-to-action section ported from agelessliving.com
- **Layout**: Two-column — clinic photo with gradient overlay (left), headline + journey steps + CTAs (right)
- **Desktop**: Floating card showing journey steps preview overlaid on the image
- **Mobile**: Journey steps shown as 2x2 grid below the text, image stacks above text
- **CTAs**: "Book a Consultation" (primary) + "Explore Services" (secondary), full-width on mobile

### HomePage Integration
- `TransformationJourney` inserted after the Treatments section
- `JourneyCTA` inserted after TransformationJourney, before the About/Philosophy section
- Both sections maintain the existing design language (eyebrow labels, hairline accents, clinic-teal brand color, Jost/Inter typography)

### Mobile Responsiveness
- All new components follow mobile-first responsive design
- Progressive text sizing, padding, and spacing across all breakpoints
- Scrollable horizontal tabs on mobile for journey stages
- Full-width CTAs on mobile with vertical stacking
- Hidden/shown elements adapted per breakpoint (floating card hidden on mobile, mini grid shown instead)

---

## Changelog — Mobile Responsiveness Optimization (2026-04-06)

A comprehensive mobile-first optimization pass for AboutUsPage, ContactPage, and Footer component to ensure premium UX on all screen sizes.

### AboutUsPage Mobile Optimizations
- **Hero Section**: Reduced top padding from `pt-28` to `pt-24` on mobile, improved text sizing from `text-4xl` to `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` for better mobile readability
- **Container Padding**: Updated from `px-6 md:px-8` to mobile-first `px-4 sm:px-6 lg:px-8` for tighter margins on small screens
- **Rounded Corners**: Progressive rounding `rounded-xl md:rounded-2xl` instead of fixed `rounded-2xl`
- **Section Spacing**: Reduced mobile padding throughout (e.g., `py-12 md:py-16 lg:py-20` vs previous `py-16 md:py-20`)
- **Text Hierarchy**: Better progressive sizing for all headings and body text with sm/md/lg breakpoints
- **CTA Buttons**: Primary button now full-width on mobile (`w-full sm:w-auto`) for easier tapping, flex-col to flex-row on small screens
- **Image & Icon Sizing**: Progressive sizing (e.g., `w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64`) for better mobile layouts
- **Gap Spacing**: Tighter gaps on mobile throughout all grid layouts

### ContactPage Mobile Optimizations
- **Page Padding**: Top padding reduced from `pt-32` to `pt-24 md:pt-32` for mobile
- **Container**: Replaced generic `section-padding` with explicit `px-4 sm:px-6 lg:px-16` for consistency
- **Header Text**: Better progressive sizing `text-3xl sm:text-4xl md:text-4xl lg:text-5xl`
- **Location Cards**: Reduced padding `p-6 sm:p-8 lg:p-10` and tighter spacing throughout
- **Card Corners**: Progressive rounding `rounded-2xl md:rounded-3xl`
- **Get Directions Button**: Full-width on mobile (`w-full sm:w-fit`) with `justify-center` for better UX, added `rounded-lg` for visual consistency
- **Card Spacing**: Reduced gap from `space-y-10` to `space-y-6 md:space-y-10` for mobile

### Footer Mobile Optimizations
- **Container Padding**: Mobile-first `px-4 sm:px-6 lg:px-16 py-12 md:py-16 lg:py-20` (reduced from `py-16 md:py-20`)
- **Grid Spacing**: Tighter gaps `gap-10 md:gap-12 lg:gap-20` (from `gap-12 md:gap-20`)
- **Text Sizing**: All text now has mobile sizes `text-xs md:text-sm` for nav links and location info
- **Logo Sizing**: Progressive `h-7 md:h-8` for better mobile fit
- **Location Grid**: Changed from `md:grid-cols-2` to `sm:grid-cols-2` so two-column layout appears earlier
- **Link Spacing**: Reduced gaps `gap-x-6 md:gap-x-8 gap-y-2.5 md:gap-y-3` for mobile
- **Bottom Bar**: Better mobile centering with `text-center md:text-left` for copyright

### Mobile-First Design Patterns Applied
- Consistent container padding: `px-4 sm:px-6 lg:px-16`
- Reduced section padding on mobile: `pt-24 md:pt-32` and `py-12 md:py-16 lg:py-20`
- Progressive text sizing: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
- Tighter gaps and spacing on mobile throughout
- Full-width buttons on mobile with proper touch targets
- Progressive rounded corners: `rounded-xl md:rounded-2xl`
- Better responsive grid patterns with sm/md/lg breakpoints

## Changelog — Clinical Refinement Pass (2026-04-05 · v2)

A second pass that repositions the visual identity toward a clinical,
scientific aesthetic (reference: "The Ordinary").

### Typography
- **Removed Fraunces / all serif fonts**.
- Headings (`h1–h6`) now render in **Jost** (with Raleway fallback) — clean,
  geometric, minimalist. `font-display` utility and `.eyebrow` now resolve to
  Jost so every existing usage upgrades automatically.
- Body copy now uses **Inter** (replacing DM Sans).
- Imports updated in `src/index.css`; Tailwind `fontFamily` tokens updated.

### Ageless Blue Palette
- `--clinic-teal` CSS variable **repurposed to clinical blue** (`hsl(212 68% 38%)`),
  so every existing `text-clinic-teal` / `bg-clinic-teal` instance across the
  codebase instantly switches to the Ageless blue without per-file edits.
- New tokens: `--ageless-blue`, `--ageless-blue-deep` (CTA background), and
  `--ageless-blue-soft` (section tints). Exposed as Tailwind colours
  `ageless-blue`, `ageless-blue-deep`, `ageless-blue-soft`.
- New `::selection` highlight uses the Ageless blue.

### Video-First Integration
- HomePage hero rebuilt around a **full-width framed muted-looping `<video>`**
  using the existing `/public/human_graphic.{webm,mp4}` asset, with an
  editorial copy + CTA overlay in the bottom gutter.
- Reusable `LoopVideo` component renders additional muted/looping players
  used in three more on-page sections:
  1. Philosophy section — portrait-ratio video
  2. Patient Stories / Testimonials — three portrait videos in a grid
  3. (Hero counts as the fourth major video integration)
- All videos use existing assets — no new media or AI photos introduced.

### Logo Presence & Watermark
- New `.logo-watermark` CSS utility — oversized outlined wordmark for
  decorative backgrounds.
- HomePage closing CTA now uses the **ageless-blue-deep** background with a
  faint `footer-logo.png` badge and a massive outlined "ageless" wordmark as
  a background watermark.
- `VisitShopCta` component rebuilt on the same ageless-blue-deep background
  with a logo badge, an `ageless` wordmark watermark, larger whitespace and
  the new uppercase Jost headline treatment.

### Whitespace
- Section padding bumped across the board (e.g. HomePage section `py-32
  md:py-48`, VisitShop `py-28 md:py-40`) to match high-end clinical brands.

---

## Changelog — Premium UI Overhaul (2026-04-05)

A bespoke editorial redesign intended to remove any "AI-generated template"
feel and align the brand with the visual standard of Apple / Stripe /
premium wellness editorial sites.

### Typography
- Added **Fraunces** (modern display serif) paired with existing **DM Sans**.
- Global `h1`, `h2`, `h3` now render in Fraunces (`font-display`), light weight,
  tight negative tracking. Body, eyebrows and UI copy remain DM Sans.
- New CSS utilities: `.font-display`, `.font-sans-alt`, `.eyebrow`, `.hairline`,
  `.scrollbar-none`.
- New Tailwind font family tokens: `font-display`, `font-serif`.

### Layout & Global Components
- **Removed** `PromoPopup` (discount modal) from `Layout.tsx` — site no longer
  shows a promotional popup on load.
- **Added** `src/components/VisitShopCta.tsx` — a premium, globally-mounted
  "Visit Shop" module rendered above the footer on every route. Editorial
  12-col layout with giant outlined display type, dark teal gradient card,
  featured product image (`shop-1.jpeg`) and a high-contrast pill CTA.
- `Layout.tsx` now renders `<VisitShopCta />` between `<Outlet />` and
  `<Footer />`.

### HomePage (`src/pages/HomePage.tsx`) — full rewrite
- Editorial asymmetric 12-column grid throughout.
- Massive serif display hero ("Live better, *longer* — at any age.") with
  supporting portrait + inset secondary image, instead of the previous
  gradient-heavy template hero.
- New pillar section: editorial row list (number / title / blurb / thumbnail)
  using only existing brand assets (`services-1…4.jpg`).
- Philosophy section with large quote + portrait (`about-us-1.jpg`).
- Locations grid using existing `victoria.png`, `langley.jpg`, `kelowna.jpg`.
- All generic stock / AI-style imagery removed — only existing Ageless Living
  brand assets referenced.

### ServicesPage (`src/pages/ServicesPage.tsx`) — full rewrite
- Sophisticated **sticky side-navigation** on desktop (`lg:` +) that highlights
  the active pillar via `IntersectionObserver`.
- Horizontal scrolling chip nav on mobile for the same four pillars.
- Each pillar rendered as an editorial article: number, eyebrow, Fraunces
  display title with italic accent, 7/5 image+copy grid, and a numbered
  "treatment rows" list (`01 / name / description / arrow`) that links to
  individual service sub-pages.
- Brand imagery only (`services-1…4.jpg`).

### Service Sub-Pages
- Automatically inherit the new serif heading style globally via the `h1/h2/h3`
  rule in `index.css`, lifting every service page (Botox, Filler, Laser, etc.)
  into the same typographic system without page-by-page rewrites.

---

## Overview

This document describes the technical architecture of the Ageless Living™ Wellness Centre website, a React single-page application (SPA) built for a multi-location wellness clinic in British Columbia.

---

## 1. Technology Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI framework |
| TypeScript | 5.8.3 | Type-safe JavaScript |
| Vite | 5.4.19 | Build tool and dev server |
| React Router DOM | 6.30.1 | Client-side routing |

### Styling
| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | 3.4.17 | Utility-first CSS |
| shadcn/ui | - | Component library (Radix UI) |
| Framer Motion | 12.38.0 | Animations |

### Data & Forms
| Technology | Version | Purpose |
|------------|---------|---------|
| TanStack React Query | 5.83.0 | Server state management |
| React Hook Form | - | Form handling |
| Zod | - | Schema validation |
| date-fns | - | Date manipulation |

### Testing
| Technology | Purpose |
|------------|---------|
| Vitest | Unit testing |
| Playwright | E2E testing |

---

## 2. Application Architecture

### Entry Points

```
index.html          → HTML shell
  └── src/main.tsx  → React DOM render
        └── App.tsx → Root component with providers
```

### Provider Hierarchy

```tsx
<HelmetProvider>           // SEO meta tag management
  <QueryClientProvider>    // React Query cache
    <TooltipProvider>      // UI tooltips
      <BrowserRouter>      // Client-side routing
        <Routes />
        <Toaster />        // Toast notifications
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
</HelmetProvider>
```

### Routing Architecture

```
BrowserRouter
├── Layout (wrapper)
│   ├── Header
│   ├── <Outlet />  ← Page content
│   ├── Footer
│   └── PromoPopup
│
└── Routes
    ├── /                    → HomePage
    ├── /services                      → ServicesPage
    ├── /services/botox-dysport        → BotoxDysportPage
    ├── /services/hormone-balancing    → HormoneBalancingPage
    ├── /services/cosmetic-dermal-filler → CosmeticDermalFillerPage
    ├── /services/customized-ultrafacial → CustomizedUltraFacialPage
    ├── /services/laser-ipl-bbl        → LaserIplBblPage
    ├── /services/perfect-derma-peel   → PerfectDermaPeelPage
    ├── /services/microneedling        → MicroneedlingPage
    ├── /services/belkyra              → BelkyraPage
    ├── /services/dermaplaning         → DermaplaningPage
    ├── /services/biohacking           → BiohackingPage
    ├── /services/health-weight        → HealthWeightPage
    ├── /locations/victoria            → VictoriaPage
    ├── /locations/langley             → LangleyPage
    ├── /locations/kelowna             → KelownaPage
    ├── /about-us            → AboutUsPage
    ├── /our-team            → TeamPage (staff listing by location)
    ├── /our-team/:slug      → StaffProfilePage (individual staff bio page)
    ├── /faqs                → FAQPage
    ├── /careers             → AboutUsPage (placeholder)
    ├── /blog                → BlogPage
    ├── /book                → BookNowPage
    ├── /shop                → ShopPage
    ├── /contact             → ContactPage
    ├── /treatments          → Redirect to /services
    ├── /journey             → Redirect to /about-us
    ├── /locations           → Redirect to /about-us
    └── *                    → NotFound (404)
```

---

## 3. Directory Structure

```
ageless-journey-creator/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/
│   ├── assets/                    # Static images and media
│   │
│   ├── components/
│   │   ├── ui/                    # shadcn/Radix UI (73 components)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...
│   │   │
│   │   ├── Layout.tsx             # Page wrapper
│   │   ├── Header.tsx             # Navigation
│   │   ├── Footer.tsx             # Footer
│   │   ├── Booking.tsx            # Booking form
│   │   ├── ChatBot.tsx            # AI assistant
│   │   ├── Hero.tsx               # Hero section
│   │   ├── OurTreatments.tsx      # Treatments intro section
│   │   ├── ServicesPreview.tsx    # Services grid
│   │   ├── HomeLocations.tsx      # Location cards for homepage
│   │   ├── Treatments.tsx         # Treatment list
│   │   ├── TestimonialsWall.tsx   # Reviews section
│   │   ├── TeamSection.tsx        # Staff profiles
│   │   ├── Products.tsx           # Product listings
│   │   ├── Locations.tsx          # Location tabs with team
│   │   ├── Contact.tsx            # Contact form
│   │   ├── ServiceCTA.tsx         # Reusable CTA for service pages
│   │   └── ...                    # 25+ feature components
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── BotoxDysportPage.tsx
│   │   ├── HormoneBalancingPage.tsx
│   │   ├── CosmeticDermalFillerPage.tsx
│   │   ├── CustomizedUltraFacialPage.tsx
│   │   ├── LaserIplBblPage.tsx
│   │   ├── PerfectDermaPeelPage.tsx
│   │   ├── MicroneedlingPage.tsx
│   │   ├── BelkyraPage.tsx
│   │   ├── DermaplaningPage.tsx
│   │   ├── BiohackingPage.tsx
│   │   ├── HealthWeightPage.tsx
│   │   ├── VictoriaPage.tsx
│   │   ├── LangleyPage.tsx
│   │   ├── KelownaPage.tsx
│   │   ├── AboutUsPage.tsx
│   │   ├── TeamPage.tsx             # Staff listing by location
│   │   ├── StaffProfilePage.tsx     # Individual staff bio page
│   │   ├── FAQPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── BookNowPage.tsx
│   │   ├── ShopPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFound.tsx
│   │
│   ├── data/
│   │   └── staffData.ts             # Centralized staff data (single source of truth)
│   │
│   ├── hooks/
│   │   ├── use-toast.ts           # Toast notifications
│   │   └── use-mobile.tsx         # Mobile detection
│   │
│   ├── lib/
│   │   └── utils.ts               # Tailwind merge utilities
│   │
│   ├── test/
│   │   ├── setup.ts               # Vitest setup
│   │   └── example.test.ts
│   │
│   ├── App.tsx                    # Root component
│   ├── main.tsx                   # Entry point
│   ├── index.css                  # Global styles
│   └── vite-env.d.ts
│
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts
├── playwright.config.ts
└── eslint.config.js
```

---

## 4. Component Architecture

### Layout Components

```
Layout
├── Header
│   ├── Logo (ageless-living-logo-teal.png, h-10 md:h-14)
│   ├── Desktop Navigation (NavLink items)
│   ├── Book Now CTA Button
│   └── Mobile Menu (Sheet component)
│
├── Page Content (<Outlet />)
│
├── Footer
│   ├── Brand Section
│   ├── Location Links
│   ├── Service Links
│   ├── Contact Info
│   └── Social Links
│
└── PromoPopup (conditional)
```

### Page Composition Pattern

```tsx
// Typical page structure
<Layout>
  <Helmet>
    <title>Page Title</title>
    <meta name="description" content="..." />
  </Helmet>

  <Hero />
  <Section1 />
  <Section2 />
  <ServiceCTA />  // For service pages
  <FloatingBookNow />
</Layout>
```

### ServiceCTA Component

Reusable call-to-action component for all service pages:

```tsx
// ServiceCTA.tsx
interface ServiceCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

// Default props
title: "Ready to start your aesthetic journey?"
description: "Book a comprehensive consultation with our medical team at any of our three locations."
primaryButtonText: "Book Online"
primaryButtonLink: "/book"
secondaryButtonText: "View Our Locations"
secondaryButtonLink: "/about-us"
```

**Features:**
- Consistent teal background (bg-clinic-teal)
- Two-button CTA layout (primary white, secondary outlined)
- Framer Motion scroll animations
- Fully customizable via props
- Used on all service pages: BotoxDysport, CosmeticDermalFiller, CustomizedUltraFacial, LaserIplBbl, PerfectDermaPeel, Microneedling, Belkyra, Dermaplaning, HormoneBalancing, Biohacking, HealthWeight

**Benefits:**
- Single source of truth for CTA styling
- Easy to update across all pages
- Maintains design consistency
- Reduces code duplication (~30-40 lines saved per page)

### HomePage Component Structure

The homepage follows a minimal, premium design with four main sections:

```
HomePage
├── Helmet (SEO meta tags + JSON-LD schema)
├── Hero Section (Two-column with video)
│   ├── Left Column: Text content
│   │   ├── Headline: "Discover your best self, at any age."
│   │   ├── Subtext: Treatment offerings message
│   │   └── CTAs: "Explore our Locations" + "Learn more"
│   └── Right Column: Video (human_graphic.mp4/.webm)
│       ├── autoplay, loop, muted, playsInline
│       ├── object-cover styling
│       └── Soft gradient overlay on left edge
├── Treatments Section (4-column grid)
│   ├── Header: "Our Treatments" + "View All Services" link
│   └── 4 Treatment Cards (icon-based, hover effects):
│       ├── Skin Rejuvenation (Sparkles icon)
│       ├── Hormone Balancing (FlaskConical icon)
│       ├── Biohacking (Zap icon)
│       └── Health Weight (Scale icon)
├── Locations Section (Two-column with image)
│   ├── Left Column:
│   │   ├── Heading: "Our Locations"
│   │   ├── Description: Serving BC for over a decade
│   │   └── 3 Location Cards (hover border effect):
│   │       ├── Victoria Clinic → /locations/victoria
│   │       ├── Langley Clinic → /locations/langley
│   │       └── Kelowna Clinic → /locations/kelowna
│   └── Right Column: Clinical environment image
└── Leadership Section (Centered)
    ├── Badge: "Our Expertise"
    ├── Heading: "Clinical Excellence & Collaborative Expertise"
    ├── Description: Team and standards message
    └── CTAs: "Meet our full team" + "Clinical Standards"
```

**Design Features:**
- Two-column hero with looping video (human_graphic.mp4/.webm)
- Treatment cards with teal hover state and lift animation
- Location cards with border highlight on hover
- Minimal, editorial typography with tight tracking
- Framer Motion scroll-triggered animations
- Responsive: stacks on mobile, side-by-side on desktop

### HormoneBalancingPage Component Structure

Dedicated treatment detail page for Hormone Balancing services - redesigned with updated content and structure:

```
HormoneBalancingPage
├── Helmet (SEO meta tags)
├── Hero Section (min-h-85vh, py-12-16)
│   ├── Badge: "Well-being & Vitality"
│   ├── Headline: "Hormone Balancing" (text-5xl-7xl)
│   ├── Detailed description paragraphs covering:
│   │   ├── Hormone imbalance causes and effects
│   │   ├── Environmental factors and toxins
│   │   ├── MD-directed programs
│   │   └── Location availability note
│   ├── CTAs: "Start Your Journey", "Watch the Story"
│   └── Hero image with decorative blur effects
├── Why Test Your Hormones Section (py-20-24)
│   ├── Left column: Detailed explanation text
│   └── Right column:
│       ├── Benefits card with description
│       └── Image banner with overlay text
├── Video Section (py-16-20)
│   └── Video placeholder with play button overlay
├── BHRT vs HRT Comparison Section (py-20-24, dark theme)
│   ├── Left column: Evolution explanation
│   └── Right column: Stats grid
│       ├── "100% Identical to Natural" card
│       ├── "MD Board Certified Care" card
│       └── Laboratory image (grayscale)
├── The Process Section (py-20-24)
│   ├── Section header with "Path to Balance" badge
│   ├── Step 01: Physician Consult (with checklist + detailed description)
│   ├── Step 02: Nutritionist Consultation (with checklist + pharmacist access note)
│   └── Step 03: The Follow Up (with checklist + team care message)
└── ServiceCTA Component
    └── Reusable CTA with standard messaging
```

**Design Updates:**
- Replaced entire page content with premium design matching provided HTML
- Larger hero section (85vh min-height) with extensive content
- Three-step process cards with detailed checklists
- Added video section for educational content
- Removed separate locations/maps section (handled by ServiceCTA)
- Reduced vertical padding for more compact layout (py-20-24 instead of py-28-32)
- Uses ServiceCTA component for consistency across all service pages

### CosmeticDermalFillerPage Component Structure

Dedicated treatment detail page for Cosmetic Dermal Filler services:

```
CosmeticDermalFillerPage
├── Helmet (SEO meta tags)
├── Hero Section
│   ├── Badge: "Premium Aesthetics"
│   ├── Headline: "Cosmetic Dermal Filler"
│   ├── Description: Non-surgical path to refined radiance
│   ├── CTAs: "Book Consultation", "View Pricing"
│   └── Hero image with floating badge (Medical Excellence)
├── Focus Areas Section (Precision Artistry)
│   ├── Asymmetric card grid
│   ├── Lips card
│   ├── Cheeks card
│   ├── Jawline card
│   └── Chin card
├── Product Showcase Section (World-Class Formulations)
│   ├── Product list (editorial layout)
│   │   ├── 01 - Restylane®
│   │   ├── 02 - Revanesse®
│   │   ├── 03 - PRP (Platelet-Rich Plasma)
│   │   └── 04 - Sculptra®
│   └── Product image
├── Experience Section (The Ageless Experience)
│   ├── Pre-Treatment Consultation card
│   ├── The Procedure card
│   └── Recovery & Results card
├── CTA Section (dark theme)
│   └── "Refine Your Radiance" + booking link
└── Locations Section
    └── Available at: Victoria, Langley, Kelowna
```

### CustomizedUltraFacialPage Component Structure

Dedicated treatment detail page for Customized UltraFacial (HydraFacial/AquaFirme):

```
CustomizedUltraFacialPage
├── Helmet (SEO meta tags)
├── Hero Section
│   ├── Badge: "Clinical Sanctuary Excellence"
│   ├── Headline: "Customized UltraFacial"
│   ├── Description: HydraFacial (Victoria/Langley), AquaFirme (Kelowna)
│   ├── CTAs: "Book Consultation", "View Results"
│   └── Hero image with floating tech badge
├── Intro Section (The Science of Radiant Health)
│   ├── Quote about clinical intervention
│   └── Process steps: Cleansing, Exfoliation, Extraction, Hydration, Protection
├── Key Features Section
│   ├── Safe for Pregnancy & Breastfeeding card (teal)
│   └── Medical-Grade Efficacy card
├── Benefits Section (Bento Layout)
│   ├── Featured: Immediate Radiant Glow (large card with image)
│   ├── Gentle Exfoliation
│   ├── Deep Cleansing
│   ├── No Downtime
│   └── Intense Hydration (featured teal)
├── CTA Section (dark theme)
│   └── "Begin Your Skin Journey" + booking link
└── Locations Section
    ├── Victoria & Langley: HydraFacial MD®
    ├── Kelowna: AquaFirme®
    └── All Locations: Customized Protocols
```

### LaserIplBblPage Component Structure

Dedicated treatment detail page for Laser & IPL/BBL Photorejuvenation:

```
LaserIplBblPage
├── Helmet (SEO meta tags)
├── Hero Section
│   ├── Badge: "Advanced Dermatology"
│   ├── Headline: "Laser & IPL/BBL Photorejuvenation"
│   ├── Description: Light of Transformation message
│   ├── CTA: "Book Your Clinical Assessment"
│   └── Hero image with floating "Primary Goal" card
├── Introduction Section (Asymmetric Split)
│   ├── Left: "A Masterclass in Non-Invasive Skin Correction"
│   └── Right: Description + "Clinical Excellence" quote
├── Technology Breakdown Section (The Clinical Edge)
│   ├── ICON® IPL System card (Victoria & Langley)
│   │   └── Gold standard for vascular/pigmented lesions
│   └── Sciton® BBL card (Kelowna, dark theme)
│       └── Molecular-level rejuvenation technology
├── Treatment Benefits Section (Targeted Correction)
│   ├── Left: Image with animated border
│   └── Right: Benefit cards
│       ├── Redness & Rosacea
│       ├── Pigmentation
│       ├── Hair Removal
│       └── Texture
├── The Journey Section (Steps)
│   ├── 01 - Consultation
│   ├── 02 - The Session
│   └── 03 - Recovery
├── Locations Section
│   └── Available at: Victoria, Langley, Kelowna
└── CTA Section (teal theme)
    └── "Ready for a Luminous Tomorrow?" + booking CTAs
```

### PerfectDermaPeelPage Component Structure

Dedicated treatment detail page for The Perfect Derma™ Peel:

```
PerfectDermaPeelPage
├── Helmet (SEO meta tags)
├── Hero Section
│   ├── Badge: "Advanced Resurfacing"
│   ├── Headline: "The Perfect Derma™ Peel"
│   ├── Description: Medical-grade chemical peel with Glutathione
│   ├── CTAs: "Book Consultation", "View Pricing"
│   └── Hero image with floating "Medical Grade Authority" card
├── Glutathione Advantage Section
│   ├── Left: Image with decorative blur
│   └── Right: "The Science of Renewal"
│       ├── Description of Glutathione benefits
│       └── Checklist of benefits
├── Targeted Solutions Section (Bento Grid)
│   ├── Large card: Deep Hyperpigmentation & Melasma (94% efficacy)
│   ├── Teal card: Acne & Scarring
│   ├── Radiance Boost card
│   ├── Anti-Aging card
│   └── Pore Refinement card
├── What to Expect Section (dark theme, rounded)
│   ├── Step 1: Treatment Day (15 minutes)
│   ├── Step 2: Days 1-2 (peeling begins)
│   ├── Step 3: Days 3-5 (peak peeling)
│   └── Step 4: Day 7 (complete transformation)
├── Post-Peel Results Section
│   ├── Left: "Post-Peel Radiance" + testimonial
│   └── Right: Result image
├── Locations Section
│   └── Available at: Victoria, Langley, Kelowna
└── CTA Section (teal theme)
    └── "Ready to Transform Your Skin?" + booking CTAs
```

### BelkyraPage Component Structure

Dedicated treatment detail page for Belkyra (submental fat reduction):

```
BelkyraPage
├── Helmet (SEO meta tags)
├── Hero Section
│   ├── Badge: "Advanced Injectable"
│   ├── Headline: "Belkyra™ Submental Contouring"
│   ├── Description: Injectable treatment for double chin reduction
│   ├── CTAs: "Start Your Transformation", "View Results"
│   └── Hero image with floating FDA Approved badge
├── The Science Section (The Science of Dissolving)
│   ├── Card 1: Deoxycholic Acid
│   ├── Card 2: Cellular Disruption (featured, teal)
│   └── Card 3: Natural Elimination
├── The Experience Section (dark theme)
│   ├── Step 01: Clinical Consultation
│   ├── Step 02: Precise Treatment
│   └── Step 03: Recovery & Aftercare
└── CTA Section (teal theme)
    └── "Ready to redefine your profile?" + booking CTA
```

### DermaplaningPage Component Structure

Dedicated treatment detail page for Dermaplaning (manual exfoliation):

```
DermaplaningPage
├── Helmet (SEO meta tags)
├── Hero Section
│   ├── Badge: "Manual Exfoliation Specialist"
│   ├── Headline: "Dermaplaning"
│   ├── Description: Precision manual exfoliation for clarity
│   ├── CTAs: "Book Appointment", "View Pricing"
│   └── Hero image with floating "Immediate results" card
├── The Technique Section
│   ├── Left: Image grid with info cards
│   │   ├── Vellus Hair card
│   │   └── Manual Precision card (teal)
│   └── Right: Description + benefits checklist
├── Radiant Results Section (Bento Grid)
│   ├── The Amazing Glow (large card)
│   ├── Deeper Penetration (teal card)
│   ├── Flawless Application
│   └── The Perfect Add-on (dark card)
├── The Experience Section
│   ├── Step 01: Clinical Consultation
│   ├── Step 02: Precision Treatment
│   └── Step 03: Post-Care Ritual
└── CTA Section (teal theme)
    └── "Ready to reveal your glow?" + booking CTA
```

### BiohackingPage Component Structure

Dedicated page for Biohacking & Longevity services:

```
BiohackingPage
├── Helmet (SEO meta tags)
├── Hero Section
│   ├── Badge: "The Future of Performance"
│   ├── Headline: "Biohacking: Developed by Leaders."
│   ├── Description: Advanced protocols for weight loss, strength, recovery
│   ├── CTAs: "Explore Modalities", "View Locations"
│   └── Hero image with glow effect
├── Clinical Suite Section (Bento Grid)
│   ├── PBM / Red Light Therapy (large card, all locations)
│   ├── IV Therapy (Kelowna Only)
│   ├── HBOT - Hyperbaric Oxygen (Langley, Kelowna)
│   ├── Neurointegrator (dark card, Langley)
│   └── Small Cards Grid:
│       ├── Brain Tap (Kelowna)
│       ├── Far Infrared Sauna (Langley, Kelowna)
│       ├── NuCalm (Victoria, Langley)
│       └── PEMF (All Clinics)
├── Philosophy Quote Section
│   └── "We provide the tools. Your biology provides the transformation."
└── CTA Section (teal theme)
    └── "Ready to optimize your biology?" + booking CTAs
```

### HealthWeightPage Component Structure

Dedicated page for Health Weight management services:

```
HealthWeightPage
├── Helmet (SEO meta tags)
├── Hero Section
│   ├── Badge: "Metabolic Excellence"
│   ├── Headline: "Health Weight"
│   ├── Description: Weight as function of diet and metabolism
│   └── Hero image (4:5 aspect ratio, portrait)
├── Foundation Section (The Modern Epidemic)
│   ├── Left: Two-column image grid (healthy food photography)
│   └── Right: Problem statement + description
│       ├── North American diet issues (high fat + high carb)
│       ├── Inflammation and chronic diseases
│       └── Lifestyle factors (stress, sleep, sedentary)
├── What Makes Us Different Section (Bento Grid)
│   ├── Large Feature Card: "Correcting the Cause"
│   │   ├── Description: Addressing root causes (gut, metabolism, hormones)
│   │   └── Physician avatars + "Expert Physician Oversight"
│   ├── Side Card: "Beyond the Bandage" (teal theme)
│   └── Bottom Features (3-column):
│       ├── Individualized (holistic approach)
│       ├── Assessment (hormone testing, nutrition)
│       └── Safety First (medically-based program)
├── Video Section
│   ├── Full-width video placeholder with play button
│   ├── Title: "The Science of Metabolism"
│   └── Subtitle: "Watch our full methodology"
└── Final CTA Section (teal theme)
    ├── Heading: "Ready to reclaim your health?"
    ├── Description: Comprehensive plan for sustainable weight
    └── CTA: "Schedule Your Consultation" → /book
```

**Design Features:**
- Premium medical aesthetic with scientific precision messaging
- Bento grid layout for feature cards
- Teal accent color scheme matching brand
- Framer Motion scroll animations
- Responsive image grids and asymmetric layouts
- Video placeholder with hover effects

### AboutUsPage Component Structure

Dedicated About Us page showcasing company mission and values:

```
AboutUsPage
├── Helmet (SEO meta tags)
├── Hero Section (Two-column gradient layout)
│   ├── Left: Practitioner/patient image (rounded, shadow)
│   ├── Right: Content block
│   │   ├── Label: "About Us" (10px, uppercase tracking)
│   │   ├── Headline: "Helping you discover your best self, at any age."
│   │   └── Description: Guidance, tools, and technologies message
│   └── Background: Soft gradient (clinic-teal/5 to white)
├── Mission & Branding Section (Two-column with divider)
│   ├── Left Column:
│   │   ├── Label: "Our Mission" (10px, uppercase tracking)
│   │   ├── Heading: "Live better, longer."
│   │   ├── Body text about health and wellbeing (80% influenced)
│   │   └── Values Grid (2 columns):
│   │       ├── "Picture your possible." + description
│   │       └── "Collaborative care." + description
│   └── Right Column: Brand Mark (Teal "A" SVG, 320px)
├── Locations Section (Two-column, secondary background)
│   ├── Left Column:
│   │   ├── Label: "Across Multiple Locations"
│   │   ├── Heading: "Serving British Columbia for over a decade."
│   │   ├── Description paragraph
│   │   └── Location Links (3 inline with MapPin icons):
│   │       ├── Kelowna → /locations/kelowna
│   │       ├── Victoria → /locations/victoria
│   │       └── Langley → /locations/langley
│   └── Right Column: Clinical team image with overlay branding
└── Final CTA Section (Centered, white background)
    ├── Heading: "Ready to begin your journey?"
    ├── Description: "Your best self is waiting..."
    └── Two CTAs: "Book Appointment" (dark pill) + "Contact Our Team" (text link)
```

**Design Features:**
- Two-column hero with gradient background (clinic-teal/5 to white)
- Large brand mark SVG (stylized "A" in teal)
- Minimal, editorial typography (light font weights, tight tracking)
- 10px uppercase labels with wide letter-spacing
- MapPin icons for location links
- Image with floating branding overlay
- Framer Motion scroll-triggered animations
- Responsive design with mobile-first approach
- Premium typography with tracking and weight variations

### VictoriaPage Component Structure

Location page for the Victoria clinic (compact styling ~15% smaller than standard):

```
VictoriaPage
├── Helmet (SEO meta tags)
├── Hero Section
│   ├── Badge: "Our Sanctuary"
│   ├── Headline: "Victoria Clinic"
│   ├── Contact info (address, phone, email)
│   ├── Hours note callout
│   ├── CTAs: "Book Consultation", "Get Directions"
│   └── Hero image with Victoria city thumbnail
├── Treatments Section
│   ├── Heading: "Treatments available in Victoria"
│   └── 4 treatment cards (Biohacking, Health Weight, Hormone, Skin)
├── Map & Hours Section
│   ├── Google Maps embed (left)
│   └── Clinic hours card (teal, right)
├── Meet the Team Section
│   └── 6 team member cards with photos and roles
└── CTA Section (dark theme)
    └── "Ready to begin your journey?" + booking CTA
```

### LangleyPage Component Structure

Location page for the Langley Clinic (compact styling ~15% smaller than standard):

```
LangleyPage
├── Helmet (SEO meta tags)
├── Hero Section
│   ├── Badge: "Our Sanctuary"
│   ├── Headline: "Langley Clinic"
│   ├── Contact info (415-20178 96 Ave, +1 236-326-6830, langley@agelessliving.ca)
│   ├── Hours note callout
│   ├── CTAs: "Book Consultation", "Get Directions"
│   └── Hero image with Langley city thumbnail
├── Treatments Section
│   ├── Heading: "Treatments available in Langley"
│   └── 4 treatment cards (Biohacking, Health Weight, Hormone, Skin)
├── Map & Hours Section
│   ├── Google Maps embed (left)
│   └── Clinic hours card (teal, right)
├── Meet the Langley Team Section
│   └── 5 team member cards:
│       ├── Shelley McBride (MOA, Clinic Manager)
│       ├── Yvonne Ng (Certified Medical Aesthetician)
│       ├── Avnit Bhullar (Medical Aesthetician)
│       ├── Michael Forbes, BSc Pharm (Owner, Pharmacist)
│       └── Dr. Jean Paul Lim, MD, FRCPC (Owner, Internal Medicine)
└── CTA Section (dark theme)
    └── "Ready to begin your journey?" + booking CTA
```

### KelownaPage Component Structure

Location page for the Kelowna Clinic (compact styling ~15% smaller than standard):

```
KelownaPage
├── Helmet (SEO meta tags)
├── Hero Section
│   ├── Badge: "Visit Ageless Living"
│   ├── Headline: "Kelowna Clinic"
│   ├── Contact info (102-3320 Richter Street, +1 778-760-9827, kelowna@agelessliving.ca)
│   ├── Online booking note callout
│   ├── CTAs: "Book Consultation", "Get Directions"
│   └── Hero image with Kelowna/Okanagan thumbnail
├── Intro Section
│   └── "Ageless Living™ brings together the best of what's possible..."
├── Treatments Section
│   ├── Heading: "Treatments available in Kelowna"
│   └── 4 treatment cards (Biohacking, Health Weight, Hormone, Skin)
├── Map & Hours Section
│   ├── Google Maps embed (left)
│   └── Clinic hours card (teal, right)
├── Meet the Team Section
│   └── 7 team member cards:
│       ├── Constanza Moraga Herrera (Nutritional Practitioner)
│       ├── Rachel Bowman Fassio (Clinical Nutritionist)
│       ├── Melissa Zitterer (Clinic Manager, MOA)
│       ├── Dr. Jason Boxtart, ND (Men's Health Specialist)
│       ├── Dr. Tracey Lotze, MD (Hormone and Sexual Health)
│       ├── Michael Forbes, BSc Pharm (Owner, Pharmacist)
│       └── Dr. Jean Paul Lim, MD, FRCPC (Owner, Internal Medicine)
└── CTA Section (dark theme)
    └── "Ready to begin your journey?" + booking CTA
```

### Centralized Staff Data System (`src/data/staffData.ts`)

Single source of truth for all staff data. Used by TeamPage, LocationsPage, StaffProfilePage, TeamSection (homepage), and all location pages (Victoria, Langley, Kelowna).

**StaffMember Interface:**
```typescript
{
  name: string;          // Full name with credentials
  slug: string;          // URL-safe identifier (e.g. "michael-forbes")
  role: string;          // Full title/position
  credentials: string;   // Professional credentials
  image: string;         // Photo URL or local path (/images/team/name-headshot.webp)
  locations: Location[]; // ["langley", "kelowna", "victoria"]
  bio: string;           // Full biography paragraph(s)
  education: string[];   // Degrees, certifications
  specializations: string[];
  treatments: string[];  // Treatment categories they handle
  availability: string;
  funFact?: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  email?: string;
  phone?: string;
}
```

**Complete Staff Roster (16 members):**

| Name | Slug | Role | Locations |
|------|------|------|-----------|
| Michael Forbes, BSc Pharm | michael-forbes | Owner, Pharmacist, Certified in Hormone Restoration | Langley, Kelowna |
| Dr. Jean Paul Lim, MD, FRCPC | dr-jean-paul-lim | Owner, Internal Medicine, Complex Care, and Longevity Specialist | Langley, Kelowna |
| Sarita Hutton | sarita-hutton | Owner, Aesthetic Nurse Specialist, Director of Aesthetic Medicine | Victoria |
| Dr. Tracey Lotze, MD | dr-tracey-lotze | Hormone and Sexual Health Specialist | Kelowna, Victoria |
| Dr. Jason Boxtart, ND | dr-jason-boxtart | Men's Health Specialist | Kelowna, Victoria |
| Constanza Moraga Herrera | constanza-moraga-herrera | Certified Nutritional Practitioner, Lifestyle Medicine & Microbiota Specialist | Kelowna |
| Rachel Bowman Fassio, BSc, CN, RHN | rachel-bowman-fassio | Clinical and Holistic Nutritionist | Kelowna |
| Yvonne Ng | yvonne-ng | Certified Medical Aesthetician | Langley |
| Avnit Bhullar | avnit-bhullar | Medical Aesthetician | Langley |
| Jenny Hwang, RN | jenny-hwang | Aesthetic Nurse Mentee | Victoria |
| Madison Allen | madison-allen | Medical Aesthetician | Victoria |
| Shelley McBride | shelley-mcbride | MOA, Clinic Manager | Langley |
| Melissa Zitterer | melissa-zitterer | Clinic Manager, MOA | Kelowna |
| Lucy Watson | lucy-watson | Clinic Manager | Victoria |
| Natalie King | natalie-king | Medical Office Assistant | Victoria |

**Image Convention:**
- Path: `/images/team/[firstname-lastname]-headshot.webp`
- Alt text: `"Photo of [Name] - [Title], Ageless Living"`
- Format: .webp, compressed <200KB
- Currently using live WordPress URLs where available; local placeholder paths for missing photos

**Helper Functions:**
- `getStaffByLocation(location)` — Filter staff by clinic
- `getStaffBySlug(slug)` — Find single member by URL slug
- `getFeaturedStaff()` — 3 founders for homepage
- `getStaffAltText(member)` — Generate SEO alt text

### StaffProfilePage Component Structure (`/our-team/:slug`)

Individual staff bio page — full "staff bio book" layout:

```
StaffProfilePage
├── Helmet (SEO: "[Name] — [Role] | Ageless Living™")
├── Back to Team Link (← Back to Team)
├── Hero Section (2-column on desktop)
│   ├── Left: Large professional headshot (4:5 ratio, rounded-2xl)
│   └── Right: Name, title, location badges, social links, bio, availability
├── Details Section (3-column cards on bg-secondary/20)
│   ├── Education & Certifications card
│   ├── Specializations card
│   └── Treatments & Services card (with treatment icons)
├── Fun Fact card (if provided)
└── CTA Section (if has treatments)
    └── "Ready to book with [FirstName]?" + Book a Consultation button
```

**Profile URL pattern:** `/our-team/[slug]` (e.g. `/our-team/michael-forbes`)

### Header Navigation with Services & Locations Dropdowns

The Header component includes dropdown menus for Services and Locations:

```
Header
├── Logo
├── Desktop Navigation
│   ├── Home
│   ├── Services (with dropdown) - Hover to open
│   │   ├── Skin Rejuvenation → /services#skin-rejuvenation
│   │   ├── Hormone Balancing → /services#hormone-balancing
│   │   ├── Biohacking → /services#biohacking
│   │   ├── Health Weight → /services#health-weight
│   │   └── View All Services → /services
│   ├── About (with dropdown) - Hover to open
│   │   ├── About Us → /about-us
│   │   ├── Our Team → /our-team
│   │   ├── FAQs → /faqs
│   │   ├── Blog → /blog
│   │   └── Careers → /careers
│   └── Locations (with dropdown) - Hover to open
│       ├── Victoria → /locations/victoria
│       ├── Langley → /locations/langley
│       └── Kelowna → /locations/kelowna
├── Book a time CTA
└── Mobile Menu (with expandable Services, About + Locations sections)
    ├── Tap "Services" to expand service options
    ├── Tap "About" to expand about options
    └── Tap "Locations" to view location options
```

**Dropdown Implementations:**

*Services Dropdown:*
- Desktop: Hover over "Services" to reveal dropdown (onMouseEnter/onMouseLeave)
- Mobile: Tap "Services" button to expand/collapse service links
- Dropdown auto-closes on navigation or when mouse leaves
- Animated dropdown with Framer Motion (fade-in: opacity 0→1, y: 8→0)
- Includes "View All Services" link with clinic-teal styling

*About Dropdown:*
- Desktop: Hover over "About" to reveal dropdown
- Mobile: Tap "About" button to expand/collapse about links
- Five items: About Us, Our Team, FAQs, Blog, Careers
- Dropdown auto-closes on navigation or when mouse leaves
- Same animation pattern as Services dropdown
- Min-width: 180px

*Locations Dropdown:*
- Desktop: Hover over "Locations" to reveal dropdown
- Mobile: Static list display
- Three location links with MapPin icons
- Same animation pattern as other dropdowns

**Anchor Link Features:**
- Each ServicesPage section has a unique ID:
  - `id="skin-rejuvenation"` (line 124)
  - `id="hormone-balancing"` (line 187)
  - `id="biohacking"` (line 273)
  - `id="health-weight"` (line 345)
- Sections use `scroll-mt-24` class to offset for the fixed navbar (prevents overlap)
- Global smooth scrolling enabled: `html { scroll-behavior: smooth }` (index.css line 102-104)
- ServicesPage includes `useEffect` to handle hash navigation on page load (line 39-48)

**UX Details:**
- Dropdown closes automatically after clicking a service link
- Keyboard navigation supported via standard link focus states
- Mobile menu collapses when navigating to avoid UI overlap
- Chevron icon rotates 180° when dropdown is open
- Consistent spacing and styling with existing Locations dropdown

### UI Component Library (shadcn/ui)

73 pre-built accessible components including:

- **Layout**: Card, Accordion, Tabs, Separator, Aspect Ratio
- **Forms**: Input, Select, Checkbox, Radio Group, Switch, Slider, Calendar
- **Feedback**: Toast, Alert, Progress, Skeleton
- **Overlay**: Dialog, Drawer, Popover, Tooltip, Hover Card
- **Navigation**: Navigation Menu, Menubar, Command, Breadcrumb
- **Data Display**: Table, Avatar, Badge, Carousel

---

## 5. State Management

### Strategy: Minimal State

The application uses a lightweight state approach:

| State Type | Solution | Usage |
|------------|----------|-------|
| Server State | React Query | API data caching (ready but underutilized) |
| UI State | React useState | Forms, modals, toggles |
| Route State | React Router | URL parameters, navigation |
| Meta State | Helmet | Document head management |

### No Global State Library

- No Redux, Zustand, or Jotai
- Component-level state with prop drilling
- React Query ready for future API integration

---

## 6. Styling System

### Tailwind Configuration

```typescript
// tailwind.config.ts
{
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        // Brand colors via CSS variables
        "clinic-teal": "hsl(var(--clinic-teal))",
        "wellness-charcoal": "hsl(var(--wellness-charcoal))",
        "wellness-warm": "hsl(var(--wellness-warm))",

        // Semantic colors
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        lg: "1rem",
        md: "calc(1rem - 2px)",
        sm: "calc(1rem - 4px)",
      },
    },
  },
}
```

### CSS Variables (index.css)

```css
:root {
  /* Brand */
  --clinic-teal: 181 100% 19%;
  --wellness-charcoal: 0 0% 10%;
  --wellness-warm: 30 33% 97%;

  /* Semantic */
  --background: 30 33% 97%;
  --foreground: 0 0% 10%;
  --primary: 0 0% 17%;
  --primary-foreground: 0 0% 100%;
  --accent: 30 18% 95%;
  --border: 0 0% 90%;
  --radius: 1rem;
}
```

### Utility Classes

```css
.section-padding  /* Responsive horizontal padding */
.section-y        /* Vertical section spacing */
.label-sm         /* Small label styling */
.text-gradient    /* Gradient text effect */
```

---

## 7. Data Flow

### Current State: Static Data

Data is currently hardcoded in components:

```tsx
// Example: Location data in Booking.tsx
const locations = [
  { id: "langley", name: "Langley", address: "..." },
  { id: "victoria", name: "Victoria", address: "..." },
  { id: "kelowna", name: "Kelowna", address: "..." },
];

// Example: Services in ServicesPage.tsx
const services = [
  { id: 1, title: "Botox & Dysport", category: "skin", ... },
  { id: 2, title: "IV Therapy", category: "biohacking", ... },
];
```

### Future API Integration Pattern

```tsx
// Ready-to-use React Query pattern
const { data, isLoading, error } = useQuery({
  queryKey: ['services'],
  queryFn: () => fetch('/api/services').then(res => res.json()),
});
```

---

## 8. Key Features

### 8.1 Booking System

```
BookNowPage Flow:
1. Select Location (Langley | Victoria | Kelowna)
2. Select Service Category
3. Select Specific Treatment
4. Select Staff Member (filtered by location)
5. Select Date/Time
6. Confirm Booking
```

**Components involved:**
- `BookNowPage.tsx` - Page orchestrator
- `Booking.tsx` - Booking form component
- `ui/calendar.tsx` - Date picker
- `ui/select.tsx` - Dropdowns

### 8.2 ChatBot

Rule-based chatbot with keyword matching:

```tsx
// ChatBot.tsx response logic
const getAutoResponse = (message: string) => {
  const lower = message.toLowerCase();
  if (lower.includes("book")) return "Navigate to booking...";
  if (lower.includes("price")) return "View pricing...";
  // ...
};
```

Features:
- Auto-responses based on keywords
- Quick reply buttons
- Navigation to app sections
- No external API dependency

### 8.3 Multi-Location Support

Three clinic locations with:
- Separate contact information
- Location-specific staff
- Google Maps integration
- Individual booking flows

### 8.4 Homepage Locations Section (HomeLocations)

Card-based display of all three clinic locations:

```tsx
// HomeLocations.tsx - Location data structure
const locations = [
  {
    id: "victoria",
    name: "Victoria",
    address: "1-101 Burnside Rd W, Victoria, BC V9A 1B7",
    phone: "+1 (250) 590-5787",
    email: "wellness@agelessliving.ca",
    note: "Hours may vary due to weather or staff training..."
  },
  {
    id: "langley",
    name: "Langley",
    address: "415-20178 96 Ave, Langley, BC V1M 0B2",
    phone: "+1 (236) 326-6830",
    email: "langley@agelessliving.ca"
  },
  {
    id: "kelowna",
    name: "Kelowna",
    address: "102-3320 Richter Street, Kelowna, BC V1W 4V5",
    phone: "+1 (778) 760-9827",
    email: "kelowna@agelessliving.ca"
  }
];
```

Features:
- Responsive 3-column grid (stacks on mobile)
- Each card includes address, phone, email
- "Book Consultation" CTA linking to /book
- Victoria location includes hours note
- Framer Motion animations on scroll

### 8.5 Our Treatments Section (OurTreatments)

Introductory section before services preview:

- **Label**: "Our Treatments" (uppercase, small)
- **Heading**: "Picture Your Possible."
- **Body**: Brand message about guidance, tools, and technologies
- Centered layout with max-width constraint
- Smooth scroll-triggered animations

---

## 9. External Integrations

| Service | Status | Implementation |
|---------|--------|----------------|
| Google Maps | Active | iframe embeds in ContactPage |
| Square Commerce | External | Links to Square store (shop) |
| Booking API | Planned | Form ready, no backend |
| Analytics | Planned | Structure ready |

---

## 10. Build Configuration

### Vite Config (vite.config.ts)

```typescript
{
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    componentTagger(),  // Development only
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}
```

### TypeScript Config

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": false,
    "noImplicitAny": false,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 11. Testing Strategy

### Unit Tests (Vitest)

```typescript
// vitest.config.ts
{
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['**/*.{test,spec}.{ts,tsx}'],
  }
}
```

### E2E Tests (Playwright)

```typescript
// playwright.config.ts
// Uses Lovable's Playwright configuration wrapper
```

---

## 12. Performance Considerations

### Current Optimizations
- Vite + SWC for fast builds
- Code splitting via React Router lazy loading (available)
- Tailwind CSS purging in production
- Image optimization (placeholder system)

### Recommended Improvements
- Implement React.lazy() for route-based splitting
- Add image lazy loading
- Configure service worker for caching
- Implement critical CSS extraction

---

## 13. Security Considerations

### Current State
- No authentication system
- No sensitive data handling
- Client-side only (no backend)
- Environment variables not used

### Recommended for Production
- HTTPS enforcement
- Content Security Policy headers
- Input sanitization for forms
- Rate limiting on API endpoints

---

## 14. Deployment

### Build Output

```bash
npm run build
# Creates dist/ directory with:
# - index.html
# - assets/*.js (bundled)
# - assets/*.css (bundled)
```

### Hosting Requirements
- Static file hosting
- SPA routing support (fallback to index.html)
- HTTPS support

### Compatible Platforms
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting with SPA support

---

## 15. Future Architecture Recommendations

### Backend Integration
```
Frontend (React) ←→ API Gateway ←→ Backend Services
                                    ├── Booking Service
                                    ├── User Service
                                    ├── Content Service
                                    └── Payment Service
```

### Environment Configuration
```env
VITE_API_BASE_URL=https://api.agelessliving.com
VITE_GOOGLE_MAPS_API_KEY=xxx
VITE_SQUARE_API_KEY=xxx
VITE_GA_ID=xxx
```

### Database Schema (Recommended)
- Users/Patients
- Appointments/Bookings
- Services/Treatments
- Staff/Practitioners
- Locations
- Blog Posts
- Products

---

## 16. Recent Updates & Changes

### March 2026 - Service Pages Redesign

**Component Architecture Improvements:**
1. **ServiceCTA Component** - Created reusable CTA component used across all service pages
   - Location: `src/components/ServiceCTA.tsx`
   - Customizable props for title, description, and button text/links
   - Consistent teal background with two-button layout
   - Reduces code duplication by ~30-40 lines per page

2. **HormoneBalancingPage Complete Redesign**
   - Replaced entire page with premium design and expanded content
   - New sections: Video player, detailed 3-step process cards
   - Larger hero section (min-h-85vh) with comprehensive information
   - BHRT vs HRT comparison with stats grid
   - Now uses ServiceCTA component for consistency

3. **Services Pages Optimization**
   - Reduced vertical padding across all service pages (py-28/py-32 → py-16/py-20)
   - More compact, modern layout with improved page rhythm
   - Removed redundant location sections (handled by ServiceCTA)
   - All service pages now use ServiceCTA component

**Pages Updated:**
- HormoneBalancingPage.tsx (complete redesign)
- BotoxDysportPage.tsx
- CosmeticDermalFillerPage.tsx
- CustomizedUltraFacialPage.tsx
- LaserIplBblPage.tsx
- PerfectDermaPeelPage.tsx
- MicroneedlingPage.tsx
- BelkyraPage.tsx
- DermaplaningPage.tsx
- BiohackingPage.tsx
- HealthWeightPage.tsx

**Code Quality:**
- Removed unused imports across all service pages
- Eliminated code duplication (~300+ lines of redundant CTA code)
- Improved maintainability (single source of truth for CTAs)
- Consistent design patterns across all service pages

**Design Improvements:**
- Cleaner, more compact layouts
- Consistent CTA styling and messaging
- Reduced excessive whitespace
- Premium, professional aesthetic maintained throughout

### April 2026 - UI/UX Updates & Mobile Navigation Improvements

**Header & Mobile Navigation Overhaul:**
1. **Improved Mobile Menu**
   - Scrollable menu container with fixed header and bottom CTA
   - Larger touch targets (44px+ height) on all menu items
   - Made Locations section collapsible like Services and About
   - Added "View All Services" link in mobile dropdown
   - Using `100dvh` for proper mobile viewport height
   - Improved hover/active states for visual feedback

2. **Header Responsiveness**
   - Smaller logo on mobile (h-12 vs h-16)
   - Better hamburger button with larger tap area and hover state
   - Reduced padding for mobile devices
   - Visual hierarchy with borders separating sections

**HomePage Updates:**
1. **Hero Section CTAs**
   - "Explore our Locations" → "About Us" (links to /about-us)
   - "Learn more" → "Meet Our Team" (links to /our-team)

2. **Leadership Section CTAs**
   - "Meet our full team" → "Contact" (links to /contact)
   - "Clinical Standards" → "FAQ" (links to /faqs)

3. **Color Consistency**
   - All treatment cards now use consistent cyan/teal gradient
   - All location cards use matching cyan/teal theme
   - Featured image reduced from max-w-4xl to max-w-2xl

**ServicesPage Updates:**
- Removed "Explore Treatments" and "Our Clinical Approach" buttons from hero section
- Cleaner hero layout focusing on content

**Service Page Button Standardization:**

All service pages updated to use consistent cyan gradient button styling (`bg-gradient-to-r from-clinic-teal to-cyan-500`):

1. **CosmeticDermalFillerPage**
   - Book Consultation button updated to cyan gradient
   - Removed "View Pricing" button

2. **CustomizedUltraFacialPage**
   - Book Consultation button updated to cyan gradient
   - Removed "View Results" button
   - Added "Back to All Services" button

3. **PerfectDermaPeelPage**
   - Book Consultation button updated to cyan gradient
   - Removed "View Pricing" button
   - Removed "Learn about scarring" button from Acne & Scarring card

4. **BelkyraPage**
   - "Start Your Transformation" → "Book Your Consultation"
   - Removed "View Results" button
   - Hero image updated to use `object-center` for better display

5. **DermaplaningPage**
   - Removed "View Pricing" button

**Note:** Botox page treatment area photos (Forehead, Glabella, Crow's Feet) require manual replacement with more accurate images:
- `src/assets/botox-4.jpg` (Forehead)
- `src/assets/botox-5.jpg` (Glabella)
- `src/assets/botox-6.jpg` (Crow's Feet)
