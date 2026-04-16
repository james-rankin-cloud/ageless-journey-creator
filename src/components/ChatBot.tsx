import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Message = { role: "user" | "assistant"; content: string };

const ease = [0.16, 1, 0.3, 1] as const;

const quickReplies = [
  "I'm tired all the time",
  "Help me look younger",
  "How do I book?",
  "What's biohacking?",
  "Hours & locations",
];

const knowledgeBase: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["fatigue", "tired", "exhausted", "low energy", "energy"],
    answer:
      "Fatigue usually traces back to **hormones, nutrients, or cellular health**. Our **Hormone Balancing** panel and **Biohacking** NAD+/IV therapy are our two most-booked starting points. A 30-min consult pinpoints the right path. [Book a consultation](/book).",
  },
  {
    keywords: ["wrinkle", "younger", "glow", "aging skin", "fine line", "botox", "filler", "dermaplan", "microneedling", "peel", "laser"],
    answer:
      "Our **Skin Rejuvenation** suite covers Botox/Dysport, dermal fillers, microneedling, laser IPL/BBL, Perfect Derma Peel, dermaplaning and our signature Customized Ultra Facial. [See all skin services](/services#skin-rejuvenation) or [book here](/book).",
  },
  {
    keywords: ["hormone", "menopaus", "perimenopaus", "testosterone", "estrogen", "libido", "brain fog", "hot flash"],
    answer:
      "We do full bio-identical hormone assessment: comprehensive blood panel, symptoms review, then a personalized protocol reviewed by our physician team. [Learn about Hormone Balancing](/services/hormone-balancing) or [book a panel](/book).",
  },
  {
    keywords: ["biohack", "nad", "iv", "peptide", "longevity", "recovery", "performance"],
    answer:
      "Biohacking at Ageless Living means **IV NAD+, nutrient IVs, peptides, red-light, and regenerative protocols** — all physician-supervised. [Explore biohacking](/services/biohacking) or [book](/book).",
  },
  {
    keywords: ["weight", "glp", "ozempic", "semaglutide", "belkyra", "metabolic"],
    answer:
      "Our **Health Weight** program combines metabolic testing, GLP-1 medical weight loss when appropriate, nutrition coaching and Belkyra for stubborn areas. Fully physician-supervised. [See the program](/services/health-weight) or [book a consult](/book).",
  },
  {
    keywords: ["book", "appointment", "schedule", "reserve"],
    answer:
      "Easy — head to the [Book Now page](/book): pick a location → service → clinician → date/time. You can also create an account to manage your bookings in your [dashboard](/dashboard).",
  },
  {
    keywords: ["location", "address", "where", "clinic", "directions"],
    answer:
      "Three BC locations:\n• **Victoria** — 740 Hillside Ave #120\n• **Langley** — 415-20178 96th Ave\n• **Kelowna** — 1708 Dolphin Ave #101\n\nAll open **Mon–Fri 9am–5pm**. [Locations & directions](/about-us).",
  },
  {
    keywords: ["hours", "open", "closed", "time"],
    answer:
      "All three clinics are open **Monday to Friday, 9am–5pm**. Weekend consultations are available on request — mention it when you [book](/book).",
  },
  {
    keywords: ["price", "cost", "how much", "fee", "expensive"],
    answer:
      "Pricing varies by treatment and plan. Consultations start at $150 and are credited toward your first treatment. I can't give exact quotes in chat, but our team will send a full estimate after your consult. [Book a free call](/book).",
  },
  {
    keywords: ["insurance", "coverage", "extended health"],
    answer:
      "Many of our services are eligible for **extended health / insurance reimbursement** (hormones, IV therapy, medical weight management). We provide itemized receipts. Confirm with your provider first.",
  },
  {
    keywords: ["team", "doctor", "physician", "nurse", "staff"],
    answer:
      "Our clinical team includes MDs, NPs, RNs, and clinical managers across all three locations. [Meet the team](/our-team).",
  },
  {
    keywords: ["faq", "question"],
    answer:
      "Our [FAQ page](/faqs) covers consultations, pricing structure, what to expect, and safety. Anything specific I can help with here?",
  },
  {
    keywords: ["blog", "article", "read"],
    answer:
      "We write deeply-researched long-form pieces on longevity, GLP-1, gut health and preventative medicine. [Browse the blog](/blog).",
  },
  {
    keywords: ["contact", "phone", "email", "call"],
    answer:
      "Reach us via our [Contact page](/contact) — we reply within one business day. For urgent appointment questions, book online directly at [/book](/book).",
  },
  {
    keywords: ["shop", "bundle", "supplement", "product"],
    answer:
      "Our curated at-home bundles (Energy Boost, Skin Renewal, Hormone Support) are on our [Shop page](/shop) via a secure Square storefront.",
  },
  {
    keywords: ["safe", "risk", "side effect"],
    answer:
      "Every Ageless Living treatment is physician-supervised with full medical intake, bloodwork where needed, and ongoing monitoring. We'll walk you through every risk/benefit in your consultation.",
  },
  {
    keywords: ["about", "who", "philosophy", "story"],
    answer:
      "Ageless Living has been serving BC for 10+ years. Our philosophy: **live better, longer** — blending aesthetic medicine, hormone optimization, biohacking and weight health under one roof. [About us](/about-us).",
  },
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of knowledgeBase) {
    if (entry.keywords.some((k) => lower.includes(k))) return entry.answer;
  }
  return "Great question! I don't have a canned answer for that — our team will. You can [book a free 15-min call](/book) or ask via our [Contact page](/contact). Meanwhile, I'm happy to cover treatments, booking, pricing, locations or hours.";
}

