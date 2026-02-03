
## Navigation Updates + Sign Type Selection Modal

### What You Want
1. Change "Event Signs" to "Stand-Up Letters" in the Custom Signs dropdown
2. Add "Rental Inventory" link to the Custom Signs dropdown  
3. Replace the "Custom Request Form" link with a modal that asks users to select their sign type first, then routes them to the correct specialized form

### How It Will Work
When someone clicks "Custom Request Form" (or "Not Sure" in the dropdown):
- A modal pops up asking "What type of sign are you interested in?"
- They see buttons for each sign type (Wall Letters, 3D Logos, Mobile Vendors, Stand-Up Letters, Rental Inventory)
- Plus a "Not Sure / Other" option
- Clicking any option takes them to that specific form
- This ensures the right thank-you page fires, and Google Ads tracking is accurate

### Files to Modify

**`src/components/Navigation.tsx`**
- Change "Event Signs" → "Stand-Up Letters" in dropdown (lines 42 + 130)
- Add "Rental Inventory" link to dropdown (after Stand-Up Letters)
- Replace "Custom Request Form" link with a dialog trigger
- Add sign type selection modal with 6 options:

| Option | Routes To |
|--------|-----------|
| Wall Letters | `/quote/wall-hanging` |
| 3D Logos | `/quote/3d-logos` |
| Mobile Vendors | `/quote/mobile-vendor` |
| Stand-Up Letters | `/quote/event-standup` |
| Rental Inventory | `/quote/rental-inventory` |
| Not Sure / Other | `/quote/custom` |

### Technical Details
- Uses existing Dialog component from `@/components/ui/dialog`
- Modal will have a clean grid of clickable options
- Works on both desktop and mobile navigation
- "Not Sure" link in dropdown will also open this same modal (optional - or keep it going to `/quote/custom` directly)
