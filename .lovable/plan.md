
## Install Meta/Facebook Pixel Across Your Site

### Current Setup
Your site already has tracking scripts installed in `index.html`:
- Google Analytics (gtag.js)
- Contentsquare Analytics
- Optional NP tracking script

### Solution
Add the Meta Pixel code to `index.html` in the `<head>` section, right after the Contentsquare Analytics line. This ensures:
- The pixel loads on every page of your site
- It's installed alongside your other tracking scripts
- Consistent pixel firing across all routes (quote pages, thank you pages, etc.)

### Implementation
**File: `index.html`**

Add the Meta Pixel initialization code after line 108 (Contentsquare Analytics). The code includes:
1. The main Meta Pixel tracking script
2. The `fbq('init', '443717751929130')` call with your Pixel ID
3. The `fbq('track', 'PageView')` call for automatic page view tracking
4. The noscript fallback image for users without JavaScript

### What This Enables
- Automatic PageView tracking on all pages
- Ability to set up custom events (conversions) from your forms
- Retargeting audiences for Meta ads
- Conversion tracking for quote submissions and thank you pages

### Testing
After installation:
1. Use Meta's Pixel Helper browser extension to verify the pixel is firing
2. Test on a few different pages (home, quote forms, thank you pages)
3. Check that PageView events are being tracked

