import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

const faqData: FAQCategory[] = [
  {
    title: "Biohacking",
    faqs: [
      {
        question: "What is biohacking?",
        answer: "Biohacking refers to the process of achieving better health through the use of groundbreaking modern therapies, from advanced medical technologies to natural 'plant' treatments, that enables us to treat or reverse damage done to our bodies over time and achieve our highest level of function.",
      },
      {
        question: "What aspects of my life will improve with Biohacking?",
        answer: "That depends on the treatment regimen you choose. If you choose a package targeting inflammation, then you can feel more energetic, less achy, have improved mood, and mental clarity.",
      },
      {
        question: "Can Infrared help me lose weight?",
        answer: "Yes. Studies have found far-infrared (FIR) saunas to have a number of impressive health benefits, such as the release of feel-good chemicals, the elimination of toxins, and an increase in naturally-produced antioxidants like glutathione, which powerfully tackles inflammation. It also helps with detoxification which can aid in weight loss. On top of that, FIR sauna therapy has been found to reduce pain and improve circulation and wound-healing.",
      },
      {
        question: "What does the Neurointegrator do? How does it work?",
        answer: "The neurointegrator is a neurofeedback device that helps you correct unhealthy brain signalling, utilizing personalized training regimens to develop healthier signalling patterns over time and in turn improving both mental and physical health. The brain is connected to all parts of the body and exerts its effects directly and indirectly. This is why when someone is depressed their sensation of pain is amplified. Neurofeedback therapy has been demonstrated to produce persistent, and in many cases permanent, reductions in disorders relating to the central nervous system.",
      },
      {
        question: "Is Biohacking backed by scientific research?",
        answer: "There is a plethora of studies being done on how we humans can gain an insight and edge into our inner well-being. These studies include how medical advancements can help with stress, inflammation, mental wellness, sleep and even alter gene expression (i.e. epigenetics).",
      },
      {
        question: "Does BHC help with insomnia?",
        answer: "Yes. Insomnia is as aggravating as it is unhealthy. Our bodies depend on a healthy sleep schedule to function at their best, accomplishing some of their most important functions in the deep stages of sleep. Like anxiety, insomnia tends to start small but becomes worse and more deeply ingrained as the problem persists. Correcting insomnia involves a multi-system approach.",
      },
      {
        question: "Does BHC help with inflammation?",
        answer: "Yes. Inflammation is the not-so-silent killer of our modern world, which can be seen in the massive increase in diseases linked to inflammation. Beyond the obvious candidates like autoimmune disorders (arthritis, lupus, IBD, etc.) and asthma, inflammation has been linked to a wide range of symptoms and disease states you might not otherwise expect - depression, fibromyalgia, chronic fatigue, insulin resistance, obesity, and hormonal imbalances, to name a few. Treating inflammation can be a vital first step to improving overall health and is especially valuable for those who struggle with a chronic illness or those who engage in strenuous athletic training. Many pro-athletes spend millions of dollars reducing inflammation to prolong their careers (e.g. Lebron James) using equipment we have at Ageless.",
      },
      {
        question: "Are there negative side effects or risks with BHC treatments?",
        answer: "Because the goal of Biohacking is to help us address our inner body, it is important to get treatments from a trained professional. The risk associated with Biohacking treatments depends on what treatment is being used. Your Biohacking specialist can speak to you more about this.",
      },
      {
        question: "How does Hyperbaric chamber work to help me heal faster?",
        answer: "Oxygen is essential to producing the energy our cells need to function, repair, and reproduce. Hyperbaric Oxygen Therapy (HBOT) provides oxygen therapy at higher pressures and has been shown to improve the flow of oxygenated blood throughout the body, and in doing so to reduce the activity of free radicals, unstable atoms that cause damage to cells and contribute to aging and inflammation. The increased oxygenation of the blood has also been demonstrated to help combat active and latent infections and improve recovery from injury and exertion.",
      },
      {
        question: "How do I know which BHC service is right for me?",
        answer: "The staff at Ageless Living have been trained to identify your needs and what therapies can help you achieve your health goals. We have Biohacking packages that have been specifically built to address common complaints such as fatigue, inflammation, insomnia and anxiety/stress that your Ageless Biohacking Specialist can walk you through.",
      },
    ],
  },
  {
    title: "Health Weight Program",
    faqs: [
      {
        question: "Can you guarantee weight loss with your program?",
        answer: "Although we don't officially guarantee that you will lose a defined amount of weight, as that shouldn't necessarily be the main goal, if you are unhappy with the service and results of the program we will happily refund you the entire cost of the program within the first 3 months from when you sign up. However, we are confident that if you follow our protocol, not only will you lose weight but you will also feel better and be equipped to keep the weight off!",
      },
      {
        question: "Does your program include meal planning?",
        answer: "Yes. We help you plan meals by educating and guiding you to eat foods you need to reach your weight goals. Unlike other programs, there are no prepared processed meal plans to purchase as we don't think that is sustainable in the long run. At Ageless Living, we want to equip you with the skills that are necessary to make lasting lifestyle changes and we will work with you until we get you there!",
      },
      {
        question: "What makes Ageless Health Weight different from other 'diet' plans?",
        answer: "Fundamentally we are different as we encourage our participants to focus on life choices that optimize their health rather than on weight itself, which will come off naturally with our protocol. This alone allows the person to view weight as one of the goals rather than the only goal, thus diminishing the temptation to cheat or lose weight at all costs (e.g. starvation, dangerous weight loss supplements, etc). Our medically designed program assesses each person in their entirety, including potential mental health reasons for having weight issues. Finally, our tiered program allows access for people at different financial stages, including the option of a completely medically supervised program.",
      },
      {
        question: "What can I expect with my initial Health Weight assessment?",
        answer: "Prior to your first appointment, you will need to complete a series of online questionnaires that are designed to give your Health Weight Team a comprehensive picture of your health and needs. If you are not an Ageless member already, you will be asked to do some baseline blood work as well. This preparatory work is meant to streamline the initial assessment and make it as impactful as possible and allow therapy to potentially begin immediately.",
      },
    ],
  },
  {
    title: "Hormone Balancing",
    faqs: [
      {
        question: "What can I expect with my initial hormone consultation?",
        answer: "Prior to your first appointment, you will need to complete an online questionnaire, do some baseline blood work and do a saliva test. This preparatory work is meant to streamline the initial assessment and make it as impactful as possible and allow therapy to potentially begin immediately.",
      },
      {
        question: "What are the benefits of subscribing to the annual membership?",
        answer: "We have specifically priced the annual membership to be an affordable and worry-free way to access your medical team based entirely on your medical needs rather than financial. Our goal is for you to follow up with your medical provider as often as required so that you and your Medical Provider can focus 100% on your health and well-being. We offer flexible membership payments - pay annually or monthly according to your budget.",
      },
    ],
  },
  {
    title: "Skin Rejuvenation",
    faqs: [
      {
        question: "When is it okay for me to get filler after my COVID Vaccine?",
        answer: "We advise patients to wait 4 weeks both before and after receiving the Vaccine to be treated with filler. We are able to administer BOTOX® anytime before or after you receive the Vaccine as long as you are symptom free!",
      },
      {
        question: "I was told consultations are mandatory prior to my first treatment. Can I have my treatment the same day as my initial consultation?",
        answer: "It depends on the treatment, but often, yes. Sometimes, some preparation is needed before treatments such as laser and IPL. Consultations are necessary to determine candidacy for treatments. If, during your consultation, it is determined that you are a not a candidate for treatment that day, we are happy to re-book you for another day. Your safety is our first priority.",
      },
      {
        question: "I am new to aesthetic procedures. Where should I start?",
        answer: "We like to recommend starting to think about how what you see when you look in the mirror makes you feel. Would you like to look less sad? Less worried? More beautiful or handsome? Are you happy with your appearance, but interested in preventive measures, so that you can maintain your skin quality as you begin to age? Are there specific concerns you would like to address, such as acne, scarring, wrinkles, redness, pigment, spots, etc? During your initial aesthetic consultation, you will be given ample time to discuss your concerns in detail, and have all your questions answered. A custom treatment plan will be designed, collaboratively with you, to address your specific goals, needs, budget, etc.",
      },
      {
        question: "What can I do to minimize wrinkles, fix wrinkles, and prevent new wrinkles from forming?",
        answer: "Ageless Living offers many treatments for correcting and softening wrinkles, fine lines, and skin creases. These include wrinkle-relaxing neuromodulators such as BOTOX® Cosmetic, volumizing soft tissue fillers, laser treatments, collagen stimulating treatments, resurfacing treatments such as chemical peels, and cosmeceutical-grade skin care. Most often, a combination approach to improving skin quality is recommended for best result.",
      },
    ],
  },
];

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease }}
      className="border-b border-border/20 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left group"
      >
        <h3 className="text-base font-medium text-foreground leading-snug group-hover:text-clinic-teal transition-colors">
          {faq.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-clinic-teal flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1000px] pb-4" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed pr-8">
          {faq.answer}
        </p>
      </div>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Ageless Living™</title>
        <meta
          name="description"
          content="Find answers to common questions about biohacking, health weight programs, hormone balancing, and skin rejuvenation at Ageless Living™."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-clinic-teal font-bold tracking-widest uppercase text-xs">
              Support & Information
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-tight mt-4 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Find answers to common questions about our services, treatments, and programs. Can't find what you're looking for? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <main className="container mx-auto section-padding py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqData.map((category, categoryIndex) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1, ease }}
            >
              <div className="mb-6 border-l-4 border-clinic-teal pl-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  {category.title}
                </h2>
              </div>
              <div className="bg-card rounded-xl border border-border/20 p-6 md:p-8 shadow-sm">
                {category.faqs.map((faq, index) => (
                  <FAQItem key={index} faq={faq} index={index} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-16 max-w-4xl mx-auto p-8 rounded-2xl bg-clinic-teal text-white relative overflow-hidden"
        >
          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Still have questions?</h2>
            <p className="leading-relaxed mb-6 max-w-2xl mx-auto opacity-95">
              Our team is here to help. Book a consultation at our Victoria, Langley, or Kelowna clinics to discuss your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="inline-block bg-white text-clinic-teal px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Book a Consultation
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-clinic-teal"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-[80px]"></div>
        </motion.div>
      </main>
    </>
  );
}
