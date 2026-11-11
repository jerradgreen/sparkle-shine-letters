// Stored with quote requests only. Never send this record or customer details to GA4.
// Add a form only after its internal AdAttribution field has been created and verified.
export const ATTRIBUTION_READY_FORM_IDS: readonly string[] = [];
const STORAGE_KEY = 'vml_quote_attribution_v1';
const MAX_AGE = 90 * 24 * 60 * 60 * 1000;
const PARAMETERS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'campaign_id', 'adgroup_id', 'ad_id', 'matchtype', 'network', 'device',
  'gclid', 'gbraid', 'wbraid', 'fbclid'] as const;
type Touch = { at: number; landing_path: string; referrer_host: string; parameters: Record<string, string> };
type Attribution = { version: 1; first: Touch; latest: Touch };
let memory: Attribution | undefined;
let lastLocation = '';

export function captureLeadAttribution(): Attribution | undefined {
  if (typeof window === 'undefined') return;
  const now = Date.now();
  if (!memory) {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || 'null');
      if (saved?.version === 1 && saved.first?.at > now - MAX_AGE && saved.latest?.parameters) memory = saved;
    } catch { /* Storage is optional; the quote form must still work. */ }
  }
  if (memory && memory.first.at <= now - MAX_AGE) memory = undefined;
  if (memory && lastLocation === window.location.href) return memory;
  lastLocation = window.location.href;
  const params = new URLSearchParams(window.location.search);
  const parameters: Record<string, string> = {};
  for (const name of PARAMETERS) {
    const value = params.get(name)?.trim();
    if (value && value.length <= 500 && !/[<>\r\n@]/.test(value)) parameters[name] = value;
  }
  let referrer_host = '';
  try {
    const referrer = new URL(document.referrer);
    if (referrer.hostname !== window.location.hostname) referrer_host = referrer.hostname;
  } catch { /* Direct visit. */ }
  const touch: Touch = { at: now, landing_path: window.location.pathname, referrer_host, parameters };
  // Internal navigation and direct returns must not erase the last tagged acquisition.
  if (!memory) memory = { version: 1, first: touch, latest: touch };
  else if (Object.keys(parameters).length) memory = { ...memory, latest: touch };
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(memory)); } catch { /* Use memory. */ }
  return memory;
}

export function getQuoteAttribution(): string {
  const record = captureLeadAttribution();
  return record ? JSON.stringify({ ...record, quote_path: window.location.pathname }) : '';
}
