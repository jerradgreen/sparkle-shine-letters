declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const PRODUCT_PAGES: Record<string, { name: string; category: string }> = {
  "/rental-inventory": { name: "Rental inventory packages", category: "rental" },
  "/event-standup-signs": { name: "Stand-up event letters", category: "event" },
  "/wall-hanging-signs": { name: "Wall-hanging signs", category: "custom" },
  "/3d-logos": { name: "Layered logo signs", category: "custom" },
  "/mobile-vendor-signs": { name: "Mobile vendor signs", category: "custom" },
};

export function trackMetaRoute(pathname: string, sendPageView: boolean): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  try {
    if (sendPageView) window.fbq("track", "PageView");
    const path = pathname.replace(/\/+$/, "") || "/";
    const product = PRODUCT_PAGES[path];
    if (product) {
      window.fbq("track", "ViewContent", {
        content_name: product.name,
        content_category: product.category,
      });
    }
  } catch {
    // Analytics must never prevent navigation or a quote request.
  }
}

const sentMetaLeads = new Set<string>();
const META_LEAD_TTL_MS = 90 * 24 * 60 * 60 * 1000;

/** The form redirect must supply entry_id; direct thank-you visits do not count. */
export function trackMetaLeadOnce(formType: string, entryId: string | null | undefined): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  const id = entryId?.trim();
  if (!id) return;
  const key = `vml_meta_lead:${encodeURIComponent(formType)}:${encodeURIComponent(id)}`;
  if (sentMetaLeads.has(key)) return;
  try {
    const timestamp = Number(window.localStorage.getItem(key));
    if (timestamp > 0 && Date.now() - timestamp < META_LEAD_TTL_MS) return;
  } catch {
    // In-memory deduplication still works when storage is unavailable.
  }
  try {
    window.fbq("track", "Lead", { content_name: formType });
    sentMetaLeads.add(key);
    try {
      window.localStorage.setItem(key, String(Date.now()));
    } catch {
      // Tracking must never interrupt the confirmation page.
    }
  } catch {
    // A blocked tracker must not affect a successful quote request.
  }
}
