# Forensic Evidence Report — Google Ads Tracking Before vs After Aug 13, 2026

No production code was modified or deployed. `git status` is clean. Version A was reconstructed from `git show f68a6c9^1:index.html` into `/tmp/` and served on an isolated local port; Version B is the current site (local dev server plus a live production confirmation run).

## Test matrix (both versions, identical steps)

Each version: fresh browser context, paid-click landing on `/?gclid=TEST_GCLID_FORENSIC&utm_source=google&utm_medium=cpc`, then each URL loaded as a full document load:

1. `/thank-you/event-standup`
2. `/thank-you/event-standup?entry_id=TEST-FORENSIC-001`
3. `/thank-you/rental-inventory`
4. `/thank-you/rental-inventory?entry_id=TEST-FORENSIC-002`
5. `/thank-you/wall-hanging`
6. `/thank-you/wall-hanging?entry_id=TEST-FORENSIC-003`

## VERSION A (pre-Aug-13 `index.html`)

Tag code: no tag in `<head>`; a deferred loader appended `googletagmanager.com/gtag/js?id=AW-17646919806` after first paint, then `gtag('js')` + `gtag('config','AW-17646919806')`. No GA4 ID present.

Observed for the gclid landing AND all six thank-you URLs — identical every time:

```text
Google-domain requests: 1
  https://www.googletagmanager.com/gtag/js?id=AW-17646919806   (200, 401,526 bytes)
Ads/GA measurement hits: 0
Cookies set by Google: none (no _gcl_aw, no _gcl_au, no _ga)
dataLayer: [["js", <date>], ["config","AW-17646919806"], [], []]
window.google_tag_data keys: tidr, xcd, uach_promise, ics, uach   (container executed)
```

Evidence detail: the Ads container downloaded and executed, but emitted **zero** outbound measurement requests — nothing to `google.com/pagead`, `google.com/ccm`, `google.com/measurement`, `doubleclick.net`, `googleadservices.com`, or `/g/collect`. `?entry_id=` made no difference: byte-identical request sets with and without it.

Isolation control (same localhost origin, minimal page containing only the pre-Aug-13 AW snippet, with scroll interaction, 17s dwell): total third-party requests = 1 (`gtag/js?id=AW-17646919806`), no cookies. This rules out the SPA, the 404 of `/src/main.tsx`, and the page error as the cause — the AW-only snippet by itself produces no hit.

## VERSION B (current site)

Tag code in `<head>`, synchronous: `gtag/js?id=G-Y5YZE675KX`, then `config G-Y5YZE675KX` and `config AW-17646919806`.

Local dev run, per thank-you URL:

```text
without entry_id : 12 Google requests
  gtag/js?id=G-Y5YZE675KX
  /g/collect  tid=G-Y5YZE675KX  en=page_view   dl=<thank-you URL>
  /g/collect  tid=G-Y5YZE675KX  en=lead_mobile_vendor | lead_event_style | lead_own_it |
              lead_rental_inventory | lead_not_sure | lead_layered_logo | lead_wall_sign
  gtag/js?id=AW-17646919806&cx=c        (secondary Ads container load)
  /g/collect  en=scroll, en=user_engagement
  NO generate_lead
with entry_id    : 13 requests — identical, PLUS
  /g/collect  tid=G-Y5YZE675KX  en=generate_lead  dl=<thank-you URL>?entry_id=...
```

Cookies after gclid landing (Version B): `_gcl_aw=GCL.<ts>.TEST_GCLID_FORENSIC`, `_gcl_au`, `_ga`, `_ga_Y5YZE675KX` — all persisted through every subsequent full document load.

Production confirmation (`https://inventory.vintagemarqueelights.com`, same gclid landing):

```text
/thank-you/event-standup            (no entry_id)
  google.com/measurement/conversion?cv=11&tid=G-Y5YZE675KX&fmt=8&en=lead_mobile_vendor
  ... same for en=lead_event_style, lead_own_it, lead_rental_inventory,
      lead_not_sure, lead_layered_logo, lead_wall_sign
  gtag/js?id=AW-17646919806&cx=c
  NO en=page_view conversion ping, NO en=generate_lead

/thank-you/event-standup?entry_id=TEST-FORENSIC-001
  all of the above, PLUS
  google.com/measurement/conversion?cv=11&tid=G-Y5YZE675KX&fmt=8&en=generate_lead
  google.com/measurement/1p-conversion/?cv=11&tid=G-Y5YZE675KX&fmt=8&en=generate_lead
```

Every Ads-side conversion ping carries `tid=G-Y5YZE675KX`. No request anywhere in either version carries `tid=AW-17646919806`, and no request contains a conversion `label` parameter.

## Answers to the factual questions

1. **Does Version A send an Ads request on thank-you pages?** No. One container download, zero measurement hits, on all six URLs.
2. **Does Version B send Ads requests on thank-you pages?** Yes, but all keyed to `tid=G-Y5YZE675KX` (`google.com/measurement/conversion` for each GA4 event marked as an Ads conversion), plus a secondary `gtag/js?id=AW-17646919806&cx=c` container load.
3. **Does `?entry_id` change Ads network behavior?** No, in either version. Version A: identical request sets. Version B: the only difference is one extra GA4 `generate_lead` hit (and its Ads mirror) — `entry_id` never appears as an event parameter, only inside `dl`.
4. **Are conversion ID/label present anywhere?** No. No `label` param, no `send_to`, no `gtag('event','conversion',...)` in either version.
5. **Is gclid attribution retained?** Version B: yes — `_gcl_aw` holds the test gclid and survives every full reload. Version A: no Google cookies were set at all, so no client-side gclid persistence existed.
6. **What could make legacy Ads page-view conversions stop reporting while GA4 `generate_lead` keeps working?** The evidence shows: (a) neither version ever sent an Ads-native (`tid=AW-…`) hit, so those page-view actions were never fed by code — they could only have been fed by Ads-side URL rules evaluated from a hit that no longer exists in the same form; (b) in Version B every Ads-visible hit is a GA4-imported event (`tid=G-…`), and there is **no** `en=page_view` conversion ping — only `en=lead_*` and `en=generate_lead`; (c) thank-you URLs now carry `?entry_id=…`, so any Ads rule matching the URL exactly rather than by "contains" will not match.

Artifacts: `/tmp/forensic/out/raw.json`, `/tmp/forensic/out/report.txt`.
