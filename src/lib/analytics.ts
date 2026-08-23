import { ADS_CONVERSION_ID, ADS_CONVERSION_LABELS } from "@/config/adsConversions";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const LEAD_SENT_PREFIX = "vml_lead_sent:";
const LEAD_TTL_DAYS = 90;

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

function storageAvailable(type: "localStorage" | "sessionStorage"): boolean {
  if (typeof window === "undefined") return false;
  try {
    const storage = window[type];
    const testKey = "__vml_storage_test__";
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

function cleanupOldLeadKeys(): void {
  if (!storageAvailable("localStorage")) return;
  try {
    const now = Date.now();
    const ttlMs = LEAD_TTL_DAYS * 24 * 60 * 60 * 1000;
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (key?.startsWith(LEAD_SENT_PREFIX)) {
        const raw = window.localStorage.getItem(key);
        if (raw) {
          const timestamp = parseInt(raw, 10);
          if (!Number.isNaN(timestamp) && now - timestamp > ttlMs) {
            window.localStorage.removeItem(key);
          }
        }
      }
    }
  } catch {
    // Ignore storage errors.
  }
}

function markLeadSent(entryId: string): void {
  const value = String(Date.now());
  if (storageAvailable("localStorage")) {
    try {
      window.localStorage.setItem(`${LEAD_SENT_PREFIX}${entryId}`, value);
      cleanupOldLeadKeys();
      return;
    } catch {
      // Fall through to sessionStorage.
    }
  }
  if (storageAvailable("sessionStorage")) {
    try {
      window.sessionStorage.setItem(`${LEAD_SENT_PREFIX}${entryId}`, value);
    } catch {
      // Ignore.
    }
  }
}

function hasLeadBeenSent(entryId: string): boolean {
  if (storageAvailable("localStorage")) {
    try {
      return window.localStorage.getItem(`${LEAD_SENT_PREFIX}${entryId}`) !== null;
    } catch {
      // Fall through.
    }
  }
  if (storageAvailable("sessionStorage")) {
    try {
      return window.sessionStorage.getItem(`${LEAD_SENT_PREFIX}${entryId}`) !== null;
    } catch {
      // Ignore.
    }
  }
  return false;
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

  const normalizedEntryId = entryId.trim();

  if (hasLeadBeenSent(normalizedEntryId)) {
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

    markLeadSent(normalizedEntryId);
  } catch {
    // Fail silently in private-mode browsers or when GA is blocked.
  }
}
