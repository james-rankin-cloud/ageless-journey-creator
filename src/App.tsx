import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import TreatmentsPage from "@/pages/TreatmentsPage";
import JourneyPage from "@/pages/JourneyPage";
import LocationsPage from "@/pages/LocationsPage";
import ShopPage from "@/pages/ShopPage";
import BookNowPage from "@/pages/BookNowPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/book" element={<BookNowPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
