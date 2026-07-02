Text-only SEO copy updates across four files. No layout, styling, images, or logic changes.

## Files & changes

**1. `src/config/templateConfigs.ts`**
- `wallHangingConfig`: update `pageTitle`, `metaDescription`, `keywords`, `hero.headline`, `hero.subheadline` per spec.
- `logoSignsConfig`: update `pageTitle`, `metaDescription`, `keywords`, `hero.headline`, `hero.subheadline`, `business.description`, and the "Our layered sign is the centerpiece..." testimonial content.

**2. `src/pages/Index.tsx`**
- In `signStyles` array, update `title` + `description` for the `/wall-hanging-signs` entry and the `/3d-logos` entry.

**3. `src/pages/ThreeDLogos.tsx`**
- Replace Authority Section 1 (h2 + 3 paragraphs) with new "Custom Signs for Restaurants, Bars, Offices, and Retail" copy.
- Replace Authority Section 2 (h2 + 2 paragraphs) with new "Custom Metal Signs That Actually Look Like Your Brand" copy.
- Update two feature-card descriptions ("Multi-layered metal signs..." and "Match your brand style...").
- Update the two bottom FAQ-adjacent paragraphs ("custom layered and dimensional signage" → "custom metal business signs"; "layered signage" → "custom business signs").

**4. `src/pages/WallHangingMarqueeSigns.tsx`**
- Update FAQ subtitle "Everything you need to know about wall-hanging marquee signs" → "Everything you need to know about ordering a custom marquee sign".
- Update the "Designed to Hang Like Art" section: h2 → "Custom Marquee Signs That Hang Like Art" and replace its paragraph with the new copy.

## Verification
Production build (`npm run build`) to confirm no TypeScript/JSX errors after edits.
