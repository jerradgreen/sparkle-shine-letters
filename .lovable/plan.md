# Forensic Evidence Report — Tracking Changes Aug 13–18, 2026

Evidence only. No code was modified.

Note on commit topology: `f68a6c9`, `f26b2f8`, and `d10e16b` are merge commits (publish merges). Diffs below are computed against their first parent. `d10e16b` contains **zero** content difference from `8358d0b` (`git diff 8358d0b d10e16b` is empty) — it is the publish merge of the same tree; its stat block simply restates the same additions.

---

## 1. Files changed per commit

| Commit | Date (UTC) | Message | Files changed |
|---|---|---|---|
| f68a6c9 | 2026-08-13 18:23:52 | Added gtag to `<head>` | `index.html`; plan file rename only |
| f26b2f8 | 2026-08-13 18:26:32 | Removed legacy gtag snippet | `supabase/functions/gsc-setup/index.ts` (deleted, 109 lines) |
| 7d9b388 | 2026-08-18 09:42:41 | Changes | `src/lib/analytics.ts` (new, 133 lines) |
| ec95cf2 | 2026-08-18 09:42:45 | Changes | `src/components/analytics/GA4RouteTracker.tsx` (new, 27 lines) |
| 8358d0b | 2026-08-18 09:43:13 | Changes | `src/App.tsx`, `src/pages/ThankYou.tsx`, `src/pages/download/RentalGuideThankYou.tsx`, `src/pages/thank-you/CustomThankYou.tsx`, `EventStandupThankYou.tsx`, `MobileVendorThankYou.tsx`, `NotSureThankYou.tsx`, `RentalInventoryThankYou.tsx`, `ThreeDLogosThankYou.tsx`, `WallHangingThankYou.tsx` |
| d10e16b | 2026-08-18 09:46:59 | Fixed entry_id in redirect | Publish merge of 7d9b388 + ec95cf2 + 8358d0b; plan file rename. No unique content. |

Files **not** touched by any of these six commits: `public/_redirects`, `src/App.tsx` route table entries (only an import + one JSX line added), `scripts/generate-static-seo-pages.mjs`, `public/robots.txt`, all quote-form pages.

---

## 2. Exact diffs

### 2.1 `f68a6c9` — `index.html`

```diff
diff --git a/index.html b/index.html
index 0de4a55..cea6cab 100644
--- a/index.html
+++ b/index.html
@@ -1,7 +1,19 @@
 <!DOCTYPE html>
 <html lang="en">
   <head>
+    <!-- Google tag (gtag.js) - shared tag: GA4 + Google Ads -->
+    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y5YZE675KX"></script>
+    <script>
+      window.dataLayer = window.dataLayer || [];
+      function gtag(){dataLayer.push(arguments);}
+      gtag('js', new Date());
+
+      gtag('config', 'G-Y5YZE675KX');
+      gtag('config', 'AW-17646919806');
+    </script>
+
     <meta charset="UTF-8" />
+
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Vintage Marquee Lights | Premium Marquee Signs</title>
@@ -277,8 +289,6 @@
     <meta name="twitter:image" content="https://storage.googleapis.com/...custom_collage2.webp">
     
     <script>
-      window.dataLayer = window.dataLayer || [];
-      function gtag(){dataLayer.push(arguments);}
       window.fbq = window.fbq || function(){(window.fbq.q = window.fbq.q || []).push(arguments);};
       window._fbq = window.fbq;
       window.fbq.loaded = true;
@@ -286,14 +296,8 @@
 
       (function loadMarketingScriptsAfterFirstPaint() {
         var loadScripts = function() {
-          var gtagScript = document.createElement('script');
-          gtagScript.async = true;
-          gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17646919806';
-          document.head.appendChild(gtagScript);
-          gtag('js', new Date());
-          gtag('config', 'AW-17646919806');
-
           var contentsquareScript = document.createElement('script');
+
           contentsquareScript.async = true;
           contentsquareScript.src = 'https://t.contentsquare.net/uxa/9a47fa3217445.js';
           document.head.appendChild(contentsquareScript);
```

