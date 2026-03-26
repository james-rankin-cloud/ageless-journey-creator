# Ageless Living™ Website Architecture Specification

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
    ├── /services            → ServicesPage
    ├── /services/:slug      → Treatment detail pages
    ├── /prices              → PricesPage
    ├── /about               → AboutPage
    ├── /blog                → BlogPage
    ├── /book                → BookNowPage
    ├── /shop                → ShopPage
    ├── /contact             → ContactPage
    ├── /treatments          → Redirect to /services
    ├── /journey             → Redirect to /about
    ├── /locations           → Redirect to /about
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
│   │   ├── ServicesPreview.tsx    # Services grid
│   │   ├── Treatments.tsx         # Treatment list
│   │   ├── TestimonialsWall.tsx   # Reviews section
│   │   ├── TeamSection.tsx        # Staff profiles
│   │   ├── Products.tsx           # Product listings
│   │   ├── Locations.tsx          # Location cards
│   │   ├── Contact.tsx            # Contact form
│   │   └── ...                    # 25+ feature components
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── BotoxDysportPage.tsx
│   │   ├── PricesPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── BookNowPage.tsx
│   │   ├── ShopPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFound.tsx
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
│   ├── Logo
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
  <CtaBanner />
  <FloatingBookNow />
</Layout>
```

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
