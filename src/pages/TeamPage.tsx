import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  getStaffByLocation,
  getStaffAltText,
  type StaffMember,
} from "@/data/staffData";

const ease = [0.16, 1, 0.3, 1] as const;

function TeamCard({
  member,
  section,
}: {
  member: StaffMember;
  section: string;
}) {
  return (
    <Link to={`/our-team/${member.slug}`} state={{ from: section }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="bg-card rounded-xl overflow-hidden border border-border/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
      >
        <div className="aspect-square bg-secondary/20 overflow-hidden">
          {member.image &&
          !member.image.includes("placeholder") &&
          !member.image.startsWith("/images/team/") ? (
            <img
              src={member.image}
              alt={getStaffAltText(member)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User className="w-16 h-16 text-muted-foreground/30" />
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-base font-bold text-foreground leading-tight mb-1">
            {member.name}
          </h3>
          <p className="text-xs font-bold uppercase tracking-widest text-clinic-teal">
            {member.role}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

const langleyTeam = getStaffByLocation("langley");
const kelownaTeam = getStaffByLocation("kelowna");
const victoriaTeam = getStaffByLocation("victoria");

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team | Ageless Living™ — Expert Clinical Care</title>
        <meta
          name="description"
          content="Meet the dedicated team of physicians, specialists, and clinical professionals behind Ageless Living™ across Victoria, Langley, and Kelowna."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-10 md:pb-12 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="text-clinic-teal font-bold tracking-widest uppercase text-xs">
                Collaborative Care
              </span>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-tight">
                Our Team
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                The brainchild of pharmacist and physician (MD) founders,
                Ageless blends the best of traditional medicine with
                groundbreaking wellness therapies, taking your health to the
                next level.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/src/assets/our-team-1.jpg"
                  alt="Professional medical clinic founders"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card p-5 rounded-xl shadow-lg max-w-xs border border-border/40">
                <p className="text-xs italic text-muted-foreground leading-relaxed">
                  "Integrating traditional precision with future-focused
                  wellness."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Filter Navigation */}
      <section className="sticky top-[73px] z-40 bg-background/80 backdrop-blur-xl py-3 border-b border-border/20">
        <div className="container mx-auto section-padding">
          <div className="flex justify-center gap-4 md:gap-12 overflow-x-auto">
            <a
              href="#langley"
              className="group flex items-center gap-2 px-6 py-2 rounded-full hover:bg-secondary/20 transition-all"
            >
              <MapPin className="w-4 h-4 text-clinic-teal group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm">Langley</span>
            </a>
            <a
              href="#kelowna"
              className="group flex items-center gap-2 px-6 py-2 rounded-full hover:bg-secondary/20 transition-all"
            >
              <MapPin className="w-4 h-4 text-clinic-teal group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm">Kelowna</span>
            </a>
            <a
              href="#victoria"
              className="group flex items-center gap-2 px-6 py-2 rounded-full hover:bg-secondary/20 transition-all"
            >
              <MapPin className="w-4 h-4 text-clinic-teal group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm">Victoria</span>
            </a>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <main className="container mx-auto section-padding py-12 md:py-16 space-y-16">
        {/* Langley Section */}
        <section id="langley" className="scroll-mt-40">
          <div className="mb-6 border-l-4 border-clinic-teal pl-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Langley Clinic
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Specialized care and innovative wellness protocols.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {langleyTeam.map((member) => (
              <TeamCard key={member.slug} member={member} section="langley" />
            ))}
          </div>
        </section>

        {/* Kelowna Section */}
        <section id="kelowna" className="scroll-mt-40">
          <div className="mb-6 border-l-4 border-clinic-teal pl-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Kelowna Sanctuary
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Integrative therapies in a peaceful clinical setting.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {kelownaTeam.map((member) => (
              <TeamCard key={member.slug} member={member} section="kelowna" />
            ))}
          </div>
        </section>

        {/* Victoria Section */}
        <section id="victoria" className="scroll-mt-40">
          <div className="mb-6 border-l-4 border-clinic-teal pl-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Victoria Practice
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Advanced aesthetic medicine and personalized care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {victoriaTeam.map((member) => (
              <TeamCard key={member.slug} member={member} section="victoria" />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
