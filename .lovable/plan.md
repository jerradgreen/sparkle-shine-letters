# Diagnostic: Google Ads URL/page-load conversion on /thank-you/event-standup

No code was modified. Findings only.

## 1. Exact URL reached after a successful Event Style submission

- The Event Style quote page is `/quote/event-standup` (`src/App.tsx:128` → `src/pages/forms/EventStandupQuote.tsx`), which renders Cognito **Form ID 7** through `src/components/templates/FormPageTemplate.tsx` (loads `cognitoforms.com/f/seamless.js`, then `window.Cognito.mount`).
- The post-submit redirect target is **not in this codebase** — it lives in Cognito Forms' "After Submission" setting. Nothing in `src/` navigates to any `/thank-you/...` URL (no `navigate()`, no `pushState`, no `<Link>` to thank-you routes).
- Route that exists to receive it: `/thank-you/event-standup` (`src/App.tsx:143` → `src/pages/thank-you/EventStandupThankYou.tsx`).
- **Query parameters:** the GA4 work explicitly required the Cognito redirect to be changed to append the entry ID:
  `https://inventory.vintagemarqueelights.com/thank-you/event-standup?entry_id=[Id]`
  (`.lovable/plan/ga4-spa-page-view-tracking-generate-lead-on-thank-you-pages-2026-08-18.md:35-52`), and the page consumes it (`EventStandupThankYou.tsx:11-17`, `searchParams.get("entry_id")`).
  So the landed URL is now expected to be `/thank-you/event-standup?entry_id=<opaque id>`, not the bare path. Whether that Cognito setting has actually been saved is only visible in the Cognito admin — the codebase cannot confirm it, but the page code only fires a lead when the parameter is present, and you confirmed GA4 is receiving `generate_lead`, which means **the parameter is present on the live URL**.

## 2. Full page load vs SPA route change

**Full document load.** The Cognito seamless embed performs a browser navigation to the configured redirect URL; React Router is not involved. Consequently, on arrival:

- `index.html` is re-parsed, `gtag.js` reloads, and both `gtag('config','G-Y5YZE675KX')` and `gtag('config','AW-17646919806')` (`index.html:11-12`) execute again for the thank-you URL.
- `GA4RouteTracker` skips its first render (`src/components/analytics/GA4RouteTracker.tsx:9-14`), so it adds nothing on that load and removes nothing.
- The Ads page-load tag hit therefore still fires with `page_location = /thank-you/event-standup?entry_id=…`.

## 3. What the refactor changed that can affect URL-based matching

Code-side, nothing relevant changed:

- `index.html:4-13` — tag still loaded once, both destinations still configured. Unchanged by the refactor.
- No redirect behavior changed for thank-you routes: `public/_redirects` contains no `/thank-you/*` rule and never did; those routes fall through the SPA catch-all `/* → /index.html 200` (no 301/302 hop, so no redirect-stripped landing URL).
- No canonical/robots change for thank-you routes: the `index.html` route bootstrap map (`index.html:39-154`) contains no `/thank-you/...` entries, so canonical stays the homepage value and `EventStandupThankYou.tsx:20-24` sets its own `noindex` — identical to before. (Canonical/noindex do not affect Ads URL matching in any case.)
- No history manipulation was added. `ScrollToTop` (`src/components/ScrollToTop.tsx`) only scrolls; `GA4RouteTracker` only sends `page_view`. Neither rewrites, replaces, or strips the URL.
- Timing: the only added timing is a 100 ms delay in `GA4RouteTracker` for SPA navigations — it does not run on the first load and does not defer or precede the global tag.

**The one thing that did change about the URL is the query string.** The refactor required the Cognito redirect to become `…/thank-you/event-standup?entry_id=[Id]` where previously it was the bare path. That is the only change between the site and Google Ads on this path.

That matters for a URL-based page-load conversion action only in one specific case: if the Ads rule's match type is **"URL equals"** (or a regex anchored with `$`) against `https://inventory.vintagemarqueelights.com/thank-you/event-standup`, then `?entry_id=…` makes the landed URL no longer equal, and the action stops matching. If the rule uses "URL contains `/thank-you/event-standup`", it still matches. The match type lives in the Ads account and is **not determinable from the codebase**.

## 4. Statement about what did not change

Aside from the appended `entry_id` query parameter on the Cognito redirect (configured in Cognito, not in code), **nothing in the refactor changed the landing URL path, the navigation type (still a true full page load), redirect handling, canonical tags, or the firing order/timing of the Google tag on `/thank-you/event-standup`.** The Ads global tag still executes on that page load exactly as before.

## 5. Missing signal, restated

Ads receives page-level tag activity for the thank-you URL, but no conversion-labeled event addressed to `AW-17646919806` exists anywhere in the project (0 occurrences of `gtag('event','conversion')` or `send_to`, verified across full git history). So a URL-based action can still match on the page load *if* its match type tolerates the query string; an event-based conversion action or custom goal expecting a lead event receives nothing.
