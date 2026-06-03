/**
 * Cornerstone insights articles — long-form, dated, founder-attributed content.
 *
 * Each article is the firm's authoritative reference on a high-LLM-mind-share Indian
 * arbitration topic. Designed for AEO/GEO citation: short paragraphs, embedded FAQs,
 * statute references that become Legislation schema entities.
 *
 * Content structure: sections[] is rendered as alternating h2 + paragraph blocks.
 * Each paragraph can be a string or an array of strings (becomes <p> per string).
 */

export type InsightCategory =
  | "Arbitration & ADR"
  | "Banking & Finance"
  | "Real Estate"
  | "Insolvency"
  | "Corporate";

export interface InsightSection {
  heading: string;
  paragraphs: string[];
}

export interface InsightFAQ {
  question: string;
  answer: string;
}

export interface InsightArticle {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  category: InsightCategory;
  authorName: string;
  authorTitle: string;
  // ISO date — published / updated drive Article schema
  datePublished: string;
  dateModified: string;
  // Reading time hint (mins)
  readingTime: number;
  // Words used for SERP excerpt + the on-page Quick Answer block
  tldr: string;
  // Citation-friendly statutes — emit as Legislation schema in Article.about
  relatedActs: string[];
  keywords: string[];
  sections: InsightSection[];
  faqs: InsightFAQ[];
}

