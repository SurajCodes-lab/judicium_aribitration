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
    keywords: [
      // Tier 1 — head terms
      "arbitration India",
      "ADR services Delhi",
      "commercial arbitration",
      "international arbitration India",
      "arbitration lawyers Delhi",
      // Tier 2 — commercial intent
      "DIAC arbitration counsel",
      "MCIA arbitration India",
      "institutional arbitration lawyers",
      "arbitration firm Delhi NCR",
      "arbitrator appointment lawyers",
      // Tier 3 — long-tail
      "Section 9 Arbitration Act India",
      "emergency arbitrator India",
      "NN Global stamping arbitration counsel",
      "foreign award enforcement India",
      "SIAC ICC LCIA counsel India",
    ],
    icon: "⚖️",
    content: {
      overview: "Judicium Arbitration is a premier arbitration and alternative dispute resolution firm in North India, with offices strategically located in New Delhi, NCR, and Chandigarh. Our arbitration and ADR practice resolves complex domestic and international commercial disputes through arbitration, mediation, and conciliation under the Arbitration and Conciliation Act, 1996, as amended in 2015, 2019, and 2021, read with the Commercial Courts Act, 2015 and India's New York Convention obligations. We act as counsel and advise on arbitrator appointments under Section 11, Section 9 and Section 17 interim relief, setting-aside challenges under Section 34, and enforcement of domestic and foreign awards, including ad-hoc and institutional references before DIAC, MCIA, ICC, SIAC, and LCIA. Typical clients include construction and infrastructure majors, banks and NBFCs, real estate developers, and joint-venture partners. We appear before the Delhi High Court, Punjab & Haryana High Court, and the Supreme Court of India across Delhi NCR and North India.",
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
    keywords: [
      // Tier 1
      "banking lawyers India",
      "finance law Delhi",
      "NPA resolution",
      "SARFAESI Act lawyers",
      "loan recovery India",
      "RBI compliance",
      // Tier 2
      "DRT DRAT lawyers Delhi",
      "SARFAESI possession lawyer",
      "IBC financial creditor counsel",
      "banking arbitration India",
      "corporate debt restructuring lawyers",
      // Tier 3
      "digital lending RBI compliance",
      "fintech regulatory advisory India",
      "OTS settlement lawyers India",
      "wilful defaulter proceedings counsel",
    ],
    icon: "🏦",
    content: {
      overview: "Our Banking & Finance practice provides end-to-end legal services to public and private sector banks, NBFCs, asset reconstruction companies, fintech and digital lending platforms, and borrowers across Delhi NCR and North India. We advise on the full regulatory framework governing lending and recovery, including the Reserve Bank of India Act, 1934, the Banking Regulation Act, 1949, RBI Master Directions, the SARFAESI Act, 2002, the Recovery of Debts Due to Banks and Financial Institutions Act, 1993, and the Insolvency and Bankruptcy Code, 2016. Our work spans NPA resolution and loan recovery, SARFAESI possession and Section 14 District Magistrate applications, debt restructuring and one-time settlements, wilful defaulter and banking fraud proceedings, and digital lending compliance. We represent lenders and borrowers before the Debt Recovery Tribunals and DRAT at Delhi, the NCLT, and the High Courts across the region, combining transactional documentation with aggressive enforcement and recovery strategy.",
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
        },
        {
          question: "What is the minimum loan amount for invoking the SARFAESI Act?",
          answer: "SARFAESI can be invoked only where the secured debt exceeds ₹1 lakh and the account has been classified as an NPA, and it does not apply where the outstanding is less than 20% of the principal plus interest. Agricultural land and certain other assets are also excluded. Judicium Arbitration advises lenders in Delhi NCR on whether SARFAESI, DRT, or IBC is the most effective route for a given exposure."
        },
        {
          question: "Can a borrower challenge a SARFAESI possession notice in India?",
          answer: "Yes. A borrower can file a securitisation application under Section 17 of the SARFAESI Act before the Debt Recovery Tribunal challenging measures taken under Section 13(4), typically within 45 days. Borrowers cannot bypass this remedy by approaching a civil court, as Section 34 bars civil court jurisdiction, though writ relief before the High Court remains available in limited circumstances."
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
    keywords: [
      // Tier 1
      "capital markets India",
      "SEBI lawyers Delhi",
      "IPO advisors India",
      "securities law India",
      "takeover code lawyers",
      "corporate governance counsel",
      // Tier 2
      "ICDR Regulations IPO counsel",
      "SEBI investigation defense",
      "listing obligations LODR advisory",
      "mutual fund regulatory India",
      // Tier 3
      "SEBI insider trading defense lawyer",
      "AIF Regulations counsel India",
      "REIT InvIT structuring lawyers",
      "FPI compliance India",
    ],
    icon: "📈",
    content: {
      overview: "Our Capital Markets practice advises corporates, financial institutions, merchant bankers, promoters, and institutional investors across Delhi NCR and North India on securities offerings, listing-stage compliance, and corporate governance. We work under the framework of the SEBI Act, 1992, the Companies Act, 2013, and the key SEBI regulations governing the markets, including the ICDR Regulations, 2018 for IPOs, rights issues and QIPs, the LODR Regulations, 2015 for continuous listing obligations, the SAST (Takeover) Regulations, 2011, the PIT (Prohibition of Insider Trading) Regulations, 2015, and the AIF, FPI, REIT and InvIT frameworks. Typical engagements range from structuring public and private offerings and advising boards on disclosure and UPSI controls, to defending SEBI investigations, show-cause notices, and enforcement actions, with appeals before the Securities Appellate Tribunal. We also advise on NSE and BSE listing and post-listing compliance for issuers headquartered in the region.",
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
      ],
      faqs: [
        {
          question: "What is the difference between an IPO and a QIP in India?",
          answer: "An IPO is a public offer of securities to retail and institutional investors leading to a listing, governed by the SEBI ICDR Regulations, 2018 with extensive disclosure and prospectus requirements. A QIP (Qualified Institutions Placement) is a faster private placement by an already-listed company to qualified institutional buyers under Chapter VI of the ICDR Regulations, requiring far less documentation and no prior SEBI approval."
        },
        {
          question: "When is an open offer triggered under the SEBI Takeover Code?",
          answer: "Under the SEBI SAST Regulations, 2011, an acquirer must make an open offer to public shareholders on acquiring 25% or more of voting rights, on acquiring control regardless of shareholding, or on creeping acquisition of more than 5% in a financial year beyond the 25% threshold. The mandatory open offer must be for at least 26% of the target's shares."
        },
        {
          question: "What are the penalties for insider trading in India?",
          answer: "Insider trading is prohibited under the SEBI PIT Regulations, 2015 and Section 15G of the SEBI Act, which provides for a penalty of up to ₹25 crores or three times the profit made, whichever is higher. SEBI can also pass directions disgorging unlawful gains and debarring persons from the securities market. Judicium Arbitration advises listed companies and individuals in Delhi NCR on PIT compliance and enforcement defence."
        },
        {
          question: "How long does the IPO approval process take with SEBI?",
          answer: "After filing the draft red herring prospectus (DRHP), SEBI typically issues its observations within 30 to 90 days, though queries and the company's responses can extend this. The overall timeline from DRHP filing to listing, including stock exchange in-principle approvals and the bidding period, commonly runs four to six months depending on market conditions and the quality of disclosures."
        }
      ]
    }
  },
  {
    slug: "competition-antitrust",
    title: "Competition and Anti-Trust",
    shortTitle: "Competition & Anti-Trust",
    description: "Competition law advisory covering CCI compliance, anti-competitive practices, merger control, and cartel investigations.",
    metaDescription: "Competition law experts in India. CCI compliance, merger notifications, anti-trust advisory, cartel defense & competition litigation.",
    keywords: [
      // Tier 1
      "competition law India",
      "CCI lawyers",
      "antitrust India",
      "merger control lawyers",
      "cartel defense India",
      "competition commission counsel",
      // Tier 2
      "CCI merger filing advisor",
      "abuse of dominance defense",
      "leniency application India",
      "anti-competitive agreements counsel",
      // Tier 3
      "Combination Regulations Section 6 advisor",
      "NCLAT antitrust appeals India",
      "gun jumping defense India",
      "Big Tech antitrust lawyer Delhi",
    ],
    icon: "🎯",
    content: {
      overview: "Our Competition and Anti-Trust practice advises Indian and multinational companies, trade associations, and PSUs across Delhi NCR and North India on the full spectrum of issues under the Competition Act, 2002, as substantially amended by the Competition (Amendment) Act, 2023. We handle merger and acquisition notifications to the Competition Commission of India under Section 5 and Section 6 and the Combination Regulations, including assessment of asset and turnover thresholds, the deal-value threshold, and green-channel filings. Our work also covers defence in cartel and bid-rigging investigations under Section 3, leniency applications, abuse-of-dominance matters under Section 4, dawn-raid response, and competition compliance programmes. We represent clients before the CCI, the Director General, and in appeals before the National Company Law Appellate Tribunal (NCLAT) and the Supreme Court, advising on gun-jumping risk and antitrust issues in the technology, pharmaceuticals, cement, and digital-platform sectors.",
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
      ],
      faqs: [
        {
          question: "How long does a CCI merger approval take in India?",
          answer: "Most combinations are cleared in Phase I, which the Competition (Amendment) Act, 2023 has shortened, with the CCI required to form a prima facie opinion within 30 calendar days of notification. Complex deals raising appreciable adverse effect on competition concerns may proceed to a detailed Phase II inquiry, which can take up to 150 days. Green-channel transactions are deemed approved on filing."
        },
        {
          question: "When is a merger notification to the CCI mandatory?",
          answer: "A combination must be notified where the parties cross the asset or turnover thresholds prescribed under Section 5 of the Competition Act, 2002, or where the transaction value exceeds ₹2,000 crores with substantial business operations in India under the new deal-value threshold. Small-target (de minimis) exemptions may apply. Judicium Arbitration advises clients in Delhi NCR on whether a filing is required and on green-channel eligibility."
        },
        {
          question: "What is a leniency application under Indian competition law?",
          answer: "Under Section 46 of the Competition Act and the CCI Lesser Penalty Regulations, a cartel member that is first to make a full and true disclosure can obtain a reduction in penalty of up to 100%, with later applicants eligible for lower reductions. The applicant must cease participation in the cartel and cooperate genuinely throughout the investigation by the Director General."
        },
        {
          question: "What is gun-jumping and how can it be avoided?",
          answer: "Gun-jumping is consummating or partially implementing a notifiable combination before CCI approval, in breach of the standstill obligation under Section 6(2A), and attracts penalties of up to 1% of the combined assets or turnover. It is avoided by keeping the parties independent until clearance, limiting pre-closing information exchange, and not exercising control or transferring shares before the deal is approved."
        }
      ]
    }
  },
  {
    slug: "corporate-mergers-acquisitions",
    title: "Corporate Mergers & Acquisitions",
    shortTitle: "M&A",
    description: "End-to-end M&A advisory including deal structuring, due diligence, regulatory approvals, and transaction documentation.",
    metaDescription: "M&A lawyers in Delhi NCR. Expert advisory on mergers, acquisitions, deal structuring, due diligence & regulatory approvals in India.",
    keywords: [
      // Tier 1
      "M&A lawyers India",
      "merger advisory Delhi",
      "acquisition lawyers India",
      "due diligence India",
      "corporate restructuring counsel",
      // Tier 2
      "cross border M&A counsel India",
      "share purchase agreement lawyers",
      "scheme of arrangement NCLT",
      "slump sale advisory Delhi",
      // Tier 3
      "SPA SHA negotiation lawyers India",
      "Companies Act 230-232 scheme counsel",
      "FEMA M&A advisory India",
      "ODI compliance lawyers Delhi",
    ],
    icon: "🤝",
    content: {
      overview: "Our Corporate Mergers & Acquisitions practice provides end-to-end advisory on domestic and cross-border mergers, acquisitions, joint ventures, and corporate restructuring for promoters, strategic acquirers, PE/VC investors, and target companies across Delhi NCR and North India. We structure and execute share and asset purchases, slump sales, demergers, and court-approved schemes of arrangement and amalgamation under Sections 230 to 232 of the Companies Act, 2013, and manage the associated regulatory approvals before the NCLT, SEBI, the CCI, and the RBI. Our work covers legal and commercial due diligence, deal structuring with tax-efficiency under the Income Tax Act, 1961, FEMA and FDI/ODI compliance for cross-border deals, and negotiation of definitive agreements such as SPAs, SHAs, and JV agreements. We also advise listed companies on takeover-code compliance and provide post-merger integration and dispute-resolution support throughout the region.",
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
      ],
      faqs: [
        {
          question: "What is the difference between a share purchase and an asset purchase?",
          answer: "In a share purchase the buyer acquires the target company's equity and steps into all its assets and liabilities, including contingent and hidden ones, whereas in an asset purchase the buyer cherry-picks specific assets and assumes only agreed liabilities. Asset deals, often structured as a slump sale under the Income Tax Act, 1961, offer cleaner liability ring-fencing but require third-party consents and fresh transfers of contracts and licences."
        },
        {
          question: "How does a scheme of arrangement work under the Companies Act, 2013?",
          answer: "A merger, demerger, or compromise is implemented as a scheme of arrangement under Sections 230 to 232, which requires approval by the prescribed majority of shareholders and creditors and sanction by the National Company Law Tribunal. The NCLT process involves notices to the RoC, Income Tax authorities, SEBI, and the Official Liquidator, and typically takes six to nine months depending on objections."
        },
        {
          question: "Do I need CCI or RBI approval for an M&A deal in India?",
          answer: "CCI approval is required where the transaction crosses the combination thresholds under the Competition Act, 2002, while RBI/FEMA compliance applies to any deal involving foreign investment or remittance, including pricing-guideline and reporting requirements. Judicium Arbitration advises acquirers in Delhi NCR on mapping all applicable regulatory approvals before signing."
        },
        {
          question: "What is the role of due diligence in an acquisition?",
          answer: "Due diligence is the investigation of the target's legal, financial, tax, and commercial position to identify risks, liabilities, and deal-breakers before closing. Findings drive deal pricing, the scope of representations, warranties, and indemnities, and any conditions precedent in the share purchase agreement, and are essential to allocating risk fairly between buyer and seller."
        }
      ]
    }
  },
  {
    slug: "corporate-commercial",
    title: "Corporate and Commercial",
    shortTitle: "Corporate & Commercial",
    description: "General corporate and commercial law services including company incorporation, contracts, corporate governance, and regulatory compliance.",
    metaDescription: "Corporate lawyers in Delhi NCR. Company incorporation, commercial contracts, corporate governance, compliance & secretarial services.",
    keywords: [
      // Tier 1
      "corporate lawyers Delhi",
      "company law India",
      "commercial contracts lawyers",
      "corporate governance India",
      "company secretary services",
      // Tier 2
      "Companies Act 2013 advisory",
      "contract drafting lawyers Delhi",
      "corporate compliance India",
      "board governance counsel",
      // Tier 3
      "shareholder agreement drafting India",
      "MSME contract lawyer Delhi",
      "corporate secretarial Delhi NCR",
      "joint venture agreement lawyers India",
    ],
    icon: "🏢",
    content: {
      overview: "Our Corporate and Commercial practice offers a full range of legal services to startups, MSMEs, family businesses, and large corporations across Delhi NCR and North India, acting effectively as outsourced general counsel. We advise on company and LLP incorporation, corporate structuring and reorganisation, and ongoing governance and secretarial compliance under the Companies Act, 2013, the Limited Liability Partnership Act, 2008, and applicable RoC and FEMA requirements. Our commercial work covers drafting and negotiating contracts of every kind, including shareholders' agreements, joint ventures, distribution and franchise arrangements, and service and supply agreements under the Indian Contract Act, 1872, together with FDI structuring and foreign investment advisory. We support clients with annual ROC filings, board and shareholder governance, and day-to-day legal advisory, helping businesses in the region stay compliant while pursuing growth, fundraising, and expansion.",
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
      ],
      faqs: [
        {
          question: "What is the difference between a Private Limited Company and an LLP in India?",
          answer: "A Private Limited Company is incorporated under the Companies Act, 2013 and is preferred for raising equity and ESOPs but carries heavier compliance, while an LLP is formed under the Limited Liability Partnership Act, 2008 and offers limited liability with lighter compliance and pass-through flexibility. Startups seeking venture funding usually choose a private limited company, whereas professional and family businesses often prefer an LLP."
        },
        {
          question: "What annual compliances must a private company in India meet?",
          answer: "A private limited company must hold board and annual general meetings, file its financial statements in Form AOC-4 and annual return in Form MGT-7 with the Registrar of Companies, maintain statutory registers, and comply with director KYC (DIR-3 KYC) and auditor appointment requirements under the Companies Act, 2013. Non-compliance attracts daily penalties and can lead to director disqualification."
        },
        {
          question: "Is a shareholders' agreement legally binding in India?",
          answer: "Yes, a shareholders' agreement is enforceable as a contract under the Indian Contract Act, 1872, but to bind the company and third parties its key provisions, such as transfer restrictions and board nomination rights, should also be incorporated into the Articles of Association. Judicium Arbitration drafts and negotiates SHAs for promoters and investors across Delhi NCR."
        },
        {
          question: "What approvals are needed for foreign investment into an Indian company?",
          answer: "Most sectors permit foreign direct investment under the automatic route without prior government approval, subject to FEMA pricing guidelines and post-investment reporting in Form FC-GPR to the RBI. Sectors on the approval route, or investments from countries sharing a land border with India, require prior government approval before the investment can be made."
        }
      ]
    }
  },
  {
    slug: "data-privacy-cybersecurity",
    title: "Data Privacy & Cybersecurity",
    shortTitle: "Data Privacy & Cybersecurity",
    description: "Data protection and cybersecurity advisory covering DPDP Act compliance, CERT-In regulations, cyber incident response, and digital compliance.",
    metaDescription: "Data privacy & cybersecurity lawyers in India. DPDP Act compliance, CERT-In advisory, data breach response & IT Act compliance.",
    keywords: [
      // Tier 1
      "data privacy India",
      "DPDP Act lawyers",
      "cybersecurity legal",
      "IT Act compliance",
      "data protection India",
      "cyber law Delhi",
      // Tier 2
      "DPDP Act 2023 compliance counsel",
      "GDPR India advisory",
      "data breach response lawyers",
      "CERT-In compliance India",
      // Tier 3
      "cross border data transfer lawyer India",
      "consent manager DPDP advisor",
      "data fiduciary obligations counsel",
      "ransomware incident response lawyers",
    ],
    icon: "🔒",
    content: {
      overview: "Our Data Privacy and Cybersecurity practice helps organisations across Delhi NCR and North India navigate India's rapidly evolving data protection landscape, anchored by the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000 and its rules, and the CERT-In Cyber Security Directions, 2022. We advise data fiduciaries on DPDP Act readiness, including lawful processing and consent frameworks, data principal rights, breach notification, and the obligations of significant data fiduciaries, as well as cross-border data transfer mechanisms. Our cybersecurity work covers CERT-In incident reporting within the six-hour timeline, data breach response and crisis management, intermediary liability and safe-harbour compliance under the IT Rules, 2021, and cyber-forensics and digital-evidence support. We serve technology companies, e-commerce and SaaS platforms, banks, and healthcare providers, helping them build privacy-by-design programmes and respond to regulatory scrutiny from the Data Protection Board of India and CERT-In.",
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
        },
        {
          question: "How quickly must a cyber incident be reported under CERT-In rules?",
          answer: "Under the CERT-In Cyber Security Directions issued in April 2022, organisations must report specified cyber security incidents to CERT-In within six hours of noticing or being made aware of them. Service providers, intermediaries, and data centres must also maintain logs for 180 days within India and synchronise their systems to NTP servers, with non-compliance attracting penalties under Section 70B of the IT Act."
        },
        {
          question: "Can personal data be transferred outside India under the DPDP Act?",
          answer: "Yes. The DPDP Act, 2023 permits cross-border transfer of personal data to any country except those specifically restricted by the Central Government through notification, adopting a negative-list approach. Sector-specific rules, such as RBI's data localisation mandate for payment data, continue to apply, so Judicium Arbitration advises clients in Delhi NCR to map both the DPDP framework and any sectoral localisation requirements."
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
    keywords: [
      // Tier 1
      "real estate lawyers Delhi",
      "RERA lawyers India",
      "property dispute lawyers",
      "real estate transactions India",
      "construction law India",
      // Tier 2
      "RERA complaint lawyer Delhi NCR",
      "property due diligence counsel",
      "lease deed drafting India",
      "builder buyer dispute lawyers",
      // Tier 3
      "RERA NCDRC remedies counsel",
      "society redevelopment lawyers India",
      "slum rehabilitation legal advisory",
      "DDA land disputes lawyer Delhi",
    ],
    icon: "🏗️",
    content: {
      overview: "Our Real Estate & Urban Development practice serves developers, investors, homebuyers, and financial institutions with comprehensive legal services covering property transactions, RERA compliance, construction disputes, and urban development projects across Delhi NCR and North India, including Gurugram, Noida, and Chandigarh, which are among the country's most active real estate markets. We conduct title due diligence and encumbrance verification, draft and register sale, lease, and joint development agreements under the Transfer of Property Act, 1882, the Registration Act, 1908, and the Indian Stamp Act, 1899, and structure real estate financing and EPC and construction contracts. A core part of our work is RERA registration and compliance and builder-buyer dispute resolution under the Real Estate (Regulation and Development) Act, 2016, including representation before the State RERA Authorities, the RERA Appellate Tribunals, and consumer forums. We also advise on land acquisition, conversion, township, SEZ, and smart-city projects throughout the region.",
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
        },
        {
          question: "Can a homebuyer approach both RERA and the Consumer Forum for a delayed flat?",
          answer: "Yes. The Supreme Court has held that RERA does not bar a homebuyer from invoking the Consumer Protection Act, 2019, so a buyer may choose either the State RERA Authority or the consumer commission (NCDRC/State Commission), though not pursue duplicate relief for the same cause. Judicium Arbitration advises buyers in Delhi NCR on the most effective forum based on the project's RERA registration and the relief sought."
        },
        {
          question: "Why is title due diligence important before buying property in India?",
          answer: "Title due diligence verifies that the seller has clear, marketable ownership free of encumbrances, litigation, or defective chain of title, examining records under the Registration Act, 1908 and Transfer of Property Act, 1882 typically over a 30-year period. It protects buyers and lenders from disputes, fraudulent sales, and unenforceable mortgages, and is essential before paying consideration or sanctioning a loan."
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
    keywords: [
      // Tier 1
      "IP lawyers Delhi",
      "trademark registration India",
      "patent attorneys India",
      "copyright lawyers Delhi",
      "IP litigation India",
      // Tier 2
      "trademark opposition counsel India",
      "patent prosecution Delhi",
      "design registration lawyers India",
      "copyright infringement litigation Delhi",
      // Tier 3
      "standard essential patents SEP lawyer India",
      "trade secret protection India",
      "GI registration counsel India",
      "IP arbitration counsel Delhi",
    ],
    icon: "©️",
    content: {
      overview: "Our Intellectual Property Rights practice provides end-to-end IP services, from registration and prosecution to licensing, enforcement, and litigation, for trademarks, patents, copyrights, designs, geographical indications, and trade secrets, serving startups, corporates, and multinationals across Delhi NCR and North India. We file and prosecute applications under the Trade Marks Act, 1999, the Patents Act, 1970, the Copyright Act, 1957, and the Designs Act, 2000, and handle oppositions, rectifications, and international filings via the Madrid Protocol and PCT. Our enforcement practice covers infringement and passing-off suits, anti-counterfeiting raids and John Doe orders, domain-name and UDRP disputes, and IP due diligence for M&A and investments. We litigate before the Delhi High Court, whose Intellectual Property Division (IPD) is India's leading IP forum, and advise on technology transfer, brand and franchise licensing, and IP arbitration throughout the region.",
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
      ],
      faqs: [
        {
          question: "What is the difference between a trademark and a copyright in India?",
          answer: "A trademark protects brand identifiers such as names, logos, and slogans that distinguish goods or services, and is registered under the Trade Marks Act, 1999. A copyright protects original creative works such as literary, artistic, musical, and software works, and arises automatically on creation under the Copyright Act, 1957, with registration being optional but useful as evidence. The two protect different things and can coexist for the same product."
        },
        {
          question: "How long does trademark registration take in India?",
          answer: "Trademark registration typically takes about 12 to 24 months from filing if there are no objections or oppositions, progressing through examination, publication in the Trade Marks Journal, and a four-month opposition window. The applicant can use the TM symbol immediately on filing and the ® symbol only after registration. Judicium Arbitration handles searches, filings, and oppositions for businesses across Delhi NCR."
        },
        {
          question: "How many years is a patent valid in India?",
          answer: "A patent granted under the Patents Act, 1970 is valid for 20 years from the date of filing of the application, subject to payment of annual renewal fees. After expiry the invention falls into the public domain. India follows a first-to-file system, so prompt filing is critical to securing priority."
        },
        {
          question: "What remedies are available for trademark or copyright infringement in India?",
          answer: "Rights holders can seek civil remedies including permanent and interim injunctions, damages or an account of profits, and delivery-up or destruction of infringing goods, typically before the Delhi High Court's Intellectual Property Division. Criminal remedies, including police complaints, search and seizure, and prosecution, are also available for trademark and copyright infringement, and customs recordal can block infringing imports."
        }
      ]
    }
  },
  {
    slug: "insolvency-bankruptcy",
    title: "Insolvency & Bankruptcy",
    shortTitle: "Insolvency & Bankruptcy",
    description: "IBC advisory covering CIRP, liquidation, NCLT proceedings, creditor rights, and corporate insolvency resolution.",
    metaDescription: "Insolvency lawyers in Delhi. IBC advisory, CIRP, NCLT litigation, creditor representation & bankruptcy resolution in India.",
    keywords: [
      // Tier 1
      "IBC lawyers India",
      "insolvency lawyers Delhi",
      "NCLT lawyers India",
      "CIRP advisory",
      "bankruptcy India",
      "creditor rights counsel",
      // Tier 2
      "Section 7 9 IBC lawyer",
      "resolution professional advisory",
      "IBC liquidation counsel",
      "NCLAT appeals India",
      // Tier 3
      "cross border insolvency lawyer India",
      "personal guarantor IBC counsel",
      "pre-pack insolvency counsel India",
      "operational creditor application IBC",
    ],
    icon: "⚖️",
    content: {
      overview: "Our Insolvency and Bankruptcy practice advises financial creditors, operational creditors, corporate debtors, resolution applicants, and insolvency professionals on all aspects of the Insolvency and Bankruptcy Code, 2016 and the IBBI regulations made under it, across Delhi NCR and North India. We initiate and defend the Corporate Insolvency Resolution Process under Sections 7, 9, and 10, advise members of the Committee of Creditors on voting and commercial decisions, and help resolution applicants structure, value, and submit resolution plans for approval under Section 31. Our work also covers liquidation, avoidance applications for preferential, undervalued, and fraudulent transactions, personal-guarantor insolvency, pre-packaged insolvency (PPIRP) for MSMEs, and cross-border insolvency. We appear before the National Company Law Tribunal at New Delhi and Chandigarh, the NCLAT, and the higher courts, combining legal strategy with financial and operational insight to act within the IBC's strict statutory timelines.",
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
        },
        {
          question: "What is the minimum default amount to file under the IBC?",
          answer: "An application for CIRP can be filed only where the amount in default is at least ₹1 crore, the threshold having been raised from ₹1 lakh by a March 2020 notification. The default must be of a debt that is due and payable and not subject to a pre-existing genuine dispute, which is especially relevant for operational creditors filing under Section 9."
        },
        {
          question: "What is the order of priority for distributing proceeds in liquidation?",
          answer: "Section 53 of the IBC sets out the liquidation waterfall, under which insolvency-process costs rank first, followed by workmen's dues and secured creditors' dues for 24 months, then other employee wages, unsecured financial creditors, government dues and remaining secured debt, and finally equity shareholders. Judicium Arbitration advises creditors in Delhi NCR on their ranking and recovery prospects within this priority."
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
    keywords: [
      // Tier 1
      "labour lawyers Delhi",
      "employment law India",
      "industrial disputes counsel",
      "HR legal compliance",
      "termination laws India",
      // Tier 2
      "POSH Act compliance counsel",
      "ID Act tribunal lawyer Delhi",
      "employment contract drafting Delhi",
      "gratuity bonus advisory India",
      // Tier 3
      "Code on Wages compliance India",
      "OSH Code advisory counsel",
      "contract labour CLRA lawyer India",
      "EPF ESIC litigation counsel",
    ],
    icon: "👥",
    content: {
      overview: "Our Labour and Employment practice advises employers, multinationals, and senior executives across Delhi NCR and North India on the full range of Indian labour and employment laws, covering compliance, contracts, disputes, and workplace policies under central and state legislations. We handle employment and consultancy agreements, ESOP and executive compensation structuring, terminations and retrenchments, and industrial-dispute and trade-union matters under the Industrial Disputes Act, 1947, while advising on statutory benefits under the EPF Act, 1952, the ESI Act, 1948, and the Payment of Gratuity Act, 1972. A key area is POSH compliance and Internal Committee support under the Sexual Harassment of Women at Workplace Act, 2013, alongside contract-labour compliance under the CLRA Act, 1970 and readiness for the four new Labour Codes. We conduct labour audits and represent clients before Labour Courts, Industrial Tribunals, and the High Courts across the region, balancing business needs with statutory protections.",
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
      ],
      faqs: [
        {
          question: "Is an Internal Committee under the POSH Act mandatory for every employer?",
          answer: "Yes. Under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, every employer with 10 or more employees must constitute an Internal Committee, headed by a senior woman employee and including an external member from an NGO or with expertise in the field. Failure to constitute an IC or comply with the Act attracts fines and, on repeat default, cancellation of business licences."
        },
        {
          question: "How much notice or compensation is required to terminate an employee in India?",
          answer: "For workmen, retrenchment under Section 25F of the Industrial Disputes Act, 1947 generally requires one month's notice or pay in lieu, plus retrenchment compensation of 15 days' average pay for each completed year of service, with government permission needed for larger establishments. For non-workmen, notice and severance are governed primarily by the employment contract and applicable Shops and Establishments Act."
        },
        {
          question: "What is the difference between a workman and a non-workman under labour law?",
          answer: "A workman, as defined in the Industrial Disputes Act, 1947, is a person doing manual, skilled, technical, operational, or clerical work and excludes those mainly in managerial, administrative, or supervisory roles above a wage threshold. Workmen enjoy stronger statutory protections on termination and access to Labour Courts, whereas non-workmen rely largely on contract; Judicium Arbitration advises Delhi NCR employers on correct classification."
        },
        {
          question: "Are the new Labour Codes in force in India?",
          answer: "India has consolidated 29 central labour laws into four Labour Codes covering wages, industrial relations, social security, and occupational safety, and these have been enacted but await full implementation pending notification of rules by the Centre and States. Employers should begin aligning wage structures, contracts, and policies now, as the Codes will significantly change definitions of wages, working hours, and compliance obligations."
        }
      ]
    }
  },
  {
    slug: "dispute-resolution-litigation",
    title: "Dispute Resolution – Litigation",
    shortTitle: "Litigation",
    description: "Comprehensive litigation services across civil, commercial, constitutional, and regulatory matters before all courts and tribunals in India.",
    metaDescription: "Litigation lawyers in Delhi NCR. Expert representation in Supreme Court, High Courts & tribunals. Commercial, civil & constitutional litigation.",
    keywords: [
      // Tier 1
      "litigation lawyers Delhi",
      "Supreme Court lawyers India",
      "High Court lawyers Delhi",
      "civil litigation India",
      "commercial litigation Delhi",
      // Tier 2
      "Commercial Courts Act lawyer",
      "SLP drafting Supreme Court India",
      "writ petition lawyer Delhi HC",
      "recovery suit counsel India",
      // Tier 3
      "original side commercial division lawyer",
      "CPC Order 7 11 application counsel",
      "Section 482 quashing counsel Delhi",
      "Article 32 226 writ petition lawyer",
    ],
    icon: "⚖️",
    content: {
      overview: "Our Dispute Resolution and Litigation practice provides strategic representation across all courts and tribunals in India, with particular strength before the Supreme Court of India, the Delhi High Court, and the Punjab & Haryana High Court at Chandigarh, serving clients throughout Delhi NCR and North India. We handle complex commercial, civil, constitutional, and regulatory disputes, including suits and appeals under the Code of Civil Procedure, 1908, fast-tracked commercial disputes under the Commercial Courts Act, 2015, recovery and enforcement actions, and specific-performance and injunction matters under the Specific Relief Act, 1963. Our constitutional practice covers writ petitions under Articles 226 and 32, public interest litigation, and service and administrative-law matters, while our criminal-side work includes quashing petitions under Section 482 CrPC and bail. We pursue interim relief, appeals, revisions, and execution, and routinely draft and argue special leave petitions, offering aggressive yet commercially sensible advocacy from pleadings through to enforcement.",
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
      ],
      faqs: [
        {
          question: "What is the difference between a writ petition and a civil suit in India?",
          answer: "A writ petition is filed before a High Court under Article 226 or the Supreme Court under Article 32 to enforce fundamental or legal rights against the State or public authorities, and is decided on affidavits without a full trial. A civil suit is filed before a civil court under the Code of Civil Procedure, 1908 to enforce private rights, and involves pleadings, framing of issues, evidence, and a trial."
        },
        {
          question: "How are commercial disputes resolved faster under the Commercial Courts Act, 2015?",
          answer: "The Commercial Courts Act, 2015 routes commercial disputes above the specified value to dedicated Commercial Courts and Commercial Divisions of High Courts, with streamlined procedures, mandatory pre-institution mediation in many cases, case-management hearings, and strict timelines for written statements and disclosure. This significantly reduces delay compared with ordinary civil litigation."
        },
        {
          question: "What is a Special Leave Petition (SLP) before the Supreme Court?",
          answer: "An SLP under Article 136 of the Constitution is a discretionary remedy allowing a party to seek the Supreme Court's leave to appeal against any judgment or order of a court or tribunal in India. The Court first decides whether to grant leave, and only if leave is granted does the matter proceed as a civil or criminal appeal. Judicium Arbitration regularly drafts and argues SLPs for clients across North India."
        },
        {
          question: "What is the limitation period for filing a civil suit in India?",
          answer: "Limitation periods are prescribed by the Limitation Act, 1963 and vary by the nature of the claim, for example three years for a suit on a contract or for recovery of money, and twelve years for suits relating to immovable property. A suit filed after the limitation period is liable to be dismissed as time-barred, so timely action is essential to preserve a claim."
        }
      ]
    }
  },
  {
    slug: "technology-media-telecommunication",
    title: "Technology, Media & Telecommunication",
    shortTitle: "TMT",
    description: "TMT legal services covering technology transactions, media law, telecom regulations, digital content, and IT contracts.",
    metaDescription: "TMT lawyers in India. Technology contracts, media law, telecom regulations, SaaS agreements, licensing & IT legal advisory.",
    keywords: [
      // Tier 1
      "TMT lawyers India",
      "technology law Delhi",
      "media law India",
      "telecom regulations counsel",
      "IT contracts lawyers",
      "SaaS legal counsel",
      // Tier 2
      "TRAI compliance counsel",
      "OTT regulation advisory India",
      "telecom licensing lawyer",
      "online content takedown counsel",
      // Tier 3
      "Telecommunications Act 2023 advisor",
      "gaming law India counsel",
      "cloud services contracts lawyer",
      "defamation media litigation Delhi",
    ],
    icon: "📡",
    content: {
      overview: "Our Technology, Media & Telecommunication practice serves software and SaaS companies, media and entertainment houses, telecom operators, OTT and gaming platforms, and fintechs across Delhi NCR and North India with comprehensive advisory on transactions, regulation, and disputes in the TMT sector. We draft and negotiate technology contracts including software licensing, SaaS, cloud, system-integration, and IP and technology-transfer agreements, and advise on telecom licensing and regulatory compliance under the Telecommunications Act, 2023 and the framework administered by TRAI and the Department of Telecommunications. Our media practice covers content licensing and distribution, broadcasting and cable regulation, OTT and digital-media advisory under the IT Rules, 2021, and defamation and takedown disputes, while our digital-economy work spans e-commerce, online gaming, payment systems, and intermediary-liability issues under the Information Technology Act, 2000. We combine deep understanding of evolving digital regulation with practical, business-friendly solutions and dispute support throughout the region.",
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
      ],
      faqs: [
        {
          question: "Are OTT platforms regulated in India?",
          answer: "Yes. OTT and digital news platforms are regulated as publishers under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, which require a three-tier grievance redressal mechanism, content classification (self-rating into age categories), and appointment of a grievance officer. They remain distinct from traditional broadcasters and are not currently licensed by the Ministry of Information and Broadcasting in the same way as TV channels."
        },
        {
          question: "What is intermediary safe harbour under the IT Act, 2000?",
          answer: "Section 79 of the Information Technology Act, 2000 grants intermediaries such as marketplaces, social media, and hosting platforms immunity from liability for third-party content, provided they observe due diligence under the IT Rules, 2021 and act on actual knowledge or government or court orders to remove unlawful content. Loss of this safe harbour can expose a platform to direct liability."
        },
        {
          question: "Does a SaaS or cloud agreement need to comply with Indian data protection law?",
          answer: "Yes. SaaS and cloud arrangements that involve personal data of Indian users must comply with the Digital Personal Data Protection Act, 2023 and the IT Act framework, addressing consent, security safeguards, breach notification, sub-processor flow-down, and cross-border transfer terms. Judicium Arbitration drafts technology contracts for Delhi NCR clients with data-protection and liability allocation built in."
        },
        {
          question: "What does the Telecommunications Act, 2023 change for the sector?",
          answer: "The Telecommunications Act, 2023 replaces the colonial-era Indian Telegraph Act, 1885 and overhauls licensing through a simplified authorisation regime, provides a framework for spectrum assignment including administrative allocation in defined cases, and introduces provisions on right of way, user protection, and interception. Operators and infrastructure providers should review their authorisations and compliance obligations as the rules are rolled out."
        }
      ]
    }
  },
  {
    slug: "projects-infrastructure",
    title: "Projects & Infrastructure",
    shortTitle: "Projects & Infrastructure",
    description: "Infrastructure and project finance legal services covering PPP, EPC contracts, project development, and regulatory approvals.",
    metaDescription: "Infrastructure lawyers in India. PPP projects, EPC contracts, project finance, regulatory clearances & infrastructure development.",
    keywords: [
      // Tier 1
      "infrastructure lawyers India",
      "PPP projects counsel",
      "EPC contracts lawyers",
      "project finance India",
      "infrastructure development Delhi",
      // Tier 2
      "PPP concession agreement lawyer",
      "FIDIC contracts counsel India",
      "road highways infrastructure advisory",
      "energy projects legal counsel",
      // Tier 3
      "hybrid annuity model HAM counsel",
      "model concession agreement advisor",
      "smart cities mission legal counsel",
      "infrastructure arbitration India lawyer",
    ],
    icon: "🏗️",
    content: {
      overview: "Our Projects & Infrastructure practice advises developers, EPC contractors, lenders, and government and PSU entities on large-scale infrastructure projects across Delhi NCR and North India, including roads and highways, airports, metro and urban transport, power, renewable energy, and smart cities. We structure public-private partnerships and concession arrangements on BOT, BOOT, and hybrid annuity (HAM) models, often based on Model Concession Agreements, and draft and negotiate EPC and engineering contracts, frequently on FIDIC-based forms, along with power purchase agreements and project-finance and security documentation. Our regulatory work covers approvals and environmental and forest clearances under the Environment Protection Act, 1986 and the Forest Conservation Act, 1980, land acquisition and rehabilitation under the 2013 Land Acquisition Act, electricity-sector matters under the Electricity Act, 2003, and government procurement and tendering. We also handle infrastructure disputes through arbitration and litigation, supporting projects from bidding through to commercial operation across the region.",
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
      ],
      faqs: [
        {
          question: "What is a Hybrid Annuity Model (HAM) in highway projects?",
          answer: "The Hybrid Annuity Model is a PPP structure used widely by NHAI for highway projects in which the government funds 40% of the project cost during construction and the balance is paid to the developer as annuities over the operation period, with the developer not bearing toll or traffic risk. It blends features of EPC and BOT models and is designed to attract private investment while reducing developer risk."
        },
        {
          question: "What clearances are needed before starting an infrastructure project in India?",
          answer: "Depending on the project, developers typically require environmental clearance under the EIA Notification, 2006 (Environment Protection Act, 1986), forest clearance under the Forest Conservation Act, 1980 for forest land, consents to establish and operate from the State Pollution Control Board, and sector-specific approvals such as those from the Airports Authority of India or electricity regulators. Land acquisition and right-of-way must also be secured."
        },
        {
          question: "How are disputes in infrastructure and EPC contracts usually resolved in India?",
          answer: "Most infrastructure and EPC contracts provide for tiered dispute resolution, beginning with engineer's determination or a dispute board, followed by arbitration under the Arbitration and Conciliation Act, 1996, given the technical complexity and need for confidentiality and finality. Judicium Arbitration advises developers and contractors in Delhi NCR on claims, delay and variation disputes, and arbitration strategy."
        },
        {
          question: "What is the difference between BOT and HAM models in PPP projects?",
          answer: "Under a BOT (Build-Operate-Transfer) model the private developer finances, builds, and operates the asset, recovering its investment through user charges or annuities and bearing demand or toll risk, before transferring it to the authority. Under HAM, the government shares the capital cost and the developer is paid fixed annuities without toll risk, making HAM less risky for developers but requiring greater government outlay."
        }
      ]
    }
  },
  {
    slug: "private-equity-investment-funds",
    title: "Private Equity and Investment Funds",
    shortTitle: "PE & Investment Funds",
    description: "Private equity and fund advisory covering fund formation, investments, exits, SEBI compliance, and portfolio management.",
    metaDescription: "PE lawyers in India. Fund formation, venture capital, SEBI AIF compliance, investment structuring & exit advisory.",
    keywords: [
      // Tier 1
      "private equity lawyers India",
      "venture capital Delhi",
      "fund formation India",
      "AIF regulations counsel",
      "startup investments counsel",
      // Tier 2
      "AIF Category I II III counsel",
      "PE term sheet drafting lawyer",
      "fund structuring Delhi",
      "GIFT IFSC fund counsel",
      // Tier 3
      "SAFE convertible notes lawyer India",
      "ESOP structuring counsel",
      "secondary buyout advisory India",
      "distressed asset fund counsel",
    ],
    icon: "💼",
    content: {
      overview: "Our Private Equity and Investment Funds practice advises fund managers, sponsors, institutional and family-office investors, and portfolio companies across Delhi NCR and North India on fund formation, investments, regulatory compliance, and exits under Indian and offshore regimes. We structure and register Alternative Investment Funds across Categories I, II, and III under the SEBI (Alternative Investment Funds) Regulations, 2012, including venture capital, growth-equity, and distressed-asset funds, and draft the full suite of fund documentation such as LPAs, PPMs, and subscription and contribution agreements. On the deal side we advise on term sheets, SAFE and convertible instruments, shareholder and investment agreements, due diligence, and FEMA-compliant inbound investment structuring under the FPI and FVCI routes, including GIFT IFSC vehicles. We also handle carry and incentive arrangements, ESOP structuring, and exits through IPOs, strategic and secondary sales, helping clients align fund economics with SEBI and tax requirements throughout the region.",
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
      ],
      faqs: [
        {
          question: "What are the categories of Alternative Investment Funds in India?",
          answer: "Under the SEBI AIF Regulations, 2012, AIFs are classified into three categories: Category I (venture capital, SME, social-impact, and infrastructure funds that receive incentives), Category II (private equity and debt funds that do not borrow except for operational needs), and Category III (hedge-style funds using complex or leveraged strategies). The category determines the fund's permitted activities, leverage, and tax treatment."
        },
        {
          question: "What is the minimum investment in an AIF in India?",
          answer: "The SEBI AIF Regulations require each investor to commit a minimum of ₹1 crore, with a lower threshold of ₹25 lakhs for directors, employees, and fund managers of the AIF. An AIF scheme must also have a minimum corpus of ₹20 crores (₹10 crores for angel funds) and is generally restricted to a maximum of 1,000 investors per scheme."
        },
        {
          question: "What is the difference between a term sheet and a definitive agreement?",
          answer: "A term sheet is a preliminary, largely non-binding document setting out the key commercial terms of an investment, such as valuation, instrument, and investor rights, while definitive agreements, including the share subscription and shareholders' agreements, are the binding contracts that govern the deal. Certain term-sheet clauses like exclusivity and confidentiality are usually binding. Judicium Arbitration negotiates both for funds and founders in Delhi NCR."
        },
        {
          question: "How can a private equity fund exit its investment in India?",
          answer: "Common exit routes include an initial public offering and sale on listing, a strategic trade sale to an industry buyer, a secondary sale to another financial investor, a buy-back by the company, or promoter purchase under put-option arrangements. The chosen route affects timing, valuation, and tax, and FEMA exit-pricing rules apply where the investor is foreign."
        }
      ]
    }
  },
  {
    slug: "white-collar-crime",
    title: "White Collar Crime",
    shortTitle: "White Collar Crime",
    description: "White collar crime defense covering fraud, corruption, financial crimes, regulatory investigations, and enforcement actions.",
    metaDescription: "White collar crime lawyers in Delhi. Defense against fraud, PMLA, corruption, SEBI/RBI investigations & economic offenses.",
    keywords: [
      // Tier 1
      "white collar crime lawyers Delhi",
      "fraud defense India",
      "PMLA lawyers Delhi",
      "SEBI investigation counsel",
      "economic offenses India",
      // Tier 2
      "PMLA bail lawyer Delhi",
      "ED investigation defense counsel",
      "CBI lawyer Delhi",
      "corporate fraud defense India",
      // Tier 3
      "PMLA Section 50 statement counsel",
      "fugitive economic offender defense",
      "FCRA defense lawyer India",
      "benami transactions defense counsel",
    ],
    icon: "🔍",
    content: {
      overview: "Our White Collar Crime practice defends individuals, directors, and corporations across Delhi NCR and North India in criminal investigations, prosecutions, and regulatory enforcement actions involving economic offences, fraud, corruption, and financial crime. We represent clients in proceedings before the Enforcement Directorate under the Prevention of Money Laundering Act, 2002, including provisional attachment, summons and statements under Section 50, and bail, as well as CBI and police investigations under the Prevention of Corruption Act, 1988 and the offences of cheating and criminal breach of trust under the penal law. Our work also covers SEBI and RBI enforcement, tax and black-money investigations, FEMA contraventions, fugitive-economic-offender and benami proceedings, and corporate-fraud and asset-forfeiture matters. We conduct sensitive internal investigations, manage search and seizure on a 24/7 basis, and appear before the Special Courts, the PMLA Appellate Tribunal, the High Courts, and the Supreme Court, focused on protecting both liberty and reputation.",
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
      ],
      faqs: [
        {
          question: "What is the Prevention of Money Laundering Act (PMLA) and who enforces it?",
          answer: "The Prevention of Money Laundering Act, 2002 criminalises the laundering of proceeds of crime connected to scheduled offences and is enforced by the Enforcement Directorate (ED). The ED can record statements under Section 50, provisionally attach property under Section 5, search and seize, and prosecute before Special Courts, with bail subject to the stringent twin conditions under Section 45."
        },
        {
          question: "What should I do if I receive an ED or CBI summons in India?",
          answer: "You should comply with the summons but seek legal advice before appearing, as statements made to the ED under Section 50 PMLA are admissible in evidence. A lawyer can help prepare responses, organise documents, and protect your rights against self-incrimination. Judicium Arbitration provides 24/7 support for individuals and companies facing ED, CBI, and SFIO action in Delhi NCR."
        },
        {
          question: "Is anticipatory bail available in economic offence cases?",
          answer: "Anticipatory bail under Section 438 CrPC (now Section 482 of the Bharatiya Nagarik Suraksha Sanhita) can be sought in many economic offence cases, but for PMLA matters courts apply the stringent twin conditions of Section 45, requiring the court to be satisfied that the accused is not guilty and unlikely to reoffend. Courts weigh the gravity of the offence, flight risk, and the need for custodial interrogation."
        },
        {
          question: "What is a Fugitive Economic Offender under Indian law?",
          answer: "Under the Fugitive Economic Offenders Act, 2018, a person against whom a warrant has been issued for a scheduled economic offence involving at least ₹100 crores, and who has left India or refuses to return to avoid prosecution, can be declared a fugitive economic offender. Such a declaration allows confiscation of the offender's property, including assets unconnected to the offence."
        }
      ]
    }
  },
  {
    slug: "healthcare-lifesciences",
    title: "Healthcare & Lifesciences",
    shortTitle: "Healthcare",
    description: "Healthcare legal services covering pharma regulations, clinical trials, hospital advisory, medical devices, and health insurance.",
    metaDescription: "Healthcare lawyers in India. Pharma regulations, clinical trials, hospital compliance, medical devices & healthcare advisory.",
    keywords: [
      // Tier 1
      "healthcare lawyers India",
      "pharma regulations counsel",
      "clinical trials India",
      "hospital legal advisory",
      "medical device regulations India",
      // Tier 2
      "CDSCO drug approval counsel",
      "NMC compliance advisory",
      "clinical trial CDSCO lawyer",
      "pharma marketing code counsel",
      // Tier 3
      "ART surrogacy law counsel India",
      "Mental Healthcare Act advisor",
      "telemedicine practice guidelines lawyer",
      "drug pricing DPCO counsel India",
    ],
    icon: "🏥",
    content: {
      overview: "Our Healthcare & Lifesciences practice advises pharmaceutical companies, hospitals, medical-device manufacturers, diagnostics chains, digital-health and telemedicine ventures, and insurers across Delhi NCR and North India on regulatory compliance, transactions, and disputes. We handle drug and clinical-trial approvals before the Central Drugs Standard Control Organisation (CDSCO) and DCGI under the Drugs and Cosmetics Act, 1940 and the New Drugs and Clinical Trials Rules, 2019, medical-device registration under the Medical Devices Rules, 2017, and drug-pricing compliance under the DPCO administered by the NPPA. Our work also covers hospital setup and licensing under the Clinical Establishments Act, 2010, medical-negligence and consumer defence, healthcare M&A and investments, telemedicine compliance under the 2020 Telemedicine Practice Guidelines, and food and nutraceutical matters under the FSSAI regime. We combine domain knowledge with practical advice, supporting domestic and multinational clients from product development through commercialisation and dispute resolution across the region.",
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
      ],
      faqs: [
        {
          question: "What approvals are required to conduct a clinical trial in India?",
          answer: "Clinical trials in India require approval from the Central Drugs Standard Control Organisation (CDSCO) / DCGI and from a registered Ethics Committee, under the New Drugs and Clinical Trials Rules, 2019, along with registration on the Clinical Trials Registry of India. The Rules also mandate informed consent, audio-visual recording in vulnerable-subject trials, and compensation for trial-related injury or death."
        },
        {
          question: "How are medical devices regulated in India?",
          answer: "Medical devices are regulated under the Medical Devices Rules, 2017 read with the Drugs and Cosmetics Act, 1940, with devices classified into risk classes A, B, C, and D and licensed by the State Licensing Authority or CDSCO depending on class. India has progressively brought all medical devices under regulation, requiring importers and manufacturers to obtain registration and licences and to meet quality and labelling standards."
        },
        {
          question: "Is telemedicine legal in India?",
          answer: "Yes. Telemedicine was formally legitimised by the Telemedicine Practice Guidelines, 2020 issued under the Indian Medical Council framework, which permit registered medical practitioners to consult patients remotely subject to conditions on patient identification, consent, prescribing, and record-keeping. Compliance with the IT Act and the DPDP Act, 2023 is also required for handling patient data; Judicium Arbitration advises digital-health ventures in Delhi NCR on this framework."
        },
        {
          question: "What is the DPCO and how does it affect drug pricing?",
          answer: "The Drugs (Prices Control) Order (DPCO), administered by the National Pharmaceutical Pricing Authority (NPPA), caps the prices of scheduled essential medicines listed in the National List of Essential Medicines and limits annual price increases for non-scheduled drugs. Manufacturers must comply with the ceiling prices and reporting requirements, and overcharging can lead to recovery of the overcharged amount with interest and penalties."
        }
      ]
    }
  },
  {
    slug: "international-trade-wto",
    title: "International Trade/WTO",
    shortTitle: "International Trade",
    description: "International trade advisory covering customs, export-import regulations, trade remedies, WTO compliance, and cross-border transactions.",
    metaDescription: "International trade lawyers in India. Customs, export-import, anti-dumping, trade remedies, WTO compliance & DGFT regulations.",
    keywords: [
      // Tier 1
      "international trade lawyers India",
      "customs lawyers Delhi",
      "export import law counsel",
      "anti-dumping India",
      "WTO compliance India",
      // Tier 2
      "DGFT export incentive counsel",
      "customs valuation lawyer Delhi",
      "BIS standards compliance India",
      "FTA RoO advisory counsel",
      // Tier 3
      "anti-subsidy CVD investigation lawyer",
      "GSP RCEP trade counsel India",
      "sanctions OFAC India advisor",
      "SCOMET export control counsel",
    ],
    icon: "🌐",
    content: {
      overview: "Our International Trade and WTO practice advises exporters, importers, manufacturers, and traders across Delhi NCR and North India on customs, trade remedies, export-import regulation, and WTO compliance under Indian and international trade law. We handle customs classification and valuation, refunds and duty disputes under the Customs Act, 1962 and the Customs Tariff Act, 1975, and EXIM compliance and export incentives such as RoDTEP and the Advance Authorisation and EPCG schemes under the Foreign Trade Policy administered by the DGFT. Our trade-remedies work covers anti-dumping, countervailing-duty, and safeguard investigations before the DGTR, while we also advise on Free Trade Agreements and rules-of-origin, SEZ and export-control (SCOMET) compliance, BIS standards, and sanctions exposure. We represent clients in customs adjudication and appeals up to CESTAT and the High Courts and the Supreme Court, combining a global trade perspective with on-the-ground regulatory experience in North India.",
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
      ],
      faqs: [
        {
          question: "What is anti-dumping duty and who decides it in India?",
          answer: "Anti-dumping duty is a remedy imposed on imports priced below their normal value where they cause or threaten material injury to a domestic industry. In India, the Directorate General of Trade Remedies (DGTR) investigates and recommends the duty, which is then imposed by the Ministry of Finance, with appeals lying to CESTAT. The framework is consistent with India's WTO obligations under the Anti-Dumping Agreement."
        },
        {
          question: "What is the RoDTEP scheme for exporters?",
          answer: "The Remission of Duties and Taxes on Exported Products (RoDTEP) scheme refunds embedded central, state, and local duties and taxes that were previously not rebated, credited as transferable duty-credit scrips in the exporter's ledger. Administered under the Foreign Trade Policy via the DGFT and Customs, it replaced the earlier MEIS scheme to make Indian exports WTO-compliant and more competitive."
        },
        {
          question: "How are imported goods classified for customs duty in India?",
          answer: "Imported goods are classified under the Customs Tariff Act, 1975, which follows the internationally harmonised HSN coding system, and the applicable rate of duty depends on the correct classification heading. Misclassification can lead to demands, interest, and penalties, so Judicium Arbitration advises importers in Delhi NCR on classification, valuation, and advance rulings to minimise disputes."
        },
        {
          question: "What is SCOMET and why does it matter for exporters?",
          answer: "SCOMET (Special Chemicals, Organisms, Materials, Equipment and Technologies) is India's list of dual-use and strategic items whose export is restricted and generally requires a licence from the DGFT under the Foreign Trade Policy and the WMD Act, 2005. Exporters of such items must screen products and end-users carefully, as unauthorised export attracts severe penalties and criminal liability."
        }
      ]
    }
  },
  {
    slug: "insurance",
    title: "Insurance",
    shortTitle: "Insurance",
    description: "Insurance law services covering regulatory compliance, policy drafting, claims disputes, reinsurance, and insurance litigation.",
    metaDescription: "Insurance lawyers in India. IRDAI compliance, insurance claims, policy disputes, reinsurance & insurance regulatory advisory.",
    keywords: [
      // Tier 1
      "insurance lawyers India",
      "IRDAI compliance counsel",
      "insurance claims disputes",
      "insurance litigation Delhi",
      "reinsurance law India",
      // Tier 2
      "IRDAI penalty defense counsel",
      "marine cargo insurance lawyer",
      "motor insurance MACT counsel",
      "health insurance disputes lawyer",
      // Tier 3
      "cyber insurance claims counsel",
      "parametric insurance advisory India",
      "surety bond regulations lawyer",
      "ombudsman insurance complaint counsel",
    ],
    icon: "🛡️",
    content: {
      overview: "Our Insurance practice advises life, general, and health insurers, reinsurers, brokers, web aggregators, third-party administrators, and policyholders across Delhi NCR and North India on regulatory compliance, transactions, product matters, and disputes. We work within the framework of the Insurance Act, 1938 and the IRDAI Act, 1999 and the wide range of IRDAI regulations governing registration, products, brokers, and market conduct, advising on licensing, product filing under the use-and-file regime, distribution arrangements, and bancassurance and microinsurance models. Our disputes work covers coverage and claims disputes, policy interpretation, subrogation, and insurance fraud, with representation before the Insurance Ombudsman, consumer forums, the Motor Accident Claims Tribunals, arbitral tribunals, and the High Courts. We also handle reinsurance treaty negotiations, insurance M&A, and emerging lines such as cyber, D&O, and parametric insurance, combining regulatory depth with a practical understanding of underwriting and actuarial issues for clients throughout the region.",
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
      ],
      faqs: [
        {
          question: "What can a policyholder do if an insurance claim is wrongly rejected in India?",
          answer: "A policyholder can first escalate through the insurer's internal grievance redressal mechanism, then approach the Insurance Ombudsman for disputes up to ₹50 lakhs, or file a complaint before the consumer commission under the Consumer Protection Act, 2019 for deficiency of service. Where the policy contains an arbitration clause for quantum disputes, arbitration may also be available. Judicium Arbitration represents policyholders and insurers in Delhi NCR in such disputes."
        },
        {
          question: "Who regulates the insurance sector in India?",
          answer: "The Insurance Regulatory and Development Authority of India (IRDAI), established under the IRDAI Act, 1999, is the statutory regulator that licenses insurers, reinsurers, brokers, and agents, approves products, and frames market-conduct and solvency regulations. It also protects policyholder interests and can impose penalties for regulatory breaches under the Insurance Act, 1938."
        },
        {
          question: "Is arbitration allowed for insurance claim disputes in India?",
          answer: "Insurance policies often contain arbitration clauses, but these typically apply only to disputes over the quantum of a claim once liability is admitted, not to disputes where the insurer wholly denies liability. Where liability itself is repudiated, the matter is usually pursued before consumer or civil forums. The exact scope depends on the policy wording and the Arbitration and Conciliation Act, 1996."
        },
        {
          question: "What is the limitation period for filing an insurance claim dispute?",
          answer: "A consumer complaint relating to an insurance claim must generally be filed within two years from the date the cause of action arose, that is, usually from the date of repudiation, under the Consumer Protection Act, 2019, though delay can be condoned for sufficient cause. For civil suits, the Limitation Act, 1963 prescribes a three-year period, so prompt action after a claim denial is advisable."
        }
      ]
    }
  },
  {
    slug: "defence-aviation-space",
    title: "Defence, Aviation & Space",
    shortTitle: "Defence, Aviation & Space",
    description: "Specialized legal services for defense, aviation, and space sectors covering procurement, regulations, licensing, and operations.",
    metaDescription: "Defence & aviation lawyers in India. Defense procurement, aircraft leasing, DGCA compliance, space law & aerospace advisory.",
    keywords: [
      // Tier 1
      "defence lawyers India",
      "aviation lawyers Delhi",
      "DGCA compliance counsel",
      "aircraft leasing India",
      "space law India",
      "aerospace legal counsel",
      // Tier 2
      "DGCA aircraft registration counsel",
      "Cape Town Convention lawyer India",
      "defence procurement DPP counsel",
      "MRO regulatory advisory India",
      // Tier 3
      "drone UAS regulations India lawyer",
      "Space Activities Bill counsel",
      "Bharat Drone Rules advisor",
      "satellite communications licensing counsel",
    ],
    icon: "✈️",
    content: {
      overview: "Our Defence, Aviation & Space practice serves defence manufacturers and contractors, airlines, aircraft lessors and financiers, MRO and ground-handling providers, drone operators, and space-technology firms across Delhi NCR and North India with specialised advisory on regulation, transactions, and operations in these highly controlled sectors. On the defence side we advise on procurement and offset obligations under the Defence Acquisition Procedure (DAP), indigenisation and joint ventures, and export controls. Our aviation practice covers aircraft acquisition, leasing, and financing, including Cape Town Convention and IDERA issues, DGCA licensing and air operator permits under the Aircraft Act, 1934 and Aircraft Rules, 1937, airport development, and accident investigations. We also handle drone and UAS regulation under the Drone Rules, 2021, and space-sector matters including satellite communications, remote sensing, and IN-SPACe authorisations. We bring niche regulatory knowledge and an understanding of technical and national-security considerations to clients operating throughout the region.",
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
      ],
      faqs: [
        {
          question: "What is the offset obligation in Indian defence procurement?",
          answer: "Under the Defence Acquisition Procedure (DAP), foreign vendors winning eligible defence contracts above a prescribed threshold must discharge an offset obligation, typically 30% of the contract value, by sourcing from India, transferring technology, or investing in Indian defence and aerospace. The policy is designed to build domestic capability under the Make in India and Atmanirbhar Bharat initiatives, and compliance is closely monitored by the Ministry of Defence."
        },
        {
          question: "How are drones regulated in India?",
          answer: "Drones are regulated under the Drone Rules, 2021 administered by the DGCA, which classify unmanned aircraft by weight, require registration on the Digital Sky platform with a Unique Identification Number, and use airspace zoned green, yellow, and red for permitted operations. Remote pilot certification is required for most categories, and flying in restricted or no-permission zones without clearance is prohibited."
        },
        {
          question: "What is an IDERA in aircraft leasing?",
          answer: "An Irrevocable De-Registration and Export Request Authorisation (IDERA) is a mechanism under the Cape Town Convention, to which India is a party, that allows an aircraft lessor or financier to de-register and repossess an aircraft from the DGCA on a lessee's default without prolonged litigation. Recent reforms, including the proposed dedicated legislation, have strengthened lessors' repossession rights in India. Judicium Arbitration advises lessors and airlines in Delhi NCR on leasing and enforcement."
        },
        {
          question: "Who approves private space and satellite activities in India?",
          answer: "Private space activities, including satellite launches, building, and operations, are authorised by IN-SPACe (Indian National Space Promotion and Authorisation Centre), the single-window regulator established under the Department of Space, in line with the Indian Space Policy, 2023. Satellite communications and remote-sensing activities also require clearances aligned with the Remote Sensing Data Policy and applicable spectrum and security approvals."
        }
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

// Curated topical relationships — drives the "Related Practice Areas" block.
// Falls back to positional neighbours for any slug not listed here.
const relatedSlugMap: Record<string, string[]> = {
  "arbitration-alternative-dispute-resolution": [
    "dispute-resolution-litigation",
    "insolvency-bankruptcy",
    "real-estate-urban-development",
    "projects-infrastructure",
  ],
  "banking-finance": [
    "insolvency-bankruptcy",
    "dispute-resolution-litigation",
    "white-collar-crime",
    "capital-markets",
  ],
  "capital-markets": [
    "corporate-mergers-acquisitions",
    "private-equity-investment-funds",
    "corporate-commercial",
    "competition-antitrust",
  ],
  "competition-antitrust": [
    "corporate-mergers-acquisitions",
    "corporate-commercial",
    "capital-markets",
    "dispute-resolution-litigation",
  ],
  "corporate-mergers-acquisitions": [
    "corporate-commercial",
    "private-equity-investment-funds",
    "competition-antitrust",
    "capital-markets",
  ],
  "corporate-commercial": [
    "corporate-mergers-acquisitions",
    "arbitration-alternative-dispute-resolution",
    "labour-employment",
    "intellectual-property-rights",
  ],
  "data-privacy-cybersecurity": [
    "technology-media-telecommunication",
    "intellectual-property-rights",
    "corporate-commercial",
    "white-collar-crime",
  ],
  "real-estate-urban-development": [
    "arbitration-alternative-dispute-resolution",
    "projects-infrastructure",
    "dispute-resolution-litigation",
    "banking-finance",
  ],
  "intellectual-property-rights": [
    "technology-media-telecommunication",
    "data-privacy-cybersecurity",
    "corporate-commercial",
    "dispute-resolution-litigation",
  ],
  "insolvency-bankruptcy": [
    "banking-finance",
    "arbitration-alternative-dispute-resolution",
    "dispute-resolution-litigation",
    "corporate-mergers-acquisitions",
  ],
  "labour-employment": [
    "corporate-commercial",
    "dispute-resolution-litigation",
    "white-collar-crime",
    "healthcare-lifesciences",
  ],
  "dispute-resolution-litigation": [
    "arbitration-alternative-dispute-resolution",
    "insolvency-bankruptcy",
    "corporate-commercial",
    "real-estate-urban-development",
  ],
  "technology-media-telecommunication": [
    "data-privacy-cybersecurity",
    "intellectual-property-rights",
    "corporate-commercial",
    "competition-antitrust",
  ],
  "projects-infrastructure": [
    "real-estate-urban-development",
    "arbitration-alternative-dispute-resolution",
    "banking-finance",
    "dispute-resolution-litigation",
  ],
  "private-equity-investment-funds": [
    "corporate-mergers-acquisitions",
    "capital-markets",
    "corporate-commercial",
    "banking-finance",
  ],
  "white-collar-crime": [
    "banking-finance",
    "dispute-resolution-litigation",
    "data-privacy-cybersecurity",
    "corporate-commercial",
  ],
  "healthcare-lifesciences": [
    "intellectual-property-rights",
    "data-privacy-cybersecurity",
    "corporate-commercial",
    "insurance",
  ],
  "international-trade-wto": [
    "corporate-commercial",
    "dispute-resolution-litigation",
    "competition-antitrust",
    "arbitration-alternative-dispute-resolution",
  ],
  insurance: [
    "dispute-resolution-litigation",
    "banking-finance",
    "healthcare-lifesciences",
    "arbitration-alternative-dispute-resolution",
  ],
  "defence-aviation-space": [
    "projects-infrastructure",
    "international-trade-wto",
    "corporate-commercial",
    "arbitration-alternative-dispute-resolution",
  ],
};

export const getRelatedPracticeAreas = (currentSlug: string, count: number = 4): PracticeArea[] => {
  const currentIndex = practiceAreasData.findIndex((area) => area.slug === currentSlug);
  if (currentIndex === -1) return [];

  const related: PracticeArea[] = [];

  // Prefer curated topical relationships.
  const curated = relatedSlugMap[currentSlug] ?? [];
  for (const slug of curated) {
    if (related.length >= count) break;
    const area = practiceAreasData.find((a) => a.slug === slug);
    if (area) related.push(area);
  }

  // Fall back to positional neighbours (wrapping) to fill any remaining slots.
  const totalAreas = practiceAreasData.length;
  for (let offset = 1; related.length < count && offset < totalAreas; offset++) {
    const idx = (currentIndex + offset) % totalAreas;
    const candidate = practiceAreasData[idx];
    if (!related.some((a) => a.slug === candidate.slug)) {
      related.push(candidate);
    }
  }

  return related;
};
