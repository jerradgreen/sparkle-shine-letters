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
import RentalGuide from "./pages/download/RentalGuide";
import RentalGuideThankYou from "./pages/download/RentalGuideThankYou";
import ShopLetters from "./pages/ShopLetters";
import ProductDetail from "./pages/ProductDetail";

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
        <Route path="/quote/wall-hanging" element={<WallHangingQuote />} />
        <Route path="/quote/3d-logos" element={<ThreeDLogosQuote />} />
        <Route path="/quote/rental-inventory" element={<RentalInventoryQuote />} />
        <Route path="/quote/event-standup" element={<EventStandupQuote />} />
        <Route path="/quote/mobile-vendor" element={<MobileVendorQuote />} />
        <Route path="/quote/custom" element={<CustomQuote />} />
        <Route path="/download/rental-guide" element={<RentalGuide />} />
        <Route path="/download/rental-guide-thank-you" element={<RentalGuideThankYou />} />
        <Route path="/shop/36-inch-letters" element={<ShopLetters />} />
        <Route path="/product/:handle" element={<ProductDetail />} />
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
