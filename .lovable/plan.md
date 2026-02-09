

## Fix: Blank /quote Page

### Root Cause
The `SEOHead` component expects a full `TemplateConfig` object with properties like `config.pageTitle`, `config.keywords`, `config.business.name`, `config.hero.heroImage`, and `config.theme.primaryColor`. The `QuoteSelector` page passes a minimal object cast with `as any`, so `SEOHead` crashes trying to call `.join()` on `undefined` (the missing `keywords` array), which causes the entire page to go blank.

### Fix
Replace the `SEOHead` usage in `QuoteSelector.tsx` with a simple `Helmet` component directly, since this page doesn't have a full template config. This avoids the crash while still setting the page title and meta description.

**File: `src/pages/QuoteSelector.tsx`**

- Remove the `SEOHead` import
- Add a `Helmet` import from `react-helmet-async`
- Replace the `<SEOHead config={...} />` line with a simple `<Helmet>` block that sets just the title and description

```
<Helmet>
  <title>Get a Quote - What Type of Sign Are You Looking For?</title>
  <meta name="description" content="Choose your sign type to get a custom quote from Vintage Marquee Lights." />
</Helmet>
```

No other files need to change.
