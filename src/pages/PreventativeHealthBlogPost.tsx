import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { User, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import blog4Img from "@/assets/blog4.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

export default function PreventativeHealthBlogPost() {
  return (
    <>
      <Helmet>
        <title>Take Preventative Health Measures Now And Worry Less Later | Ageless Living™</title>
        <meta
          name="description"
          content="When health care is not a viable option, look elsewhere for support with the wellness center Ageless Living™. Become your best self now to better prepare yourself for the future to live a long, healthy life."
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
                <span className="text-muted-foreground text-sm font-medium">February 29, 2024</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-4">
                Take Preventative Health Measures Now And Worry Less Later With Ageless Living
              </h1>
              <p className="text-muted-foreground text-sm mb-4 italic">
                Story by Dennis Buckly, New York Tech (MSN News, February 2024)
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

        {/* Hero Visual Section */}
        <section className="max-w-7xl mx-auto px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="rounded-2xl overflow-hidden aspect-video relative shadow-lg group"
          >
            <img
              alt="Prioritizing the Patient Experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={blog4Img}
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
                      The Self-Care Crisis
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#healthcare">
                      Healthcare Challenges
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#solution">
                      The Ageless Living Solution
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-clinic-teal transition-colors block leading-tight" href="#future">
                      Investing in Your Future
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
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8"
              >
                <p className="text-base font-medium text-foreground leading-relaxed mb-0 italic">
                  When health care is not a viable option, look elsewhere for support with the wellness center Ageless Living™. Become your best self now to better prepare yourself for the future to live a long, healthy life.
                </p>
              </motion.div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Do you tend to avoid visiting the doctor's office at all costs, despite that uncomfortable pain in your abdomen, rogue rash on your arm, or tweaked back from your soccer match last week? I get it, going to the doctor's is less than enticing, and in this day and age, it may not even be an accessible option. But as you grow older, those issues you swept under the rug could eventually pile out, leading to something much more complicated. As they say, you're only young once, and when you pass that threshold, the body is not nearly so quick at bouncing back.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Think of it as self-care – a common New Year's resolution that begins at the top of people's lists and too frequently falls to the bottom. As defined by the World Health Organization, "self-care is the ability of individuals, families, and communities to promote health, prevent disease, maintain health, and cope with illness and disability with or without the support of a health worker."
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Without proper support, however, investing in self-care can feel unattainable, and it may not necessarily be your fault if it's ranked low on your to-do's.
              </p>

              <h2 id="healthcare" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                The Healthcare Crisis in Canada
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Over the past few years, Canadians participating in physical activity and consuming the recommended amount of fruits and vegetables per day declined by 3% and 8%. Some of the biggest factors in maintaining a healthy lifestyle are remaining active and incorporating a balanced diet, but without the right guidance and aid, can be challenging to uphold. The Canadian Health Care System is in crisis due to severe understaffing leaving nearly 2.5 million people with unmet health care needs in 2021. To put it into perspective, roughly 1 in 10 Canadians lack a regular healthcare provider.
              </p>

              <h2 id="solution" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                A New Approach to Wellness
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                If you're among the percentage of Canadians without a family doctor or are simply looking to invest in your self-care for 2024, there are other resources to turn to, including Entrepreneur and Pharmacist Michael Forbes' company Ageless Living™. Forbes has a BSc in Pharmaceutical Sciences from the University of British Columbia and is certified in age management medicine and hormone restoration.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "I listened to the patient's needs first. And that's why I've been successful because I built businesses to serve people. I believe that truly if you can be a steward of service, you will be successful."
                  <span className="block mt-2 text-sm text-clinic-teal font-medium">— Michael Forbes, BSc Pharm</span>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                His integrated medical practice focuses on age management using a wide range of evidence-based treatments and services developed by certified leaders and experts in the medical, skin health, and pharmaceutical fields, so there's something for everyone.
              </p>

              <h3 className="text-lg font-semibold text-clinic-teal mb-3 mt-8">Redefining Aging</h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With a mission to help people live better, and longer, Forbes and his team at Ageless Living™ are redefining the misconceptions of aging. Old age is often characterized by things such as sickness, weakness, the inability to remain active, relying on others to care for you, and so on. Yet, these variables are only true for some, and there are indeed ways to avoid becoming part of this conventional idea. It all starts with self-care in your younger years (but it's never too late to begin at any age).
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                This year, consider making self-care a priority. By tending to your health now, you'll save yourself a lot of unwanted stress in the future, something Forbes knows all too well. Another service impacted by the declining healthcare system in Canada is retirement and nursing homes, which have encountered staffing challenges over the last few years.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "So many people don't understand that, hey, we're all going to die eventually. And when you go to these nursing homes and see what it's like, you quickly realize, I don't want my last years to be like that."
                  <span className="block mt-2 text-sm text-clinic-teal font-medium">— Michael Forbes, BSc Pharm</span>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                The next time an older individual encourages you to take care of yourself in your youth to avoid issues down the road, don't shrug off the advice – they're more on the nose than you may realize, now more than ever.
              </p>

              <h2 id="future" className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Living Longer, Living Better
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Ageless Living™ was created for this very purpose. The company helps individuals care for themselves through a blend of traditional medicine with groundbreaking wellness therapies since "evidence suggests as much as 80% of health is influenced by how we live each day," the website states. Services include biohacking, health weight, hormone balancing, and skin rejuvenation, which can get you on the right track to live a better, longer life.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "I've created a way for everybody to experience some longevity medicine and live longer. And you know what that means? The less likely you are to end up relying on healthcare workers in your old age."
                  <span className="block mt-2 text-sm text-clinic-teal font-medium">— Michael Forbes, BSc Pharm</span>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Your future self will thank you for investing in your well-being now to prevent issues later.
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
                  <h2 className="text-2xl font-medium mb-4">Invest in Your Future Health Today</h2>
                  <p className="leading-relaxed mb-6 max-w-xl opacity-95">
                    Take preventative health measures now and worry less later. Book a consultation at our Victoria, Langley, or Kelowna clinics to start your journey to a healthier, longer life.
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
