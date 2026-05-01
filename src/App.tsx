import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";

import Index from "./pages/Index";
import RentalInventory from "./pages/RentalInventory";
import EventStandUpSigns from "./pages/EventStandUpSigns";
import WallHangingMarqueeSigns from "./pages/WallHangingMarqueeSigns";
import MobileVendorSigns from "./pages/MobileVendorSigns";
import ThreeDLogos from "./pages/ThreeDLogos";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import WallHangingQuote from "./pages/forms/WallHangingQuote";
import ThreeDLogosQuote from "./pages/forms/ThreeDLogosQuote";
import RentalInventoryQuote from "./pages/forms/RentalInventoryQuote";
import EventStandupQuote from "./pages/forms/EventStandupQuote";
import MobileVendorQuote from "./pages/forms/MobileVendorQuote";
import CustomQuote from "./pages/forms/CustomQuote";
import NotSureQuote from "./pages/forms/NotSureQuote";
import RentalGuide from "./pages/download/RentalGuide";
import RentalGuideThankYou from "./pages/download/RentalGuideThankYou";
import QuoteSelector from "./pages/QuoteSelector";
import RentalBusiness from "./pages/RentalBusiness";
import RentalBusinessStartupCost from "./pages/RentalBusinessStartupCost";
import RentalBusinessScalableInventory from "./pages/RentalBusinessScalableInventory";
import RentalBusinessProfitability from "./pages/RentalBusinessProfitability";
import RoiCalculator from "./pages/RoiCalculator";
import ShopLetters from "./pages/ShopLetters";
import ProductDetail from "./pages/ProductDetail";
import WallHangingThankYou from "./pages/thank-you/WallHangingThankYou";
import ThreeDLogosThankYou from "./pages/thank-you/ThreeDLogosThankYou";
import RentalInventoryThankYou from "./pages/thank-you/RentalInventoryThankYou";
import EventStandupThankYou from "./pages/thank-you/EventStandupThankYou";
import MobileVendorThankYou from "./pages/thank-you/MobileVendorThankYou";
import CustomThankYou from "./pages/thank-you/CustomThankYou";
import NotSureThankYou from "./pages/thank-you/NotSureThankYou";
import BlogIndex from "./pages/blog/BlogIndex";
import WhySchoolsBuyMarqueeLetters from "./pages/blog/WhySchoolsBuyMarqueeLetters";
import ThirtySixVsFortyEightInchMarqueeLetters from "./pages/blog/ThirtySixVsFortyEightInchMarqueeLetters";
import UniversitiesTeamsMarqueeLetters from "./pages/blog/UniversitiesTeamsMarqueeLetters";
import FoodTruckMobileVendorSignageGuide from "./pages/blog/FoodTruckMobileVendorSignageGuide";
import MarqueeLetterRentalPricingGuide from "./pages/blog/MarqueeLetterRentalPricingGuide";
import CustomOutdoorMarqueeSignsGuide from "./pages/blog/CustomOutdoorMarqueeSignsGuide";

const queryClient = new QueryClient();

const RouterContent = () => {
  return (
    <>
      <ScrollToTop />
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
        <Route path="/shop/36-inch-letters" element={<ShopLetters />} />
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
        <Route path="/blog/custom-outdoor-marquee-signs-guide" element={<CustomOutdoorMarqueeSignsGuide />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouterContent />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
