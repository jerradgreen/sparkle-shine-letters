# Diagnose the "flash" of an extra page after form submission

## What the code shows right now

Landing pages are NOT decided by the website. Every quote page mounts a Cognito form (`FormPageTemplate` -> `Cognito.mount(formId, ...)`), and the redirect after submit is configured inside each Cognito form's settings. There is:

- no `navigate()`, `window.location`, `<Navigate>`, or `meta refresh` on any thank-you page
- no chained redirect in `public/_redirects` (and Lovable hosting ignores that file anyway)
- no redirect logic in `index.html` or the static-page generator

So a two-step "flash" cannot be coming from React Router. It is either (a) the Cognito form's own confirmation step before its redirect, or (b) the Cognito redirect URL pointing at one page which then bounces.

## Current form -> intended thank-you mapping (from the codebase)

| Quote page | Cognito Form ID | Intended thank-you route |
|---|---|---|
| /quote/wall-hanging | 8 | /thank-you/wall-hanging |
| /quote/3d-logos | 9 | /thank-you/3d-logos |
| /quote/event-standup | 7 | /thank-you/event-standup |
| /quote/mobile-vendor | 10 | /thank-you/mobile-vendor |
| /quote/custom | 11 | /thank-you/custom |
| /quote/not-sure | 12 | /thank-you/not-sure |
| /quote/rental-inventory | 1 | /thank-you/rental-inventory |
| /download/rental-guide | 1 | /download/rental-guide-thank-you |

Note the collision: `/quote/rental-inventory` and `/download/rental-guide` share **Form ID 1**. A single Cognito form has a single redirect URL, so one of those two flows necessarily lands on the other's thank-you page. That is the most likely source of the perceived extra page in the rental/own-it flow.

There is also no `/thank-you/own-it` route in `src/App.tsx`; if any Cognito form redirects there, it renders the 404 page for a moment before you (or a browser autocomplete/back) end up elsewhere.

## Proposed diagnostic steps (no guessing)

1. Run a real submission through each form in a browser with the network log recording, capturing the full redirect chain (document requests only) so we can see the exact intermediate URL and the final URL, including `?entry_id=`.
2. Confirm from the captured chain whether the intermediate page is `/thank-you-for-submitting-a-form`, `/download/rental-guide-thank-you`, `/thank-you/own-it` (404), or Cognito's own hosted confirmation page.
3. Report the exact Cognito redirect URL that needs correcting in the Cognito admin panel, and whether a missing route needs to be added in `src/App.tsx`.

## Notes

- Because the redirect lives in Cognito, the actual fix will most likely be a settings change in Cognito (plus possibly splitting the rental-guide flow onto its own form ID), not a code change.
- No code changes are made as part of this diagnostic.
