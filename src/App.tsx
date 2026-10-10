import { publicRoutes, utilityRoutes } from "./publicRoutes";
import { lazy, Suspense, useEffect, useState } from "react";
import type { ComponentType } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";
import GA4RouteTracker from "@/components/analytics/GA4RouteTracker";

const NotFound = lazy(() => import("./pages/NotFound"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

const staticPages = Object.entries({ ...publicRoutes, ...utilityRoutes }).map(([path, load]) => ({ path, Component: lazy(load) }));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen bg-background" aria-label="Loading page" />
);

const AppChrome = () => {
  const [Toaster, setToaster] = useState<ComponentType | null>(null);
  const [Sonner, setSonner] = useState<ComponentType | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadChrome = () => {
      Promise.all([
        import("@/components/ui/toaster"),
        import("@/components/ui/sonner"),
      ]).then(([toasterModule, sonnerModule]) => {
        if (!isMounted) return;
        setToaster(() => toasterModule.Toaster);
        setSonner(() => sonnerModule.Toaster);
      });
    };

    const schedule = () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(loadChrome, { timeout: 4000 });
      } else {
        setTimeout(loadChrome, 4000);
      }
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {Toaster ? <Toaster /> : null}
      {Sonner ? <Sonner /> : null}
    </>
  );
};

const RouterContent = () => {
  const { pathname } = useLocation();
  const utilityPath = pathname.replace(/\/+$/, "") || "/";
  return (
    <>
      <ScrollToTop />
      <GA4RouteTracker />
      {utilityRoutes[utilityPath] && <Helmet><meta name="robots" content="noindex, follow" /><link rel="canonical" href={`https://inventory.vintagemarqueelights.com${utilityPath}`} /></Helmet>}
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          {staticPages.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
          <Route path="/product/:handle" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <BrowserRouter>
        <RouterContent />
        <AppChrome />
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
