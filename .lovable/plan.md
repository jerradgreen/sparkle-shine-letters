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
Add one `trackLeadOnce(...)` call to the existing `useEffect` in each thank-you page, leaving the `fbq('track','Lead')` line untouched:

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

## Verification
- Build the project.
- Load the preview with Playwright, navigate client-side to a thank-you route, and confirm one `page_view` and one `generate_lead` (with `form_type` / `lead_category`) hit `google-analytics.com/g/collect` for `G-Y5YZE675KX`.
- Reload the thank-you page and confirm no second `generate_lead` fires.
- Confirm the Google Ads and Meta Pixel requests are unchanged.
