import { lazy, Suspense, useEffect, useState } from "react";
import type { ComponentType } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const RentalInventory = lazy(() => import("./pages/RentalInventory"));
const EventStandUpSigns = lazy(() => import("./pages/EventStandUpSigns"));
const WallHangingMarqueeSigns = lazy(() => import("./pages/WallHangingMarqueeSigns"));
const MobileVendorSigns = lazy(() => import("./pages/MobileVendorSigns"));
const ThreeDLogos = lazy(() => import("./pages/ThreeDLogos"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WallHangingQuote = lazy(() => import("./pages/forms/WallHangingQuote"));
const ThreeDLogosQuote = lazy(() => import("./pages/forms/ThreeDLogosQuote"));
const RentalInventoryQuote = lazy(() => import("./pages/forms/RentalInventoryQuote"));
const EventStandupQuote = lazy(() => import("./pages/forms/EventStandupQuote"));
const MobileVendorQuote = lazy(() => import("./pages/forms/MobileVendorQuote"));
const CustomQuote = lazy(() => import("./pages/forms/CustomQuote"));
const NotSureQuote = lazy(() => import("./pages/forms/NotSureQuote"));
const RentalGuide = lazy(() => import("./pages/download/RentalGuide"));
const RentalGuideThankYou = lazy(() => import("./pages/download/RentalGuideThankYou"));
const QuoteSelector = lazy(() => import("./pages/QuoteSelector"));
const RentalBusiness = lazy(() => import("./pages/RentalBusiness"));
const RentalBusinessStartupCost = lazy(() => import("./pages/RentalBusinessStartupCost"));
const RentalBusinessScalableInventory = lazy(() => import("./pages/RentalBusinessScalableInventory"));
const RentalBusinessProfitability = lazy(() => import("./pages/RentalBusinessProfitability"));
const RoiCalculator = lazy(() => import("./pages/RoiCalculator"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const WallHangingThankYou = lazy(() => import("./pages/thank-you/WallHangingThankYou"));
const ThreeDLogosThankYou = lazy(() => import("./pages/thank-you/ThreeDLogosThankYou"));
const RentalInventoryThankYou = lazy(() => import("./pages/thank-you/RentalInventoryThankYou"));
const EventStandupThankYou = lazy(() => import("./pages/thank-you/EventStandupThankYou"));
const MobileVendorThankYou = lazy(() => import("./pages/thank-you/MobileVendorThankYou"));
const CustomThankYou = lazy(() => import("./pages/thank-you/CustomThankYou"));
const NotSureThankYou = lazy(() => import("./pages/thank-you/NotSureThankYou"));
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const WhySchoolsBuyMarqueeLetters = lazy(() => import("./pages/blog/WhySchoolsBuyMarqueeLetters"));
const ThirtySixVsFortyEightInchMarqueeLetters = lazy(() => import("./pages/blog/ThirtySixVsFortyEightInchMarqueeLetters"));
const UniversitiesTeamsMarqueeLetters = lazy(() => import("./pages/blog/UniversitiesTeamsMarqueeLetters"));
const FoodTruckMobileVendorSignageGuide = lazy(() => import("./pages/blog/FoodTruckMobileVendorSignageGuide"));
const MarqueeLetterRentalPricingGuide = lazy(() => import("./pages/blog/MarqueeLetterRentalPricingGuide"));
const CustomSignsForBarsAndRestaurants = lazy(() => import("./pages/blog/CustomSignsForBarsAndRestaurants"));
const HowToOrderACustomSign = lazy(() => import("./pages/blog/HowToOrderACustomSign"));
const HowMuchDoesACustomMarqueeSignCost = lazy(() => import("./pages/blog/HowMuchDoesACustomMarqueeSignCost"));
const FAQ = lazy(() => import("./pages/FAQ"));
const StartMarqueeRentalBusiness = lazy(() => import("./pages/StartMarqueeRentalBusiness"));
const WeddingMarqueeSigns = lazy(() => import("./pages/WeddingMarqueeSigns"));
const CorporateMarqueeSigns = lazy(() => import("./pages/CorporateMarqueeSigns"));
const Press = lazy(() => import("./pages/Press"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const MarqueeLettersForEventPros = lazy(() => import("./pages/MarqueeLettersForEventPros"));
const CustomMarqueeSigns = lazy(() => import("./pages/CustomMarqueeSigns"));

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
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rental-inventory" element={<RentalInventory />} />
          <Route path="/event-standup-signs" element={<EventStandUpSigns />} />
          <Route path="/wall-hanging-signs" element={<WallHangingMarqueeSigns />} />
          <Route path="/mobile-vendor-signs" element={<MobileVendorSigns />} />
          <Route path="/3d-logos" element={<ThreeDLogos />} />
          <Route path="/thank-you-for-submitting-a-form" element={<ThankYou />} />
          <Route path="/quote" element={<QuoteSelector />} />
          <Route path="/quote/wall-hanging" element={<WallHangingQuote />} />
          <Route path="/quote/3d-logos" element={<ThreeDLogosQuote />} />
          <Route path="/quote/rental-inventory" element={<RentalInventoryQuote />} />
          <Route path="/quote/event-standup" element={<EventStandupQuote />} />
          <Route path="/quote/mobile-vendor" element={<MobileVendorQuote />} />
          <Route path="/quote/custom" element={<CustomQuote />} />
          <Route path="/quote/not-sure" element={<NotSureQuote />} />
          <Route path="/download/rental-guide" element={<RentalGuide />} />
          <Route path="/download/rental-guide-thank-you" element={<RentalGuideThankYou />} />
          <Route path="/rental-business" element={<RentalBusiness />} />
          <Route path="/rental-business/startup-cost" element={<RentalBusinessStartupCost />} />
          <Route path="/rental-business/building-a-scalable-inventory" element={<RentalBusinessScalableInventory />} />
          <Route path="/rental-business/profitability" element={<RentalBusinessProfitability />} />
          <Route path="/roi-calculator" element={<RoiCalculator />} />
          <Route path="/product/:handle" element={<ProductDetail />} />
          <Route path="/thank-you/wall-hanging" element={<WallHangingThankYou />} />
          <Route path="/thank-you/3d-logos" element={<ThreeDLogosThankYou />} />
          <Route path="/thank-you/rental-inventory" element={<RentalInventoryThankYou />} />
          <Route path="/thank-you/event-standup" element={<EventStandupThankYou />} />
          <Route path="/thank-you/mobile-vendor" element={<MobileVendorThankYou />} />
          <Route path="/thank-you/custom" element={<CustomThankYou />} />
          <Route path="/thank-you/not-sure" element={<NotSureThankYou />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/why-schools-buy-commercial-marquee-letters" element={<WhySchoolsBuyMarqueeLetters />} />
          <Route path="/blog/36-vs-48-inch-marquee-letters" element={<ThirtySixVsFortyEightInchMarqueeLetters />} />
          <Route path="/blog/universities-teams-marquee-letters-branding" element={<UniversitiesTeamsMarqueeLetters />} />
          <Route path="/blog/food-truck-mobile-vendor-signage-guide" element={<FoodTruckMobileVendorSignageGuide />} />
          <Route path="/blog/marquee-letter-rental-pricing-guide" element={<MarqueeLetterRentalPricingGuide />} />
          <Route path="/blog/custom-signs-for-bars-and-restaurants" element={<CustomSignsForBarsAndRestaurants />} />
          <Route path="/blog/how-to-order-a-custom-sign" element={<HowToOrderACustomSign />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/start-marquee-rental-business" element={<StartMarqueeRentalBusiness />} />
          <Route path="/wedding-marquee-signs" element={<WeddingMarqueeSigns />} />
          <Route path="/corporate-marquee-signs" element={<CorporateMarqueeSigns />} />
          <Route path="/press" element={<Press />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/marquee-letters-for-event-pros" element={<MarqueeLettersForEventPros />} />
          <Route path="/custom-marquee-signs" element={<CustomMarqueeSigns />} />
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
