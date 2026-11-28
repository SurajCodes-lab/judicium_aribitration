/**
 * Advocate profiles for Judicium Arbitration.
 *
 * Powers the /team hub and the per-advocate /team/[slug] pages. Each advocate is a
 * distinct schema.org Person entity with their own URL, which is the E-E-A-T signal
 * Google and answer engines look for when deciding whether a legal site is written
 * by identifiable, qualified practitioners rather than anonymously.
 *
 * Every field below is derived from the client-supplied bio and experience copy.
 * Nothing here asserts a credential the source material did not state — see
 * docs/SEO-PLAYBOOK.md and the Week 1 implementation log for the fields that still
 * need client confirmation (bar enrolment numbers, admission years, languages).
 */

export interface AdvocateApproach {
  title: string;
  detail: string;
}

export interface TeamMember {
  /** URL segment — /team/[slug]. Stable; changing one needs a redirect. */
  slug: string;
  name: string;
  /** Professional designation shown under the name. */
  title: string;
  /**
   * Shorter designation used only in the <title> tag, for advocates whose full
   * designation pushes "Name — Title | Judicium Arbitration" past 62
   * characters. The full `title` is still what the page, card and schema show.
   */
  titleShort?: string;
  /** Position within the firm. */
  role: string;
  image: string;
  /**
   * One-line positioning statement. Used on the profile card, the meta
   * description and the OG image — so it must read as a complete sentence.
   */
  headline: string;
  bio: string;
  experience: string;
  /** Years in practice, as stated in the source copy. Drives the hero badge. */
  yearsExperience: number;
  /** Geographic reach of the practice. */
  jurisdiction: string;
  officeBase: string;
  /** Empty when the source profile does not state it — never inferred. */
  education: string[];
  /** Ten skills per advocate — the expertise grid and Person.knowsAbout. */
  specializations: string[];
  /** Firm practice-area slugs this advocate works in — internal linking. */
  practiceAreaSlugs: string[];
  /** Forums named in, or directly implied by, the source experience copy. */
  courtsAndTribunals: string[];
  /** Non-contentious work: drafting, vetting, opinions. */
  advisoryServices: string[];
  order: number;
}

