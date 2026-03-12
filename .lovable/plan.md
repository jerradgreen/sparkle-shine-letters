

## Add Anchor IDs to Rental Inventory Page for Google Ads Sitelinks

No anchors exist on the page currently. Here are the 5 anchors mapped to existing sections:

### File: `src/pages/RentalInventory.tsx`

| Sitelink | Anchor ID | Section (line) |
|----------|-----------|----------------|
| 4ft Marquee Letters | `#4ft-marquee-letters` | Intro section, line 167 — mentions 48" letters |
| Full Alphabet Sets | `#full-alphabet-sets` | Commercial-Grade Inventory section, line 182 — mentions A–Z, 0–9, symbols |
| Pricing & Packages | `#pricing-packages` | ROI section, line 290 — covers pricing per letter, revenue per event |
| No Franchise Fees | `#no-franchise-fees` | "You Don't Need a Franchise" section, line 348 |
| Start Rental Biz Guide | `#rental-biz-guide` | Rental Guide Download section, line 432 (via wrapper div) |

### Changes

1. **Line 167** — Add `id="4ft-marquee-letters"` to `<section>`
2. **Line 182** — Add `id="full-alphabet-sets"` to `<section>`
3. **Line 290** — Add `id="pricing-packages"` to `<section>`
4. **Line 348** — Add `id="no-franchise-fees"` to `<section>`
5. **Line 431-432** — Wrap `<RentalGuideDownloadSection />` in a `<div id="rental-biz-guide">` or add the id to the section inside the component

### Resulting Google Ads sitelink URLs
```text
/rental-inventory#4ft-marquee-letters
/rental-inventory#full-alphabet-sets
/rental-inventory#pricing-packages
/rental-inventory#no-franchise-fees
/rental-inventory#rental-biz-guide
```

No content or layout changes — just adding `id` attributes to existing `<section>` elements.

