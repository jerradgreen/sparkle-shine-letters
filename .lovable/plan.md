# Tracking Audit — Findings and Recommended Minimum Fix

## 1. How GA4 is installed
Hard-coded gtag.js in `index.html` (lines 4-13), loaded synchronously at the top of `<head>`:

```text
<script async src=".../gtag/js?id=G-Y5YZE675KX">
gtag('js', new Date());
gtag('config', 'G-Y5YZE675KX');
gtag('config', 'AW-17646919806');
```

One shared tag serves both GA4 and Google Ads. No `gtag`/`dataLayer` calls exist anywhere in `src/` — the tag is never touched by app code.

## 2. GA4 events currently sent
- `page_view` — automatic, only on the initial HTML load.
- GA4 Enhanced Measurement events (scroll, outbound click, site search, file download) as enabled in the GA4 property UI.
- Zero custom events. No `generate_lead`, no `form_submit`, no `conversion` calls.

Important gap: this is a React SPA (react-router). Because no code sends `page_view` on route change, GA4 only records the first page of every session. All thank-you pages are client-side routes, so they are effectively invisible to GA4.

## 3. Google Ads conversion tags/events
- `AW-17646919806` is configured via `gtag('config', ...)` — this fires the Ads remarketing/page-load tag only.
- No `gtag('event', 'conversion', {send_to: 'AW-.../label'})` anywhere in the codebase.
- So Ads conversions are currently not fired from site code. Any conversions recorded must come from Google Ads-side configuration (e.g. auto-created/imported GA4 conversion or a destination-linked tag). The old `AW-999837409` is no longer in the code.

## 4. Google Tag Manager
Not installed. No `GTM-` container anywhere. (`googletagmanager.com` appears only as the gtag.js host.)

## 5. Other tracking scripts
- Meta Pixel `443717751929130` — stub in `index.html` (~line 292), real `fbevents.js` loaded lazily ~4-9s after load, then `fbq('init')` + `fbq('track','PageView')`.
- Contentsquare — `t.contentsquare.net/uxa/9a47fa3217445.js`, same deferred loader.
- SnapWidget — Instagram embed on the homepage (`src/pages/Index.tsx`), display only.
- Microsoft Clarity: not installed. Bing UET: not installed. TikTok/Pinterest/Hotjar/Snap pixels: not installed.

## 6. Code that runs after a successful form submission
Forms are Cognito Forms embeds mounted by `src/components/templates/FormPageTemplate.tsx`. There is no submit callback in code — Cognito redirects to a thank-you route. Each thank-you page's only post-submit logic is:

```tsx
useEffect(() => {
  (window as any).fbq?.('track', 'Lead');
}, []);
```

Present in: `src/pages/ThankYou.tsx`, `src/pages/download/RentalGuideThankYou.tsx`, and `src/pages/thank-you/{WallHanging,ThreeDLogos,RentalInventory,EventStandup,MobileVendor,Custom,NotSure}ThankYou.tsx`.

## 7. Does a successful submission send a GA4 event?
No. Nothing GA4-related fires on submission — no `generate_lead`, no `form_submit`, not even a `page_view` for the thank-you route (SPA navigation). GA4 sees a lead as nothing at all.

Additional risk: if the Cognito redirect happens in an iframe or as a full page load, timing still isn't the problem — the missing code is.

## 8. Duplicate tracking / conflicts
- No duplicate gtag.js loader and no duplicate GA4 ID. Clean.
- The Meta Pixel deferred loader delays `fbq('init')` by 4-9 seconds. On a thank-you page, `fbq?.('track','Lead')` runs on mount; because `fbq` is stubbed early the call is queued, so it should still send — but it is fragile and depends on the stub surviving.
- Meta `Lead` fires on every visit/refresh/back-navigation to a thank-you URL, so lead counts inflate. Same risk applies to any GA4 event added the same way.
- Contentsquare + Meta + GA4 all loading is fine; no conflict.
- No Ads conversion event in code means GA4 and Ads are not double-counting today.

## Recommended minimum changes (not yet applied)

1. **Add a tiny analytics helper** (e.g. `src/lib/analytics.ts`) that safely calls `window.gtag` if present, plus a `once`-per-session guard keyed on the thank-you route + a submission id, so refreshes don't double-count.
2. **Send `generate_lead` on each thank-you page** alongside the existing `fbq` call, with a `form_type` parameter (`wall-hanging`, `3d-logos`, `rental-inventory`, `event-standup`, `mobile-vendor`, `custom`, `not-sure`, `rental-guide`). One line added to the 9 existing `useEffect` blocks — no change to the Meta Pixel.
3. **Add SPA `page_view` tracking** — a small `useLocation` listener in `App.tsx` sending `gtag('event','page_view',{page_path,page_location,page_title})` on route change. This alone makes thank-you pages visible in GA4 and fixes site-wide undercounting.
4. **Google Ads conversion (only if you want site-fired conversions):** create a conversion action in Google Ads for "Lead", then fire `gtag('event','conversion',{send_to:'AW-17646919806/<label>'})` from the same thank-you effect. Requires the label from your Ads account. If you'd rather keep importing conversions from GA4, skip this and just mark `generate_lead` as a conversion in GA4 and import it into Ads — nothing in the existing Ads setup breaks either way.
5. **Do not touch** the shared gtag.js block, the Meta Pixel, or Contentsquare — existing Ads tracking keeps working since we only add events on the same tag.

Nothing above changes the Google Ads tag configuration, so current Ads tracking is unaffected.
