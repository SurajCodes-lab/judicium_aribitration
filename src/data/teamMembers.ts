export interface TeamMember {
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
  experience: string;
  education: string[];
  specializations: string[];
  order: number;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Nadeem Qureshi",
    title: "Founder & CEO",
    role: "Co-Founder",
    image: "/Founder.jpeg",
    bio: "With 20 years of extensive experience at KKD Court, Delhi, Nadeem brings unparalleled understanding of the dispute lifecycle and ground realities of India's legal system. His deep insights into high-stakes arbitration matters and intricate knowledge of Delhi's legal landscape form the cornerstone of Judicium's strategic approach.",
    experience: "20+ years of practice specializing in arbitration and dispute resolution at KKD Court, Delhi. Extensive experience in complex commercial arbitration, court procedures, and legal risk assessment.",
    education: [
      "LL.B - CCS University / M.M.H College",
      "LL.M - Meerut College"
    ],
    specializations: [
      "Commercial Arbitration",
      "Dispute Resolution Strategy",
      "Court Procedures & Practice",
      "Legal Risk Assessment",
      "High-Stakes Arbitration Matters"
    ],
    order: 1
  },
  {
    name: "Dr. Ravikant Bhardwaj",
    title: "Senior Advocate",
    role: "Partner",
    image: "",
    bio: "Dr. Ravikant Bhardwaj brings great leadership, enthusiasm, advice and practicality in forming and solving complex disputes. He is composed, solution-oriented, and able to deal with complex business transactions, making him a highly valued member of the firm.",
    experience: "Over a decade of experience advising clients in dispute resolution in courts and arbitration. Previously affiliated with Indian Institute of Corporate Affairs (IICA) dealing with sectoral regulations, competition law and arbitration. Has taught and undertaken research on arbitration law at National Law University Jodhpur.",
    education: [
      "PhD - Rajiv Gandhi School of Intellectual Property Law, IIT Kharagpur",
      "LL.M - NALSAR University of Law, Hyderabad",
      "LL.B - MDU Rohtak"
    ],
    specializations: [
      "Arbitration Law & Strategy",
      "Competition Law",
      "Sectoral Regulations",
      "Early Dispute Resolution",
      "Complex Business Transactions",
      "Academic Research in Arbitration"
    ],
    order: 2
  },
  {
    name: "Advocate Suryakant Bhardwaj",
    title: "Senior Advocate",
    role: "Partner",
    image: "",
    bio: "A dedicated advocate specializing in arbitration and alternative dispute resolution. Known for his hardworking nature, ability to go deeper in dispute solving, and eye for detail. He assists individuals, businesses, and organizations in resolving disputes efficiently, confidentially, and cost-effectively.",
    experience: "Nine years of practice in various Courts in Panipat and engaging in arbitration law. Extensive experience in commercial, contractual, and civil dispute matters. Provides strategic guidance throughout the arbitration process—from drafting arbitration agreements, filing various applications in court and representing clients before arbitral tribunals to negotiating settlements and enforcing awards.",
    education: [
      "LL.B - Government Law College, Mumbai",
      "LL.M - MDU Rohtak (Corporate Law and Arbitration)"
    ],
    specializations: [
      "Arbitration & Alternative Dispute Resolution",
      "Commercial Disputes",
      "Contractual Matters",
      "Civil Disputes",
      "Arbitration Agreement Drafting",
      "Settlement Negotiations",
      "Award Enforcement"
    ],
    order: 3
  },
  {
    name: "Rishika Chaudhary",
    title: "Advocate",
    role: "Associate",
    image: "",
    bio: "An Advocate with strong foundation in arbitration, mediation, and dispute resolution. Having worked at the District & Sessions Court, Panipat, and at the Mediation Centre of the Punjab & Haryana High Court, Chandigarh, she has developed comprehensive experience in both litigation and alternative dispute resolution processes.",
    experience: "Practical exposure to arbitration, mediation, and courtroom proceedings. Worked on arbitration-related matters, assisted in drafting arbitration petitions, responses, and settlement terms, and observed the conduct of arbitral hearings. Independently handled civil, criminal, and NACT cases from filing to final argument. Contributed to mediation efforts aimed at achieving amicable settlements.",
    education: [
      "LL.M",
      "LL.B"
    ],
    specializations: [
      "Arbitration Proceedings",
      "Mediation & Settlement",
      "Civil Litigation",
      "Criminal Law",
      "NACT Cases",
      "Client Counseling",
      "Case Management",
      "Legal Drafting"
    ],
    order: 4
  },
  {
    name: "Kshitij Chauhan",
    title: "Senior Advocate",
    role: "Partner",
    image: "",
    bio: "Kshitij Chauhan brings great leadership, enthusiasm, advice and practicality in forming and solving complex disputes. He is composed, solution-oriented, able to deal with complex business transactions and should be considered a highly valued member of the firm.",
    experience: "Over two decades of experience advising clients in dispute resolution in courts and arbitration. Affiliated with Punjab National Bank as a Panel Advocate, dealing with sectoral regulations, acquisition mediation, and arbitration. Drafts, negotiates, and provides advice on a broad array of arbitration matters. Offers guidance on arbitration strategies and assists in resolving disputes at an early stage during projects. Leverages experience to help clients avoid disputes by focusing on potential conflict areas.",
    education: [
      "LL.M - Global Open University, Nagaland",
      "LL.B - Allahabad University, Prayagraj"
    ],
    specializations: [
      "Arbitration Law & Practice",
      "Banking & Financial Law",
      "Civil Litigation",
      "Criminal Law",
      "Sectoral Regulations",
      "Acquisition Mediation",
      "Early Dispute Resolution",
      "Contract Negotiation & Drafting"
    ],
    order: 5
  },
  {
    name: "Satya Prakash Shukla",
    title: "Senior Advocate",
    role: "Partner",
    image: "",
    bio: "Satya Prakash Shukla brings great leadership, enthusiasm, advice and practicality in forming and solving complex disputes. He is composed, solution-oriented, able to deal with complex business transactions and should be considered a highly valued member of the firm.",
    experience: "Nearly two decades of vast experience in dealing with arbitration law. Advising clients in dispute resolution in courts and arbitration for over a decade. Previously worked with Indian Institute of Corporate Affairs in Law, Policy and Arbitration. Has taught and undertaken research on arbitration law at National Law University Jodhpur. Deals with civil and criminal cases, sectoral regulations, land acquisition, mediation and arbitration. Drafts, negotiates, and provides advice on a broad array of arbitration matters.",
    education: [
      "LL.B - Allahabad University, Prayagraj"
    ],
    specializations: [
      "Arbitration Law & Strategy",
      "Civil Litigation",
      "Criminal Law",
      "Sectoral Regulations",
      "Land Acquisition",
      "Mediation & ADR",
      "Early Dispute Resolution",
      "Academic Research in Arbitration",
      "Policy & Legal Frameworks"
    ],
    order: 6
  },
  {
    name: "Pankaj Kumar",
    title: "Advocate",
    role: "Associate",
    image: "/PankajKumar.jpeg",
    bio: "Advocate Pankaj Kumar is a dedicated and emerging legal counsel practicing at the Delhi High Court. With a focused track record in litigation and commercial disputes, he possesses the procedural acumen and substantive knowledge required to serve effectively on arbitration panels.",
    experience: "Practice before the Delhi High Court with focused expertise in litigation and commercial disputes. Experienced in arbitration proceedings and possesses strong procedural knowledge for effective representation on arbitration panels.",
    education: [
      "LL.B - Aligarh Muslim University"
    ],
    specializations: [
      "Arbitration & ADR",
      "Commercial Disputes",
      "Litigation",
      "Delhi High Court Practice",
      "Procedural Law"
    ],
    order: 7
  }
];

export const getTeamMembers = (): TeamMember[] => {
  return teamMembers.sort((a, b) => a.order - b.order);
};

export const getFounder = (): TeamMember | undefined => {
  return teamMembers.find(member => member.order === 1);
};
