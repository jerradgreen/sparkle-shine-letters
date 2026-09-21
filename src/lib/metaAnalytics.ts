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
