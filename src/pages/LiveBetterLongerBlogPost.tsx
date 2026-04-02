import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { User, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as const;

export default function LiveBetterLongerBlogPost() {
  return (
    <>
      <Helmet>
        <title>Ageless Living Invites You To Live Better, Longer | Ageless Living™</title>
        <meta
          name="description"
          content="British Columbia's premier longevity and vitality clinic continues its expansion with a third location coming soon to Kelowna. Aging is inevitable. Feeling old doesn't have to be."
        />
      </Helmet>

      <main className="pt-20 pb-20 bg-background">
        {/* Editorial Header Section */}
        <header className="max-w-7xl mx-auto px-8 pt-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-clinic-teal-light text-clinic-teal px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase">
                  Company News
                </span>
                <span className="text-muted-foreground text-sm font-medium">September 12, 2022</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-4">
                Ageless Living Invites You To Live Better, Longer
              </h1>
              <p className="text-muted-foreground text-sm mb-4 italic">
                September 8, 2022 (Vancouver, BC)
              </p>
              <div className="flex items-center gap-4 py-4 border-t border-border/20">
                <div className="w-10 h-10 rounded-full bg-clinic-teal-light flex items-center justify-center">
                  <User className="w-5 h-5 text-clinic-teal" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Ageless Living Team</p>
                  <p className="text-muted-foreground text-sm">Victoria • Langley • Kelowna</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Visual Section */}
        <section className="max-w-7xl mx-auto px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="rounded-2xl overflow-hidden aspect-video relative shadow-lg group"
          >
            <img
              alt="Ageless Living Wellness Centre - Live Better Longer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/src/assets/blog7.jpg"
              loading="lazy"
            />
          </motion.div>
        </section>

        {/* Content Canvas */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Side Navigation */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-24 self-start h-fit">
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border/10">
                <h4 className="text-xs font-medium tracking-[0.2em] text-clinic-teal uppercase mb-4">Our Services</h4>
                <ul className="space-y-3">
                  <li>
                    <p className="text-foreground font-medium leading-tight">
                      Longevity Medicine
                    </p>
                  </li>
                  <li>
                    <p className="text-muted-foreground leading-tight">
                      Hormone Balancing
                    </p>
                  </li>
                  <li>
                    <p className="text-muted-foreground leading-tight">
                      Biohacking
                    </p>
                  </li>
                  <li>
                    <p className="text-muted-foreground leading-tight">
                      Skin Rejuvenation
                    </p>
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
            <article className="lg:col-span-8 lg:col-start-5 prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8"
              >
                <p className="text-base font-medium text-foreground leading-relaxed mb-0 italic">
                  British Columbia's premier longevity and vitality clinic continues its expansion with a third location coming soon to Kelowna.
                </p>
              </motion.div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-medium">
                Aging is inevitable. Feeling old doesn't have to be. That's the guiding philosophy at Ageless Living, the next generation of innovative health care and wellness clinics in B.C., with locations in Langley, Victoria, and soon, Kelowna.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Co-founded by Michael Forbes (BSc Pharm and MBA), alongside Dr. Jean-Paul Lim (MD Internal Medicine and Complex Care Specialist), Ageless Living brings together the best in medical-grade treatments, state-of-the-art technologies and cutting-edge scientific discoveries to help patients achieve optimal health results for body, mind and spirit — at any age.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Ageless Living promotes an innovative shift in health care: moving past the conventional approach of suppressing and repressing symptoms to treat the root causes of a complaint with a multidisciplinary, solutions-based program.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Ageless Living's licensed medical staff and certified wellness professionals offer a wide range of personalized, holistic treatments, from the aesthetic to the therapeutic. With a particular emphasis on the mind-body connection to combat the signs and symptoms of aging, they employ an array of disciplines and approaches to health and integrate these into a comprehensive, cohesive, and customized patient-care model.
              </p>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Our Core Services
              </h2>

              <h3 className="text-lg font-semibold text-clinic-teal mb-3 mt-8">Longevity</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ageless Living is at the vanguard of Longevity Life Sciences, offering treatments that proactively, safely, and effectively align body and mind to improve symptoms of aging and promote the body's own regeneration processes.
              </p>

              <h3 className="text-lg font-semibold text-clinic-teal mb-3 mt-8">Hormone Balancing and Optimization</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Supplementing the body's natural production and supply with bioidentical hormones has been successful for women and men in addressing symptoms such as age-related damage to the body, COVID-19-related brain fog, fatigue and low energy, decreased libido and erectile issues, as well as PMS and menopausal symptoms.
              </p>

              <h3 className="text-lg font-semibold text-clinic-teal mb-3 mt-8">Biohacking</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Working with natural biology to exploit the healing potential of the mind and body, our leading-edge treatments and innovative technologies can improve stamina, recovery, mental acuity, and productivity, all while stimulating regeneration.
              </p>

              <h3 className="text-lg font-semibold text-clinic-teal mb-3 mt-8">Skin Rejuvenation</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Certified, experienced skin rejuvenation experts, offer patients a wide range of treatments and plans for both cosmetic enhancements and clinical needs of the body and the face, including Botox, soft tissue fillers, peels, dermaplaning and award-winning cosmeceuticals lines.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-lg font-medium text-foreground mb-3">Get Started Today</h3>
                <p className="text-muted-foreground leading-relaxed mb-0">
                  Ageless Living offers a quick and easy-to-use preliminary online Hormone Test where prospective patients can find treatment options for their symptoms and begin the discussion of optimized, holistic health.
                </p>
              </div>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Our Locations
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Ageless Living is currently located in Victoria (1-101 Burnside Rd. West) and Langley (415-20178 96th Ave.) and opened the Kelowna clinic in fall 2022.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <h3 className="text-lg font-medium text-foreground mb-3">About Ageless Living</h3>
                <p className="text-base text-foreground leading-relaxed mb-4 italic">
                  Live better, longer.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-0">
                  Ageless Living is committed to the future of health care, and of our patients. Believing the body is ultimately designed to live in balance and harmony, Ageless Living promotes longevity and vitality by addressing the symptoms of aging with individually tailored, multidisciplinary, solutions-based programs that blend traditional medicine with ground-breaking wellness treatments and therapies. We offer comprehensive and customized patient-care plans and the very best of what's possible, with the guidance, the tools and the technologies to help you live better, longer. Aging is inevitable. Feeling old doesn't have to be.
                </p>
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="mt-12 p-8 rounded-2xl bg-clinic-teal text-white relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-medium mb-4">Start Your Journey to Better Health</h2>
                  <p className="leading-relaxed mb-6 max-w-xl opacity-95">
                    Book a consultation at our Victoria, Langley, or Kelowna clinics to discover how our comprehensive approach to longevity and wellness can help you live better, longer.
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
