# GA4: SPA page_view tracking + generate_lead on thank-you pages

Scope is limited to adding GA4 events. No Google Ads conversion events, no changes to the existing Google Ads tag, no changes to the Meta Pixel or Contentsquare.

## 1. Analytics helper (new file `src/lib/analytics.ts`)
- `trackPageView(path)` — calls `window.gtag('event','page_view',{page_path, page_location, page_title})` only if `gtag` exists.
- `trackLeadOnce(formType, leadCategory)` — sends `generate_lead` with `form_type` and `lead_category`, guarded by a `sessionStorage` key (`vml_lead_sent:<formType>`) so refreshing or revisiting a thank-you page does not fire a duplicate. Wrapped in try/catch for private-mode browsers.

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
