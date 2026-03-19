

## Google Tag Cleanup

### Current State

Only **one** Google tag exists in the codebase: `AW-999837409` in `index.html` (lines 97-105). Neither `AW-17646919806` nor `GT-WVRKWBMM` appear anywhere in the code.

This means `GT-WVRKWBMM` and `AW-17646919806` are likely installed via **Google Tag Manager** or directly in your Google Ads account linking — not in this codebase.

### Plan

#### 1. Replace `AW-999837409` with `AW-17646919806` in `index.html`

Update lines 97-105 to load and configure the correct tag:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17646919806"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-17646919806');
</script>
```

#### 2. Remove `GT-WVRKWBMM` outside this codebase

Since `GT-WVRKWBMM` is not in the code, you'll need to remove it from wherever it was added — likely Google Tag Manager or your Google Ads account tag settings. I can't modify those from here.

### Summary

One edit to `index.html`: swap `AW-999837409` → `AW-17646919806`. The other conflicting tag (`GT-WVRKWBMM`) lives outside this codebase.