export const insightsData: InsightArticle[] = [
  {
    slug: "section-9-vs-section-17-arbitration-act",
    title: "Section 9 vs Section 17 of the Arbitration Act: Interim Relief in Indian Arbitration",
    subtitle:
      "When to approach a court under Section 9, when to apply to the tribunal under Section 17, and how the two interact in 2026.",
    metaDescription:
      "Detailed guide to interim relief in Indian arbitration — Section 9 court applications vs Section 17 tribunal orders under the Arbitration and Conciliation Act, 1996. Timing, scope, enforcement, and strategic choice.",
    category: "Arbitration & ADR",
    authorName: "Dr. Ravikant Bhardwaj",
    authorTitle: "Senior Advocate & Partner",
    datePublished: "2026-02-10",
    dateModified: "2026-05-08",
    readingTime: 9,
    tldr:
      "Section 9 of the Arbitration and Conciliation Act, 1996 lets a party apply to a court for interim measures of protection before, during, or after arbitration but before enforcement of the award. Section 17 empowers the arbitral tribunal — once constituted — to grant the same interim measures. Section 9 is the right tool before the tribunal exists or where the relief sought requires court powers against third parties; Section 17 is faster once the tribunal is constituted and a Section 17(2) order is enforceable like a court order. Strategic choice often turns on speed, third-party reach, and enforcement.",
    relatedActs: [
      "Arbitration and Conciliation Act, 1996",
      "Arbitration and Conciliation (Amendment) Act, 2015",
      "Commercial Courts Act, 2015",
      "Code of Civil Procedure, 1908",
    ],
    keywords: [
      "Section 9 Arbitration Act",
      "Section 17 Arbitration Act",
      "interim relief arbitration India",
      "court ordered interim measures arbitration",
      "arbitral tribunal interim relief",
      "Section 9 vs Section 17",
      "Delhi High Court Section 9",
      "emergency arbitrator India",
      "pre tribunal injunction",
      "Section 17(2) enforceability",
    ],
    sections: [
      {
        heading: "Why interim relief matters in arbitration",
        paragraphs: [
          "Arbitration is meant to deliver a final award. But a final award delivered against a dissipated balance sheet or a sold-off asset is a Pyrrhic victory. Interim relief preserves the status quo while the dispute is being heard — freezing bank accounts, restraining the transfer of shares, securing inventory, appointing a receiver — so that the award, when it comes, has something to bite.",
          "The Arbitration and Conciliation Act, 1996 provides two parallel channels for interim relief. Section 9 lets the party approach a court. Section 17 lets the party approach the arbitral tribunal. Both routes survived the 2015 amendments substantially intact, but their interplay has changed enough that practitioners now think carefully about which one to use, when.",
        ],
      },
      {
        heading: "What Section 9 does",
        paragraphs: [
          "Section 9 of the 1996 Act empowers a party to apply to a 'Court' for interim measures of protection. The kinds of relief available are listed in Section 9(1) and broadly mirror Order XXXIX of the Code of Civil Procedure, 1908 — interim custody of goods, preservation of property, securing the amount in dispute, interim injunctions, appointment of a receiver, and 'such other interim measure of protection as may appear to the Court to be just and convenient.'",
          "A Section 9 application can be filed at three stages — before the commencement of arbitration, during the arbitration, and after the award is made but before its enforcement under Section 36. After the 2015 amendments, however, where a tribunal already exists, Section 9 access is constrained by Section 9(3): the court will not entertain a Section 9 application unless it finds that the Section 17 remedy will not be efficacious.",
        ],
      },
      {
        heading: "What Section 17 does",
        paragraphs: [
          "Section 17, in its post-2015 form, gives the arbitral tribunal the same powers a court has under Section 9. The tribunal can grant interim relief 'during the arbitral proceedings or at any time after the making of the arbitral award but before it is enforced.' Critically, Section 17(2) deems an order under Section 17(1) to be an order of the court for the purposes of enforcement, and enforces it under the Code of Civil Procedure as if it were a court order.",
          "That last point is doctrinally important. Before 2015, a Section 17 order was a tribunal direction that often required a separate civil contempt or Section 9 follow-up to be enforced against a recalcitrant party. Today, the tribunal-issued Section 17 order has the same teeth as a Delhi High Court injunction.",
        ],
      },
      {
        heading: "When to choose Section 9",
        paragraphs: [
          "Section 9 remains the right tool in three scenarios. First, when the tribunal does not yet exist — a party that has issued a Section 21 notice but is still in the arbitrator-appointment phase needs urgent relief and cannot wait. Second, when the relief sought requires the court's coercive powers against third parties — for instance, a freezing order against a bank where the bank is not a party to the arbitration agreement. Third, when the seat of arbitration is outside India and Part II applies for enforcement but Section 9 (read with Section 2(2) proviso) is invoked in respect of an asset located in India.",
          "In the post-tribunal phase, courts will admit Section 9 applications only on a satisfaction that Section 17 will not be efficacious. Practitioners have read this as a 'first-bite' rule: try the tribunal first, then come to the court if the tribunal can't help.",
        ],
      },
      {
        heading: "When to choose Section 17",
        paragraphs: [
          "Section 17 is usually faster once the tribunal is constituted, because the tribunal already has the file, already knows the parties, and can hold a same-day hearing on Zoom. Court lists in Delhi, Mumbai, and Chennai often run weeks or months even on an urgent basis.",
          "Section 17 also offers procedural flexibility — the tribunal can frame a bespoke order tailored to the contract, the parties, and the relevant industry, without being constrained by the standard interlocutory forms used in court. For complex commercial disputes — banking, energy, construction — this matters.",
        ],
      },
      {
        heading: "Emergency arbitrators — the third option",
        paragraphs: [
          "Where the tribunal is not yet constituted but the parties have chosen institutional rules (DIAC, MCIA, SIAC, ICC, LCIA), the institution can appoint an emergency arbitrator within days to grant interim relief pending the full tribunal. The Supreme Court of India confirmed the enforceability of emergency arbitrator orders in Amazon.com NV Investment Holdings LLC v. Future Retail Ltd., (2021) — at least for India-seated proceedings. This makes emergency arbitration a viable alternative to a Section 9 application in the pre-tribunal phase.",
        ],
      },
      {
        heading: "Practical takeaway",
        paragraphs: [
          "The right path turns on three questions. Is the tribunal constituted? If no, Section 9 or emergency arbitration. If yes, default to Section 17 unless the relief requires coercive power against a non-party. Does the relief need court reach against third parties? If yes, Section 9. How fast do you need the order? Tribunal Zoom hearings beat court lists almost every time.",
          "At Judicium Arbitration, our default workflow on receipt of a new dispute is to (a) file the Section 21 notice and begin tribunal-constitution discussions, (b) in parallel, file a Section 9 application in the appropriate court if the asset risk is acute, and (c) move the interim matter to Section 17 as soon as the tribunal is constituted. The three steps run concurrently and protect the client while the appointment process plays out.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a court entertain a Section 9 application after the tribunal has been constituted?",
        answer:
          "Yes, but only if the court is satisfied that the remedy under Section 17 will not be efficacious. Post-2015, the default is to go to the tribunal first; the court will entertain a Section 9 application after constitution only in narrow circumstances — typically where the relief requires coercive power against a non-party.",
      },
      {
        question: "Is an order under Section 17 directly enforceable?",
        answer:
          "Yes. Under Section 17(2) of the Arbitration and Conciliation Act, 1996, an order made by the arbitral tribunal under Section 17(1) is deemed to be an order of the court for the purposes of enforcement, and is enforced under the Code of Civil Procedure, 1908, in the same manner as if it were a court order.",
      },
      {
        question: "Can a foreign-seated arbitration support a Section 9 application in India?",
        answer:
          "Yes. The proviso to Section 2(2) of the Act, inserted by the 2015 amendments, makes Section 9 (alongside Sections 27, 37(1)(a) and 37(3)) applicable to international commercial arbitrations seated outside India, unless the parties have agreed to exclude it. This allows protection of Indian assets even where the seat is, say, Singapore or London.",
      },
      {
        question: "How fast can a Section 17 order be obtained?",
        answer:
          "Where the tribunal is already constituted, a Section 17 application can be heard within days — many institutional tribunals will hold a video hearing within 48–72 hours on a properly urgent application. By contrast, Section 9 applications in commercial courts typically take 1–4 weeks for first hearing, depending on the bench.",
      },
    ],
  },
  {
    slug: "nn-global-stamping-arbitration-agreements",
    title: "What NN Global Means for Arbitration Agreements in India (2024–2026)",
    subtitle:
      "The Supreme Court's evolving position on unstamped arbitration agreements, and what it means for drafting and enforcement.",
    metaDescription:
      "Analysis of NN Global Mercantile v. Indo Unique Flame on stamping and enforceability of arbitration agreements in India. Current law as of 2026, practical drafting guidance, and Section 11 considerations.",
    category: "Arbitration & ADR",
    authorName: "Dr. Ravikant Bhardwaj",
    authorTitle: "Senior Advocate & Partner",
    datePublished: "2026-02-25",
    dateModified: "2026-05-05",
    readingTime: 8,
    tldr:
      "The Supreme Court of India's Constitution Bench in NN Global Mercantile Pvt. Ltd. v. Indo Unique Flame Ltd. (December 2023) held that an arbitration agreement contained in an unstamped or insufficiently stamped instrument is unenforceable until the stamping defect is cured. Sections 11, 8 and 9 of the Arbitration and Conciliation Act, 1996 cannot be invoked on an unstamped instrument. Practical impact: every commercial contract drafted in India must now be properly stamped at execution, and any party seeking to enforce arbitration must complete impounding and stamping under the Indian Stamp Act, 1899 before approaching the court.",
    relatedActs: [
      "Arbitration and Conciliation Act, 1996",
      "Indian Stamp Act, 1899",
      "Indian Contract Act, 1872",
      "Code of Civil Procedure, 1908",
    ],
    keywords: [
      "NN Global judgment",
      "stamping arbitration agreement India",
      "unstamped arbitration clause",
      "Section 11 arbitration India",
      "Indian Stamp Act arbitration",
      "Supreme Court arbitration stamping",
      "impounding instrument arbitration",
      "validity arbitration agreement India",
      "NN Global vs Garware Wall Ropes",
    ],
    sections: [
      {
        heading: "The journey to NN Global",
        paragraphs: [
          "The question of whether an arbitration clause in an unstamped instrument is enforceable has shuttled between the Supreme Court of India and the high courts for nearly two decades. SMS Tea Estates (2011) and Garware Wall Ropes (2019) said no — the arbitration clause is unenforceable until the instrument is stamped. Vidya Drolia (2020) held that the validity question, including stamping, is for the tribunal, and the court at the Section 11 stage should not concern itself.",
          "NN Global was referred to a five-judge Constitution Bench precisely because of this oscillation. The Constitution Bench's December 2023 ruling — by majority — holds that an arbitration agreement in an unstamped instrument is non-existent in law and cannot be enforced at the Section 11 stage. The court will impound the instrument under Section 33 of the Indian Stamp Act, 1899 and direct that the defect be cured before the Section 11 reference is taken up.",
        ],
      },
      {
        heading: "What the judgment changed in practice",
        paragraphs: [
          "Three operational shifts followed. First, Section 11 applications now routinely come with a preliminary stamping objection — opposing parties raise it as a first line of defence to delay arbitrator appointment. Second, the practice of impounding the instrument under Section 33 of the Stamp Act became a default step in Section 11 hearings, with the court directing the applicant to pay deficit duty and penalty before the arbitration moves. Third, drafting practice tightened: well-advised commercial parties now treat stamping as a closing condition.",
          "The Stamp Act schedules vary by state. A loan agreement stamped sufficiently in Maharashtra may be deficient in Delhi or Karnataka. For multi-state transactions, the highest-duty state typically governs the stamping requirement.",
        ],
      },
      {
        heading: "Cure procedure",
        paragraphs: [
          "Where an arbitration agreement is in an unstamped instrument, the cure procedure runs through the District Collector under Section 40 of the Indian Stamp Act, 1899. The party pays the deficit stamp duty plus a penalty (up to ten times the duty), the Collector certifies the instrument as duly stamped, and the certified instrument is then admissible in evidence and enforceable.",
          "The Section 11 court will typically direct the applicant to complete this process within a stipulated time (often 8 to 12 weeks) and adjourn the appointment application accordingly. Once the certified instrument is filed, the Section 11 application is heard on merits.",
        ],
      },
      {
        heading: "Drafting and execution guidance",
        paragraphs: [
          "For new contracts: identify the correct stamp duty before execution, factor stamping cost into the deal, and use e-stamping (Stock Holding Corporation of India SHCIL portal in most states) to maintain a verifiable trail. Where the contract is executed across states, choose the highest-duty state's schedule.",
          "For existing contracts: audit material contracts for stamping compliance. Where stamping is deficient, complete the Section 40 cure procedure proactively rather than waiting for a dispute. The cost of cure is modest; the cost of dispute delay is not.",
        ],
      },
      {
        heading: "Continuing uncertainty",
        paragraphs: [
          "Two open questions remain. First, the position on foreign-seated arbitrations involving Indian-stamping instruments — the Indian Stamp Act applies to instruments executed in India, but its interaction with foreign-seated proceedings under Part II of the Arbitration Act is still settling. Second, the kompetenz-kompetenz principle (the tribunal's authority to rule on its own jurisdiction) sits in tension with mandatory court impounding at the Section 11 stage; later benches may revisit this balance.",
          "For now, the safest course is: stamp at execution, cure proactively where deficient, and don't bring a Section 11 application without a stamping audit done.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an arbitration clause in an unstamped agreement enforceable in India?",
        answer:
          "No, not until the stamping defect is cured. Following the Supreme Court Constitution Bench in NN Global Mercantile Pvt. Ltd. v. Indo Unique Flame Ltd. (December 2023), an arbitration clause contained in an unstamped or insufficiently stamped instrument is unenforceable. The instrument must be impounded and the deficit stamp duty paid under the Indian Stamp Act, 1899 before the clause can be invoked under Sections 8, 9 or 11 of the Arbitration and Conciliation Act, 1996.",
      },
      {
        question: "What is the cure procedure for an unstamped arbitration agreement?",
        answer:
          "The instrument is impounded by the court under Section 33 of the Indian Stamp Act, 1899, and sent to the District Collector under Section 40 for adjudication. The party pays the deficit stamp duty plus a penalty (up to ten times the duty). The Collector certifies the instrument as duly stamped, after which it becomes admissible in evidence and enforceable as an arbitration agreement.",
      },
      {
        question: "Does NN Global apply to foreign-seated arbitration?",
        answer:
          "The Indian Stamp Act, 1899 applies to instruments executed in India regardless of the seat of arbitration. However, the precise interaction between NN Global and Part II proceedings (foreign-seated arbitration with Indian enforcement) remains an evolving area of law. Practitioners should treat stamping as a baseline requirement for any India-executed contract irrespective of seat.",
      },
      {
        question: "How long does the stamping cure procedure take?",
        answer:
          "Courts typically grant 8 to 12 weeks for the Section 40 cure process — payment of deficit stamp duty plus penalty before the District Collector and obtaining the certified instrument. Once certified, the underlying Section 11 (or other) application is reactivated.",
      },
    ],
  },
  {
    slug: "foreign-award-enforcement-india-new-york-convention",
    title: "Enforcing Foreign Arbitral Awards in India under the New York Convention",
    subtitle:
      "Part II of the Arbitration and Conciliation Act, 1996 — procedure, timelines, grounds for refusal, and practical tips.",
    metaDescription:
      "Complete guide to enforcing foreign arbitral awards in India under Part II of the Arbitration and Conciliation Act, 1996 and the New York Convention 1958. Procedure, court jurisdiction, Section 48 grounds, and typical timelines.",
    category: "Arbitration & ADR",
    authorName: "Advocate Suryakant Bhardwaj",
    authorTitle: "Senior Advocate & Partner",
    datePublished: "2026-03-08",
    dateModified: "2026-05-02",
    readingTime: 10,
    tldr:
      "Foreign arbitral awards from New York Convention countries are enforced in India under Part II of the Arbitration and Conciliation Act, 1996. The successful party files an enforcement petition (with the award, the arbitration agreement, and certified translations) before the High Court having territorial jurisdiction over the award debtor's assets. The court reviews narrow Section 48 grounds — none of which permit a merits review — and on satisfaction, the award is deemed to be a decree of the court and executable. Typical timelines: 6 to 24 months, depending on whether the award is challenged.",
    relatedActs: [
      "Arbitration and Conciliation Act, 1996",
      "New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards, 1958",
      "Geneva Convention on the Execution of Foreign Arbitral Awards, 1927",
      "Code of Civil Procedure, 1908",
    ],
    keywords: [
      "foreign award enforcement India",
      "New York Convention India",
      "Part II Arbitration Act",
      "Section 48 grounds refusal",
      "enforcing SIAC award India",
      "enforcing ICC award India",
      "foreign arbitral award High Court",
      "convention award India",
      "non convention award India",
      "public policy India arbitration",
    ],
    sections: [
      {
        heading: "The legal framework",
        paragraphs: [
          "India is a signatory to both the New York Convention 1958 and the Geneva Convention 1927. Enforcement is governed by Part II of the Arbitration and Conciliation Act, 1996 — Chapter I (Sections 44–52) for New York Convention awards, Chapter II (Sections 53–60) for Geneva Convention awards. The New York Convention covers awards from countries gazetted by the Central Government as Convention countries; that gazetted list determines whether an award qualifies for the simpler enforcement route.",
          "An award from a non-Convention country is not enforceable under Part II. The award holder must file a fresh suit on the award before an Indian court, which is significantly more complex and time-consuming. Choice of arbitral seat therefore matters: Singapore, the UK, Hong Kong, France, the US — all New York Convention countries — yield enforceable Indian awards. Some smaller jurisdictions do not.",
        ],
      },
      {
        heading: "Court jurisdiction",
        paragraphs: [
          "Enforcement petitions are filed before the High Court — Section 47 mandates this. The Bharat Aluminium Co. v. Kaiser Aluminium Technical Service (2012) Constitution Bench clarified the territorial jurisdiction: the High Court in whose territorial jurisdiction the award debtor's assets are located. Where multiple assets are spread across multiple jurisdictions, the petition can be filed in any High Court with jurisdiction over any of those assets.",
          "For Delhi-headquartered debtors with assets across India, the Delhi High Court is usually the first port of call. For Mumbai-headquartered debtors, the Bombay High Court. The petition is filed on the Original Side of the High Court (where the High Court has Original Side jurisdiction) or as a Commercial Petition under the Commercial Courts Act, 2015.",
        ],
      },
      {
        heading: "Documents required",
        paragraphs: [
          "Section 47 prescribes the document list. The award holder must produce: (a) the original award or a duly authenticated copy, (b) the original arbitration agreement or a duly authenticated copy, and (c) evidence necessary to prove that the award is a foreign award. If the award or agreement is in a language other than English, certified translations are required. Authentication is typically done by the consular officer in the seat country.",
          "Practical tip: the certified translation step is the single most common procedural delay. Get it done in parallel with award delivery rather than waiting until the enforcement petition is drafted.",
        ],
      },
      {
        heading: "Grounds for refusal — Section 48",
        paragraphs: [
          "Section 48 lists narrow grounds on which enforcement may be refused. They mirror Article V of the New York Convention: incapacity of a party, invalidity of the arbitration agreement, lack of proper notice, the award exceeding the scope of submission, irregularity in tribunal composition or procedure, the award not yet binding or being set aside at the seat, the subject matter not being arbitrable, and enforcement being contrary to the public policy of India.",
          "The public policy ground is the most litigated. Renusagar Power Co. Ltd. v. General Electric Co. (1994) defined it narrowly as 'fundamental policy of Indian law, the interests of India, or justice or morality.' The 2015 amendments narrowed it further: the court cannot review the merits of the dispute. The Supreme Court in Vijay Karia v. Prysmian Cavi (2020) confirmed that enforcement courts should not refuse on grounds of mere irregularity or even erroneous application of foreign law — only on the Section 48 grounds, narrowly construed.",
        ],
      },
      {
        heading: "Typical timelines",
        paragraphs: [
          "Where the award debtor does not contest, enforcement can be obtained in 4 to 6 months. Where Section 48 grounds are raised, 12 to 24 months is more realistic. Onward appeal to the Division Bench under Section 50, and then to the Supreme Court, can add another 6 to 18 months — though appeals against orders allowing enforcement are limited.",
          "Once the enforcement court is satisfied that none of the Section 48 grounds are made out, the award is deemed to be a decree of that court under Section 49. The award holder can then proceed to execution under Order XXI of the Code of Civil Procedure, 1908 — attachment of assets, garnishee orders against bank accounts, and sale.",
        ],
      },
      {
        heading: "Practical strategy for award holders",
        paragraphs: [
          "Three tactical points. First, file enforcement promptly — the three-year limitation under Article 137 of the Limitation Act, 1963 runs from the date the right to apply accrues, typically the date the award became binding. Second, identify and pre-empt asset dissipation; consider parallel Section 9 interim applications under Part I (per the Section 2(2) proviso) to freeze identified Indian assets while enforcement proceeds. Third, anticipate the public-policy challenge — front-load the petition with arguments addressing potential Section 48(2) objections.",
        ],
      },
    ],
    faqs: [
      {
        question: "How are foreign arbitral awards enforced in India?",
        answer:
          "Foreign arbitral awards from New York Convention countries are enforced under Part II Chapter I (Sections 44–52) of the Arbitration and Conciliation Act, 1996. The award holder files an enforcement petition before the High Court having territorial jurisdiction over the award debtor's assets, supported by the original award, the arbitration agreement, and certified translations where required. On satisfaction that none of the Section 48 grounds are made out, the High Court deems the award a decree under Section 49 and the award is executable under the Code of Civil Procedure, 1908.",
      },
      {
        question: "Which countries' awards qualify as foreign awards in India?",
        answer:
          "An award qualifies as a New York Convention foreign award only if it is made in a country that the Central Government of India has notified in the Official Gazette as a Convention country. Most major arbitral seats — Singapore, the UK, Hong Kong, France, the United States, Switzerland, Sweden — are notified. Awards from non-notified countries cannot be enforced under Part II and must instead be enforced by way of a separate suit on the award.",
      },
      {
        question: "Can an Indian court review the merits of a foreign award?",
        answer:
          "No. Section 48 of the Arbitration and Conciliation Act, 1996 lists narrow grounds for refusal of enforcement — none of which permit a merits review. The Supreme Court of India confirmed in Vijay Karia v. Prysmian Cavi (2020) that enforcement courts cannot refuse a foreign award on grounds of mere irregularity or erroneous application of foreign law. The public-policy ground under Section 48(2)(b) is narrowly construed to mean fundamental policy of Indian law, the interests of India, or justice or morality.",
      },
      {
        question: "How long does foreign award enforcement take in India?",
        answer:
          "Where the award debtor does not contest, enforcement can be obtained in 4 to 6 months. Where Section 48 grounds are raised by the debtor, the typical timeline extends to 12–24 months at the High Court level. Onward appeals to the Division Bench (Section 50) and the Supreme Court can extend the timeline by 6–18 months further.",
      },
    ],
  },
  {
    slug: "diac-vs-mcia-choosing-arbitral-institution-india",
    title: "DIAC vs MCIA vs IAMC: Choosing an Arbitral Institution for India-Seated Arbitration",
    subtitle:
      "How to choose between the Delhi International Arbitration Centre, the Mumbai Centre for International Arbitration, and the IAMC Hyderabad for your commercial dispute.",
    metaDescription:
      "Comparative guide to India's leading arbitral institutions — DIAC (Delhi), MCIA (Mumbai), and IAMC (Hyderabad). Fees, panel, emergency arbitration, expedited procedure, and how to choose between them.",
    category: "Arbitration & ADR",
    authorName: "Dr. Ravikant Bhardwaj",
    authorTitle: "Senior Advocate & Partner",
    datePublished: "2026-03-22",
    dateModified: "2026-04-30",
    readingTime: 7,
    tldr:
      "India's three leading domestic arbitral institutions — the Delhi International Arbitration Centre (DIAC) at the Delhi High Court, the Mumbai Centre for International Arbitration (MCIA), and the International Arbitration & Mediation Centre (IAMC) Hyderabad — each have distinct fee structures, panels, and procedural innovations. DIAC is the natural choice for North Indian commercial disputes; MCIA for Mumbai-headquartered disputes and international commercial arbitration; IAMC is the fastest-growing newcomer with a strong technology focus. All three offer emergency arbitration and expedited procedure.",
    relatedActs: [
      "Arbitration and Conciliation Act, 1996",
      "Arbitration and Conciliation (Amendment) Act, 2015",
      "Arbitration and Conciliation (Amendment) Act, 2019",
    ],
    keywords: [
      "DIAC arbitration rules",
      "MCIA arbitration rules",
      "IAMC Hyderabad",
      "Indian arbitral institutions",
      "institutional arbitration India",
      "DIAC vs MCIA fees",
      "Delhi International Arbitration Centre",
      "Mumbai Centre for International Arbitration",
      "expedited arbitration India",
      "emergency arbitrator India institution",
    ],
    sections: [
      {
        heading: "Why institutional matters in India today",
        paragraphs: [
          "Ad-hoc arbitration — where the parties manage the tribunal directly without an institution — still dominates Indian arbitration by volume. But the cost of ad-hoc proceedings (Fourth Schedule arbitrator fees, party-managed logistics, ad-hoc procedural rulings) has been catching up with institutional fees, and the institutional route now offers material advantages: experienced case managers, ready-to-use procedural rules, emergency arbitrator provisions, and a clearer fee schedule.",
          "Three institutions dominate domestic seat-of-India arbitration: DIAC, MCIA, and IAMC.",
        ],
      },
      {
        heading: "DIAC — Delhi International Arbitration Centre",
        paragraphs: [
          "DIAC sits on the premises of the Delhi High Court. It is the natural institutional choice for disputes with a Delhi nexus, parties headquartered in North India, and matters that may require Section 9 court support from the Delhi High Court. The DIAC Rules (2023) cover institutional arbitration end-to-end, with provisions for emergency arbitrator, expedited procedure (for claims up to Rs. 3 crore), and an experienced empanelled-arbitrator pool drawn from former judges of the Supreme Court, the Delhi High Court, and senior advocates.",
          "DIAC's fee schedule is among the most economical for India-seated commercial disputes in the Rs. 1 crore – Rs. 50 crore band. For larger international commercial arbitration, MCIA's fee schedule is often comparable.",
        ],
      },
      {
        heading: "MCIA — Mumbai Centre for International Arbitration",
        paragraphs: [
          "MCIA was set up in 2016 as a private-sector-led international arbitration centre and quickly built a reputation for international commercial arbitration. The MCIA Rules (2017) draw heavily on the SIAC and ICC models — joinder, consolidation, emergency arbitrator, expedited procedure for claims up to Rs. 2 crore, and a strong administered-case process.",
          "MCIA is the natural choice for Mumbai-headquartered parties and for international commercial arbitration involving Indian parties where Mumbai is acceptable as a seat. Its panel is international and the case managers are experienced in cross-border disputes.",
        ],
      },
      {
        heading: "IAMC — International Arbitration & Mediation Centre, Hyderabad",
        paragraphs: [
          "IAMC was inaugurated in 2021 with strong backing from the Telangana State Government, the Indian Supreme Court Bar, and major Indian corporates. Its rules — IAMC Arbitration Rules 2023 — are modern, with emphasis on expedited procedure, online hearings, and technology-mediated case management. IAMC has positioned itself as the institution of choice for technology, IP, and Telangana-based commercial disputes.",
          "Of the three, IAMC has the most aggressive digital-first orientation: integrated e-filing, video hearings as default, AI-assisted transcripts. For technology-sector disputes, IAMC's positioning is increasingly compelling.",
        ],
      },
      {
        heading: "How to choose",
        paragraphs: [
          "Three questions usually settle the choice. First, where are the parties headquartered and where will court support (Section 9 / Section 27) be sought? If North India, DIAC. If Mumbai/West India, MCIA. If South India or technology-heavy, IAMC. Second, is the dispute international or domestic? International commercial arbitration weighs in favour of MCIA or, for larger matters, foreign institutions like SIAC or ICC. Third, what is the dispute value? For claims under Rs. 3 crore, all three have an expedited-procedure pathway; the choice on cost grounds is finer.",
          "At Judicium Arbitration, the default recommendation for North-India-headquartered disputes is DIAC, with MCIA selected where the contract has a Mumbai nexus and IAMC where the dispute is technology-sector or one party prefers the digital-first administered process.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which is the best arbitral institution in India?",
        answer:
          "There is no single best — the right choice depends on geography, dispute type, and value. For North Indian commercial disputes, the Delhi International Arbitration Centre (DIAC) is the natural choice given its location at the Delhi High Court. For Mumbai-headquartered and international commercial arbitration, MCIA (Mumbai Centre for International Arbitration) is established. For technology-sector and South Indian disputes, the IAMC Hyderabad offers a strong digital-first administered process.",
      },
      {
        question: "Do Indian arbitral institutions offer emergency arbitration?",
        answer:
          "Yes. DIAC, MCIA and IAMC all include emergency arbitrator provisions in their rules, allowing a party to obtain urgent interim relief before the main tribunal is constituted. The Supreme Court of India confirmed the enforceability of emergency arbitrator orders in India-seated proceedings in Amazon.com NV Investment Holdings LLC v. Future Retail Ltd. (2021).",
      },
      {
        question: "What is the expedited procedure under DIAC/MCIA/IAMC rules?",
        answer:
          "All three institutions offer an expedited procedure for smaller claims — typically up to Rs. 3 crore (DIAC, IAMC) or Rs. 2 crore (MCIA). Under expedited procedure, the tribunal is normally a sole arbitrator, the procedure is documents-only or limited-hearing, and the award is rendered within shortened timelines (typically 6 months from constitution of the tribunal).",
      },
      {
        question: "How are arbitrator fees fixed in institutional arbitration in India?",
        answer:
          "Each institution publishes its own fee schedule — DIAC, MCIA and IAMC all have detailed schedules graduated by claim value. The fees are payable to the institution which in turn remits them to the arbitrator(s). This is distinct from ad-hoc arbitration, where arbitrator fees are governed by the Fourth Schedule of the Arbitration and Conciliation Act, 1996.",
      },
    ],
  },
  {
    slug: "rera-arbitration-builder-buyer-disputes-india",
    title: "RERA and Arbitration: Resolving Builder-Buyer Disputes in India in 2026",
    subtitle:
      "Why the Supreme Court has held builder-buyer disputes non-arbitrable, and what that means for resolution strategy.",
    metaDescription:
      "How the Real Estate (Regulation and Development) Act, 2016 (RERA) interacts with arbitration in India. Supreme Court position on non-arbitrability of builder-buyer disputes, RERA vs consumer forums, and strategic dispute pathway choice.",
    category: "Real Estate",
    authorName: "Advocate Suryakant Bhardwaj",
    authorTitle: "Senior Advocate & Partner",
    datePublished: "2026-04-05",
    dateModified: "2026-05-01",
    readingTime: 8,
    tldr:
      "Following Booz Allen Hamilton Inc. v. SBI Home Finance Ltd. (2011) and a subsequent line of cases including Vidya Drolia (2020), the Supreme Court of India has held that disputes between allottees and promoters under the Real Estate (Regulation and Development) Act, 2016 (RERA) are non-arbitrable. The remedy for an allottee lies before the RERA Authority and, on appeal, the Real Estate Appellate Tribunal (REAT). Where the dispute is between sophisticated B2B parties — for instance, between a developer and a JV partner or between a developer and a contractor — arbitration remains the primary mode of resolution.",
    relatedActs: [
      "Real Estate (Regulation and Development) Act, 2016",
      "Arbitration and Conciliation Act, 1996",
      "Consumer Protection Act, 2019",
      "Specific Relief Act, 1963",
    ],
    keywords: [
      "RERA arbitration",
      "builder buyer dispute India",
      "RERA non arbitrable",
      "RERA vs consumer forum",
      "Real Estate Appellate Tribunal",
      "developer JV arbitration",
      "UP RERA",
      "Haryana RERA",
      "real estate arbitration India",
      "homebuyer remedies India",
    ],
    sections: [
      {
        heading: "The pre-RERA landscape",
        paragraphs: [
          "Before the Real Estate (Regulation and Development) Act, 2016 came into force, builder-buyer agreements typically carried an arbitration clause, and disputes between allottees and promoters were referred to arbitration. The arbitration process — slow, expensive relative to claim values, and often involving builder-friendly tribunals chosen unilaterally — was a poor remedy for individual homebuyers.",
          "RERA changed the architecture. It established statutory Real Estate Regulatory Authorities in every state, with mandatory promoter registration, escrow requirements, and a defined adjudication pathway for allottees. RERA also created Real Estate Appellate Tribunals (REAT) for appeals.",
        ],
      },
      {
        heading: "The non-arbitrability ruling",
        paragraphs: [
          "The Supreme Court, in a series of cases from Booz Allen onwards, has classified disputes of rights in rem and statutorily-conferred rights as non-arbitrable. Builder-buyer disputes under RERA fall in the latter category — RERA confers statutory rights on allottees (registration entitlement, refund with statutory interest, possession with statutory interest, compensation) that an arbitral tribunal cannot adjudicate.",
          "In Vidya Drolia v. Durga Trading Corporation (2020), the Court refined the non-arbitrability test: where a statute confers rights and an exclusive remedy with a statutory forum, those rights are non-arbitrable. RERA fits this template — Section 79 confers jurisdiction on the RERA Authority and REAT, and Section 88 makes RERA in addition to and not in derogation of any other law for the time being in force.",
        ],
      },
      {
        heading: "What an allottee can still pursue",
        paragraphs: [
          "An allottee has three statutory routes: (a) the RERA Authority for registration-based complaints, refund with statutory interest, possession with statutory interest, and adjudicating officer complaints for compensation; (b) the National/State Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019, with concurrent jurisdiction in many cases; (c) the High Court under writ jurisdiction in exceptional circumstances.",
          "Arbitration is no longer available as a default route for allottee-promoter disputes, even where the builder-buyer agreement contains an arbitration clause. The Supreme Court treats such clauses as inoperative against allottees claiming RERA-conferred rights.",
        ],
      },
      {
        heading: "Where arbitration is still relevant in real estate",
        paragraphs: [
          "B2B disputes in the real-estate sector remain arbitrable. Examples: a joint development agreement between a landowner and a developer; an EPC contract between a developer and a contractor; a master franchise agreement between a hotel operator and a developer; a finance agreement between a developer and an investor. All these are commercial disputes between sophisticated parties and remain firmly within the arbitration zone.",
          "The non-arbitrability rule applies specifically to the allottee-promoter relationship and the statutory rights conferred on allottees under RERA. It does not encroach on the broader B2B commercial fabric of the real-estate industry.",
        ],
      },
      {
        heading: "Practical guidance",
        paragraphs: [
          "For allottees: file directly before the RERA Authority of the project's state — UP RERA, Haryana RERA, Maharashtra RERA, etc. Where the developer is also covered by a Consumer Protection Act complaint, the allottee may file in either forum but cannot litigate the same dispute in both. Where the dispute concerns RERA-registration violations or refund/possession with statutory interest, RERA Authority is the natural fit.",
          "For developers in B2B disputes: the arbitration clause in your JV, EPC, or franchise agreement remains enforceable. Standard institutional rules (DIAC, MCIA) work well for substantial real-estate JV disputes.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a builder-buyer dispute be referred to arbitration in India?",
        answer:
          "No. The Supreme Court of India has held that disputes between allottees and promoters under the Real Estate (Regulation and Development) Act, 2016 are non-arbitrable. The allottee's statutory rights — refund with statutory interest, possession with statutory interest, compensation — are conferred by RERA and are to be adjudicated by the RERA Authority and, on appeal, the Real Estate Appellate Tribunal (REAT). An arbitration clause in the builder-buyer agreement is inoperative against an allottee asserting RERA-conferred rights.",
      },
      {
        question: "Where can a homebuyer file a complaint against a builder in India?",
        answer:
          "A homebuyer can file before the state RERA Authority for the project's state (e.g., UP RERA for Noida, Haryana RERA for Gurgaon, Maharashtra RERA for Mumbai). Alternatively, the homebuyer may file before the National or State Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019. The homebuyer cannot litigate the same dispute in both forums simultaneously.",
      },
      {
        question: "Are arbitration clauses still useful in real-estate contracts in India?",
        answer:
          "Yes — for B2B disputes. Arbitration clauses in joint development agreements, EPC contracts, real-estate finance agreements, franchise agreements, and other commercial contracts between sophisticated real-estate parties remain fully enforceable. The non-arbitrability rule is limited to allottee-promoter disputes asserting RERA-conferred statutory rights.",
      },
      {
        question: "Can the same dispute go before RERA and a consumer forum?",
        answer:
          "Not simultaneously. While both forums have concurrent jurisdiction over many builder-buyer disputes (per Pioneer Urban Land & Infrastructure Ltd. v. Union of India, 2019), an allottee must elect one. Filing in both for the same cause of action will lead to dismissal of one on grounds of multiplicity.",
      },
    ],
  },
  {
    slug: "emergency-arbitrator-india-amazon-future-retail",
    title: "Emergency Arbitrator Orders in India after Amazon v. Future Retail",
    subtitle:
      "How the Supreme Court's 2021 ruling made emergency arbitrator awards enforceable in India-seated arbitration — and what it means for urgent interim relief.",
    metaDescription:
      "Are emergency arbitrator orders enforceable in India? Analysis of Amazon.com NV Investment Holdings v. Future Retail (2021), the Section 17 route, and how to obtain urgent pre-tribunal interim relief through institutional emergency arbitration.",
    category: "Arbitration & ADR",
    authorName: "Dr. Ravikant Bhardwaj",
    authorTitle: "Senior Advocate & Partner",
    datePublished: "2026-04-18",
    dateModified: "2026-05-15",
    readingTime: 8,
    tldr:
      "In Amazon.com NV Investment Holdings LLC v. Future Retail Ltd. (2021), the Supreme Court of India held that an emergency arbitrator's order in an India-seated arbitration is an order under Section 17(1) of the Arbitration and Conciliation Act, 1996, and is enforceable under Section 17(2) as if it were an order of the court. This made emergency arbitration a fast, binding route to urgent interim relief before the main tribunal is constituted — for India-seated proceedings under institutional rules (DIAC, MCIA, SIAC, ICC, LCIA). For foreign-seated emergency awards, enforcement is less direct and typically routed through a fresh Section 9 application.",
    relatedActs: [
      "Arbitration and Conciliation Act, 1996",
      "Arbitration and Conciliation (Amendment) Act, 2015",
      "Code of Civil Procedure, 1908",
    ],
    keywords: [
      "emergency arbitrator India",
      "Amazon Future Retail arbitration",
      "emergency arbitration enforceability",
      "Section 17 emergency arbitrator",
      "pre tribunal interim relief India",
      "SIAC emergency arbitrator India",
      "DIAC emergency arbitrator",
      "urgent interim relief arbitration",
      "interim measures before tribunal",
    ],
    sections: [
      {
        heading: "The problem emergency arbitration solves",
        paragraphs: [
          "Arbitral tribunals take time to constitute — appointment, challenges, and confirmation can run weeks or months. But commercial emergencies do not wait. A counterparty may be about to transfer the disputed shares, dissipate assets, or breach a standstill the day after a dispute crystallises. Section 9 of the Arbitration and Conciliation Act, 1996 lets a party go to court for interim relief, but court lists are congested and the relief may be needed in days.",
          "Emergency arbitration fills this gap. Under the rules of every major institution — DIAC, MCIA, SIAC, ICC, LCIA, HKIAC — a party can apply for the appointment of an emergency arbitrator who can grant urgent interim relief within days, pending constitution of the full tribunal. The open question in India was always enforceability: is an emergency arbitrator's order worth anything in an Indian court?",
        ],
      },
      {
        heading: "What Amazon v. Future Retail decided",
        paragraphs: [
          "The dispute arose from Amazon's investment in a Future Group entity and Future Retail's subsequent asset-sale transaction with Reliance. Amazon obtained an emergency arbitrator's award from a SIAC-administered, India-seated arbitration restraining the transaction. Future Retail argued the emergency award was a nullity in India — that the Arbitration and Conciliation Act, 1996 did not recognise the concept of an emergency arbitrator.",
          "The Supreme Court of India, in its August 2021 judgment, rejected that argument. It held that an emergency arbitrator is an 'arbitral tribunal' within the meaning of the Act for an India-seated arbitration where the parties have adopted institutional rules providing for emergency arbitration. Consequently, the emergency arbitrator's order is an order under Section 17(1), and is enforceable under Section 17(2) in the same manner as an order of the court.",
        ],
      },
      {
        heading: "Why the Section 17 route matters",
        paragraphs: [
          "The significance is in the enforcement mechanism. Before Amazon, even parties who obtained emergency awards had no clean path to enforce them in India — they typically had to re-litigate the relief through a fresh Section 9 application before a court, losing the speed advantage. After Amazon, an emergency arbitrator's order in an India-seated arbitration plugs directly into Section 17(2), which deems it an order of the court enforceable under the Code of Civil Procedure, 1908.",
          "In practice this means a party can obtain binding, enforceable interim relief within 7–14 days of a dispute crystallising — without waiting for the main tribunal and without a separate court application — provided the seat is in India and the institutional rules provide for emergency arbitration.",
        ],
      },
      {
        heading: "The limits — foreign-seated emergency awards",
        paragraphs: [
          "Amazon was decided for an India-seated arbitration. For a foreign-seated arbitration (say, a Singapore-seated SIAC proceeding), an emergency arbitrator's order does not slot into Section 17, because Section 17 sits in Part I, which applies to India-seated arbitrations. Part II (foreign awards) deals with final awards, not interim emergency orders, and the New York Convention does not cover interim measures.",
          "For foreign-seated emergency relief affecting Indian assets, the practical route remains a Section 9 application in an Indian court (available to foreign-seated international commercial arbitrations under the proviso to Section 2(2), unless excluded by the parties). The emergency award is persuasive but not directly enforceable; the Indian court forms its own view on interim relief.",
        ],
      },
      {
        heading: "Practical guidance",
        paragraphs: [
          "When drafting arbitration clauses for India-nexus contracts where urgent relief may be needed, two choices flow from Amazon. First, seat the arbitration in India and adopt institutional rules with robust emergency-arbitrator provisions (DIAC or MCIA for domestic, SIAC for international) — this gives you the directly enforceable Section 17 route. Second, where a foreign seat is commercially necessary, preserve the Section 9 option by not excluding the Section 2(2) proviso, so Indian courts can still protect Indian assets.",
          "At Judicium Arbitration, on a fresh dispute where asset risk is acute, we assess in the first 24 hours whether the clause supports emergency arbitration and, if seated in India, file the emergency application in parallel with the Section 21 notice — capturing both speed and enforceability.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are emergency arbitrator orders enforceable in India?",
        answer:
          "Yes, for India-seated arbitrations. In Amazon.com NV Investment Holdings LLC v. Future Retail Ltd. (2021), the Supreme Court of India held that an emergency arbitrator's order in an India-seated arbitration under institutional rules is an order under Section 17(1) of the Arbitration and Conciliation Act, 1996, and is enforceable under Section 17(2) as if it were an order of the court. For foreign-seated arbitrations, emergency awards are not directly enforceable and relief is typically sought through a fresh Section 9 application.",
      },
      {
        question: "How fast can emergency arbitration deliver interim relief?",
        answer:
          "Most institutional rules require an emergency arbitrator to be appointed within 1–3 days of the application and to issue a decision within roughly 14 days. In urgent cases, interim relief can be obtained within a week — significantly faster than waiting for the full tribunal to be constituted.",
      },
      {
        question: "Which institutions offer emergency arbitration for Indian disputes?",
        answer:
          "DIAC (Delhi International Arbitration Centre) and MCIA (Mumbai Centre for International Arbitration) offer emergency-arbitrator provisions for India-seated arbitration. For international commercial arbitration, SIAC (Singapore), ICC (Paris), LCIA (London), and HKIAC (Hong Kong) all provide emergency arbitration — though enforceability in India depends on whether the seat is in India.",
      },
      {
        question: "Is emergency arbitration an alternative to a Section 9 court application?",
        answer:
          "For India-seated institutional arbitrations, yes — emergency arbitration is now a viable, directly enforceable alternative to a Section 9 application following Amazon v. Future Retail. For foreign-seated arbitrations, a Section 9 application to an Indian court remains the practical route to protect Indian assets, since foreign emergency awards are not directly enforceable under the Act.",
      },
    ],
  },
  {
    slug: "section-11-arbitrator-appointment-in-re-interplay",
    title: "Section 11 Arbitrator Appointment after In Re Interplay (2023)",
    subtitle:
      "What the seven-judge bench changed about the court's role at the arbitrator-appointment stage — and the narrowed scope of judicial scrutiny under Section 11(6A).",
    metaDescription:
      "How Indian courts approach Section 11 arbitrator appointment after the Supreme Court's seven-judge ruling In Re Interplay (2023). Scope of Section 11(6A), the stamping question, kompetenz-kompetenz, and the 'eye of the needle' standard.",
    category: "Arbitration & ADR",
    authorName: "Dr. Ravikant Bhardwaj",
    authorTitle: "Senior Advocate & Partner",
    datePublished: "2026-05-06",
    dateModified: "2026-05-16",
    readingTime: 9,
    tldr:
      "Section 11 of the Arbitration and Conciliation Act, 1996 lets a party apply to the court to appoint an arbitrator where the agreed mechanism fails. After the Supreme Court's seven-judge Constitution Bench in In Re Interplay between Arbitration Agreements and the Indian Stamp Act (December 2023), the court's role at the Section 11 stage is confined to a prima facie examination of the existence of an arbitration agreement — not its validity, stamping, or the merits. In Re Interplay also overruled the stamping line of NN Global to the extent it required impounding at the Section 11 stage: unstamped instruments are now an inadmissibility (curable) issue for the tribunal, not a Section 11 bar. The guiding standard is referral unless the claim is manifestly non-arbitrable.",
    relatedActs: [
      "Arbitration and Conciliation Act, 1996",
      "Arbitration and Conciliation (Amendment) Act, 2015",
      "Indian Stamp Act, 1899",
    ],
    keywords: [
      "Section 11 arbitration India",
      "In Re Interplay 2023",
      "arbitrator appointment India",
      "Section 11(6A) scope",
      "kompetenz kompetenz India",
      "prima facie existence arbitration agreement",
      "stamping arbitration In Re Interplay",
      "eye of the needle arbitration",
      "judicial scrutiny Section 11",
    ],
    sections: [
      {
        heading: "What Section 11 does",
        paragraphs: [
          "Where parties have an arbitration agreement but cannot agree on the arbitrator — or the contractually agreed appointment mechanism fails — Section 11 of the Arbitration and Conciliation Act, 1996 lets a party apply to the Supreme Court (for international commercial arbitration) or the High Court (for domestic arbitration) to appoint the arbitrator. It is the gateway through which most contested arbitrations actually start.",
          "The recurring question has been: how much should the court examine at this gateway? If the court probes too deeply — validity, stamping, limitation, merits — it defeats the speed and party-autonomy rationale of arbitration. If it probes too little, plainly hopeless or non-arbitrable claims get referred and waste everyone's time.",
        ],
      },
      {
        heading: "The 2015 amendment and Section 11(6A)",
        paragraphs: [
          "The 2015 amendment inserted Section 11(6A), directing the court to confine its examination at the appointment stage to the 'existence of an arbitration agreement'. The intent was to narrow judicial scrutiny. But a line of cases — culminating in the stamping debate in NN Global — re-expanded it, holding that an unstamped instrument was non-existent in law and so the court had to impound it before appointing an arbitrator.",
          "That created a paradox: a provision meant to narrow scrutiny was being used to inject a full stamping enquiry into the Section 11 stage, delaying appointments by months while the cure process ran.",
        ],
      },
      {
        heading: "What In Re Interplay (2023) settled",
        paragraphs: [
          "A seven-judge Constitution Bench, In Re Interplay between Arbitration Agreements under the Arbitration and Conciliation Act, 1996 and the Indian Stamp Act, 1899 (December 2023), resolved the tension. It held that non-stamping or insufficient stamping of the underlying instrument does NOT render the arbitration agreement void or non-existent — it is a curable defect of inadmissibility in evidence, to be addressed by the arbitral tribunal, not by the court at the Section 11 stage.",
          "The Bench reaffirmed the kompetenz-kompetenz principle (Section 16): the tribunal is the preferred forum to rule on its own jurisdiction, including stamping and validity. The Section 11 court's role is limited to a prima facie examination of whether an arbitration agreement exists. To the extent NN Global had held otherwise on the stamping question at the Section 11 stage, it was overruled.",
        ],
      },
      {
        heading: "The 'eye of the needle' standard",
        paragraphs: [
          "Reading In Re Interplay together with Vidya Drolia (2020) and NTPC v. SPML (2023), the operative standard at the Section 11 stage is a narrow one often described as the 'eye of the needle'. The court asks two questions: does an arbitration agreement prima facie exist, and is the dispute manifestly and ex-facie non-arbitrable or the claim a deadwood (e.g., plainly time-barred, or settled with a no-dues certificate)? If an arbitration agreement exists and the claim is not manifestly non-arbitrable, the court refers — leaving validity, stamping, limitation nuances, and merits to the tribunal.",
          "This is a deliberately referral-friendly posture. The threshold for refusing reference is high; doubts are resolved in favour of referral and in favour of the tribunal deciding its own jurisdiction.",
        ],
      },
      {
        heading: "Practical implications for applicants and respondents",
        paragraphs: [
          "For applicants: a Section 11 application is now faster and harder to derail. A respondent's stamping objection no longer stalls the appointment — the court appoints, and stamping is sorted before the tribunal. Front-load the application with a clear demonstration that an arbitration agreement exists and the claim is live.",
          "For respondents: the place to raise validity, stamping, limitation, and arbitrability is now squarely before the tribunal under Section 16, not at the Section 11 stage — unless the non-arbitrability or deadwood nature of the claim is manifest on a bare reading. Investing heavily in a Section 11 stamping objection is, post-In Re Interplay, usually a losing strategy.",
        ],
      },
      {
        heading: "How this fits the broader pro-arbitration trajectory",
        paragraphs: [
          "In Re Interplay is part of a clear judicial trajectory — Vidya Drolia, NTPC v. SPML, Amazon v. Future Retail — toward minimal judicial interference at the front end of arbitration, robust kompetenz-kompetenz, and enforceability of interim and emergency relief. For commercial parties, the takeaway is that India-seated arbitration has become materially more predictable at the gateway: appointments are faster, and the tribunal — not the court — is the forum for jurisdictional and validity disputes.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does a court examine at the Section 11 arbitrator-appointment stage?",
        answer:
          "After In Re Interplay (2023), the court's examination at the Section 11 stage is confined to a prima facie determination of whether an arbitration agreement exists. The court does not examine the validity of the agreement, stamping of the instrument, limitation nuances, or the merits — these are left to the arbitral tribunal under the kompetenz-kompetenz principle in Section 16 of the Arbitration and Conciliation Act, 1996.",
      },
      {
        question: "Does an unstamped agreement still block arbitrator appointment after In Re Interplay?",
        answer:
          "No. The seven-judge bench In Re Interplay (December 2023) held that non-stamping or insufficient stamping is a curable defect of inadmissibility — not a factor that makes the arbitration agreement void or non-existent. The Section 11 court appoints the arbitrator, and the stamping issue is addressed by the tribunal. This overruled the part of NN Global that required impounding at the Section 11 stage.",
      },
      {
        question: "What is the 'eye of the needle' standard in Section 11 applications?",
        answer:
          "It describes the narrow scope of judicial scrutiny at the arbitrator-appointment stage: the court refers the dispute to arbitration unless the arbitration agreement does not prima facie exist, or the claim is manifestly and ex-facie non-arbitrable or plainly deadwood (e.g., obviously time-barred or fully settled). Doubts are resolved in favour of referral and in favour of the tribunal deciding its own jurisdiction.",
      },
      {
        question: "Where should a respondent raise validity and jurisdiction objections now?",
        answer:
          "Before the arbitral tribunal under Section 16 of the Arbitration and Conciliation Act, 1996, which embodies the kompetenz-kompetenz principle. After In Re Interplay, objections on validity, stamping, limitation, and arbitrability generally cannot be used to defeat a Section 11 application unless the non-arbitrability is manifest on a bare reading — they are matters for the tribunal.",
      },
    ],
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightsData.find((a) => a.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  return insightsData.map((a) => a.slug);
}

export function getInsightsByCategory(
  category: InsightCategory,
  count = 3
): InsightArticle[] {
  return insightsData
    .filter((a) => a.category === category)
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
    .slice(0, count);
}

export function getRelatedInsights(currentSlug: string, count = 3): InsightArticle[] {
  const current = getInsightBySlug(currentSlug);
  if (!current) return insightsData.slice(0, count);
  const sameCategory = insightsData.filter(
    (a) => a.slug !== currentSlug && a.category === current.category
  );
  const others = insightsData.filter(
    (a) => a.slug !== currentSlug && a.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
