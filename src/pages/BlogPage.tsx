import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import blog1Img from "@/assets/blog1.png";
import blog2Img from "@/assets/blog2.png";
import blog3Img from "@/assets/blog3.png";
import blog4Img from "@/assets/blog4.jpg";
import blog5Img from "@/assets/blog5.jpg";
import blog6Img from "@/assets/blog6.jpg";
import blog7Img from "@/assets/blog7.jpg";
import blog8Img from "@/assets/blog8.jpg";

const posts = [
  {
    title: "Understanding GLP-1 Agonists: The Science Behind Medical Weight Loss & Metabolic Health",
    category: "Medical Weight Loss",
    date: "January 6, 2026",
    excerpt: "For decades, the prevailing advice for weight loss has been simple: 'Eat less, move more.' Yet, for millions of people, this equation simply does not work. Discover the science behind GLP-1 agonists and how they're changing the landscape of longevity medicine.",
    img: blog1Img,
    link: "/blog/glp1-agonists",
  },
  {
    title: "A wellness revolution",
    category: "Longevity Medicine",
    date: "December 9, 2024",
    excerpt: "In a world where the quest for eternal vitality is often viewed as a lofty ideal, two dedicated doctors in Kelowna are rewriting the script on aging and wellness. Story by Boulevard Magazine, November 2024.",
    img: blog2Img,
    link: "/blog/wellness-revolution",
  },
  {
    title: "How Ageless Living wellness centres can help you live a healthier, longer life",
    category: "Preventative Medicine",
    date: "October 2, 2024",
    excerpt: "Michael Forbes is a seasoned entrepreneur with a successful track record in the medical industry. His mission: to help people live their best, healthiest lives through personalized, preventative care. Story by The Georgia Straight, September 2024.",
    img: blog3Img,
    link: "/blog/prevention-and-longevity",
  },
  {
    title: "Take Preventative Health Measures Now And Worry Less Later With Ageless Living",
    category: "Preventative Medicine",
    date: "February 29, 2024",
    excerpt: "When health care is not a viable option, look elsewhere for support with the wellness center Ageless Living™. Become your best self now to better prepare yourself for the future to live a long, healthy life. Story by Dennis Buckly, New York Tech (MSN News, February 2024).",
    img: blog4Img,
    link: "/blog/preventative-health",
  },
  {
    title: "A Longevity Masterclass: Emerging Science & Timeless Wisdom of Healthy Aging",
    category: "Longevity Medicine",
    date: "September 15, 2022",
    excerpt: "Discover the emerging science and timeless wisdom of healthy aging with Ageless Living's comprehensive longevity masterclass. Learn evidence-based strategies to optimize your healthspan.",
    img: blog5Img,
    link: "/blog/longevity-masterclass",
  },
  {
    title: "Gut Microbes May Lead to Therapies for Mental Illness",
    category: "Mental Health & Wellness",
    date: "September 14, 2022",
    excerpt: "The gut microbiome has previously been linked to some neurological and psychological disorders. Now, researchers are investigating whether utilizing microbes from the gut could potentially treat depression and other mental health disorders.",
    img: blog6Img,
    link: "/blog/gut-microbes-mental-health",
  },
  {
    title: "Ageless Living Invites You To Live Better, Longer",
    category: "Company News",
    date: "September 12, 2022",
    excerpt: "British Columbia's premier longevity and vitality clinic continues its expansion with a third location coming soon to Kelowna. Aging is inevitable. Feeling old doesn't have to be.",
    img: blog7Img,
    link: "/blog/live-better-longer",
  },
  {
    title: "Longevity and the emerging industry focused on healthy ageing",
    category: "Longevity Industry",
    date: "September 1, 2022",
    excerpt: "An interview with Anastasia Lit about longevity and the emerging industry focused on healthy ageing. Explore the global landscape of longevity companies and the future of healthy aging.",
    img: blog8Img,
    link: "/blog/longevity-industry",
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

      <section className="pt-24 pb-6 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl"
          >
            <p className="label-sm mb-3">Blog</p>
            <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-3 leading-[1.08]">
              Insights & articles
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Expert guidance, treatment deep-dives, and wellness tips from our clinical team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group"
              >
                <Link to={post.link} className="block">
                  <div className="rounded-xl overflow-hidden mb-3">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full aspect-[3/2] object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-clinic-teal-light text-clinic-teal text-xs font-semibold tracking-wide">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="text-base font-medium text-foreground mb-1.5 leading-snug group-hover:text-clinic-teal transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2 line-clamp-2">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-clinic-teal group-hover:gap-3 transition-all duration-200">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
