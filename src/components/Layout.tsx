import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ChatBot from "./ChatBot";
import FloatingBookNow from "./FloatingBookNow";
import CtaBanner from "./CtaBanner";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <CtaBanner />
      <Footer />
      <ChatBot />
      <FloatingBookNow />
    </>
  );
}
