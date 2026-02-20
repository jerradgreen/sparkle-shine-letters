

## Mobile Vendor Page — Final SEO Expansion

All changes from the previously approved expansion plan, with the user's latest 6 refinements applied. This is the complete scope.

---

### Files Edited

| File | Changes |
|------|---------|
| `src/config/templateConfigs.ts` | Update H1, add 3 new FAQ items (including power FAQ with practical clarification) |
| `src/pages/MobileVendorSigns.tsx` | Add expanded subheading, Custom Logo Signs link (hero area), conversion sentence, revenue authority line, "Durable Food Truck & Trailer Signage Built for the Road" section, Stand-Up Letters link |

---

### In `src/config/templateConfigs.ts`

**1. H1 Headline (line 515)**

Change from:
> Custom Signs That Make Your Food Truck Impossible to Ignore

To:
> Custom Food Truck & Mobile Business Signage That's Impossible to Ignore

**2. Append 3 FAQ items** after existing 6 items (after line 637):

- **Q: What size sign works best for a food truck or trailer?**
  A: It depends on available roof or fascia space. We charge by the square inch and per color, so smaller builds (2-3 letters) start lower while full-width name signs scale up accordingly. Roof-mount signs need clearance for transport, while side-mount signs can run longer. Send us your truck dimensions and we will recommend the best fit.

- **Q: Are these signs safe for highway travel?**
  A: Yes. Our signs are fabricated from welded steel with secure mounting points designed to handle road vibration and wind. We recommend folding brackets for signs that extend above the roofline. The signs themselves are surprisingly lightweight relative to their visual impact, which reduces stress on your vehicle structure during transit.

- **Q: Can these signs run off my truck's power system?**
  A: Yes. Our food truck signage is low wattage and plugs in like a standard lamp. Typical power draw is comparable to a small household lamp. Many vendors run them through an inverter connected to their truck battery or generator. LED upgrades are available for even lower power consumption and longer lifespan.

---

### In `src/pages/MobileVendorSigns.tsx`

Changes apply to both mobile and desktop layouts:

**3. Keyword reinforcement in subheadline reference** — Update the "Hand-crafted" paragraph (lines 75-77 mobile, 126-128 desktop) to:
> Hand-crafted by experienced metal fabricators — not mass-produced plastic signage. Whether you want an illuminated or light up food truck sign, every piece is built to last.

This naturally introduces the "light up food truck sign" keyword once.

**4. Expanded subheading paragraph** — Insert after the hand-crafted paragraph:
> Built for food trucks, coffee trailers, mobile bars, pop-ups, Airstream vendors, event booths, and traveling businesses, our custom metal signage is engineered to attract attention, withstand travel, and elevate your brand wherever you park.

Uses `text-sm text-muted-foreground mb-4 leading-relaxed`.

**5. Custom Logo Signs link** — Insert directly after expanded subheading:
> For fully integrated brand marks and dimensional metal logo builds, explore our [Custom Logo Signs](/3d-logos) designed for high-impact branding.

Uses `text-sm text-muted-foreground mb-4 leading-relaxed`. Only one instance on the page. Uses `<Link>` from react-router-dom.

**6. Conversion sentence** — Insert after pricing paragraph, before CTA buttons:
> Whether you're launching a new truck or upgrading an established brand, the right custom food truck signage becomes your most visible marketing asset at every event.

Uses `text-sm text-muted-foreground mb-4 leading-relaxed`.

**7. Revenue authority line** — Insert after conversion sentence, before CTA buttons:
> For many vendors nationwide, the right illuminated food truck sign becomes their most powerful marketing tool — drawing attention from blocks away and increasing walk-up traffic at festivals, markets, and high-traffic events.

Uses `text-sm text-muted-foreground mb-6 leading-relaxed`.

**8. New SEO section** — Insert between Gallery and FAQ sections. H2:
> Durable Food Truck & Trailer Signage Built for the Road

Three paragraphs:
- "Our custom food truck signage and trailer signage is fabricated from welded steel with travel-safe mounting brackets, designed for repeated transport between events, festivals, and daily service locations."
- "Every sign receives a weather-resistant finish that performs in rain, wind, and direct sun. Secure fastening points prevent shifting during transit, and folding bracket options keep your sign protected on the highway."
- "Power options include standard plug-in connections and LED upgrades for lower consumption. These illuminated food truck signs run efficiently off inverters or generators, making them reliable mobile vendor signs for high-traffic events and daily operations."

Uses `max-w-6xl mx-auto`, `text-muted-foreground text-sm leading-relaxed` styling.

**9. Stand-Up Letters link** — Insert in FAQ section after existing cross-link paragraphs (after line 270):
> Need freestanding illuminated letters instead of mounted signage? Explore our [36"/48" Stand-Up Letters](/event-standup-signs) for mobile displays and events.

Uses `text-muted-foreground text-sm mt-4 max-w-5xl mx-auto`.

---

### What stays untouched
- Layout structure
- Pricing anchors ($3,000 starting, $5,000-$10,000 range)
- Existing testimonials
- Existing CTA buttons
- Visual hierarchy and design
- No geographic language added