/** Firm-wide professional approach, shown on every advocate profile. */
export const professionalApproach: AdvocateApproach[] = [
  {
    title: "Professional Integrity",
    detail:
      "High standards of professional ethics, responsibility and accountability in every engagement.",
  },
  {
    title: "Strategic Representation",
    detail:
      "Well-researched, carefully considered legal strategies built on the facts and the governing statute.",
  },
  {
    title: "Client-Centric Approach",
    detail:
      "Understanding the commercial objective behind the dispute, then advising toward it.",
  },
  {
    title: "Confidentiality",
    detail:
      "Discretion maintained across arbitral proceedings, settlement talks and advisory work.",
  },
  {
    title: "Practical Solutions",
    detail:
      "Identifying remedies that are legally sustainable and commercially realistic to enforce.",
  },
  {
    title: "Early Dispute Resolution",
    detail:
      "Resolving matters before they escalate wherever the facts and the contract allow it.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    slug: "nadeem-qureshi",
    name: "Nadeem Qureshi",
    title: "Founder & CEO",
    role: "Co-Founder",
    image: "/Founder.jpeg",
    headline:
      "Founder of Judicium Arbitration, with two decades of dispute-lifecycle experience across the Delhi district courts and commercial arbitration.",
    bio: "With 20 years of extensive experience at KKD Court, Delhi, Nadeem brings unparalleled understanding of the dispute lifecycle and ground realities of India's legal system. His deep insights into high-stakes arbitration matters and intricate knowledge of Delhi's legal landscape form the cornerstone of Judicium's strategic approach.",
    experience:
      "20+ years of practice specializing in arbitration and dispute resolution at KKD Court, Delhi. Extensive experience in complex commercial arbitration, court procedures, and legal risk assessment.",
    yearsExperience: 20,
    jurisdiction: "Delhi NCR & North India",
    officeBase: "New Delhi",
    education: [
      "LL.B - CCS University / M.M.H College",
      "LL.M - Meerut College",
    ],
    specializations: [
      "Commercial Arbitration",
      "Dispute Resolution Strategy",
      "Court Procedures & Practice",
      "Legal Risk Assessment",
      "High-Stakes Arbitration Matters",
      "Pre-Litigation Dispute Assessment",
      "Arbitral Award Enforcement",
      "Case Strategy & Client Advisory",
      "Delhi District Court Practice",
      "Negotiation & Settlement",
    ],
    practiceAreaSlugs: [
      "arbitration-alternative-dispute-resolution",
      "dispute-resolution-litigation",
      "corporate-commercial",
    ],
    courtsAndTribunals: [
      "Karkardooma (KKD) District Courts, Delhi",
      "District Courts across Delhi",
      "Ad-hoc and institutional arbitral tribunals",
    ],
    advisoryServices: [
      "Arbitration clause drafting and review",
      "Pre-litigation dispute assessment and legal opinions",
      "Commercial contract risk review",
      "Settlement and negotiation strategy",
    ],
    order: 1,
  },
  {
    slug: "dr-ravikant-bhardwaj",
    name: "Dr. Ravikant Bhardwaj",
    title: "Senior Advocate",
    role: "Partner",
    image: "/Ravikant.jpeg",
    headline:
      "Partner advising on arbitration, competition law and sectoral regulation, with a doctorate from IIT Kharagpur and teaching experience at NLU Jodhpur.",
    bio: "Dr. Ravikant Bhardwaj brings great leadership, enthusiasm, advice and practicality in forming and solving complex disputes. He is composed, solution-oriented, and able to deal with complex business transactions, making him a highly valued member of the firm.",
    experience:
      "Over a decade of experience advising clients in dispute resolution in courts and arbitration. Previously affiliated with Indian Institute of Corporate Affairs (IICA) dealing with sectoral regulations, competition law and arbitration. Has taught and undertaken research on arbitration law at National Law University Jodhpur.",
    yearsExperience: 10,
    jurisdiction: "Pan India",
    officeBase: "Delhi NCR",
    education: [
      "PhD - Rajiv Gandhi School of Intellectual Property Law, IIT Kharagpur",
      "LL.M - NALSAR University of Law, Hyderabad",
      "LL.B - MDU Rohtak",
    ],
    specializations: [
      "Arbitration Law & Strategy",
      "Competition Law",
      "Sectoral Regulations",
      "Early Dispute Resolution",
      "Complex Business Transactions",
      "Academic Research in Arbitration",
      "Intellectual Property Law",
      "Regulatory Advisory",
      "Legal Research & Opinion Writing",
      "Commercial Dispute Resolution",
    ],
    practiceAreaSlugs: [
      "arbitration-alternative-dispute-resolution",
      "competition-antitrust",
      "intellectual-property-rights",
      "corporate-commercial",
    ],
    courtsAndTribunals: [
      "Ad-hoc and institutional arbitral tribunals",
      "Competition Commission of India",
      "District Courts and High Courts",
    ],
    advisoryServices: [
      "Competition and sectoral regulatory compliance advice",
      "Arbitration strategy and clause drafting",
      "Legal opinions and research memoranda",
      "Transaction risk assessment",
    ],
    order: 3,
  },
  {
    slug: "suryakant-bhardwaj",
    name: "Suryakant Bhardwaj",
    title: "Senior Advocate",
    role: "Partner",
    image: "",
    headline:
      "Partner guiding clients through the full arbitration process — from drafting the clause to enforcing the award — with nine years of court practice in Panipat.",
    bio: "A dedicated advocate specializing in arbitration and alternative dispute resolution. Known for his hardworking nature, ability to go deeper in dispute solving, and eye for detail. He assists individuals, businesses, and organizations in resolving disputes efficiently, confidentially, and cost-effectively.",
    experience:
      "Nine years of practice in various Courts in Panipat and engaging in arbitration law. Extensive experience in commercial, contractual, and civil dispute matters. Provides strategic guidance throughout the arbitration process—from drafting arbitration agreements, filing various applications in court and representing clients before arbitral tribunals to negotiating settlements and enforcing awards.",
    yearsExperience: 9,
    jurisdiction: "Haryana & Delhi NCR",
    officeBase: "Panipat",
    education: [
      "LL.B - Government Law College, Mumbai",
      "LL.M - MDU Rohtak (Corporate Law and Arbitration)",
    ],
    specializations: [
      "Arbitration & Alternative Dispute Resolution",
      "Commercial Disputes",
      "Contractual Matters",
      "Civil Disputes",
      "Arbitration Agreement Drafting",
      "Settlement Negotiations",
      "Award Enforcement",
      "Interim Relief Applications",
      "Section 34 Challenges",
      "Client Advisory & Case Preparation",
    ],
    practiceAreaSlugs: [
      "arbitration-alternative-dispute-resolution",
      "dispute-resolution-litigation",
      "corporate-commercial",
    ],
    courtsAndTribunals: [
      "District and Civil Courts, Panipat",
      "Ad-hoc and institutional arbitral tribunals",
      "Courts exercising arbitration jurisdiction in Haryana",
    ],
    advisoryServices: [
      "Drafting arbitration agreements and dispute resolution clauses",
      "Commercial and contractual document vetting",
      "Settlement terms and negotiation support",
      "Award enforcement strategy",
    ],
    order: 4,
  },
  {
    slug: "renu-choudhary",
    name: "Renu Choudhary",
    title: "Co-Founder, Advocate & Legal Consultant",
    // The full designation would make the <title> 79 characters. The short
    // form keeps it at 61 while the page, card and Person.jobTitle carry the
    // whole thing — and it keeps "Co-Founder" in the tag, which is the part
    // a name search is most likely to be looking for.
    titleShort: "Co-Founder & Advocate",
    role: "Co-Founder",
    image: "",
    headline:
      "Co-founder of Judicium Arbitration, with ten years across civil, criminal, commercial and matrimonial disputes, arbitration and ADR.",
    bio: "Renu Choudhary is a co-founder of Judicium Arbitration, and an Advocate and Legal Consultant with 10 years of professional experience. Her practice encompasses civil, criminal and commercial litigation, matrimonial disputes, arbitration, dispute resolution and legal advisory services. Practising across India from a professional office in New Delhi, she advises individuals, businesses, corporate entities and other organisations on contentious and advisory matters.",
    experience:
      "Ten years of practice spanning judicial proceedings, legal research, case preparation and litigation strategy. Handles diverse legal disputes, court proceedings, contractual matters and complex legal issues across various fields of law. Her practice also encompasses Alternative Dispute Resolution — mediation, conciliation and negotiation — alongside arbitration and conventional litigation, identifying the appropriate remedy and forum for the nature and objectives of each case.",
    yearsExperience: 10,
    jurisdiction: "Pan India",
    officeBase: "New Delhi",
    // The source profile states no qualifications; nothing is inferred here.
    // The profile page omits the Education block when this is empty.
    education: [],
    specializations: [
      "Civil Litigation",
      "Commercial & Business Disputes",
      "Criminal Litigation",
      "Matrimonial & Family Disputes",
      "Arbitration & Alternative Dispute Resolution",
      "Mediation, Conciliation & Negotiation",
      "Contract Drafting & Document Vetting",
      "Legal Consultation & Advisory",
      "Property & Real Estate Disputes",
      "Recovery & Execution Proceedings",
    ],
    practiceAreaSlugs: [
      "arbitration-alternative-dispute-resolution",
      "dispute-resolution-litigation",
      "corporate-commercial",
      "real-estate-urban-development",
    ],
    courtsAndTribunals: [
      "Arbitral tribunals, ad-hoc and institutional",
      "Civil courts — suits, injunctions, specific performance and execution",
      "Criminal trial and sessions courts — bail, trial, appeals and revisions",
      "Family courts — divorce, maintenance and custody matters",
      "Mediation and conciliation forums",
    ],
    advisoryServices: [
      "Drafting and vetting commercial agreements, partnership deeds and memoranda of understanding",
      "Lease, licence and service agreements",
      "Legal opinions and pre-litigation advice",
      "Dispute assessment, legal strategy and risk management",
      "Guidance on contractual and statutory compliance",
    ],
    // Co-founder — placed directly below the Founder & CEO, ahead of the
    // partners, so the roster reads in order of standing in the firm.
    order: 2,
  },
  {
    slug: "kshitij-chauhan",
    name: "Kshitij Chauhan",
    title: "Senior Advocate",
    role: "Partner",
    image: "",
    headline:
      "Partner with over two decades in arbitration and banking disputes, including panel advocate work for Punjab National Bank.",
    bio: "Kshitij Chauhan brings great leadership, enthusiasm, advice and practicality in forming and solving complex disputes. He is composed, solution-oriented, able to deal with complex business transactions and should be considered a highly valued member of the firm.",
    experience:
      "Over two decades of experience advising clients in dispute resolution in courts and arbitration. Affiliated with Punjab National Bank as a Panel Advocate, dealing with sectoral regulations, acquisition mediation, and arbitration. Drafts, negotiates, and provides advice on a broad array of arbitration matters. Offers guidance on arbitration strategies and assists in resolving disputes at an early stage during projects. Leverages experience to help clients avoid disputes by focusing on potential conflict areas.",
    yearsExperience: 20,
    jurisdiction: "Pan India",
    officeBase: "Prayagraj & Delhi NCR",
    education: [
      "LL.M - Global Open University, Nagaland",
      "LL.B - Allahabad University, Prayagraj",
    ],
    specializations: [
      "Arbitration Law & Practice",
      "Banking & Financial Law",
      "Civil Litigation",
      "Criminal Law",
      "Sectoral Regulations",
      "Acquisition Mediation",
      "Early Dispute Resolution",
      "Contract Negotiation & Drafting",
      "Bank Panel Advisory",
      "Dispute Avoidance & Risk Review",
    ],
    practiceAreaSlugs: [
      "arbitration-alternative-dispute-resolution",
      "banking-finance",
      "dispute-resolution-litigation",
      "corporate-commercial",
    ],
    courtsAndTribunals: [
      "Ad-hoc and institutional arbitral tribunals",
      "District & Sessions Courts",
      "High Court",
    ],
    advisoryServices: [
      "Banking documentation and recovery advisory",
      "Arbitration strategy and clause negotiation",
      "Contract drafting, negotiation and vetting",
      "Conflict-area review to avoid disputes arising",
    ],
    order: 5,
  },
  {
    slug: "satya-prakash-shukla",
    name: "Satya Prakash Shukla",
    title: "Senior Advocate",
    role: "Partner",
    image: "",
    headline:
      "Partner with nearly two decades in arbitration law, land acquisition and sectoral regulation, and a research background at NLU Jodhpur and IICA.",
    bio: "Satya Prakash Shukla brings great leadership, enthusiasm, advice and practicality in forming and solving complex disputes. He is composed, solution-oriented, able to deal with complex business transactions and should be considered a highly valued member of the firm.",
    experience:
      "Nearly two decades of vast experience in dealing with arbitration law. Advising clients in dispute resolution in courts and arbitration for over a decade. Previously worked with Indian Institute of Corporate Affairs in Law, Policy and Arbitration. Has taught and undertaken research on arbitration law at National Law University Jodhpur. Deals with civil and criminal cases, sectoral regulations, land acquisition, mediation and arbitration. Drafts, negotiates, and provides advice on a broad array of arbitration matters.",
    yearsExperience: 18,
    jurisdiction: "Pan India",
    officeBase: "Prayagraj",
    education: ["LL.B - Allahabad University, Prayagraj"],
    specializations: [
      "Arbitration Law & Strategy",
      "Civil Litigation",
      "Criminal Law",
      "Sectoral Regulations",
      "Land Acquisition",
      "Mediation & ADR",
      "Early Dispute Resolution",
      "Academic Research in Arbitration",
      "Policy & Legal Frameworks",
      "Contract Drafting & Negotiation",
    ],
    practiceAreaSlugs: [
      "arbitration-alternative-dispute-resolution",
      "real-estate-urban-development",
      "dispute-resolution-litigation",
      "projects-infrastructure",
    ],
    courtsAndTribunals: [
      "Ad-hoc and institutional arbitral tribunals",
      "Civil and Criminal Courts",
      "Land acquisition and compensation forums",
    ],
    advisoryServices: [
      "Land acquisition and compensation advisory",
      "Arbitration drafting, negotiation and advice",
      "Regulatory and policy opinions",
      "Mediation and early settlement guidance",
    ],
    order: 6,
  },
  {
    slug: "pankaj-kumar",
    name: "Pankaj Kumar",
    title: "Advocate",
    role: "Associate",
    image: "",
    headline:
      "Associate practising before the Delhi High Court, with a focused track record in commercial litigation and arbitration procedure.",
    bio: "Advocate Pankaj Kumar is a dedicated and emerging legal counsel practicing at the Delhi High Court. With a focused track record in litigation and commercial disputes, he possesses the procedural acumen and substantive knowledge required to serve effectively on arbitration panels.",
    experience:
      "Practice before the Delhi High Court with focused expertise in litigation and commercial disputes. Experienced in arbitration proceedings and possesses strong procedural knowledge for effective representation on arbitration panels.",
    yearsExperience: 5,
    jurisdiction: "Delhi NCR",
    officeBase: "New Delhi",
    education: ["BA LLB HONS - Law Department, Aligarh Campus"],
    specializations: [
      "Arbitration & ADR",
      "Commercial Disputes",
      "Litigation",
      "Delhi High Court Practice",
      "Procedural Law",
      "Arbitration Panel Representation",
      "Pleadings & Legal Drafting",
      "Case Research & Preparation",
      "Interim Applications",
      "Client Representation",
    ],
    practiceAreaSlugs: [
      "arbitration-alternative-dispute-resolution",
      "dispute-resolution-litigation",
      "corporate-commercial",
    ],
    courtsAndTribunals: [
      "Delhi High Court",
      "Arbitral tribunals and arbitration panels",
      "District Courts, Delhi",
    ],
    advisoryServices: [
      "Drafting pleadings, petitions and interim applications",
      "Procedural strategy for arbitration references",
      "Commercial dispute assessment",
      "Case research and documentation",
    ],
    order: 7,
  },
  {
    slug: "parul-garg",
    name: "Parul Garg",
    title: "Advocate",
    role: "Partner",
    image: "",
    headline:
      "Partner with twelve years across arbitration, civil and criminal matters, focused on resolving disputes early in a project's life.",
    bio: "Parul Garg brings leadership, enthusiasm and practicality to forming and solving complex disputes, with vast experience in arbitration law and twelve years of practice across civil and criminal matters.",
    experience:
      "Over a decade of experience advising clients in dispute resolution in courts and arbitration. Drafts, negotiates, and provides advice on a broad array of arbitration matters. Offers guidance on arbitration strategies and assists in resolving disputes at an early stage during projects. Leverages experience to help clients avoid disputes by focusing on potential conflict areas and facilitating early dispute resolution.",
    yearsExperience: 12,
    jurisdiction: "Punjab, Haryana & Delhi NCR",
    officeBase: "Delhi NCR",
    education: [
      "LL.M - Kurukshetra University, Kurukshetra",
      "B.A. LL.B - Punjabi University, Patiala",
    ],
    specializations: [
      "Arbitration Law & Practice",
      "Civil Litigation",
      "Criminal Law",
      "Dispute Resolution Strategy",
      "Early Dispute Resolution",
      "Contract Drafting & Negotiation",
      "Project Dispute Advisory",
      "Conflict-Area Risk Review",
      "Settlement Negotiation",
      "Client Advisory",
    ],
    practiceAreaSlugs: [
      "arbitration-alternative-dispute-resolution",
      "dispute-resolution-litigation",
      "projects-infrastructure",
    ],
    courtsAndTribunals: [
      "Ad-hoc and institutional arbitral tribunals",
      "Civil and Criminal Courts",
      "District Courts across Punjab, Haryana and Delhi NCR",
    ],
    advisoryServices: [
      "Arbitration drafting, negotiation and strategy",
      "Project-stage dispute avoidance review",
      "Contract negotiation and vetting",
      "Early settlement and resolution guidance",
    ],
    order: 8,
  },
];

