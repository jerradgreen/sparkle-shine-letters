# Redesign /custom-marquee-signs

Rebuild the existing page at `/custom-marquee-signs` (same route, same file) into a photography-led landing page for the Custom Signs Google Ads campaign that also works as a permanent SEO page. Global `Navigation` and `Footer` stay, and all existing quote destinations stay exactly as they are.

## What stays the same (verified in code)

- Route `/custom-marquee-signs` → `src/pages/CustomMarqueeSigns.tsx` (unchanged registration).
- Existing destinations reused as-is: `/wall-hanging-signs`, `/3d-logos`, `/mobile-vendor-signs`, and the custom request form `/quote/custom`.
- No tracking changes. This page contains no analytics code of its own — `page_view` comes from the global route tracker and `generate_lead` / Ads conversions fire only on thank-you pages. Nothing in that chain is touched.
- Nothing is published.

## New page structure

1. **Hero** — collage of 3–5 real VML project photos already used on the site, with the eyebrow "CUSTOM MARQUEE SIGNS SINCE 2008", H1 "Custom Marquee Signs & Light-Up Signs", supporting headline "Bring Your Idea to Life", the approved body copy, primary CTA "Explore Sign Styles" (anchor scroll to the sign-style section), secondary CTA "Request a Custom Quote" (`/quote/custom`), and the trust line "The Original Vintage Marquee Light Makers • Creating Custom Signs Since 2008 • Ships Nationwide".
2. **Find the Style That Fits Your Idea** — 4 image cards with your exact copy: Wall-Hanging (`/wall-hanging-signs`), Custom Logo & Layered (`/3d-logos`), Mobile Vendor & Food Truck (`/mobile-vendor-signs`), Something Completely Custom (`/quote/custom`). Event stand-up letters are intentionally excluded.
3. **See What We've Made** — responsive 8–12 image gallery of existing project photography (bulb marquee words, restaurant/bar signs, logo/layered builds, commercial installs). Captions only describe what is visible; no invented names or locations.
4. **Made for Businesses, Brands & Spaces** — your copy plus a compact chip/tile grid of the 12 applications. No per-industry paragraphs.
5. **Why Vintage Marquee Lights?** — the four concise value points, replacing the current technical text block.
6. **From Your Idea to Your Sign** — the 4-step process, no production-time promises.
7. **Signs Made to Be Remembered** — see the testimonial note below.
8. **Have a Sign in Mind?** — final CTA band: "Request a Custom Quote" (`/quote/custom`) plus "Explore Sign Styles".

## Two items that need your decision

**A. Testimonials.** Only three reviews on the site read as real, attributed customers:

- Joy Hackney — Vehicle Marketing Administrator, Lexus Southern Area
- DJ Franco Events — Event Entertainment and Production Company
- Dion & Chantal Powell — C&D Marquees and Event Rentals

The other testimonials in `src/config/templateConfigs.ts` (e.g. "Jessica Martinez", "Robert Chen") look like placeholder template content, so I will not use them. Plan: use those three verified quotes paired with project photography. If you have real restaurant/bar/business quotes, send them and I'll swap them in.

**B. Proposed metadata** (nothing changes until you approve these two strings):

- Title (58 chars): `Custom Marquee Signs & Light-Up Signs | Since 2008`
- Description (155 chars): `Custom marquee signs, light-up signs, logo signs and wall signs built to order since 2008. Send your logo, design or idea — we build it and ship nationwide.`

Approving them means I also update the matching entries in `index.html` (bootstrap meta map) and `scripts/generate-static-seo-pages.mjs` for `/custom-marquee-signs`, so the static and client metadata agree.

## Technical notes

- Single file rewrite: `src/pages/CustomMarqueeSigns.tsx`, using existing `Card`/`Button` components and semantic tokens only (no hardcoded colors).
- Imagery: existing Shopify CDN project photos already referenced in `src/pages/Index.tsx` and the product pages, plus local `src/assets` project photos. No stock photos, no generated signs.
- Heading structure: one H1, section H2s, card titles as H3.
- Alt text written strictly from what is visible in each photo.
- Wording follows the brand rules: artisan/handcrafted language for wall-hanging and logo signs, no "commercial-grade" outside the event/rental lines, no "Edison bulbs".
