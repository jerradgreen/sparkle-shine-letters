# Diagnostic: `lead_mobile_vendor` seen on the Event Style thank-you page

No code changes. Findings only.

## 1. What the website fires on /thank-you/event-standup

Exactly one lead event, from `src/pages/thank-you/EventStandupThankYou.tsx:14-17`:

```ts
(window as any).fbq?.('track', 'Lead');
trackLeadOnce("event-standup", "Event Stand-Up Letters", entryId);
```

`trackLeadOnce` (`src/lib/analytics.ts:105-133`) sends:

```ts
gtag("event", "generate_lead", { form_type: "event-standup", lead_category: "Event Stand-Up Letters" });
```

**The only GA4 event name emitted by the site is `generate_lead`.** A repo-wide search finds no `lead_mobile_vendor`, no `lead_event_style`, and no other `lead_*` event name anywhere in the codebase or in git history. So the site is not firing a wrong event — it does not fire those names at all.

## 2. Where `lead_mobile_vendor` actually comes from

The captured requests are Google **Ads** hits, not GA4 hits:

- Endpoint: `https://www.google.com/measurement/conversion?...` (Google Ads conversion endpoint), not `google-analytics.com/g/collect` (GA4).
- Seven of them fire together, in the same millisecond batch, each with a different `en=` value: `lead_mobile_vendor`, `lead_event_style`, `lead_own_it`, `lead_rental_inventory`, `lead_not_sure`, `lead_layered_logo`, `lead_wall_sign`.
- Each has its own `gacid` and `frm=2`.
- `url=` in every one of those captures is `…lovableproject.com/rental-inventory?__lovable_load_id=…` — the rental inventory page, **not** the Event Style thank-you page.

These names are Google Ads **conversion action / imported-event names configured in your Ads account**, echoed back by the Google tag as it evaluates its conversion rule set on page load. The whole set is pinged together on a single page load, which is why one page produced all seven `lead_*` names at once. Nothing in the website chose `lead_mobile_vendor` for that page — the site did not send any of these names.

## 3. Answer

- The GA4 event name fired on `/thank-you/event-standup` is **`generate_lead`** (params `form_type=event-standup`, `lead_category=Event Stand-Up Letters`), plus the Meta Pixel `Lead`.
- `en=lead_mobile_vendor` is **not** a site-fired event and not a mismatched page mapping in the code. It is an Ads-side conversion-action name in a batch of seven that the Google Ads tag pings on page load, and the capture you have was recorded on `/rental-inventory`, not on the Event Style thank-you page.
- So: not the wrong event being fired by the site, and not intentional site behavior either — those `lead_*` names are configured entirely in Google Ads, not in this project.

If you want the per-page mapping verified as it happens on the live thank-you URL specifically, the next step would be a live capture on `https://inventory.vintagemarqueelights.com/thank-you/event-standup?entry_id=<test>` and reading which `en=` values the Ads endpoint receives there.
