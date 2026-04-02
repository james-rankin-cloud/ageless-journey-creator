import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { User, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import blog2Img from "@/assets/blog2.png";

const ease = [0.16, 1, 0.3, 1] as const;

export default function WellnessRevolutionBlogPost() {
  return (
    <>
      <Helmet>
        <title>A wellness revolution | Ageless Living™</title>
        <meta
          name="description"
          content="In a world where the quest for eternal vitality is often viewed as a lofty ideal, two dedicated doctors in Kelowna are rewriting the script on aging and wellness."
        />
      </Helmet>

      <main className="pt-20 pb-20 bg-background">
        {/* Editorial Header Section */}
        <header className="max-w-7xl mx-auto px-8 pt-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-clinic-teal-light text-clinic-teal px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase">
                  Longevity Medicine
                </span>
                <span className="text-muted-foreground text-sm font-medium">December 9, 2024</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-4">
                A wellness revolution
              </h1>
              <p className="text-muted-foreground text-sm mb-4 italic">
                Story by Boulevard Magazine, November 2024 | Photography by Lia Crowe
              </p>
              <div className="flex items-center gap-4 py-4 border-t border-border/20">
                <div className="w-10 h-10 rounded-full bg-clinic-teal-light flex items-center justify-center">
                  <User className="w-5 h-5 text-clinic-teal" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Dr. Jason Boxtart, ND & Dr. Tracey Lotze, MD</p>
                  <p className="text-muted-foreground text-sm">Ageless Living Kelowna</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Visual Section - Image Placeholder 1 */}
        <section className="max-w-7xl mx-auto px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="rounded-2xl overflow-hidden aspect-video relative shadow-lg group"
          >
            <img
              alt="Dr. Jason Boxtart & Dr. Tracey Lotze"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={blog2Img}
              loading="lazy"
            />
          </motion.div>
        </section>

        {/* Content Canvas */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Side Navigation / Table of Contents */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-24 self-start h-fit">
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border/10">
                <h4 className="text-xs font-medium tracking-[0.2em] text-clinic-teal uppercase mb-4">In This Story</h4>
                <ul className="space-y-3">
                  <li>
                    <a className="text-foreground font-medium hover:text-clinic-teal transition-colors block leading-tight" href="#intro">
                      The Revolution
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#their-story">
                      Their Journey
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#practice">
                      Practice & Philosophy
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#impact">
                      Patient Impact
                    </a>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border/30">
                  <div className="bg-clinic-teal/5 p-4 rounded-xl">
                    <p className="text-xs font-medium text-clinic-teal mb-2 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      KELOWNA CLINIC
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">102-3320 Richter Street</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Reading Body */}
            <article className="lg:col-span-8 lg:col-start-5 prose prose-lg max-w-none" id="intro">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In a world where the quest for eternal vitality is often viewed as a lofty ideal, two dedicated doctors in Kelowna are rewriting the script on aging and wellness. Dr. Jason Boxtart and Dr. Tracey Lotze are not just practitioners; they are trailblazers at Ageless Living, where science meets compassion in a ground-breaking approach to health.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "Live long and prosper," said Spock in Star Trek, and this ethos resonates deeply within their practice. Amid a wellness revolution focused on longevity, Tracey and Jason are at the helm, guiding patients toward a vibrant future. Their journey into the world of biohacking and longevity is as inspiring as the lives they're transforming.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                While names like Bryan Johnson, Peter Attia and David Sinclair may dominate conversations in longevity wellness circles, Tracey and Jason are making significant waves closer to home. In a region where the natural beauty of Kelowna meets the cutting edge of health innovation, they are leading a movement grounded in evidence-based practices that challenge the status quo.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "Biohacking may sound futuristic, but it's about small, science-backed adjustments to daily habits—whether through diet, sleep or technology."
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                This philosophy isn't just a fleeting trend; it's a profound shift toward prevention rather than cure. By blending conventional and alternative insights, they are redefining how we understand health, armed with a wealth of success stories that testify to their innovative methods.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Ageless Living, founded by visionary compounding pharmacist Michael Forbes, is a sanctuary of health, utilizing bioidentical hormones and advanced wellness tools to optimize well-being. With state-of-the-art resources like hyperbaric oxygen chambers and neurofeedback systems, they elevate the healing process, enhancing mental clarity and cognitive function.
              </p>

              {/* Image Placeholder 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="rounded-2xl overflow-hidden aspect-video relative shadow-lg mb-8 bg-muted flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <p className="text-muted-foreground font-medium mb-2">Additional Image Placeholder</p>
                  <p className="text-sm text-muted-foreground">Ageless Living Kelowna Clinic</p>
                </div>
              </motion.div>

              <h2 id="their-story" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Their Journey: A Meeting of Minds
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                But the real heart of this story lies in the personal journey of Tracey and Jason. Their connection began on an unexpected note—training for the Wheelin' Warriors of the North, a cycling team dedicated to raising funds for cancer research.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm mb-6 border border-border/20">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "We met while training in Prince George. In 2018, I battled and overcame cancer, which led me to Wheelin' Warriors, and it was during that time that our friendship deepened."
                  <span className="block mt-2 text-sm text-clinic-teal font-medium">— Dr. Tracey Lotze</span>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Their backgrounds couldn't be more different: Tracey is a medical physician, and Jason is a naturopathic doctor, who has done extensive research in longevity. Yet, they found common ground in their passion for science and patient care.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm mb-8 border border-border/20">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "People ask if we argue about our fields. But you can't argue with science."
                  <span className="block mt-2 text-sm text-clinic-teal font-medium">— Dr. Jason Boxtart</span>
                </p>
              </div>

              <h3 className="text-lg font-semibold text-clinic-teal mb-3 mt-8">Finding Their Path to Kelowna</h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Kelowna's allure drew them both, offering a fresh start.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "Seeing up to 65 patients a day, six days a week, for eight years in Prince George took its toll on me," Tracey confesses.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The stress of her demanding career led her to seek help after experiencing severe reactions post-vaccination, initially mistaking her symptoms for lingering effects of COVID-19. It was through this challenge that she discovered she was facing perimenopause.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "At 43, I underestimated the challenges I could face," she admits. Thankfully, hormone treatment significantly alleviated her symptoms.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Jason faced his own hurdles, beginning testosterone therapy 15 years ago. "Navigating it largely on my own, I realized many men face similar struggles but are often reluctant to speak up," he shares.
              </p>

              <h2 id="practice" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Practice & Philosophy: Merging Expertise
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Their personal experiences fuelled their determination to empower others through meaningful care. Their partnership blossomed, ultimately connecting them with Michael Forbes and Dr. Jean Paul Lim, MD, at Ageless Living.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "Private practice was inviting," Tracey reflects. "We realized we could merge our interests in longevity."
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                This serendipitous alignment led them to join forces, creating a dynamic team that embraces innovative approaches to wellness.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease }}
                  className="p-6 rounded-xl bg-secondary/50 transition-all hover:bg-card hover:shadow-lg border border-border/10"
                >
                  <div className="w-10 h-10 rounded-full bg-clinic-teal-light flex items-center justify-center mb-3">
                    <User className="w-5 h-5 text-clinic-teal" />
                  </div>
                  <h4 className="font-medium text-base mb-3 text-foreground">Dr. Jason Boxtart, ND</h4>
                  <p className="text-sm text-muted-foreground mb-0">
                    Specializes in chronic musculoskeletal pain, gut health and bioidentical hormone replacement therapy. He masterfully blends natural health products with prescription medications, delivering tangible results in anti-aging, testosterone restoration and mental health.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease }}
                  className="p-6 rounded-xl bg-secondary/50 transition-all hover:bg-card hover:shadow-lg border border-border/10"
                >
                  <div className="w-10 h-10 rounded-full bg-clinic-teal-light flex items-center justify-center mb-3">
                    <User className="w-5 h-5 text-clinic-teal" />
                  </div>
                  <h4 className="font-medium text-base mb-3 text-foreground">Dr. Tracey Lotze, MD</h4>
                  <p className="text-sm text-muted-foreground mb-0">
                    Focuses on women's restorative health and cosmetic gynecology, honing her expertise in hormone therapy and aesthetic procedures over the past five years.
                  </p>
                </motion.div>
              </div>

              <h2 id="impact" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Patient Impact: Transforming Lives
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                As they continue to revolutionize health—particularly hormonal health—Tracey emphasizes the importance of compassion in their practice.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "I've had patients call me in tears. But after just a few follow-ups, they're in disbelief about how their lives have changed," she says.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                One poignant story involved a patient who battled suicidal thoughts and misdiagnoses, who found hope through their care. "We encouraged him to trust us instead of his previous specialist," Jason explains, highlighting the profound impact of their holistic lens.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "He is now thriving—working again, smiling and starting a new business."
                  <span className="block mt-2 text-sm text-clinic-teal font-medium">— Dr. Tracey Lotze</span>
                </p>
              </div>

              <h3 className="text-lg font-semibold text-clinic-teal mb-3 mt-8">The Mental Health Connection</h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The connection between mental health and hormones is gaining traction, yet there's much more to be done. Despite misconceptions surrounding biohacking, understanding the body and mind is a timeless principle, echoing the wisdom of Indigenous communities. Their practice also resonates with an era when physicians had the luxury of time to truly get to know their patients.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                "In private practice, we cultivate strong therapeutic relationships with patients, essential for a fulfilling medical experience," Tracey notes. "Doctors enter the profession to help people and find joy in resolving issues. With more time to invest, we can foster deeper connections compared to the typical five-minute consultations in public medicine."
              </p>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                A New Era of Wellness
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                In a society often focused on mere survival, Jason and Tracey are pioneers of a radical shift—one that promises not only longevity but vibrant, empowered living into life's golden years. By embracing innovative, sometimes misunderstood science, they lead a wellness revolution, turning the dream of ageless, healthy living into a tangible reality. This journey transcends simply adding years to life; it's about infusing those years with energy, purpose and the potential to thrive like never before.
              </p>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="mt-12 p-8 rounded-2xl bg-clinic-teal text-white relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-medium mb-4">Experience the Revolution</h2>
                  <p className="leading-relaxed mb-6 max-w-xl opacity-95">
                    Discover how Dr. Jason Boxtart and Dr. Tracey Lotze can help you achieve optimal health and longevity. Book a consultation at our Kelowna clinic today.
                  </p>
                  <Link
                    to="/book"
                    className="inline-block bg-white text-clinic-teal px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg"
                  >
                    Book Your Consultation
                  </Link>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-[80px]"></div>
              </motion.div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
