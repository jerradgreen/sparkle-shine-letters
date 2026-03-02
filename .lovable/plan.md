

## Homepage SEO Audit + Duplicate Fix

### Issues Found

**1. Duplicate rental inventory mentions (lines 265-290)**
You're right — there are two back-to-back sections that both talk about rental inventory:
- Line 266-269: "For entrepreneurs and event companies exploring recurring revenue opportunities, starting a marquee letter rental business..."
- Lines 280-291: H2 "Start a Commercial Marquee Letter Rental Business" + paragraph linking to /rental-inventory

These say nearly the same thing in different words, right next to each other. Looks redundant to both users and Google.

**2. SEO keyword gaps**
- The H1 ("Trusted by Hundreds. Built for the Spotlight.") contains zero target keywords — no "marquee," no "signs," no "letters." Google uses H1 heavily for ranking signals.
- The subheadline mentions "marquee sign style" once, which is good, but the H1 is the most important on-page element and it's purely emotional copy with no search terms.
- The page has no H2s until the very bottom ("Not sure which style..." and "Start a Commercial Marquee Letter Rental Business"). The middle of the page (highlights, review, Instagram) has H3s but no keyword-rich H2 structure.
- The `<title>` tag is solid. Meta description is solid. But the on-page heading hierarchy underperforms.
- The HomeHighlightsSection has no section heading at all — missed H2 opportunity.

**3. What to fix**

---

### Plan

**File: `src/pages/Index.tsx`**

**Change 1 — Consolidate the two duplicate rental sections into one**

Merge lines 265-291 into a single section. Keep the H2 "Start a Commercial Marquee Letter Rental Business" (good for SEO), but combine the content into one paragraph that includes both the /rental-inventory link AND the /rental-business link. Delete the separate standalone paragraph above it.

New single section:
```
H2: "Start a Commercial Marquee Letter Rental Business"

Paragraph: "Our commercial marquee letter rental business packages are built for 
entrepreneurs and event rental companies who want durable, high-ROI inventory 
designed for repeated bookings and long-term profitability. Learn more about 
starting a marquee letter rental business, from startup costs to scaling your inventory."
```
- "commercial marquee letter rental business packages" links to /rental-inventory
- "starting a marquee letter rental business" links to /rental-business

**Change 2 — Add keywords to H1**

Change the H1 from:
> "Trusted by Hundreds. Built for the Spotlight."

To:
> "Custom Marquee Signs & Letters — Trusted by Hundreds Since 2008"

This keeps the trust/emotional angle but front-loads the primary keyword phrase "Custom Marquee Signs & Letters" and adds the authority signal "Since 2008."

**Change 3 — Add H2 to HomeHighlightsSection**

**File: `src/components/HomeHighlightsSection.tsx`**

Add an H2 above the 3-card grid:
> "Handcrafted Marquee Signs for Every Space"

This gives Google another keyword-rich heading in the mid-page and reinforces "marquee signs."

**Change 4 — Upgrade Instagram section heading**

Change the `<h3>` "Our Recent Work" to an `<h2>` and make it slightly more keyword-relevant:
> "Our Recent Marquee Sign Projects"

---

### Summary of SEO improvements
- H1 now contains "Custom Marquee Signs & Letters" (primary keyword)
- New H2 in highlights: "Handcrafted Marquee Signs for Every Space"
- Instagram H2: "Our Recent Marquee Sign Projects"
- Duplicate rental sections consolidated into one clean block
- No layout/design changes, just copy and heading hierarchy

