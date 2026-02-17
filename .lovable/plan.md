

## Rental Inventory Page Refinement

This plan covers SEO improvements, content clarifications, and positioning refinements to the `/rental-inventory` page. No sections are removed, no layout changes, no navigation changes.

---

### 1. Update Title Tag and Meta Description

**Current title:** "Commercial Marquee Letter Rental Business Packages | Vintage Marquee Lights"

**New title:** "Marquee Letter Rental Business Inventory | 36" & 48" Commercial-Grade Letters"

**New meta description:** "Commercial-grade 36" and 48" marquee letter rental inventory for event businesses. Learn investment ranges, ROI potential, and how to build scalable letter, number, and symbol inventory."

File: `src/pages/RentalInventory.tsx`, lines 39-49.

---

### 2. Update H1 (Both Mobile and Desktop)

The current H1 is "Start or Expand a Commercial Marquee Letter Rental Business" -- it contains the core phrase but doesn't mention inventory or sizes.

**New H1:** "Marquee Letter Rental Business Inventory -- Commercial-Grade 36" & 48" Letters"

This updates both the mobile H1 (line 77) and desktop H1 (line 117-118).

---

### 3. Insert New Paragraph Directly Under H1, Above "Why Most Event Businesses Leave Money on the Table"

A two-paragraph block will be inserted between the hero section (ending ~line 158) and the "Why Most Event Businesses" section (starting at line 230). It will use the same `max-w-4xl` container and `text-base text-muted-foreground leading-relaxed` styling as existing body paragraphs.

Content:

> If you're building or expanding a marquee letter rental business, your inventory determines your earning capacity. Our commercial-grade 36" letters are the industry standard for rental companies, with 48" options available for larger-scale displays and premium bookings. Complete inventory includes letters, numbers, symbols, and optional double-row display stands -- allowing you to service weddings, corporate events, school functions, milestone celebrations, and fully custom names or event titles without turning away high-value bookings.
>
> This page outlines realistic inventory investment ranges (typically $12,000--$35,000 depending on scope), revenue potential per event, and how to structure scalable inventory correctly from the start.

---

### 4. Clarify Inventory Depth in the "H2: Commercial-Grade Inventory" Section

In the section at lines 160-173, update the content to clearly state:

- Letters A-Z available
- Numbers 0-9 available
- Symbols such as ampersand and common event characters
- Double-row display stands available
- 36" is the most common rental size
- 48" available for higher-impact displays
- Building complete inventory up front is significantly more cost-effective than ordering small quantities over time (replacing any "phase" language)

This will be done by editing the paragraph text in lines 166-171 to naturally incorporate these details.

---

### 5. Reinforce SEO Key Phrases

Throughout the edits above, the primary phrase "marquee letter rental business" and secondary phrases ("marquee rental inventory," "commercial marquee letters," "36 inch marquee letters," "48 inch marquee letters," "marquee letters for event rental") will be woven naturally into the new and edited content without keyword stuffing.

---

### Technical Details

- **File modified:** `src/pages/RentalInventory.tsx` only
- **No sections removed**
- **No CTA changes**
- **No layout/structure changes**
- **No new headings added in the inserted paragraph section**
- All changes use existing typography classes (`text-base text-muted-foreground leading-relaxed`, `text-sm`, etc.)

