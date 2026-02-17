

## Update SEO Title, Meta Description, and Static Fallback

### Changes

**1. Update Helmet block in `src/pages/RentalInventory.tsx` (lines 39-40)**
- Change `<title>` to: "Commercial Marquee Letter Rental Business Packages | Vintage Marquee Lights"
- Change `<meta name="description">` to: "Commercial-grade marquee letter rental business packages built for entrepreneurs and event rental companies. Durable 36" letters, high-ROI inventory, and scalable packages designed for long-term rental success."
- No other tags added or removed

**2. Update static fallback in `index.html` (line 8)**
- The current static meta description is page-specific (rental inventory copy). Per the request, replace it with the generic fallback: "Vintage Marquee Lights designs and manufactures commercial-grade marquee letters and rental inventory packages."
- This ensures the static fallback stays generic while Helmet overrides it per-route

### What stays the same
- No new meta tags added
- No OG tag changes
- No duplicate title or description tags
- Preload link in Helmet block untouched

