

# Upgrade Sign Selection to Image Cards Everywhere

## What We're Doing

Three places currently show sign-type selection options as plain text boxes. We'll upgrade all three to use the same beautiful image card style seen on the homepage -- with photos, titles, descriptions, and a "click to quote" label instead of "click for more."

## The Three Locations

1. **`/quote/custom` page** (`src/pages/forms/CustomQuote.tsx`) -- Currently shows a blank Cognito form. We'll replace it with the 6 image card grid that routes to the correct quote form for each sign type (same as `/quote` but with images).

2. **`/quote` page** (`src/pages/QuoteSelector.tsx`) -- Currently shows 6 plain text boxes. We'll replace them with the same image card grid.

3. **Navigation "Custom Request Form" modal** (`src/components/Navigation.tsx`) -- Currently shows 6 plain text boxes in a dialog. We'll add images to these boxes as well (slightly smaller to fit the modal).

## Shared Data

We'll create a single shared data file so all three locations pull from the same sign style definitions (images, titles, descriptions, and quote form paths). This avoids duplicating the image URLs and data in three places.

## Visual Style

Each card will look like the homepage cards:
- Background image with gradient overlay
- Title and description text overlaid
- "click to quote" label at bottom (instead of "click for more")
- Hover effect with image zoom

The modal version will use smaller cards to fit the dialog width.

---

## Technical Details

### New file: `src/data/signStyleQuoteOptions.ts`

A shared array with 6 entries, each containing:
- `title`, `description`, `image` (Shopify CDN URL), `path` (quote form route), `imagePosition` (optional)

Using the same images from the homepage `signStyles` array but with quote-form paths:
- Wall Letters -> `/quote/wall-hanging`
- 3D Layered Signs -> `/quote/3d-logos`
- Mobile Vendors -> `/quote/mobile-vendor`
- Stand-Up Letters -> `/quote/event-standup?showTopper=true`
- Rental Inventory -> `/quote/rental-inventory`
- Not Sure / Other -> `/quote/not-sure`

### New component: `src/components/SignStyleImageGrid.tsx`

A reusable grid component that renders the image cards. Accepts a prop for card size variant (`default` for full pages, `compact` for modal) and an `onSelect` callback.

### Modified: `src/pages/forms/CustomQuote.tsx`

- Remove the blank Cognito form entirely
- Replace with the `SignStyleImageGrid` component inside a page layout with Navigation/Footer
- Clicking a card navigates to the appropriate quote form

### Modified: `src/pages/QuoteSelector.tsx`

- Replace the plain text button grid with the `SignStyleImageGrid` component
- Keep existing page wrapper (Navigation, Footer, Helmet)

### Modified: `src/components/Navigation.tsx`

- In the Dialog for "Custom Request Form" (both desktop and mobile), replace the plain text buttons with `SignStyleImageGrid` using `compact` variant
- Widen the dialog slightly (`sm:max-w-2xl`) to accommodate image cards
- Each card click closes the dialog and navigates to the quote form

### Files changed summary

| File | Action |
|---|---|
| `src/data/signStyleQuoteOptions.ts` | New -- shared data |
| `src/components/SignStyleImageGrid.tsx` | New -- reusable image grid component |
| `src/pages/forms/CustomQuote.tsx` | Replace blank form with image grid page |
| `src/pages/QuoteSelector.tsx` | Replace text buttons with image grid |
| `src/components/Navigation.tsx` | Add images to modal (both desktop and mobile instances) |

