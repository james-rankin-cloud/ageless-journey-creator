import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CareersPage() {
  return (
    <>
      <Helmet>
        <title>Careers | Ageless Living™</title>
        <meta name="description" content="Join the Ageless Living team. Career opportunities coming soon." />
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center py-32 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="w-20 h-20 rounded-full bg-clinic-teal-light flex items-center justify-center mx-auto mb-8">
              <Briefcase className="w-10 h-10 text-clinic-teal" />
            </div>
            <h1 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-6">
              Careers
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Content coming soon.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-clinic-teal font-medium hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
