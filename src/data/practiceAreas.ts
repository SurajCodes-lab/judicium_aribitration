export interface PracticeArea {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  icon: string;
  content: {
    overview: string;
    services: string[];
    expertise: string[];
    whyChooseUs: string[];
    relatedActs?: string[];
    faqs?: { question: string; answer: string }[];
  };
}

export const practiceAreasData: PracticeArea[] = [
  {
    slug: "arbitration-alternative-dispute-resolution",
    title: "Arbitration & Alternative Dispute Resolution",
    shortTitle: "Arbitration & ADR",
    description: "Expert arbitration and ADR services in India, specializing in domestic and international commercial disputes under the Arbitration and Conciliation Act, 1996.",
    metaDescription: "Leading arbitration & ADR services in Delhi, NCR & Chandigarh. Expert resolution of commercial disputes under Indian arbitration laws with 20+ years experience.",
    keywords: ["arbitration India", "ADR services Delhi", "commercial arbitration", "international arbitration India", "DIAC arbitration", "arbitration lawyers Delhi"],
    icon: "⚖️",
    content: {
      overview: "Judicium Arbitration is a premier arbitration and alternative dispute resolution firm in North India, with offices strategically located in New Delhi, NCR, and Chandigarh. We specialize in resolving complex commercial disputes through arbitration, mediation, and conciliation under the Arbitration and Conciliation Act, 1996, as amended in 2015, 2019, and 2021.",
      services: [
        "Domestic Commercial Arbitration",
        "International Commercial Arbitration",
        "Investment Treaty Arbitration",
        "Ad-hoc Arbitration Proceedings",
        "Institutional Arbitration (DIAC, MCIA, ICC, SIAC, LCIA)",
        "Mediation and Conciliation Services",
        "Arbitration Agreement Drafting",
        "Appointment and Challenge of Arbitrators",
        "Arbitral Award Enforcement and Challenge",
        "Section 9 and Section 17 Emergency Relief",
        "Setting Aside and Enforcement Proceedings"
      ],
      expertise: [
        "Construction and Infrastructure Disputes",
        "Banking and Financial Services Disputes",
        "Real Estate and Property Disputes",
        "Shareholder and Partnership Disputes",
        "Joint Venture Disputes",
        "Franchise and Distribution Agreements",
        "Technology and IP Licensing Disputes",
        "Energy and Natural Resources Disputes"
      ],
      whyChooseUs: [
        "Strategic presence near Delhi High Court and Supreme Court",
        "Expertise in DIAC (Delhi International Arbitration Centre) proceedings",
        "20+ years of experience in complex commercial arbitration",
        "Deep understanding of Arbitration and Conciliation Act amendments",
        "Successful track record of 500+ resolved cases with 98% success rate",
        "Cost-effective and time-efficient dispute resolution",
        "Expert panel of arbitrators and mediators",
        "Multilingual team serving diverse client base"
      ],
      relatedActs: [
        "Arbitration and Conciliation Act, 1996",
        "Arbitration and Conciliation (Amendment) Act, 2015",
        "Arbitration and Conciliation (Amendment) Act, 2019",
        "Arbitration and Conciliation (Amendment) Act, 2021",
        "Commercial Courts Act, 2015",
        "New York Convention on Recognition and Enforcement of Foreign Arbitral Awards"
      ],
      faqs: [
        {
          question: "What is the typical duration of arbitration proceedings in India?",
          answer: "Under the amended Arbitration Act, arbitral tribunals are mandated to complete proceedings within 12 months from the date of completion of pleadings. This can be extended by 6 months with mutual consent. Our expertise ensures efficient case management within statutory timelines."
        },
        {
          question: "Can foreign awards be enforced in India?",
          answer: "Yes, foreign arbitral awards can be enforced in India under the New York Convention and the Arbitration and Conciliation Act, 1996. India is a signatory to the New York Convention, making enforcement of international awards relatively streamlined."
        },
        {
          question: "What are the advantages of arbitration over litigation?",
          answer: "Arbitration offers confidentiality, faster resolution, flexibility in procedure, expert arbitrators with domain knowledge, enforceability across jurisdictions, and generally lower costs compared to prolonged court litigation."
        }
      ]
    }
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    shortTitle: "Banking & Finance",
    description: "Comprehensive banking and finance legal services covering regulatory compliance, NPA resolution, loan recovery, and financial transactions under RBI guidelines.",
    metaDescription: "Expert banking & finance lawyers in Delhi NCR. Specializing in NPA resolution, SARFAESI, DRT proceedings, loan restructuring & RBI compliance.",
    keywords: ["banking lawyers India", "finance law Delhi", "NPA resolution", "SARFAESI Act", "DRT lawyers", "loan recovery India", "RBI compliance"],
    icon: "🏦",
    content: {
      overview: "Our Banking & Finance practice provides comprehensive legal services to banks, NBFCs, fintech companies, and borrowers across India. With deep expertise in regulatory frameworks including RBI guidelines, SARFAESI Act, and IBC, we handle complex financial disputes and transactions.",
      services: [
        "Non-Performing Assets (NPA) Resolution and Recovery",
        "SARFAESI Act Proceedings and Asset Reconstruction",
        "Debt Recovery Tribunal (DRT) and DRAT Matters",
        "Corporate Debt Restructuring (CDR)",
        "One Time Settlement (OTS) Negotiations",
        "Banking Fraud and Wilful Defaulter Proceedings",
        "Loan Documentation and Security Creation",
        "Regulatory Compliance and RBI Audit Support",
        "Insolvency and Bankruptcy Code (IBC) for Financial Creditors",
        "Project Finance and Infrastructure Funding",
        "Fintech Regulatory Advisory",
        "Digital Lending Compliance"
      ],
      expertise: [
        "Recovery of NPAs exceeding ₹500 Crores cumulatively",
        "SARFAESI enforcement across multiple states",
        "Complex restructuring for stressed assets",
        "Advisory to leading PSU and private sector banks",
        "Fintech and digital lending regulatory compliance",
        "Cross-border finance transactions"
      ],
      whyChooseUs: [
        "Specialized team with banking sector experience",
        "Strong track record in NPA recovery and loan restructuring",
        "Strategic presence in Delhi NCR serving major financial institutions",
        "End-to-end support from documentation to recovery",
        "Expertise in both lender and borrower representation",
        "Updated knowledge of evolving RBI regulations and digital lending guidelines"
      ],
      relatedActs: [
        "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002",
        "Recovery of Debts Due to Banks and Financial Institutions Act, 1993",
        "Reserve Bank of India Act, 1934",
        "Banking Regulation Act, 1949",
        "Insolvency and Bankruptcy Code, 2016",
        "Prevention of Money Laundering Act, 2002",
        "Information Technology Act, 2000 (for digital lending)"
      ],
      faqs: [
        {
          question: "What is SARFAESI and how does it help in loan recovery?",
          answer: "The SARFAESI Act allows banks and financial institutions to recover NPAs without court intervention by enforcing security interests, taking possession of secured assets, and selling them to recover dues. This process is faster than traditional civil litigation."
        },
        {
          question: "What is the difference between DRT and SARFAESI proceedings?",
          answer: "SARFAESI is an administrative remedy allowing secured creditors to enforce security without court intervention, while DRT (Debt Recovery Tribunal) is a judicial forum for adjudicating debt recovery cases. Banks often use both mechanisms simultaneously for effective recovery."
        }
      ]
    }
  },
  {
    slug: "capital-markets",
    title: "Capital Markets",
    shortTitle: "Capital Markets",
    description: "Capital markets advisory covering securities laws, SEBI regulations, IPOs, private placements, and corporate governance compliance.",
    metaDescription: "Capital markets lawyers in Delhi NCR. Expert advice on SEBI regulations, IPOs, securities compliance, takeovers & corporate governance.",
    keywords: ["capital markets India", "SEBI lawyers Delhi", "IPO advisors", "securities law India", "takeover code", "corporate governance"],
    icon: "📈",
    content: {
      overview: "Our Capital Markets practice advises corporates, financial institutions, investment banks, and investors on regulatory compliance, securities offerings, and corporate governance under SEBI regulations and Companies Act, 2013.",
      services: [
        "Initial Public Offerings (IPOs) and Follow-on Offerings (FPOs)",
        "Private Placements and QIPs",
        "SEBI Compliance and Regulatory Filings",
        "Takeover Code Advisory and Open Offers",
        "Delisting and Buy-back Regulations",
        "Mutual Funds and Alternative Investment Funds (AIFs)",
        "Stock Exchange Listing Requirements",
        "Insider Trading and UPSI Compliance",
        "Corporate Governance and Board Advisory",
        "Securities Fraud and Enforcement Actions",
        "Debt Capital Markets and Bond Issuances",
        "Foreign Portfolio Investment Regulations"
      ],
      expertise: [
        "IPO and public offering structuring",
        "SEBI investigation and enforcement defense",
        "Corporate governance frameworks",
        "Cross-border securities transactions",
        "Fund formation and regulatory approvals"
      ],
      whyChooseUs: [
        "Updated expertise on latest SEBI regulations and amendments",
        "Experience with NSE, BSE, and other stock exchange requirements",
        "Comprehensive support from pre-IPO to post-listing compliance",
        "Strategic advisory on M&A and takeover regulations",
        "Strong regulatory relationships and efficient approvals"
      ],
      relatedActs: [
        "Securities and Exchange Board of India Act, 1992",
        "SEBI (Issue of Capital and Disclosure Requirements) Regulations, 2018",
        "SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
        "SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011",
        "SEBI (Prohibition of Insider Trading) Regulations, 2015",
        "Companies Act, 2013",
        "Foreign Exchange Management Act, 1999"
      ]
    }
  },
  {
    slug: "competition-antitrust",
    title: "Competition and Anti-Trust",
    shortTitle: "Competition & Anti-Trust",
    description: "Competition law advisory covering CCI compliance, anti-competitive practices, merger control, and cartel investigations.",
    metaDescription: "Competition law experts in India. CCI compliance, merger notifications, anti-trust advisory, cartel defense & competition litigation.",
    keywords: ["competition law India", "CCI lawyers", "antitrust India", "merger control", "cartel defense", "competition commission"],
    icon: "🎯",
    content: {
      overview: "Our Competition Law practice advises clients on compliance with the Competition Act, 2002, merger notifications, anti-competitive investigations, and strategic competition issues before the Competition Commission of India (CCI).",
      services: [
        "Merger and Acquisition Notifications to CCI",
        "Competition Compliance Audits and Programs",
        "Anti-Competitive Practices Investigation Defense",
        "Cartel Investigation and Leniency Applications",
        "Abuse of Dominance Advisory and Litigation",
        "Vertical and Horizontal Agreement Analysis",
        "Dawn Raid Response and Management",
        "Competition Litigation before CCI and NCLAT",
        "Fair Trade Practices Advisory",
        "Gun-Jumping and Pre-Merger Coordination Compliance"
      ],
      expertise: [
        "Successfully represented clients in major CCI investigations",
        "Merger clearances across diverse sectors",
        "Leniency applications and cartel defense",
        "Competition compliance training and policy development"
      ],
      whyChooseUs: [
        "In-depth knowledge of Competition Act and CCI procedures",
        "Experience with complex merger filings and Phase-II investigations",
        "Proactive compliance programs to minimize regulatory risk",
        "Strong advocacy in CCI and appellate proceedings"
      ],
      relatedActs: [
        "Competition Act, 2002",
        "Competition (Amendment) Act, 2007",
        "Competition Commission of India (General) Regulations, 2009",
        "Competition Commission of India (Procedure in regard to the transaction of business relating to combinations) Regulations, 2011"
      ]
    }
  },
  {
    slug: "corporate-mergers-acquisitions",
    title: "Corporate Mergers & Acquisitions",
    shortTitle: "M&A",
    description: "End-to-end M&A advisory including deal structuring, due diligence, regulatory approvals, and transaction documentation.",
    metaDescription: "M&A lawyers in Delhi NCR. Expert advisory on mergers, acquisitions, deal structuring, due diligence & regulatory approvals in India.",
    keywords: ["M&A lawyers India", "merger advisory Delhi", "acquisition lawyers", "due diligence India", "corporate restructuring"],
    icon: "🤝",
    content: {
      overview: "Our M&A practice provides comprehensive advisory on domestic and cross-border mergers, acquisitions, joint ventures, and corporate restructuring under the Companies Act, 2013, and SEBI regulations.",
      services: [
        "Mergers, Demergers, and Amalgamations",
        "Domestic and Cross-Border Acquisitions",
        "Share and Asset Purchase Transactions",
        "Legal and Commercial Due Diligence",
        "Transaction Structuring and Tax Planning",
        "Regulatory Approvals (NCLT, SEBI, CCI, FIPB, RBI)",
        "Definitive Agreement Drafting (SPA, SHA, JV Agreements)",
        "Post-Merger Integration Support",
        "Scheme of Arrangement and Compromise",
        "Slump Sale and Business Transfer",
        "Private Equity and Venture Capital Transactions"
      ],
      expertise: [
        "Successfully closed deals worth over ₹10,000 Crores",
        "Cross-border M&A transactions",
        "Complex multi-jurisdictional deals",
        "Hostile takeover defense",
        "Regulatory approvals and NCLT proceedings"
      ],
      whyChooseUs: [
        "Experienced deal team with sector-specific expertise",
        "End-to-end transaction support from LOI to closing",
        "Strong relationships with regulators for faster approvals",
        "Commercial understanding aligned with legal precision",
        "Post-transaction dispute resolution support"
      ],
      relatedActs: [
        "Companies Act, 2013",
        "SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011",
        "Competition Act, 2002",
        "Foreign Exchange Management Act, 1999",
        "Income Tax Act, 1961"
      ]
    }
  },
  {
    slug: "corporate-commercial",
    title: "Corporate and Commercial",
    shortTitle: "Corporate & Commercial",
    description: "General corporate and commercial law services including company incorporation, contracts, corporate governance, and regulatory compliance.",
    metaDescription: "Corporate lawyers in Delhi NCR. Company incorporation, commercial contracts, corporate governance, compliance & secretarial services.",
    keywords: ["corporate lawyers Delhi", "company law India", "commercial contracts", "corporate governance", "company secretary services"],
    icon: "🏢",
    content: {
      overview: "Our Corporate and Commercial practice offers a full range of legal services to startups, SMEs, and large corporations, including incorporation, governance, contracts, and day-to-day legal advisory.",
      services: [
        "Company Incorporation and Registration",
        "Corporate Structuring and Reorganization",
        "Board and Shareholder Meetings",
        "Corporate Governance and Compliance",
        "Commercial Contract Drafting and Negotiation",
        "Shareholders' Agreements and Joint Ventures",
        "Distribution and Franchise Agreements",
        "Service and Supply Agreements",
        "Foreign Direct Investment (FDI) Advisory",
        "Annual Compliance and ROC Filings",
        "Corporate Secretarial Services",
        "Startup and MSME Advisory"
      ],
      expertise: [
        "Incorporation of 200+ companies across sectors",
        "Corporate governance frameworks for listed and unlisted entities",
        "Commercial contract advisory for diverse industries",
        "FDI structuring and FEMA compliance"
      ],
      whyChooseUs: [
        "One-stop solution for all corporate and commercial needs",
        "Cost-effective packages for startups and SMEs",
        "Experienced in complex corporate restructuring",
        "Quick turnaround for registrations and compliance",
        "Strategic business-oriented legal advice"
      ],
      relatedActs: [
        "Companies Act, 2013",
        "Limited Liability Partnership Act, 2008",
        "Indian Contract Act, 1872",
        "Foreign Exchange Management Act, 1999",
        "Shops and Establishments Acts (State-specific)"
      ]
    }
  },
  {
    slug: "data-privacy-cybersecurity",
    title: "Data Privacy & Cybersecurity",
    shortTitle: "Data Privacy & Cybersecurity",
    description: "Data protection and cybersecurity advisory covering DPDP Act compliance, CERT-In regulations, cyber incident response, and digital compliance.",
    metaDescription: "Data privacy & cybersecurity lawyers in India. DPDP Act compliance, CERT-In advisory, data breach response & IT Act compliance.",
    keywords: ["data privacy India", "DPDP Act lawyers", "cybersecurity legal", "IT Act compliance", "data protection India", "cyber law Delhi"],
    icon: "🔒",
    content: {
      overview: "Our Data Privacy and Cybersecurity practice helps organizations navigate India's evolving data protection landscape, including the Digital Personal Data Protection Act, 2023, IT Act, and CERT-In regulations.",
      services: [
        "Digital Personal Data Protection (DPDP) Act Compliance",
        "Privacy Policy and Terms of Service Drafting",
        "Data Protection Impact Assessments (DPIA)",
        "CERT-In Cyber Incident Reporting Compliance",
        "Information Technology Act, 2000 Advisory",
        "Cross-Border Data Transfer Mechanisms",
        "Cybersecurity Audits and Risk Assessments",
        "Data Breach Response and Crisis Management",
        "Consent Management Framework Design",
        "Intermediary Liability and Safe Harbor Compliance",
        "Digital Evidence and Cyber Forensics Support",
        "E-Discovery and Data Retention Policies"
      ],
      expertise: [
        "DPDP Act readiness and implementation",
        "CERT-In incident reporting and compliance",
        "Cross-border data transfer structuring",
        "Cybersecurity incident management",
        "Privacy litigation and regulatory investigations"
      ],
      whyChooseUs: [
        "Early expertise in DPDP Act compliance frameworks",
        "Practical understanding of technology and data flows",
        "24/7 support for cyber incident response",
        "Training and awareness programs for organizations",
        "Updated with global privacy standards (GDPR, CCPA) for multinational clients"
      ],
      relatedActs: [
        "Digital Personal Data Protection Act, 2023",
        "Information Technology Act, 2000",
        "Information Technology (Reasonable Security Practices) Rules, 2011",
        "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
        "CERT-In Cyber Security Directions, 2022"
      ],
      faqs: [
        {
          question: "What is the Digital Personal Data Protection Act, 2023?",
          answer: "The DPDP Act is India's comprehensive data protection law that regulates the processing of digital personal data. It establishes rights for data principals, obligations for data fiduciaries, and a regulatory framework overseen by the Data Protection Board of India."
        },
        {
          question: "What are the penalties for non-compliance with DPDP Act?",
          answer: "The DPDP Act prescribes penalties up to ₹250 Crores for serious violations including processing data in breach of the Act, failure to implement security safeguards, and non-compliance with Board directions."
        }
      ]
    }
  },
  {
    slug: "real-estate-urban-development",
    title: "Real Estate & Urban Development",
    shortTitle: "Real Estate",
    description: "Real estate legal services covering RERA compliance, property transactions, title due diligence, construction disputes, and urban development projects.",
    metaDescription: "Real estate lawyers in Delhi NCR. RERA compliance, property transactions, title verification, construction disputes & real estate litigation.",
    keywords: ["real estate lawyers Delhi", "RERA lawyers India", "property dispute lawyers", "real estate transactions", "construction law India"],
    icon: "🏗️",
    content: {
      overview: "Our Real Estate practice serves developers, investors, buyers, and financial institutions with comprehensive legal services covering property transactions, RERA compliance, construction disputes, and urban development projects across North India.",
      services: [
        "RERA Registration and Compliance",
        "Property Due Diligence and Title Verification",
        "Sale, Purchase, and Lease Agreements",
        "Joint Development Agreements (JDA)",
        "Construction and EPC Contracts",
        "Real Estate Financing and Security Documentation",
        "Land Acquisition and Conversion",
        "Urban Development and Smart City Projects",
        "SEZ and Industrial Park Development",
        "RERA Tribunal and Appellate Litigation",
        "Builder-Buyer Disputes",
        "Property Possession and Handover Issues"
      ],
      expertise: [
        "Title diligence for properties worth over ₹5,000 Crores",
        "RERA compliance for 100+ projects",
        "Complex construction dispute resolution",
        "Large-scale infrastructure and township projects",
        "Affordable housing scheme advisory"
      ],
      whyChooseUs: [
        "Strong presence in NCR and Chandigarh - major real estate markets",
        "Comprehensive title search and encumbrance verification",
        "Strategic RERA compliance and litigation support",
        "Network of valuers, surveyors, and technical experts",
        "Commercial approach to dispute resolution minimizing project delays"
      ],
      relatedActs: [
        "Real Estate (Regulation and Development) Act, 2016",
        "Transfer of Property Act, 1882",
        "Registration Act, 1908",
        "Indian Stamp Act, 1899",
        "Land Acquisition Act, 2013",
        "Town and Country Planning Acts (State-specific)",
        "Building and Other Construction Workers Act, 1996"
      ],
      faqs: [
        {
          question: "What is RERA and why is it important?",
          answer: "RERA (Real Estate Regulatory Authority) is a regulatory body established under the Real Estate (Regulation and Development) Act, 2016 to protect homebuyers and promote transparency in real estate transactions. All real estate projects above a certain size must be registered with RERA."
        },
        {
          question: "What remedies are available to homebuyers under RERA?",
          answer: "RERA provides homebuyers with remedies including refund of amounts paid with interest for delays, compensation for defects and deficiencies, and enforcement of delivery timelines. Complaints can be filed with the State RERA Authority and appeals to the RERA Appellate Tribunal."
        }
      ]
    }
  },
  {
    slug: "intellectual-property-rights",
    title: "Intellectual Property Rights",
    shortTitle: "Intellectual Property",
    description: "IP law services including trademark, patent, copyright, design registration, IP litigation, licensing, and enforcement.",
    metaDescription: "IP lawyers in Delhi NCR. Trademark registration, patent filing, copyright protection, IP litigation & licensing in India.",
    keywords: ["IP lawyers Delhi", "trademark registration India", "patent attorneys", "copyright lawyers", "IP litigation India"],
    icon: "©️",
    content: {
      overview: "Our Intellectual Property practice provides end-to-end IP services including registration, prosecution, licensing, enforcement, and litigation for trademarks, patents, copyrights, designs, and trade secrets.",
      services: [
        "Trademark Search, Filing, and Registration",
        "Patent Drafting, Filing, and Prosecution",
        "Copyright Registration and Enforcement",
        "Industrial Design Registration",
        "Trade Secret Protection and Confidentiality",
        "IP Due Diligence for M&A and Investments",
        "Licensing and Technology Transfer Agreements",
        "Franchise and Brand Licensing",
        "IP Litigation and Infringement Actions",
        "Domain Name Disputes and UDRP",
        "Anti-Counterfeiting and Enforcement",
        "Geographical Indications (GI) Registration"
      ],
      expertise: [
        "Successfully registered 1,000+ trademarks",
        "Patent prosecution across technology domains",
        "IP infringement litigation with high success rates",
        "Brand protection and anti-counterfeiting campaigns",
        "IP portfolio management for corporates and startups"
      ],
      whyChooseUs: [
        "Experienced IP attorneys and patent agents",
        "Strategic IP portfolio development aligned with business goals",
        "Aggressive enforcement against infringers and counterfeiters",
        "Cost-effective filing strategies including Madrid Protocol and PCT",
        "Technical expertise across pharma, software, engineering, and design sectors"
      ],
      relatedActs: [
        "Trade Marks Act, 1999",
        "Patents Act, 1970",
        "Copyright Act, 1957",
        "Designs Act, 2000",
        "Geographical Indications of Goods (Registration and Protection) Act, 1999",
        "Information Technology Act, 2000"
      ]
    }
  },
  {
    slug: "insolvency-bankruptcy",
    title: "Insolvency & Bankruptcy",
    shortTitle: "Insolvency & Bankruptcy",
    description: "IBC advisory covering CIRP, liquidation, NCLT proceedings, creditor rights, and corporate insolvency resolution.",
    metaDescription: "Insolvency lawyers in Delhi. IBC advisory, CIRP, NCLT litigation, creditor representation & bankruptcy resolution in India.",
    keywords: ["IBC lawyers India", "insolvency lawyers Delhi", "NCLT lawyers", "CIRP advisory", "bankruptcy India", "creditor rights"],
    icon: "⚖️",
    content: {
      overview: "Our Insolvency and Bankruptcy practice advises financial creditors, operational creditors, corporate debtors, resolution applicants, and insolvency professionals on all aspects of the Insolvency and Bankruptcy Code, 2016.",
      services: [
        "Corporate Insolvency Resolution Process (CIRP) Initiation and Defense",
        "Financial Creditor Representation in COC",
        "Operational Creditor Claims and Section 9 Applications",
        "Resolution Plan Preparation and Evaluation",
        "Liquidation Proceedings",
        "Fraudulent and Wrongful Trading Actions",
        "Avoidance Transactions (Preferential, Undervalued, Fraudulent)",
        "Insolvency Professional Services Support",
        "NCLT and NCLAT Litigation",
        "Pre-Packaged Insolvency Resolution (PPIRP) for MSMEs",
        "Cross-Border Insolvency",
        "Personal Guarantor Insolvency"
      ],
      expertise: [
        "Represented financial creditors with claims exceeding ₹2,000 Crores",
        "Successfully defended corporate debtors against wrongful CIRP initiation",
        "Advised resolution applicants on due diligence and plan formulation",
        "Complex litigation before NCLT and NCLAT",
        "Strategic creditor coordination and COC advisory"
      ],
      whyChooseUs: [
        "Deep expertise in IBC and evolving jurisprudence",
        "Strategic presence near NCLT Delhi for efficient litigation",
        "Multi-disciplinary approach combining legal, financial, and operational insights",
        "Strong network with insolvency professionals and resolution applicants",
        "Timely advisory considering strict IBC timelines"
      ],
      relatedActs: [
        "Insolvency and Bankruptcy Code, 2016",
        "Insolvency and Bankruptcy Board of India (Insolvency Resolution Process for Corporate Persons) Regulations, 2016",
        "Insolvency and Bankruptcy Board of India (Liquidation Process) Regulations, 2016",
        "Companies Act, 2013",
        "SARFAESI Act, 2002"
      ],
      faqs: [
        {
          question: "What is the Corporate Insolvency Resolution Process (CIRP)?",
          answer: "CIRP is a time-bound process (maximum 330 days including extensions) under IBC for resolution of corporate insolvency. It involves appointment of a Resolution Professional, formation of Committee of Creditors, invitation of resolution plans, and approval by NCLT."
        },
        {
          question: "Who can initiate CIRP against a corporate debtor?",
          answer: "CIRP can be initiated by (i) Financial Creditor under Section 7, (ii) Operational Creditor under Section 9, or (iii) Corporate Debtor itself under Section 10 of the IBC."
        }
      ]
    }
  },
  {
    slug: "labour-employment",
    title: "Labour and Employment",
    shortTitle: "Labour & Employment",
    description: "Employment law services covering labour compliance, industrial disputes, employment contracts, terminations, and workplace policies.",
    metaDescription: "Labour & employment lawyers in Delhi NCR. Compliance, industrial disputes, employment contracts, termination & workplace law advisory.",
    keywords: ["labour lawyers Delhi", "employment law India", "industrial disputes", "HR legal compliance", "termination laws India"],
    icon: "👥",
    content: {
      overview: "Our Labour and Employment practice advises employers and employees on all aspects of Indian labour laws, including compliance, contracts, disputes, and workplace policies under central and state labour legislations.",
      services: [
        "Labour Law Compliance and Audits",
        "Employment Agreements and Policies",
        "Employee Termination and Retrenchment",
        "Industrial Disputes and Conciliation",
        "Trade Union and Collective Bargaining",
        "POSH (Prevention of Sexual Harassment) Compliance",
        "Labour Court and Industrial Tribunal Litigation",
        "Provident Fund, ESI, and Gratuity Compliance",
        "Minimum Wages and Payment of Wages Compliance",
        "Contract Labour Regulation",
        "Executive Compensation and ESOP Structuring",
        "Immigration and Work Visa Advisory"
      ],
      expertise: [
        "Successfully defended against wrongful termination claims",
        "Labour compliance for 500+ companies",
        "Industrial dispute resolution and settlements",
        "POSH complaint investigations and ICC support",
        "Strategic HR policy design"
      ],
      whyChooseUs: [
        "Practical, business-oriented employment law advice",
        "Experience with both employer and employee representation",
        "Quick turnaround for compliance and documentation",
        "Training programs on POSH and labour law compliance",
        "Network across labour departments and tribunals in North India"
      ],
      relatedActs: [
        "Industrial Disputes Act, 1947",
        "Shops and Establishments Acts (State-specific)",
        "Payment of Wages Act, 1936",
        "Minimum Wages Act, 1948",
        "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
        "Employees' State Insurance Act, 1948",
        "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013",
        "Contract Labour (Regulation and Abolition) Act, 1970",
        "Industrial Employment (Standing Orders) Act, 1946"
      ]
    }
  },
  {
    slug: "dispute-resolution-litigation",
    title: "Dispute Resolution – Litigation",
    shortTitle: "Litigation",
    description: "Comprehensive litigation services across civil, commercial, constitutional, and regulatory matters before all courts and tribunals in India.",
    metaDescription: "Litigation lawyers in Delhi NCR. Expert representation in Supreme Court, High Courts & tribunals. Commercial, civil & constitutional litigation.",
    keywords: ["litigation lawyers Delhi", "Supreme Court lawyers", "High Court lawyers", "civil litigation India", "commercial litigation"],
    icon: "⚖️",
    content: {
      overview: "Our Litigation practice provides strategic representation across all courts and tribunals in India, with particular strength in Delhi High Court and Supreme Court matters. We handle complex commercial, civil, constitutional, and regulatory disputes.",
      services: [
        "Supreme Court of India Litigation",
        "High Court (Delhi, Punjab & Haryana, and others) Litigation",
        "Commercial Court Proceedings",
        "Civil and Commercial Disputes",
        "Writ Petitions and Constitutional Matters",
        "Injunctions and Interim Relief",
        "Appeals and Revisions",
        "Execution Proceedings",
        "Debt Recovery and Enforcement",
        "Consumer Disputes and Protection",
        "Service Matters and Administrative Law",
        "Alternative Dispute Resolution (ADR) Advocacy"
      ],
      expertise: [
        "200+ Supreme Court appearances",
        "1,000+ High Court matters successfully handled",
        "Complex commercial and contractual disputes",
        "Constitutional and public interest litigation",
        "Strategic appellate advocacy"
      ],
      whyChooseUs: [
        "Experienced senior advocates and litigation team",
        "Strategic presence in Delhi for Supreme Court and Delhi High Court matters",
        "Strong track record across diverse litigation areas",
        "Aggressive yet commercially sensible litigation strategy",
        "End-to-end support from pleadings to execution"
      ],
      relatedActs: [
        "Code of Civil Procedure, 1908",
        "Commercial Courts Act, 2015",
        "Arbitration and Conciliation Act, 1996",
        "Specific Relief Act, 1963",
        "Limitation Act, 1963",
        "Constitution of India"
      ]
    }
  },
  {
    slug: "technology-media-telecommunication",
    title: "Technology, Media & Telecommunication",
    shortTitle: "TMT",
    description: "TMT legal services covering technology transactions, media law, telecom regulations, digital content, and IT contracts.",
    metaDescription: "TMT lawyers in India. Technology contracts, media law, telecom regulations, SaaS agreements, licensing & IT legal advisory.",
    keywords: ["TMT lawyers India", "technology law Delhi", "media law India", "telecom regulations", "IT contracts", "SaaS legal"],
    icon: "📡",
    content: {
      overview: "Our Technology, Media & Telecommunication practice serves tech companies, media houses, telecom operators, and digital platforms with comprehensive legal advisory on transactions, regulations, and disputes in the TMT sector.",
      services: [
        "Software Licensing and SaaS Agreements",
        "Technology Transfer and IP Licensing",
        "IT and System Integration Contracts",
        "Cloud Computing and Data Center Agreements",
        "Telecom Licensing and Regulatory Compliance",
        "Media and Entertainment Law",
        "Broadcasting and Cable Regulations",
        "Content Licensing and Distribution",
        "Digital Media and OTT Platform Advisory",
        "E-Commerce and Platform Regulations",
        "Fintech and Payment Systems Regulations",
        "Blockchain and Cryptocurrency Advisory"
      ],
      expertise: [
        "Advised leading tech companies on product licensing",
        "Telecom regulatory compliance and TRAI matters",
        "Media content licensing and distribution agreements",
        "Digital platform regulatory advisory",
        "Fintech and payment regulations"
      ],
      whyChooseUs: [
        "Deep understanding of technology and business models",
        "Updated expertise on evolving digital and telecom regulations",
        "Cross-border technology transaction experience",
        "Sector-specific teams for tech, media, and telecom",
        "Practical, business-friendly legal solutions"
      ],
      relatedActs: [
        "Information Technology Act, 2000",
        "Digital Personal Data Protection Act, 2023",
        "Indian Telegraph Act, 1885",
        "Cable Television Networks (Regulation) Act, 1995",
        "Payment and Settlement Systems Act, 2007",
        "Copyright Act, 1957"
      ]
    }
  },
  {
    slug: "projects-infrastructure",
    title: "Projects & Infrastructure",
    shortTitle: "Projects & Infrastructure",
    description: "Infrastructure and project finance legal services covering PPP, EPC contracts, project development, and regulatory approvals.",
    metaDescription: "Infrastructure lawyers in India. PPP projects, EPC contracts, project finance, regulatory clearances & infrastructure development.",
    keywords: ["infrastructure lawyers India", "PPP projects", "EPC contracts", "project finance", "infrastructure development Delhi"],
    icon: "🏗️",
    content: {
      overview: "Our Projects & Infrastructure practice advises developers, contractors, lenders, and government entities on large-scale infrastructure projects including roads, airports, power, renewable energy, and smart cities.",
      services: [
        "Public Private Partnership (PPP) Structuring",
        "Concession Agreements and BOT/BOOT Models",
        "EPC and Engineering Contracts",
        "Project Finance and Funding Arrangements",
        "Regulatory Approvals and Clearances",
        "Environmental and Forest Clearances",
        "Land Acquisition and Resettlement",
        "Power Purchase Agreements (PPAs)",
        "Renewable Energy Projects (Solar, Wind)",
        "Smart City and Urban Development",
        "Infrastructure Dispute Resolution",
        "Government Procurement and Tendering"
      ],
      expertise: [
        "Advised on projects worth over ₹50,000 Crores",
        "PPP structuring for roads, airports, and urban infrastructure",
        "Renewable energy projects totaling 5,000+ MW",
        "Complex EPC contract negotiations",
        "Infrastructure dispute resolution and arbitration"
      ],
      whyChooseUs: [
        "Multidisciplinary team with engineering and financial expertise",
        "Experience across all infrastructure sectors",
        "Strong relationships with regulatory authorities",
        "End-to-end support from bidding to commercial operation",
        "Proven track record in large-scale projects"
      ],
      relatedActs: [
        "Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013",
        "Public Private Partnership (PPP) Policy Framework",
        "Electricity Act, 2003",
        "Environment Protection Act, 1986",
        "Forest Conservation Act, 1980",
        "National Highways Act, 1956"
      ]
    }
  },
  {
    slug: "private-equity-investment-funds",
    title: "Private Equity and Investment Funds",
    shortTitle: "PE & Investment Funds",
    description: "Private equity and fund advisory covering fund formation, investments, exits, SEBI compliance, and portfolio management.",
    metaDescription: "PE lawyers in India. Fund formation, venture capital, SEBI AIF compliance, investment structuring & exit advisory.",
    keywords: ["private equity lawyers India", "venture capital Delhi", "fund formation India", "AIF regulations", "startup investments"],
    icon: "💼",
    content: {
      overview: "Our Private Equity and Investment Funds practice advises fund managers, investors, and portfolio companies on fund formation, investments, regulatory compliance, and exits under Indian and foreign regulations.",
      services: [
        "Alternative Investment Fund (AIF) Formation and Registration",
        "Venture Capital and Growth Equity Funds",
        "SEBI AIF Compliance and Regulatory Filings",
        "Fund Documentation (LPA, PPM, Subscription Agreements)",
        "Investment Structuring and Tax Planning",
        "Shareholder Agreements and Governance",
        "Portfolio Company Investments and Due Diligence",
        "Exit Strategies (IPO, Strategic Sale, Secondary)",
        "Foreign Portfolio Investment Compliance",
        "FVCI and FDI Structuring",
        "Carried Interest and Incentive Structures",
        "Fund Restructuring and Liquidation"
      ],
      expertise: [
        "Formed 50+ AIFs across Categories I, II, and III",
        "Advised on PE/VC transactions exceeding $2 Billion",
        "Regulatory approvals and SEBI compliance",
        "Cross-border fund structuring",
        "Successful exits via IPOs and strategic sales"
      ],
      whyChooseUs: [
        "Deep expertise in SEBI AIF regulations and compliance",
        "Experience with both domestic and offshore fund structures",
        "Sector-specific investment expertise",
        "Strong network with investors, fund managers, and regulators",
        "Commercial understanding aligned with fund economics"
      ],
      relatedActs: [
        "SEBI (Alternative Investment Funds) Regulations, 2012",
        "SEBI (Foreign Portfolio Investors) Regulations, 2019",
        "Foreign Exchange Management Act, 1999",
        "Income Tax Act, 1961",
        "Companies Act, 2013"
      ]
    }
  },
  {
    slug: "white-collar-crime",
    title: "White Collar Crime",
    shortTitle: "White Collar Crime",
    description: "White collar crime defense covering fraud, corruption, financial crimes, regulatory investigations, and enforcement actions.",
    metaDescription: "White collar crime lawyers in Delhi. Defense against fraud, PMLA, corruption, SEBI/RBI investigations & economic offenses.",
    keywords: ["white collar crime lawyers Delhi", "fraud defense India", "PMLA lawyers", "SEBI investigation", "economic offenses India"],
    icon: "🔍",
    content: {
      overview: "Our White Collar Crime practice defends individuals and corporations in criminal investigations, prosecutions, and regulatory enforcement actions involving economic offenses, fraud, corruption, and financial crimes.",
      services: [
        "Prevention of Money Laundering Act (PMLA) Defense",
        "Economic Offenses and Fraud Investigations",
        "SEBI and RBI Enforcement Actions",
        "Corruption and Bribery (Prevention of Corruption Act)",
        "Banking and Securities Fraud",
        "Tax Evasion and Black Money Investigations",
        "Corporate Fraud and Misappropriation",
        "Insider Trading and Market Manipulation",
        "Foreign Exchange Violations (FEMA/FERA)",
        "Internal Investigations and Compliance",
        "Whistleblower Complaints",
        "Asset Forfeiture and Attachment Proceedings"
      ],
      expertise: [
        "Successfully defended high-profile PMLA prosecutions",
        "SEBI enforcement and insider trading matters",
        "Complex fraud and corruption cases",
        "Proactive compliance and risk mitigation",
        "Strategic crisis management"
      ],
      whyChooseUs: [
        "Experienced criminal defense and regulatory litigation team",
        "Proactive defense strategies minimizing reputational damage",
        "24/7 crisis response for search and seizure",
        "Strong relationships with enforcement agencies",
        "Comprehensive internal investigation and compliance services"
      ],
      relatedActs: [
        "Prevention of Money Laundering Act, 2002",
        "Prevention of Corruption Act, 1988",
        "Indian Penal Code, 1860 (Sections on Cheating, Criminal Breach of Trust, etc.)",
        "Companies Act, 2013 (Fraud and other offenses)",
        "SEBI Act and Regulations",
        "Foreign Exchange Management Act, 1999",
        "Income Tax Act, 1961"
      ]
    }
  },
  {
    slug: "healthcare-lifesciences",
    title: "Healthcare & Lifesciences",
    shortTitle: "Healthcare",
    description: "Healthcare legal services covering pharma regulations, clinical trials, hospital advisory, medical devices, and health insurance.",
    metaDescription: "Healthcare lawyers in India. Pharma regulations, clinical trials, hospital compliance, medical devices & healthcare advisory.",
    keywords: ["healthcare lawyers India", "pharma regulations", "clinical trials India", "hospital legal advisory", "medical device regulations"],
    icon: "🏥",
    content: {
      overview: "Our Healthcare & Lifesciences practice advises pharmaceutical companies, hospitals, medical device manufacturers, healthcare providers, and insurers on regulatory compliance, transactions, and disputes in the healthcare sector.",
      services: [
        "Pharmaceutical Regulatory Compliance",
        "Clinical Trials and Drug Development",
        "Medical Device Approvals and Compliance",
        "Hospital and Healthcare Facility Advisory",
        "Healthcare M&A and Investments",
        "Health Insurance and TPAs",
        "Telemedicine and Digital Health Regulations",
        "Drug Pricing and DPCO Compliance",
        "Medical Negligence and Malpractice Defense",
        "AYUSH and Alternative Medicine Regulations",
        "Food Safety and Nutraceuticals",
        "Bio-Technology and Life Sciences IP"
      ],
      expertise: [
        "Regulatory approvals for 100+ pharmaceutical products",
        "Clinical trial agreements and regulatory compliance",
        "Hospital setup and operational compliance",
        "Healthcare M&A transactions",
        "Medical negligence defense"
      ],
      whyChooseUs: [
        "Specialized team with healthcare domain expertise",
        "Updated knowledge of CDSCO, DCGI, and FSSAI regulations",
        "End-to-end support from product development to commercialization",
        "Experience with both domestic and multinational healthcare companies",
        "Practical, business-oriented healthcare advisory"
      ],
      relatedActs: [
        "Drugs and Cosmetics Act, 1940",
        "Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954",
        "Medical Devices Rules, 2017",
        "Clinical Establishments (Registration and Regulation) Act, 2010",
        "Food Safety and Standards Act, 2006",
        "Indian Medical Council Act, 1956",
        "Information Technology Act, 2000 (for Telemedicine)"
      ]
    }
  },
  {
    slug: "international-trade-wto",
    title: "International Trade/WTO",
    shortTitle: "International Trade",
    description: "International trade advisory covering customs, export-import regulations, trade remedies, WTO compliance, and cross-border transactions.",
    metaDescription: "International trade lawyers in India. Customs, export-import, anti-dumping, trade remedies, WTO compliance & DGFT regulations.",
    keywords: ["international trade lawyers India", "customs lawyers Delhi", "export import law", "anti-dumping India", "WTO compliance"],
    icon: "🌐",
    content: {
      overview: "Our International Trade practice advises exporters, importers, manufacturers, and traders on customs, trade remedies, export-import regulations, and WTO compliance under Indian and international trade laws.",
      services: [
        "Customs Duty Classification and Valuation",
        "Export-Import Policy and DGFT Compliance",
        "Free Trade Agreements (FTA) and Rules of Origin",
        "Anti-Dumping and Countervailing Duty Matters",
        "Safeguard Measures and Trade Remedies",
        "Special Economic Zones (SEZ) Advisory",
        "Export Promotion Schemes (MEIS, SEIS, RoDTEP)",
        "Customs Litigation and Appeals",
        "WTO Compliance and Dispute Settlement",
        "Cross-Border Trade Agreements",
        "Sanctioned Trade and Export Controls",
        "Product Certification and Standards"
      ],
      expertise: [
        "Successfully defended clients in anti-dumping investigations",
        "Customs classification and valuation disputes",
        "FTA advisory and origin certification",
        "SEZ compliance and benefit optimization",
        "Trade remedy litigation"
      ],
      whyChooseUs: [
        "Specialized international trade and customs team",
        "Experience with DGFT, Customs, and DGTR authorities",
        "Strategic advisory on FTAs and preferential trade",
        "Litigation support across all levels of customs forums",
        "Global trade perspective with local expertise"
      ],
      relatedActs: [
        "Customs Act, 1962",
        "Customs Tariff Act, 1975",
        "Foreign Trade (Development and Regulation) Act, 1992",
        "Special Economic Zones Act, 2005",
        "WTO Agreements and Indian Commitments",
        "Free Trade Agreements (India-ASEAN, India-Korea, etc.)"
      ]
    }
  },
  {
    slug: "insurance",
    title: "Insurance",
    shortTitle: "Insurance",
    description: "Insurance law services covering regulatory compliance, policy drafting, claims disputes, reinsurance, and insurance litigation.",
    metaDescription: "Insurance lawyers in India. IRDAI compliance, insurance claims, policy disputes, reinsurance & insurance regulatory advisory.",
    keywords: ["insurance lawyers India", "IRDAI compliance", "insurance claims disputes", "insurance litigation Delhi", "reinsurance law"],
    icon: "🛡️",
    content: {
      overview: "Our Insurance practice advises insurance and reinsurance companies, brokers, TPAs, and policyholders on regulatory compliance, transactions, policy matters, and disputes under IRDAI regulations and Insurance Acts.",
      services: [
        "IRDAI Regulatory Compliance and Licensing",
        "Insurance Product Development and Filing",
        "Policy Drafting and Review",
        "Insurance Claims Management and Disputes",
        "Reinsurance Agreements and Structuring",
        "Insurance Broker and Agent Regulations",
        "Third Party Administrator (TPA) Compliance",
        "Insurance Ombudsman and Consumer Forum Matters",
        "Insurance Fraud Investigations",
        "Microinsurance and Bancassurance Advisory",
        "Health Insurance and Medical Claims",
        "D&O and Professional Indemnity Insurance"
      ],
      expertise: [
        "Advised leading insurers on regulatory compliance",
        "Insurance claims litigation and arbitration",
        "Policy interpretation and coverage disputes",
        "Reinsurance treaty negotiations",
        "IRDAI approvals and licensing"
      ],
      whyChooseUs: [
        "Specialized insurance law expertise",
        "Experience with all types of insurance products",
        "Strong track record in insurance litigation",
        "Relationships with IRDAI and insurance ombudsman forums",
        "Practical understanding of insurance business and actuarial concepts"
      ],
      relatedActs: [
        "Insurance Act, 1938",
        "Insurance Regulatory and Development Authority Act, 1999",
        "IRDAI (Registration of Indian Insurance Companies) Regulations, 2000",
        "IRDAI (Insurance Brokers) Regulations, 2018",
        "Motor Vehicles Act, 1988",
        "Consumer Protection Act, 2019"
      ]
    }
  },
  {
    slug: "defence-aviation-space",
    title: "Defence, Aviation & Space",
    shortTitle: "Defence, Aviation & Space",
    description: "Specialized legal services for defense, aviation, and space sectors covering procurement, regulations, licensing, and operations.",
    metaDescription: "Defence & aviation lawyers in India. Defense procurement, aircraft leasing, DGCA compliance, space law & aerospace advisory.",
    keywords: ["defence lawyers India", "aviation lawyers Delhi", "DGCA compliance", "aircraft leasing", "space law India", "aerospace legal"],
    icon: "✈️",
    content: {
      overview: "Our Defence, Aviation & Space practice serves defense contractors, airlines, aircraft lessors, aerospace companies, and space technology firms with specialized legal advisory on regulations, transactions, and operations.",
      services: [
        "Defence Procurement and Offset Obligations",
        "Aircraft Acquisition, Leasing, and Financing",
        "DGCA Licensing and Regulatory Compliance",
        "Airport Development and Operations",
        "Ground Handling and MRO Agreements",
        "Aviation Safety and Accident Investigations",
        "Drone Regulations and UAV Operations",
        "Space Law and Satellite Communications",
        "Remote Sensing and ISRO Approvals",
        "Export Control and Defense Trade",
        "Government Contracts and DPP Compliance",
        "Aviation Insurance and Claims"
      ],
      expertise: [
        "Defence procurement contracts and offset advisory",
        "Aircraft lease agreements (dry lease, wet lease)",
        "DGCA approvals and air operator permits",
        "Drone regulations and UAS compliance",
        "Space technology licensing and satellite operations"
      ],
      whyChooseUs: [
        "Niche expertise in highly regulated defence and aviation sectors",
        "Experience with Defence Procurement Procedure (DPP) and DAP",
        "DGCA and airport authority regulatory relationships",
        "Understanding of technical and operational requirements",
        "Strategic advisory aligned with national security considerations"
      ],
      relatedActs: [
        "Aircraft Act, 1934",
        "Aircraft Rules, 1937",
        "Defence Procurement Procedure (DPP) / Defence Acquisition Procedure (DAP)",
        "Carriage by Air Act, 1972",
        "Airports Authority of India Act, 1994",
        "Space Activities Bill (under consideration)",
        "Remote Sensing Data Policy, 2011"
      ]
    }
  }
];

export const getPracticeAreaBySlug = (slug: string): PracticeArea | undefined => {
  return practiceAreasData.find((area) => area.slug === slug);
};

export const getAllPracticeAreaSlugs = (): string[] => {
  return practiceAreasData.map((area) => area.slug);
};
