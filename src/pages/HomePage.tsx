import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import BentoBlock from "@/components/BentoBlock";
import OurTreatments from "@/components/OurTreatments";
import ServicesPreview from "@/components/ServicesPreview";
import HomeLocations from "@/components/HomeLocations";
import BrandStatement from "@/components/BrandStatement";
import TeamSection from "@/components/TeamSection";
import VideoTestimonial from "@/components/VideoTestimonial";
import TestimonialsWall from "@/components/TestimonialsWall";
import ContactBlock from "@/components/ContactBlock";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Ageless Living™ Wellness Centre",
    description: "Modern treatments, expert guidance, and a commitment to helping you live better — at any age. Serving Langley, Victoria, and Kelowna, BC.",
    url: "https://agelessliving.com",
    image: "https://agelessliving.com/wp-content/uploads/2022/06/ageless-living-logo.png",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "287", bestRating: "5" },
    address: [
      { "@type": "PostalAddress", streetAddress: "415-20178 96th Ave", addressLocality: "Langley", addressRegion: "BC", postalCode: "V1M 0B2", addressCountry: "CA" },
      { "@type": "PostalAddress", streetAddress: "1708 Dolphin Ave #101", addressLocality: "Kelowna", addressRegion: "BC", postalCode: "V1Y 9S4", addressCountry: "CA" },
      { "@type": "PostalAddress", streetAddress: "740 Hillside Ave #120", addressLocality: "Victoria", addressRegion: "BC", postalCode: "V8T 1Z4", addressCountry: "CA" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Ageless Living™ Wellness Centre | Modern Treatments in BC</title>
        <meta name="description" content="Discover your best self at any age. Skin rejuvenation, hormone balancing, biohacking & more across Langley, Victoria & Kelowna." />
        <link rel="canonical" href="https://agelessliving.com" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Hero />
      <BentoBlock />
      <OurTreatments />
      <ServicesPreview />
      <HomeLocations />
      <BrandStatement />
      <TeamSection />
      <VideoTestimonial />
      <TestimonialsWall />
      <ContactBlock />
    </>
  );
}
