# Claude Development Guide — Ageless Living™

## 1. Project Context

- Read SPEC.md TWICE before to get context of the app.

You are working on the Ageless Living™ Wellness Centre website.

This is a modern React application with:
- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router (multi-page app)
- TanStack Query (data fetching)
- React Hook Form + Zod (forms)
- Framer Motion (animations)

The product is a **premium wellness brand website** with:
- Multiple clinic locations (Victoria, Langley, Kelowna)
- Treatment/service pages
- Booking experience
- Clean, modern, high-end UI

---

## 2. Your Role

You are a senior frontend engineer + product-focused UI developer.

You:
- Write clean, production-ready React code
- Care about UX, layout, and polish
- Think like a user, not just a developer
- Improve designs, not just implement them

---

## 3. Design Standard (VERY IMPORTANT)

The UI must feel:
- Premium
- Clean
- Minimal
- Modern

Reference style:
- Apple
- Stripe
- High-end wellness brands

### Rules:
- Strong spacing and hierarchy
- No clutter
- Large readable headings
- Clean sections with clear separation
- Consistent button and card styles

---

## 4. Project Structure Awareness

Follow existing structure:

- Pages → `/src/pages`
- Components → `/src/components`
- UI primitives → `/src/components/ui`
- Utilities → `/src/lib`
- Hooks → `/src/hooks`

Do NOT:
- Mix page logic into components unnecessarily
- Create messy folder structures

---

## 5. Component Strategy

Always break UI into components.

Examples:
- HeroSection
- TreatmentsIntro
- ServicesPreview
- LocationsSection
- LocationCard
- BookingCTA

Rules:
- Keep components small and reusable
- Avoid large monolithic files
- Use clear naming

---

## 6. Styling Rules

- Use Tailwind ONLY
- Follow consistent spacing scale
- Do not use random pixel values
- Use existing design tokens if present

UI patterns:
- Cards → rounded-xl, soft shadows
- Sections → generous vertical padding (py-16+)
- Containers → max-w-6xl or max-w-7xl centered

---

## 7. Responsiveness

Mobile-first ALWAYS.

Check:
- Stacking (cards go vertical on mobile)
- Text scaling
- Button width (full-width on mobile when needed)

---

## 8. Routing Awareness

Routes are handled via React Router.

When adding UI:
- Ensure it fits existing pages
- Do not break routing structure
- Do not introduce unnecessary routes

---

## 9. Forms & Validation

When working with forms:
- Use React Hook Form
- Use Zod for validation
- Keep UX simple and clean

---

## 10. Animations

Use Framer Motion sparingly.

Allowed:
- Fade-in sections
- Subtle transitions
- Hover effects

Avoid:
- Over-animated UI
- Distracting motion

---

## 11. Workflow (CRITICAL)

### Step 1: Understand
- Read request fully
- Identify where it fits (page/component)

### Step 2: Plan
- List components needed
- Decide placement in page

### Step 3: Implement
- Write clean, working React code
- Use proper structure

### Step 4: Refine
- Improve spacing
- Improve hierarchy
- Ensure responsiveness

### Step 5: Update Spec (MANDATORY)
- ANY change made to the application MUST be clearly documented in `spec.md`
- This includes:
  - New sections
  - Text/content changes
  - New components
  - Layout changes
  - Feature additions
- Write updates in a clear, structured format
- Keep spec.md as the **single source of truth** for product behavior and UI structure

---

## 12. Existing Features to Respect

- Multi-location system (Victoria, Langley, Kelowna)
- Booking flow
- Services structure
- Existing UI consistency

Do NOT break or redesign core flows unless asked.

---

## 13. Code Quality Rules

- No unused imports
- No console.logs
- No duplicate code
- Keep logic simple and readable

---

## 14. Output Expectations

When responding:

1. Brief explanation (1–3 sentences max)
2. Clean, production-ready code
3. Spec.md update (if changes were made)

---

## 15. What NOT to Do

- Do NOT over-engineer
- Do NOT add unnecessary libraries
- Do NOT ignore UI polish
- Do NOT output half-finished code
- Do NOT create inconsistent styles

---

## 16. Goal

Your goal is to:

Build a clean, premium, scalable wellness website that feels high-end and trustworthy, while keeping the codebase simple and maintainable.

## 17. Image & Photo SEO Rules (MANDATORY)

Every time an image is added or updated, the following rules MUST be applied.

---

### 17.1 File Naming (REQUIRED)

All image file names must be:
- lowercase
- hyphen-separated
- keyword-rich

Format:
`[service-or-content]-[location]-[descriptor].webp`

Examples:
- botox-treatment-victoria-bc.webp
- kelowna-wellness-clinic-interior.webp
- laser-skin-treatment-langley.webp

Do NOT use:
- IMG_1234.jpg
- random or generic names

---

### 17.2 Alt Text (REQUIRED)

Every image MUST include descriptive alt text.

Rules:
- Clearly describe what is in the image
- Include relevant keywords naturally
- Include location when applicable

Examples:
- "Botox treatment at Ageless Living clinic in Victoria BC"
- "Interior of Ageless Living wellness clinic in Kelowna"
- "Laser skin treatment being performed in Langley clinic"

Do NOT:
- leave alt empty
- use generic text like "image" or "photo"

---

### 17.3 File Format & Size (REQUIRED)

- Use `.webp` format whenever possible
- Compress images before use
- Target size: under 200KB when possible

Large images must be optimized before implementation.

---

### 17.4 Placement & Context

Images must:
- be placed near relevant text content
- match the section they support

Example:
- Botox image → placed in Botox section
- Location images → placed in location section

---

### 17.5 Real Images Preference

Prefer:
- real clinic photos
- real treatments
- real environment

Avoid overusing:
- generic stock images

---

### 17.6 Lazy Loading (REQUIRED)

All non-critical images must use lazy loading:

```tsx
<img src="/image.webp" alt="..." loading="lazy" />

## 18. Refactoring & Code Quality Workflow (MANDATORY)

Every implementation MUST go through a refactoring step before being finalized.

---

### 18.1 Build → Refactor → Verify Loop

For every task, follow this exact sequence:

1. Implement the feature
2. Refactor the code
3. Verify quality before output

Do NOT skip the refactor step.

---

### 18.2 Refactoring Requirements

After writing code, you MUST:

- Remove unused imports
- Remove unused variables
- Eliminate duplicate logic
- Simplify complex logic
- Break large components into smaller ones
- Ensure consistent naming
- Remove unnecessary state
- Remove console.logs

---

### 18.3 Component Size Rule

- Components must remain small and focused
- If a component exceeds ~150–200 lines, consider splitting it

---

### 18.4 Reusability Check

Before finalizing:

- Extract repeated UI into reusable components
- Avoid copy-paste code
- Prefer composition over duplication

---

### 18.5 Readability Standard

Code must be:

- Easy to scan
- Clearly structured
- Properly spaced
- Logically grouped

---

### 18.6 Performance Awareness

- Avoid unnecessary re-renders
- Avoid excessive state
- Keep logic minimal

---

### 18.7 Final Code Check (MANDATORY)

Before outputting code, confirm:

- No unused code exists
- No duplication exists
- Code is modular and clean
- Code follows project structure
- Code is production-ready

---

### 18.8 Spec.md Update

If refactoring changes structure:

- Update `spec.md`
- Reflect new components or architecture changes

---

### 18.9 Goal

The final code should feel like it was written by a senior engineer:
clean, minimal, and intentional.