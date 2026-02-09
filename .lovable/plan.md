

## Create a Dedicated Sign Type Selection Page

### The Problem
Your old website has a link that needs to redirect somewhere, but the sign type chooser currently only exists as a popup dialog -- there's no standalone URL to link to.

### The Solution
Create a new page at `/quote` (or `/get-started` -- your choice) that displays the same 6 sign type options as the popup, but as a full page. You can then point your old website's link to this URL.

### How It Will Look
- Navigation bar at top
- A heading like "What type of sign are you interested in?"
- The same 6 option cards in a grid: Wall Letters, 3D Layered Signs, Mobile Vendors, Stand-Up Letters, Rental Inventory, Not Sure / Other
- Clicking any option navigates to the corresponding quote form
- Footer at bottom

### Technical Details

**New file: `src/pages/QuoteSelector.tsx`**
- A simple page component with Navigation, the 6 option cards (reusing the same `signTypeOptions` data from `Navigation.tsx`), and Footer
- Each card links to its respective `/quote/...` route
- Styled consistently with the rest of the site

**Update: `src/App.tsx`**
- Add a route for `/quote` pointing to the new `QuoteSelector` page
- Existing `/quote/wall-hanging`, `/quote/3d-logos`, etc. routes remain unchanged

### What You Do After
Point your old website's redirect to:
`https://sparkle-shine-letters.lovable.app/quote`

