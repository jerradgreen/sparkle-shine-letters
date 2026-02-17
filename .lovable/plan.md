

## Authority + Buyer Positioning Optimization (with Safety Corrections)

All changes refine positioning and authority for institutional buyers. No layout, pricing, structure, or design changes.

---

### 1. Strengthen Hero Subheadline

**File:** `src/components/MarqueeHeroSection.tsx` (line 46) and `src/config/templateConfigs.ts` (line 369)

Current:
> "Built for schools, universities, corporations, and event companies that need bold, reusable signage for every occasion."

New:
> "Commercial-grade steel marquee letters built for schools, universities, and corporations that need durable, reusable signage across years of events."

Updated in both files to keep them in sync.

---

### 2. Update "Who Buys" Section Header

**File:** `src/pages/EventStandUpSigns.tsx` (line 48)

Change from: "Who Buys Commercial Marquee Letters?"
To: "Who Buys Commercial Stand-Up Marquee Letters?"

Stays H2.

---

### 3. Strengthen Benefits Cards

**File:** `src/components/HighlightsSection.tsx` (lines 8, 13, 18) and `src/config/templateConfigs.ts` (lines 383, 388, 393)

Updated descriptions (no E12, no warm-glow, no bulb base references):

- **Durable and Self-Standing:** "Powder-coated steel construction with a self-standing base design. Built for repeated setup and teardown across years of events."
- **Bold and Bright:** "36-inch and 48-inch tall with LED bulbs. High-visibility impact for graduations, pep rallies, conferences, and brand activations."
- **Easy to Use and Transport:** "Arrive pre-lit and ready to deploy. Optional foam-lined boxes for long-term storage and repeated transport between venues."

---

### 4. Add "Built for Institutional Use" Micro-Section

**File:** `src/pages/EventStandUpSigns.tsx` -- insert between `<HighlightsSection />` (line 59) and `<TestimonialSection />` (line 60)

New section:

> **Built for Institutional Use** (H2)
>
> The 36-inch size is the most common choice for institutional buyers -- easy to store, transport, and deploy across a full calendar of events. The 48-inch size is available for high-visibility venues such as auditoriums, outdoor stadiums, and convention halls. Every letter is designed for repeated transport and setup, with powder-coated steel construction that holds up across years of use. Many schools, universities, and corporate teams keep these as repeat-use event inventory.

Styled with `py-8 px-4 bg-muted/20`, `max-w-4xl mx-auto`, matching existing paragraph blocks.

---

### 5. FAQ Updates

**File:** `src/config/templateConfigs.ts`

**Bulb FAQ (line 482-484):** Replace answer with:
> "We use LED bulbs designed for durability and easy replacement. You'll receive spare bulbs with your order, and replacements are available if needed."

Remove all references to E12, candelabra base, warm-glow, and Amazon.

**Add one new FAQ** at end of items array:
- **Q:** "Are these letters suitable for long-term institutional use?"
- **A:** "Yes. These letters are built with powder-coated steel and LED bulbs designed for repeated setup and teardown. Schools, universities, and corporate teams use them across dozens of events per year. With foam-lined storage boxes, they transport safely and store compactly between deployments."

---

### 6. Internal Linking Anchor Text

**File:** `src/pages/EventStandUpSigns.tsx`

- Line 125: "Commercial Rental Inventory page" becomes "Commercial Rental Inventory Packages"
- Line 132: "wall-hanging marquee signs" becomes "Wall-Hanging Marquee Signs"
- Line 136: "custom layered logos" becomes "Custom Layered Logos"

URLs unchanged.

---

### 7. Image ALT Text (Literal and Accurate)

**File:** `src/components/MarqueeHeroSection.tsx` (line 25)
- Change to: "Stand-up marquee letters displayed at an indoor event venue"

**File:** `src/config/templateConfigs.ts` (gallery ALTs, lines 437-442)
- image1969: "Marquee numbers displayed at a graduation-themed event"
- imageElev8: "Stand-up marquee letters spelling ELEV8 at an event venue"
- imageMarryMe: "Stand-up marquee letters spelling MARRY ME at an indoor event display"
- imageDrewiaHill: "Stand-up marquee letters displayed at an event venue"
- imageSetup1: "Marquee letters displayed on a stage setup"
- imageSetup2: "Stand-up marquee letters displayed at an event venue"

Also update hero ALT in config (line 373):
- "Stand-up marquee letters displayed at an indoor event venue"

---

### 8. Verification Checklist

- No bulb base type (E12) mentioned anywhere
- No color temperature or "warm-glow" promises
- ALT text is literal and factual -- no assumed sizes, no "corporate" or "proposal" labels
- No "not one-time purchases" phrasing
- Only 1 H1 (in MarqueeHeroSection)
- H1 does NOT contain "for sale"
- Meta title and description unchanged (already correct)
- $800 price for 36" only, no 48" price
- No rental-business pricing language

