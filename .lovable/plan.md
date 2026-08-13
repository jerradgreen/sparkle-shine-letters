# Replace Google tag with new GA4 snippet

## Goal
Install the new GA4 Google tag (`G-Y5YZE675KX`) and remove the old gtag.js code so there is no double-tracking.

## Current state
- `index.html` contains an inline script at lines 279-327 that defines `window.dataLayer`, declares `gtag()`, and asynchronously loads `https://www.googletagmanager.com/gtag/js?id=AW-17646919806`.
- The same block also loads the Meta Pixel and Contentsquare scripts after a delay; those are separate and will be preserved.

## Changes
1. **Remove** the old inline `gtag.js` block from `index.html` (lines 279-327), including the Google Ads `AW-17646919806` config and the `dataLayer`/`gtag` declarations.
2. **Insert** the new GA4 snippet immediately after the opening `<head>` tag, exactly as provided:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y5YZE675KX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-Y5YZE675KX');
   </script>
   ```
3. **Preserve** the Meta Pixel and Contentsquare loader unchanged (it is not gtag/Google tag code).
4. **Preserve** the existing `preconnect`/`dns-prefetch` links to `googletagmanager.com`.
5. Run a production build and publish to verify the tag fires and no runtime errors remain.

## Open question
Google's instructions say to remove old gtag code. This will also remove the Google Ads conversion tag `AW-17646919806`. If you still want Google Ads conversion tracking, I can add `gtag('config', 'AW-17646919806');` as a second line inside the new snippet after the GA4 config.
