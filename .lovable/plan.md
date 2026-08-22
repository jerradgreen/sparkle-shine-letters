# Paid-Click Attribution Audit: gclid → generate_lead

No code changed. Findings below come from reading the code **and** from a live instrumented browser run against the running app (`?gclid=TEST123&utm_source=google&utm_medium=cpc&utm_campaign=eventstyle`), capturing cookies and every `collect` / `measurement/conversion` request.

## 1. Cookies actually created on a gclid landing (observed, not assumed)

Landing on `/event-standup-signs?gclid=TEST123&utm_*` produced:

```text
_ga               (2-year expiry)   GA4 client ID
_ga_Y5YZE675KX    (2-year expiry)   GA4 session state for G-Y5YZE675KX
_gcl_aw           (90-day expiry)   Google Ads click ID storage  <-- written
_gcl_au           (90-day expiry)   Ads/Floodlight first-party linker
_cs_c/_cs_id/_cs_s                  Contentsquare (unrelated)
```

No `_gcl_gs` / `_gcl_dc` was written (expected — `gbraid`/`wbraid` and DV360 were not present in the test URL). So **`_gcl_aw` is being written correctly** by the current implementation.

## 2. Does `gtag('config', 'AW-17646919806')` persist the gclid itself?

Yes. There is no separate conversion linker code in the project, and none is needed: the shared tag in `index.html:4–13` loads a second container (`gtag/js?id=AW-17646919806&cx=c` — observed in the network log) which reads `?gclid=` and writes `_gcl_aw` on the first-party domain. Confirmed observationally above.

## 3. Anything in the project that could block Ads attribution storage?

Nothing. There is **no** consent code, **no** cookie banner, **no** CMP, and **no** privacy library anywhere in the project. A full search for `gtag('consent'`, `ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`, `consent`, `cookiebot|onetrust|osano|iubenda|klaro|cookieyes`, `CMP` across `index.html` and `src/` returns only:

```text
src/components/Footer.tsx:183  href="https://vintagemarqueelights.com/policies/privacy-policy"
```

i.e. a link to a policy page. **Consent Mode is not implemented at all** — no `default` state, no `update` call. Practically this means storage is unrestricted (nothing is denied by code), so consent is not the cause of missing attribution. It does mean EEA/UK traffic gets no modeling and Ads may treat that traffic as unconsented on its side, but it cannot explain a US-traffic drop.

## 4. Step-by-step trace (observed IDs)

| Step | Navigation type | GA client ID | GA session | `_gcl_aw` |
|---|---|---|---|---|
| Ads click → `/event-standup-signs?gclid=…` | full document load | `cid=1869263941.1787395901` created | `session_start` + `page_view` | written |
| → `/quote/event-standup` | client-side (React Router `<Link>`) | unchanged | unchanged (manual `page_view` only) | unchanged |
| Cognito submit | seamless embed in the top document, form posts to Cognito | n/a | n/a | untouched |
| → `/thank-you/event-standup?entry_id=…` | **full document load**, same origin | **same `cid`** (`1869263941.1787395901` in the thank-you hits) | continues *if* within the 30-min session window | still present |
| `generate_lead` | manual, `src/lib/analytics.ts:125` | same | same | same |

Observed on the thank-you page, the Ads pings carried `gclaw_src=6_7` and `gacid=1869263941.1787395901` — i.e. the Ads tag **did** find the stored click ID and the matching GA client ID. So on a healthy, same-visit path, paid-click attribution **is** retained end-to-end.

## 5. Cognito embed / redirect risk

`src/components/templates/FormPageTemplate.tsx:78–95` injects `https://www.cognitoforms.com/f/seamless.js` and mounts inline (`Cognito.mount(formId, '#container')`). The embed is not a same-page iframe navigation of the top document, and cookies are first-party to `inventory.vintagemarqueelights.com`, so the thank-you load keeps the same `_ga`/`_gcl_aw`.

The residual risk is **`document.referrer` on the thank-you load**. The post-submit redirect is issued by Cognito, so the thank-you page's referrer is a Cognito host, not your site. That is harmless while the original session is still alive, but if the GA4 session has timed out (30 minutes — long, multi-field quote forms make this very plausible), the thank-you load starts a **new session** whose only source signal is `cognitoforms.com` referral — or nothing at all. `cognitoforms.com` is not excluded in code (referral exclusions are GA4-admin-side and cannot be seen here), and there is no `ignore_referrer` in `src/lib/analytics.ts`. That new session carries `generate_lead` with a non-paid or empty source: exactly the "(not set)" / "Unassigned" pattern you are seeing.

