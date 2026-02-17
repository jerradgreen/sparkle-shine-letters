
## Add SEO-Focused FAQ Section to Rental Inventory Page

### What
Insert a new FAQ section with 5 questions about starting a marquee letter rental business, plus a closing CTA sentence with an internal link.

### Where
- **After:** The ROI section ending at line 289
- **Before:** The "You Don't Need a Franchise" section starting at line 291

### Structure
A new `<section>` block using the same layout pattern as the ROI section:
- `py-16 px-4` padding, `max-w-4xl mx-auto` container
- H2 heading with `text-3xl font-bold text-center mb-8 text-foreground`
- Each Q&A pair uses H3 (`text-xl font-semibold`) for the question and standard `text-base text-muted-foreground leading-relaxed` for the answer
- Closing CTA sentence with a `<Link>` to `/rental-inventory` using existing link styling

### Content (5 FAQs)
1. How much does it cost to start a marquee letter rental business?
2. How much can you make renting marquee letters?
3. What inventory should I buy first?
4. How long does it take to recover your investment?
5. Are commercial marquee letters different from decorative props?

### Technical Details
- File: `src/pages/RentalInventory.tsx`
- Insert between lines 289 and 291 (after ROI section closing tag, before the franchise section comment)
- Uses `react-router-dom` `Link` component (already imported) for the closing CTA link
- No existing content modified or removed
- No meta tags changed