export const getTeamMembers = (): TeamMember[] =>
  [...teamMembers].sort((a, b) => a.order - b.order);

/**
 * Roster ordered so advocates with a portrait come first, firm order preserved
 * within each group. Photographed profiles carry more visual weight and convert
 * better, so they lead the grid; the rest follow on the next row rather than
 * being scattered between them.
 */
export const getTeamMembersPhotoFirst = (): TeamMember[] => {
  const ordered = getTeamMembers();
  return [
    ...ordered.filter((m) => Boolean(m.image)),
    ...ordered.filter((m) => !m.image),
  ];
};

export const getFounder = (): TeamMember | undefined =>
  teamMembers.find((member) => member.order === 1);

export const getTeamMemberBySlug = (slug: string): TeamMember | undefined =>
  teamMembers.find((member) => member.slug === slug);

export const getAllTeamSlugs = (): string[] =>
  teamMembers.map((member) => member.slug);

/**
 * Colleagues to cross-link from an advocate's profile: those sharing a practice
 * area first, topped up by firm order. Keeps every profile linking outward so no
 * person page is a crawl dead end.
 */
export const getRelatedTeamMembers = (
  slug: string,
  limit = 3
): TeamMember[] => {
  const current = getTeamMemberBySlug(slug);
  if (!current) return [];
  const others = getTeamMembers().filter((m) => m.slug !== slug);
  const shared = others.filter((m) =>
    m.practiceAreaSlugs.some((p) => current.practiceAreaSlugs.includes(p))
  );
  const rest = others.filter((m) => !shared.includes(m));
  return [...shared, ...rest].slice(0, limit);
};

/** Combined years of practice across the firm — a visible trust signal. */
export const getCombinedExperience = (): number =>
  teamMembers.reduce((sum, m) => sum + m.yearsExperience, 0);
