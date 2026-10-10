import { ADS_CONVERSION_ID, ADS_CONVERSION_LABELS } from "@/config/adsConversions";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const LEAD_SENT_PREFIX = "vml_ga_lead:";
const LEAD_TTL_MS = 90 * 24 * 60 * 60 * 1000;
const sentLeads = new Set<string>();

function getGtag(): typeof window.gtag | undefined {
  if (typeof window === "undefined") return undefined;
  return window.gtag;
}

export function trackPageView(path?: string): void {
  const gtag = getGtag();
  if (!gtag) return;

  try {
    const pagePath = path ?? window.location.pathname;
    gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  } catch {
    // Fail silently in private-mode browsers or when GA is blocked.
  }
}

function hasLeadBeenSent(key: string): boolean {
  if (sentLeads.has(key)) return true;
  for (const type of ["localStorage", "sessionStorage"] as const) {
    try {
      const timestamp = Number(window[type].getItem(key));
      if (timestamp > 0 && Date.now() - timestamp < LEAD_TTL_MS) return true;
    } catch {
      // Memory still deduplicates when browser storage is unavailable.
    }
  }
  return false;
}

function markLeadSent(key: string): void {
  sentLeads.add(key);
  for (const type of ["localStorage", "sessionStorage"] as const) {
    try {
      window[type].setItem(key, String(Date.now()));
      return;
    } catch {
      // Try session storage, then retain the in-memory marker.
    }
  }
}

export function trackLeadOnce(
  formType: string,
  leadCategory: string,
  entryId: string | null | undefined
): void {
  const gtag = getGtag();
  if (!gtag) return;

  if (!entryId || entryId.trim() === "") {
    // No entry_id means this is not a confirmed Cognito submission.
    return;
  }

  const key = `${LEAD_SENT_PREFIX}${encodeURIComponent(formType)}:${encodeURIComponent(entryId.trim())}`;

  if (hasLeadBeenSent(key)) {
    return;
  }

  try {
    gtag("event", "generate_lead", {
      form_type: formType,
      lead_category: leadCategory,
    });

    const adsLabel = ADS_CONVERSION_LABELS[formType];
    if (adsLabel && adsLabel.trim() !== "") {
      gtag("event", "conversion", {
        send_to: `${ADS_CONVERSION_ID}/${adsLabel.trim()}`,
      });
    }

    markLeadSent(key);
  } catch {
    // Fail silently in private-mode browsers or when GA is blocked.
  }
}
