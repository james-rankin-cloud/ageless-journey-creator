import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import blog8Img from "@/assets/blog8.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

export default function LongevityIndustryBlogPost() {
  return (
    <>
      <Helmet>
        <title>Longevity and the emerging industry focused on healthy ageing | Ageless Living™</title>
        <meta
          name="description"
          content="An interview with Anastasia Lit, Director of Investor Relations and Business Development at Deep Knowledge Group, about longevity and the emerging industry focused on healthy ageing."
        />
      </Helmet>

      <main className="pt-20 pb-20 bg-background">
        {/* Editorial Header Section */}
        <header className="max-w-7xl mx-auto px-8 pt-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-clinic-teal-light text-clinic-teal px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase">
                  Longevity Industry
                </span>
                <span className="text-muted-foreground text-sm font-medium">September 1, 2022</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-4">
                Longevity and the emerging industry focused on healthy ageing
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Middle East Health speaks to Anastasia Lit, Director of Investor Relations and Business Development – Europe & MENA, Deep Knowledge Group, about longevity and the emerging industry focused on healthy ageing.
              </p>
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
              alt="Longevity Industry and Healthy Ageing"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={blog8Img}
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
                <h4 className="text-xs font-medium tracking-[0.2em] text-clinic-teal uppercase mb-4">Interview Topics</h4>
                <ul className="space-y-3">
                  <li>
                    <p className="text-foreground font-medium leading-tight">
                      The Longevity Sector
                    </p>
                  </li>
                  <li>
                    <p className="text-muted-foreground leading-tight">
                      Global Distribution
                    </p>
                  </li>
                  <li>
                    <p className="text-muted-foreground leading-tight">
                      UAE Leadership
                    </p>
                  </li>
                  <li>
                    <p className="text-muted-foreground leading-tight">
                      AI in Healthcare
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
              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4">
                Can you explain what the longevity sector is and what is its potential impact?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Anastasia Lit:</strong> Human longevity is an emerging industry focused on healthy ageing. The goal is to lengthen the lifespan of people while improving their health. The longevity industry presents solutions for the prevention and treatment of chronic diseases related to ageing.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The longevity industry is a combination of several vital sectors and subsectors, such as biotech, pharmaceuticals, FinTech and InsurTech, among others.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Considering the ageing demographics across many nations globally, and given the age-related causes of death, all of which have been growing globally over the past decade, the demand for ageing-related health services is also increasing.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <p className="text-base text-foreground leading-relaxed mb-0">
                  The ultimate objective of longevity is to maintain an optimal state of wealth and health in the later years of life. The goal is to empower senior citizens and the middle-aged physically, mentally and financially.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Today there is a pressing need for government attitudes to shift, and this shift should be from an ageing-reactive position – which means neutralizing the economic burden of the ageing population – all the way to the other end of the spectrum, to a longevity-proactive position, from treatment to preventive care.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                This shift is expected to generate massive socioeconomic opportunities, such as extending the period of participation among the ageing workforce, extending the productivity levels among the elderly, and lowering the overall healthcare burden of old-age care. The economic return on all that is immense, let alone the potential in the industrialization and commercialization of the longevity sector and its subsectors.
              </p>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                You've recently revealed the world's largest healthy ageing database. How are these companies you mapped, distributed across the world?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Anastasia Lit:</strong> The US is in the lead. It is home to over 54% of longevity-focused companies, and Europe is far behind with almost 17% of longevity companies. Europe represents the second biggest market globally after the US, although the gap between the two is big.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Asia has increased its market share to almost 12%, and it continues to grow. We expect steady growth among Asian companies with the increase in the amount of funding and public listings that we're witnessing among those companies.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Other regions such as Canada, the UK and Australia have small percentages of longevity companies, compared to the US, Europe and Asia.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                According to our recently launched Longevity Journal, over 400 longevity companies have reached late-stage financing and are now expected to start tapping the IPO markets.
              </p>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Where does the UAE stand in this field?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Anastasia Lit:</strong> The UAE has been a regional pioneer in embracing longevity. We've seen government entities sign strategic partnerships to advance some of the most vital healthcare sectors including longevity. We were part of some of these partnerships. One of our existing partnerships with the Sharjah Research Technology and Innovation Park, aims to map and develop the longevity industry in the UAE.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                And partnerships of this nature not only help in developing national longevity policies, they also maximize the health and wealth of the nation. Such partnerships also aim to prepare future leaders, whom we really need to be able to advance the longevity agenda, and that's why we're trying to include longevity in the educational curriculum at the university level here in the UAE. This is a key component in any development strategy of any developed nation.
              </p>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Many countries have a growing ageing population. Why is it important that governments and businesses recognize them?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Anastasia Lit:</strong> Given the growing population of senior citizens, we are seeing the formation of a whole new economy driven by older adults. Today there are more than a billion people aged 60 years and older in the world. They can populate an entire '7th continent'. They hold immense purchasing power as they possess the largest amount of financial assets compared to other age groups.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Seniors are the wealthiest age cohort in the world today, together with older professionals aged 45 to 64 years old. This reality about the wealthier elderly is not because senior citizens are inherently richer, but because in general, rich countries are older and poor countries are younger. However, this equation doesn't apply to the UAE.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Globally, the number of seniors is expected to grow by 3.2% every year until 2030. Many of the world's "new seniors" will be in Asia.
              </p>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Which regions are leading the way today in terms of average life expectancy?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Anastasia Lit:</strong> Globally, life expectancy of high-income countries was just over 80 years in 2020, and it's expected to grow to just over 90 years by the end of this century.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Geographically, North America and Europe are leading the way in terms of average life expectancy. Asia, Latin America and the Caribbean saw rapid gains in longevity over the past 60 years, but further progress is needed in order to achieve the levels of life expectancy similar to those in North America and Europe.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                By the end of the 21st century, senior citizens aged 60+ will represent almost a third of the world's population. This percentage is much less today. Therefore, the size of the population of senior citizens will likely double by the end of this century.
              </p>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                I understand AI is being used to address some of the most common age-related diseases. Can you tell us more about this?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Anastasia Lit:</strong> One of the most common age-related challenges is vision loss and blindness. Recently approved, Luxturna (Spark Therapeutics) is a gene therapy for retinopathies treatment, but the cost of this treatment is extremely high. As alternative methods, scientists have created devices based on VR and AI. It is electronic glasses that can be an interesting option to help people with sight problems. The most known are IrisVision (Samsung), Acesight (Zoomax), NuEyes Pro, MyEye2, eSight.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                These devices assist in performing a wide range of daily activities ranging from simple tasks like reading a book and watching TV to something as elaborative as painting, knitting, sewing, and seeing faces. Solutions that integrate VR or AI are one of the fastest developing right now, thus the spectrum of implementations can broaden exponentially.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                We are witnessing an increase in the application of AI in drug discovery, which will significantly expedite therapeutic research in a variety of fields, particularly age-related disorders.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Insilico Medicine, an end-to-end AI-driven drug discovery enterprise, has revealed that it dosed numerous healthy volunteers in the first clinical investigation of an anti-fibrotic small molecule inhibitor produced by an AI-powered drug discovery platform. The ISM001-055 safety, tolerability, and pharmacokinetics will be evaluated in a double-blind, placebo-controlled Phase I clinical study.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Comprehensive testing using novel targets and compounds is the best technique to validate the performance of an AI system. Utilizing longitudinal biological data from healthy patients, researchers may identify targets and draw conclusions about a range of disorders using modern deep learning technology. In this scenario, AI was used to identify the target and construct the molecule, indicating that this solution was AI-discovered and AI-designed.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                Source: <a href="https://middleeasthealth.com/focus/interviews/longevity-and-the-emerging-industry-focused-on-healthy-ageing" target="_blank" rel="noopener noreferrer" className="text-clinic-teal hover:underline">Middle East Health</a>
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
                  <h2 className="text-2xl font-medium mb-4">Experience Longevity Medicine</h2>
                  <p className="leading-relaxed mb-6 max-w-xl opacity-95">
                    At Ageless Living, we're at the forefront of the longevity revolution. Book a consultation at our Victoria, Langley, or Kelowna clinics to discover how cutting-edge longevity science can help you live better, longer.
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