**State BEFORE f68a6c9:** the only Google tag on the site was the Ads-first loader. `gtag.js` was requested with `?id=AW-17646919806`, injected **after first paint** — scheduled by `window.setTimeout(runAfterLcpWindow, 4000)` and then `requestIdleCallback(loadScripts, {timeout: 5000})`. So the Ads tag loaded roughly 4–9 s after `load`, and `gtag('config', 'AW-17646919806')` ran only after that. No GA4 measurement ID was configured anywhere.

**State AFTER f68a6c9:** `gtag.js` is requested with `?id=G-Y5YZE675KX` **synchronously in `<head>`**, and both `gtag('config','G-Y5YZE675KX')` and `gtag('config','AW-17646919806')` run immediately in head, before body/render, on every full document load.

### 2.2 `f26b2f8` — `supabase/functions/gsc-setup/index.ts` deleted

Full 109-line deletion of the Google Search Console edge function (constants `GATEWAY`, `SITE`, CORS headers, `authHeaders()`, `requireAuth()`, `Deno.serve` handler with `get-token` / `verify-and-submit` / `list-sites` actions). Despite the commit message "Removed legacy gtag snippet", **no `index.html` change and no gtag/Ads/analytics code is in this commit.** It contains zero lines matching `gtag`, `AW-`, `page_view`, `generate_lead`, or any redirect/routing code.

### 2.3 `7d9b388` — `src/lib/analytics.ts` (new file, full content added)

```diff
+declare global {
+  interface Window {
+    gtag?: (...args: unknown[]) => void;
+    dataLayer?: unknown[];
+  }
+}
+
+const LEAD_SENT_PREFIX = "vml_lead_sent:";
+const LEAD_TTL_DAYS = 90;
+
+function getGtag(): typeof window.gtag | undefined {
+  if (typeof window === "undefined") return undefined;
+  return window.gtag;
+}
+
+export function trackPageView(path?: string): void {
+  const gtag = getGtag();
+  if (!gtag) return;
+
+  try {
+    const pagePath = path ?? window.location.pathname;
+    gtag("event", "page_view", {
+      page_path: pagePath,
+      page_location: window.location.href,
+      page_title: document.title,
+    });
+  } catch {
+    // Fail silently in private-mode browsers or when GA is blocked.
+  }
+}
+
+function storageAvailable(type: "localStorage" | "sessionStorage"): boolean {
+  if (typeof window === "undefined") return false;
+  try {
+    const storage = window[type];
+    const testKey = "__vml_storage_test__";
+    storage.setItem(testKey, "1");
+    storage.removeItem(testKey);
+    return true;
+  } catch {
+    return false;
+  }
+}
+
+function cleanupOldLeadKeys(): void {
+  if (!storageAvailable("localStorage")) return;
+  try {
+    const now = Date.now();
+    const ttlMs = LEAD_TTL_DAYS * 24 * 60 * 60 * 1000;
+    for (let i = 0; i < window.localStorage.length; i++) {
+      const key = window.localStorage.key(i);
+      if (key?.startsWith(LEAD_SENT_PREFIX)) {
+        const raw = window.localStorage.getItem(key);
+        if (raw) {
+          const timestamp = parseInt(raw, 10);
+          if (!Number.isNaN(timestamp) && now - timestamp > ttlMs) {
+            window.localStorage.removeItem(key);
+          }
+        }
+      }
+    }
+  } catch {
+    // Ignore storage errors.
+  }
+}
+
+function markLeadSent(entryId: string): void {
+  const value = String(Date.now());
+  if (storageAvailable("localStorage")) {
+    try {
+      window.localStorage.setItem(`${LEAD_SENT_PREFIX}${entryId}`, value);
+      cleanupOldLeadKeys();
+      return;
+    } catch { /* Fall through to sessionStorage. */ }
+  }
+  if (storageAvailable("sessionStorage")) {
+    try {
+      window.sessionStorage.setItem(`${LEAD_SENT_PREFIX}${entryId}`, value);
+    } catch { /* Ignore. */ }
+  }
+}
+
+function hasLeadBeenSent(entryId: string): boolean {
+  if (storageAvailable("localStorage")) {
+    try {
+      return window.localStorage.getItem(`${LEAD_SENT_PREFIX}${entryId}`) !== null;
+    } catch { /* Fall through. */ }
+  }
+  if (storageAvailable("sessionStorage")) {
+    try {
+      return window.sessionStorage.getItem(`${LEAD_SENT_PREFIX}${entryId}`) !== null;
+    } catch { /* Ignore. */ }
+  }
+  return false;
+}
+
+export function trackLeadOnce(
+  formType: string,
+  leadCategory: string,
+  entryId: string | null | undefined
+): void {
+  const gtag = getGtag();
+  if (!gtag) return;
+
+  if (!entryId || entryId.trim() === "") {
+    // No entry_id means this is not a confirmed Cognito submission.
+    return;
+  }
+
+  const normalizedEntryId = entryId.trim();
+
+  if (hasLeadBeenSent(normalizedEntryId)) {
+    return;
+  }
+
+  try {
+    gtag("event", "generate_lead", {
+      form_type: formType,
+      lead_category: leadCategory,
+    });
+    markLeadSent(normalizedEntryId);
+  } catch {
+    // Fail silently in private-mode browsers or when GA is blocked.
+  }
+}
```

