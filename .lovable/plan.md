# Site-fired Google Ads conversion events for every lead form

Confirmed by full working-tree and git-history search: no conversion label, no `gtag('event','conversion')`, and no `send_to` has ever existed in this project. The only Ads code is `gtag('config','AW-17646919806')` in `index.html`. So there are no labels to reuse — each conversion action's label must be read out of Google Ads and pasted into one config file.

## 1. Where to get each label (you, in Google Ads)

Custom Goals don't show labels, but the underlying **conversion action** does:

Google Ads → Goals → Conversions → Summary → click the conversion action → **Tag setup / Google tag** → **Install the tag manually**. The snippet contains:

```js
gtag('event', 'conversion', {'send_to': 'AW-17646919806/AbC-D_efGhIjKlMnOp'});
```

The part after the slash is the label. Do that once per lead action (Event Style, Wall Sign, Mobile Vendor, Rental Inventory, Layered Logo, Not Sure, Own It). If an action was originally created as a page-view/URL action, it has no label — that one needs a new "Website → manual Google tag" conversion action created before it can be site-fired.

## 2. New file: `src/config/adsConversions.ts`

A single label map keyed by the `formType` string the thank-you pages already pass, so nothing else has to change when a label is added later:

```ts
export const ADS_CONVERSION_ID = 'AW-17646919806';

export const ADS_CONVERSION_LABELS: Record<string, string> = {
  'event-standup': '',      // Event Style
  'wall-hanging': '',       // Wall Sign
  'mobile-vendor': '',      // Mobile Vendor
  'rental-inventory': '',   // Rental Inventory / Own It
  '3d-logos': '',           // Layered Logo
  'not-sure': '',           // Not Sure
  'custom': '',
  'rental-guide': '',
  'general': '',
};
```

Empty string means "not configured" — the code skips it silently rather than firing a malformed `send_to`.

## 3. Update `src/lib/analytics.ts`

Inside the existing `trackLeadOnce`, after the GA4 `generate_lead` fires and inside the same `entry_id` dedup guard, add the Ads conversion:

- Look up `ADS_CONVERSION_LABELS[formType]`; if empty or missing, do nothing (GA4 still fires).
- Otherwise call `gtag('event', 'conversion', { send_to: '<ID>/<label>' })`.
- No `value`, no `currency`, no `transaction_id` — matching the current no-value lead setup. `entry_id` stays internal to the dedup guard and is never sent, per the existing rule.
- Both events stay behind the single `hasLeadBeenSent(entryId)` check, so a refresh of a thank-you URL sends neither, and a genuinely new submission sends both.

## 4. Files that do NOT change

- The 9 thank-you pages — they already pass `formType`; the label lookup happens inside the helper.
- `index.html` — the Ads `config` line is already correct, and a second Ads tag must not be added.
- `GA4RouteTracker.tsx`, `App.tsx`, Meta Pixel, Contentsquare — untouched.

## 5. Ads-side follow-up (you)

Once site-fired conversions are live, the old page-view/URL-based actions will double-count against the new event-based ones. Rebuild the Custom Goals on the event-based actions and set the URL-based ones to "secondary" (or remove them) so bidding uses one signal per lead.

## Verification

- Build the project.
- With Playwright, land on `/?gclid=TEST123`, then navigate to `/thank-you/event-standup?entry_id=VERIFY-001` and capture requests to `googleadservices.com` / `google.com/pagead` — confirm one hit carrying the conversion ID and label, plus the GA4 `generate_lead` on `/g/collect`.
- Reload the same URL: confirm neither event fires a second time.
- Load `/thank-you/event-standup` with no `entry_id`: confirm no conversion and no `generate_lead`.
- Confirm any form whose label is still blank fires GA4 only, with no console error.
- Confirm the conversion payload contains no `entry_id` and no `transaction_id`.
