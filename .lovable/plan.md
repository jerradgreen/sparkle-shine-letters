

## Fix Helmet Meta Tag Override — Implementation Plan

### Problem
Three issues prevent react-helmet-async from overriding static tags on `/event-standup-signs`:

1. **`index.html`** — Static `canonical`, `keywords`, `og:title`, `twitter:title`, `og:description`, `twitter:description` tags all lack `data-rh="true"`, so Helmet adds duplicates instead of replacing them.
2. **`SEOHead.tsx`** — Twitter tags use `property="twitter:*"` but `index.html` uses `name="twitter:*"`. Helmet can't match them, so both render.

### Changes

#### File 1: `index.html`

**Line 10** — Add `data-rh="true"` to keywords:
```html
<meta data-rh="true" name="keywords" content="marquee letter rental, event rental business, marquee lights, vintage marquee letters, rental inventory package, event entrepreneur">
```

**Line 11** — Add `data-rh="true"` to canonical:
```html
<link data-rh="true" rel="canonical" href="https://inventory.vintagemarqueelights.com/">
```

**Lines 137-140** — Add `data-rh="true"` to all four OG/Twitter title/description tags:
```html
<meta data-rh="true" property="og:title" content="Vintage Marquee Lights | Premium Marquee Signs">
<meta data-rh="true" name="twitter:title" content="Vintage Marquee Lights | Premium Marquee Signs">
<meta data-rh="true" property="og:description" content="...">
<meta data-rh="true" name="twitter:description" content="...">
```

#### File 2: `src/components/seo/SEOHead.tsx`

**Lines 35-39** — Change `property` to `name` on all Twitter meta tags:
```tsx
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content={currentUrl} />
<meta name="twitter:title" content={config.pageTitle} />
<meta name="twitter:description" content={config.metaDescription} />
<meta name="twitter:image" content={config.hero.heroImage} />
```

### Result
After these two edits, the rendered DOM on `/event-standup-signs` will have one clean set of:
- `canonical` → `https://inventory.vintagemarqueelights.com/event-standup-signs`
- `og:url` → same
- `twitter:url` → same
- Page title, description, og:title/description, twitter:title/description → all from the event page config, not homepage defaults

