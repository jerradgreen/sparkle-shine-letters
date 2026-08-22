# GA4 + Google Ads Implementation Audit (read-only)

No code was changed.

## 1. Where GA4 is initialized
`index.html` lines 4–13 — hard-coded in the document head, before anything else:

```html
<!-- Google tag (gtag.js) - shared tag: GA4 + Google Ads -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y5YZE675KX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y5YZE675KX');
  gtag('config', 'AW-17646919806');
</script>
```

No GA init exists in `src/main.tsx` or anywhere else; the Google Analytics connector env var (`VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY`) is not used anywhere.

## 2. Is the Google tag installed once or multiple times?
Once. The only `googletagmanager.com/gtag/js` reference is `index.html:5` (plus a `preconnect`/`dns-prefetch` at lines 215–216, which load nothing). No duplicate loader in any component or generated static page.

## 3. Where `gtag('config')` is called
Only `index.html:11–12`, for two destinations in a single shared tag:
- GA4: `G-Y5YZE675KX`
- Google Ads: `AW-17646919806`

No `config` calls in `src/`.

## 4. `page_view` — manual or automatic?
Both, split by navigation type.
- **Initial document load:** automatic, from `gtag('config', 'G-Y5YZE675KX')`. Enhanced measurement is not disabled in code (`send_page_view` is never set to `false`).
- **Client-side route changes:** manual, via `src/components/analytics/GA4RouteTracker.tsx` (mounted in `src/App.tsx:114` inside `<BrowserRouter>`), which skips the first render and then calls `trackPageView(location.pathname + location.search)` after a 100 ms delay.
- `src/lib/analytics.ts:16–30`:

```ts
gtag("event", "page_view", {
  page_path: pagePath,
  page_location: window.location.href,
  page_title: document.title,
});
```

Note: this event has **no `send_to`**, so it goes to all configured destinations (GA4 *and* Ads) as a `page_view`.

## 5. `generate_lead` — manual or automatic?
Manual only. `trackLeadOnce(formType, leadCategory, entryId)` in `src/lib/analytics.ts:105–133` sends:

```ts
gtag("event", "generate_lead", { form_type: formType, lead_category: leadCategory });
```

Called from 9 thank-you pages (`src/pages/thank-you/*.tsx`, `src/pages/ThankYou.tsx`, `src/pages/download/RentalGuideThankYou.tsx`). It fires **only** when `?entry_id=` is present in the URL, and is de-duplicated per entry ID via `localStorage` key `vml_lead_sent:<entryId>` (90-day TTL). No value/currency parameters are sent.

## 6. Google Ads conversion tracking installed separately?
No. `AW-17646919806` is configured in the same shared tag; there are **zero** `gtag('event', 'conversion', ...)` calls and zero `send_to: 'AW-...'` calls anywhere in the project. Google Ads currently receives only the automatic page-load hit from `config`, plus the un-scoped `page_view` and `generate_lead` events above. Any Ads conversion counting must therefore be URL/page-load rules or GA4-imported conversions configured on the Google side. No legacy `AW-999837409` remains in code.

## 7. Google Tag Manager?
Not installed. No `GTM-` container ID and no `gtm.js` loader anywhere in the project. All tracking is hard-coded (gtag, Meta Pixel `443717751929130`, Contentsquare `9a47fa3217445` — the latter two lazy-loaded in `index.html:292–310`).

## 8. Does routing preserve the GA4 session?
Yes. `src/App.tsx` uses `BrowserRouter` with client-side `<Link>` navigation, so the document (and the gtag/GA4 client state, `_ga` cookie, session ID) persists across in-app navigation. `src/components/ScrollToTop.tsx` only calls `window.scrollTo` — no navigation side effects.

The one place the session is at risk is the quote flow: the Cognito form is embedded and its post-submit redirect is a **full document load** to `/thank-you/...`. That is same-origin (`inventory.vintagemarqueelights.com`), so GA4 cookies survive and the session continues; it only re-runs the initial `config` page_view.

## 9. `gclid` / `gbraid` / `wbraid` / `utm_*` preservation
Nothing in the codebase strips, rewrites, or normalizes query parameters:
- No `history.replaceState` / `pushState`, no `location.replace`, no `searchParams.delete` anywhere in `src/`.
- Internal links are static paths (`<Link to="/...">`), so they do **not** carry campaign parameters forward — that is normal and harmless, because GA4/Ads capture the parameters on the landing hit and store them in cookies for the session.
- Manual `page_view` sends `page_location: window.location.href`, i.e. the real URL with whatever parameters are present.

The only real exposure is **outside** this codebase: the registrar-level forward from `vintagemarqueelights.com` to `inventory.vintagemarqueelights.com` must preserve the query string (previously verified as preserved for `gclid`), and the Cognito redirect back to the thank-you URL adds only `?entry_id=[Id]`.

## 10. Redirects before GA4 initializes?
None in code. The gtag snippet is the very first thing in `<head>` (`index.html:4`), ahead of the route-aware SEO bootstrap script (lines ~34–209) and ahead of React. `public/_redirects` contains only `200` rewrites (not 30x redirects) and is explicitly not honored by Lovable hosting. The domain forward at the registrar happens before any page loads, so it cannot interrupt GA4 init.

## 11. Anything that could cause "(not set)" / "Unassigned" sessions
Nothing in the code drops attribution parameters, but three code-level factors can contribute:

1. **Un-scoped events reaching Ads.** `page_view` and `generate_lead` have no `send_to`, so they are broadcast to `AW-17646919806` as well. That is noisy on the Ads side, though not a GA4 attribution problem.
2. **`page_title` timing on the manual page_view.** `trackPageView` reads `document.title` after only a 100 ms delay (`GA4RouteTracker.tsx:17`). If React Helmet has not committed the new title yet, GA4 records the previous page's title — a "wrong/blank page title" symptom that is easy to mistake for "(not set)". Same class of issue on the initial load: `gtag('config')` at line 11 fires *before* the route-aware bootstrap script rewrites `<title>`, so the initial page_view for any non-homepage route can report the homepage title.
3. **No cross-domain / linker configuration.** `gtag('config')` is called with no `linker` or `cookie_domain` settings. Any traffic that passes through another host (the root-domain forward, or any external Cognito-hosted page rather than the seamless embed) starts a new session with referral-based, not campaign-based, attribution — the usual source of "Unassigned" / "(not set)" channel rows.

"Unassigned" in GA4 is most commonly the result of a custom event that GA4 cannot map to a channel (e.g. `generate_lead` arriving without an accompanying session-start context, such as a direct hit on a thank-you URL) — worth checking against the Ads-side conversion action config, which is not visible from this codebase.

## Files referenced
- `index.html` (lines 4–13, 215–216, 292–310)
- `src/lib/analytics.ts`
- `src/components/analytics/GA4RouteTracker.tsx`
- `src/App.tsx` (lines 110–146, 175–178)
- `src/components/ScrollToTop.tsx`
- `src/pages/thank-you/*.tsx`, `src/pages/ThankYou.tsx`, `src/pages/download/RentalGuideThankYou.tsx`
- `public/_redirects`