function renderMarkup(content: string) {
  return content
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="underline decoration-clinic-teal/40 underline-offset-2 font-medium hover:decoration-clinic-teal">$1</a>',
    )
    .replace(/\n/g, "<br/>");
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I'm the Ageless Living concierge. Ask me anything — treatments, booking, pricing, hours, locations or which service might suit you best.",
    },
  ]);
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: getResponse(trimmed) }]);
    }, 400);
  };

  const handleLinkClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "A") {
      const href = target.getAttribute("href");
      if (href && href.startsWith("/")) {
        e.preventDefault();
        setOpen(false);
        navigate(href);
      }
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 left-5 md:bottom-6 md:left-6 z-50 flex items-center gap-2 h-14 pl-4 pr-5 rounded-full bg-clinic-teal text-white shadow-xl shadow-clinic-teal/30 hover:shadow-clinic-teal/40 transition-shadow duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-teal focus-visible:ring-offset-2"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close Ageless AI concierge" : "Open Ageless AI concierge"}
        aria-expanded={open}
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <>
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-semibold hidden sm:inline">Ask Ageless AI</span>
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease }}
            role="dialog"
            aria-modal="false"
            aria-label="Ageless Living AI concierge"
            className="fixed bottom-24 left-4 right-4 md:right-auto md:left-6 z-50 w-auto md:w-[380px] max-w-[calc(100vw-2rem)] bg-card rounded-2xl shadow-2xl border border-border/60 overflow-hidden flex flex-col"
            style={{ maxHeight: "min(560px, calc(100dvh - 7rem))" }}
          >
            <div className="px-5 py-4 bg-clinic-teal text-white flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">Ageless AI Concierge</p>
                <p className="text-[11px] text-white/80">Treatments · Booking · FAQs</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              ref={scrollRef}
              onClick={handleLinkClick}
              className="flex-1 overflow-y-auto p-4 space-y-3"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : ""}`}>
                  {m.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-clinic-teal-light flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="h-3.5 w-3.5 text-clinic-teal" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-clinic-teal text-white rounded-br-md"
                        : "bg-secondary text-foreground rounded-bl-md"
                    }`}
                    dangerouslySetInnerHTML={{ __html: renderMarkup(m.content) }}
                  />
                  {m.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <User className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground hover:bg-clinic-teal hover:text-white border border-border/60 transition-colors duration-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="px-4 py-3 border-t border-border flex gap-2 shrink-0"
            >
              <label htmlFor="chatbot-input" className="sr-only">
                Type your question
              </label>
              <input
                id="chatbot-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about treatments, booking, pricing…"
                autoComplete="off"
                maxLength={240}
                className="flex-1 px-4 py-2.5 rounded-xl bg-secondary text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-clinic-teal/30"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-clinic-teal text-white flex items-center justify-center active:scale-95 transition-transform disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
