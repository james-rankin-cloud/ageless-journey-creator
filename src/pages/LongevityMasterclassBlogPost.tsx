import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as const;

export default function LongevityMasterclassBlogPost() {
  return (
    <>
      <Helmet>
        <title>A Longevity Masterclass: Emerging Science & Timeless Wisdom of Healthy Aging | Ageless Living™</title>
        <meta
          name="description"
          content="Discover the emerging science and timeless wisdom of healthy aging with Ageless Living's comprehensive longevity masterclass."
        />
      </Helmet>

      <main className="pt-20 pb-20 bg-background">
        {/* Editorial Header Section */}
        <header className="max-w-7xl mx-auto px-8 pt-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-clinic-teal-light text-clinic-teal px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase">
                  Longevity Medicine
                </span>
                <span className="text-muted-foreground text-sm font-medium">September 15, 2022</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-8">
                A Longevity Masterclass: Emerging Science & Timeless Wisdom of Healthy Aging
              </h1>
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
              alt="Longevity Masterclass - Emerging Science and Timeless Wisdom of Healthy Aging"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/src/assets/blog5.jpg"
              loading="lazy"
            />
          </motion.div>
        </section>

        {/* Video Section */}
        <section className="max-w-7xl mx-auto px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/pxEnH00YcGY?si=HjjIS5JVieWXV8JG"
                title="A Longevity Masterclass: Emerging Science & Timeless Wisdom of Healthy Aging"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
