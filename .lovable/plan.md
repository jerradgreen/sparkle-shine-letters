# Google Ads Conversion Tracking — Forensic Audit (no changes made)

## Headline finding

**There is zero Google Ads conversion code anywhere in this project.** A repo-wide search for `gtag('event', 'conversion'`, `send_to`, `AW-*/label`, and any conversion-label string returns **no matches** outside of the two `gtag('config', ...)` lines in `index.html`. Google Ads is currently receiving only page-level tag activity, never a conversion event.

## 1. Google Tag installation

- File: `index.html`, lines 4-12 — the only Google tag in the codebase.
- Loader: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y5YZE675KX">` (line 5). Loaded exactly **once**; no other `gtag/js` include exists in `src/`, `public/`, or `scripts/`.
- Config calls: `gtag('config', 'G-Y5YZE675KX')` and `gtag('config', 'AW-17646919806')` in the same inline block.
- Google Ads Conversion ID present: **AW-17646919806** (config only).
- GA4 Measurement ID present: **G-Y5YZE675KX**.
- No legacy `AW-999837409` anywhere in code.

## 2. Google Tag Manager

- **GTM is not installed.** No `GTM-` container ID, no `gtm.js` loader. The only `googletagmanager.com` references are the gtag loader (line 5) and preconnect/dns-prefetch hints (lines 215-216).
- Consequence: tracking is implemented **directly in code**, so GTM cannot be compensating for the missing conversion events — unless conversions were configured Google-side (e.g. GA4 conversion import / Enhanced Conversions from GA4 events), which is outside this codebase.

## 3. Google Ads conversion events

| Occurrence | Result |
| --- | --- |
| `gtag('event', 'conversion', ...)` | **0 occurrences** |
| Any call with a `send_to: 'AW-.../label'` | **0 occurrences** |
| Any conversion label string | **0 occurrences** |

The only `gtag('event', ...)` calls in the project are in `src/lib/analytics.ts`:

- Line 22 — `gtag("event", "page_view", { page_path, page_location, page_title })` inside `trackPageView()`.
- Line 125 — `gtag("event", "generate_lead", { form_type, lead_category })` inside `trackLeadOnce()`.

Neither carries `send_to`, so both are delivered to the default destinations of the shared tag (GA4 and, for the linked Ads ID, only as tag activity — not as a named conversion action).

`trackLeadOnce()` trigger conditions (lines 105-133):
- Requires `window.gtag` to exist.
- Requires a non-empty `entry_id` query parameter — **if `entry_id` is absent, the function returns early and fires nothing at all** (line 113-116).
- Requires no prior `vml_lead_sent:<entry_id>` key in localStorage/sessionStorage.

## 4. Thank-you pages

Routes registered in `src/App.tsx` lines 123-146:

| Route | Google Ads conversion | GA4 | Notes |
| --- | --- | --- | --- |
| `/thank-you/event-standup` | No | `generate_lead` (needs `entry_id`) | + Meta Pixel `Lead` |
| `/thank-you/rental-inventory` | No | same | + Meta Pixel `Lead` |
| `/thank-you/wall-hanging` | No | same | + Meta Pixel `Lead` |
| `/thank-you/mobile-vendor` | No | same | + Meta Pixel `Lead` |
| `/thank-you/3d-logos` | No | same | + Meta Pixel `Lead` |
| `/thank-you/custom` | No | same | + Meta Pixel `Lead` |
| `/thank-you/not-sure` | No | same | + Meta Pixel `Lead` |
| `/thank-you-for-submitting-a-form` | No | same | legacy general page |
| `/download/rental-guide-thank-you` | No | same | guide download |
| `/thank-you/own-it` | **Route does not exist** | — | no file, no route; would render `NotFound` |

Trigger location on every page: a `useEffect` on mount (line 14-17 pattern), firing `fbq('track','Lead')` unconditionally and `trackLeadOnce(...)` conditionally.

## 5. Form submission flow

