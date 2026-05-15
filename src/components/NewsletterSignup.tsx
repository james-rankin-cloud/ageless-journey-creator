import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { saveSubscriber } from "@/lib/subscribers";

const schema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Please enter a valid email."),
});

type FormValues = z.infer<typeof schema>;

const ease = [0.16, 1, 0.3, 1] as const;

export default function NewsletterSignup() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    const result = await saveSubscriber({ ...values, source: "newsletter" });
    if (!result.success) {
      setServerError(result.error ?? "Could not subscribe. Please try again.");
      return;
    }
    reset();
    setSubmitted(true);
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-secondary/40 border-y border-border/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-clinic-teal/10 text-clinic-teal px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold">
            <Sparkles className="h-3 w-3" /> Members Only Offer
          </div>
          <h2
            id="newsletter-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight leading-[1.1] mb-4"
          >
            Receive <span className="italic text-clinic-teal">15% off</span> your first facial.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Sign up today and receive 15% off your first facial, plus exclusive
            access to clinic promos, education, and offers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mx-auto max-w-xl mt-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease }}
                className="rounded-2xl border border-clinic-teal/30 bg-card p-6 text-center"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-clinic-teal text-white mb-3">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  You're on the list.
                </h3>
                <p className="text-sm text-muted-foreground">
                  Check your inbox — your 15% off code is on its way.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="newsletter-name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="newsletter-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      {...register("name")}
                      className="w-full px-5 py-3.5 rounded-full border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/15 transition-shadow"
                      aria-invalid={Boolean(errors.name) || undefined}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500 px-2">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@email.com"
                      {...register("email")}
                      className="w-full px-5 py-3.5 rounded-full border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/15 transition-shadow"
                      aria-invalid={Boolean(errors.email) || undefined}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500 px-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-clinic-teal text-white font-semibold text-xs md:text-sm uppercase tracking-[0.18em] hover:bg-clinic-teal-container transition-colors disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Claim 15% off"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                {serverError && (
                  <p className="text-xs text-red-500 text-center">{serverError}</p>
                )}

                <p className="text-center text-[11px] text-muted-foreground">
                  We respect your inbox. Unsubscribe anytime.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
