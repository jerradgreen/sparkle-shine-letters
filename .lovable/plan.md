

## Custom Logo Signs — Authority + Intent Expansion (with Final Refinements)

Full expansion plan with the two refinements applied. No layout, pricing, or URL changes.

---

### 1. Two New H2 Content Sections (`src/pages/ThreeDLogos.tsx`)

Insert between the Trust Bar (line 232) and Testimonials (line 234).

**H2 #1: "Custom Logo Signs That Define Restaurants, Retail, and Offices"**

2-3 concise paragraphs:
- Focus on what buyers want: brand focal point, lobby/backbar feature, photo moment, customer recall
- Common placements: lobby, behind the counter, feature wall, entry, reception, bar back
- Design-forward, commissioned tone (metal fabrication, layered depth, hand-finished)
- Naturally includes once each: "custom business signs," "restaurant logo sign," "office lobby sign"

**H2 #2: "Fabricated Metal Branding, Built as a Statement Piece"**

2 concise paragraphs:
- Layered depth and dimensional presence vs flat signage
- Materials/finish: metal, hand-finished, vintage edge, dimensional layers
- Elevated tone (fabricated, commissioned, bespoke)
- Naturally includes once each: "custom metal sign," "dimensional logo sign"

Both sections use existing page styling: `max-w-6xl`, `py-10`, `text-muted-foreground`, etc.

---

### 2. FAQ Expansion (`src/config/templateConfigs.ts`)

Add one new item to `faq.items` array (after existing 6 items, line ~801):

**Q:** "What do you need from me to build a custom logo sign?"
**A:** Friendly, practical answer: vector file preferred (AI/SVG/PDF) but can work from PNG/JPG; confirm size, colors, installation location (indoor/outdoor), and timeline. High-end but approachable tone.

---

### 3. Subheadline Micro-Copy (`src/config/templateConfigs.ts`)

Append to existing `subheadline` (line 665) one final sentence:

> "Ideal for brands seeking custom business signage that feels architectural, intentional, and distinctly their own."

---

### 4. Clean Up Remaining "3D" References (`src/config/templateConfigs.ts`)

- Line 657 comment: `"// 3D Logo Layered Signs Template"` changed to `"// Custom Logo Signs Template"`
- Line 670 `heroImageAlt`: Replace `"3D layered"` with `"custom layered"`

---

### Files Edited

| File | Changes |
|------|---------|
| `src/pages/ThreeDLogos.tsx` | Insert 2 new H2 content sections between Trust Bar and Testimonials |
| `src/config/templateConfigs.ts` | Append subheadline sentence; add 1 FAQ item; clean comment + alt text |

### What stays untouched
- URL remains `/3d-logos`
- Layout structure unchanged
- Pricing amounts unchanged
- No "permanent," "reinforced backs," or rental language
- Artisan/commissioned tone preserved

