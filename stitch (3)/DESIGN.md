# Design System Strategy: Clinical Serenity

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Clinical Sanctuary."** 

Unlike standard medical portals that feel sterile and rigid, this system bridges the gap between high-end editorial aesthetics and professional medical authority. We move beyond the "template" look by utilizing intentional white space, soft tonal layering, and asymmetrical layouts that mimic the calm, expansive feeling of a premium aesthetic clinic. The experience should feel whispered, not shouted—relying on massive scale shifts in typography and deep, saturated accents to guide the user’s eye without the need for traditional structural clutter.

---

## 2. Colors
Our palette is rooted in the "Soft White" clinical environment, punctuated by deep restorative teals and authoritative charcoal.

### Palette Application
- **Primary (`#005f61`) & Primary Container (`#007a7c`):** Reserved for high-intent actions and primary brand moments. Use these to anchor the user’s focus.
- **Surface & Background (`#f9f9f8`):** This is our "Sanctuary White." It is not a pure sterile hex; it has a subtle warmth to keep the UI feeling approachable.
- **Secondary (`#5e5e5e`):** Used for supporting text and non-critical UI elements to maintain a soft contrast ratio.

### The "No-Line" Rule
To maintain the "Sanctuary" feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background color shifts. For example, a card should sit as a `surface-container-lowest` (#ffffff) on a `surface-container-low` (#f3f4f3) background. This creates a natural, soft-edge distinction that feels architectural rather than digital.

### Signature Textures
- **The Glass Rule:** For floating navigation or modal overlays, use a semi-transparent `surface` color with a `backdrop-blur` of 12px–20px. 
- **Tonal Gradients:** Use a subtle linear gradient from `primary` (#005f61) to `primary_container` (#007a7c) for main CTAs to add a "gem-like" depth that distinguishes the brand from flat, generic competitors.

---

## 3. Typography
We use **Manrope** across the entire system. Its geometric yet humanist qualities provide the "Elegant yet Professional" balance required for medical aesthetics.

- **Display Scales (`display-lg` 3.5rem):** Used for high-end editorial moments. These should often be paired with significant `spacing-16` or `spacing-20` to allow the letterforms to breathe.
- **Headline Scales (`headline-lg` 2.0rem):** Bold and authoritative. Use `on-surface` (#1a1c1c) to ensure maximum readability and a sense of "medical trust."
- **Body & Labels (`body-md`, `label-md`):** These should be tracked out slightly (+0.02em) to enhance the feeling of premium spaciousness.

---

## 4. Elevation & Depth
In this system, depth is a measure of "light and air," not "shadows and weight."

- **The Layering Principle:** Use the `surface-container` tiers to stack information. 
    - *Level 0:* `surface` (Base page)
    - *Level 1:* `surface-container-low` (Content groupings)
    - *Level 2:* `surface-container-lowest` (Interactive cards/Active elements)
- **Ambient Shadows:** Shadows must be felt, not seen. Use a blur of 32px–48px with an opacity of 4%–6% using the `on-surface` color. This mimics natural light passing through a high-end clinic window.
- **The Ghost Border:** If a form field or secondary button requires a container, use the `outline_variant` (#bdc9c8) at 20% opacity. This provides a "suggestion" of a boundary without breaking the organic flow of the page.

---

## 5. Components

### Buttons
- **Primary:** Rounded-full (`9999px`), background `primary`, text `on_primary`. Use the signature gradient on hover.
- **Secondary (The 'Book' Style):** Rounded-full, background `inverse_surface` (#2f3130), text `inverse_on_surface`. High contrast for immediate conversion.
- **Tertiary:** Text-only with an underline or trailing arrow, using `primary`.

### Cards & Lists
- **Service Cards:** Use `rounded-lg` (1rem). Forbid the use of divider lines. Separate items using `spacing-4` or `spacing-6`. 
- **Content Grouping:** Use `surface-container-lowest` for the card background against a `surface-container-low` section to create "Tonal Elevation."

### Input Fields
- **Treatment:** Ghost borders only. Use `surface-container-highest` for the background. On focus, transition the background to `surface_container_lowest` and add a 1px `primary` border.

### Chips
- **Status/Service Chips:** Use `surface-container-highest` with `on-surface-variant` text. Rounded-full only.

### Additional Component: The "Soft-Hero" Treatment
Combine a `display-md` headline with a `surface_container_low` background and an asymmetrical image placement. The image should feature `rounded-xl` (1.5rem) to maintain the "Modern Medical" softness.

---

## 6. Do's and Don'ts

### Do
- **Do** use asymmetrical margins (e.g., 2/3 vs 1/3 grid splits) to create an editorial, high-fashion medical feel.
- **Do** use `primary_fixed_dim` (#7ad5d7) for background washes behind medical photography to tie the brand together.
- **Do** prioritize vertical whitespace. If you think there is enough space, add 20% more.

### Don't
- **Don't** use 1px solid black or high-contrast grey borders. They feel "cheap" and "engineered."
- **Don't** use standard "drop shadows" (e.g., 0px 2px 4px). They are too heavy for a clinical sanctuary.
- **Don't** use sharp corners. Everything must feel safe and "soft-touch" (minimum `rounded-md` 0.75rem).
- **Don't** use more than two teal variants in a single component to avoid visual vibration.