## 6. Could the manual `page_view` or the un-scoped `generate_lead` overwrite source/medium or start a session?

- `trackPageView` (`src/lib/analytics.ts:22–26`) sends `page_path`, `page_location`, `page_title` only. It does **not** send `campaign*`, `source`, `medium`, or `page_referrer`, so it cannot overwrite attribution. Its one weakness is `page_title` timing (100 ms delay in `GA4RouteTracker.tsx:17`), which affects reporting titles, not attribution.
- Neither call can start a GA4 session; session boundaries are decided by the `_ga_*` cookie timestamp.
- Because neither event sets `send_to`, both are broadcast to `AW-17646919806` as well as GA4. Observed effect: on **every** page load and every route change, the Ads container fires a batch of `measurement/conversion` pings — `lead_mobile_vendor`, `lead_event_style`, `lead_own_it`, `lead_rental_inventory`, `lead_not_sure`, `lead_layered_logo`, `lead_wall_sign` — including on the plain landing page `/event-standup-signs?gclid=TEST123`. Those are Ads-side rule evaluations, not real conversions, but the broadcast means the Ads tag is evaluating your GA4-imported goals against non-lead pages. It does not remove attribution; it is noise plus a real duplicate-counting risk if any of those actions is URL/page-load based.

## 7. Ranked most likely causes of "(not set)" / Unassigned leads and zero Ads-attributed conversions

1. **Session expiry during the Cognito form fill → new session sourced from the Cognito referrer.** Highest probability. The thank-you page is a full document load whose referrer is Cognito; nothing in code preserves or restores the original campaign, and there is no referral exclusion or `ignore_referrer`. Leads then land in a session with no paid source.
2. **Root-domain forward (`vintagemarqueelights.com` → `inventory.vintagemarqueelights.com`).** Configured at the registrar, outside this codebase. If any Ads final URL points at the root domain and the forward drops the query string, or lands the visitor with the root domain as referrer, the click arrives with no `gclid` at all → guaranteed "(not set)". This is invisible from the code and must be checked against the actual final URLs in each campaign.
3. **Google-side conversion action / custom goal configuration after the August 14 restructure.** The code sends exactly one lead event name, `generate_lead`, with only `form_type` and `lead_category` (`src/lib/analytics.ts:125–128`). If the new campaign-specific custom goals are keyed on GA4 *key events* named `lead_event_style` / `lead_own_it` / etc., or on event-parameter conditions the site does not send, they will never match — the website has never sent those names (searched the repo and git history).
4. **Cookie-domain / subdomain scope on the live host.** Cookies observed on `localhost` are host-scoped; in production `_ga` and `_gcl_aw` are set on `inventory.vintagemarqueelights.com`. Any visitor who first touches the root domain and is then forwarded gets fresh cookies on the subdomain — the earlier root-domain touch is not carried over (no `linker` config in `gtag('config')`).
5. **`generate_lead` suppressed by the dedup guard.** `trackLeadOnce` requires `?entry_id=` and skips any entry ID already in `localStorage` (`src/lib/analytics.ts:113–121`). If a Cognito form's redirect lost the `?entry_id=[Id]` parameter, that form's leads are silently never sent. Worth confirming per form; the Event Style "Update" action was previously seen pointing at a legacy URL.
6. **Un-scoped broadcast to the Ads destination.** Lowest probability as a *cause of zero conversions*, but it means Ads evaluates lead goals on non-lead pages, which can distort or duplicate any URL/page-load-based action still enabled.

## 8. What I could not determine from the codebase

Google-side configuration — the exact conversion action definitions, their counting rules, the GA4 key-event import mapping, GA4 referral exclusions, and each campaign's final URL — is not in this project and cannot be inspected here. Items 2 and 3 above can only be confirmed in the Google Ads / GA4 admin UI.

## Files and lines referenced

- `index.html:4–13` — shared gtag loader and both `config` calls
- `src/lib/analytics.ts:16–30` (`trackPageView`), `105–133` (`trackLeadOnce`)
- `src/components/analytics/GA4RouteTracker.tsx:9–22`
- `src/components/templates/FormPageTemplate.tsx:78–95` — Cognito seamless embed
- `src/pages/forms/EventStandupQuote.tsx:20–46` — param sanitizing/prefill (does not touch `gclid`)
- `src/pages/thank-you/EventStandupThankYou.tsx:14–17`
- `src/components/Footer.tsx:183` — only privacy-related reference in the project
