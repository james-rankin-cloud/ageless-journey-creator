import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function MicroneedlingPage() {
  return (
    <>
      <Helmet>
        <title>Medical Microneedling | Ageless Living™</title>
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto section-padding grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>

            <span className="text-clinic-teal tracking-[0.2em] uppercase text-xs font-semibold">
              Advanced Skin Therapy
            </span>

            <h1 className="text-6xl md:text-7xl font-light leading-[0.95]">
              Medical{" "}
              <span className="text-clinic-teal italic">
                Microneedling
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md font-light">
              Collagen Induction Therapy. The gold standard in regenerative aesthetics
              for refined texture and natural skin vitality.
            </p>

            <div className="pt-4">
              <Link
                to="/book"
                className="bg-clinic-teal text-white px-10 py-4 rounded-full font-semibold shadow-xl hover:opacity-90 transition"
              >
                Book Your Consultation
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrzBEJzpvRjhVO1fsLFs58DUyp4xZvYMMt-sSsyTpedph4-NaKl2Lmd9BsO31H8oe8TtTKwhdlxqZ6uj5duFhhLQMSchQ-2Iq5RpbnX_GLtVrPGQ8AA9AkbsPbyQQAbXYdlc9GqXUzKPH0YPIlMdaNzeY9P6fNmTYD_nYIq-aJkQCTWTCaJjeEtE7a7AOA2e6HbLDIKxV9eKiPdLu5xvbht5vZzNHoFcPRXwZ4h4I5djlU6Js8wP3Q7BgAAId1dO5P5kQdLfqV8KE"
                alt="Microneedling"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SCIENCE ═══ */}
      <section className="py-28 bg-secondary/30">
        <div className="container mx-auto section-padding grid lg:grid-cols-2 gap-20">

          <div>
            <h2 className="text-4xl font-light mb-6">
              The Science of{" "}
              <span className="text-clinic-teal font-semibold">
                Regeneration
              </span>
            </h2>

            <p className="text-muted-foreground mb-4 font-light">
              Medical Microneedling introduces controlled micro-injury into the skin,
              triggering a wound healing response and the release of natural growth factors.
            </p>

            <p className="text-muted-foreground font-light">
              This stimulates collagen and elastin production, dramatically improving
              fine lines, acne scars, and overall skin structure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <h4 className="font-bold mb-2">Precision Control</h4>
              <p className="text-sm text-muted-foreground">
                Adjustable needle depths allow for personalized treatment.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm mt-8">
              <h4 className="font-bold mb-2">Biotic Stimuli</h4>
              <p className="text-sm text-muted-foreground">
                Activates long-term dermal regeneration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUTCOMES (WITH 01 / 02 BLUE NUMBERS) ═══ */}
      <section className="py-28 bg-foreground text-white rounded-[2rem] mx-4 md:mx-8">
        <div className="container mx-auto section-padding grid lg:grid-cols-2 gap-20 items-center">

          <div className="rounded-full overflow-hidden aspect-square">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd8AiSNkln7yrWAnhShV-O0l_EvPtLIKRM-y7Sa9EfROrxz_sfYrlIj9CATeFFQfQaOb4YfdRUUCXZokUaj4CvmPuP3KP4Viq16HV5xbqzJyD68mUjdp9E1nwaHQQpJ-9lxKkoHOCAKuUCHNhKs8-B4YOseGvRBRccZuHMDQiajqTGqsWTCApvQl2RoEvkBE2CNTuZdoi7YGdvXpARhnuInZ4HxENAY3UjGFGYIJU1KoqA2gzVH7VaPIG2RaXSx7F3qJdShqf10cY"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div>
            <h2 className="text-5xl italic mb-8">
              Progressive <span className="not-italic font-bold">Outcomes</span>
            </h2>

            <p className="opacity-70 mb-10">
              Results are both immediate and progressive. A series of 3–6 treatments is recommended.
            </p>

            <div className="space-y-6">

              <div className="bg-white/5 p-6 rounded-xl flex gap-4">
                <span className="text-clinic-teal font-bold text-2xl">01</span>
                <div>
                  <h4 className="font-bold">Immediate Glow</h4>
                  <p className="text-sm opacity-60">
                    Enhanced blood flow provides instant radiance.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl flex gap-4">
                <span className="text-clinic-teal font-bold text-2xl">02</span>
                <div>
                  <h4 className="font-bold">Dermal Remodeling</h4>
                  <p className="text-sm opacity-60">
                    New collagen integrates over 4–6 weeks.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══ JOURNEY (FULL TEXT RESTORED) ═══ */}
      <section className="py-28 bg-background">
        <div className="container mx-auto section-padding">

          <div className="mb-20">
            <h2 className="text-4xl font-light mb-4">
              The Patient <span className="text-clinic-teal italic">Journey</span>
            </h2>
            <p className="text-muted-foreground">
              Your path to transformation is professionally guided.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">

            <div>
              <h3 className="font-bold mb-4">Consultation</h3>
              <p className="text-muted-foreground text-sm">
                A comprehensive skin analysis to determine your goals, assess candidacy,
                and create a bespoke treatment protocol tailored to your unique anatomy.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Treatment</h3>
              <p className="text-muted-foreground text-sm">
                The procedure is performed using medical-grade devices and topical numbing
                for comfort. Treatment duration is typically 45–60 minutes.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Post-Care</h3>
              <p className="text-muted-foreground text-sm">
                Minimal downtime. We provide a specialized recovery kit and detailed instructions
                to optimize healing and ensure the best results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 bg-secondary/30 text-center">
        <div className="container mx-auto section-padding">
          <h2 className="text-5xl font-light mb-8">
            Begin Your Transformation
          </h2>

          <p className="text-muted-foreground mb-12">
            Rediscover your skin’s natural potential.
          </p>

          <Link
            to="/book"
            className="bg-foreground text-white px-12 py-5 rounded-full font-bold"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}