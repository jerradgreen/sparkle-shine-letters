

## Create "Not Sure" Form Page + Thank-You Page

### What We're Creating
1. A new form page for users who aren't sure what sign type they need
2. A dedicated thank-you page for tracking conversions from this form
3. Update navigation to route "Not Sure / Other" to the new form

### Files to Create

**1. `src/pages/forms/NotSureQuote.tsx`** (Route: `/quote/not-sure`)
- Uses `FormPageTemplate` component
- Cognito Form ID: `12`
- Title: "Custom Sign Request"
- Description: SEO-friendly description

**2. `src/pages/thank-you/NotSureThankYou.tsx`** (Route: `/thank-you/not-sure`)
- Same structure as other thank-you pages
- Matches existing design pattern

### Files to Modify

**3. `src/App.tsx`**
- Import `NotSureQuote` and `NotSureThankYou`
- Add routes:
  - `/quote/not-sure` → `NotSureQuote`
  - `/thank-you/not-sure` → `NotSureThankYou`

**4. `src/components/Navigation.tsx`**
- Update `signTypeOptions` array: change "Not Sure / Other" path from `/quote/custom` to `/quote/not-sure`

**5. `src/components/Footer.tsx`**
- Update `signTypeOptions` array: change "Not Sure / Other" path from `/quote/custom` to `/quote/not-sure`

### Cognito Form Redirect Setup
After implementation, set your Cognito Form redirect URL to:
```
https://sparkle-shine-letters.lovable.app/thank-you/not-sure
```

### Summary of Routes

| Option | Form Route | Thank-You Route |
|--------|------------|-----------------|
| Not Sure / Other | `/quote/not-sure` | `/thank-you/not-sure` |

This keeps `/quote/custom` available if you still want a separate "Custom" form, or you can redirect it to the new Not Sure form later.