Zero deletions. No `send_to`, no `AW-` reference, no `conversion` event.

### 2.4 `ec95cf2` — `src/components/analytics/GA4RouteTracker.tsx` (new file)

```diff
+import { useEffect, useRef } from "react";
+import { useLocation } from "react-router-dom";
+import { trackPageView } from "@/lib/analytics";
+
+const GA4RouteTracker = () => {
+  const location = useLocation();
+  const isFirstRender = useRef(true);
+
+  useEffect(() => {
+    if (isFirstRender.current) {
+      // The initial page_view is already sent by gtag('config', ...) in index.html.
+      isFirstRender.current = false;
+      return;
+    }
+
+    // Small delay so React Helmet has time to update document.title first.
+    const timer = setTimeout(() => {
+      trackPageView(location.pathname + location.search);
+    }, 100);
+
+    return () => clearTimeout(timer);
+  }, [location.pathname, location.search]);
+
+  return null;
+};
+
+export default GA4RouteTracker;
```

Zero deletions.

### 2.5 `8358d0b` — `src/App.tsx`

```diff
@@ -4,6 +4,7 @@
 import { HelmetProvider } from "react-helmet-async";
 import { ScrollToTop } from "@/components/ScrollToTop";
+import GA4RouteTracker from "@/components/analytics/GA4RouteTracker";
@@ -110,6 +111,7 @@ const RouterContent = () => {
     <>
       <ScrollToTop />
+      <GA4RouteTracker />
       <Suspense fallback={<RouteFallback />}>
         <Routes>
           <Route path="/" element={<Index />} />
```

No route was added, removed, renamed, or reordered. No redirect logic touched.

### 2.6 `8358d0b` — thank-you pages (all 9)

Every page received the identical structural edit; only the two `trackLeadOnce` string arguments differ.

`src/pages/ThankYou.tsx`:
```diff
 import { useEffect } from "react";
-import { Link } from "react-router-dom";
+import { Link, useSearchParams } from "react-router-dom";
 ...
 import { Helmet } from "react-helmet-async";
+import { trackLeadOnce } from "@/lib/analytics";
 
 const ThankYou = () => {
+  const [searchParams] = useSearchParams();
+  const entryId = searchParams.get("entry_id");
+
   useEffect(() => {
     (window as any).fbq?.('track', 'Lead');
-  }, []);
+    trackLeadOnce("general", "General Contact", entryId);
+  }, [entryId]);
```

Same diff shape, per file, with these arguments:

