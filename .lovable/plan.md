

## Update Cognito Prefill Value for Rental Inventory Radio Button

You renamed the radio button in Cognito Forms, so the prefill value in the code needs to match exactly.

### Changes

Two files need the same one-line update -- changing the prefill value from the old name to the new one:

| File | Old Value | New Value |
|------|-----------|-----------|
| `src/pages/forms/RentalInventoryQuote.tsx` | `Rental Inventory Package Info` | `Rental Inventory Package Info/Download Biz Guide` |
| `src/pages/download/RentalGuide.tsx` | `Rental Inventory Package Info` | `Rental Inventory Package Info/Download Biz Guide` |

### What This Affects
- The rental inventory quote page at `/quote/rental-inventory`
- The rental guide download page at `/download/rental-guide`
- Both will continue to pre-select the correct radio button on Cognito Form 1, matching the renamed option

### Nothing Else Changes
- Form ID stays as `"1"`
- Redirect behavior stays the same
- Zapier automation continues to fire as before (since the form submission still comes from the same form)

