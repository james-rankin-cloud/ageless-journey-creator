import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, User } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const teamData = {
  langley: [
    {
      name: "Dr. Jean Paul Lim, MD",
      role: "Clinic Owner & Specialist",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtqNP-A9VcnfnvBirGUXn7l3VfseUXTY_uDJL9nmMdUNbWzm74_C2L3_WhdRF6A27sVCEl9t25gg2DDY_EE70Jnlmrfp0jRqlUmrNaBY4Gabci_CGAo6cXPeGUfQBPZm61Q9bF1JqDBH5M_X0RY6GwVZKjwOCNaK8KF2QprO_qUKlLZu7OO53jSIoPvYarwQ1JIBNbq6wxi4GfDzcEQ58uP3-g6uK1JzpI9bgLtR-70TJrm5lwm5yFRPT3y_FdGeoUPTm2xx3jqSQ",
    },
    {
      name: "Michael Forbes, BSc Pharm",
      role: "Clinic Owner & Pharmacist",
    },
    {
      name: "Shelley McBride",
      role: "MOA & Clinic Manager",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArveSqpMC0VQ49soZaRoqmNod3u0z4fVVS78-dQVf8qGHIAhJDTcB5Tl-7AlchhGRJZpYWBOGMK_rrcVNKYXnRn4Gs_HviFqw5y7cVLK2Y945Oql2lj8vHaHcxRWNThPf9XwPpRkgnn-rs4cgNvo4Sie1qGgvy6gLVHA0_RXnm6s4nWzsQFRjRYwXQ3FxPq9FRUVEfUv7f7OBUiGICJZFCMEkAYoIbAM--4BHQUCjnk4DaHnHXzsNh6t4-G3uAmiydhy3i1NJoT7Q",
    },
    {
      name: "Yvonne Ng",
      role: "Medical Aesthetician",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgVQyxVXI8lfyrrUy0dHrF50nmoN00hyzXlt6bLaSfMZvEmnF9mVQf2thQxfbpgf27Vgs_7IyjzfGCOinU06w_JgpNQXD402B-viaOC8vIM_lOa4MD27LXoXQ12mYLxtYdFDWXj-Py1ULno6DbOWI-THKZSPo0MOz7ZJKh0OSZU4K7GpLgcOus7qWuWkag1YvPPoUn-1Y3v0SyNVkofA2jcrcxoomWHOPofHCXp42VX2Dd88h-Ic75ykKf1g_FEELyZ0Ny6vL-KWc",
    },
    {
      name: "Avnit Bhullar",
      role: "Medical Aesthetician",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXAFyjkNd76XGk96hVnNVVc32Dq4folbnsD1XymLg5p-Re_0rJE9QCVp9-j3MUwlMrUMVVRXWK2S0xi95dmK_Tbre_uJaYS21wI8WPkCuQvGni-_Lf936rxdsJFSNz5CRTc-Eb3CiJBCM8nJ6SMscqbrUmwkkb-AZtml2pRNZh48YzuK-oO-z70CEqcQUsAbgkgJd_lTKzFZ9IfnM381M6QK81TBVGTIs6_1osePP-kIk8F0zshLMLVcdzKAEfPXBi3zqaP8S1CdE",
    },
  ],
  kelowna: [
    {
      name: "Constanza Moraga Herrera",
      role: "Nutritional Practitioner",
    },
    {
      name: "Dr. Jason Boxtart, ND",
      role: "Naturopathic Physician",
    },
    {
      name: "Dr. Tracey Lotze, MD",
      role: "Hormone Specialist",
    },
    {
      name: "Rachel Bowman Fassio",
      role: "Clinical Nutritionist",
    },
    {
      name: "Melissa Zitterer",
      role: "Clinic Manager",
    },
  ],
  victoria: [
    {
      name: "Sarita Hutton",
      role: "Owner & Aesthetic Nurse",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiHjYXDWW24kDibUzo4XS25DHMbtzE6JgGI-OsH_1mGM87nFAyS-wpCECFtq8t9StAFbDD7I7KboJx1-jjWmo7ksZk1GrNs_XvZdznlq53WO3Px6I_-Do128OtISeMXOq23HCvRM32_0haELBh0NQ805hReShv3W7AJdg_eCRrfuW-_KDxcl1aLRTLIbbcLbhUfDU1ex2QN9TJFjZzfXnmmILkb_pzpT16SR8ORWgvPd9eA-anf5tnlnbpMYtletJEZ7LY7yV1JeA",
    },
    {
      name: "Jenny Hwang, RN",
      role: "Aesthetic Nurse",
    },
    {
      name: "Madison Allen",
      role: "Medical Aesthetician",
    },
    {
      name: "Natalie King",
      role: "Medical Office Assistant",
    },
    {
      name: "Lucy Watson",
      role: "Clinic Manager",
    },
  ],
};

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease }}
      className="bg-card rounded-xl overflow-hidden border border-border/20 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-square bg-secondary/20 overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-16 h-16 text-muted-foreground/30" />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground leading-tight mb-2">{member.name}</h3>
        <p className="text-xs font-bold uppercase tracking-widest text-clinic-teal">{member.role}</p>
      </div>
    </motion.div>
  );
}

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
      <section className="pt-32 pb-16 md:pb-20 bg-secondary/30">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="text-clinic-teal font-bold tracking-widest uppercase text-xs">
                Collaborative Care
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Our Team
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                The brainchild of pharmacist and physician (MD) founders, Ageless blends the best of traditional
                medicine with groundbreaking wellness therapies, taking your health to the next level.
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5s-5j0PK6Z9u1VaCylnq-2t1K-WwqAPnTV3iAln-3Nn5g9nQFZtNvaziuYixrJ3bWsW0oKQ5_hcBPrLKJPp0-JcqQeO9LMblxtM7L1tfc5JoEWMhcMKotuh-MeDlCNM8jJigWNmGvagimeiWOYUykhDKRhnoJszS_zwUnOmWhSqi7Bl2Y1mc3Ltt7TVjt7S6rl8GA2943cbAwZXDC8M8NOJuQpfpf0WdFcTc9pd6byIujJxiSBdOrt4yTIFB8xXEOS_fKHeoLWGA"
                  alt="Professional medical clinic founders"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-8 rounded-xl shadow-lg max-w-xs border border-border/40">
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  "Integrating traditional precision with future-focused wellness."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Filter Navigation */}
      <section className="sticky top-[73px] z-40 bg-background/80 backdrop-blur-xl py-6 border-b border-border/20">
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
      <main className="container mx-auto section-padding py-20 md:py-24 space-y-32">
        {/* Langley Section */}
        <section id="langley" className="scroll-mt-40">
          <div className="mb-12 border-l-4 border-clinic-teal pl-6">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Langley Clinic</h2>
            <p className="text-muted-foreground mt-2">Specialized care and innovative wellness protocols.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.langley.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* Kelowna Section */}
        <section id="kelowna" className="scroll-mt-40">
          <div className="mb-12 border-l-4 border-clinic-teal pl-6">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Kelowna Sanctuary</h2>
            <p className="text-muted-foreground mt-2">Integrative therapies in a peaceful clinical setting.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.kelowna.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* Victoria Section */}
        <section id="victoria" className="scroll-mt-40">
          <div className="mb-12 border-l-4 border-clinic-teal pl-6">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Victoria Practice</h2>
            <p className="text-muted-foreground mt-2">Advanced aesthetic medicine and personalized care.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.victoria.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
