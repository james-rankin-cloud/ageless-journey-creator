import { Outlet, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import VisitShopCta from "./VisitShopCta";
import NewsletterSignup from "./NewsletterSignup";

/**
 * ChatBot is below-the-fold on every page and not needed for first paint.
 * Lazy-loaded + mount-deferred until either (a) the user scrolls past the
 * hero or (b) 3 s of idle. Saves it from the initial Layout chunk.
 */
const ChatBot = lazy(() => import("./ChatBot"));

export default function Layout() {
  const { pathname, hash } = useLocation();
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (showChat) return;
    const onScroll = () => {
      if (window.scrollY > 300) setShowChat(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const idle = window.setTimeout(() => setShowChat(true), 3500);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(idle);
    };
  }, [showChat]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-vitality-forest focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <NewsletterSignup />
      <VisitShopCta />
      <Footer />
      {showChat && (
        <Suspense fallback={null}>
          <ChatBot />
        </Suspense>
      )}
    </>
  );
}
