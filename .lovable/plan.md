

## Event Stand-Up Signs Page: SEO + Buyer Optimization

Guardrail confirmed: No existing sections/headings will be deleted or renamed. Only text inside them will be edited, and two new micro-blocks will be inserted.

---

### Files to Modify

**1. `src/config/templateConfigs.ts` (standUpSignsConfig, lines 362-490)**
- **Meta title**: "Commercial Marquee Letters for Sale | 36" & 48" Stand-Up Letters for Events"
- **Meta description**: "Commercial-grade 36" and 48" stand-up marquee letters for schools, universities, corporations, and event businesses. Self-standing, LED-lit, and built for repeat use. Letters, numbers, symbols, and topper phrases available."
- **Keywords**: Updated to target buyer intent phrases
- **Hero headline/subheadline**: Updated in config (though MarqueeHeroSection hardcodes its own -- see below)
- **Hero image alt**: Updated to describe 36" stand-up letters
- **Features items**: Update card 2 description to replace "weddings, proms, and parties" with broader institutional use cases
- **FAQ items**: Remove rental pricing Q&A (Q3), rewrite remaining for buyer focus, add new Q&As for 36 vs 48, numbers/symbols, stands, foam-lined boxes
- **Gallery image alts**: Updated to describe content accurately
- **Business description**: Changed from "rental business" to ownership/commercial language

**2. `src/components/MarqueeHeroSection.tsx`**
- **H1 (line 41)**: Change to "Commercial 36" & 48" Stand-Up Marquee Letters for Sale"
- **Subheadline (line 46)**: Change to institutional repeat-use messaging
- **Pricing text (lines 53, 61)**: Remove "business use, not just one-nighters" rental framing; replace with ownership-focused text
- **Hero image alt (line 25)**: Update to describe 36" stand-up marquee letters at event

**3. `src/components/HighlightsSection.tsx`**
- **Card 2 description (line 13)**: Replace "weddings, proms, and parties" with "graduations, pep rallies, corporate events, and brand activations"
- All section headings and card titles remain unchanged

**4. `src/pages/EventStandUpSigns.tsx`**
- **INSERT Institutional/Repeat-Use block**: Between mobile hero button (line 42) and HighlightsSection (line 45)
- **INSERT What-to-Buy inventory guidance block**: Between the "Link to Homepage" section (line 64) and Gallery (line 66)
- **Update internal links (lines 88-98)**: Reword rental-business link to ownership context; replace second link with contextual link to wall-hanging/custom signs page
- No sections deleted or renamed

**5. `src/App.tsx`**
- Add 4 new routes: /blog, /blog/why-schools-buy-commercial-marquee-letters, /blog/36-vs-48-inch-marquee-letters, /blog/universities-teams-marquee-letters-branding

### New Files to Create

**6. `src/pages/blog/BlogIndex.tsx`** -- Simple article listing page with ShopifyHeader/Footer

**7. `src/pages/blog/WhySchoolsBuyMarqueeLetters.tsx`** -- ~500 word post, links back to /event-standup-signs and /wall-hanging-signs

**8. `src/pages/blog/ThirtySixVsFortyEightInchMarqueeLetters.tsx`** -- ~500 word post comparing sizes, links back to /event-standup-signs

**9. `src/pages/blog/UniversitiesTeamsMarqueeLetters.tsx`** -- ~500 word post on university/team branding use cases, links back to /event-standup-signs and /3d-logos

---

### Technical Details

All blog posts use Helmet for SEO meta tags, ShopifyHeader + ShopifyFooter for layout consistency, and standard Tailwind typography classes matching existing pages. No new dependencies required.

