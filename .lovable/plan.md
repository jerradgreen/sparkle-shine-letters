# Replace Google tag with shared GA4 + Google Ads configuration

## Goal
Use a single gtag.js implementation that sends data to both the new GA4 property and the existing Google Ads account.

## Destinations
- Google Analytics 4: `G-Y5YZE675KX`
- Google Ads: `AW-17646919806`

## Changes
1. In `index.html`, replace the existing inline gtag.js loader with the new GA4 snippet.
2. Add a second `gtag('config', 'AW-17646919806');` line inside the same script so both destinations fire from the same tag.
3. Remove any separate/old Google Ads loader code that duplicates the `gtag` setup to avoid double-tracking or script conflicts.
4. Preserve the Meta Pixel and Contentsquare loaders unchanged.
5. Verify the site loads without the current "Script error" and that the GA4 + Google Ads configs are present in the rendered head.
6. Run a production build and publish.
