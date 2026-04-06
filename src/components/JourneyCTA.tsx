import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  FlaskConical,
  Zap,
  Scale,
  Bot,
  Send,
  RotateCcw,
  CalendarCheck,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Service recommendation data ─── */
type ServiceKey = "skin" | "hormone" | "biohacking" | "weight";

const services: Record<
  ServiceKey,
  { icon: typeof Sparkles; label: string; color: string; desc: string; href: string }
> = {
  skin: {
    icon: Sparkles,
    label: "Skin Rejuvenation",
    color: "bg-rose-50 text-rose-600 border-rose-200",
    desc: "Botox, fillers, laser, microneedling & more — tailored for your skin.",
    href: "/services#skin-rejuvenation",
  },
  hormone: {
    icon: FlaskConical,
    label: "Hormone Balancing",
    color: "bg-violet-50 text-violet-600 border-violet-200",
    desc: "Bioidentical hormones to restore energy, mood & vitality.",
    href: "/services#hormone-balancing",
  },
  biohacking: {
    icon: Zap,
    label: "Biohacking",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    desc: "NAD+, IV therapy, red light & regenerative protocols.",
    href: "/services#biohacking",
  },
  weight: {
    icon: Scale,
    label: "Health Weight",
    color: "bg-amber-50 text-amber-600 border-amber-200",
    desc: "Physician-supervised, holistic weight management.",
    href: "/services#health-weight",
  },
};

/* ─── Conversational flow ─── */
type StepId = "welcome" | "goal" | "concern" | "age" | "result";

interface Step {
  id: StepId;
  botMessage: string | ((state: JourneyState) => string);
  options?: { label: string; value: string }[];
  freeInput?: boolean;
  next: (value: string, state: JourneyState) => StepId;
}

interface JourneyState {
  goal: string;
  concern: string;
  age: string;
}

function getRecommendations(state: JourneyState): ServiceKey[] {
  const recs = new Set<ServiceKey>();

  // Goal-based
  const goal = state.goal.toLowerCase();
  if (goal.includes("younger") || goal.includes("glow") || goal.includes("skin")) recs.add("skin");
  if (goal.includes("energy") || goal.includes("balance") || goal.includes("vitality")) recs.add("hormone");
  if (goal.includes("performance") || goal.includes("sharp") || goal.includes("peak")) recs.add("biohacking");
  if (goal.includes("weight") || goal.includes("body") || goal.includes("shape")) recs.add("weight");

  // Concern-based
  const concern = state.concern.toLowerCase();
  if (concern.includes("wrinkle") || concern.includes("aging") || concern.includes("skin") || concern.includes("lines") || concern.includes("complexion")) recs.add("skin");
  if (concern.includes("fatigue") || concern.includes("tired") || concern.includes("mood") || concern.includes("sleep") || concern.includes("hormone") || concern.includes("libido") || concern.includes("menopaus")) recs.add("hormone");
  if (concern.includes("fog") || concern.includes("focus") || concern.includes("recovery") || concern.includes("stamina") || concern.includes("inflammation")) recs.add("biohacking");
  if (concern.includes("weight") || concern.includes("metabol") || concern.includes("appetite") || concern.includes("body")) recs.add("weight");

  // Age-influenced boosts
  const age = state.age.toLowerCase();
  if (age.includes("40") || age.includes("50") || age.includes("60") || age.includes("mature")) {
    recs.add("hormone");
    if (recs.size < 2) recs.add("biohacking");
  }
  if (age.includes("20") || age.includes("30") || age.includes("young")) {
    if (recs.size === 0) recs.add("skin");
  }

  // Default if nothing matched
  if (recs.size === 0) {
    recs.add("skin");
    recs.add("hormone");
  }

  return Array.from(recs);
}

