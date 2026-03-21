

## SEO Cleanup — 4 Changes

### Current Issues
1. **No `og:url`** in `index.html` static tags — SEOHead.tsx emits it for template pages, but pages with their own `<Helmet>` (homepage, blog, shop) don't get one
2. **`twitter:site`** is `@lovable_dev` (line 94) — needs to be `@VintageMarquee`
3. **No favicon `<link>`** — `public/favicon.ico` exists but isn't referenced in `index.html`
4. **Static JSON-LD** has no `price`/`priceCurrency` — per instructions, **leave it omitted** (no placeholder "0.00"); `StructuredData.tsx` already handles dynamic pricing

### File Changes

#### 1. `index.html` (4 edits)

**Add favicon** (after line 11):
```html
<link rel="icon" href="/favicon.ico" type="image/x-icon" />
```

**Add static `og:url`** with `data-rh="true"` (near line 90, alongside existing og tags):
```html
<meta data-rh="true" property="og:url" content="https://inventory.vintagemarqueelights.com/">
```

**Fix `twitter:site`** (line 94) — change `@lovable_dev` → `@VintageMarquee`, add `data-rh="true"`:
```html
<meta data-rh="true" name="twitter:site" content="@VintageMarquee" />
```

**JSON-LD** — no change needed. The `offers` object correctly omits `price`/`priceCurrency` since actual values aren't available statically. `StructuredData.tsx` handles dynamic pricing per-page.

#### 2. `src/components/seo/SEOHead.tsx`

Add `twitter:site` tag so template-driven pages also emit the correct handle:
```tsx
<meta name="twitter:site" content="@VintageMarquee" />
```

### No Other Files Changed
- `StructuredData.tsx` — already handles dynamic pricing, no changes needed
- Styling, routing, functionality — untouched
- Pages using their own `<Helmet>` (Index, blog posts, ShopLetters, ProductDetail) already set `og:url` via their individual Helmet blocks or inherit the static fallback which Helmet will now find (with `data-rh="true"`)

