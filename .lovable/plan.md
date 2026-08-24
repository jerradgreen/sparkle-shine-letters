# Own It flow — confirm and harden

## Current state (verified in code)

- Own It landing page: `/download/rental-guide` → `src/pages/download/RentalGuide.tsx`, Cognito **Form ID 1**, prefill `WhatStyleOfSignAreYouWantingUsToMake = "Rental Inventory Package Info/Download Biz Guide"`.
- Rental Inventory quote page: `src/pages/forms/RentalInventoryQuote.tsx`, also **Form ID 1**, different prefill.
- Thank-you: `/download/rental-guide-thank-you` fires `trackLeadOnce("rental-guide", ...)`, mapped to Ads label `w4h8CJ-J5uYcEP7A2t5B` (the Own It label) in `src/config/adsConversions.ts`.

Conclusion: there is no separate Own It form. Own It rides the rental-guide formType and is fully wired end to end in code.

## The one real risk

Both pages use Form ID 1, so the split between the Own It thank-you page and the Rental Inventory thank-you page lives entirely in Cognito's redirect configuration — not in this codebase. If Form 1's redirect is a single fixed URL, one of the two flows lands on the wrong thank-you page and fires the wrong Ads label.

## Plan

1. No code changes to the Own It wiring — the mapping and dedup logic are correct as built.
2. Confirm in Cognito that Form 1's redirect is conditional on the sign-style field:
   - Own It / guide download → `/download/rental-guide-thank-you?entry_id=[Id]`
   - Rental Inventory quote → `/thank-you/rental-inventory?entry_id=[Id]`
3. If Cognito cannot branch the redirect on that field, split the flows by giving the Own It landing page its own Cognito form (new form ID) with a fixed redirect to `/download/rental-guide-thank-you?entry_id=[Id]`. No changes needed in `adsConversions.ts` or `analytics.ts` in that case.

## Technical notes

- Files that would change only in step 3: `src/pages/download/RentalGuide.tsx` (new `formId`). Tracking files stay untouched.
- Ads labels, GA4 `generate_lead`, and the `entry_id` dedup key all continue to work unchanged.
