import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Dumbbell,
  Flame,
  HeartPulse,
  Sparkles,
  Trophy,
  Activity,
  Droplets,
  Shield,
  Zap,
} from "lucide-react";
import {
  savePerformanceLead,
  type PerformancePackageId,
} from "@/lib/performanceLeads";

const ease = [0.16, 1, 0.3, 1] as const;

const schema = z.object({
  fullName: z.string().min(2, "Please share your full name."),
  email: z.string().email("Please enter a valid email."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .regex(/^[+()\-\s\d]{7,}$/, "Only digits, spaces and +()- are allowed."),
  package: z.enum(["mens", "womens", "unsure"], {
    errorMap: () => ({ message: "Choose the package you're interested in." }),
  }),
  notes: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

type PackageDetail = {
  id: PerformancePackageId;
  label: string;
  title: string;
  eyebrow: string;
  blurb: string;
  highlights: { icon: typeof Dumbbell; label: string }[];
  ribbon: string;
};

const packages: PackageDetail[] = [
  {
    id: "mens",
    label: "Men's Performance Package",
    title: "Forged for Stage-Day Power",
    eyebrow: "Built for Competitors",
    blurb:
      "A protocol engineered for bodybuilders, classic-physique and men's-physique competitors — every system, tuned for peak week and the days after.",
    ribbon: "BC Cup Ready",
    highlights: [
      { icon: HeartPulse, label: "Hormone & testosterone optimization panel" },
      { icon: Droplets, label: "IV hydration · NAD+ · recovery cocktails" },
      { icon: Activity, label: "Red-light therapy & PEMF for muscle recovery" },
      { icon: Flame, label: "Metabolic conditioning & body-comp tracking" },
      { icon: Sparkles, label: "Stage-prep skin priming & light Botox refinement" },
      { icon: Shield, label: "Post-show endocrine reset & sleep recovery" },
    ],
  },
  {
    id: "womens",
    label: "Women's Performance Package",
    title: "Sculpted for Stage Confidence",
    eyebrow: "Built for Competitors",
    blurb:
      "A complete pre-show and recovery protocol for bikini, wellness, figure and women's-physique athletes — physiological optimization meets stage-day polish.",
    ribbon: "Bikini · Wellness · Figure",
    highlights: [
      { icon: HeartPulse, label: "Female-specific hormone & thyroid panel" },
      { icon: Droplets, label: "IV hydration & glutathione skin-glow drips" },
      { icon: Activity, label: "Lymphatic drainage & infrared recovery" },
      { icon: Flame, label: "Metabolic optimization & GLP-1 support (when indicated)" },
      { icon: Sparkles, label: "Stage skin: peel · microneedling · dermaplaning" },
      { icon: Zap, label: "Post-show energy + cycle re-balancing" },
    ],
  },
];

const stats = [
  { k: "BC Cup", v: "Official partner-ready" },
  { k: "6–12 wk", v: "Pre-show protocols" },
  { k: "1:1", v: "Physician-led" },
  { k: "3", v: "BC locations" },
];

export default function PerformancePackagesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<PerformancePackageId | null>(
    null
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", email: "", phone: "", notes: "" },
  });

  const selectedPackage = watch("package");

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    const result = await savePerformanceLead(values);
    if (!result.success) {
      setServerError(result.error ?? "Could not submit. Please try again.");
      return;
    }
    reset();
    setSubmitted(true);
  };

  const selectPackage = (id: PerformancePackageId) => {
    setActiveCard(id);
    setValue("package", id, { shouldValidate: true });
    requestAnimationFrame(() => {
      document
        .getElementById("interest")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Performance Packages | Ageless Living™ — Stage-Day Protocols for
          Athletes
        </title>
        <meta
          name="description"
          content="Physician-led performance protocols for bodybuilders and fitness competitors. Hormone optimization, IV recovery, stage-prep skin & metabolic conditioning — built for the BC Cup and beyond."
        />
      </Helmet>

      {/* The athletic landing page runs on its own dark canvas. */}
      <div className="bg-neutral-950 text-neutral-100">
        {/* Minimal top bar — keeps the page distraction-free but lets
            QR-scan visitors find their way back to the main brand site. */}
        <div className="fixed top-0 left-0 right-0 z-40 bg-neutral-950/70 backdrop-blur-md border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Ageless Living™
            </Link>
            <a
              href="#interest"
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-neutral-950 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-amber-100 transition-colors"
            >
              Express interest
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
          {/* Background lighting */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(248,113,113,0.15),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]"
          />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] font-semibold text-neutral-300 backdrop-blur">
                <Trophy className="h-3 w-3 text-amber-300" />
                Stage-Day Protocols · BC Cup Ready
              </div>

              <h1
                className="font-display font-medium tracking-tight leading-[1.02]"
                style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
              >
                <span className="text-white">Train hard.</span>
                <br />
                <span className="text-white/70">Recover </span>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-amber-200">
                  smarter.
                </span>
              </h1>

              <p className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-neutral-300">
                Where elite athletic performance meets clinical-grade
                longevity. Built for bodybuilders, physique athletes and
                competitors — from peak-week conditioning to post-show
                recovery, under physician supervision.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href="#packages"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-neutral-950 font-semibold text-sm uppercase tracking-[0.18em] hover:bg-amber-100 transition-colors"
                >
                  View packages
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#interest"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/25 text-white font-semibold text-sm uppercase tracking-[0.18em] hover:bg-white/10 transition-colors backdrop-blur"
                >
                  Express interest
                </a>
              </div>
            </motion.div>

            {/* Stat strip */}
            <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="bg-neutral-950 p-6 md:p-8 text-center"
                >
                  <p className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-white">
                    {s.k}
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    {s.v}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACKAGES ───────────────────────────────────────────────── */}
        <section
          id="packages"
          className="relative py-20 md:py-28 lg:py-32 border-t border-white/5"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="max-w-2xl mb-14"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-amber-200/80 font-semibold mb-3">
                Choose Your Protocol
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
                Two packages.
                <br />
                <span className="italic text-neutral-400">
                  One uncompromising standard.
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {packages.map((p, i) => {
                const isActive = activeCard === p.id || selectedPackage === p.id;
                return (
                  <motion.article
                    key={p.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease }}
                    onMouseEnter={() => setActiveCard(p.id)}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                      isActive
                        ? "border-amber-200/40 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 shadow-[0_30px_80px_-20px_rgba(255,200,120,0.18)] -translate-y-1"
                        : "border-white/10 bg-neutral-900/60 hover:border-white/20"
                    }`}
                  >
                    {/* Image / banner placeholder */}
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <div
                        aria-hidden
                        className={`absolute inset-0 ${
                          p.id === "mens"
                            ? "bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.35),transparent_60%),linear-gradient(135deg,#0f172a,#020617)]"
                            : "bg-[radial-gradient(circle_at_70%_30%,rgba(244,114,182,0.32),transparent_60%),linear-gradient(135deg,#1f1023,#0a0a0a)]"
                        }`}
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:36px_36px]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Dumbbell
                          className={`h-24 w-24 transition-transform duration-700 group-hover:scale-110 ${
                            p.id === "mens" ? "text-sky-200/40" : "text-pink-200/40"
                          }`}
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent" />
                      <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200 border border-amber-200/30">
                        {p.ribbon}
                      </span>
                    </div>

                    <div className="p-7 md:p-9">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-amber-200/80 font-semibold mb-2">
                        {p.eyebrow}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl font-medium text-white tracking-tight mb-3">
                        {p.label}
                      </h3>
                      <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-7">
                        {p.blurb}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {p.highlights.map(({ icon: Icon, label }) => (
                          <li
                            key={label}
                            className="flex items-start gap-3 text-sm text-neutral-200"
                          >
                            <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 shrink-0">
                              <Icon className="h-3.5 w-3.5 text-amber-200" />
                            </span>
                            {label}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => selectPackage(p.id)}
                          className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-950 font-semibold text-xs uppercase tracking-[0.18em] hover:bg-amber-100 transition-colors"
                        >
                          Select package
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </button>
                        <a
                          href="#interest"
                          onClick={() => setActiveCard(p.id)}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white font-semibold text-xs uppercase tracking-[0.18em] hover:bg-white/5 transition-colors"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS BAND ───────────────────────────────────────────── */}
        <section className="relative py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  step: "01",
                  title: "Intake & Bloodwork",
                  body: "Comprehensive physiology + hormone panels and a sit-down with your physician.",
                },
                {
                  step: "02",
                  title: "Build Your Protocol",
                  body: "6–12 week training-aligned plan: recovery, nutrition, stage-skin prep, hormone tuning.",
                },
                {
                  step: "03",
                  title: "Peak Week → Stage",
                  body: "Daily check-ins, IV cocktails, and recovery touch-points all the way to call-out.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-white/10 bg-neutral-900/60 p-7"
                >
                  <p className="font-display text-3xl text-amber-200 mb-3">
                    {s.step}
                  </p>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {s.title}
                  </h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEREST FORM ──────────────────────────────────────────── */}
        <section
          id="interest"
          className="relative py-20 md:py-28 lg:py-32 border-t border-white/5"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.08),transparent_55%)]"
          />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-16">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="text-center mb-12"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-amber-200/80 font-semibold mb-3">
                  Express Interest
                </p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-4">
                  Reserve your competitor spot.
                </h2>
                <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto">
                  Spaces are limited per cycle. Drop your details and our
                  performance team will reach out within one business day.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="rounded-3xl border border-white/10 bg-neutral-900/80 backdrop-blur p-7 md:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="text-center py-6"
                    >
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-200 text-neutral-950 mb-4">
                        <Check className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-medium text-white mb-2">
                        You're in the queue.
                      </h3>
                      <p className="text-sm md:text-base text-neutral-400 max-w-md mx-auto">
                        Our performance team will reach out within one business
                        day to confirm your intake and build your protocol.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-xs uppercase tracking-[0.18em] text-amber-200/80 hover:text-amber-200 transition-colors underline underline-offset-4"
                      >
                        Submit another response
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field
                          label="Full Name"
                          error={errors.fullName?.message}
                        >
                          <input
                            type="text"
                            autoComplete="name"
                            placeholder="Jordan Athlete"
                            {...register("fullName")}
                            className={inputClasses(Boolean(errors.fullName))}
                          />
                        </Field>
                        <Field label="Email" error={errors.email?.message}>
                          <input
                            type="email"
                            autoComplete="email"
                            placeholder="you@email.com"
                            {...register("email")}
                            className={inputClasses(Boolean(errors.email))}
                          />
                        </Field>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field
                          label="Phone Number"
                          error={errors.phone?.message}
                        >
                          <input
                            type="tel"
                            autoComplete="tel"
                            placeholder="+1 (___) ___-____"
                            {...register("phone")}
                            className={inputClasses(Boolean(errors.phone))}
                          />
                        </Field>
                        <Field
                          label="Package"
                          error={errors.package?.message}
                        >
                          <select
                            {...register("package")}
                            defaultValue=""
                            className={inputClasses(Boolean(errors.package))}
                          >
                            <option value="" disabled>
                              Choose a package…
                            </option>
                            <option value="mens">
                              Men's Performance Package
                            </option>
                            <option value="womens">
                              Women's Performance Package
                            </option>
                            <option value="unsure">
                              Not sure yet — recommend one
                            </option>
                          </select>
                        </Field>
                      </div>

                      <Field
                        label="Goals & competition details (optional)"
                        error={errors.notes?.message}
                      >
                        <textarea
                          rows={3}
                          placeholder="e.g. competing at BC Cup in 14 weeks, classic physique, history of low T."
                          {...register("notes")}
                          className={`${inputClasses(false)} resize-none`}
                        />
                      </Field>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-neutral-950 font-semibold text-xs md:text-sm uppercase tracking-[0.18em] hover:bg-amber-100 transition-colors disabled:opacity-60 disabled:cursor-progress"
                      >
                        {isSubmitting ? (
                          <>
                            <span
                              aria-hidden
                              className="inline-block h-4 w-4 rounded-full border-2 border-neutral-950/30 border-t-neutral-950 animate-spin"
                            />
                            Submitting…
                          </>
                        ) : (
                          <>
                            Submit interest
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </>
                        )}
                      </button>

                      {serverError && (
                        <p className="text-sm text-red-400">{serverError}</p>
                      )}

                      <p className="text-[11px] text-neutral-500">
                        By submitting you consent to be contacted about your
                        performance protocol. We never share your details.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block mb-2 text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-semibold">
        {label}
      </span>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </label>
  );
}

function inputClasses(hasError: boolean): string {
  return `w-full px-4 py-3.5 rounded-xl bg-neutral-950 border ${
    hasError ? "border-red-500/60" : "border-white/10"
  } text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/10 transition-colors`;
}
