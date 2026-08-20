# Final Forensic Audit — Google Ads Conversion Signal (no code changes)

## 1. What the codebase contains today

- `index.html` lines 4-13: one `gtag.js` loader (`G-Y5YZE675KX`) plus `gtag('config','G-Y5YZE675KX')` and `gtag('config','AW-17646919806')`. That is the only Google Ads reference in the entire project.
- `src/lib/analytics.ts`: `trackPageView` (line 22, `page_view`) and `trackLeadOnce` (line 125, `generate_lead` with `form_type` + `lead_category`). Neither call has a `send_to` parameter and neither uses a conversion label.
- `src/components/analytics/GA4RouteTracker.tsx`: sends `page_view` on SPA route changes, skipping first render.
- Repo-wide search: **0** occurrences of `gtag('event','conversion', ...)`, **0** occurrences of `send_to`, **0** conversion-label strings, **0** GTM container.
- `lead_event_style` does not exist anywhere in the code or in git history. If Tag Assistant shows it, it is either GA4-side (event creation/modification rule in the GA4 admin) or a renamed view of the `generate_lead` event — it is not emitted by this website.

## 2. What Google Ads conversion tracking relied on before the analytics refactor

Determined from full git history (`git log -S` on `AW-`, `send_to`, `conversion`):

- The first Google tag ever committed (`c50d4d2`, "Add Google Tag") added only `gtag('config','AW-999837409')` — no conversion event.
- That ID was later replaced by `AW-17646919806`, again config-only.
- No commit in the repository's history has ever added or removed a `gtag('event','conversion', ...)` call or a `send_to: 'AW-…/label'` call.

**Conclusion: Google Ads conversion tracking has never been implemented in site code — not before and not after the refactor.** The pre-August conversions therefore came from Google-side configuration, and the codebase can distinguish only this much:

- **Google Ads conversion events (site-fired):** ruled out — never existed in this repo.
- **URL / page-load conversion actions:** consistent with the code. Cognito redirects to the thank-you routes with a full document load, so the global tag re-fires with the thank-you URL, which is exactly what a URL-based action needs. Whether such actions existed in the Ads account is **not determinable from the codebase**.
- **GA4 events imported into Google Ads:** also possible, but before the refactor the site sent no GA4 custom events at all, so an import would have had to be based on GA4 `page_view` with a page-path condition. Whether that import existed is **not determinable from the codebase**.

Which of the two Google-side mechanisms was in use can only be confirmed in the Google Ads / GA4 admin UI, not from this repository.

## 3. The missing signal between the website and Google Ads

For campaign-specific custom goals to count Event Style submissions, Google Ads must receive a **conversion action hit attributed to a named conversion action that the custom goal includes**. Today it receives neither of the two possible carriers of that hit:

1. **A site-fired Ads conversion event** — an event addressed to the Ads destination with the conversion label of an Ads-side conversion action, e.g. `gtag('event','conversion',{ send_to: 'AW-17646919806/<label>' })`. Zero such calls exist (`src/lib/analytics.ts`, all 10 thank-you components in `src/pages/thank-you/*.tsx`, `src/pages/ThankYou.tsx`, `src/pages/download/RentalGuideThankYou.tsx`).
2. **A GA4 conversion event imported as an Ads conversion action** — `generate_lead` is delivered to GA4 only; for Ads to count it, the GA4 event must be marked as a key event and imported into Ads as a conversion action, and that conversion action must be included in the campaign's custom goal. Nothing in the site code performs or guarantees that link; the site's `generate_lead` payload carries `form_type` / `lead_category` but no Ads-recognized identifier.

What Ads currently gets from the site: page-level tag activity from `gtag('config','AW-17646919806')` (remarketing/page-load signal) and nothing else. A "page load / URL contains" conversion action could still consume that, but a **custom goal built on a conversion action that expects an event-based lead conversion receives no data**, which matches the observed Tag Assistant result (Ads tag loads, GA4 gets `generate_lead`, Ads destination gets no Conversion event).

**Missing signal, stated precisely:** there is no conversion-labeled hit addressed to `AW-17646919806` — and no code-side link between the GA4 `generate_lead` event and any Ads conversion action — on any thank-you route.

No code was modified.