| File | `trackLeadOnce` arguments |
|---|---|
| `src/pages/ThankYou.tsx` | `"general", "General Contact", entryId` |
| `src/pages/download/RentalGuideThankYou.tsx` | `"rental-guide", "Rental Guide Download", entryId` |
| `src/pages/thank-you/CustomThankYou.tsx` | `"custom", "Custom Sign Quote", entryId` |
| `src/pages/thank-you/EventStandupThankYou.tsx` | `"event-standup", "Event Stand-Up Letters", entryId` |
| `src/pages/thank-you/MobileVendorThankYou.tsx` | `"mobile-vendor", "Mobile Vendor Signs", entryId` |
| `src/pages/thank-you/NotSureThankYou.tsx` | `"not-sure", "Undecided Sign Type", entryId` |
| `src/pages/thank-you/RentalInventoryThankYou.tsx` | `"rental-inventory", "Rental Inventory Packages", entryId` |
| `src/pages/thank-you/ThreeDLogosThankYou.tsx` | `"3d-logos", "3D Layered Logo Signs", entryId` |
| `src/pages/thank-you/WallHangingThankYou.tsx` | `"wall-hanging", "Wall-Hanging Signs", entryId` |

In every file the pre-existing `(window as any).fbq?.('track', 'Lead');` line was **kept unchanged**. No markup, `<Helmet>` tag, link, or navigation element in any thank-you page was altered.

---

## 3. What changed in the conversion tracking flow

- **Before Aug 13:** one `gtag.js` load keyed to `AW-17646919806`, injected 4–9 seconds after page load, followed by `gtag('config','AW-17646919806')`. That deferred `config` hit was the **only** signal ever sent to Google Ads from this codebase. No GA4 property was configured.
- **After Aug 13 (f68a6c9):** `gtag.js` is keyed to `G-Y5YZE675KX` and loads synchronously in `<head>`. Both `config` calls fire in head. Ads is now a secondary destination on a GA4-primary tag rather than the tag's own container ID.
- **After Aug 18 (7d9b388 + ec95cf2 + 8358d0b):** two manual event layers were added on top: `page_view` on SPA route transitions, and `generate_lead` on thank-you pages gated on `?entry_id`.

## 4. Did `page_view` behavior change?
Yes, twice.
- f68a6c9: the automatic page-load hit now originates from a head-time GA4-keyed `config` instead of a post-LCP Ads-keyed `config`. Timing moved from ~4–9 s after load to before first paint. Because `gtag.js` is fetched with `?id=G-Y5YZE675KX`, the tag's primary container is GA4; `AW-17646919806` is configured as an additional destination on that same tag.
- ec95cf2 + 8358d0b: a **new** manual `page_view` fires on every client-side route change, ~100 ms after the route commits, with `page_path`, `page_location`, `page_title`. It is skipped on first render. It carries **no `send_to`**, so it is addressed by gtag's default destination resolution, not explicitly to `AW-17646919806`.

## 5. Did `generate_lead` behavior change?
It was created. Before Aug 18 the string `generate_lead` did not exist anywhere in the codebase. After Aug 18 it fires once per thank-you mount, only when `?entry_id` is present and not already recorded in `localStorage`/`sessionStorage` under `vml_lead_sent:<id>`. Parameters sent: `form_type`, `lead_category` only. No `send_to`, no `value`, no `currency`, no `transaction_id`.

## 6. Did Google Ads gtag behavior change?
Yes — in f68a6c9, and only there.
- The `gtag.js` request URL changed from `?id=AW-17646919806` to `?id=G-Y5YZE675KX`.
- `gtag('config','AW-17646919806')` moved from a deferred post-paint injection to a synchronous head call, and is now a second `config` on a GA4-keyed tag.
- `gtag('js', new Date())` is now called once in head instead of inside the deferred loader.
- Across all six commits, **no** `gtag('event','conversion', ...)` and **no** `send_to: 'AW-17646919806'` was ever added. Repo-wide history search: `git log --all -S"gtag('event', 'conversion'"` returns **no commits**; every `send_to` match in history is inside `.lovable/plan.md` (audit notes from Aug 15/20/22), never in shipped code.

