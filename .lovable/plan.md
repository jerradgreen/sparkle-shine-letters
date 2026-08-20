# Diagnostic: Cognito → thank-you navigation vs. Google Ads URL/page-load conversions

No code was modified.

## 1. How users get from a Cognito submission to a thank-you page

- The quote forms are Cognito Forms embeds, not React forms. `src/components/templates/FormPageTemplate.tsx` lines 75-95 load `https://www.cognitoforms.com/f/seamless.js` and line 56 calls `window.Cognito.mount(formId, '#cognito-form-container-<id>')`.
- There is **no app-side navigation to any thank-you route**. A repo-wide search for `thank-you` in `src/` returns matches only in the thank-you page components themselves and the route table in `src/App.tsx` (lines 123-146). No `navigate('/thank-you/...')`, no `window.location = '/thank-you/...'`, no `history.pushState` targeting a thank-you URL anywhere.
- The only navigation code in the form pages is unrelated: `src/pages/forms/CustomQuote.tsx` line 24 (`navigate(path)` for the sign-style grid) and `src/pages/forms/EventStandupQuote.tsx` line 68 (`window.location.href = "https://www.vintagemarqueelights.com"` in the honeypot spam branch).
- Therefore the redirect after submission is performed entirely by **Cognito's own "redirect after submit" setting**, executed by the embedded form's script, not by React Router.

## 2. `/thank-you/event-standup` after a real submission

- Because the redirect is issued by Cognito (a URL redirect of the top-level document from the embed), reaching `/thank-you/event-standup` is a **true browser navigation / full document load**, not a client-side route change.
- Consequences of a full load:
  - `index.html` **reloads** in full.
  - The Google tag loader (`index.html` line 5) reloads and `gtag('config','G-Y5YZE675KX')` plus `gtag('config','AW-17646919806')` (lines 10-11) **execute again**, sending the automatic GA4 `page_view` and the Ads page-load tag hit for URL `/thank-you/event-standup`.
  - React then mounts `EventStandupThankYou`, whose `useEffect` (lines 14-17) fires `fbq('track','Lead')` and `trackLeadOnce("event-standup", "Event Stand-Up Letters", entryId)`.
  - `GA4RouteTracker` (`src/components/analytics/GA4RouteTracker.tsx` lines 9-14) explicitly **skips the first render**, so it does *not* add a duplicate manual `page_view` on a fresh document load.

- Caveat worth stating precisely: the codebase cannot prove which redirect mode Cognito is configured with (that setting lives in the Cognito admin panel). If Cognito were configured to redirect only inside its iframe, the parent document URL would never change and no Ads page-load hit for the thank-you URL would occur. Nothing in this repo forces a top-level navigation — the app is passive here.

## 3. Which of the four behaviors occurs

| Path into `/thank-you/event-standup` | Behavior |
| --- | --- |
| Cognito post-submit redirect (the real lead path) | **True page load** — new document, tag re-executed, automatic `page_view`; no manual `page_view` (first-render skip) |
| Internal link click elsewhere in the app | **Browser history change** (`pushState` via React Router) + **manually-generated `page_view`** from `GA4RouteTracker` → `trackPageView()` after a 100 ms delay |

So the production lead path is a genuine page load; only in-app navigation produces the history-change + manual `page_view` combination.

## 4. Does the manual `page_view` go to Google Ads?

No. `src/lib/analytics.ts` lines 16-30:

```ts
gtag("event", "page_view", { page_path, page_location, page_title });
```

There is **no `send_to` parameter**, and no `AW-17646919806` reference anywhere in `src/`. The event goes to the shared tag's default destinations. In practice gtag routes an un-targeted `page_view` to the GA4 stream; it is not a named Google Ads conversion event and it carries no conversion label. The same is true of `generate_lead` (analytics.ts line 125).

## 5. What Google Ads URL-based page-load conversion detection needs

A "Page load / URL contains `/thank-you/event-standup`" conversion action requires:

1. The global Ads tag to execute in a document whose URL is `/thank-you/event-standup` — satisfied by the Cognito full-page redirect (index.html lines 5-11).
2. The Ads tag's page-load hit to carry that URL — satisfied on a real page load.
3. For SPA history changes, Ads needs an explicit event addressed to the Ads destination (`send_to: 'AW-17646919806'` or a labeled conversion event). **This does not exist in the codebase.**
4. Ad-click attribution data (`gclid`/`_gcl_*` cookie) to be present in the same browser session — set by the tag on the landing page; the redirect chain through Cognito must not strip it, which is outside this repo.

## 6. Is there evidence the SPA/analytics refactor broke URL-based conversions?

**No direct evidence from the code.** Supporting points:

- The refactor added only `src/lib/analytics.ts` and `src/components/analytics/GA4RouteTracker.tsx` (mounted in `src/App.tsx` line 7). It removed no Google tag code; `index.html` lines 4-12 still load the tag once and still config `AW-17646919806`.
- `GA4RouteTracker` skips the first render, so it did not suppress or duplicate the page-load hit on a full document load.
- The thank-you routes and their paths are unchanged in `src/App.tsx` lines 140-146; no route was renamed.
- Nothing in the refactor is gated by consent, feature flags, or env vars.

Residual code-visible risks that could affect URL-based detection independent of the refactor:

1. Cognito redirect target/mode changed in the Cognito admin panel (not visible here) — e.g. redirect switched to an in-iframe confirmation, a different URL, or a URL now carrying `?entry_id=...` while the Ads rule was configured for an exact-URL match rather than "contains".
2. `/thank-you/own-it` has **no route** in `src/App.tsx`; if an Ads conversion action targets that URL, it can never match.
3. No Ads-addressed event exists for any client-side navigation into a thank-you route (`src/lib/analytics.ts`, no `send_to`).

No fixes proposed, per instruction.
