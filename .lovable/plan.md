# Google Ads conversion events on every lead form submission

Site-fired conversions only — no page-view / URL-based conversion actions. Each lead form gets its own conversion action in Google Ads; the code fires it once, right after a confirmed submission lands on its thank-you page.

## How it will work

The thank-you pages already call one shared helper (`trackLeadOnce`) with a `formType` string and the Cognito `entry_id`. The Ads conversion goes inside that same helper, behind the same duplicate guard as the GA4 `generate_lead` event. So:

- A real submission fires GA4 `generate_lead` **and** the matching Ads conversion.
- A refresh or re-visit of the same thank-you URL fires neither.
- A thank-you URL with no `entry_id` fires neither.

## New file: `src/config/adsConversions.ts`

One place to paste labels as you create the conversion actions:

```ts
export const ADS_CONVERSION_ID = 'AW-17646919806';

export const ADS_CONVERSION_LABELS: Record<string, string> = {
  'event-standup': '',      // Event Style
  'wall-hanging': '',       // Wall Sign
  'mobile-vendor': '',      // Mobile Vendor
  'rental-inventory': '',   // Rental Inventory / Own It
  '3d-logos': '',           // Layered Logo
  'not-sure': '',           // Not Sure
  'custom': '',             // Custom Sign Quote
  'rental-guide': '',       // Rental Guide download
  'general': '',            // General contact
};
```

A blank label means "not configured yet" — that form fires GA4 only, silently, with no console error and no malformed `send_to`.

## Update `src/lib/analytics.ts`

Inside `trackLeadOnce`, after the GA4 event and inside the existing `entry_id` dedup guard:

- Look up the label for the `formType`; skip if blank or missing.
- Otherwise fire `gtag('event', 'conversion', { send_to: 'AW-17646919806/<label>' })`.
- No `value`, no `currency`, no `transaction_id`. `entry_id` stays internal to the dedup guard and is never sent, per the existing rule.

## Files that do not change

- The 9 thank-you pages — they already pass `formType`.
- `index.html` — the `gtag('config','AW-17646919806')` line is already correct; a second Ads tag must not be added.
- `GA4RouteTracker.tsx`, `App.tsx`, Meta Pixel, Contentsquare.

## What you do in Google Ads

For each lead type, create a conversion action of type **Website → set up with a Google tag → install the tag manually**, then copy the label from the snippet (`AW-17646919806/AbC-D_efGhIjKlMnOp` → the part after the slash) and give it to me. Set any existing page-view/URL-based action for the same lead to *secondary* (or remove it) so bidding uses one signal per lead.

## Verification

- Build the project.
- With Playwright: land on `/?gclid=TEST123`, then go to `/thank-you/event-standup?entry_id=VERIFY-001` and capture Google network hits — confirm one carrying the conversion ID and label, plus the GA4 `generate_lead`.
- Reload the same URL: neither event fires again.
- Load the same page with no `entry_id`: neither event fires.
- Confirm a still-blank label fires GA4 only, with no console error.
- Confirm the conversion payload contains no `entry_id` and no `transaction_id`.
