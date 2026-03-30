import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import BotoxDysportPage from "@/pages/BotoxDysportPage";
import HormoneBalancingPage from "@/pages/HormoneBalancingPage";
import CosmeticDermalFillerPage from "@/pages/CosmeticDermalFillerPage";
import CustomizedUltraFacialPage from "@/pages/CustomizedUltraFacialPage";
import LaserIplBblPage from "@/pages/LaserIplBblPage";
import PerfectDermaPeelPage from "@/pages/PerfectDermaPeelPage";
import MicroneedlingPage from "@/pages/MicroneedlingPage";
import BelkyraPage from "@/pages/BelkyraPage";
import DermaplaningPage from "@/pages/DermaplaningPage";
import BiohackingPage from "@/pages/BiohackingPage";
import HealthWeightPage from "@/pages/HealthWeightPage";
import VictoriaPage from "@/pages/VictoriaPage";
import LangleyPage from "@/pages/LangleyPage";
import KelownaPage from "@/pages/KelownaPage";
import AboutUsPage from "@/pages/AboutUsPage";
import TeamPage from "@/pages/TeamPage";
import BlogPage from "@/pages/BlogPage";
import BookNowPage from "@/pages/BookNowPage";
import ShopPage from "@/pages/ShopPage";
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
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/botox-dysport" element={<BotoxDysportPage />} />
            <Route path="/services/hormone-balancing" element={<HormoneBalancingPage />} />
            <Route path="/services/cosmetic-dermal-filler" element={<CosmeticDermalFillerPage />} />
            <Route path="/services/customized-ultrafacial" element={<CustomizedUltraFacialPage />} />
            <Route path="/services/laser-ipl-bbl" element={<LaserIplBblPage />} />
            <Route path="/services/perfect-derma-peel" element={<PerfectDermaPeelPage />} />
            <Route path="/services/microneedling" element={<MicroneedlingPage />} />
            <Route path="/services/belkyra" element={<BelkyraPage />} />
            <Route path="/services/dermaplaning" element={<DermaplaningPage />} />
            <Route path="/services/biohacking" element={<BiohackingPage />} />
            <Route path="/services/health-weight" element={<HealthWeightPage />} />
            <Route path="/locations/victoria" element={<VictoriaPage />} />
            <Route path="/locations/langley" element={<LangleyPage />} />
            <Route path="/locations/kelowna" element={<KelownaPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/our-team" element={<TeamPage />} />
            <Route path="/faqs" element={<AboutUsPage />} />
            <Route path="/careers" element={<AboutUsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/book" element={<BookNowPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Redirects for old routes */}
            <Route path="/treatments" element={<Navigate to="/services" replace />} />
            <Route path="/journey" element={<Navigate to="/about-us" replace />} />
            <Route path="/locations" element={<Navigate to="/about-us" replace />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
