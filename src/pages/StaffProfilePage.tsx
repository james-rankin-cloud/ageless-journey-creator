import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  GraduationCap,
  Sparkles,
  Syringe,
  Dumbbell,
  Heart,
  Pill,
  Stethoscope,
  User,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import {
  getStaffBySlug,
  getStaffAltText,
  type StaffMember,
} from "@/data/staffData";

const locationNames: Record<string, string> = {
  langley: "Langley",
  kelowna: "Kelowna",
  victoria: "Victoria",
};

const treatmentIcons: Record<string, React.ElementType> = {
  "Skin Rejuvenation": Sparkles,
  "Hormone Balancing (BHRT)": Heart,
  "IV Therapy & NAD+": Syringe,
  "Health Weight Management": Dumbbell,
  "Microneedling & Peels": Sparkles,
  "Aesthetic Injectables": Stethoscope,
  Biohacking: Dumbbell,
  "Men's Health & Vitality": Heart,
  "Peptide Therapy": Pill,
  "Nutritional Counseling": Pill,
};

const ease = [0.16, 1, 0.3, 1] as const;

function SocialLink({
  icon: Icon,
  url,
}: {
  icon: React.ElementType;
  url?: string;
}) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center hover:bg-primary/15 hover:scale-110 transition-all duration-200"
    >
      <Icon className="h-4 w-4 text-foreground/70" />
    </a>
  );
}

function ProfileContent({ member }: { member: StaffMember }) {
  const hasSocials =
    member.instagram || member.facebook || member.linkedin || member.twitter;
  const hasTreatments = member.treatments.length > 0;

  return (
    <>
      <Helmet>
        <title>
          {member.name} — {member.role} | Ageless Living™
        </title>
        <meta
          name="description"
          content={`Meet ${member.name}, ${member.role} at Ageless Living™. ${member.bio.slice(0, 140)}...`}
        />
      </Helmet>

      {/* Back button */}
      <section className="pt-24 pb-0 bg-background">
        <div className="container mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <Link
              to="/our-team"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hero: Photo + Name + Title */}
      <section className="pt-8 pb-16 md:pb-20 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Photo — large, prominent */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary/20 shadow-xl">
                {member.image &&
                !member.image.includes("placeholder") &&
                !member.image.startsWith("/images/team/") ? (
                  <img
                    src={member.image}
                    alt={getStaffAltText(member)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/30">
                    <User className="w-24 h-24 text-muted-foreground/20" />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              className="lg:col-span-3 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              {/* Name + Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-foreground leading-tight mb-3">
                  {member.name}
                </h1>
                <p className="text-base md:text-lg text-primary font-semibold">
                  {member.role}
                </p>
              </div>

              {/* Location badges */}
              <div className="flex flex-wrap gap-2">
                {member.locations.map((loc) => (
                  <Link
                    key={loc}
                    to={`/locations/${loc}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary/50 text-sm text-foreground/80 hover:bg-secondary transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {locationNames[loc]}
                  </Link>
                ))}
              </div>

              {/* Social links */}
              {hasSocials && (
                <div className="flex gap-2.5">
                  <SocialLink icon={Instagram} url={member.instagram} />
                  <SocialLink icon={Facebook} url={member.facebook} />
                  <SocialLink icon={Linkedin} url={member.linkedin} />
                  <SocialLink icon={Twitter} url={member.twitter} />
                </div>
              )}

              {/* Bio */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  About
                </h2>
                <p className="text-muted-foreground leading-[1.85] text-[0.938rem]">
                  {member.bio}
                </p>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-foreground text-xs uppercase tracking-wider block mb-0.5">
                    Availability
                  </span>
                  {member.availability}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details: Education, Specializations, Treatments */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Education */}
            <motion.div
              className="bg-card rounded-2xl border border-border/20 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">
                  Education & Certifications
                </h3>
              </div>
              <ul className="space-y-3">
                {member.education.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Specializations */}
            <motion.div
              className="bg-card rounded-2xl border border-border/20 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Specializations</h3>
              </div>
              <ul className="space-y-3">
                {member.specializations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Treatments */}
            {hasTreatments && (
              <motion.div
                className="bg-card rounded-2xl border border-border/20 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Stethoscope className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">
                    Treatments & Services
                  </h3>
                </div>
                <ul className="space-y-3">
                  {member.treatments.map((t) => {
                    const TIcon = treatmentIcons[t] || Sparkles;
                    return (
                      <li
                        key={t}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <TIcon className="h-4 w-4 text-primary" />
                        </div>
                        {t}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Fun fact */}
          {member.funFact && (
            <motion.div
              className="mt-8 bg-card rounded-2xl border border-border/20 p-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
            >
              <h3 className="font-bold text-foreground mb-2">Fun Fact</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.funFact}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      {hasTreatments && (
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto section-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="max-w-lg mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-4">
                Ready to book with {member.name.split(",")[0].split(" ")[0]}?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Schedule your consultation and take the first step toward your
                wellness goals.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97] text-sm"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}

export default function StaffProfilePage() {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? getStaffBySlug(slug) : undefined;

  if (!member) {
    return (
      <div className="pt-32 pb-20 text-center">
        <div className="container mx-auto section-padding">
          <h1 className="text-3xl font-medium text-foreground mb-4">
            Team Member Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The profile you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/our-team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return <ProfileContent member={member} />;
}
