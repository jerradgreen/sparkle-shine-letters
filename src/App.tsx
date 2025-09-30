import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import RentalInventory from "./pages/RentalInventory";
import EventStandUpSigns from "./pages/EventStandUpSigns";
import WallHangingMarqueeSigns from "./pages/WallHangingMarqueeSigns";
import LayeredSigns from "./pages/LayeredSigns";
import FoodTruckSigns from "./pages/FoodTruckSigns";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rental-inventory" element={<RentalInventory />} />
            <Route path="/event-standup-signs" element={<EventStandUpSigns />} />
            <Route path="/wall-hanging-signs" element={<WallHangingMarqueeSigns />} />
            <Route path="/layered-signs" element={<LayeredSigns />} />
            <Route path="/food-truck-signs" element={<FoodTruckSigns />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
