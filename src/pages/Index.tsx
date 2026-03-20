import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Treatments from "@/components/Treatments";
import Journey from "@/components/Journey";
import Locations from "@/components/Locations";
import Booking from "@/components/Booking";
import Products from "@/components/Products";
import ChatBot from "@/components/ChatBot";
import Contact from "@/components/Contact";
import FloatingBookNow from "@/components/FloatingBookNow";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reviews />
        <Treatments />
        <Journey />
        <Locations />
        <Booking />
        <Products />
        <Contact />
      </main>
      <ChatBot />
      <FloatingBookNow />
    </>
  );
};

export default Index;
