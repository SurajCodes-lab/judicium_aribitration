/**
 * City × Practice-area content layer.
 *
 * Powers the programmatic /locations/[city]/[practice] landing pages. Each entry
 * is the UNIQUE, locally-grounded layer for one (city, practice) combination —
 * a self-contained "Quick Answer" (localAngle), a meta-description fragment
 * (metaAngle), and two city-specific FAQs. The rest of each page (services,
 * legal framework, courts) is composed from the existing practiceAreas.ts and
 * localBusinessSchemas.ts data, so no page is a thin/duplicate doorway.
 *
 * Curated, not exhaustive: each city maps only to the practices that genuinely
 * match its economy and forums (e.g. RERA-heavy cities → real estate; the
 * Allahabad-HC towns → arbitration litigation). See docs/SEO-PLAYBOOK.md.
 *
 * Every court, tribunal, RERA authority and statute referenced here is grounded
 * in the corresponding city's facts in localBusinessSchemas.ts and the practice's
 * relatedActs in practiceAreas.ts — no invented case law, figures or addresses.
 */

export interface CityPracticeFAQ {
  question: string;
  answer: string;
}

export interface CityPracticeEntry {
  /** Must match a slug in practiceAreas.ts */
  practiceSlug: string;
  /** ~12-word fragment used inside the meta description */
  metaAngle: string;
  /** Self-contained 60-90 word Quick Answer (localised, citation-ready) */
  localAngle: string;
  /** Two city+practice specific FAQs (distinct from the generic practice FAQs) */
  faqs: CityPracticeFAQ[];
}