Forms are **third-party Cognito Forms**, embedded by `src/components/templates/FormPageTemplate.tsx` (script `https://www.cognitoforms.com/f/seamless.js`, mounted per form ID). Pages: `src/pages/forms/*.tsx` (EventStandupQuote, WallHangingQuote, ThreeDLogosQuote, MobileVendorQuote, RentalInventoryQuote, CustomQuote, NotSureQuote).

Actual sequence:

```text
User fills Cognito iframe form
  -> validation: inside Cognito (no app code)
  -> submission/storage: Cognito servers (no API/database call in this app)
  -> CRM: Cognito-side integration/email (not in this codebase)
  -> redirect: Cognito redirect setting -> /thank-you/<type>[?entry_id=<Id>]
  -> analytics on thank-you mount: fbq('track','Lead') + trackLeadOnce(...)
  -> Google Ads conversion: NEVER FIRES (no conversion code exists)
```

There is no place in the sequence where a Google Ads conversion occurs.

## 6. Refactoring risks observed

- The current analytics layer (`src/lib/analytics.ts`, `src/components/analytics/GA4RouteTracker.tsx`) was introduced recently and implements **only** GA4 `page_view` and `generate_lead`. It was scoped explicitly to exclude Ads conversion events.
- Git history in the working tree does not contain any previously removed `gtag('event','conversion')` call, so no earlier hard-coded Ads conversion snippet was deleted from this repo.
- Conditional-execution risk (real, active): the `entry_id` gate in `trackLeadOnce` (analytics.ts line 113). If Cognito redirect URLs do not append `?entry_id=[Id]`, GA4 `generate_lead` never fires either — leaving Meta Pixel as the only lead signal.
- localStorage dedup (`vml_lead_sent:` keys, TTL 90 days) suppresses repeat events for the same entry ID.
- SPA routing risk: `GA4RouteTracker` skips the first render (comment at lines 10-14) and delays 100ms; a client-side navigation into a thank-you page sends `page_view` only, never a conversion.
- No feature flags, consent-mode blocks, or environment variables gate the Google tag. `.env` contains no analytics IDs; all IDs are hard-coded in `index.html`.
- Meta Pixel and Contentsquare load inside a deferred/interaction block (index.html ~lines 292-310); the Google tag is not inside that block.

## 7. Missing tracking

Every thank-you page listed in section 4 is missing a Google Ads conversion event — that is **10 of 10** conversion destinations, plus one nonexistent route (`/thank-you/own-it`).

## 8. Final assessment

**A. Is Google Ads conversion tracking implemented correctly?** No. It is not implemented at all beyond `gtag('config', 'AW-17646919806')`.

**B. Files/lines responsible**
- `index.html` lines 4-12 — Ads ID configured, but no conversion event ever sent from this tag.
- `src/lib/analytics.ts` lines 105-133 — the only lead-event function; sends GA4 `generate_lead` with no `send_to` and no Ads conversion label.
- `src/pages/thank-you/*.tsx` line ~14-17 (all 7 files), `src/pages/ThankYou.tsx` lines 14-17, `src/pages/download/RentalGuideThankYou.tsx` lines 14-17 — thank-you mount effects with no Ads conversion call.
- `src/App.tsx` lines 140-146 — no `/thank-you/own-it` route defined.

**C. Suspected issues ranked by probability of causing the conversion drop**
1. **Very high** — No `gtag('event','conversion', {send_to: 'AW-17646919806/<label>'})` exists anywhere, so any campaign-specific custom goal created around Aug 14 that expects a website conversion event receives nothing.
2. **High** — The Aug 14 switch from generic conversion actions to campaign-specific custom goals means previously-counted GA4-imported or auto-detected conversions no longer map to the new goals; with no hard-coded Ads event the new goals have no data source.
3. **Medium** — `entry_id` gate: if Cognito redirects omit `?entry_id=[Id]`, GA4 `generate_lead` never fires, so even a GA4-import path to Ads reports zero.
4. **Medium-low** — `/thank-you/own-it` does not exist as a route; traffic sent there renders NotFound and fires no lead event of any kind.
5. **Low** — localStorage dedup suppressing legitimate repeat submissions from the same browser.
6. **Low** — No GTM container, so no server- or container-side conversion tag can be filling the gap.

**D/E.** No code was modified and no recommendations are included, per instruction.
