import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Message = { role: "user" | "assistant"; content: string };

const quickReplies = [
  "What treatments help with fatigue?",
  "How do I book hormone testing?",
  "What locations are open?",
];

const autoResponses: Record<string, string> = {
  fatigue: "Great question! Our **Biohacking** program with IV NAD+ and our **Hormone Balancing** assessment are both excellent for fighting fatigue. Many clients see improvements within their first few sessions. Would you like to [book a consultation](/book)?",
  hormone: "We offer comprehensive hormone testing at all three locations. The process starts with a blood panel, followed by a personalized bio-identical hormone restoration plan. [Book your assessment here](/book)!",
  energy: "For better energy, I'd recommend starting with our **Biohacking** program — IV therapy, NAD+, and peptide protocols designed to optimize your cellular performance. [Schedule a consultation](/book) to get started!",
  weight: "Our **Health Weight** program combines metabolic testing, nutrition science, and ongoing clinician support. It's medically supervised for lasting results. [Learn more & book](/book).",
  location: "We have three locations across BC:\n\n• **Langley** — 20689 Fraser Hwy\n• **Victoria** — 740 Hillside Ave #120\n• **Kelowna** — 1708 Dolphin Ave #101\n\nAll open Mon–Fri, 9am–5pm!",
  book: "You can book directly on our [Book Now](/book) page! Select your location, choose your services, pick a clinician, and confirm your appointment.",
  skin: "Our **Skin Rejuvenation** treatments include laser therapy, medical-grade skincare protocols, and aesthetic treatments tailored to your skin type. [Book a skin consultation](/book)!",
  bundle: "We have at-home bundles that match our in-clinic services! Check out our [Shop page](/shop) for Energy Boost, Skin Renewal, and Hormone Support bundles — all available on our secure Square store.",
  product: "We only endorse products we trust in clinic. Visit our [Shop page](/shop) to browse our curated collections on Square.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, val] of Object.entries(autoResponses)) {
    if (lower.includes(key)) return val;
  }
  return "Thanks for reaching out! I'd love to help. For detailed questions about treatments or booking, I recommend speaking with our team directly. You can [book a consultation](/book) or call any of our locations. Is there anything specific I can help with?";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! 👋 I'm your Ageless Living™ AI assistant. Ask me about treatments, booking, bundles, or our locations — I'm here to help you start your wellness journey!" },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: getResponse(text) }]);
    }, 600);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 flex items-center justify-center hover:shadow-primary/40 transition-shadow duration-200 active:scale-95"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Ask Ageless AI"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
            style={{ height: 480 }}
          >
            <div className="px-5 py-4 bg-primary text-primary-foreground flex items-center gap-3">
              <Bot className="h-5 w-5" />
              <div>
                <p className="font-semibold text-sm">Ask Ageless AI</p>
                <p className="text-xs opacity-80">Treatments • Booking • FAQs</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3" onClick={handleLinkClick}>
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : ""}`}>
                  {m.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="h-3.5 w-3.5 text-accent-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-foreground rounded-bl-md"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: m.content
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="underline font-medium">$1</a>')
                        .replace(/\n/g, "<br/>"),
                    }}
                  />
                  {m.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    className="text-xs px-3 py-1.5 rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className="px-4 py-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask anything…"
                className="flex-1 px-4 py-2.5 rounded-xl bg-secondary text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={() => send(input)}
                className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center active:scale-95 transition-transform"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