export const cityPracticeMap: Record<string, CityPracticeEntry[]> = {
  delhi: [
    {
      practiceSlug: "arbitration-alternative-dispute-resolution",
      metaAngle:
        "DIAC and Delhi High Court arbitration counsel for high-stakes commercial and infrastructure disputes",
      localAngle:
        "Delhi is the centre of gravity for Indian commercial arbitration, with the Delhi High Court running a dedicated Arbitration Court on its Original Side and the Delhi International Arbitration Centre (DIAC) administering institutional references. From Connaught Place, Judicium Arbitration drafts arbitration clauses, conducts DIAC and ad-hoc references, and secures urgent Section 9 interim relief before the Delhi High Court. The team also handles Section 11 arbitrator appointments, Section 34 set-aside challenges, and enforcement of domestic and foreign awards under the Arbitration and Conciliation Act, 1996.",
      faqs: [
        {
          question:
            "Should my Delhi commercial contract specify a DIAC clause or an ad-hoc arbitration seat?",
          answer:
            "It depends on how much administrative support you want. A DIAC clause hands appointment, hearing logistics, and timelines to the Delhi International Arbitration Centre under its own rules and fee schedule, while an ad-hoc reference leaves the parties to manage those steps themselves with the Delhi High Court available for Section 11 appointments if matters stall. Judicium Arbitration advises Delhi-seated parties on which model suits the value and complexity of their contract.",
        },
        {
          question:
            "Can I get an urgent asset freeze before my arbitration even begins in Delhi?",
          answer:
            "Yes. A Section 9 application for interim measures can be filed before the Delhi High Court on its Original Side before the arbitral tribunal is constituted, supported by the arbitration agreement and an affidavit showing urgency. Relief can include injunctions, asset preservation, and security for the claim amount. Judicium Arbitration prepares and argues these urgent petitions, often at short notice.",
        },
      ],
    },
    {
      practiceSlug: "dispute-resolution-litigation",
      metaAngle:
        "Commercial, civil and constitutional litigation before the Delhi High Court and Supreme Court",
      localAngle:
        "Delhi gives litigants direct access to the Supreme Court of India at Tilak Marg and the Delhi High Court, alongside the District Courts at Patiala House, Tis Hazari, Karkardooma, Saket, Rohini, and Dwarka. From Connaught Place, Judicium Arbitration handles fast-tracked commercial suits under the Commercial Courts Act, 2015, civil and recovery matters under the Code of Civil Procedure, 1908, and writ petitions under Articles 226 and 32. The team also drafts and argues special leave petitions before the Supreme Court for clients across North India.",
      faqs: [
        {
          question: "Where would my high-value commercial suit be filed in Delhi?",
          answer:
            "Commercial disputes above the specified value are routed to the Commercial Division of the Delhi High Court or the District-level Commercial Courts, depending on pecuniary jurisdiction, under the Commercial Courts Act, 2015. These forums apply streamlined procedures, case-management hearings, and strict timelines for written statements. Judicium Arbitration assesses the correct forum and handles pre-institution mediation where required before filing.",
        },
        {
          question:
            "Can I challenge a government or regulatory action affecting my Delhi business through a writ?",
          answer:
            "Yes. A writ petition under Article 226 can be filed before the Delhi High Court to challenge actions of the State or public authorities, and matters of fundamental rights can also reach the Supreme Court under Article 32. These are decided on affidavits without a full trial. Judicium Arbitration drafts and argues such petitions from its Connaught Place office.",
        },
      ],
    },
    {
      practiceSlug: "insolvency-bankruptcy",
      metaAngle:
        "IBC and CIRP counsel before the NCLT Delhi Bench for creditors and corporate debtors",
      localAngle:
        "Insolvency matters for Delhi-based companies are heard by the National Company Law Tribunal Delhi Bench, with appeals lying to the NCLAT, which also sits in the capital. From Connaught Place, Judicium Arbitration initiates and defends the Corporate Insolvency Resolution Process under Sections 7, 9, and 10 of the Insolvency and Bankruptcy Code, 2016, advises Committee of Creditors members, and helps resolution applicants structure plans. The team also handles liquidation, avoidance applications, and personal-guarantor insolvency before the NCLT Delhi Bench.",
      faqs: [
        {
          question:
            "Which tribunal hears insolvency petitions against a company registered in Delhi?",
          answer:
            "A company with its registered office in Delhi falls within the territorial jurisdiction of the NCLT Delhi Bench, where Section 7, 9, and 10 applications under the Insolvency and Bankruptcy Code, 2016 are filed. Appeals from its orders go to the NCLAT. Judicium Arbitration's Delhi team appears regularly before both forums.",
        },
        {
          question:
            "As an operational creditor in Delhi, what must I prove to admit a CIRP application?",
          answer:
            "An operational creditor must show a default of at least one crore on a debt that is due and payable, with no pre-existing genuine dispute, and must first serve a demand notice before filing under Section 9 before the NCLT Delhi Bench. If the debtor raises a bona fide dispute, the application can be rejected. Judicium Arbitration advises Delhi creditors on whether the default and notice requirements are satisfied before filing.",
        },
      ],
    },
    {
      practiceSlug: "banking-finance",
      metaAngle:
        "NPA recovery, SARFAESI and DRT representation for lenders and borrowers in Delhi",
      localAngle:
        "Delhi hosts the Debt Recovery Tribunal that adjudicates bank recovery actions, alongside the Delhi High Court and the NCLT Delhi Bench for enforcement and insolvency overlaps. From Connaught Place, Judicium Arbitration advises banks, NBFCs, and borrowers on NPA resolution, SARFAESI possession and Section 14 applications, and debt restructuring under the SARFAESI Act, 2002 and the Recovery of Debts Due to Banks and Financial Institutions Act, 1993. The team represents both lenders and borrowers, including securitisation applications challenging Section 13(4) measures before the DRT Delhi.",
      faqs: [
        {
          question: "How does a borrower in Delhi challenge a SARFAESI possession notice?",
          answer:
            "A borrower can file a securitisation application under Section 17 of the SARFAESI Act, 2002 before the Debt Recovery Tribunal at Delhi challenging measures taken under Section 13(4), typically within 45 days. Section 34 bars civil courts from entertaining the dispute, so the DRT is the primary remedy, with limited writ relief before the Delhi High Court. Judicium Arbitration represents borrowers in these applications.",
        },
        {
          question:
            "Should a Delhi lender pursue SARFAESI, DRT, or IBC for a defaulting borrower?",
          answer:
            "Each route serves a different purpose: SARFAESI allows enforcement of security without court intervention, the DRT Delhi adjudicates the recovery claim, and the IBC before the NCLT Delhi Bench drives resolution or liquidation of the corporate debtor. Banks often run SARFAESI and DRT proceedings together. Judicium Arbitration advises Delhi lenders on the most effective combination for a given exposure.",
        },
      ],
    },
    {
      practiceSlug: "corporate-commercial",
      metaAngle:
        "Outsourced general counsel for Delhi companies on incorporation, contracts and governance",
      localAngle:
        "Delhi's economy spans large corporate joint ventures, PSUs, and a dense startup and MSME base, generating constant demand for corporate and commercial advisory. From Connaught Place, Judicium Arbitration acts as outsourced general counsel on company and LLP incorporation, governance, and ROC compliance under the Companies Act, 2013 and the Limited Liability Partnership Act, 2008. The team drafts shareholders' agreements, joint ventures, and supply contracts under the Indian Contract Act, 1872, with company-law disputes escalating to the NCLT Delhi Bench where required.",
      faqs: [
        {
          question:
            "Where are shareholder oppression and mismanagement disputes for a Delhi company heard?",
          answer:
            "Oppression and mismanagement claims under Sections 241 and 242 of the Companies Act, 2013 for a Delhi-registered company are filed before the NCLT Delhi Bench, with appeals to the NCLAT. These differ from contractual shareholder disputes, which may be arbitrable. Judicium Arbitration assesses whether a matter belongs before the NCLT or in arbitration and acts accordingly.",
        },
        {
          question: "Is my shareholders' agreement enforceable against a Delhi company?",
          answer:
            "A shareholders' agreement is enforceable as a contract under the Indian Contract Act, 1872, but to bind the company and third parties, key terms such as transfer restrictions and board nomination rights should also be written into the Articles of Association. Judicium Arbitration drafts and negotiates SHAs for promoters and investors in Delhi and ensures the Articles are aligned.",
        },
      ],
    },
    {
      practiceSlug: "real-estate-urban-development",
      metaAngle:
        "Property title diligence, RERA compliance and builder-buyer dispute counsel in Delhi",
      localAngle:
        "Delhi's property market involves DDA land, redevelopment, and high-value commercial transactions, with disputes reaching the Delhi High Court and the District Courts across the capital. From Connaught Place, Judicium Arbitration conducts title due diligence and drafts sale, lease, and joint development agreements under the Transfer of Property Act, 1882, the Registration Act, 1908, and the Indian Stamp Act, 1899. The team also handles RERA registration and builder-buyer disputes under the Real Estate (Regulation and Development) Act, 2016, and consumer-forum remedies.",
      faqs: [
        {
          question:
            "Should a Delhi homebuyer approach RERA or the consumer commission for a delayed flat?",
          answer:
            "The Supreme Court has held that RERA does not bar a buyer from invoking the Consumer Protection Act, 2019, so a Delhi buyer may choose either the State RERA Authority or the consumer commission, though not pursue duplicate relief for the same cause. The right forum depends on the project's RERA registration and the relief sought. Judicium Arbitration advises Delhi buyers on the most effective route.",
        },
        {
          question:
            "How thorough should title due diligence be before buying property in Delhi?",
          answer:
            "Title diligence should verify clear, marketable ownership free of encumbrances and litigation, examining records under the Registration Act, 1908 and Transfer of Property Act, 1882, typically over a 30-year chain, and checking for DDA or municipal land issues common in Delhi. This protects buyers and lenders from defective title and fraudulent sales. Judicium Arbitration conducts this verification before any consideration is paid.",
        },
      ],
    },
  ],
  gurgaon: [
    {
      practiceSlug: "real-estate-urban-development",
      metaAngle:
        "Haryana RERA builder-buyer and possession-delay counsel for Gurugram homebuyers and developers",
      localAngle:
        "Gurugram's most common property disputes are builder-buyer claims over delayed possession and refunds, governed by the Haryana Real Estate Regulatory Authority through its Gurugram bench, with appeals to the Haryana Real Estate Appellate Tribunal. From DLF Cyber City, Judicium Arbitration files and defends RERA complaints for projects along DLF, Sohna Road, Golf Course Extension, and the Dwarka Expressway under the Real Estate (Regulation and Development) Act, 2016. The team also conducts title diligence and represents both allottees and developers through the RERA and appellate stages.",
      faqs: [
        {
          question:
            "How do I file a RERA complaint against a Gurgaon builder for delayed possession?",
          answer:
            "A complaint against a Gurgaon developer is filed with the Haryana RERA Gurugram bench, online or in person, with the builder-buyer agreement, payment receipts, and details of the delay or default. Common reliefs include possession, refund with interest, and compensation under the Real Estate (Regulation and Development) Act, 2016. Judicium Arbitration prepares and argues these complaints from its DLF Cyber City office.",
        },
        {
          question: "If I lose at Haryana RERA, where do I appeal in Gurgaon?",
          answer:
            "An appeal against a Haryana RERA Gurugram bench order lies to the Haryana Real Estate Appellate Tribunal within 60 days, and a developer-appellant must first deposit the amount the Authority directed before the appeal is entertained. The Tribunal can confirm, modify, or set aside the order. Judicium Arbitration handles both the RERA complaint and the appellate stage for buyers and developers.",
        },
      ],
    },
    {
      practiceSlug: "corporate-commercial",
      metaAngle:
        "Corporate, contract and shareholder advisory for Gurgaon's multinational and startup hub",
      localAngle:
        "Gurugram hosts the India offices of numerous multinationals and a dense startup ecosystem around DLF Cyber City and Cyber Hub, driving demand for corporate and commercial advisory. From DLF Cyber City, Judicium Arbitration handles incorporation, governance, and contract work under the Companies Act, 2013, the Limited Liability Partnership Act, 2008, and the Indian Contract Act, 1872. Founder, shareholder, and joint-venture disputes are common here, with company-law matters for Gurgaon entities escalating to the NCLT Chandigarh Bench, which holds territorial jurisdiction.",
      faqs: [
        {
          question:
            "Where are oppression and mismanagement disputes for a Gurgaon company heard?",
          answer:
            "Companies registered in Gurugram fall under the territorial jurisdiction of the NCLT Chandigarh Bench, so oppression and mismanagement claims under Sections 241 and 242 of the Companies Act, 2013 are filed at Chandigarh, not in Gurgaon or Delhi. Appeals go to the NCLAT. Judicium Arbitration appears regularly before the NCLT Chandigarh Bench for Gurgaon companies.",
        },
        {
          question:
            "How should a Gurgaon startup structure its founders' and investors' agreements?",
          answer:
            "Founder and investor arrangements are typically captured in shareholders' agreements under the Indian Contract Act, 1872, with key terms such as vesting, transfer restrictions, and board rights also incorporated into the Articles of Association to bind the company. This is especially important for the venture-funded startups concentrated in the DLF and Cyber Hub ecosystem. Judicium Arbitration drafts and negotiates these documents from its Gurgaon office.",
        },
      ],
    },
    {
      practiceSlug: "arbitration-alternative-dispute-resolution",
      metaAngle:
        "Commercial and construction arbitration counsel for Gurgaon contracts and IT services disputes",
      localAngle:
        "Gurugram-seated commercial and construction contracts frequently contain arbitration clauses, with Section 11 arbitrator-appointment petitions and Section 34 challenges lying before the Punjab and Haryana High Court at Chandigarh. From DLF Cyber City, Judicium Arbitration runs arbitration of builder-buyer, IT services, and automotive vendor contracts under the Arbitration and Conciliation Act, 1996. The team appears for multinationals in Cyber City and Udyog Vihar and for manufacturers along the NH-48 Manesar belt, securing interim relief and pursuing appointments through the High Court at Chandigarh.",
      faqs: [
        {
          question: "Where do I get an arbitrator appointed for a Gurgaon-seated contract?",
          answer:
            "When the other side refuses to cooperate in appointing an arbitrator, a Section 11 application is filed before the Punjab and Haryana High Court at Chandigarh, attaching the arbitration agreement and the notice invoking arbitration. The Chief Justice's designate then makes the appointment. Judicium Arbitration drafts the invocation notice and the Section 11 petition to keep stalled Gurgaon references moving.",
        },
        {
          question:
            "Can an IT services dispute for a Gurgaon-headquartered company be arbitrated?",
          answer:
            "Yes. Master-services agreements and SLAs for the multinationals based in Cyber City and Udyog Vihar usually include arbitration clauses, making disputes over service levels, termination, and fees arbitrable under the Arbitration and Conciliation Act, 1996. Court support for appointments and Section 34 challenges lies with the Punjab and Haryana High Court at Chandigarh. Judicium Arbitration conducts these references from its Gurgaon office.",
        },
      ],
    },
    {
      practiceSlug: "technology-media-telecommunication",
      metaAngle:
        "Technology, SaaS and IT contract advisory for Gurgaon's BPO and multinational corridor",
      localAngle:
        "Gurugram's IT and BPO majors and multinational India offices in Cyber City and Udyog Vihar generate constant technology-contracting and regulatory work. From DLF Cyber City, Judicium Arbitration drafts and negotiates software licensing, SaaS, cloud, and system-integration agreements and advises on telecom and digital-media compliance under the Telecommunications Act, 2023 and the Information Technology Act, 2000. Contract disputes for Gurgaon-seated agreements are arbitrated or litigated through the Commercial Court Gurugram and the Punjab and Haryana High Court at Chandigarh.",
      faqs: [
        {
          question:
            "Does a SaaS contract for a Gurgaon multinational need to address Indian data protection law?",
          answer:
            "Yes. SaaS and cloud arrangements involving personal data of Indian users must comply with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 framework, covering consent, security safeguards, breach notification, and cross-border transfer terms. This matters for the BPO and IT operations concentrated in Cyber City. Judicium Arbitration builds these protections into technology contracts for Gurgaon clients.",
        },
        {
          question:
            "Where would a technology contract dispute for a Gurgaon company be resolved?",
          answer:
            "If the agreement contains an arbitration clause, the dispute is arbitrated with court support from the Punjab and Haryana High Court at Chandigarh; otherwise it goes to the Commercial Court Gurugram for fast-tracked resolution under the Commercial Courts Act, 2015. Judicium Arbitration advises Gurgaon technology companies on the right forum and the dispute-resolution clause before signing.",
        },
      ],
    },
    {
      practiceSlug: "intellectual-property-rights",
      metaAngle:
        "Trademark, brand protection and IP licensing counsel for Gurgaon corporates and startups",
      localAngle:
        "Gurugram's concentration of consumer brands, multinationals, and startups creates strong demand for IP registration, licensing, and enforcement. From DLF Cyber City, Judicium Arbitration files and prosecutes trademarks, patents, copyrights, and designs under the Trade Marks Act, 1999, the Patents Act, 1970, and the Copyright Act, 1957, and structures brand and technology licensing. IP infringement litigation is taken before the Punjab and Haryana High Court at Chandigarh, while contractual IP and licensing disputes for Gurgaon parties can be resolved through arbitration.",
      faqs: [
        {
          question: "How should a Gurgaon company protect its brand before a national launch?",
          answer:
            "Brand protection starts with a trademark search and filing under the Trade Marks Act, 1999, allowing use of the TM symbol immediately and the registered mark only after registration, which typically takes 12 to 24 months absent objections. Early filing secures priority for Gurgaon's consumer brands and startups. Judicium Arbitration handles searches, filings, and oppositions from its Gurgaon office.",
        },
        {
          question: "Where is IP infringement litigation for a Gurgaon business filed?",
          answer:
            "Civil remedies for trademark, copyright, and design infringement, including injunctions and damages, are pursued before the appropriate civil or commercial court, with the Punjab and Haryana High Court at Chandigarh as the High Court forum for Gurgaon matters. Customs recordal can also block infringing imports. Judicium Arbitration advises Gurgaon rights holders on the right forum and enforcement strategy.",
        },
      ],
    },
    {
      practiceSlug: "labour-employment",
      metaAngle:
        "Employment, POSH and termination advisory for Gurgaon's IT, BPO and corporate employers",
      localAngle:
        "Gurugram's large IT, BPO, and corporate workforce makes employment compliance and disputes a constant concern for employers in Cyber City and Udyog Vihar. From DLF Cyber City, Judicium Arbitration advises on employment agreements, terminations, and POSH compliance under the Sexual Harassment of Women at Workplace Act, 2013, alongside statutory benefits under the EPF Act, 1952 and the Payment of Gratuity Act, 1972. Industrial disputes and writ matters are taken before the Haryana labour authorities and the Punjab and Haryana High Court at Chandigarh.",
      faqs: [
        {
          question: "What POSH obligations apply to a Gurgaon IT or BPO employer?",
          answer:
            "Every Gurgaon workplace with ten or more employees must constitute an Internal Committee under the Sexual Harassment of Women at Workplace Act, 2013, adopt a POSH policy, conduct awareness training, and complete inquiries within the statutory timeline. This is particularly relevant for the large IT and BPO operations in Cyber City. Judicium Arbitration sets up Internal Committees and supports inquiries for Gurgaon employers.",
        },
        {
          question:
            "How should a Gurgaon company handle an employee termination to limit dispute risk?",
          answer:
            "Terminations should follow the employment contract, applicable Haryana Shops and Establishments and Industrial Disputes Act, 1947 requirements, and any notice or settlement obligations, with documentation of cause where relevant. Disputed terminations can reach the labour authorities or the Punjab and Haryana High Court at Chandigarh. Judicium Arbitration advises Gurgaon employers on structuring exits and defending claims.",
        },
      ],
    },
  ],
  noida: [
    {
      practiceSlug: "real-estate-urban-development",
      metaAngle:
        "UP RERA possession-delay and refund counsel for Noida and Greater Noida homebuyers",
      localAngle:
        "Noida and Greater Noida, in Gautam Buddh Nagar, are dominated by homebuyer claims against developers over delayed possession and refunds, often complicated by Noida and Greater Noida Authority land dues. From Sector 18, Judicium Arbitration files and defends these claims before the UP Real Estate Regulatory Authority, with appeals to the UP Real Estate Appellate Tribunal at Lucknow, under the Real Estate (Regulation and Development) Act, 2016. The team represents allottees and developers across Noida, Greater Noida, and the Yamuna Expressway projects.",
      faqs: [
        {
          question:
            "Can I file a RERA complaint online against a Noida or Greater Noida developer?",
          answer:
            "Yes. Complaints are filed online through the UP RERA portal with the registered project details, builder-buyer agreement, payment proof, and the relief sought. UP RERA can order possession, refund with interest, or compensation under the Real Estate (Regulation and Development) Act, 2016, with appeals lying to the UP Real Estate Appellate Tribunal at Lucknow. Judicium Arbitration drafts and files these complaints from its Sector 18 office.",
        },
        {
          question:
            "How do Noida Authority land dues affect my possession claim against a builder?",
          answer:
            "Many Noida and Greater Noida projects are delayed because of disputes between developers and the Noida or Greater Noida Authority over land dues, which can stall registries and possession. UP RERA still adjudicates the allottee's claim, but the Authority dues add a layer that affects the relief and timeline. Judicium Arbitration advises buyers on protecting their claims where the Authority dispute overlaps with their possession or refund claim.",
        },
      ],
    },
    {
      practiceSlug: "technology-media-telecommunication",
      metaAngle:
        "IT, SaaS and SLA contract advisory for Noida technology and e-commerce companies",
      localAngle:
        "Noida is a hub for IT and ITeS companies and e-commerce warehousing, concentrated in Sectors 62, 125, and 135 and along the Noida-Greater Noida expressway. From Sector 18, Judicium Arbitration drafts and negotiates software licensing, SaaS, cloud, and services agreements and advises on digital regulation under the Information Technology Act, 2000 and the Telecommunications Act, 2023. Services and SLA disputes for Noida-seated contracts are arbitrated or taken before the Commercial Court at Gautam Buddh Nagar, with court support from the Allahabad High Court.",
      faqs: [
        {
          question: "Where is an IT services or SLA dispute for a Noida company resolved?",
          answer:
            "If the agreement contains an arbitration clause, the dispute is arbitrated with court support, including Section 11 appointments, routed through the Allahabad High Court; otherwise it goes to the Commercial Court at Gautam Buddh Nagar (Surajpur) under the Commercial Courts Act, 2015. Judicium Arbitration advises Noida technology companies on the dispute-resolution clause and the correct forum.",
        },
        {
          question: "Does a SaaS contract for a Noida tech company need to address data protection?",
          answer:
            "Yes. SaaS and cloud arrangements handling personal data of Indian users must comply with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 framework, covering consent, security safeguards, breach notification, and cross-border transfer terms. This is central to the IT and ITeS businesses in Sectors 62, 125, and 135. Judicium Arbitration builds these terms into contracts for Noida clients.",
        },
      ],
    },
    {
      practiceSlug: "data-privacy-cybersecurity",
      metaAngle:
        "DPDP Act and CERT-In compliance counsel for Noida's digital and e-commerce businesses",
      localAngle:
        "Noida's digital businesses, IT companies, and e-commerce and warehousing operators handle large volumes of personal data, making data-protection compliance a priority. From Sector 18, Judicium Arbitration advises data fiduciaries on Digital Personal Data Protection Act, 2023 readiness, consent frameworks, and breach notification, and on CERT-In incident reporting under the Information Technology Act, 2000. The team supports Noida-based digital businesses with privacy programmes and confidentiality disputes, escalating regulatory and writ matters to the Allahabad High Court where required.",
      faqs: [
        {
          question: "What must a Noida digital business do to be ready for the DPDP Act?",
          answer:
            "A Noida data fiduciary should map its personal-data flows, implement lawful processing and consent frameworks, honour data principal rights, and put breach-notification and security safeguards in place under the Digital Personal Data Protection Act, 2023, overseen by the Data Protection Board of India. Significant data fiduciaries carry additional obligations. Judicium Arbitration builds DPDP readiness programmes for Noida technology and e-commerce companies.",
        },
        {
          question: "How quickly must a Noida company report a cyber incident?",
          answer:
            "Under the CERT-In Cyber Security Directions of 2022, an organisation must report specified cyber incidents to CERT-In within six hours of noticing them, maintain logs for 180 days within India, and synchronise systems to NTP servers, with non-compliance attracting penalties under Section 70B of the Information Technology Act, 2000. Judicium Arbitration advises Noida digital businesses on incident response and reporting.",
        },
      ],
    },
    {
      practiceSlug: "arbitration-alternative-dispute-resolution",
      metaAngle:
        "Commercial and technology contract arbitration counsel for Noida-seated disputes",
      localAngle:
        "Noida-seated commercial, IT services, and e-commerce vendor contracts frequently contain arbitration clauses, with Section 9 interim relief and Section 11 arbitrator appointments routed through the Allahabad High Court. From Sector 18, Judicium Arbitration runs arbitration of technology, logistics, and warehousing disputes along the Noida-Greater Noida expressway under the Arbitration and Conciliation Act, 1996. The team secures interim protection, conducts references, and handles Section 34 challenges for clients across Gautam Buddh Nagar.",
      faqs: [
        {
          question: "Where do I get an arbitrator appointed for a Noida-seated contract?",
          answer:
            "When the counterparty refuses to cooperate in the appointment, a Section 11 application is filed before the Allahabad High Court, attaching the arbitration agreement and the notice invoking arbitration. Section 9 interim relief for Noida matters is also routed through the Allahabad High Court. Judicium Arbitration drafts the invocation notice and the Section 11 petition to keep stalled Noida references moving.",
        },
        {
          question: "Can an e-commerce or warehousing vendor dispute in Noida be arbitrated?",
          answer:
            "Yes. Vendor, logistics, and warehousing contracts along the Noida-Greater Noida expressway commonly include arbitration clauses, making payment, service, and termination disputes arbitrable under the Arbitration and Conciliation Act, 1996. Court support for appointments and Section 34 challenges lies with the Allahabad High Court. Judicium Arbitration conducts these references from its Sector 18 office.",
        },
      ],
    },
    {
      practiceSlug: "insolvency-bankruptcy",
      metaAngle:
        "IBC and homebuyer-creditor counsel before the NCLT Allahabad Bench for Noida matters",
      localAngle:
        "Insolvency of Noida and Greater Noida developers and companies is heard by the NCLT Allahabad Bench, an issue made acute by the well-known RERA-IBC overlap affecting stalled real-estate projects. From Sector 18, Judicium Arbitration represents homebuyers as financial creditors, operational and financial creditors, and corporate debtors under the Insolvency and Bankruptcy Code, 2016. The team advises on filing claims with the resolution professional, participating through the homebuyers' authorised representative, and protecting claims across both the RERA and IBC tracks.",
      faqs: [
        {
          question: "What happens to my Noida flat if the builder is admitted into IBC insolvency?",
          answer:
            "Homebuyers are treated as financial creditors under the Insolvency and Bankruptcy Code, 2016, so if a Noida developer enters the corporate insolvency resolution process before the NCLT Allahabad Bench, allottees must file claims with the resolution professional and can participate through the homebuyers' authorised representative on the Committee of Creditors. RERA proceedings are generally stayed by the moratorium. Judicium Arbitration advises buyers across both tracks.",
        },
        {
          question: "Which tribunal hears insolvency petitions against a Noida company?",
          answer:
            "A company registered in Gautam Buddh Nagar falls within the territorial jurisdiction of the NCLT Allahabad Bench, where Section 7, 9, and 10 applications under the Insolvency and Bankruptcy Code, 2016 are filed, with appeals to the NCLAT. The minimum default to file is one crore. Judicium Arbitration appears before the NCLT Allahabad Bench for Noida creditors and debtors.",
        },
      ],
    },
    {
      practiceSlug: "corporate-commercial",
      metaAngle:
        "Corporate, contract and governance advisory for Noida technology and trading businesses",
      localAngle:
        "Noida's mix of IT companies, e-commerce operators, and emerging tech businesses drives steady corporate and commercial work across Gautam Buddh Nagar. From Sector 18, Judicium Arbitration handles incorporation, governance, and ROC compliance under the Companies Act, 2013 and the Limited Liability Partnership Act, 2008, and drafts shareholders' agreements and supply contracts under the Indian Contract Act, 1872. Commercial disputes go to the Commercial Court at Gautam Buddh Nagar, while company-law matters for Noida entities are heard by the NCLT Allahabad Bench.",
      faqs: [
        {
          question:
            "Where are shareholder oppression and mismanagement disputes for a Noida company heard?",
          answer:
            "Companies registered in Gautam Buddh Nagar fall under the NCLT Allahabad Bench, so oppression and mismanagement claims under Sections 241 and 242 of the Companies Act, 2013 are filed there, with appeals to the NCLAT. Contractual shareholder disputes may instead be arbitrable. Judicium Arbitration assesses the correct forum for Noida companies and acts accordingly.",
        },
        {
          question: "Where would a contract dispute for a Noida business be litigated?",
          answer:
            "Commercial disputes above the specified value for Noida businesses are heard at the Commercial Court at Gautam Buddh Nagar (Surajpur) under the Commercial Courts Act, 2015, with the Allahabad High Court as the High Court forum. If the contract has an arbitration clause, the dispute is arbitrated instead. Judicium Arbitration advises Noida companies on the right forum and on dispute-resolution clauses before signing.",
        },
      ],
    },
  ],
  chandigarh: [
    {
      practiceSlug: "insolvency-bankruptcy",
      metaAngle:
        "IBC insolvency, CIRP and creditor representation before the NCLT Chandigarh Bench",
      localAngle:
        "The NCLT Chandigarh Bench exercises IBC and Companies Act jurisdiction over Punjab, Haryana, Himachal Pradesh, the erstwhile J&K region and Chandigarh UT, making the city the insolvency forum for the entire north-western belt. From Sector 17, Judicium Arbitration initiates and defends the corporate insolvency resolution process for stressed agro-processing, Ludhiana auto-parts and Baddi pharmaceutical enterprises, represents financial and operational creditors on the Committee of Creditors, and carries appeals to the NCLAT. The team coordinates IBC filings with parallel recovery before the Punjab and Haryana High Court where required.",
      faqs: [
        {
          question: "My company is based in Ludhiana or Baddi — where do I file an IBC petition?",
          answer:
            "Corporate debtors across Punjab, Haryana and Himachal Pradesh fall within the territorial jurisdiction of the NCLT Chandigarh Bench, so a Section 7, 9 or 10 application for a Ludhiana auto-parts firm or a Baddi pharmaceutical unit is filed there rather than at any Delhi bench. Judicium Arbitration's Sector 17 team prepares and argues these applications and represents both creditors and debtors before that Bench.",
        },
        {
          question:
            "Can I pursue SARFAESI recovery and IBC at the same time against a Chandigarh-region borrower?",
          answer:
            "A secured creditor can run SARFAESI enforcement before the Debt Recovery Tribunal at Chandigarh while also seeking admission of the debtor into CIRP at the NCLT Chandigarh Bench, but once a moratorium is declared on admission, SARFAESI measures are stayed. Judicium Arbitration sequences the two tracks so a lender preserves both its security and its position on the Committee of Creditors.",
        },
      ],
    },
    {
      practiceSlug: "banking-finance",
      metaAngle:
        "SARFAESI, NPA recovery and DRT Chandigarh representation for lenders and borrowers",
      localAngle:
        "Chandigarh hosts a Debt Recovery Tribunal serving banks, NBFCs and asset reconstruction companies across the tri-state region, alongside the Punjab and Haryana High Court for writ relief and the NCLT Chandigarh Bench for financial-creditor insolvency. Judicium Arbitration acts from Sector 17 on NPA resolution, SARFAESI possession and Section 14 applications, one-time settlements, and securitisation challenges under Section 17 of the SARFAESI Act for borrowers in the Ludhiana, Baddi and agro-processing clusters. The team advises whether SARFAESI, DRT or IBC is the most effective recovery route for a given exposure.",
      faqs: [
        {
          question: "Where do I challenge a SARFAESI possession notice in the Chandigarh region?",
          answer:
            "A borrower contesting measures taken under Section 13(4) of the SARFAESI Act files a securitisation application under Section 17 before the Debt Recovery Tribunal at Chandigarh, generally within 45 days, since Section 34 bars the civil court. Writ relief before the Punjab and Haryana High Court is available only in limited circumstances. Judicium Arbitration's Chandigarh team drafts and argues these securitisation applications for tri-state borrowers.",
        },
        {
          question: "Which forum hears a bank's recovery suit against a Punjab or Haryana defaulter?",
          answer:
            "For debts above the prescribed threshold, a lender files an original application before the Debt Recovery Tribunal at Chandigarh under the Recovery of Debts Due to Banks and Financial Institutions Act, 1993, with appeals lying to the DRAT. Judicium Arbitration represents both PSU and private lenders and borrowers in these proceedings and in parallel one-time settlement negotiations.",
        },
      ],
    },
    {
      practiceSlug: "arbitration-alternative-dispute-resolution",
      metaAngle:
        "Commercial arbitration, Section 11 appointments and award challenges at the Punjab & Haryana High Court",
      localAngle:
        "As the seat of the Punjab and Haryana High Court, Chandigarh is the arbitration nerve centre for Punjab, Haryana, Himachal Pradesh and the Union Territory, with the High Court deciding Section 11 arbitrator appointments, Section 34 set-aside challenges and Section 37 appeals. Judicium Arbitration runs ad-hoc and institutional references from Sector 17 in manufacturing, agro-processing and government-contract disputes, and pursues PUDA and HSVP land and works-contract arbitration across the tri-state region. The team drafts arbitration clauses, secures interim relief and enforces domestic awards under the Arbitration and Conciliation Act, 1996.",
      faqs: [
        {
          question:
            "How do I get an arbitrator appointed for a Punjab or Haryana contract when the other side stalls?",
          answer:
            "Where a party refuses to cooperate in constituting the tribunal, you file a Section 11 application before the Punjab and Haryana High Court at Chandigarh, attaching the arbitration agreement and the notice invoking arbitration, after which the Chief Justice's designate makes the appointment. Judicium Arbitration drafts the invocation notice and the Section 11 petition to keep stalled references moving.",
        },
        {
          question:
            "Can I challenge an arbitral award arising from a Ludhiana or HP commercial dispute at Chandigarh?",
          answer:
            "Yes. A Section 34 application to set aside a domestic award is filed before the Punjab and Haryana High Court or the relevant court at Chandigarh within three months of receiving the award, on the limited statutory grounds, with a Section 37 appeal available thereafter. Judicium Arbitration files within limitation and argues both set-aside and enforcement proceedings for tri-state clients.",
        },
      ],
    },
    {
      practiceSlug: "corporate-commercial",
      metaAngle:
        "Company incorporation, commercial contracts and governance for tri-state businesses and manufacturers",
      localAngle:
        "Chandigarh anchors corporate and commercial advisory for Punjab, Haryana and Himachal Pradesh, where the economy spans agro-processing, the Ludhiana auto-parts cluster, the Baddi pharmaceutical belt and family-run manufacturing enterprises. From Sector 17, Judicium Arbitration acts as outsourced general counsel on incorporation, shareholders' and joint-venture agreements, supply and distribution contracts under the Indian Contract Act, 1872, and ROC and governance compliance under the Companies Act, 2013. Oppression-and-mismanagement and other Companies Act disputes for tri-state entities are taken before the NCLT Chandigarh Bench.",
      faqs: [
        {
          question: "Where are oppression and mismanagement disputes for a Punjab or Haryana company heard?",
          answer:
            "Petitions under Sections 241 to 242 of the Companies Act, 2013 for companies registered in Punjab, Haryana, Himachal Pradesh or Chandigarh UT are filed before the NCLT Chandigarh Bench, which holds territorial jurisdiction over the region. Judicium Arbitration advises promoters, minority shareholders and boards on these claims and represents them before that Bench.",
        },
        {
          question: "Do you help Ludhiana and Baddi manufacturers with supply and vendor contracts?",
          answer:
            "Yes. Judicium Arbitration drafts and negotiates job-work, supply, distribution and vendor agreements under the Indian Contract Act, 1872 for manufacturers in the Ludhiana auto-parts and Baddi pharmaceutical clusters, building in dispute-resolution clauses that route disagreements to arbitration or the appropriate commercial court. The team also handles ongoing governance and ROC compliance for these businesses.",
        },
      ],
    },
    {
      practiceSlug: "real-estate-urban-development",
      metaAngle:
        "Property title diligence, development agreements and PUDA/HSVP land contract disputes in the tri-state region",
      localAngle:
        "Chandigarh's real-estate landscape is shaped by planned-development authorities such as PUDA and HSVP and by an active property market across the tri-state region. Judicium Arbitration conducts title due diligence and encumbrance verification, drafts and registers sale, lease and joint-development agreements under the Transfer of Property Act, 1882 and the Registration Act, 1908, and arbitrates construction and works-contract disputes from Sector 17. Land and works-contract disputes against PUDA and HSVP, and writs touching allotments, are carried to the Punjab and Haryana High Court.",
      faqs: [
        {
          question:
            "How do I resolve a dispute with PUDA or HSVP over a plot allotment or works contract?",
          answer:
            "Allotment and land disputes with PUDA or HSVP are pursued either through the contractual dispute mechanism, by arbitration where the agreement provides for it, or by writ petition before the Punjab and Haryana High Court at Chandigarh where a public-law right is engaged. Judicium Arbitration assesses the correct route and runs both the arbitration and the High Court proceedings for allottees and developers.",
        },
        {
          question:
            "What checks should I run before buying property in Chandigarh or the surrounding region?",
          answer:
            "Title due diligence should verify a clear, marketable chain of ownership free of encumbrances and litigation, examining records under the Registration Act, 1908 and the Transfer of Property Act, 1882, and confirm that any planned-development authority conditions, such as PUDA or HSVP allotment terms, are satisfied. Judicium Arbitration conducts this verification before you pay consideration or a lender sanctions a loan.",
        },
      ],
    },
    {
      practiceSlug: "dispute-resolution-litigation",
      metaAngle:
        "Commercial, civil and writ litigation before the Punjab & Haryana High Court and Chandigarh courts",
      localAngle:
        "Chandigarh is the legal nerve centre for the north-western region, with the Punjab and Haryana High Court hearing writs, commercial appeals and constitutional matters and the District Court Chandigarh handling civil and commercial suits. From Sector 17, Judicium Arbitration conducts commercial litigation under the Commercial Courts Act, 2015, recovery and specific-performance suits, and writ petitions under Article 226 for clients across Punjab, Haryana and Himachal Pradesh. The team pursues interim relief, appeals and execution from pleadings through to enforcement.",
      faqs: [
        {
          question: "Where do I file a writ petition for a Punjab or Haryana matter?",
          answer:
            "Writ petitions under Article 226 of the Constitution against State or public authorities in Punjab, Haryana or the Union Territory are filed before the Punjab and Haryana High Court at Chandigarh, which decides them on affidavits without a full trial. Judicium Arbitration drafts and argues writ petitions, including those touching commercial and administrative-law disputes, before that Court.",
        },
        {
          question: "How are higher-value commercial suits handled faster in Chandigarh?",
          answer:
            "Commercial disputes above the specified value are routed to the dedicated commercial court framework under the Commercial Courts Act, 2015, with mandatory pre-institution mediation in many cases, case-management hearings and strict timelines for written statements and disclosure. Judicium Arbitration prepares and argues these matters before the appropriate court at Chandigarh and the Punjab and Haryana High Court on appeal.",
        },
      ],
    },
  ],
  jaipur: [
    {
      practiceSlug: "arbitration-alternative-dispute-resolution",
      metaAngle:
        "Mining, hospitality and solar contract arbitration with Section 11 appointments at the Rajasthan High Court Jaipur Bench",
      localAngle:
        "Rajasthan's economy generates a distinctive flow of arbitrable disputes — mining-lease and royalty disagreements, hotel and tourism contracts, and solar EPC and power-purchase claims in the Jodhpur-Jaisalmer belt. Judicium Arbitration runs these ad-hoc and institutional references from C-Scheme, with Section 11 arbitrator appointments and writs decided by the Rajasthan High Court Jaipur Bench. The team drafts arbitration clauses, secures interim relief and enforces domestic awards under the Arbitration and Conciliation Act, 1996 across Jaipur, Udaipur, Jodhpur and Kota.",
      faqs: [
        {
          question: "Where do I apply to appoint an arbitrator for a Rajasthan contract?",
          answer:
            "When the opposing party will not cooperate in constituting the tribunal, you file a Section 11 application before the Rajasthan High Court Jaipur Bench, attaching the arbitration agreement and the notice invoking arbitration, and the Chief Justice's designate then appoints the arbitrator. Judicium Arbitration's C-Scheme team prepares the invocation notice and the Section 11 petition for stalled mining, hospitality and solar references.",
        },
        {
          question: "Is a solar power-purchase or EPC dispute in Rajasthan suitable for arbitration?",
          answer:
            "Yes. Solar EPC and power-purchase contracts in the Jodhpur-Jaisalmer renewable-energy belt typically contain arbitration clauses, so delay, variation and payment claims are resolved by arbitration under the Arbitration and Conciliation Act, 1996 rather than ordinary litigation, with the Rajasthan High Court Jaipur Bench supervising appointments and challenges. Judicium Arbitration advises developers and contractors on claims strategy and runs the proceedings.",
        },
      ],
    },
    {
      practiceSlug: "real-estate-urban-development",
      metaAngle:
        "RERA Rajasthan complaints, builder-buyer disputes and title diligence across Jaipur, Udaipur, Jodhpur and Kota",
      localAngle:
        "RERA Rajasthan is headquartered in Jaipur, making the city the centre for homebuyer and developer disputes across the state's fast-growing property market. Judicium Arbitration files possession-delay and refund-with-interest complaints under the Real Estate (Regulation and Development) Act, 2016, conducts title due diligence under the Transfer of Property Act, 1882 and the Registration Act, 1908, and drafts development and sale agreements from C-Scheme. The team represents allottees and developers from Jaipur, Udaipur, Jodhpur and Kota at RERA Rajasthan and its appellate tribunal.",
      faqs: [
        {
          question: "How do I file a complaint against a developer in Jaipur or elsewhere in Rajasthan?",
          answer:
            "A complaint against a Rajasthan developer is filed with RERA Rajasthan, headquartered in Jaipur, with the builder-buyer agreement, payment proof and details of the delay or default, and common reliefs include possession, refund with interest and compensation under the Real Estate (Regulation and Development) Act, 2016. Judicium Arbitration drafts and argues these complaints and carries appeals to the appellate tribunal for buyers across the state.",
        },
        {
          question: "Can I go to both RERA Rajasthan and the consumer forum for a delayed flat?",
          answer:
            "Yes. The Supreme Court has held that RERA does not bar a homebuyer from invoking the Consumer Protection Act, 2019, so a buyer may choose either RERA Rajasthan or the consumer commission, though not seek duplicate relief for the same cause. Judicium Arbitration advises Jaipur-region buyers on the most effective forum based on the project's registration and the relief sought.",
        },
      ],
    },
    {
      practiceSlug: "projects-infrastructure",
      metaAngle:
        "Solar PPA and EPC structuring, mining-project advisory and infrastructure dispute resolution in Rajasthan",
      localAngle:
        "Rajasthan is a national leader in solar generation, with major capacity in the Jodhpur-Jaisalmer belt, alongside mining and road projects that drive heavy infrastructure work. Judicium Arbitration structures power-purchase agreements and FIDIC-based EPC contracts, advises on clearances under the Environment Protection Act, 1986 and electricity-sector matters under the Electricity Act, 2003, and handles project disputes from C-Scheme. Tiered disputes that proceed to arbitration are supervised, on appointments and challenges, by the Rajasthan High Court Jaipur Bench.",
      faqs: [
        {
          question: "How are disputes on a Rajasthan solar EPC or power-purchase project resolved?",
          answer:
            "Infrastructure and EPC contracts in Rajasthan's renewable-energy belt typically provide for tiered resolution — engineer's determination or a dispute board, followed by arbitration under the Arbitration and Conciliation Act, 1996 — given the technical complexity and need for finality, with the Rajasthan High Court Jaipur Bench deciding any Section 11 appointment or challenge. Judicium Arbitration advises developers and contractors on delay, variation and PPA claims and runs the arbitration.",
        },
        {
          question: "What clearances does a solar or mining project in Rajasthan typically need?",
          answer:
            "Depending on the project, developers usually require environmental clearance under the EIA framework made under the Environment Protection Act, 1986, consents to establish and operate from the State Pollution Control Board, electricity-sector approvals under the Electricity Act, 2003 for power projects, and the relevant lease or right-of-way over land. Judicium Arbitration maps the applicable approvals and structures the project documentation from C-Scheme.",
        },
      ],
    },
    {
      practiceSlug: "corporate-commercial",
      metaAngle:
        "Company incorporation, commercial contracts and governance for Rajasthan's mining, hospitality and textile businesses",
      localAngle:
        "Jaipur is the commercial and corporate hub for Rajasthan, where the economy is built on mining and minerals, tourism and hospitality, and textiles. From C-Scheme, Judicium Arbitration acts as outsourced general counsel on incorporation, shareholders' and joint-venture agreements, distribution and supply contracts under the Indian Contract Act, 1872, and governance and ROC compliance under the Companies Act, 2013. Oppression-and-mismanagement and other Companies Act disputes for Rajasthan-registered entities are taken before the NCLT Jaipur Bench.",
      faqs: [
        {
          question: "Where are shareholder oppression disputes for a Rajasthan company heard?",
          answer:
            "Petitions under Sections 241 to 242 of the Companies Act, 2013 for companies registered anywhere in Rajasthan are filed before the NCLT Jaipur Bench, which holds territorial jurisdiction over the whole state. Judicium Arbitration advises promoters, minority shareholders and boards of mining, hospitality and textile businesses on these claims and represents them before that Bench.",
        },
        {
          question: "Do you draft contracts for hotels and mining operators in Rajasthan?",
          answer:
            "Yes. Judicium Arbitration drafts and negotiates management, supply, distribution and joint-venture agreements under the Indian Contract Act, 1872 for hospitality groups, marble and sandstone operators and textile businesses, building in arbitration or commercial-court dispute clauses suited to the Rajasthan forums. The team also handles ongoing governance and ROC compliance for these companies.",
        },
      ],
    },
    {
      practiceSlug: "insolvency-bankruptcy",
      metaAngle:
        "IBC insolvency, CIRP and creditor representation before the NCLT Jaipur Bench for all of Rajasthan",
      localAngle:
        "The NCLT Jaipur Bench exercises IBC and Companies Act jurisdiction over the whole of Rajasthan, making the city the insolvency forum for the state's mining, hospitality, textile and real-estate enterprises. From C-Scheme, Judicium Arbitration initiates and defends the corporate insolvency resolution process under Sections 7, 9 and 10, represents financial and operational creditors on the Committee of Creditors, and structures resolution plans for approval under Section 31. The team carries appeals to the NCLAT and coordinates IBC strategy with related disputes at the Rajasthan High Court Jaipur Bench.",
      faqs: [
        {
          question: "My debtor is a Rajasthan company — where do I file an insolvency petition?",
          answer:
            "Corporate debtors registered anywhere in Rajasthan fall within the territorial jurisdiction of the NCLT Jaipur Bench, so a financial creditor's Section 7 application or an operational creditor's Section 9 application is filed there. Judicium Arbitration's C-Scheme team prepares and argues these petitions and represents creditors and corporate debtors before that Bench.",
        },
        {
          question: "What is the minimum default to trigger insolvency against a Jaipur-region company?",
          answer:
            "A CIRP application before the NCLT Jaipur Bench can be filed only where the default is at least one crore rupees, the threshold raised from one lakh by a March 2020 notification, and the debt must be due and payable without a pre-existing genuine dispute, which is especially relevant for operational creditors under Section 9. Judicium Arbitration assesses whether the threshold and dispute tests are met before filing.",
        },
      ],
    },
    {
      practiceSlug: "banking-finance",
      metaAngle:
        "NPA resolution, SARFAESI enforcement and loan recovery for Rajasthan lenders and borrowers",
      localAngle:
        "Lending and recovery disputes in Rajasthan span the mining, hospitality, textile and real-estate sectors, with insolvency-linked recovery routed to the NCLT Jaipur Bench and writ relief to the Rajasthan High Court Jaipur Bench. From C-Scheme, Judicium Arbitration advises banks, NBFCs and borrowers on NPA resolution, SARFAESI possession and Section 14 applications, one-time settlements, and securitisation challenges under Section 17 of the SARFAESI Act. The team advises whether SARFAESI, debt-recovery proceedings or IBC offers the most effective route for a given exposure.",
      faqs: [
        {
          question: "Can a lender pursue SARFAESI and IBC together against a Rajasthan borrower?",
          answer:
            "A secured creditor can enforce security under the SARFAESI Act, 2002 while also seeking the borrower's admission into CIRP before the NCLT Jaipur Bench, but once a moratorium is declared on admission, SARFAESI measures are stayed. Judicium Arbitration sequences the two tracks so a Rajasthan lender protects both its security and its standing on the Committee of Creditors.",
        },
        {
          question: "How does a borrower contest a SARFAESI possession notice in Rajasthan?",
          answer:
            "A borrower challenging measures under Section 13(4) of the SARFAESI Act files a securitisation application under Section 17 before the Debt Recovery Tribunal, generally within 45 days, since Section 34 bars the civil court, with limited writ relief available before the Rajasthan High Court. Judicium Arbitration drafts and argues these securitisation applications and parallel one-time settlement negotiations for Rajasthan borrowers.",
        },
      ],
    },
  ],
  panipat: [
    {
      practiceSlug: "arbitration-alternative-dispute-resolution",
      metaAngle:
        "MSME-focused arbitration and ADR for Panipat textile, handloom and petrochemical contract disputes",
      localAngle:
        "Judicium Arbitration runs arbitration and ADR for Panipat's textile, handloom and petrochemical businesses, from supply and job-work contract references to award enforcement. For registered MSMEs, delayed-payment disputes can be referred under Section 18 of the MSMED Act, 2006 to the Haryana MSE Facilitation Council, which first attempts conciliation and then arbitrates. Where a contract carries an arbitration clause, ad-hoc references run locally, with Section 11 arbitrator appointments and award challenges routed to the Punjab and Haryana High Court at Chandigarh. The firm advises handloom exporters and Indian Oil Panipat Refinery ancillaries on the right ADR pathway.",
      faqs: [
        {
          question:
            "Is the MSMED Section 18 Facilitation Council route the same as ordinary arbitration for a Panipat textile supplier?",
          answer:
            "The Section 18 reference before the Haryana MSE Facilitation Council begins with mandatory conciliation, and only if that fails does it proceed to arbitration, which is treated as if conducted under the Arbitration and Conciliation Act, 1996. It is available only to a registered MSME and carries statutory compound interest, unlike an ordinary arbitration clause in a private contract. Judicium Arbitration advises Panipat suppliers on whether the Facilitation Council route or a contractual arbitration clause better protects their claim.",
        },
        {
          question: "Where would a challenge to an arbitral award arising from a Panipat contract be filed?",
          answer:
            "A Section 34 application to set aside the award is filed before the court of competent jurisdiction, with writ matters and Section 11 arbitrator-appointment petitions lying with the Punjab and Haryana High Court at Chandigarh. The award must otherwise be enforced as a decree once the challenge period passes. Judicium Arbitration handles both enforcement and set-aside work for Panipat manufacturers and exporters.",
        },
      ],
    },
    {
      practiceSlug: "corporate-commercial",
      metaAngle:
        "Corporate and commercial contract advisory for Panipat MSME textile, dyeing and trading enterprises",
      localAngle:
        "Judicium Arbitration acts as outsourced commercial counsel for Panipat's textile, handloom and yarn enterprises, most of which are MSMEs and family-run trading businesses. The firm drafts and negotiates supply, job-work, dyeing and distribution agreements under the Indian Contract Act, 1872, structures incorporations and LLPs, and advises on day-to-day governance and ROC compliance under the Companies Act, 2013. Where supply contracts are breached, commercial recovery suits go to the Commercial Court Panipat, while MSME buyers can pursue delayed payments under the MSMED Act, 2006. The firm helps Indian Oil Panipat Refinery ancillaries paper their vendor relationships cleanly.",
      faqs: [
        {
          question:
            "How should a Panipat textile exporter structure its supply contracts to make recovery easier?",
          answer:
            "Well-drafted supply and job-work agreements under the Indian Contract Act, 1872 should fix payment timelines, interest on delay, and a clear dispute-resolution forum, and the supplier should hold valid Udyam registration to keep the MSMED Act route open. Clear documentation strengthens any later recovery suit before the Commercial Court Panipat or a Facilitation Council reference. Judicium Arbitration drafts these contracts with enforcement in mind for Panipat's textile and trading units.",
        },
        {
          question:
            "Should a growing Panipat handloom business operate as a partnership, LLP or private limited company?",
          answer:
            "An LLP under the Limited Liability Partnership Act, 2008 offers limited liability with lighter compliance and suits many family-run textile businesses, while a private limited company under the Companies Act, 2013 is preferable if the business plans to raise equity or onboard outside investors. The choice affects compliance burden, governance and ROC filings. Judicium Arbitration advises Panipat promoters on the appropriate structure and handles the incorporation and ongoing compliance.",
        },
      ],
    },
    {
      practiceSlug: "banking-finance",
      metaAngle:
        "Lender and borrower banking, SARFAESI and recovery advisory for Panipat industrial and MSME accounts",
      localAngle:
        "Judicium Arbitration advises banks, NBFCs and Panipat borrowers on lending, recovery and stressed-account work across the city's textile, yarn and petrochemical-ancillary economy. The practice covers SARFAESI Act, 2002 enforcement and Section 17 challenges, debt restructuring and one-time settlements, and recovery proceedings under the framework of the RDB Act, 1993. Many Panipat accounts are MSME exposures, so the firm coordinates SARFAESI or recovery action with parallel rights under the MSMED Act, 2006. Writs touching enforcement action and bank conduct are taken before the Punjab and Haryana High Court at Chandigarh.",
      faqs: [
        {
          question: "Can a Panipat manufacturer challenge a SARFAESI possession notice on its factory?",
          answer:
            "Yes. A borrower can file a securitisation application under Section 17 of the SARFAESI Act, 2002 before the Debt Recovery Tribunal challenging measures taken under Section 13(4), generally within 45 days, and Section 34 bars an ordinary civil court from entertaining the dispute. Limited writ relief before the Punjab and Haryana High Court at Chandigarh remains available in narrow circumstances. Judicium Arbitration advises Panipat borrowers and lenders on the correct remedy.",
        },
        {
          question: "How do an MSME's MSMED rights interact with a bank's recovery action in Panipat?",
          answer:
            "A registered MSME's delayed-payment claim against its own buyers under the MSMED Act, 2006 is separate from a bank's recovery action against the MSME as a borrower, and the two proceed before different forums. Recovering outstanding receivables through the Haryana MSE Facilitation Council can ease cash flow and support a settlement with the lender. Judicium Arbitration coordinates both tracks for Panipat textile and manufacturing units.",
        },
      ],
    },
    {
      practiceSlug: "labour-employment",
      metaAngle:
        "Labour compliance and industrial-dispute advisory for Panipat textile, dyeing and refinery-ancillary workforces",
      localAngle:
        "Judicium Arbitration advises Panipat's labour-intensive textile, dyeing and refinery-ancillary employers on workforce compliance, contracts and disputes. The work spans the Industrial Disputes Act, 1947 for retrenchment and industrial-dispute matters, statutory benefits under the EPF Act, 1952, the ESI Act, 1948 and the Payment of Gratuity Act, 1972, and POSH Internal Committee compliance under the 2013 Act. With heavy reliance on contract labour, the firm also advises on CLRA Act, 1970 compliance for handloom and dyeing units. Industrial-dispute adjudication runs through the Labour Court framework, with writs before the Punjab and Haryana High Court at Chandigarh.",
      faqs: [
        {
          question: "What must a Panipat textile unit do before retrenching workmen?",
          answer:
            "For workmen, retrenchment under Section 25F of the Industrial Disputes Act, 1947 generally requires one month's notice or pay in lieu plus retrenchment compensation of fifteen days' average pay for each completed year of service, and larger establishments may need prior government permission. Correct classification of who is a workman is critical. Judicium Arbitration advises Panipat employers on lawful retrenchment and defends resulting industrial disputes.",
        },
        {
          question: "Does a Panipat dyeing unit using contract labour have compliance obligations?",
          answer:
            "Yes. Engaging contract labour above the threshold triggers registration and compliance duties under the Contract Labour (Regulation and Abolition) Act, 1970, including ensuring the contractor's licence, wage payment and welfare obligations. Principal employers can face liability for a contractor's defaults. Judicium Arbitration audits contract-labour arrangements for Panipat textile and dyeing units and helps close compliance gaps.",
        },
      ],
    },
    {
      practiceSlug: "dispute-resolution-litigation",
      metaAngle:
        "Commercial recovery suits and litigation for Panipat textile, trading and refinery-ancillary businesses",
      localAngle:
        "Judicium Arbitration handles commercial litigation and recovery for Panipat's textile, handloom and trading businesses before the Commercial Court and District Court at Panipat. The work includes recovery suits and Order XXXVII summary suits under the Code of Civil Procedure, 1908, commercial disputes under the Commercial Courts Act, 2015, and injunction and specific-performance matters under the Specific Relief Act, 1963. Where a buyer is a registered MSME, the MSMED Act, 2006 Facilitation Council route may be a faster alternative to a suit. Appeals, writs and Section 11 matters are taken to the Punjab and Haryana High Court at Chandigarh.",
      faqs: [
        {
          question: "Is an Order XXXVII summary suit useful for recovering a textile debt in Panipat?",
          answer:
            "Yes. Where the claim arises on a written contract, bill of exchange or other negotiable instrument, an Order XXXVII summary suit under the Code of Civil Procedure, 1908 before the Commercial Court Panipat can be faster because the defendant must obtain leave to defend. It suits clear, documented textile and yarn supply debts. Judicium Arbitration assesses whether a summary suit, an ordinary recovery suit, or an MSMED reference is the strongest route.",
        },
        {
          question: "Should a Panipat supplier sue in the Commercial Court or use the MSMED Facilitation Council?",
          answer:
            "If the supplier is a registered MSME, the Section 18 reference to the Haryana MSE Facilitation Council under the MSMED Act, 2006 offers conciliation, arbitration and statutory compound interest, whereas a non-MSME or a disputed claim may be better suited to a suit before the Commercial Court Panipat. The choice turns on registration status and the nature of the dispute. Judicium Arbitration advises on the more effective forum before filing.",
        },
      ],
    },
    {
      practiceSlug: "real-estate-urban-development",
      metaAngle:
        "Property transactions, title diligence and construction-contract disputes across Panipat's GT Road industrial belt",
      localAngle:
        "Judicium Arbitration advises on real estate and construction matters across Panipat's GT Road industrial and commercial belt, from factory and plot acquisitions to development of textile and warehousing sites. The firm conducts title due diligence and encumbrance checks and drafts and registers sale, lease and development agreements under the Transfer of Property Act, 1882, the Registration Act, 1908 and the Indian Stamp Act, 1899. Construction and works-contract disputes connected to industrial development are pursued through arbitration or before the Commercial Court Panipat. Writs and arbitrator-appointment petitions on property-linked contracts go to the Punjab and Haryana High Court at Chandigarh.",
      faqs: [
        {
          question: "Why is title due diligence important before buying an industrial plot in Panipat?",
          answer:
            "Title due diligence verifies that the seller holds clear, marketable ownership free of encumbrances and litigation, examining the chain of title under the Registration Act, 1908 and the Transfer of Property Act, 1882. For Panipat industrial and GT Road plots this is essential before paying consideration or charging the property to a lender. Judicium Arbitration conducts title searches and prepares and registers the conveyance documents.",
        },
        {
          question: "How are construction and works-contract disputes on Panipat industrial projects resolved?",
          answer:
            "Where the construction or works contract contains an arbitration clause, delay, variation and payment disputes are referred to arbitration under the Arbitration and Conciliation Act, 1996; otherwise they proceed before the Commercial Court Panipat. Section 11 appointments and award challenges are routed through the Punjab and Haryana High Court at Chandigarh. Judicium Arbitration advises Panipat developers and contractors on claims and the right forum.",
        },
      ],
    },
  ],
  prayagraj: [
    {
      practiceSlug: "arbitration-alternative-dispute-resolution",
      metaAngle:
        "Allahabad High Court arbitration counsel for Section 11, 34 and 37 matters across Uttar Pradesh",
      localAngle:
        "Judicium Arbitration's Prayagraj practice is the firm's Allahabad High Court arbitration anchor, acting in matters at the principal seat that exercises jurisdiction over all of Uttar Pradesh except the Awadh districts handled at Lucknow. The work centres on Section 11 arbitrator-appointment petitions, Section 34 applications to set aside awards, and Section 37 appeals under the Arbitration and Conciliation Act, 1996. The firm also runs ad-hoc references and enforces domestic awards as decrees across the state. From Civil Lines, it supports UP-wide commercial parties and escalated matters needing High Court attention.",
      faqs: [
        {
          question: "Where do I file a Section 11 arbitrator-appointment petition for a UP-seated contract?",
          answer:
            "For most of Uttar Pradesh, a Section 11 application under the Arbitration and Conciliation Act, 1996 is filed before the Allahabad High Court at its principal seat in Prayagraj, while contracts connected to the twelve Awadh districts go to the Lucknow Bench. The petition must attach the arbitration agreement and the notice invoking arbitration. Judicium Arbitration's Prayagraj team drafts and argues these petitions to move stalled references forward.",
        },
        {
          question: "On what grounds can the Allahabad High Court set aside an arbitral award under Section 34?",
          answer:
            "Section 34 of the Arbitration and Conciliation Act, 1996 allows a court to set aside an award only on limited grounds such as incapacity, an invalid arbitration agreement, lack of due process, the award exceeding the scope of reference, or conflict with the public policy of India, and it is not a re-hearing on merits. The application must be filed within three months of receiving the award, extendable by a further thirty days for sufficient cause. Judicium Arbitration files and argues these challenges at the principal seat.",
        },
      ],
    },
    {
      practiceSlug: "dispute-resolution-litigation",
      metaAngle:
        "Commercial, civil and writ litigation before the Allahabad High Court principal seat for UP clients",
      localAngle:
        "Judicium Arbitration's Prayagraj office handles litigation before the Allahabad High Court principal seat, which has jurisdiction over Uttar Pradesh outside the Awadh region, and before the District and Commercial Courts at Prayagraj. The work spans commercial suits under the Commercial Courts Act, 2015, civil disputes under the Code of Civil Procedure, 1908, recovery and specific-performance matters, and writ petitions under Article 226 against state authorities. The firm also files appeals and pursues execution of decrees and awards across the state. It supports escalated matters from the firm's Noida and Lucknow work that reach the High Court.",
      faqs: [
        {
          question: "When does a dispute go to the Allahabad High Court principal seat rather than the Lucknow Bench?",
          answer:
            "The principal seat at Prayagraj hears matters arising from across Uttar Pradesh except the twelve Awadh districts of central UP, which fall to the Lucknow Bench. The correct forum turns on where the cause of action arises and, for arbitration, the seat. Judicium Arbitration assesses jurisdiction before filing so a petition is not returned for want of territorial competence.",
        },
        {
          question: "How are higher-value commercial disputes handled faster in Prayagraj?",
          answer:
            "Commercial disputes above the specified value are routed to the Commercial Court at Prayagraj under the Commercial Courts Act, 2015, which imposes case-management hearings, strict timelines for written statements and disclosure, and pre-institution mediation in many cases. This reduces delay compared with ordinary civil suits. Judicium Arbitration structures pleadings to use these procedures effectively for UP commercial clients.",
        },
      ],
    },
    {
      practiceSlug: "insolvency-bankruptcy",
      metaAngle:
        "IBC and creditor-rights advisory for UP corporate debtors, with Allahabad High Court support",
      localAngle:
        "Judicium Arbitration advises financial and operational creditors, corporate debtors and resolution applicants across Uttar Pradesh on the Insolvency and Bankruptcy Code, 2016. The work covers initiating and defending CIRP under Sections 7, 9 and 10, Committee of Creditors representation, and resolution-plan and liquidation matters. NCLT applications for UP entities are filed at the Allahabad Bench, while writ challenges and constitutional questions connected to insolvency are taken before the Allahabad High Court principal seat at Prayagraj. The firm acts within the IBC's strict statutory timelines for clients across eastern and western UP.",
      faqs: [
        {
          question: "What is the minimum default to file an IBC application against a UP company?",
          answer:
            "An application for the corporate insolvency resolution process can be filed only where the amount in default is at least one crore rupees, the threshold having been raised from one lakh by a March 2020 notification. The default must be of a debt that is due and payable and, for operational creditors, free of a pre-existing genuine dispute. Judicium Arbitration advises UP creditors on whether the default and documentation support a filing.",
        },
        {
          question: "Can a writ challenge an insolvency matter affecting a Prayagraj business?",
          answer:
            "While IBC matters are decided by the NCLT and appealed to the NCLAT, the Allahabad High Court principal seat at Prayagraj can be approached by writ under Article 226 in limited circumstances, such as jurisdictional or constitutional questions, rather than as a substitute for the statutory appeal. Judicium Arbitration advises on when a writ is maintainable and pursues the appropriate remedy.",
        },
      ],
    },
    {
      practiceSlug: "real-estate-urban-development",
      metaAngle:
        "Property transactions, title diligence and RERA-linked disputes for Prayagraj and eastern UP",
      localAngle:
        "Judicium Arbitration advises homebuyers, developers and investors in Prayagraj and the surrounding eastern UP region on property transactions, title due diligence and real estate disputes. The firm drafts and registers sale, lease and development agreements under the Transfer of Property Act, 1882, the Registration Act, 1908 and the Indian Stamp Act, 1899, and handles builder-buyer matters under the Real Estate (Regulation and Development) Act, 2016. RERA complaints lie with the UP Real Estate Regulatory Authority, with statewide appeals heard by the UP Real Estate Appellate Tribunal at Lucknow. Property-linked writs and disputes can be taken to the Allahabad High Court principal seat at Prayagraj.",
      faqs: [
        {
          question: "Where do Prayagraj homebuyers file and appeal a RERA complaint?",
          answer:
            "A complaint against a developer is filed with the UP Real Estate Regulatory Authority under the Real Estate (Regulation and Development) Act, 2016, seeking remedies such as possession, refund with interest or compensation. An appeal against the Authority's order lies to the UP Real Estate Appellate Tribunal, which sits at Lucknow for the whole state. Judicium Arbitration drafts and argues both the complaint and any appeal.",
        },
        {
          question: "Why is a 30-year title search important before buying property in Prayagraj?",
          answer:
            "A title search examines the chain of ownership and encumbrances under the Registration Act, 1908 and the Transfer of Property Act, 1882, conventionally over a thirty-year period, to confirm the seller has clear, marketable title. This protects the buyer and any lender from defective-title and litigation risk before paying consideration. Judicium Arbitration conducts the diligence and prepares the conveyance for Prayagraj property buyers.",
        },
      ],
    },
    {
      practiceSlug: "banking-finance",
      metaAngle:
        "Lender and borrower SARFAESI, recovery and IBC-creditor advisory for Uttar Pradesh accounts",
      localAngle:
        "Judicium Arbitration advises banks, NBFCs and borrowers across Uttar Pradesh on stressed-asset and recovery work, drawing on the firm's Allahabad High Court presence at Prayagraj. The practice covers SARFAESI Act, 2002 enforcement and Section 17 challenges, debt restructuring and one-time settlements, recovery proceedings under the RDB Act, 1993, and financial-creditor rights under the Insolvency and Bankruptcy Code, 2016. Writ petitions challenging enforcement action or bank conduct are taken before the Allahabad High Court principal seat. The firm represents both lenders and borrowers in eastern and western UP.",
      faqs: [
        {
          question: "How can a UP borrower challenge SARFAESI action on a secured asset?",
          answer:
            "A borrower may file a securitisation application under Section 17 of the SARFAESI Act, 2002 before the Debt Recovery Tribunal challenging measures taken under Section 13(4), usually within forty-five days, and civil court jurisdiction is barred by Section 34. Limited writ relief before the Allahabad High Court principal seat at Prayagraj remains available in narrow circumstances. Judicium Arbitration advises UP borrowers and lenders on the correct route.",
        },
        {
          question: "When should a UP lender choose IBC over SARFAESI or DRT recovery?",
          answer:
            "SARFAESI and DRT proceedings target a secured asset or money decree, while the Insolvency and Bankruptcy Code, 2016 initiates a collective resolution of the corporate debtor before the NCLT Allahabad Bench, suitable where the default is at least one crore rupees and resolution or change of management is the goal. The choice depends on security held, default size and recovery strategy. Judicium Arbitration advises UP lenders on the most effective mechanism.",
        },
      ],
    },
    {
      practiceSlug: "corporate-commercial",
      metaAngle:
        "Corporate, contract and compliance advisory for Prayagraj and eastern UP businesses",
      localAngle:
        "Judicium Arbitration acts as outsourced commercial counsel for Prayagraj and eastern UP businesses, including agro-processing, small-manufacturing and services enterprises. The firm handles company and LLP incorporation, governance and ROC compliance under the Companies Act, 2013 and the Limited Liability Partnership Act, 2008, and drafts and negotiates commercial contracts under the Indian Contract Act, 1872. Where commercial contracts are breached, disputes are litigated before the Commercial Court at Prayagraj or arbitrated, with Section 11 and writ matters escalating to the Allahabad High Court principal seat. The firm supports day-to-day legal advisory for growing regional businesses.",
      faqs: [
        {
          question: "What annual compliances must a private company in Prayagraj meet?",
          answer:
            "A private limited company must hold its board and annual general meetings, file financial statements in Form AOC-4 and the annual return in Form MGT-7 with the Registrar of Companies, maintain statutory registers, and comply with director KYC and auditor-appointment requirements under the Companies Act, 2013. Default attracts daily penalties and can lead to director disqualification. Judicium Arbitration manages ongoing compliance for Prayagraj and eastern UP companies.",
        },
        {
          question: "How can a Prayagraj agro-processing business make its supply contracts enforceable?",
          answer:
            "Supply and distribution agreements drafted under the Indian Contract Act, 1872 should clearly fix payment terms, delivery obligations, interest on delay and a defined dispute-resolution forum, whether arbitration or the Commercial Court at Prayagraj. Clear documentation strengthens later recovery. Judicium Arbitration drafts and negotiates these contracts with enforcement in mind for eastern UP enterprises.",
        },
      ],
    },
  ],
  lucknow: [
    {
      practiceSlug: "real-estate-urban-development",
      metaAngle:
        "UP REAT appeals and RERA-linked real estate disputes for homebuyers and developers statewide",
      localAngle:
        "Judicium Arbitration's Lucknow office is positioned for real estate work because the city hosts the UP Real Estate Appellate Tribunal (UP REAT), the second-tier forum that hears appeals against UP Real Estate Regulatory Authority orders for the entire state. The firm represents homebuyers and developers in REAT appeals on possession delays, refund interest and structural-defect claims under the Real Estate (Regulation and Development) Act, 2016, and handles property transactions and title diligence under the Transfer of Property Act, 1882 and the Registration Act, 1908. Construction-contract and writ matters are taken before the Allahabad High Court Lucknow Bench for the Awadh region.",
      faqs: [
        {
          question: "How do I appeal a UP RERA order, and where is the tribunal located?",
          answer:
            "An appeal against a UP Real Estate Regulatory Authority order is filed before the UP Real Estate Appellate Tribunal at Lucknow within sixty days of the order, and a developer-appellant must first deposit the amount the Authority directed before the appeal is entertained. The Tribunal can confirm, modify or set aside the order. Judicium Arbitration's Lucknow office drafts the appeal and represents both buyers and developers before UP REAT.",
        },
        {
          question: "Does a homebuyer anywhere in UP appeal to the Lucknow tribunal?",
          answer:
            "Yes. The UP Real Estate Appellate Tribunal at Lucknow is the statewide appellate forum above UP RERA, so appeals from RERA orders across Uttar Pradesh, including Noida and other districts, are heard there. Judicium Arbitration's Lucknow office regularly appears in REAT appeals for buyers and developers from across the state.",
        },
      ],
    },
    {
      practiceSlug: "arbitration-alternative-dispute-resolution",
      metaAngle:
        "Awadh-region arbitration counsel for state-government and PSU contract disputes at the Lucknow Bench",
      localAngle:
        "Judicium Arbitration runs arbitration and ADR for the Awadh region from Lucknow, with particular strength in state-government and PSU contract disputes given the concentration of UP departments and public undertakings in the capital. The firm invokes arbitration clauses, conducts references and enforces awards under the Arbitration and Conciliation Act, 1996. Section 11 arbitrator-appointment petitions, Section 34 set-aside applications and Section 37 appeals for the twelve Awadh districts are heard by the Allahabad High Court Lucknow Bench. The firm acts for both government bodies and private contractors in works- and supply-contract arbitrations.",
      faqs: [
        {
          question: "How are arbitration clauses in UP government and PSU contracts invoked from Lucknow?",
          answer:
            "Arbitration is commenced by serving a notice invoking arbitration under the Arbitration and Conciliation Act, 1996, and if the other side does not cooperate in appointing an arbitrator, a Section 11 petition is filed before the Allahabad High Court Lucknow Bench for Awadh-region contracts. Government and PSU contracts often prescribe a specific appointment mechanism that must be followed. Judicium Arbitration drafts the invocation notice and pursues the appointment.",
        },
        {
          question: "Where are arbitration awards from central UP challenged and enforced?",
          answer:
            "Section 34 applications to set aside awards and Section 37 appeals for the Awadh region are heard by the Allahabad High Court Lucknow Bench, while an unchallenged award is enforced as a decree through the Lucknow commercial and district courts. The set-aside grounds under the Arbitration and Conciliation Act, 1996 are limited and do not amount to a re-hearing. Judicium Arbitration handles both challenge and enforcement for central-UP awards.",
        },
      ],
    },
    {
      practiceSlug: "dispute-resolution-litigation",
      metaAngle:
        "Litigation before the Allahabad High Court Lucknow Bench and state-government contract disputes",
      localAngle:
        "Judicium Arbitration's Lucknow office litigates before the Allahabad High Court Lucknow Bench, which has jurisdiction over the twelve Awadh districts, and before the District and Commercial Courts at Lucknow. The work spans commercial suits under the Commercial Courts Act, 2015, civil disputes under the Code of Civil Procedure, 1908, recovery and specific-performance matters, and writ petitions under Article 226, including service and administrative-law matters against the many UP departments based in the capital. The firm also pursues appeals and execution of decrees and awards. State-government works- and supply-contract disputes are a core focus.",
      faqs: [
        {
          question: "Which court hears writ petitions against UP government departments based in Lucknow?",
          answer:
            "Writ petitions under Article 226 against UP government departments and authorities in the Awadh region are filed before the Allahabad High Court Lucknow Bench, which exercises jurisdiction over the twelve Awadh districts. As most state departments are headquartered in the capital, many service and administrative-law matters are heard there. Judicium Arbitration drafts and argues these writ petitions for clients dealing with state authorities.",
        },
        {
          question: "How are state-government contract disputes resolved in Lucknow?",
          answer:
            "UP government works- and supply-contracts commonly contain an arbitration clause, so disputes are first referred to arbitration under the Arbitration and Conciliation Act, 1996; absent a clause, the matter proceeds as a commercial or civil suit before the Lucknow courts. Resulting awards are then enforced through execution. Judicium Arbitration represents both contractors and government bodies through invocation, arbitration and enforcement.",
        },
      ],
    },
    {
      practiceSlug: "corporate-commercial",
      metaAngle:
        "Corporate, contract and compliance advisory for Lucknow and Awadh-region businesses",
      localAngle:
        "Judicium Arbitration acts as outsourced commercial counsel for Lucknow's growing private economy in real estate, IT and services and for businesses across the Awadh region. The firm handles company and LLP incorporation, governance and ROC compliance under the Companies Act, 2013 and the Limited Liability Partnership Act, 2008, and drafts and negotiates commercial contracts under the Indian Contract Act, 1872, including contracts with state departments and PSUs based in the capital. Commercial disputes are litigated before the Commercial Court Lucknow or arbitrated, with Section 11 and writ matters going to the Allahabad High Court Lucknow Bench.",
      faqs: [
        {
          question: "What should a Lucknow business check before contracting with a UP government department or PSU?",
          answer:
            "Contracts with state departments and PSUs should be reviewed for the prescribed dispute-resolution and arbitration clause, payment and performance terms, and any tender-condition requirements, since these dictate how a later dispute is resolved. Clear drafting under the Indian Contract Act, 1872 protects the private party. Judicium Arbitration reviews and negotiates public-contract terms for Lucknow businesses.",
        },
        {
          question: "What annual compliances must a Lucknow private company meet?",
          answer:
            "A private limited company must hold board and annual general meetings, file financial statements in Form AOC-4 and the annual return in Form MGT-7 with the Registrar of Companies, maintain statutory registers, and comply with director KYC and auditor-appointment requirements under the Companies Act, 2013. Default attracts daily penalties and possible director disqualification. Judicium Arbitration manages ongoing corporate compliance for Lucknow and Awadh-region companies.",
        },
      ],
    },
    {
      practiceSlug: "insolvency-bankruptcy",
      metaAngle:
        "IBC and creditor-rights advisory for Awadh-region debtors, with Lucknow Bench writ support",
      localAngle:
        "Judicium Arbitration advises creditors, corporate debtors and resolution applicants across the Awadh region on the Insolvency and Bankruptcy Code, 2016, including initiating and defending CIRP under Sections 7, 9 and 10, Committee of Creditors representation, and resolution-plan and liquidation work. NCLT applications for UP entities are filed at the Allahabad Bench, while writ challenges and constitutional questions connected to insolvency in central UP are taken before the Allahabad High Court Lucknow Bench. The firm also coordinates IBC exposure with creditors' parallel recovery options for businesses across the twelve Awadh districts.",
      faqs: [
        {
          question: "Who can initiate insolvency against a company in the Awadh region, and where?",
          answer:
            "CIRP can be initiated by a financial creditor under Section 7, an operational creditor under Section 9, or the corporate debtor itself under Section 10 of the Insolvency and Bankruptcy Code, 2016, where the default is at least one crore rupees. The application is filed before the NCLT bench having jurisdiction over the UP entity. Judicium Arbitration advises Awadh-region creditors and debtors on eligibility and prepares the application.",
        },
        {
          question: "Can the Lucknow Bench be approached on an insolvency matter?",
          answer:
            "IBC matters are decided by the NCLT and appealed to the NCLAT, but the Allahabad High Court Lucknow Bench can be approached by writ under Article 226 in limited circumstances, such as jurisdictional or constitutional questions for Awadh-region parties, not as a substitute for the statutory appeal. Judicium Arbitration advises on when a writ is maintainable and pursues the right forum.",
        },
      ],
    },
    {
      practiceSlug: "banking-finance",
      metaAngle:
        "Lender and borrower SARFAESI, recovery and IBC-creditor advisory for Awadh-region accounts",
      localAngle:
        "Judicium Arbitration advises banks, NBFCs and borrowers across the Awadh region on recovery and stressed-asset work from its Lucknow office. The practice covers SARFAESI Act, 2002 enforcement and Section 17 challenges, debt restructuring and one-time settlements, recovery proceedings under the RDB Act, 1993, and financial-creditor rights under the Insolvency and Bankruptcy Code, 2016, including for accounts involving state-linked entities based in the capital. Writ petitions challenging enforcement action are taken before the Allahabad High Court Lucknow Bench. The firm represents both lenders and borrowers across the twelve Awadh districts.",
      faqs: [
        {
          question: "How does a borrower in the Awadh region challenge a SARFAESI possession notice?",
          answer:
            "A borrower can file a securitisation application under Section 17 of the SARFAESI Act, 2002 before the Debt Recovery Tribunal challenging measures taken under Section 13(4), generally within forty-five days, and Section 34 bars an ordinary civil court from hearing the matter. Limited writ relief before the Allahabad High Court Lucknow Bench remains available in narrow circumstances. Judicium Arbitration advises Awadh-region borrowers and lenders on the correct remedy.",
        },
        {
          question: "When should a Lucknow-area lender pursue IBC instead of SARFAESI or DRT?",
          answer:
            "SARFAESI and DRT recovery focus on enforcing security or obtaining a money decree, while the Insolvency and Bankruptcy Code, 2016 triggers a collective resolution of the corporate debtor before the NCLT where the default is at least one crore rupees and resolution or change of control is the aim. The right choice depends on the security held, the size of default and recovery strategy. Judicium Arbitration advises Awadh-region lenders on the most effective route.",
        },
      ],
    },
  ],
};

/** All practice entries curated for a city (in display order). */
export function getPracticesForCity(citySlug: string): CityPracticeEntry[] {
  return cityPracticeMap[citySlug] ?? [];
}

/** The unique content layer for one city × practice combination. */
export function getCityPracticeEntry(
  citySlug: string,
  practiceSlug: string
): CityPracticeEntry | undefined {
  return getPracticesForCity(citySlug).find(
    (e) => e.practiceSlug === practiceSlug
  );
}

/** City slugs that have a dedicated landing page for a given practice. */
export function getCitiesForPractice(practiceSlug: string): string[] {
  return Object.keys(cityPracticeMap).filter((city) =>
    cityPracticeMap[city].some((e) => e.practiceSlug === practiceSlug)
  );
}

/** Every (city, practice) pair — drives generateStaticParams and the sitemap. */
export function getAllCityPracticePairs(): { city: string; practice: string }[] {
  const pairs: { city: string; practice: string }[] = [];
  for (const city of Object.keys(cityPracticeMap)) {
    for (const entry of cityPracticeMap[city]) {
      pairs.push({ city, practice: entry.practiceSlug });
    }
  }
  return pairs;
}
