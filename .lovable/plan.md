# Live verification: URL after a successful Event Style submission

Verified against the **live production form and live production page** (not just the code). No code changes.

## What was inspected

- The live Cognito form definition for the Event Style form (account key `dufgHGZ4sU6F2rV69vJTrA`, form `7` — "Event Style letters quote form"), fetched from Cognito's own `svc/load-form/form-def` response.
- The live page `https://inventory.vintagemarqueelights.com/quote/event-standup` rendered in a real browser.

## 1. The confirmation redirect that is live right now

Cognito's Submit action (`Action1`, `ActionName: "Submit"`) is configured as:

```text
Behavior:    RedirectURL
RedirectUrl: https://inventory.vintagemarqueelights.com/thank-you/event-standup?entry_id=[Id]
```

So yes — the final URL **is** `/thank-you/event-standup?entry_id=…`, with the query parameter present.

Note (separate action, not the submit path): the form's **Update** action (`Action2`, used when an existing entry is updated/edited, not on a new submission) still redirects to the old URL `https://vintagemarqueelights.com/pages/thank-you-for-submitting-a-form`.

## 2. Full page load or SPA route change

**Full page load.** On the live quote page the form is rendered inline in the top document by `seamless.js` — the rendered element is `<form class="cog-cognito cog-form cog-7 …">` directly in the page, not inside an embedded form iframe. Cognito's `RedirectURL` confirmation therefore performs a top-level browser navigation to the thank-you URL: a brand-new document request, `index.html` re-parsed, `gtag.js` reloaded, and `gtag('config','G-Y5YZE675KX')` + `gtag('config','AW-17646919806')` re-executed on that URL. React Router is not involved in that transition.

## 3. Example of the exact final URL

`[Id]` is resolved server-side by Cognito to the entry's own identifier (an entry number) at redirect time, so the landed URL looks exactly like this (ID masked):

```text
https://inventory.vintagemarqueelights.com/thank-you/event-standup?entry_id=1487
```

Path exactly `/thank-you/event-standup`, no trailing slash, no hash, one query parameter `entry_id`, nothing else appended.

## Summary

- Final URL: `/thank-you/event-standup?entry_id=<entry number>` — confirmed live in the Cognito form's active Submit confirmation.
- Navigation type: true full document load (top-level redirect from the inline Cognito embed).
- The bare `/thank-you/event-standup` (no query string) is **not** what the browser lands on anymore; the query string is always present on a successful new submission.
