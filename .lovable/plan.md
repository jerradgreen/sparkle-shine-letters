

## Mobile Vendor Page — Tweaked Refactor

Three targeted changes on top of the approved structural refactor plan.

---

### Files Edited

| File | Changes |
|------|---------|
| `src/pages/MobileVendorSigns.tsx` | Delete "Durable Food Truck & Trailer Signage" section (lines 265-281); ensure the new "Custom Food Truck & Trailer Signage" SEO section (from the approved plan) is added and includes bracket info, liability sentence, and both internal links |
| `src/config/templateConfigs.ts` | Change FAQ question text from "Are these signs safe for highway travel?" to "Can these signs be used on a truck or trailer that travels on highways?" (line 643) |

---

### 1. Delete Redundant Section

Remove the entire "Durable Food Truck & Trailer Signage Built for the Road" section (lines 265-281 in `MobileVendorSigns.tsx`), including its H2 and all three body paragraphs. This content is now covered by the new SEO section.

---

### 2. Keep New SEO Section as Only Depth Section

The new section from the approved refactor plan (H2: "Custom Food Truck & Trailer Signage") serves as the single SEO depth section. It will include:

- Bracket styles: permanent, removable, fold-down
- Liability sentence: "Final installation and mounting methods are handled by the customer or their installer based on their specific vehicle setup."
- Internal link to Custom Logo Signs (`/3d-logos`)
- Internal link to 36"/48" Stand-Up Letters (`/event-standup-signs`)

Placed between the Quick Benefits section and Testimonials (per the approved plan's section order).

---

### 3. Update FAQ Question Text

In `src/config/templateConfigs.ts` (line 643), change the question from:

"Are these signs safe for highway travel?"

to:

"Can these signs be used on a truck or trailer that travels on highways?"

The answer stays exactly as currently written.

---

### What stays untouched

- H1, subheadline, hero structure
- Pricing anchors
- Testimonials, gallery, bottom CTA
- All other FAQ items
- No new claims or guarantees added

