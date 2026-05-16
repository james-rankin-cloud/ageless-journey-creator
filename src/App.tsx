import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/lib/auth";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import ExternalRedirect from "@/components/ExternalRedirect";
import { SHOP_URL } from "@/lib/links";

/**
 * Route-level code splitting. The HomePage is eager-imported because it's the
 * LCP route. Everything else is split into per-route chunks so a first-time
 * visitor doesn't download the entire site (blog posts, admin, dashboard,
 * every service page) just to land on `/`.
 */
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const BotoxDysportPage = lazy(() => import("@/pages/BotoxDysportPage"));
const HormoneBalancingPage = lazy(() => import("@/pages/HormoneBalancingPage"));
const CosmeticDermalFillerPage = lazy(() => import("@/pages/CosmeticDermalFillerPage"));
const CustomizedUltraFacialPage = lazy(() => import("@/pages/CustomizedUltraFacialPage"));
const LaserIplBblPage = lazy(() => import("@/pages/LaserIplBblPage"));
const PerfectDermaPeelPage = lazy(() => import("@/pages/PerfectDermaPeelPage"));
const MicroneedlingPage = lazy(() => import("@/pages/MicroneedlingPage"));
const BelkyraPage = lazy(() => import("@/pages/BelkyraPage"));
const DermaplaningPage = lazy(() => import("@/pages/DermaplaningPage"));
const BiohackingPage = lazy(() => import("@/pages/BiohackingPage"));
const HealthWeightPage = lazy(() => import("@/pages/HealthWeightPage"));
const VictoriaPage = lazy(() => import("@/pages/VictoriaPage"));
const LangleyPage = lazy(() => import("@/pages/LangleyPage"));
const KelownaPage = lazy(() => import("@/pages/KelownaPage"));
const AboutUsPage = lazy(() => import("@/pages/AboutUsPage"));
const TeamPage = lazy(() => import("@/pages/TeamPage"));
const StaffProfilePage = lazy(() => import("@/pages/StaffProfilePage"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const CareersPage = lazy(() => import("@/pages/CareersPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const GLP1BlogPost = lazy(() => import("@/pages/GLP1BlogPost"));
const WellnessRevolutionBlogPost = lazy(() => import("@/pages/WellnessRevolutionBlogPost"));
const PreventionAndLongevityBlogPost = lazy(() => import("@/pages/PreventionAndLongevityBlogPost"));
const PreventativeHealthBlogPost = lazy(() => import("@/pages/PreventativeHealthBlogPost"));
const LongevityMasterclassBlogPost = lazy(() => import("@/pages/LongevityMasterclassBlogPost"));
const GutMicrobesBlogPost = lazy(() => import("@/pages/GutMicrobesBlogPost"));
const LiveBetterLongerBlogPost = lazy(() => import("@/pages/LiveBetterLongerBlogPost"));
const LongevityIndustryBlogPost = lazy(() => import("@/pages/LongevityIndustryBlogPost"));
const BookNowPage = lazy(() => import("@/pages/BookNowPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const SignupPage = lazy(() => import("@/pages/SignupPage"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const PerformancePackagesPage = lazy(() => import("@/pages/PerformancePackagesPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}>
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
              <Route path="/our-team/:slug" element={<StaffProfilePage />} />
              <Route path="/faqs" element={<FAQPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/glp1-agonists" element={<GLP1BlogPost />} />
              <Route path="/blog/wellness-revolution" element={<WellnessRevolutionBlogPost />} />
              <Route path="/blog/prevention-and-longevity" element={<PreventionAndLongevityBlogPost />} />
              <Route path="/blog/preventative-health" element={<PreventativeHealthBlogPost />} />
              <Route path="/blog/longevity-masterclass" element={<LongevityMasterclassBlogPost />} />
              <Route path="/blog/gut-microbes-mental-health" element={<GutMicrobesBlogPost />} />
              <Route path="/blog/live-better-longer" element={<LiveBetterLongerBlogPost />} />
              <Route path="/blog/longevity-industry" element={<LongevityIndustryBlogPost />} />
              <Route path="/book" element={<BookNowPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/shop" element={<ExternalRedirect to={SHOP_URL} />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Redirects for old routes */}
              <Route path="/treatments" element={<Navigate to="/services" replace />} />
              <Route path="/journey" element={<Navigate to="/about-us" replace />} />
              <Route path="/locations" element={<Navigate to="/about-us" replace />} />
            </Route>
            {/* Standalone (no public Layout chrome) */}
            <Route path="/performance-packages" element={<PerformancePackagesPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
