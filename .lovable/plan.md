

## Mobile Vendor Page — Liability-Safe Refinement

Tightening the hero section and removing installation/safety liability language from the SEO section and FAQ.

---

### Files Edited

| File | Changes |
|------|---------|
| `src/pages/MobileVendorSigns.tsx` | Remove conversion sentence from hero (both layouts), replace "Built for the Road" section body |
| `src/config/templateConfigs.ts` | Replace highway travel FAQ answer |

---

### 1. Hero Section — Remove Extra Conversion Sentence

Remove the "Whether you're launching a new truck..." paragraph from both mobile (line 87-89) and desktop (line 150-152) layouts. This keeps the hero to: H1, subheadline, hand-crafted paragraph, "Built for" paragraph, Custom Logo Signs link, pricing anchor, revenue line, then CTAs.

The "light up food truck sign" phrase remains in the hand-crafted paragraph (once only). H1 stays unchanged.

---

### 2. Replace "Durable Food Truck & Trailer Signage Built for the Road" Section Body

H2 stays as-is. Replace the three paragraphs (lines 276-284) with:

**Paragraph 1:**
"Our custom food truck signage and trailer signage is fabricated from welded steel and built for bold visual impact in mobile environments."

**Paragraph 2:**
"We can fabricate permanent, removable, or fold-down bracket options depending on how you plan to mount your sign. Final installation and mounting methods are handled by you or your installer based on your specific vehicle setup."

**Paragraph 3:**
"Power options include standard plug-in connections and LED upgrades for lower consumption. These illuminated food truck signs are designed for reliable daily use at events and service locations."

Removes: highway safety guarantees, weather resistance promises, road vibration language, transit stress claims.

---

### 3. Replace Highway Travel FAQ Answer

In `src/config/templateConfigs.ts` (line 644), replace the answer for "Are these signs safe for highway travel?" with:

"Our signs are fabricated from welded steel, and we can provide bracket style options based on your project. Installation and mounting methods are determined by the customer or their installer to ensure proper fit and safety for their specific truck or trailer."

---

### 4. No Changes To

- H1 (stays as-is)
- Power FAQ (stays as-is)
- Layout, testimonials, CTAs, pricing anchors, visual hierarchy
- "Light up food truck sign" phrase (remains once in hero)

