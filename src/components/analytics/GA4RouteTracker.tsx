import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

const GA4RouteTracker = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      // The initial page_view is already sent by gtag('config', ...) in index.html.
      isFirstRender.current = false;
      return;
    }

    // Small delay so React Helmet has time to update document.title first.
    const timer = setTimeout(() => {
      trackPageView(location.pathname + location.search);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  return null;
};

export default GA4RouteTracker;
