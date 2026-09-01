# Diagnosis: Product schema still on /rental-inventory

## What was found

The `Product` JSON-LD with the item name "Marquee Letter Rental Business Package" is emitted from exactly one place:

- `src/pages/RentalInventory.tsx`, lines 129–141 — an inline `<script type="application/ld+json">` inside the page's own `<Helmet>` block.

That single block contains:
- `"@type": "Product"` with `name` "Marquee Letter Rental Business Package" and the description beginning "Commercial-grade marquee letter rental business packages…"
- `brand` (Brand: Vintage Marquee Lights)
- `offers` (Offer with `availability: InStock` and `seller`)
- `aggregateRating` (ratingValue 5, reviewCount 47)

No individual `review` objects exist in this block. A project-wide search returns no other file, component, or script containing that item name or description.

## Why cleaning up StructuredData.tsx did not remove it

`src/pages/RentalInventory.tsx` does not use `src/components/seo/StructuredData.tsx` (or `PageTemplate`) at all. It hand-rolls its own `Helmet` head, including its own Product JSON-LD. So the earlier removal of `productSchema` from `StructuredData.tsx` only affected template-driven pages; this route's schema is hardcoded locally and was untouched.

Two other JSON-LD emitters were checked and are unrelated:
- `index.html` line 263 — sitewide `Organization` schema (no Product, no ratings).
- `scripts/generate-static-seo-pages.mjs` lines 507–530 — prerender emits only `BreadcrumbList` and `FAQPage`; it does not emit Product, Offer, or ratings for `/rental-inventory`.

## Smallest safe correction

Delete only lines 129–141 of `src/pages/RentalInventory.tsx` (the single `<script type="application/ld+json">` element and its object literal). Nothing else in that file references it.

Result: `/rental-inventory` stops emitting Product / Merchant Listing / Offer / AggregateRating markup, while the sitewide Organization schema and the prerendered Breadcrumb/FAQ schema remain intact. No replacement Product, Service, Offer, price, shipping, or return-policy markup is added, and no review data is invented or relocated.

Nothing else changes: no visible copy, headings, prices, financing links, titles, descriptions, canonicals, images, forms, analytics, or static SEO fallback content.

## Verification after the edit

- Confirm zero project matches for "Marquee Letter Rental Business Package".
- Run the production build and confirm the prerendered `/rental-inventory/index.html` contains no `"@type":"Product"`, `Offer`, or `AggregateRating`, and still contains the Organization schema.