const steps: Step[] = [
  {
    id: "welcome",
    botMessage:
      "Hi there! I'm your Ageless Living journey guide. I'll ask you a few quick questions to build your personalized wellness plan. Ready? Let's start!",
    options: [
      { label: "Let's do it!", value: "start" },
      { label: "Tell me more first", value: "more" },
    ],
    next: (val) => (val === "more" ? "welcome" : "goal"),
  },
  {
    id: "goal",
    botMessage: "What's your primary wellness goal right now?",
    options: [
      { label: "Look younger & glow", value: "younger and glow" },
      { label: "More energy & balance", value: "energy and balance" },
      { label: "Peak performance", value: "performance and sharp" },
      { label: "Manage my weight", value: "weight and body shape" },
      { label: "All of the above!", value: "younger energy performance weight" },
    ],
    next: () => "concern",
  },
  {
    id: "concern",
    botMessage: "What's been bothering you most lately? You can pick one or type your own.",
    options: [
      { label: "Wrinkles & fine lines", value: "wrinkles and fine lines" },
      { label: "Fatigue & low mood", value: "fatigue and tired mood" },
      { label: "Brain fog & focus", value: "brain fog and focus" },
      { label: "Stubborn weight", value: "stubborn weight and metabolism" },
      { label: "Hormonal changes", value: "hormone and menopause changes" },
    ],
    freeInput: true,
    next: () => "age",
  },
  {
    id: "age",
    botMessage: "Last one — what age range are you in? This helps us tailor treatment intensity.",
    options: [
      { label: "20s–30s", value: "20s-30s young" },
      { label: "40s", value: "40s" },
      { label: "50s", value: "50s mature" },
      { label: "60+", value: "60s mature" },
      { label: "Prefer not to say", value: "any" },
    ],
    next: () => "result",
  },
  {
    id: "result",
    botMessage: (state) => {
      const recs = getRecommendations(state);
      const names = recs.map((r) => services[r].label);
      if (names.length === 1) {
        return `Based on what you've told me, I'd recommend starting with **${names[0]}**. Here's your personalized journey:`;
      }
      return `Great news — I've built your personalized plan! Based on your goals, I recommend **${names.slice(0, -1).join(", ")}** and **${names[names.length - 1]}**. Here's your journey:`;
    },
    next: () => "result",
  },
];

type ChatMessage = {
  id: number;
  role: "bot" | "user";
  content: string;
};

