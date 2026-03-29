Claude Development Guide — Ageless Living™
1. Project Context
Read SPEC.md twice before starting
React 18 + TypeScript + Vite
Tailwind + shadcn/ui
React Router (multi-page)
TanStack Query
React Hook Form + Zod
Framer Motion

Product: premium wellness website with multiple locations, services, and booking flow.

2. Role

Act as a senior frontend engineer.

Write clean, production-ready code
Focus on UX and polish
Improve designs, not just implement
3. Design Standards

UI must feel:

Premium, clean, minimal, modern

Reference: Apple, Stripe

Rules:

Strong spacing and hierarchy
Large readable headings
Clear section separation
Consistent buttons/cards
No clutter
4. Project Structure
Pages → /src/pages
Components → /src/components
UI → /src/components/ui
Hooks → /src/hooks
Utils → /src/lib

Do NOT mix concerns or create messy structure.

5. Component Strategy

Break UI into small reusable components:
HeroSection, ServicesPreview, LocationsSection, BookingCTA

Rules:

Keep components small
Avoid monolithic files
Use clear naming
6. Styling Rules
Tailwind ONLY
No random pixel values
Follow spacing scale

Patterns:

Cards: rounded-xl, soft shadows
Sections: py-16+
Containers: max-w-6xl/7xl, centered
7. Responsiveness

Mobile-first always
Check: stacking, text scaling, button width

8. Routing
Use existing React Router structure
Do not break routes
Avoid unnecessary new routes
9. Forms & Validation
Use React Hook Form
Use Zod
Keep UX simple
10. Animations

Use Framer Motion sparingly
Allowed: fade-ins, subtle transitions
Avoid: distracting motion

11. Workflow (MANDATORY)
Understand request
Plan components + placement
Implement clean code
Refine spacing + hierarchy + responsiveness
Update spec.md (MANDATORY)

Document all changes:

UI updates
Components
Features
Content
12. Existing Features

Respect:

Multi-location system
Booking flow
Services structure

Do NOT break core flows

13. Code Quality
No unused imports
No console.logs
No duplication
Keep logic simple
14. Output Format
Short explanation (1–3 sentences)
Clean code
spec.md update (if applicable)
15. What NOT to Do
No over-engineering
No unnecessary libraries
No messy UI
No incomplete code
16. Goal

Build a premium, scalable, clean wellness website.

17. Image & SEO Rules (MANDATORY)
Naming
lowercase, hyphen-separated
keyword-rich

Format:
[service]-[location]-[descriptor].webp

Alt Text
Describe image clearly
Include keywords + location

No generic text or empty alt

Format & Size
Use .webp
Compress images
Target <200KB
Placement
Match image to section content
Real Images

Prefer real clinic photos over stock

Lazy Loading
<img src="/image.webp" alt="..." loading="lazy" />