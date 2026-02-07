

## Merge Rental Guide Download into Rental Inventory Thank-You Page

### What Changes

**1. Update `src/pages/download/RentalGuide.tsx`**
- Change `formId` from `"11"` to `"1"` (same form as rental inventory)
- Change prefill value to `'Rental Inventory Package Info'` (identical submission, triggers same Zapier automation)

**2. Redesign `src/pages/thank-you/RentalInventoryThankYou.tsx`**

The updated page will flow like this, top to bottom:

1. Green checkmark icon
2. **"Thank You!"** heading
3. **Email notice:** A styled card/banner that says: *"We will email you rental package pricing info. Please check your email in about 10-15 minutes."* -- with a mail icon for visual emphasis
4. **PDF download card:** The download section from the existing Rental Guide Thank-You page, with the Download icon, "Download Your Free Guide" heading, description, and a button linking to `/downloads/rental-business-guide.pdf`
5. **"Return to Home"** button

What gets removed from the current page:
- The old generic message ("We've received your submission and will get back to you shortly...")

What gets added:
- The email notice with the 10-15 minute timeframe
- The PDF download card (pulled from `RentalGuideThankYou.tsx`)

**3. No route changes needed**
- Both `/quote/rental-inventory` and `/download/rental-guide` use Form ID 1
- Cognito Form 1 redirects to `/thank-you/rental-inventory`
- The `/download/rental-guide-thank-you` route stays in the codebase but won't be actively used

### Cognito Setup Reminder
Make sure Cognito Form 1 redirects to:
`https://sparkle-shine-letters.lovable.app/thank-you/rental-inventory`

