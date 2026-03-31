import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { User, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as const;

export default function PreventionAndLongevityBlogPost() {
  return (
    <>
      <Helmet>
        <title>How Ageless Living wellness centres can help you live a healthier, longer life | Ageless Living™</title>
        <meta
          name="description"
          content="Michael Forbes is a seasoned entrepreneur with a successful track record in the medical industry. Learn how Ageless Living helps you live a healthier, longer life through preventative care."
        />
      </Helmet>

      <main className="pt-20 pb-20 bg-background">
        {/* Editorial Header Section */}
        <header className="max-w-7xl mx-auto px-8 pt-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-clinic-teal-light text-clinic-teal px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase">
                  Preventative Medicine
                </span>
                <span className="text-muted-foreground text-sm font-medium">October 2, 2024</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-4">
                How Ageless Living wellness centres can help you live a healthier, longer life
              </h1>
              <p className="text-muted-foreground text-sm mb-4 italic">
                Story by The Georgia Straight, September 2024
              </p>
              <div className="flex items-center gap-4 py-4 border-t border-border/20">
                <div className="w-10 h-10 rounded-full bg-clinic-teal-light flex items-center justify-center">
                  <User className="w-5 h-5 text-clinic-teal" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Michael Forbes, BSc Pharm</p>
                  <p className="text-muted-foreground text-sm">Owner & Pharmacist, Ageless Living</p>
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
            className="rounded-2xl overflow-hidden aspect-video relative shadow-lg group bg-muted flex items-center justify-center"
          >
            <div className="text-center p-8">
              <p className="text-muted-foreground font-medium mb-2">Featured Image Placeholder</p>
              <p className="text-sm text-muted-foreground">Michael Forbes</p>
            </div>
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
                      The Journey
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#innovation">
                      Innovation in Medicine
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#ageless">
                      Building Ageless Living
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#future">
                      The Future of Healthcare
                    </a>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border/30">
                  <div className="bg-clinic-teal/5 p-4 rounded-xl">
                    <p className="text-xs font-medium text-clinic-teal mb-2 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      CLINIC LOCATIONS
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">Victoria • Langley • Kelowna</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Reading Body */}
            <article className="lg:col-span-8 lg:col-start-5 prose prose-lg max-w-none" id="intro">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Michael Forbes is a seasoned entrepreneur with a successful track record in the medical industry. Graduating from the University of British Columbia with a BSc. in Pharmaceutical Sciences, Michael began his career shortly after as a compounding pharmacist, developing treatments through a combination of drugs to deliver a more tailored experience for his clients.
              </p>

              <h2 id="innovation" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Innovation in Medicine: Bioidentical Hormones
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                At the time, conventional hormone therapies, particularly for menopause, relied on substances like estrogen extracted from horse urine—an option later confirmed to increase cancer risks. Forbes recognized the dangers of these treatments and turned to bioidentical hormones (compounds identical to those produced by the human body) as an effective alternative that would reduce risk and provide relief for his patients.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                What these hormones offered was a safer solution for patients given that they were derived from natural sources. Moreover, these compounds could not be patented by pharmaceutical companies, making them a more cost-effective and accessible solution.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "Bioidentical hormones offered a safer solution for patients, derived from natural sources and more cost-effective than patented pharmaceutical alternatives."
                </p>
              </div>

              <h3 className="text-lg font-semibold text-clinic-teal mb-3 mt-8">The Healthcare Gap</h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                However, there was a problem. As his compounding pharmacy business grew, he quickly realized a gap in the healthcare system: a lack of doctors trained in this evolving field of bioidentical hormone therapy. Determined to fill the void, he began sending doctors to specialized training programs in the US, planting the seeds for what would later become the Ageless Living wellness centres.
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
                  <p className="text-sm text-muted-foreground">Ageless Living Wellness Centre</p>
                </div>
              </motion.div>

              <h2 id="ageless" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Building Ageless Living
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Over the past decade, Ageless Living—which has locations in Langley, Kelowna, and Victoria—has grown into a cutting-edge facility that focuses on disease prevention, longevity medicine, weight management, and recovery. As the world of medicine accelerates, Forbes is committed to staying ahead of the curve.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                He rejects the outdated model of traditional medicine which relies on a reactionary approach where ailments are diagnosed once they have been discovered. Instead, Ageless Living champions a proactive strategy, focusing on early diagnosis and prevention as the key to a healthier, longer life.
              </p>

              <h2 id="future" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                The Future of Healthcare
              </h2>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "As cancer risks rise, being diagnostic and preventative is the key to a long and healthy life."
                  <span className="block mt-2 text-sm text-clinic-teal font-medium">— Michael Forbes, BSc Pharm</span>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Forbes emphasizes the importance of pushing medicine into uncharted territory. His mission is deeply personal: to help people live their best, healthiest lives and leave the world a better place.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Under his leadership, Ageless Living continues to lead the charge in innovative healthcare, reshaping how we view aging and disease prevention. Forbes' dedication to advancing medical practices through personalized, preventative care is more than just a business—it's a commitment to a healthier future for all.
              </p>

              <h3 className="text-lg font-semibold text-clinic-teal mb-3 mt-8">A Personal Mission</h3>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Take control of your health—embrace prevention, longevity, and personalized care. Forbes and his team at Ageless Living are here to guide you on your journey to optimal health and wellness.
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
                  <h2 className="text-2xl font-medium mb-4">Start Your Journey Today</h2>
                  <p className="leading-relaxed mb-6 max-w-xl opacity-95">
                    Experience the Ageless Living difference with personalized, preventative care designed to help you live your healthiest life. Book a consultation at our Victoria, Langley, or Kelowna clinics today.
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
