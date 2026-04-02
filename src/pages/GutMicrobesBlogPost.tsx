import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import blog6Img from "@/assets/blog6.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

export default function GutMicrobesBlogPost() {
  return (
    <>
      <Helmet>
        <title>Gut Microbes May Lead to Therapies for Mental Illness | Ageless Living™</title>
        <meta
          name="description"
          content="The gut microbiome has previously been linked to some neurological and psychological disorders. Now, researchers are investigating whether utilizing microbes from the gut could potentially treat depression and other mental health disorders."
        />
      </Helmet>

      <main className="pt-20 pb-20 bg-background">
        {/* Editorial Header Section */}
        <header className="max-w-7xl mx-auto px-8 pt-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-clinic-teal-light text-clinic-teal px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase">
                  Mental Health & Wellness
                </span>
                <span className="text-muted-foreground text-sm font-medium">September 14, 2022</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-4">
                Gut Microbes May Lead to Therapies for Mental Illness
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Source: UT Southwestern / Neuroscience News
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
              alt="Gut Microbes and Mental Health Research"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={blog6Img}
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
                <h4 className="text-xs font-medium tracking-[0.2em] text-clinic-teal uppercase mb-4">Key Topics</h4>
                <ul className="space-y-3">
                  <li>
                    <p className="text-foreground font-medium leading-tight">
                      Gut-Brain Connection
                    </p>
                  </li>
                  <li>
                    <p className="text-muted-foreground leading-tight">
                      Microbiome Research
                    </p>
                  </li>
                  <li>
                    <p className="text-muted-foreground leading-tight">
                      Depression Treatment
                    </p>
                  </li>
                  <li>
                    <p className="text-muted-foreground leading-tight">
                      Novel Therapies
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
                <p className="text-base font-medium text-foreground leading-relaxed mb-0">
                  The gut microbiome has previously been linked to some neurological and psychological disorders. Now, researchers are investigating whether utilizing microbes from the gut could potentially treat those suffering from depression and other mental health disorders.
                </p>
              </motion.div>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                The Microbiome and Brain Health
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The role of the microbiome in intestinal and systemic health has garnered close attention among researchers for many years. Now evidence is mounting that this collection of microorganisms in the human gut can also impact a person's neurological and emotional health, according to a recent perspective article in Science by a UT Southwestern researcher.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Neuroscientist Jane Foster, Ph.D., Professor of Psychiatry at UT Southwestern and a leading expert on the microbiome, outlines how scientists are unraveling the relationship of the microbiome to the brain, including connections to diseases such as depression and amyotrophic lateral sclerosis (ALS).
              </p>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Groundbreaking Research
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Foster, who was the first to link microbes in the guts of mice to anxiety, said animal studies have revealed certain microbes and related metabolites that increase anxiety-like behavior and brain function. Translating these findings to clinical populations could lead to novel therapies to improve symptoms and clinical outcomes.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Dr. Foster joined UT Southwestern and its Center for Depression Research and Clinical Care (CDRC) in May to lead the effort to connect the dots between a person's 39 trillion gut microbes and their propensity for brain disease. She previously served as Professor at McMaster University in Ontario and co-molecular lead of The Canadian Biomarker Integration Network in Depression (CAN-BIND).
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "People who are at risk for depression or diagnosed with depression are heterogeneous. So we want to use biology to understand the biomarkers that can help define the different clusters of people."
                  <span className="block mt-2 text-sm text-clinic-teal font-medium">— Dr. Jane Foster, Ph.D.</span>
                </p>
              </div>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                A Holistic Approach to Mental Health
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                She said UT Southwestern's approach, which is built on the premise that clinical care and research go hand-in-hand, attracted her to join the center.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "That holistic approach is necessary if we are going to find better answers for people suffering with mental illness."
                  <span className="block mt-2 text-sm text-clinic-teal font-medium">— Dr. Jane Foster, Ph.D.</span>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                The CDRC conducts research in unipolar and bipolar depression to better understand the causes of depression, identify new treatments, and improve existing ones.
              </p>

              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
                Personalized Treatment for Depression
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Drs. Foster and Trivedi previously collaborated to look for immune markers in blood samples obtained through CAN-BIND to see how inflammation might influence depression, and in stool samples collected from participants in the longitudinal Texas Resilience Against Depression study.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                If the sample from a patient with depression yields certain microbes that are associated with treatment success from certain antidepressants or therapies, this may drive personalized medicine for this patient.
              </p>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-8 border-l-4 border-clinic-teal">
                <p className="text-base text-foreground leading-relaxed mb-0 italic">
                  "Currently we have a host of treatment choices, yet decisions are predominantly based on behavior and self-report, and imaging and EEGs in some cases. Antidepressants typically work for just around 40% of people. Other choices include cognitive behavioral therapy, deep brain stimulation, or even exercise and diet. By expanding on the individual patient's profile, can we now improve the number of people that respond to a particular treatment?"
                  <span className="block mt-2 text-sm text-clinic-teal font-medium">— Dr. Jane Foster, Ph.D.</span>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                Source: <a href="https://neurosciencenews.com/gut-microbes-mental-health-21385/" target="_blank" rel="noopener noreferrer" className="text-clinic-teal hover:underline">Neuroscience News</a>
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
                  <h2 className="text-2xl font-medium mb-4">Explore Holistic Wellness</h2>
                  <p className="leading-relaxed mb-6 max-w-xl opacity-95">
                    At Ageless Living, we understand the mind-body connection. Book a consultation at our Victoria, Langley, or Kelowna clinics to discover comprehensive wellness solutions.
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
