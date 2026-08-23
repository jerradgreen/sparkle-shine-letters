# Forensic Network Comparison Test — Pre-Aug-13 vs Current Google Tag

Goal: capture real network traffic from both tag implementations against the same three thank-you URLs, and determine at the network level whether Google Ads receives a page-load/conversion signal in each.

I need approval before running this, because it requires standing up an isolated second copy of the site in a temp directory outside the project. No production code, no project file, and no deployment is touched.

## What gets built (all in /tmp, nothing in the project)

**Version A — pre-Aug-13.** Extract the exact `index.html` as it existed at `f68a6c9^1` (read-only via `git show f68a6c9^1:index.html`) into `/tmp/forensic/versionA/`. That file contains the entire pre-Aug-13 tracking layer: `gtag.js` loaded as `?id=AW-17646919806` inside the deferred post-LCP loader, followed by `gtag('js')` and `gtag('config','AW-17646919806')`. Serve it from a throwaway static server on a spare port with SPA-style fallback so all three thank-you paths resolve to it.

Note on fidelity: version A has no React analytics layer to reproduce — `src/lib/analytics.ts` and `GA4RouteTracker.tsx` did not exist before Aug 18, and thank-you pages fired only the Meta Pixel. So the head snippet is the complete Google-side surface for version A, and serving that `index.html` is a faithful reproduction of every Google request the old site could emit on a thank-you page load.

**Version B — current.** The already-running app on `http://localhost:8080`, unmodified. Real React bundle, real `GA4RouteTracker`, real `trackLeadOnce`.

## URLs loaded against each version

1. `/thank-you/event-standup?entry_id=TEST-FORENSIC-001`
2. `/thank-you/rental-inventory?entry_id=TEST-FORENSIC-002`
3. `/thank-you/wall-hanging?entry_id=TEST-FORENSIC-003`

Plus, for question 4, the same three paths against version B **without** `?entry_id`, giving 6 version-B loads and 3 version-A loads.

Every load is a fresh browser context (no carried cookies), entered with `?gclid=TEST-FORENSIC-GCLID&utm_source=google&utm_medium=cpc` on a prior landing hop so a Google click identifier exists in `_gcl_aw` before the thank-you page loads — this is required to make the Ads-side traffic realistic rather than cookieless.

## Capture method

Playwright with a `request` listener plus a CDP network log, filtered to `googleadservices.com`, `googlesyndication.com`, `googletagmanager.com`, `google-analytics.com`, `/g/collect`, `/measurement/conversion`, `/pagead/conversion`, `/ccm/collect`. Wait for network idle plus a fixed 12-second tail per load, because the pre-Aug-13 loader deliberately defers the Ads tag by 4–9 seconds — a short wait would produce a false negative for version A.

For every captured request I record: full URL, `tid`, `en` (event name), Ads conversion ID and `label`/`cv`/`fmt` params if present, `dl` (page_location), `dr` (page_referrer), `gclid`/`gcl_aw`/`gclaw_src`, `gcs`, `cid`/`gacid`, whether the destination ID is a `G-` (GA4), `AW-` (Ads), or both, and the millisecond offset from `navigationStart`.

## Deliverable

A side-by-side table (version A vs version B, per URL), then direct factual answers to the six questions:

1. Whether version A emits any Ads request version B does not.
2. Whether version B still delivers a page-load signal addressed to `AW-17646919806`.
3. Whether the `gtag.js?id=` container switch changes which Ads requests are emitted.
4. Whether `?entry_id` changes the emitted request set (with/without comparison).
5. Any conversion IDs/labels observable in the captured Ads endpoints.
6. Any concrete network-level difference between the two versions.

Evidence only. No fix, no recommendation, no code change.

## Cleanup

`/tmp/forensic/` is deleted at the end. No git worktree, branch, checkout, or any other stateful git operation is used — only read-only `git show`. The project tree and the running dev server are left exactly as they are.