## 7. Was any previous tracking code removed?
Yes, in f68a6c9 only:
- the dynamic `gtagScript` element creation and `document.head.appendChild(gtagScript)` for `?id=AW-17646919806`
- the deferred `gtag('js', new Date())`
- the deferred `gtag('config', 'AW-17646919806')`
- the duplicated `window.dataLayer` init and `function gtag()` shim in the lower script block

All four were replaced by equivalents in head (the Ads `config` survives; the Ads-keyed **tag load URL** does not). Meta Pixel and Contentsquare code was untouched. Nothing was removed in f26b2f8 (analytics-wise), 7d9b388, ec95cf2, 8358d0b, or d10e16b.

## 8. Did redirect, routing, SPA navigation, or thank-you page behavior change?
No. Across these six commits:
- no route path added, removed, or renamed in `src/App.tsx`
- `public/_redirects` untouched
- no `<Navigate>`, `navigate()`, `window.location` assignment, or `<meta http-equiv="refresh">` added or removed
- no change to Cognito embed code or any quote page
- thank-you pages received only import + hook + one function call inside the existing `useEffect`; their rendered output and the Meta Pixel `Lead` call are byte-identical in behavior
- the only navigation-adjacent addition is a passive `useLocation()` read in `GA4RouteTracker`, which never navigates

The `?entry_id=` parameter now appended to thank-you URLs comes from the **Cognito redirect configuration**, not from repository code. No commit here writes that parameter.

## 9. Could anything here stop legacy Ads page-view conversions while GA4 `generate_lead` keeps working?
Evidence-level findings, stated as mechanisms present in the diffs:

1. **Tag container ID switch (f68a6c9).** The `gtag.js` script is now requested as `?id=G-Y5YZE675KX`. `AW-17646919806` is configured as a secondary destination on that GA4-primary tag. The Ads-keyed tag load that existed before Aug 13 no longer exists in the code.
2. **New URL surface on thank-you pages.** Post-Aug-18 landing URLs are `/thank-you/<type>?entry_id=<id>`. `trackLeadOnce` returns early when `entry_id` is absent — i.e. the code path only fires when the parameter is present, which is the same period the parameter began appearing in the URL. Any Ads page-view rule matching on exact URL equality against the un-parameterized path is evaluated against a different string than before.
3. **Asymmetric addressing.** `generate_lead` and the manual `page_view` are both emitted without `send_to`. GA4 receives them because `G-Y5YZE675KX` is the tag's primary ID. No code in these commits addresses a conversion-labeled hit to `AW-17646919806`; the only Ads-directed hit remains the head `config` call.
4. **Timing shift.** The Ads `config` moved from ~4–9 s post-load to synchronous head execution. Post-Aug-13 it fires before React mounts and before React Helmet has set `document.title`; pre-Aug-13 it fired long after render.

These are the only mechanisms visible in the six commits. Nothing in 7d9b388, ec95cf2, 8358d0b, or d10e16b removes, blocks, throttles, or redirects an Ads hit.

## 10. Every deleted line related to GA/Ads/gtag/page_view/generate_lead/navigation/redirects/thank-you pages

**f68a6c9 — `index.html`:**
```
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
          var gtagScript = document.createElement('script');
          gtagScript.async = true;
          gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17646919806';
          document.head.appendChild(gtagScript);
          gtag('js', new Date());
          gtag('config', 'AW-17646919806');
```

**f26b2f8:** none in this category. (The 109 deleted lines are the GSC edge function; none reference gtag, GA, Ads, `page_view`, `generate_lead`, routing, or redirects.)

**7d9b388:** none (new file, 0 deletions).

**ec95cf2:** none (new file, 0 deletions).

**8358d0b — deletions, all 10 files:**
```
src/App.tsx: (none)

Each of the 9 thank-you pages:
-import { Link } from "react-router-dom";
-  }, []);
```
Both are replacements: the import gains `useSearchParams`; the `useEffect` dependency array becomes `[entryId]`. No tracking call was deleted from any thank-you page — `(window as any).fbq?.('track', 'Lead');` survives untouched in all nine.

**d10e16b:** none unique (publish merge; `git diff 8358d0b d10e16b` is empty).