export default function JourneyCTA() {
  const [currentStep, setCurrentStep] = useState(0);
  const [journeyState, setJourneyState] = useState<JourneyState>({
    goal: "",
    concern: "",
    age: "",
  });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [freeText, setFreeText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [msgCounter, setMsgCounter] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  const nextId = () => {
    setMsgCounter((c) => c + 1);
    return msgCounter + 1;
  };

  // Initialize first bot message
  useEffect(() => {
    const step = steps[0];
    const msg = typeof step.botMessage === "string" ? step.botMessage : step.botMessage(journeyState);
    setMessages([{ id: 0, role: "bot", content: msg }]);
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, showResults]);

  const handleSelect = (value: string, displayLabel: string) => {
    const step = steps[currentStep];
    const userMsgId = nextId();

    // Update state based on step
    const newState = { ...journeyState };
    if (step.id === "goal") newState.goal = value;
    if (step.id === "concern") newState.concern = value;
    if (step.id === "age") newState.age = value;
    setJourneyState(newState);

    // Add user message
    const newMessages: ChatMessage[] = [
      ...messages,
      { id: userMsgId, role: "user", content: displayLabel },
    ];
    setMessages(newMessages);

    // If "tell me more" on welcome
    if (step.id === "welcome" && value === "more") {
      const moreId = nextId();
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: moreId,
            role: "bot",
            content:
              "Ageless Living is a wellness clinic with 3 locations across BC. We specialize in Skin Rejuvenation, Hormone Balancing, Biohacking, and Health Weight programs — all physician-supervised. Let me help you figure out which services are right for you!",
          },
        ]);
        // Re-show welcome options after a beat
        setTimeout(() => {
          const readyId = nextId();
          setMessages((prev) => [
            ...prev,
            { id: readyId, role: "bot", content: "Ready to build your personalized journey?" },
          ]);
        }, 800);
      }, 500);
      return;
    }

    // Move to next step
    const nextStepId = step.next(value, newState);
    const nextStepIndex = steps.findIndex((s) => s.id === nextStepId);

    if (nextStepId === "result") {
      // Show result
      setTimeout(() => {
        const resultStep = steps.find((s) => s.id === "result")!;
        const botMsg =
          typeof resultStep.botMessage === "string"
            ? resultStep.botMessage
            : resultStep.botMessage(newState);
        const botId = nextId();
        setMessages((prev) => [...prev, { id: botId, role: "bot", content: botMsg }]);
        setShowResults(true);
        setCurrentStep(nextStepIndex);
      }, 600);
    } else {
      setTimeout(() => {
        const nextStep = steps[nextStepIndex];
        const botMsg =
          typeof nextStep.botMessage === "string"
            ? nextStep.botMessage
            : nextStep.botMessage(newState);
        const botId = nextId();
        setMessages((prev) => [...prev, { id: botId, role: "bot", content: botMsg }]);
        setCurrentStep(nextStepIndex);
      }, 600);
    }

    setFreeText("");
  };

  const handleFreeSubmit = () => {
    if (!freeText.trim()) return;
    handleSelect(freeText.trim(), freeText.trim());
  };

  const handleReset = () => {
    setCurrentStep(0);
    setJourneyState({ goal: "", concern: "", age: "" });
    setShowResults(false);
    setFreeText("");
    setMsgCounter(0);
    const step = steps[0];
    const msg = typeof step.botMessage === "string" ? step.botMessage : step.botMessage({ goal: "", concern: "", age: "" });
    setMessages([{ id: 0, role: "bot", content: msg }]);
  };

  const recommendations = showResults ? getRecommendations(journeyState) : [];
  const step = steps[currentStep];
  const isResultStep = step.id === "result";

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <p className="eyebrow mb-3 md:mb-4">
            <span className="hairline pb-2 text-xs md:text-sm">Personalized For You</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-4 md:mb-5 leading-[1.08]">
            Help Me Create My{" "}
            <span className="text-clinic-teal">Ageless Living</span> Journey
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Answer a few quick questions and our AI journey guide will build a
            personalized wellness plan just for you.
          </p>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-border/40 overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center gap-3 px-5 py-4 md:px-6 md:py-5 bg-clinic-teal text-white">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Bot className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm md:text-base">Ageless Journey Guide</p>
                <p className="text-[10px] md:text-xs text-white/70">
                  Personalized wellness recommendations
                </p>
              </div>
              {messages.length > 1 && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-[10px] md:text-xs uppercase tracking-wider font-semibold text-white/70 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span className="hidden sm:inline">Restart</span>
                </button>
              )}
            </div>

            {/* Chat Messages */}
            <div
              ref={chatRef}
              className="p-4 md:p-6 space-y-4 max-h-[360px] md:max-h-[420px] overflow-y-auto scrollbar-none"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : ""}`}
                  >
                    {msg.role === "bot" && (
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-clinic-teal-light flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 md:w-4 md:h-4 text-clinic-teal" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] px-4 py-2.5 md:py-3 text-sm md:text-base leading-relaxed ${
                        msg.role === "user"
                          ? "bg-clinic-teal text-white rounded-2xl rounded-br-md"
                          : "bg-secondary/80 text-foreground rounded-2xl rounded-bl-md"
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: msg.content.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="font-semibold">$1</strong>'
                        ),
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Results cards */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease }}
                  className="space-y-3 pt-2"
                >
                  {recommendations.map((key, i) => {
                    const svc = services[key];
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease }}
                      >
                        <Link
                          to={svc.href}
                          className={`flex items-center gap-3 p-3 md:p-4 rounded-xl border ${svc.color} hover:shadow-md transition-all group`}
                        >
                          <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/80 flex items-center justify-center shrink-0">
                            <svc.icon className="w-4 h-4 md:w-5 md:h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm md:text-base font-semibold text-foreground">
                              {svc.label}
                            </p>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                              {svc.desc}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform shrink-0" />
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Book CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5, ease }}
                    className="pt-2 flex flex-col sm:flex-row gap-2.5"
                  >
                    <Link
                      to="/book"
                      className="group inline-flex items-center justify-center gap-2 bg-clinic-teal hover:bg-clinic-teal-container text-white px-5 md:px-6 py-3 md:py-3.5 rounded-full font-semibold text-xs md:text-sm uppercase tracking-widest transition-all flex-1"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      Book My Consultation
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-3.5 rounded-full border-2 border-foreground/15 text-foreground text-xs md:text-sm font-semibold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Start Over
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Options / Input Area */}
            {!isResultStep && (
              <div className="px-4 pb-4 md:px-6 md:pb-6 space-y-3">
                {/* Option buttons */}
                {step.options && (
                  <div className="flex flex-wrap gap-2">
                    {step.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleSelect(opt.value, opt.label)}
                        className="px-3.5 py-2 md:px-4 md:py-2.5 rounded-full bg-secondary hover:bg-clinic-teal hover:text-white text-foreground text-xs md:text-sm font-medium transition-all duration-200 border border-border/40 hover:border-clinic-teal"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Free text input */}
                {step.freeInput && (
                  <div className="flex gap-2 pt-1">
                    <input
                      value={freeText}
                      onChange={(e) => setFreeText(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleFreeSubmit()}
                      placeholder="Or type your own…"
                      className="flex-1 px-4 py-2.5 md:py-3 rounded-xl bg-secondary text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-clinic-teal/30 border border-border/40"
                    />
                    <button
                      onClick={handleFreeSubmit}
                      className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-clinic-teal text-white flex items-center justify-center active:scale-95 transition-transform shrink-0"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
