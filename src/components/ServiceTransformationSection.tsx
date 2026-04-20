import { motion } from "framer-motion";
import TransformationAvatar, {
  type AvatarVariant,
} from "@/components/TransformationAvatar";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SERVICE_BEFORE_AFTER } from "@/lib/placeholders";

/**
 *  <ServiceTransformationSection />
 *  ------------------------------------------------------------------
 *  A single drop-in section that pairs a specialised
 *  <TransformationAvatar /> with a real before / after slider.
 *  Every service page mounts this component just above
 *  <ServiceCTA /> to showcase client results.
 *
 *  To change the photos shown on a specific service page, edit
 *  `SERVICE_BEFORE_AFTER` in `src/lib/placeholders.ts` — no code
 *  changes required here.
 */

const ease = [0.16, 1, 0.3, 1] as const;

type Props = {
  /** Avatar variant — drives annotations, metrics, copy */
  variant: AvatarVariant;
  /** Must match a key in SERVICE_BEFORE_AFTER (see placeholders.ts) */
  serviceSlug: string;
  /** Headline above the section */
  title?: string;
  eyebrow?: string;
  subtitle?: string;
};

export default function ServiceTransformationSection({
  variant,
  serviceSlug,
  title = "Real Results, Real Clients",
  eyebrow = "Client Transformations",
  subtitle = "Drag the handle to see the difference our clinical team makes. Every photo is a real client, shared with permission.",
}: Props) {
  const photos = SERVICE_BEFORE_AFTER[serviceSlug] ?? {
    before: SERVICE_BEFORE_AFTER.botox.before,
    after: SERVICE_BEFORE_AFTER.botox.after,
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-clinic-teal-light/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <p className="eyebrow mb-3 md:mb-4">
            <span className="hairline pb-2 text-xs md:text-sm">{eyebrow}</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 md:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <BeforeAfterSlider
              before={photos.before}
              after={photos.after}
              alt={`${serviceSlug.replace(/-/g, " ")} treatment result`}
              aspect="4/3"
            />
            <p className="mt-3 text-xs text-muted-foreground italic">
              Drag the slider · results vary per client.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <TransformationAvatar variant={variant} compact />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
