# Replace Google tag with shared GA4 + Google Ads configuration

## Goal
Use a single gtag.js implementation that sends data to both the new GA4 property and the existing Google Ads account.

## Destinations
- Google Analytics 4: `G-Y5YZE675KX`
- Google Ads: `AW-17646919806`

## Changes
1. In `index.html`, replace the existing inline gtag.js loader with the new GA4 snippet.
2. Add a second `gtag('config', 'AW-17646919806');` line inside the same script so both destinations fire from the same tag.
3. Remove any separate/old Google Ads loader code that duplicates the `gtag` setup, so only one `gtag.js` script tag loads on the page.
4. Preserve the Meta Pixel and Contentsquare loaders exactly as they are — no changes.
5. Run a production build and publish.

## Verification after deploy
- Load the published site with Playwright and confirm exactly one request to `googletagmanager.com/gtag/js`.
- Confirm the network shows a `collect` request carrying `tid=G-Y5YZE675KX` with `en=page_view` (GA4 page_view), and a Google Ads request for `AW-17646919806`.
- Confirm no "Script error" remains in the console.
- Load the site with a `?gclid=test123` parameter and confirm the parameter is still present in the final URL after the redirect from `vintagemarqueelights.com` to `inventory.vintagemarqueelights.com`.

## Note on gclid preservation
The root-domain redirect is configured at the DNS/registrar level, outside this codebase. If the check shows `gclid` is dropped, the fix has to be made in the domain forwarding settings (the forward must preserve the query string) rather than in project code — I will report the result rather than guess.
