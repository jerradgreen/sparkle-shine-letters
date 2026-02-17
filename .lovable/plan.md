

## Remaining Updates for /rental-inventory

### What's Already Done
- H1 updated (both mobile + desktop)
- Intro paragraph updated (both mobile + desktop)
- Small line above H1 changed to "For Entrepreneurs & Event Rental Companies" as a `<p>` tag

### What Still Needs to Be Done

**1. Update intro paragraph text (minor tweak)**
Add "(with 48" options available)" to the existing intro paragraph in both mobile and desktop versions. Current text says "...durable 36" letters designed for..." -- needs to say "...durable 36" letters (with 48" options available) designed for..."

**2. Add new H2 section between hero and feature cards (line ~158)**
Insert a new `<section>` block after the hero closes and before the Feature Cards section. It will contain:
- A proper `<h2>` tag: "Marquee Letter Rental Business Packages -- Commercial-Grade Inventory"
- Two paragraphs about owning inventory and what each package includes

**3. Add new FAQ item before Objection Busters (line ~795)**
Insert a new FAQ entry:
- Q: "Is this for event rentals or starting my own rental business?"
- A: "These packages are specifically built for entrepreneurs and event rental companies who want to own their own marquee letter rental inventory. This is not a short-term event rental -- it's a business investment."

### Technical Details
- **File:** `src/pages/RentalInventory.tsx`
- No new components, imports, or dependencies
- New H2 section uses existing Tailwind classes consistent with page styling
- FAQ entry follows the existing pattern (h3 for question, p for answer, border-b styling)

