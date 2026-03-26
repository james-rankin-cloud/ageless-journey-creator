import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import skinImg from "@/assets/treatment-skin.jpg";
import hormoneImg from "@/assets/treatment-hormone.jpg";
import biohackingImg from "@/assets/treatment-biohacking.jpg";
import weightImg from "@/assets/treatment-weight.jpg";
import clinicImg from "@/assets/hero-clinic.jpg";
import maskImg from "@/assets/mask-product-1.jpeg";

const posts = [
  {
    title: "What to Expect During Your First HydraFacial",
    category: "Skin Care",
    date: "March 15, 2026",
    excerpt: "A step-by-step guide to the HydraFacial experience — from cleansing to extraction to hydration — and why it's our most requested treatment.",
    img: skinImg,
  },
  {
    title: "Hormone Balancing: Signs You Might Need Testing",
    category: "Hormones",
    date: "March 8, 2026",
    excerpt: "Fatigue, mood swings, weight changes — these could be signs of a hormonal imbalance. Learn when it's time to get tested.",
    img: hormoneImg,
  },
  {
    title: "Red Light Therapy: The Science Behind the Glow",
    category: "Biohacking",
    date: "February 28, 2026",
    excerpt: "How photobiomodulation stimulates collagen production, reduces inflammation, and accelerates healing at the cellular level.",
    img: biohackingImg,
  },
  {
    title: "GLP-1 Medications: What You Need to Know",
    category: "Weight Management",
    date: "February 20, 2026",
    excerpt: "Semaglutide and other GLP-1 receptor agonists are changing the weight management landscape. Here's how they work.",
    img: weightImg,
  },
  {
    title: "Inside Our Kelowna Biohacking Lounge",
    category: "Clinic News",
    date: "February 12, 2026",
    excerpt: "A tour of our newest biohacking space — from hyperbaric chambers to infrared saunas — designed for peak recovery.",
    img: clinicImg,
  },
  {
    title: "Building a Medical-Grade Skincare Routine at Home",
    category: "Skin Care",
    date: "February 5, 2026",
    excerpt: "Our aestheticians share the products and protocols they recommend for maintaining your results between clinic visits.",
    img: maskImg,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | Ageless Living™ — Wellness Insights & Tips</title>
        <meta name="description" content="Expert insights on skin care, hormone health, biohacking, and wellness from the Ageless Living clinical team." />
      </Helmet>

      <section className="pt-36 pb-10 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl"
          >
            <p className="label-sm mb-4">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-[1.08]">
              Insights & articles
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Expert guidance, treatment deep-dives, and wellness tips from our clinical team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-muted-foreground transition-colors">{post.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:gap-3 transition-all duration-200">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
