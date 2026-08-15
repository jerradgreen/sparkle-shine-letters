# GA4: SPA page_view tracking + generate_lead on thank-you pages

Scope is limited to adding GA4 events. No Google Ads conversion events, no changes to the existing Google Ads tag, no changes to the Meta Pixel or Contentsquare.

## 1. Analytics helper (new file `src/lib/analytics.ts`)
- `trackPageView(path)` — calls `window.gtag('event','page_view',{page_path, page_location, page_title})` only if `gtag` exists.
- `trackLeadOnce(formType, leadCategory, entryId)` — **requires** a Cognito entry ID.
  - If `entryId` is missing or empty, no event is sent at all. A direct visit to a thank-you URL therefore never creates a lead.
  - Dedup key is the unique entry: `vml_lead_sent:<entryId>`, stored in `localStorage` (survives refresh, new tabs, and browser restarts) with a `sessionStorage` fallback if `localStorage` is blocked. A refresh of the same thank-you URL is silently skipped; a second, genuinely different submission carries a different `[Id]` and is counted.
  - Sends `generate_lead` with `form_type`, `lead_category`, and `entry_id` (also used as the GA4 `transaction_id`-style dedup value for future Ads work).
  - Keys are written with a timestamp so a small cleanup routine can drop entries older than 90 days and keep `localStorage` from growing unbounded.


## 2. SPA page_view tracking (new file `src/components/analytics/GA4RouteTracker.tsx`)
- Uses `useLocation()`; skips the very first render because `gtag('config', 'G-Y5YZE675KX')` in `index.html` already sends the initial page_view.
- Fires on every subsequent route change, with a short delay so React Helmet has set the document title first.
- Mounted inside `<BrowserRouter>` in `src/App.tsx`, next to `<ScrollToTop />`. Nothing else in `App.tsx` changes.

## 3. `generate_lead` on each thank-you page
Each thank-you page reads `entry_id` from the query string (via `useSearchParams`) and passes it to `trackLeadOnce`. The existing `fbq('track','Lead')` line is left exactly as-is.

| File | form_type | lead_category |
| --- | --- | --- |
| `src/pages/thank-you/WallHangingThankYou.tsx` | `wall-hanging` | `Wall-Hanging Marquee Signs` |
| `src/pages/thank-you/ThreeDLogosThankYou.tsx` | `3d-logos` | `3D Layered Logo Signs` |
| `src/pages/thank-you/RentalInventoryThankYou.tsx` | `rental-inventory` | `Rental Inventory Packages` |
| `src/pages/thank-you/EventStandupThankYou.tsx` | `event-standup` | `Event Stand-Up Letters` |
| `src/pages/thank-you/MobileVendorThankYou.tsx` | `mobile-vendor` | `Mobile Vendor Signs` |
| `src/pages/thank-you/CustomThankYou.tsx` | `custom` | `Custom Sign Quote` |
| `src/pages/thank-you/NotSureThankYou.tsx` | `not-sure` | `Undecided Sign Type` |
| `src/pages/ThankYou.tsx` | `general` | `General Contact` |
| `src/pages/download/RentalGuideThankYou.tsx` | `rental-guide` | `Rental Guide Download` |

## 4. Cognito redirect changes — required, and done by you in Cognito Forms
The redirect URLs are **not** in this codebase. `src/components/templates/FormPageTemplate.tsx` only mounts the Cognito embed (account key `dufgHGZ4sU6F2rV69vJTrA`); the confirmation redirect for each form is configured in the Cognito Forms admin, so no code change can add `entry_id` on its own.

For each form, in Cognito Forms → the form → **Submission Settings → After Submission → Redirect to a website**, append the entry ID to the existing URL:

```text
https://inventory.vintagemarqueelights.com/thank-you/wall-hanging?entry_id=[Id]
https://inventory.vintagemarqueelights.com/thank-you/3d-logos?entry_id=[Id]
https://inventory.vintagemarqueelights.com/thank-you/rental-inventory?entry_id=[Id]
https://inventory.vintagemarqueelights.com/thank-you/event-standup?entry_id=[Id]
https://inventory.vintagemarqueelights.com/thank-you/mobile-vendor?entry_id=[Id]
https://inventory.vintagemarqueelights.com/thank-you/custom?entry_id=[Id]
https://inventory.vintagemarqueelights.com/thank-you/not-sure?entry_id=[Id]
https://inventory.vintagemarqueelights.com/download/rental-guide-thank-you?entry_id=[Id]
https://inventory.vintagemarqueelights.com/thank-you-for-submitting-a-form?entry_id=[Id]
```

This is safe: `[Id]` is Cognito's own field-token syntax for the entry's unique identifier, resolved server-side at redirect time. The value is an opaque entry identifier, not personal data, so putting it in the URL is fine. Nothing else about the redirect changes, and `public/_redirects` already serves these SPA routes, so an extra query string does not affect routing.

If a form uses "Show a message" instead of a redirect, or has a redirect without `?entry_id=[Id]`, that form's leads simply will not be recorded in GA4 — no false positives, just a silent miss — so every lead form needs the parameter added.

Note: if you would rather not depend on the Cognito settings change, the alternative is a document-only fallback (fire when `document.referrer` is a Cognito domain). That is less reliable than `[Id]` and can still double-count, so the plan uses `[Id]`.

## Verification
- Build the project.
- Load the preview with Playwright, navigate client-side to `/thank-you/custom?entry_id=TEST-123`, and confirm one `page_view` and one `generate_lead` (with `form_type`, `lead_category`, `entry_id`) hit `google-analytics.com/g/collect` for `G-Y5YZE675KX`.
- Reload that URL and confirm no second `generate_lead` fires.
- Load `/thank-you/custom` with no `entry_id` and confirm **no** `generate_lead` fires.
- Load `/thank-you/custom?entry_id=TEST-456` and confirm a new `generate_lead` does fire.
- Confirm the Google Ads and Meta Pixel requests are unchanged.

