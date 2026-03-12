

## SEO + Positioning Cleanup for `/event-standup-signs`

Three files to edit. No layout or design changes.

---

### File 1: `src/pages/EventStandUpSigns.tsx`

**Line 19** — Fix canonical URL:
```
canonicalUrl="https://inventory.vintagemarqueelights.com/event-standup-signs"
```

**Lines 44-57** — Rewrite "Who Buys" section. Rebalance buyer list to lead with universities, venues, event companies, athletic departments, corporate marketing teams — schools mentioned but not dominant. Emphasize event use cases (graduations, pep rallies, recruiting events, donor events, stage displays, brand activations). Remove any language that could sound like roadside reader boards.

**Lines 61-70** — Retitle "Built for Institutional Use" → "Built for Repeated Event Deployment". Reword body to emphasize freestanding commercial letters sold for long-term ownership and repeated deployment.

**Line 167** — Change CTA heading to: "Ready to Invest in Commercial Freestanding Marquee Letters?"

---

### File 2: `src/config/templateConfigs.ts` (lines 362-505)

**Line 363** — `pageTitle`:
`"Commercial Stand-Up Marquee Letters for Sale | 36\" & 48\" Freestanding Letters"`

**Line 364** — `metaDescription`:
`"Commercial-grade 36\" and 48\" freestanding marquee letters for sale. Built for repeated event use by universities, venues, event companies, brands, and schools for graduations, activations, and stage displays."`

**Line 365** — `keywords`: Remove "marquee letters for schools" as standalone keyword. Keep commercial/freestanding/for-sale terms.

**Line 368** — `hero.headline`:
`"Commercial Stand-Up Marquee Letters for Sale"`

**Line 369** — `hero.subheadline`:
`"Freestanding 36\" and 48\" marquee letters built for repeated use at events, graduations, brand activations, and venue displays."`

**Line 494** — `business.description`:
`"Commercial-grade freestanding marquee letters for sale to universities, venues, event companies, and institutional buyers"`

**Lines 486-488** — Rewrite last FAQ item ("suitable for long-term institutional use") to rebalance buyer list (universities, venues, event companies, athletic departments, schools) and emphasize "freestanding illuminated event letters sold for ownership."

**Add 2 new FAQ items** at end of `faq.items` array:
1. Q: "Are these the same as school marquee signs or reader boards?" / A: "No. These are freestanding illuminated event letters used for graduations, stage backdrops, branding, and promotional displays. They are not permanent roadside school reader boards or changeable message-center signs."
2. Q: "Are these for rent or for purchase?" / A: "These commercial stand-up marquee letters are sold for long-term ownership and repeated use. They are commonly purchased by universities, event companies, venues, brands, and schools that use them across multiple events each year."

---

### File 3: `src/components/MarqueeHeroSection.tsx`

**Line 41** — H1 text:
`"Commercial Stand-Up Marquee Letters for Sale"`

**Lines 45-47** — Subheadline:
`"Freestanding 36″ and 48″ marquee letters built for repeated use at events, graduations, brand activations, and venue displays."`

---

### URL Confirmation

SEOHead.tsx already uses `currentUrl` (derived from `canonicalUrl` prop) for canonical, og:url, and twitter:url. Setting `canonicalUrl="https://inventory.vintagemarqueelights.com/event-standup-signs"` on EventStandUpSigns.tsx ensures all three resolve correctly. No changes needed to SEOHead.tsx.

