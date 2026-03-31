export type Location = "langley" | "kelowna" | "victoria";

export interface StaffMember {
  name: string;
  slug: string;
  role: string;
  credentials: string;
  image: string;
  locations: Location[];
  bio: string;
  education: string[];
  specializations: string[];
  treatments: string[];
  availability: string;
  funFact?: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  email?: string;
  phone?: string;
}

/**
 * Image naming convention: /images/team/[firstname-lastname]-headshot.webp
 * Alt text pattern: "Photo of [Name] - [Title], Ageless Living"
 *
 * To replace placeholders:
 * 1. Add your .webp images to /public/images/team/
 * 2. Update the `image` field below with the correct filename
 *
 * Current images use existing live URLs where available.
 * Members without photos use placeholder paths — upload real headshots there.
 */

export const staffMembers: StaffMember[] = [
  // ─── Owners / Founders ────────────────────────────────────────
  {
    name: "Michael Forbes, BSc Pharm",
    slug: "michael-forbes",
    role: "Owner, Pharmacist, Certified in Hormone Restoration",
    credentials: "BSc Pharm",
    image: "https://agelessliving.com/wp-content/uploads/2022/06/mike-768x768.png",
    locations: ["langley", "kelowna"],
    bio: "Michael founded Ageless Living with a vision to bring evidence-based wellness solutions to British Columbia. With decades of pharmaceutical expertise and a deep commitment to patient care, he leads our hormone restoration and longevity programs. His unique background in compounding pharmacy allows him to create customized treatment protocols that address each client's specific needs. Michael believes that optimal health is achievable at every age and is passionate about helping clients feel their best through scientifically-backed therapies.",
    education: [
      "BSc Pharmacy — University of British Columbia",
      "Compounding Pharmacist Certification",
      "Advanced Hormone Restoration Training",
      "Certified in Hormone Restoration Therapy",
    ],
    specializations: [
      "Hormone Restoration (BHRT)",
      "Compounding Pharmacy",
      "Longevity Medicine",
      "Peptide Therapy Protocols",
    ],
    treatments: ["Hormone Balancing (BHRT)", "IV Therapy & NAD+", "Peptide Therapy"],
    availability: "Mon–Fri 9:00am–5:00pm",
    email: "michael@agelessliving.ca",
    phone: "+1 (236) 326-6830",
  },
  {
    name: "Dr. Jean Paul Lim, MD, FRCPC",
    slug: "dr-jean-paul-lim",
    role: "Owner, Internal Medicine, Complex Care, and Longevity Specialist",
    credentials: "MD, FRCPC",
    image: "https://agelessliving.com/wp-content/uploads/2022/06/Screenshot-2024-06-14-at-10.23.47%E2%80%AFAM-768x767.png",
    locations: ["langley", "kelowna"],
    bio: "Dr. Lim brings a rare combination of internal medicine expertise and longevity science to Ageless Living. Board-certified and fellowship-trained, he designs personalized biohacking and metabolic protocols that help clients unlock peak performance and vitality. With years of experience in complex care, Dr. Lim takes a comprehensive approach to each patient — addressing root causes rather than symptoms. His focus on evidence-based longevity medicine makes him a trusted partner for clients seeking to optimize their healthspan.",
    education: [
      "MD — University of Alberta",
      "FRCPC — Internal Medicine (Royal College of Physicians and Surgeons of Canada)",
      "Fellowship in Metabolic Health",
      "Advanced Longevity Medicine Training",
    ],
    specializations: [
      "FRCPC Internal Medicine",
      "Complex Care",
      "Longevity & Anti-Aging Medicine",
      "Metabolic Health Optimization",
    ],
    treatments: ["Biohacking", "Hormone Balancing (BHRT)", "Health Weight Management"],
    availability: "Mon–Thu 9:00am–5:00pm",
    email: "info@agelessliving.ca",
    phone: "+1 (236) 326-6830",
  },
  {
    name: "Sarita Hutton",
    slug: "sarita-hutton",
    role: "Owner, Aesthetic Nurse Specialist, Director of Aesthetic Medicine",
    credentials: "RN, Aesthetic Nurse Specialist",
    image: "https://agelessliving.com/wp-content/uploads/2022/06/4-768x768.png",
    locations: ["victoria"],
    bio: "Sarita is a passionate aesthetic nurse specialist who leads our Victoria clinic with artistry, precision, and a deep commitment to natural-looking results. Her advanced training in facial aesthetics and skin science has made her one of BC's most sought-after aesthetic practitioners. As Director of Aesthetic Medicine, Sarita sets the standard of care across all Ageless Living aesthetic services. She believes that every client deserves a personalized treatment plan that enhances their natural beauty while supporting long-term skin health.",
    education: [
      "Registered Nurse (RN)",
      "Aesthetic Nurse Specialist Certification",
      "Advanced Injectable Training — Allergan & Galderma",
      "Skin Science Diploma",
    ],
    specializations: [
      "Aesthetic Nurse Specialist",
      "Advanced Injectables (Botox, Filler)",
      "Skin Science & Rejuvenation",
      "Facial Aesthetics & Contouring",
    ],
    treatments: ["Skin Rejuvenation", "Aesthetic Injectables", "IV Therapy & NAD+"],
    availability: "Mon–Fri 9:00am–5:00pm · Sat by appointment",
    instagram: "https://www.instagram.com/agelessliving_bc/",
    email: "wellness@agelessliving.ca",
    phone: "+1 (250) 590-5787",
  },

  // ─── Physicians / Specialists ─────────────────────────────────
  {
    name: "Dr. Tracey Lotze, MD",
    slug: "dr-tracey-lotze",
    role: "Hormone and Sexual Health Specialist",
    credentials: "MD",
    image: "https://agelessliving.com/wp-content/uploads/2024/06/Dr.Tracey-White-Dress-uncropped-13-1-768x793.jpg",
    locations: ["kelowna", "victoria"],
    bio: "Dr. Lotze specializes in hormone optimization and sexual health, bringing compassionate care and deep medical knowledge to every consultation. She helps clients regain confidence and vitality through personalized hormone protocols tailored to their unique physiology. With a focus on both men's and women's health, Dr. Lotze takes a thorough, evidence-based approach to hormone therapy — ensuring every patient receives comprehensive assessment, ongoing monitoring, and protocols optimized for long-term wellness.",
    education: [
      "MD — McMaster University",
      "Hormone Optimization Fellowship",
      "Women's Health Certification",
      "Sexual Health Medicine Training",
    ],
    specializations: [
      "Hormone Optimization (BHRT)",
      "Sexual Health Medicine",
      "Women's Health",
      "Men's Hormone Therapy",
    ],
    treatments: ["Hormone Balancing (BHRT)", "Men's Health & Vitality", "Peptide Therapy"],
    availability: "Tue–Fri 9:00am–4:30pm",
  },
  {
    name: "Dr. Jason Boxtart, ND",
    slug: "dr-jason-boxtart",
    role: "Men's Health Specialist",
    credentials: "ND",
    image: "https://agelessliving.com/wp-content/uploads/2024/04/jason-768x768.jpg",
    locations: ["kelowna", "victoria"],
    bio: "Dr. Boxtart is a naturopathic doctor focused on men's health and vitality. His integrative approach combines evidence-based natural medicine with cutting-edge peptide therapy to help men feel their strongest at every stage of life. He takes a holistic view of men's wellness — addressing hormonal balance, metabolic function, stress resilience, and physical performance through customized treatment plans that get real results.",
    education: [
      "ND — Boucher Institute of Naturopathic Medicine",
      "Men's Health Specialization",
      "Peptide Protocol Training",
      "Integrative Medicine Certification",
    ],
    specializations: [
      "Naturopathic Medicine",
      "Men's Health & Vitality",
      "Peptide Protocols",
      "Integrative Wellness",
    ],
    treatments: ["Men's Health & Vitality", "Peptide Therapy", "Health Weight Management"],
    availability: "Mon–Fri 9:00am–5:00pm",
  },

  // ─── Kelowna Nutrition Team ───────────────────────────────────
  {
    name: "Constanza Moraga Herrera",
    slug: "constanza-moraga-herrera",
    role: "Certified Nutritional Practitioner, Lifestyle Medicine & Microbiota Specialist",
    credentials: "CNP",
    image: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-4.png",
    locations: ["kelowna"],
    bio: "Constanza takes a holistic approach to nutrition, specializing in lifestyle medicine and the gut microbiome. She designs personalized plans that complement our clinical treatments, helping clients fuel their transformation from the inside out. Her expertise in microbiota science allows her to address the root causes of digestive issues, inflammation, and metabolic imbalance — creating sustainable dietary protocols that support whole-body wellness.",
    education: [
      "Certified Nutritional Practitioner (CNP)",
      "Lifestyle Medicine Certification",
      "Microbiota & Gut Health Specialist Training",
      "Holistic Wellness Certification",
    ],
    specializations: [
      "Lifestyle Medicine",
      "Gut Microbiota & Digestive Health",
      "Metabolic Nutrition",
      "Holistic Wellness",
    ],
    treatments: ["Nutritional Counseling", "Health Weight Management"],
    availability: "Mon–Thu 9:00am–4:00pm",
  },
  {
    name: "Rachel Bowman Fassio, BSc, CN, RHN",
    slug: "rachel-bowman-fassio",
    role: "Clinical and Holistic Nutritionist",
    credentials: "BSc, CN, RHN",
    image: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-3.png",
    locations: ["kelowna"],
    bio: "Rachel's evidence-based nutritional counseling pairs perfectly with our Kelowna clinic's treatment offerings. With a Bachelor of Science and certifications in both clinical and holistic nutrition, she guides clients toward sustainable lifestyle changes that amplify their clinical results. Rachel takes a science-first approach to dietary planning, combining conventional nutritional science with holistic principles to create personalized protocols for each client.",
    education: [
      "BSc — Nutritional Science",
      "Certified Clinical Nutritionist (CN)",
      "Registered Holistic Nutritionist (RHN)",
      "Supplement Guidance Specialist",
    ],
    specializations: [
      "Clinical Nutrition",
      "Holistic Nutrition",
      "Dietary Planning & Protocols",
      "Supplement Guidance",
    ],
    treatments: ["Nutritional Counseling"],
    availability: "Mon–Fri 9:00am–5:00pm",
  },

  // ─── Langley Aesthetics Team ──────────────────────────────────
  {
    name: "Yvonne Ng",
    slug: "yvonne-ng",
    role: "Certified Medical Aesthetician",
    credentials: "Certified Medical Aesthetician",
    image: "https://agelessliving.com/wp-content/uploads/2025/09/yvonne-bio-photo-e1758061895992-768x768.jpg",
    locations: ["langley"],
    bio: "Yvonne's meticulous approach to skin health has earned her a loyal following at our Langley clinic. Certified in advanced aesthetics, she creates customized skin rejuvenation plans that deliver visible, lasting results. With a keen eye for detail and a passion for helping clients achieve their best skin, Yvonne stays current with the latest techniques in medical aesthetics to ensure every treatment is both safe and effective.",
    education: [
      "Certified Medical Aesthetician",
      "Advanced Microneedling Certification",
      "Chemical Peel Specialist Training",
      "HydraFacial Certification",
    ],
    specializations: [
      "Medical Aesthetics",
      "Microneedling & Collagen Induction",
      "Chemical Peels",
      "Customized Skin Treatments",
    ],
    treatments: ["Skin Rejuvenation", "Microneedling & Peels"],
    availability: "Mon–Fri 10:00am–6:00pm",
  },
  {
    name: "Avnit Bhullar",
    slug: "avnit-bhullar",
    role: "Medical Aesthetician",
    credentials: "Medical Aesthetician",
    image: "https://agelessliving.com/wp-content/uploads/2024/06/Diseno-sin-titulo-5.png",
    locations: ["langley"],
    bio: "Avnit combines artistic vision with clinical precision to deliver beautiful aesthetic results at our Langley clinic. Her warm approach helps clients feel at ease during every treatment, making their experience as enjoyable as the results. Avnit specializes in facial contouring and skin analysis, working closely with each client to develop treatment plans that enhance their natural features.",
    education: [
      "Medical Aesthetician Diploma",
      "Aesthetic Injectable Assist Training",
      "Facial Contouring Certification",
      "Skin Analysis Specialist",
    ],
    specializations: [
      "Aesthetic Treatments",
      "Skin Analysis",
      "Facial Contouring",
      "Client Care & Comfort",
    ],
    treatments: ["Skin Rejuvenation", "Aesthetic Injectables"],
    availability: "Tue–Sat 9:00am–5:00pm",
  },

  // ─── Victoria Aesthetics Team ─────────────────────────────────
  {
    name: "Jenny Hwang, RN",
    slug: "jenny-hwang",
    role: "Aesthetic Nurse Mentee",
    credentials: "RN",
    image: "https://agelessliving.com/wp-content/uploads/2025/04/1-768x768.png",
    locations: ["victoria"],
    bio: "Jenny brings registered nursing expertise to our Victoria aesthetic practice. Under the mentorship of Sarita Hutton, she is building her skills in advanced aesthetic nursing while delivering exceptional care to every client. Jenny's clinical precision and gentle technique make her a trusted choice for skin rejuvenation and IV therapy treatments. Her nursing background ensures the highest standard of safety and patient care.",
    education: [
      "BSN — Registered Nurse (RN)",
      "Aesthetic Nursing Mentee Program",
      "IV Therapy Specialist Certification",
      "Patient Safety & Care Training",
    ],
    specializations: [
      "Aesthetic Nursing (Mentee)",
      "Registered Nursing",
      "IV Therapy",
      "Patient Care & Safety",
    ],
    treatments: ["Skin Rejuvenation", "IV Therapy & NAD+"],
    availability: "Mon–Fri 9:00am–5:00pm",
  },
  {
    name: "Madison Allen",
    slug: "madison-allen",
    role: "Medical Aesthetician",
    credentials: "Medical Aesthetician",
    image: "https://agelessliving.com/wp-content/uploads/2024/04/Ageless-Website-Team-Photos-2-768x768.png",
    locations: ["victoria"],
    bio: "Madison is a skilled medical aesthetician at our Victoria clinic, delivering personalized skin treatments with care and precision. Her passion for aesthetics and commitment to client satisfaction make her an integral part of the Victoria team. Madison works closely with each client to understand their skin goals and create customized treatment plans that deliver visible, lasting results.",
    education: [
      "Medical Aesthetician Diploma",
      "Advanced Skin Treatment Certification",
      "Client Service Excellence Training",
    ],
    specializations: [
      "Medical Aesthetics",
      "Skin Treatments",
      "Client Consultation",
      "Personalized Treatment Plans",
    ],
    treatments: ["Skin Rejuvenation", "Aesthetic Injectables"],
    availability: "Mon–Fri 9:00am–5:00pm",
  },

  // ─── Clinic Managers / MOAs ───────────────────────────────────
  {
    name: "Shelley McBride",
    slug: "shelley-mcbride",
    role: "MOA, Clinic Manager",
    credentials: "MOA",
    image: "https://agelessliving.com/wp-content/uploads/2025/09/Diseno-sin-titulo-6.png",
    locations: ["langley"],
    bio: "Shelley is the welcoming face of our Langley clinic. As clinic manager and medical office assistant, she ensures every client's experience is seamless from booking to follow-up. Shelley coordinates care across our entire clinical team, managing scheduling, patient communications, and day-to-day operations with warmth and efficiency. Her dedication to client experience makes the Langley clinic feel like a true wellness home.",
    education: [
      "Medical Office Administration (MOA) Diploma",
      "Client Experience Certification",
      "Healthcare Operations Management",
    ],
    specializations: [
      "Clinic Operations & Management",
      "Patient Coordination",
      "Client Experience",
      "Scheduling & Administration",
    ],
    treatments: [],
    availability: "Mon–Fri 8:30am–5:00pm",
  },
  {
    name: "Melissa Zitterer",
    slug: "melissa-zitterer",
    role: "Clinic Manager, MOA",
    credentials: "MOA",
    image: "https://agelessliving.com/wp-content/uploads/2025/09/image0-10-e1757724838812.jpeg",
    locations: ["kelowna"],
    bio: "Melissa keeps our Kelowna clinic running smoothly, managing scheduling, client communications, and day-to-day operations with efficiency and warmth. As your first point of contact, she ensures every visit to Ageless Living Kelowna is comfortable and well-organized. Melissa's attention to detail and caring approach make her an essential part of the Kelowna team.",
    education: [
      "Medical Office Administration (MOA) Diploma",
      "Client Relations Training",
      "Healthcare Operations Certificate",
    ],
    specializations: [
      "Clinic Operations & Management",
      "Client Relations",
      "Schedule Management",
      "Patient Communication",
    ],
    treatments: [],
    availability: "Mon–Fri 8:30am–5:00pm",
  },
  {
    name: "Lucy Watson",
    slug: "lucy-watson",
    role: "Clinic Manager",
    credentials: "",
    image: "https://agelessliving.com/wp-content/uploads/2024/04/3-768x768.png",
    locations: ["victoria"],
    bio: "Lucy oversees the Victoria clinic with a keen eye for client experience and operational excellence. Her warm, organized approach ensures every visit is comfortable and efficient. Lucy works closely with the entire Victoria team to maintain the high standard of care that Ageless Living is known for, making sure every client feels valued from the moment they walk through the door.",
    education: [
      "Business Administration Diploma",
      "Healthcare Management Certificate",
      "Client Experience Training",
    ],
    specializations: [
      "Clinic Management",
      "Client Experience",
      "Team Coordination",
      "Operational Excellence",
    ],
    treatments: [],
    availability: "Mon–Fri 8:30am–5:00pm",
  },
  {
    name: "Natalie King",
    slug: "natalie-king",
    role: "Medical Office Assistant",
    credentials: "MOA",
    image: "/images/team/natalie-king-headshot.webp",
    locations: ["victoria"],
    bio: "Natalie supports our Victoria clinic as a dedicated medical office assistant, helping ensure every client interaction is smooth and professional. She assists with scheduling, patient intake, and administrative coordination — making the clinic experience seamless from start to finish. Natalie's friendly and efficient approach makes her a valued member of the Victoria team.",
    education: [
      "Medical Office Assistant (MOA) Certification",
      "Patient Intake & Administration Training",
    ],
    specializations: [
      "Medical Office Administration",
      "Patient Intake & Scheduling",
      "Client Support",
    ],
    treatments: [],
    availability: "Mon–Fri 9:00am–5:00pm",
  },
];

// ─── Helper functions ──────────────────────────────────────────

/** Get all staff at a specific location */
export function getStaffByLocation(location: Location): StaffMember[] {
  return staffMembers.filter((m) => m.locations.includes(location));
}

/** Find a single staff member by URL slug */
export function getStaffBySlug(slug: string): StaffMember | undefined {
  return staffMembers.find((m) => m.slug === slug);
}

/** Get the 3 featured owners/founders for homepage */
export function getFeaturedStaff(): StaffMember[] {
  return staffMembers.filter((m) =>
    ["michael-forbes", "dr-jean-paul-lim", "sarita-hutton"].includes(m.slug)
  );
}

/** Generate proper alt text for a staff photo */
export function getStaffAltText(member: StaffMember): string {
  return `Photo of ${member.name} - ${member.role}, Ageless Living`;
}
