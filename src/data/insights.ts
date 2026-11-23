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

export interface InsightComparisonTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface InsightSection {
  heading: string;
  paragraphs: string[];
  // Optional comparison table rendered after the paragraphs. Comparison tables
  // are disproportionately lifted into AI Overviews / answer-engine results, so
  // they are a high-value AEO surface for "X vs Y" topics.
  table?: InsightComparisonTable;
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
    authorName: "Team Judicium Arbitration",
    authorTitle: "Arbitration & ADR Practice",
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
    authorName: "Team Judicium Arbitration",
    authorTitle: "Arbitration & ADR Practice",
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
    authorName: "Team Judicium Arbitration",
    authorTitle: "Arbitration & ADR Practice",
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
    authorName: "Team Judicium Arbitration",
    authorTitle: "Arbitration & ADR Practice",
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
    authorName: "Team Judicium Arbitration",
    authorTitle: "Arbitration & ADR Practice",
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
    authorName: "Team Judicium Arbitration",
    authorTitle: "Arbitration & ADR Practice",
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
    authorName: "Team Judicium Arbitration",
    authorTitle: "Arbitration & ADR Practice",
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
  {
    "slug": "arbitration-clause-drafting-checklist-india",
    "title": "Drafting an Arbitration Clause for Indian Contracts: A Practical Checklist",
    "subtitle": "The clauses, choices, and common drafting errors that decide whether your arbitration agreement actually works when a dispute arises.",
    "metaDescription": "Practical checklist for drafting an arbitration clause in Indian contracts under the Arbitration and Conciliation Act, 1996 — seat, venue, number of arbitrators, institution, governing law, and pitfalls.",
    "category": "Arbitration & ADR",
    "authorName": "Team Judicium Arbitration",
    "authorTitle": "Arbitration & ADR Practice",
    "datePublished": "2026-05-15",
    "dateModified": "2026-06-04",
    "readingTime": 9,
    "tldr": "A workable arbitration clause for an Indian contract should specify the seat of arbitration (which fixes the supervisory court and the law governing the arbitration), the venue or hearing location, the number of arbitrators, the appointment mechanism, the language, and the governing law of the contract. Under the Arbitration and Conciliation Act, 1996, a clause that names a clear seat in India, an odd number of arbitrators, and either an institution or a workable appointment route is the most enforceable. Vague, internally contradictory, or one-sided clauses are the leading cause of jurisdictional disputes at the Section 11 stage.",
    "relatedActs": [
      "Arbitration and Conciliation Act, 1996",
      "Arbitration and Conciliation (Amendment) Act, 2015",
      "Indian Contract Act, 1872",
      "Indian Stamp Act, 1899",
      "Code of Civil Procedure, 1908"
    ],
    "keywords": [
      "arbitration clause drafting India",
      "arbitration clause checklist",
      "seat vs venue arbitration India",
      "model arbitration clause India",
      "number of arbitrators clause",
      "governing law arbitration clause",
      "institutional arbitration clause",
      "Section 11 appointment clause",
      "pathological arbitration clause",
      "arbitration agreement Section 7"
    ],
    "sections": [
      {
        "heading": "Why the arbitration clause is the most under-drafted clause in the contract",
        "paragraphs": [
          "The arbitration clause is usually the last clause negotiated and the first one litigated. It sits at the back of the contract as boilerplate, gets copied from an unrelated precedent, and is signed without much thought because, at the deal stage, no one expects a dispute. When the dispute arrives, that copied clause has to carry the entire weight of the parties' dispute-resolution strategy.",
          "A defective clause does not merely inconvenience — it generates a satellite dispute about the dispute. Months can be lost arguing over whether the seat is Delhi or Mumbai, whether there should be one arbitrator or three, or whether the clause even amounts to a binding arbitration agreement at all. Under the Arbitration and Conciliation Act, 1996, an arbitration agreement need only be in writing and show an intention to arbitrate (Section 7), but the difference between a clause that merely survives and one that works smoothly lies in the detail.",
          "This checklist sets out the elements that a well-drafted Indian arbitration clause should address, and the recurring drafting errors that send parties to the Section 11 stage before the real dispute has even begun."
        ]
      },
      {
        "heading": "Seat versus venue — get this right first",
        "paragraphs": [
          "The single most important choice is the seat of arbitration. The seat is the legal home of the arbitration: it determines which courts exercise supervisory jurisdiction (for Section 9 interim relief, Section 11 appointments, Section 34 challenges) and the procedural law that governs the arbitration. The venue, by contrast, is merely the physical place where hearings are held — it carries no jurisdictional consequence on its own.",
          "Indian courts have repeatedly grappled with clauses that confuse the two. The safest practice is to name the seat expressly — for example, 'the seat of arbitration shall be New Delhi' — and, if hearings may be held elsewhere for convenience, to say so separately as 'venue' or 'hearing location'. Where a clause names only a 'place' of arbitration without distinguishing seat from venue, courts are left to infer the seat from the surrounding language, which is exactly the uncertainty good drafting avoids.",
          "For purely domestic contracts between Indian parties, the seat should be a clearly identified Indian city whose High Court is convenient and arbitration-literate. The choice of seat should also align with where interim court support is likely to be sought."
        ]
      },
      {
        "heading": "Number of arbitrators and the appointment mechanism",
        "paragraphs": [
          "Specify an odd number of arbitrators. Section 10 of the Arbitration and Conciliation Act, 1996 requires that the number of arbitrators not be an even number; a clause providing for two arbitrators is defective and will be read down. For most commercial disputes, a sole arbitrator is faster and cheaper; a three-member tribunal suits high-value or technically complex matters where parties value the comfort of party-appointed arbitrators.",
          "Set out a workable appointment mechanism. If the parties cannot agree on the arbitrator and the clause provides no route — or an unworkable one — a party must approach the court under Section 11 to have the arbitrator appointed, which adds time. A clean mechanism either nominates an appointing authority (an arbitral institution, for instance) or provides a clear default, such as appointment by the institution if the parties fail to agree within a stated period.",
          "Avoid clauses that allow one party to unilaterally appoint the sole arbitrator or to control the appointment of the presiding arbitrator. Following the line of authority on independence and impartiality, and the Fifth and Seventh Schedules to the Act, such one-sided appointment clauses are vulnerable to challenge and often unenforceable."
        ]
      },
      {
        "heading": "Institutional versus ad-hoc — and naming the institution correctly",
        "paragraphs": [
          "Decide whether the arbitration will be institutional or ad-hoc, and draft accordingly. Institutional arbitration (administered by a centre such as DIAC, MCIA, or IAMC) brings ready-made rules, case management, a fee schedule, and emergency-arbitrator provisions. Ad-hoc arbitration leaves the parties to run the process themselves, with arbitrator fees governed by the Fourth Schedule to the Act in the absence of agreement.",
          "If you choose an institution, name it precisely and adopt its rules. A clause that refers vaguely to 'arbitration under the rules of the arbitration centre' without naming the institution invites a fight over which body was intended. Use the institution's own model clause as the starting point — these are drafted to dovetail with the institution's rules and reduce ambiguity.",
          "Where the contract is purely domestic and modest in value, a well-drafted ad-hoc clause naming a sole arbitrator and an Indian seat may be entirely adequate. The choice is a cost-and-control trade-off, not a question of validity."
        ]
      },
      {
        "heading": "Governing law, language, scope, and stamping",
        "paragraphs": [
          "Distinguish three different laws that the contract should address: the law governing the substantive contract, the law governing the arbitration agreement, and the procedural law of the seat. For a domestic Indian contract these usually all point to Indian law, but in cross-border contracts they can diverge, and silence breeds disputes. State the governing law of the contract expressly, and specify the language of the arbitration to avoid translation disputes later.",
          "Draft the scope clause broadly. Wording such as 'any dispute, difference or claim arising out of or in connection with this contract, including its existence, validity, breach or termination' captures the widest range of disputes and avoids arguments that a particular claim falls outside the clause. A narrowly worded clause limited to disputes 'under' the contract can exclude tort or pre-contractual claims.",
          "Finally, ensure the underlying contract is properly stamped at execution under the applicable state schedule of the Indian Stamp Act, 1899. While the Supreme Court's seven-judge bench In Re Interplay (2023) held that an unstamped instrument does not render the arbitration agreement void at the appointment stage, stamping remains a statutory obligation and an unstamped instrument can still create curable obstacles in evidence. Treat stamping as a closing condition rather than an afterthought."
        ]
      },
      {
        "heading": "Common pathological clauses to avoid",
        "paragraphs": [
          "Watch for internally contradictory clauses — the classic 'optional' or 'may' clause ('disputes may be referred to arbitration') that fails to create a binding obligation to arbitrate, or a clause that simultaneously confers exclusive jurisdiction on a civil court and refers disputes to arbitration. These hybrid clauses generate threshold disputes about whether the parties agreed to arbitrate at all.",
          "Equally problematic are clauses that name a non-existent institution, set an even number of arbitrators, prescribe an impossible appointment procedure, or reference rules that have since been superseded. Multi-tier clauses (negotiation, then mediation, then arbitration) are useful but must state clear, time-bound pre-conditions; vague escalation language can be used to argue that a pre-condition to arbitration was never satisfied.",
          "The cure for all of these is the same discipline applied at drafting: read the clause as an adversary would, and ask whether every operative term — seat, number, appointment, scope, institution, language — is unambiguous and internally consistent."
        ]
      },
      {
        "heading": "A practical drafting checklist",
        "paragraphs": [
          "Before signing, confirm the clause answers each of the following: Is there a binding agreement to arbitrate (mandatory 'shall', not 'may')? Is the seat clearly named, and the venue separately addressed if different? Is the number of arbitrators odd, and is there a clean appointment mechanism that does not give one party unilateral control? Is the institution (if any) named precisely and its rules adopted?",
          "Continue: Is the governing law of the contract stated, and the language of the arbitration specified? Is the scope broad enough to capture all related disputes? Are any pre-arbitration steps time-bound and clear? Is the contract properly stamped under the applicable state schedule?",
          "At Judicium Arbitration, our standard practice on a transactional brief is to insert the institution's model clause as the base, then tailor seat, number of arbitrators, and language to the deal — and to run a final adversarial read of the clause against this checklist before the contract is executed. The few minutes spent on the clause at signing routinely save months at the dispute stage."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between the seat and the venue of arbitration?",
        "answer": "The seat is the legal home of the arbitration — it determines which courts have supervisory jurisdiction (for interim relief under Section 9, appointment under Section 11, and challenge under Section 34) and the procedural law that governs the arbitration. The venue is merely the physical location where hearings are held and carries no jurisdictional consequence on its own. A well-drafted clause names the seat expressly and, if needed, addresses the venue separately."
      },
      {
        "question": "How many arbitrators should an arbitration clause specify?",
        "answer": "An odd number. Section 10 of the Arbitration and Conciliation Act, 1996 requires that the number of arbitrators not be an even number, so a clause providing for two arbitrators is defective. A sole arbitrator is typically faster and cheaper for ordinary commercial disputes, while a three-member tribunal suits high-value or technically complex matters."
      },
      {
        "question": "Can one party be given the sole right to appoint the arbitrator?",
        "answer": "Generally no. Clauses that allow one party to unilaterally appoint the sole arbitrator or to control the appointment of the presiding arbitrator are vulnerable to challenge on grounds of independence and impartiality, read with the Fifth and Seventh Schedules to the Act. A neutral appointment mechanism — typically appointment by an arbitral institution if the parties fail to agree — is the safer course."
      },
      {
        "question": "Does the contract need to be stamped for the arbitration clause to work?",
        "answer": "Stamping remains a statutory obligation under the applicable state schedule of the Indian Stamp Act, 1899, and should be treated as a closing condition. Following the seven-judge bench In Re Interplay (2023), an unstamped instrument does not render the arbitration agreement void at the appointment stage, but a stamping deficiency can still create curable obstacles in evidence. The disciplined practice is to stamp the contract correctly at execution."
      }
    ]
  },
  {
    "slug": "cost-of-arbitration-in-india",
    "title": "The Cost of Arbitration in India (2026): Fees, Tribunal Costs and Who Pays",
    "subtitle": "A practitioner's breakdown of what arbitration actually costs in India — arbitrator fees, institutional charges, legal costs, and how the tribunal allocates them.",
    "metaDescription": "What does arbitration cost in India in 2026? Arbitrator fees under the Fourth Schedule, institutional charges, legal costs, and who pays under Section 31A.",
    "category": "Arbitration & ADR",
    "authorName": "Team Judicium Arbitration",
    "authorTitle": "Arbitration & ADR Practice",
    "datePublished": "2026-05-18",
    "dateModified": "2026-06-05",
    "readingTime": 9,
    "tldr": "The cost of arbitration in India has four components: arbitrator fees (governed by the Fourth Schedule of the Arbitration and Conciliation Act, 1996 in ad-hoc matters, or the institution's schedule in administered ones), institutional and administrative charges, legal and counsel fees, and incidental costs such as venue, transcription, and expert witnesses. Fees scale with the sum in dispute. Under Section 31A, introduced by the 2015 amendments, the tribunal has discretion to award costs, and the general rule is that the unsuccessful party pays the successful party's costs unless the tribunal orders otherwise.",
    "relatedActs": [
      "Arbitration and Conciliation Act, 1996",
      "Arbitration and Conciliation (Amendment) Act, 2015",
      "Arbitration and Conciliation (Amendment) Act, 2019",
      "Code of Civil Procedure, 1908"
    ],
    "keywords": [
      "cost of arbitration in India",
      "arbitrator fees India",
      "Fourth Schedule arbitrator fees",
      "Section 31A costs arbitration",
      "who pays arbitration costs India",
      "institutional arbitration fees India",
      "ad hoc arbitration cost",
      "arbitration cost allocation India",
      "DIAC MCIA fee schedule",
      "model fee scale arbitration India"
    ],
    "sections": [
      {
        "heading": "What 'cost' actually means in an arbitration",
        "paragraphs": [
          "Parties tend to think of arbitration cost as 'the lawyer's bill'. In practice the cost of an arbitration is made up of several distinct heads, and the lawyer's fee is only one of them. Understanding the components separately is the first step to budgeting a dispute realistically and to arguing costs at the end of it.",
          "Broadly, the cost of an India-seated arbitration falls under four heads: arbitrator fees, institutional or administrative charges, legal and counsel fees, and incidental costs (venue hire, transcription, translation, expert and witness expenses, travel). Each scales differently with the size and complexity of the dispute, and each is treated differently when the tribunal allocates costs in the final award."
        ]
      },
      {
        "heading": "Arbitrator fees — the Fourth Schedule",
        "paragraphs": [
          "In an ad-hoc arbitration, arbitrator fees in India are anchored to the Fourth Schedule of the Arbitration and Conciliation Act, 1996, inserted by the 2015 amendments. The Fourth Schedule sets a model fee scale graduated by the sum in dispute — the fee rises in slabs as the claim value increases, subject to a stated ceiling at the top slab. Where the tribunal is a panel of three, the presiding arbitrator is ordinarily entitled to an additional percentage over the fee payable to each co-arbitrator.",
          "The status of the Fourth Schedule is important to get right. The Supreme Court has clarified that the Fourth Schedule operates as a model scale and is not mandatory in every case — party autonomy on fees is preserved, and the scale is a guide that high courts may adopt through rules. Where the parties or the applicable rules have fixed fees, those govern; the Fourth Schedule fills the gap and provides a reasonableness benchmark when they have not.",
          "A recurring point of dispute is whether 'sum in dispute' for the fee slab means the claim alone or the claim plus counterclaim. The prevailing practice is that claim and counterclaim are treated as separate sums for the purpose of computing fees, so a large counterclaim materially increases the tribunal's fee entitlement."
        ]
      },
      {
        "heading": "Institutional and administrative charges",
        "paragraphs": [
          "Where the arbitration is administered by an institution — DIAC, MCIA, IAMC, or a foreign body such as SIAC or ICC — the institution publishes its own fee schedule covering both the administrative charge it retains and the arbitrator fees it collects and remits. These schedules are also graduated by claim value, and they typically require an upfront registration or filing fee and periodic deposits against accruing costs.",
          "The institutional route carries a visible administrative charge that ad-hoc arbitration does not. In exchange, the institution manages deposits, fee disputes, secretarial support, and venue logistics, which removes a layer of friction and avoids the awkwardness of arbitrators negotiating their own fees with the parties. For many commercial parties the administrative charge buys predictability and is money well spent."
        ]
      },
      {
        "heading": "Legal fees and incidental costs",
        "paragraphs": [
          "Counsel fees are usually the single largest line item in a contested arbitration, and they vary enormously with the seniority of the team, the complexity of the dispute, and whether senior counsel is briefed for hearings. Unlike arbitrator fees, legal fees are not regulated by any schedule — they are a matter of private engagement between the party and its lawyers.",
          "Incidental costs are easy to underestimate at the outset. Hearing-room hire, daily transcription, translation of documents, the fees of expert witnesses (quantum experts, delay analysts in construction disputes, valuers), and travel for witnesses and counsel can together rival the arbitrator's fee in a heavily contested matter. A realistic budget accounts for these from the start rather than treating them as afterthoughts."
        ]
      },
      {
        "heading": "Who pays — Section 31A and cost allocation",
        "paragraphs": [
          "Before 2015, cost allocation in Indian arbitration was inconsistent, and tribunals frequently directed parties to bear their own costs regardless of outcome. The 2015 amendments inserted Section 31A, which gives the tribunal a structured discretion over costs and codifies the 'costs follow the event' principle familiar from commercial litigation.",
          "Under Section 31A, the general rule is that the unsuccessful party pays the costs of the successful party, though the tribunal may make a different order and must record its reasons for doing so. The tribunal may have regard to the conduct of the parties, whether a party succeeded only in part, whether a party made a frivolous counterclaim, and whether any reasonable offer to settle was made and refused. 'Costs' under Section 31A expressly includes arbitrator fees, institutional charges, legal fees, witness and expert expenses, and other lawful costs of the arbitration.",
          "Section 31A also provides that an agreement that each party will bear its own costs irrespective of outcome is valid only if made after the dispute has arisen. A pre-dispute clause purporting to make each party bear its own costs in all events is not effective, which prevents a stronger party from insulating itself from adverse cost orders through the original contract."
        ]
      },
      {
        "heading": "Ad-hoc versus institutional cost — the real comparison",
        "paragraphs": [
          "It is a common assumption that ad-hoc arbitration is cheaper because there is no institutional administrative charge. In practice the comparison is more nuanced. Ad-hoc proceedings tend to generate more procedural disputes — over fees, deposits, timetables, and venue — each of which consumes hearing time and counsel cost, and the absence of a case manager often means the parties' lawyers do administrative work that an institution would otherwise absorb.",
          "Institutional arbitration carries a transparent administrative charge but buys a fixed fee schedule, deposit management, and procedural rules that reduce satellite disputes. For substantial commercial matters the institutional charge is frequently offset by the time and cost saved on procedural friction. The cheaper route depends less on the headline schedule than on how contested the dispute is likely to be."
        ]
      },
      {
        "heading": "Practical takeaway",
        "paragraphs": [
          "Budget all four heads at the outset, not just the legal fee, and treat the counterclaim as a separate fee-bearing sum when estimating the tribunal's likely cost. In ad-hoc matters, fix arbitrator fees in writing at the first procedural hearing by reference to the Fourth Schedule, so there is no mid-arbitration fee dispute. In administered matters, read the institution's schedule and deposit terms before you file.",
          "On allocation, plead costs from the start and build a Section 31A record as the case runs — document the other side's procedural conduct, any frivolous counterclaim, and any reasonable settlement offer that was refused, because these are precisely the factors a tribunal weighs when it decides who pays. At Judicium Arbitration we prepare a costs schedule in parallel with the statement of claim, so that when the award stage arrives the cost claim is evidenced rather than improvised."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How are arbitrator fees calculated in India?",
        "answer": "In ad-hoc arbitration, arbitrator fees are calculated by reference to the Fourth Schedule of the Arbitration and Conciliation Act, 1996, a model scale graduated by the sum in dispute, with the presiding arbitrator ordinarily entitled to an additional percentage. The Supreme Court has clarified that the Fourth Schedule is a model scale and not mandatory in every case, so party autonomy on fees is preserved. In institutional arbitration, the institution's own published fee schedule applies instead."
      },
      {
        "question": "Who pays the costs of arbitration in India?",
        "answer": "Under Section 31A of the Arbitration and Conciliation Act, 1996, the general rule is that the unsuccessful party pays the successful party's costs, though the tribunal has discretion to make a different order and must record reasons for doing so. 'Costs' includes arbitrator fees, institutional charges, legal fees, and witness and expert expenses. The tribunal may consider the conduct of the parties, partial success, frivolous claims, and refused settlement offers."
      },
      {
        "question": "Is the claim or the counterclaim used to fix the fee slab?",
        "answer": "The prevailing practice in India is that the claim and the counterclaim are treated as separate sums in dispute for the purpose of computing arbitrator fees under the Fourth Schedule. A substantial counterclaim therefore increases the tribunal's fee entitlement. It is sensible to clarify this point with the tribunal at the first procedural hearing to avoid a later dispute over fees."
      },
      {
        "question": "Can a contract say each party bears its own arbitration costs?",
        "answer": "Only in limited circumstances. Section 31A of the Arbitration and Conciliation Act, 1996 provides that an agreement that each party will bear its own costs regardless of outcome is valid only if made after the dispute has arisen. A pre-dispute clause in the original contract purporting to require each party to bear its own costs in all events is not effective to oust the tribunal's discretion on costs."
      }
    ]
  },
  {
    "slug": "how-to-enforce-arbitral-award-india",
    "title": "How to Enforce an Arbitral Award in India: A Step-by-Step Guide",
    "subtitle": "From the end of the challenge window to attachment of the debtor's assets — the practical mechanics of converting a domestic arbitral award into money in hand.",
    "metaDescription": "Step-by-step guide to enforcing a domestic arbitral award in India under Section 36 of the Arbitration Act, 1996 — limitation, the Section 34 window, execution and stay.",
    "category": "Arbitration & ADR",
    "authorName": "Team Judicium Arbitration",
    "authorTitle": "Arbitration & ADR Practice",
    "datePublished": "2026-05-22",
    "dateModified": "2026-06-06",
    "readingTime": 10,
    "tldr": "A domestic arbitral award in India is enforced under Section 36 of the Arbitration and Conciliation Act, 1996. After the 2015 amendments, the mere filing of a Section 34 challenge no longer automatically stays enforcement — the award is enforceable as a decree of the court unless the court grants a separate stay on terms, usually security or deposit. Once the Section 34 period has lapsed (or the challenge fails), the award holder files an execution petition under Order XXI of the Code of Civil Procedure, 1908 and proceeds to attachment of assets, garnishee orders, and sale. Limitation for execution is three years.",
    "relatedActs": [
      "Arbitration and Conciliation Act, 1996",
      "Arbitration and Conciliation (Amendment) Act, 2015",
      "Code of Civil Procedure, 1908",
      "Limitation Act, 1963",
      "Commercial Courts Act, 2015"
    ],
    "keywords": [
      "enforce arbitral award India",
      "Section 36 arbitration enforcement",
      "execution of arbitral award",
      "domestic award enforcement India",
      "stay of arbitral award Section 36",
      "Order XXI execution award",
      "automatic stay arbitration India",
      "limitation enforcement arbitral award",
      "garnishee order arbitral award",
      "attachment of assets arbitration"
    ],
    "sections": [
      {
        "heading": "The award is the start, not the finish",
        "paragraphs": [
          "Winning an arbitration produces an award, but an award is a piece of paper until it is enforced. For many award holders the genuinely difficult phase begins after the award — locating the debtor's assets, navigating the challenge window, and running the execution to a successful recovery. This guide deals with domestic awards (India-seated arbitrations); foreign awards are enforced through the separate Part II route under the New York Convention.",
          "The governing provision is Section 36 of the Arbitration and Conciliation Act, 1996. Section 36 provides that where the time for making a Section 34 application to set aside the award has expired, the award is enforced in accordance with the Code of Civil Procedure, 1908 in the same manner as if it were a decree of the court. The architecture, therefore, treats the enforced award as a court decree and routes execution through the ordinary civil execution machinery."
        ]
      },
      {
        "heading": "Step 1 — Let the Section 34 window run",
        "paragraphs": [
          "An arbitral award cannot be treated as final the moment it is signed. The losing party has a right to apply to set it aside under Section 34, and that application must be made within three months of receipt of the award, extendable by a further period of thirty days (but no more) if the court is satisfied there was sufficient cause for the delay. The enforcement clock is therefore bound up with the challenge clock.",
          "An award holder should diarise the Section 34 window carefully. Until that window closes, the debtor may file a challenge; premature execution steps risk being met with a stay application. The practical discipline is to confirm the exact date of receipt of the signed award by each party, because that date starts the limitation running and determines when enforcement can safely proceed."
        ]
      },
      {
        "heading": "Step 2 — Understand: there is no automatic stay",
        "paragraphs": [
          "This is the single most important change brought by the 2015 amendments. Before 2015, the mere filing of a Section 34 application operated as an automatic stay on enforcement — a debtor could freeze recovery for years simply by filing a challenge. The amended Section 36(2) and (3) abolished that automatic stay.",
          "Now, the filing of a Section 34 application does not by itself render the award unenforceable. The award debtor must make a separate application for a stay of the award, and the court may grant a stay only on such conditions as it thinks fit. In money awards, the court is directed to have due regard to the provisions on grant of stay of a money decree, and in practice stays are routinely conditioned on the debtor depositing the award amount or furnishing security.",
          "The strategic consequence for the award holder is significant: the burden is on the debtor to obtain a conditional stay, and even a stay usually comes with security that protects the eventual recovery. The award holder is no longer left waiting years with nothing in hand."
        ]
      },
      {
        "heading": "Step 3 — File the execution petition",
        "paragraphs": [
          "Once the Section 34 period has expired without challenge, or a challenge has been dismissed, or no stay has been granted, the award holder files an execution petition. Because the award is enforced as if it were a decree, execution proceeds under Order XXI of the Code of Civil Procedure, 1908 — the same provision that governs execution of any civil decree.",
          "The Supreme Court has clarified that an award holder may file the execution petition in any court where the award is capable of being executed — typically the court within whose jurisdiction the debtor's assets are located — and is not confined to the court that would have had jurisdiction over the original dispute. This gives the award holder useful flexibility to pursue assets wherever they are found."
        ]
      },
      {
        "heading": "Step 4 — Execute against the debtor's assets",
        "paragraphs": [
          "Order XXI offers the full menu of execution modes. The award holder can seek attachment and sale of the debtor's movable and immovable property, a garnishee order requiring the debtor's bankers or trade debtors to pay the award holder directly, attachment of shares and securities, and appointment of a receiver. Where the debtor is a company, execution can reach its bank accounts and book debts.",
          "Asset tracing is the practical heart of execution. The more precisely the award holder can identify and disclose the debtor's bank accounts, immovable property, receivables, and shareholdings in the execution petition, the faster the court can pass attachment and garnishee orders. It is also possible to seek disclosure of assets from the judgment debtor as part of the execution process where assets are concealed."
        ]
      },
      {
        "heading": "Step 5 — Watch the limitation clock for execution",
        "paragraphs": [
          "Enforcement is not open-ended. An arbitral award, once enforceable as a decree, must be executed within the limitation period prescribed for execution of decrees — three years under the Limitation Act, 1963, running from the date the award becomes enforceable. An award holder who sits on an enforceable award risks losing the right to execute it.",
          "Where a Section 34 challenge and any stay have intervened, the period during which enforcement was stayed is excluded from the computation, so the limitation effectively runs from the point at which the award became enforceable and free of stay. The safe practice is to move to execution promptly once the award is enforceable rather than relying on exclusions to rescue a delayed petition."
        ]
      },
      {
        "heading": "Practical takeaway",
        "paragraphs": [
          "Treat enforcement as a project that begins the day the award is signed. Confirm the date of receipt to fix the Section 34 window, begin asset tracing immediately, and prepare the execution petition so it is ready to file the moment the window closes. Because there is no automatic stay, the award holder holds the initiative — and if the debtor seeks a stay, press for a deposit or security as a condition.",
          "At Judicium Arbitration our standard practice on a favourable award is to start asset identification before the challenge window even opens, draft the execution petition in parallel, and resist any stay application unless it is conditioned on the debtor depositing the award sum. That combination — speed, asset intelligence, and insistence on security — is what converts a paper award into actual recovery."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does filing a Section 34 challenge automatically stay enforcement of an arbitral award?",
        "answer": "No. Following the 2015 amendments to the Arbitration and Conciliation Act, 1996, the mere filing of a Section 34 application no longer operates as an automatic stay on enforcement. The award debtor must make a separate application for a stay under Section 36(2), and the court may grant a stay only on conditions it thinks fit — in money awards, typically a deposit of the award amount or furnishing of security."
      },
      {
        "question": "Which court enforces a domestic arbitral award in India?",
        "answer": "A domestic arbitral award is enforced as a decree under Section 36 of the Arbitration and Conciliation Act, 1996, through execution under Order XXI of the Code of Civil Procedure, 1908. The Supreme Court has clarified that the award holder may file the execution petition in any court within whose jurisdiction the debtor's assets are located, and is not confined to the court that would have had jurisdiction over the original dispute."
      },
      {
        "question": "What is the limitation period to enforce an arbitral award?",
        "answer": "An arbitral award, once enforceable as a decree, must be executed within three years under the Limitation Act, 1963, running from the date the award becomes enforceable. Where enforcement was stayed during a Section 34 challenge, the period of stay is excluded from the computation. The prudent course is to move to execution promptly once the award is enforceable."
      },
      {
        "question": "How can an award holder recover money from a reluctant debtor?",
        "answer": "Through the execution modes in Order XXI of the Code of Civil Procedure, 1908 — attachment and sale of movable and immovable property, garnishee orders against the debtor's bankers and trade debtors, attachment of shares, and appointment of a receiver. Precise asset tracing in the execution petition is critical, as it enables the court to pass attachment and garnishee orders quickly."
      }
    ]
  },
  {
    "slug": "section-34-challenge-arbitral-award",
    "title": "Setting Aside an Arbitral Award under Section 34: Grounds, Timeline and Strategy",
    "subtitle": "The narrow grounds on which an Indian court will set aside an award, the strict three-month timeline, and how to frame — or resist — a Section 34 challenge.",
    "metaDescription": "Section 34 of the Arbitration Act, 1996 explained — grounds to set aside an arbitral award, the three-month timeline, patent illegality, and the no-modification rule.",
    "category": "Arbitration & ADR",
    "authorName": "Team Judicium Arbitration",
    "authorTitle": "Arbitration & ADR Practice",
    "datePublished": "2026-05-28",
    "dateModified": "2026-06-07",
    "readingTime": 9,
    "tldr": "Section 34 of the Arbitration and Conciliation Act, 1996 is the only route to set aside a domestic arbitral award, and the grounds are deliberately narrow — incapacity, an invalid arbitration agreement, lack of proper notice, the award exceeding the scope of submission, irregular tribunal composition or procedure, non-arbitrability, and conflict with the public policy of India. For purely domestic awards, the 2015 amendments added 'patent illegality' as a further ground. A Section 34 application must be filed within three months of receipt of the award, extendable by a maximum of thirty days. The court reviews the award; it does not sit in appeal on the merits, and historically could not modify the award.",
    "relatedActs": [
      "Arbitration and Conciliation Act, 1996",
      "Arbitration and Conciliation (Amendment) Act, 2015",
      "Code of Civil Procedure, 1908",
      "Limitation Act, 1963"
    ],
    "keywords": [
      "Section 34 arbitration India",
      "set aside arbitral award India",
      "grounds to challenge arbitral award",
      "patent illegality arbitration",
      "public policy Section 34",
      "Section 34 timeline three months",
      "challenge arbitral award India",
      "Ssangyong NHAI award",
      "Section 34 strategy",
      "limited scope judicial review arbitration"
    ],
    "sections": [
      {
        "heading": "Section 34 is a review, not an appeal",
        "paragraphs": [
          "The single most important thing to understand about Section 34 of the Arbitration and Conciliation Act, 1996 is what it is not. It is not an appeal. A court hearing a Section 34 application does not re-hear the dispute, re-weigh the evidence, or substitute its own view of the contract for the tribunal's. It conducts a narrow, supervisory review on a closed list of grounds, and if none is made out, the award stands however much the court might have decided differently.",
          "This restraint is deliberate. Arbitration is chosen precisely so that the tribunal's decision is final, and an expansive Section 34 jurisdiction would defeat that purpose by turning every award into the first round of litigation. Indian courts, particularly since the 2015 amendments and a clear line of Supreme Court authority, have repeatedly emphasised the limited and supervisory character of Section 34."
        ]
      },
      {
        "heading": "The grounds under Section 34(2)",
        "paragraphs": [
          "Section 34(2) lists the grounds. A party may apply to set aside an award by establishing the incapacity of a party, that the arbitration agreement was not valid, that it was not given proper notice of the appointment of the arbitrator or of the proceedings or was otherwise unable to present its case, that the award deals with a dispute not contemplated by or falling outside the submission to arbitration, or that the composition of the tribunal or the arbitral procedure was not in accordance with the parties' agreement.",
          "Separately, the court may set aside an award if it finds that the subject matter of the dispute is not capable of settlement by arbitration under Indian law, or that the award is in conflict with the public policy of India. These last two grounds the court may consider on its own; the others must be raised and proved by the party challenging the award."
        ]
      },
      {
        "heading": "Public policy — narrowed after 2015",
        "paragraphs": [
          "The 'public policy' ground was once the gateway through which courts smuggled in merits review. The 2015 amendments tightened it through an explanation to Section 34(2)(b): an award conflicts with the public policy of India only if it was induced or affected by fraud or corruption, or it contravenes the fundamental policy of Indian law, or it conflicts with the most basic notions of morality or justice. Crucially, the amendment provides that the test of contravention of the fundamental policy of Indian law does not entail a review on the merits of the dispute.",
          "The Supreme Court in Ssangyong Engineering & Construction Co. Ltd. v. National Highways Authority of India (2019) read the narrowed public-policy ground in this restrictive sense, confining it to the limited categories set out in the amendment and rejecting the wider 'patent illegality on the merits' approach that earlier case law had allowed under the public-policy head for all awards."
        ]
      },
      {
        "heading": "Patent illegality — domestic awards only",
        "paragraphs": [
          "The 2015 amendments introduced a distinct ground in Section 34(2A) that applies only to purely domestic awards (not international commercial arbitrations seated in India): an award may be set aside if the court finds that it is vitiated by patent illegality appearing on the face of the award. The same sub-section makes clear that an award shall not be set aside merely on the ground of an erroneous application of the law or by re-appreciation of evidence.",
          "Patent illegality is therefore a narrow, demanding standard. It captures things such as an award that contravenes the substantive law of India in a manner going to the root of the matter, a tribunal's failure to decide in accordance with the terms of the contract, or a decision so perverse that no reasonable person could have reached it on the material. It does not capture a merely debatable or wrong interpretation. Ssangyong illustrates the distinction between a genuine patent illegality or breach of natural justice and an ordinary disagreement with the tribunal's reasoning."
        ]
      },
      {
        "heading": "The timeline — three months, plus thirty days, no more",
        "paragraphs": [
          "Section 34(3) imposes a strict limitation. An application to set aside an award must be made within three months from the date on which the party received the award (or, where a Section 33 request for correction or interpretation was made, from the date that request was disposed of). The court may entertain the application within a further period of thirty days — but not thereafter — if it is satisfied the applicant was prevented by sufficient cause from applying in time.",
          "The thirty-day extension is an outer limit, not a flexible discretion. The Supreme Court has held that the words 'but not thereafter' exclude the general condonation provisions of the Limitation Act, 1963, so a Section 34 application filed beyond three months and thirty days is barred and cannot be saved by Section 5 of the Limitation Act. This is the most common — and most fatal — error in Section 34 practice: missing the window."
        ]
      },
      {
        "heading": "Can the court modify the award?",
        "paragraphs": [
          "For most of the life of the 1996 Act, the settled position was that a Section 34 court could only set aside an award (in whole or in part) or uphold it — it could not modify or vary the award or substitute its own decision, because Section 34 confers a power to set aside and not a power to correct. A party unhappy with part of an award generally faced an all-or-nothing remedy, with a fresh arbitration the route to a re-decision.",
          "This is an evolving area, and the precise contours of any limited power to sever or partially set aside particular findings continue to be litigated. Practitioners should treat the no-modification principle as the baseline and check the current state of authority before pleading any relief that asks the court to rewrite, rather than set aside, the award."
        ]
      },
      {
        "heading": "Practical takeaway",
        "paragraphs": [
          "If you are challenging an award, the timeline governs everything: fix the date of receipt, count three months, and treat the thirty-day extension as unavailable. Plead the specific Section 34 ground with precision — patent illegality for a domestic award, or a defined public-policy or natural-justice defect — and resist the temptation to dress up a merits disagreement as a ground, because that is exactly what the court is trained to reject.",
          "If you are resisting a challenge as the award holder, the two strongest moves are usually limitation and characterisation: test whether the application is in time, and demonstrate that the grounds raised are merits arguments in disguise. At Judicium Arbitration we assess every challenge first on limitation and then on whether each ground falls genuinely within Section 34(2) or 34(2A) — most challenges fail at one of those two gates."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What are the grounds to set aside an arbitral award under Section 34?",
        "answer": "Section 34(2) of the Arbitration and Conciliation Act, 1996 lists the grounds: incapacity of a party, an invalid arbitration agreement, lack of proper notice or inability to present one's case, the award exceeding the scope of submission, irregular composition of the tribunal or arbitral procedure, non-arbitrability of the subject matter, and conflict with the public policy of India. For purely domestic awards, Section 34(2A) adds patent illegality appearing on the face of the award."
      },
      {
        "question": "What is the time limit to file a Section 34 application?",
        "answer": "A Section 34 application must be filed within three months of the date the party received the arbitral award. The court may allow a further period of thirty days — but not thereafter — if satisfied there was sufficient cause for the delay. The Supreme Court has held that the words 'but not thereafter' exclude the general condonation provisions of the Limitation Act, 1963, so an application beyond three months and thirty days is time-barred."
      },
      {
        "question": "What is 'patent illegality' as a ground to challenge an award?",
        "answer": "Patent illegality, introduced by the 2015 amendments in Section 34(2A), is a ground that applies only to purely domestic awards (not India-seated international commercial arbitrations). It allows an award to be set aside where an illegality appears on the face of the award and goes to the root of the matter — for example, a contravention of substantive Indian law, a failure to decide in accordance with the contract, or a perverse finding. It does not extend to a merely erroneous application of law or a re-appreciation of evidence."
      },
      {
        "question": "Can a court modify an arbitral award under Section 34?",
        "answer": "The long-settled baseline is that a Section 34 court may set aside an award, in whole or in part, or uphold it, but cannot modify or vary it or substitute its own decision, because Section 34 confers only a power to set aside. The precise scope of any limited power to partially set aside particular findings is an evolving area, so practitioners should treat the no-modification rule as the default and verify the current state of the law before seeking relief that asks the court to rewrite the award."
      }
    ]
  },
  {
    "slug": "seat-vs-venue-arbitration-india",
    "title": "Seat vs Venue of Arbitration in India: Why the Distinction Decides Your Case",
    "subtitle": "The difference between the legal seat and the physical venue of an arbitration — and how getting it wrong can hand supervisory control to the wrong court.",
    "metaDescription": "Seat vs venue of arbitration in India explained — how the seat fixes the supervisory court and curial law, the BALCO and BGS SGS SOMA tests, and drafting tips.",
    "category": "Arbitration & ADR",
    "authorName": "Team Judicium Arbitration",
    "authorTitle": "Arbitration & ADR Practice",
    "datePublished": "2026-06-01",
    "dateModified": "2026-06-08",
    "readingTime": 8,
    "tldr": "In Indian arbitration, the 'seat' is the legal home of the arbitration — it fixes which court has supervisory jurisdiction and which procedural (curial) law governs the arbitration. The 'venue' is merely the physical place where hearings are held and carries no jurisdictional consequence. The Supreme Court in Bharat Aluminium Co. v. Kaiser Aluminium (BALCO, 2012) anchored Indian law in the seat concept, and BGS SGS SOMA JV v. NHPC Ltd. (2019) held that where a contract names a place for the arbitration without contrary indicators, that place is the seat — conferring exclusive supervisory jurisdiction on its courts. Naming the wrong place can hand control of your dispute to the wrong court.",
    "relatedActs": [
      "Arbitration and Conciliation Act, 1996",
      "Arbitration and Conciliation (Amendment) Act, 2015",
      "Code of Civil Procedure, 1908",
      "Commercial Courts Act, 2015"
    ],
    "keywords": [
      "seat vs venue arbitration India",
      "seat of arbitration India",
      "venue of arbitration meaning",
      "BALCO judgment seat",
      "BGS SGS SOMA NHPC seat venue",
      "supervisory court arbitration seat",
      "curial law arbitration India",
      "exclusive jurisdiction arbitration seat",
      "drafting arbitration clause seat",
      "place of arbitration India"
    ],
    "sections": [
      {
        "heading": "Two words that are not interchangeable",
        "paragraphs": [
          "Arbitration clauses routinely say things like 'the arbitration shall be held at Mumbai' or 'the venue of arbitration shall be New Delhi'. Drafters often use 'seat', 'venue', and 'place' loosely, as if they were synonyms. They are not, and the difference is one of the most consequential in arbitration law.",
          "The seat is the legal anchor of the arbitration — it determines which country's (and which court's) supervisory law governs the proceedings. The venue is simply the geographical location where hearings physically take place, chosen for convenience. An arbitration seated in India can perfectly well hold hearings in London for convenience without making London the seat. Confusing the two in a clause can transfer control of the entire dispute to a court the parties never intended."
        ]
      },
      {
        "heading": "Why the seat matters so much",
        "paragraphs": [
          "The seat carries three heavy jurisdictional consequences. First, it fixes the supervisory court — the court that hears Section 9 interim relief applications, Section 11 appointment applications, Section 34 challenges, and Section 37 appeals. Second, it fixes the curial law, the procedural law of the arbitration. Third, in an international context, the seat determines whether an award is treated as domestic or foreign for enforcement.",
          "Because the supervisory court flows from the seat, the choice of seat effectively chooses your judge for every court interaction in the life of the arbitration. A party that wants the Delhi High Court's supervisory jurisdiction must seat the arbitration in Delhi; naming Delhi merely as a 'venue' while the true seat lies elsewhere can defeat that intention. This is why seat is the first thing a careful drafter fixes and the first thing a litigator examines when a dispute arises."
        ]
      },
      {
        "heading": "BALCO — anchoring Indian law in the seat",
        "paragraphs": [
          "The foundational decision is the Constitution Bench ruling in Bharat Aluminium Co. v. Kaiser Aluminium Technical Service (BALCO, 2012). BALCO adopted the seat-centric approach for Indian arbitration law, holding that Part I of the Arbitration and Conciliation Act, 1996 applies to arbitrations seated in India, and that the courts at the seat exercise supervisory jurisdiction. BALCO drew the conceptual line between the seat as the juridical home of the arbitration and the venue as a place of convenience for hearings.",
          "BALCO realigned Indian law with the international understanding of seat and reversed the earlier position that had allowed Indian courts to intervene in foreign-seated arbitrations. After BALCO, the seat became the organising principle for deciding which law and which court govern an India-connected arbitration."
        ]
      },
      {
        "heading": "BGS SGS SOMA — when 'venue' is really the seat",
        "paragraphs": [
          "The harder question is what happens when a clause names a place without using the word 'seat'. The Supreme Court addressed this in BGS SGS SOMA JV v. NHPC Ltd. (2019). It held that where an arbitration clause designates a place for the arbitration to be held, and there are no significant contrary indicators, that named place is to be treated as the seat of the arbitration — not merely a convenient venue.",
          "BGS SGS SOMA also held that the courts of the seat have exclusive supervisory jurisdiction over the arbitration, displacing the courts of other places that might otherwise have had jurisdiction over the cause of action. The practical effect is that a clause saying 'arbitration shall be held at Mumbai' will usually make Mumbai the seat, conferring exclusive supervisory jurisdiction on the Bombay High Court, even though the clause never used the word 'seat'. Loose drafting can therefore decide jurisdiction by accident."
        ]
      },
      {
        "heading": "Seat vs venue — at a glance",
        "paragraphs": [
          "The two concepts can be summarised against the key dimensions that practitioners care about. The table below contrasts seat and venue on meaning, supervisory court, governing procedural law, whether the place can change, and the leading authorities."
        ],
        "table": {
          "caption": "Seat vs Venue of arbitration in India",
          "headers": ["Aspect", "Seat", "Venue"],
          "rows": [
            ["Meaning", "The legal/juridical home of the arbitration; its centre of gravity", "The physical place where hearings are conducted, chosen for convenience"],
            ["Supervisory court", "Fixes the court with exclusive supervisory jurisdiction (Sections 9, 11, 34, 37)", "Confers no supervisory jurisdiction by itself"],
            ["Governing law of the arbitration", "Determines the curial/procedural law and, internationally, whether the award is domestic or foreign", "Does not determine the curial law"],
            ["Can it change?", "Fixed by the parties' agreement; not changed merely by holding hearings elsewhere", "Can shift freely for convenience without legal consequence"],
            ["Key authorities", "BALCO v. Kaiser (2012); BGS SGS SOMA JV v. NHPC (2019)", "Treated as a place of convenience under BALCO and BGS SGS SOMA"]
          ]
        }
      },
      {
        "heading": "Common drafting traps",
        "paragraphs": [
          "Three mistakes recur. The first is using 'venue' loosely to name a city the parties actually intend as the seat — under BGS SGS SOMA that named place will usually be read as the seat anyway, but the ambiguity invites a jurisdictional fight at the threshold. The second is naming two different places — a 'venue' in one clause and an exclusive-jurisdiction court in another — which sets up a direct conflict over which court supervises.",
          "The third trap is silence: a clause that fixes no seat at all forces the tribunal or the court to determine the seat by inference, creating uncertainty precisely when the parties least want it. Each of these problems is avoidable at the drafting stage at no cost, and expensive to fix once a dispute has crystallised."
        ]
      },
      {
        "heading": "Practical takeaway",
        "paragraphs": [
          "Use the word 'seat' expressly and name one city as the seat. If you also want hearings held somewhere convenient, say so separately — for example, 'the seat of arbitration shall be New Delhi; hearings may be held at any venue the tribunal considers convenient'. That single sentence removes almost all of the litigation that the seat-venue distinction generates.",
          "When a dispute arises, the first question we ask at Judicium Arbitration is: where is the seat, and therefore which court supervises this arbitration? Under BALCO and BGS SGS SOMA, the answer usually flows from the named place in the clause — and getting that named place right at the drafting stage is one of the cheapest and highest-value decisions a commercial party can make."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between the seat and the venue of arbitration?",
        "answer": "The seat is the legal home of the arbitration — it fixes which court has supervisory jurisdiction over the arbitration and which procedural (curial) law governs it. The venue is merely the physical place where hearings are held, chosen for convenience, and carries no jurisdictional consequence by itself. An arbitration seated in India can hold hearings abroad for convenience without changing its Indian seat."
      },
      {
        "question": "Why does the seat of arbitration matter in India?",
        "answer": "The seat determines the court with exclusive supervisory jurisdiction — the court that hears Section 9, Section 11, Section 34, and Section 37 matters — and fixes the curial law of the arbitration. In an international context it also decides whether an award is domestic or foreign for enforcement. Because the supervisory court flows from the seat, the choice of seat effectively chooses the court that will oversee every stage of the arbitration."
      },
      {
        "question": "If a clause only names a 'venue', does that become the seat?",
        "answer": "Usually yes. In BGS SGS SOMA JV v. NHPC Ltd. (2019), the Supreme Court held that where an arbitration clause designates a place for the arbitration and there are no significant contrary indicators, that named place is to be treated as the seat — conferring exclusive supervisory jurisdiction on the courts of that place. So a clause saying arbitration 'shall be held at' a city will generally make that city the seat even if the word 'seat' is never used."
      },
      {
        "question": "How should an arbitration clause specify the seat?",
        "answer": "Use the word 'seat' expressly and name a single city as the seat of the arbitration. If hearings may be held elsewhere for convenience, state that separately as the venue — for example, 'the seat of arbitration shall be New Delhi; hearings may be held at any venue the tribunal considers convenient'. This removes the ambiguity that the seat-venue distinction otherwise generates and avoids a threshold fight over which court supervises the dispute."
      }
    ]
  },
  {
    "slug": "sarfaesi-vs-drt-vs-ibc-recovery-route",
    "title": "SARFAESI vs DRT vs IBC: Choosing the Right Recovery Route for Lenders in India",
    "subtitle": "How secured creditors should choose between SARFAESI enforcement, a DRT recovery suit, and the insolvency process under the IBC — and when each is the right tool.",
    "metaDescription": "Compare SARFAESI, DRT and IBC for lender recovery in India. Governing statutes, forums, timelines, and how secured creditors choose the right debt-recovery route in 2026.",
    "category": "Banking & Finance",
    "authorName": "Team Judicium Arbitration",
    "authorTitle": "Arbitration & ADR Practice",
    "datePublished": "2026-05-25",
    "dateModified": "2026-06-06",
    "readingTime": 10,
    "tldr": "Indian lenders have three principal recovery routes. The SARFAESI Act, 2002 lets a secured creditor enforce security interest without court intervention under Section 13 — issuing a demand notice, then taking possession or selling the secured asset; the borrower challenges enforcement before the Debts Recovery Tribunal under Section 17. The Recovery of Debts Due to Banks and Financial Institutions Act, 1993 provides a DRT adjudication route to obtain a recovery certificate. The Insolvency and Bankruptcy Code, 2016 is a collective insolvency process for a minimum default of one crore rupees, triggering a moratorium and resolution or liquidation. SARFAESI suits secured creditors holding tangible security; the IBC suits resolution of the whole entity.",
    "relatedActs": [
      "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act)",
      "Recovery of Debts Due to Banks and Financial Institutions Act, 1993 (RDB Act)",
      "Insolvency and Bankruptcy Code, 2016",
      "Transfer of Property Act, 1882",
      "Code of Civil Procedure, 1908"
    ],
    "keywords": [
      "SARFAESI vs DRT vs IBC",
      "debt recovery route India",
      "SARFAESI Section 13 enforcement",
      "Section 17 SARFAESI challenge",
      "DRT recovery certificate",
      "IBC default threshold one crore",
      "secured creditor recovery India",
      "lender recovery options India",
      "NPA recovery options",
      "insolvency vs SARFAESI"
    ],
    "sections": [
      {
        "heading": "Three routes, three different objectives",
        "paragraphs": [
          "When a borrower's account turns into a non-performing asset, an Indian lender does not have one recovery mechanism — it has three, each built for a different purpose. The SARFAESI Act, 2002 is an enforcement tool for secured creditors. The Recovery of Debts Due to Banks and Financial Institutions Act, 1993 is an adjudication-and-recovery tool before a specialised tribunal. The Insolvency and Bankruptcy Code, 2016 is a collective resolution process aimed at the debtor as a whole.",
          "Choosing among them is not merely procedural. The choice turns on whether the debt is secured, what the lender actually wants (the asset, a money decree, or resolution of the whole company), the size of the default, and how much speed and control the lender is willing to trade for collective process. Often the routes are used in sequence or in parallel rather than as mutually exclusive alternatives.",
          "This article sets out what each route does, the forum and timeline involved, and how a secured creditor should think about selecting between them."
        ]
      },
      {
        "heading": "SARFAESI — enforcing security without going to court",
        "paragraphs": [
          "The SARFAESI Act, 2002 allows a secured creditor to enforce its security interest without the intervention of a court or tribunal. Under Section 13(2), the creditor issues a demand notice to a defaulting borrower whose account has been classified as a non-performing asset, calling on the borrower to discharge the dues within sixty days. If the borrower fails to comply, Section 13(4) empowers the creditor to take possession of the secured asset, take over management, or sell the asset to realise the dues.",
          "This out-of-court enforcement is SARFAESI's defining advantage — and its limitation. It is available only to secured creditors and only against assets over which a valid security interest exists; it does not assist an unsecured lender, and it does not reach assets that are not charged. Certain assets and transactions are also excluded from the Act's scope.",
          "The borrower's remedy against enforcement is an application to the Debts Recovery Tribunal under Section 17, challenging the measures taken under Section 13(4). Importantly, this is a challenge after the creditor has acted — SARFAESI front-loads enforcement and leaves the borrower to contest it, which is what makes it faster than a conventional suit."
        ]
      },
      {
        "heading": "DRT — adjudication and the recovery certificate",
        "paragraphs": [
          "The Recovery of Debts Due to Banks and Financial Institutions Act, 1993 created the Debts Recovery Tribunals (DRTs) and the Debts Recovery Appellate Tribunals (DRATs) to provide banks and financial institutions a faster forum than ordinary civil courts for recovering debts above the prescribed threshold. A lender files an original application before the DRT; the tribunal adjudicates the claim and, if satisfied, issues a recovery certificate quantifying the amount due.",
          "The recovery certificate is then executed by a recovery officer, who can attach and sell the borrower's property, appoint a receiver, and take other recovery steps. Unlike SARFAESI, the DRT route does not depend on the existence of security — it is an adjudicatory route to a money recovery, suitable where the lender needs a tribunal determination of the amount due, including against unsecured exposure or where the security is inadequate.",
          "The DRT also serves as the appellate forum for SARFAESI: a borrower aggrieved by Section 13 enforcement comes to the DRT under Section 17, and a further appeal lies to the DRAT. The two statutes are therefore intertwined in practice, with the same tribunal handling both the lender's recovery application and the borrower's enforcement challenge."
        ]
      },
      {
        "heading": "IBC — collective resolution of the whole debtor",
        "paragraphs": [
          "The Insolvency and Bankruptcy Code, 2016 is not a security-enforcement tool — it is a collective insolvency framework. A financial creditor (under Section 7) or an operational creditor (under Section 9) can initiate the corporate insolvency resolution process against a corporate debtor that has committed a default. Once the application is admitted, a moratorium under Section 14 freezes enforcement actions, suits, and recovery against the debtor, and a resolution professional takes over management while creditors attempt to resolve the entity through a resolution plan, failing which it goes to liquidation.",
          "Crucially, the minimum amount of default required to initiate the IBC process against a corporate debtor is one crore rupees. This threshold was raised from one lakh rupees by a notification in March 2020, putting the IBC out of reach for small defaults and channelling them to SARFAESI or the DRT instead.",
          "The IBC suits a lender that wants resolution of the whole company rather than enforcement against a single asset — for instance, where the borrower has multiple creditors, the security is insufficient on its own, or the lender sees more value in a going-concern resolution than in piecemeal asset sales. But it is a collective process: once admitted, the individual lender loses unilateral control, the moratorium halts SARFAESI and DRT action, and outcomes are decided by the committee of creditors."
        ]
      },
      {
        "heading": "SARFAESI vs DRT vs IBC at a glance",
        "paragraphs": [
          "The three routes differ on every material axis — the governing statute, what the process actually does, the forum, who can invoke it, the realistic timeline, and the situations each suits best. The table below summarises the comparison for a lender deciding how to proceed.",
          "Treat the table as a first filter, not a final answer. In a real recovery file the routes interact — a moratorium under the IBC will stall a SARFAESI enforcement, and a DRT proceeding may run alongside SARFAESI possession — so sequencing matters as much as the initial choice."
        ],
        "table": {
          "caption": "SARFAESI vs DRT vs IBC — lender recovery routes compared",
          "headers": ["Aspect", "SARFAESI", "DRT", "IBC"],
          "rows": [
            ["Governing statute", "SARFAESI Act, 2002", "RDB Act, 1993", "Insolvency and Bankruptcy Code, 2016"],
            ["What it does", "Out-of-court enforcement of security interest (Section 13)", "Adjudicates debt; issues recovery certificate", "Collective insolvency resolution or liquidation"],
            ["Forum", "Secured creditor acts directly; challenge before DRT (Section 17)", "Debts Recovery Tribunal / DRAT", "National Company Law Tribunal (NCLT) / NCLAT"],
            ["Who can use it", "Secured creditors only", "Banks and financial institutions", "Financial or operational creditors"],
            ["Typical timeline", "Notice plus 60 days, then enforcement; faster if uncontested", "Months to a few years, depending on contest", "Time-bound resolution process; often extended in practice"],
            ["Best when", "Lender holds tangible, charged security", "A tribunal money determination is needed", "Whole-entity resolution and default of at least one crore rupees"]
          ]
        }
      },
      {
        "heading": "How a lender actually chooses",
        "paragraphs": [
          "Start with the security. If the lender holds a valid, enforceable security interest over a tangible asset and simply wants to realise that asset, SARFAESI is usually the first and fastest move — possession and sale without a prior court determination. The borrower's Section 17 challenge is a contest the lender defends, not a precondition it must clear.",
          "Choose the DRT route where a tribunal adjudication of the amount due is needed — for example, where the exposure is unsecured or under-secured, or where a clean recovery certificate is required to pursue the borrower's other assets. The DRT is also the forum the lender will be in anyway if the borrower challenges SARFAESI enforcement.",
          "Reach for the IBC where the goal is resolution of the corporate debtor as a whole, the default is at least one crore rupees, and a collective process offers more value than asset-by-asset enforcement. The IBC's moratorium is a double-edged sword: it protects the resolution process but also suspends the lender's own SARFAESI and DRT remedies, so it is a deliberate strategic step rather than a default first option."
        ]
      },
      {
        "heading": "Practical takeaway",
        "paragraphs": [
          "There is no universally superior route — there is the route that matches the security position, the recovery objective, the size of the default, and the lender's appetite for collective process. Secured creditors with good charges on tangible assets typically lead with SARFAESI; lenders needing an adjudicated money claim use the DRT; and lenders seeking resolution of the entire debtor invoke the IBC, mindful that admission triggers a moratorium that halts the other two routes.",
          "In practice these are not silos. A lender may issue a SARFAESI notice, defend the borrower's Section 17 challenge before the DRT, and reassess whether an IBC reference makes sense if the security proves inadequate or other creditors move first. At Judicium Arbitration, our recovery strategy on a fresh non-performing account begins with a security-and-objective audit — what is charged, what the lender ultimately wants, and the default amount — before committing to a route, because the cost of choosing the wrong forum first is measured in months."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a bank enforce security under SARFAESI without going to court?",
        "answer": "Yes. The SARFAESI Act, 2002 allows a secured creditor to enforce its security interest without court intervention. Under Section 13(2) the creditor issues a sixty-day demand notice to a defaulting borrower whose account is a non-performing asset, and under Section 13(4) it can then take possession of, manage, or sell the secured asset. The borrower's remedy is to challenge the enforcement before the Debts Recovery Tribunal under Section 17."
      },
      {
        "question": "What is the minimum default to start insolvency under the IBC?",
        "answer": "The minimum amount of default required to initiate the corporate insolvency resolution process against a corporate debtor under the Insolvency and Bankruptcy Code, 2016 is one crore rupees. This threshold was raised from one lakh rupees by a notification in March 2020, which had the effect of keeping smaller defaults out of the IBC and channelling them to SARFAESI or the DRT."
      },
      {
        "question": "How is the DRT route different from SARFAESI?",
        "answer": "SARFAESI is an out-of-court enforcement tool available only to secured creditors enforcing a security interest, whereas the DRT route under the Recovery of Debts Due to Banks and Financial Institutions Act, 1993 is an adjudicatory process that results in a recovery certificate quantifying the debt. The DRT route does not depend on security and can pursue unsecured or under-secured exposure. The DRT is also the forum that hears a borrower's challenge to SARFAESI enforcement under Section 17."
      },
      {
        "question": "Does initiating IBC stop SARFAESI and DRT proceedings?",
        "answer": "Yes. Once an application under the Insolvency and Bankruptcy Code, 2016 is admitted against a corporate debtor, a moratorium under Section 14 comes into force that prohibits the institution or continuation of suits, recovery actions, and the enforcement of security interest against the debtor. This suspends ongoing SARFAESI enforcement and DRT recovery for the duration of the moratorium, which is why invoking the IBC is a deliberate strategic choice rather than an automatic first step."
      }
    ]
  },
  {
    "slug": "msme-delayed-payment-section-18-msmed-act",
    "title": "MSME Delayed-Payment Claims under Section 18 of the MSMED Act: The Fast Route to Recovery",
    "subtitle": "How a registered micro or small enterprise can use the MSE Facilitation Council to recover delayed payments with statutory compound interest — without an ordinary civil suit.",
    "metaDescription": "How MSMEs recover delayed payments under Section 18 of the MSMED Act, 2006 — 45-day payment rule, compound interest at three times the RBI bank rate, and the Facilitation Council route.",
    "category": "Banking & Finance",
    "authorName": "Team Judicium Arbitration",
    "authorTitle": "Arbitration & ADR Practice",
    "datePublished": "2026-05-30",
    "dateModified": "2026-06-07",
    "readingTime": 8,
    "tldr": "The Micro, Small and Medium Enterprises Development Act, 2006 gives a registered micro or small supplier a powerful remedy for delayed payment. A buyer must pay for goods or services within the agreed date or, where there is no agreement, within forty-five days (Section 15). On default, the buyer is liable to pay compound interest, with monthly rests, at three times the bank rate notified by the Reserve Bank of India (Section 16). The supplier refers the dispute to the Micro and Small Enterprises Facilitation Council under Section 18, which first attempts conciliation and, on failure, conducts arbitration — making it a faster, lower-cost alternative to an ordinary civil suit.",
    "relatedActs": [
      "Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act)",
      "Arbitration and Conciliation Act, 1996",
      "Indian Contract Act, 1872",
      "Sale of Goods Act, 1930"
    ],
    "keywords": [
      "MSME delayed payment recovery",
      "Section 18 MSMED Act",
      "MSE Facilitation Council",
      "45 day payment rule MSME",
      "MSMED Act compound interest",
      "three times bank rate MSME interest",
      "Section 15 16 MSMED Act",
      "MSME Samadhaan",
      "delayed payment to micro small enterprise",
      "MSME arbitration conciliation"
    ],
    "sections": [
      {
        "heading": "A statutory remedy built for the supplier",
        "paragraphs": [
          "Delayed payment is the chronic affliction of small enterprises. A micro or small supplier delivers goods or services to a larger buyer and then waits — sixty, ninety, sometimes a hundred and eighty days — for payment, while its own working capital is choked. An ordinary civil suit for the price is slow, expensive, and unattractive when the supplier still wants the buyer's future business.",
          "The Micro, Small and Medium Enterprises Development Act, 2006 was designed to correct this imbalance. It imposes a hard payment deadline on buyers, attaches a punitive compound-interest liability to default, and provides a dedicated forum — the Micro and Small Enterprises Facilitation Council — to resolve delayed-payment disputes quickly through conciliation and, if that fails, arbitration. For a registered micro or small enterprise, this is one of the most effective recovery mechanisms in Indian commercial law.",
          "The remedy is available to suppliers that are micro or small enterprises and that hold the appropriate registration. Eligibility and registration status are the threshold questions in any delayed-payment claim."
        ]
      },
      {
        "heading": "The 45-day payment rule — Section 15",
        "paragraphs": [
          "Section 15 of the MSMED Act fixes the buyer's payment obligation. Where the buyer and supplier have agreed a date for payment in writing, the buyer must pay on or before that date. Where there is no such agreement, the buyer must pay before the appointed day — which the Act ties to a maximum of forty-five days from the day of acceptance or deemed acceptance of the goods or services.",
          "Critically, even where the parties have agreed a longer credit period, the agreed period cannot exceed forty-five days from acceptance for the purposes of this protection. A clause in the purchase order purporting to give the buyer ninety or a hundred and twenty days does not displace the statutory ceiling — the supplier's right to interest crystallises once the forty-five-day outer limit is crossed.",
          "This is the foundation of the entire remedy: the deadline is statutory, not merely contractual, and it cannot be contracted around to the supplier's disadvantage."
        ]
      },
      {
        "heading": "The interest liability — Section 16",
        "paragraphs": [
          "Section 16 attaches a deliberately punitive consequence to delay. Where a buyer fails to pay within the period fixed under Section 15, the buyer is liable to pay compound interest, with monthly rests, on the amount due. The rate is three times the bank rate notified by the Reserve Bank of India.",
          "Two features make this interest formidable. First, it compounds monthly, so the liability grows faster than simple interest the longer the buyer delays. Second, it is pegged at three times the RBI bank rate, which is well above ordinary commercial borrowing costs — turning delay into an expensive proposition for the buyer rather than a cheap source of working capital.",
          "The interest accrues automatically by operation of the statute from the day immediately following the date fixed under Section 15; it does not depend on a contractual interest clause. A buyer that ignores the deadline therefore faces a steadily mounting statutory liability quite apart from the principal."
        ]
      },
      {
        "heading": "The Facilitation Council reference — Section 18",
        "paragraphs": [
          "Section 18 is the procedural engine of the remedy. A supplier with a delayed-payment dispute may make a reference to the Micro and Small Enterprises Facilitation Council constituted by the State Government. The Council does not begin with adjudication — it first attempts to resolve the dispute by conciliation, either itself or by referring the matter to an institution providing alternate dispute-resolution services.",
          "If conciliation fails and the dispute is not settled, the Council either takes up the dispute for arbitration itself or refers it to an institution for arbitration. From that point, the proceedings are conducted as if the parties had agreed to arbitration, and the provisions of the Arbitration and Conciliation Act, 1996 apply to that arbitration. The Council's award is therefore an arbitral award enforceable under the 1996 Act.",
          "The process is summarised in the stages below — a single statutory pathway that moves from reference, through conciliation, to arbitration and an enforceable award."
        ],
        "table": {
          "caption": "The Section 18 reference — stage by stage",
          "headers": ["Stage", "What happens"],
          "rows": [
            ["1. Reference", "Supplier refers the delayed-payment dispute to the MSE Facilitation Council"],
            ["2. Conciliation", "Council attempts conciliation itself or through an ADR institution"],
            ["3. Arbitration", "On failure of conciliation, the Council arbitrates or refers it for arbitration"],
            ["4. Award", "An arbitral award is made, enforceable under the Arbitration and Conciliation Act, 1996"]
          ]
        }
      },
      {
        "heading": "The pre-deposit on challenge — Section 19",
        "paragraphs": [
          "The MSMED Act protects the supplier even at the challenge stage. Under Section 19, where a buyer wishes to challenge the Council's award by way of an application to set it aside, no such application can be entertained unless the buyer first deposits seventy-five per cent of the amount awarded.",
          "This pre-deposit requirement is a significant deterrent to frivolous challenges. A buyer cannot simply file a setting-aside application to buy time while withholding the entire awarded sum — it must put up the bulk of the money first. The court hearing the challenge may order that a part of that deposit be paid to the supplier pending the outcome.",
          "For the supplier, this means the Section 18 route does not merely produce an award; it produces an award that is hard to stall, because the buyer's appetite for a challenge is tempered by the obligation to deposit most of the awarded amount upfront."
        ]
      },
      {
        "heading": "Why this beats an ordinary civil suit",
        "paragraphs": [
          "For a registered micro or small enterprise, the Section 18 route is usually faster, cheaper, and more favourable than a conventional money suit. The forum is specialised and statutory, the interest entitlement is built into the statute at a punitive rate, conciliation offers an early settlement window that can preserve the commercial relationship, and the pre-deposit requirement on challenge discourages delay tactics.",
          "There are practical conditions. The supplier must in fact be a micro or small enterprise and should hold valid registration; the claim must concern delayed payment for goods supplied or services rendered; and the supplier must be ready to substantiate the supply, acceptance, and the amount due. References are commonly filed through the Government's MSME Samadhaan portal, which provides an online channel to the relevant State Facilitation Council.",
          "At Judicium Arbitration, our first step on a delayed-payment brief is to confirm the supplier's registration and eligibility, compute the Section 16 compound interest from the Section 15 default date, and file the Section 18 reference — using the conciliation stage to test settlement before the matter hardens into arbitration. For a small supplier facing a much larger buyer, the statute deliberately tilts the field back toward the party that did the work and was not paid on time."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Within how many days must a buyer pay an MSME supplier?",
        "answer": "Under Section 15 of the MSMED Act, 2006, the buyer must pay on or before the date agreed in writing with the supplier, and where there is no agreed date, before the appointed day — which the Act ties to a maximum of forty-five days from acceptance or deemed acceptance of the goods or services. Even where the parties have agreed a longer credit period, the agreed period cannot exceed forty-five days for the purposes of this statutory protection."
      },
      {
        "question": "What interest can an MSME claim on a delayed payment?",
        "answer": "Section 16 of the MSMED Act, 2006 entitles the supplier to compound interest, with monthly rests, on the amount due where the buyer fails to pay within the period fixed under Section 15. The rate is three times the bank rate notified by the Reserve Bank of India. This interest accrues automatically by operation of the statute and is independent of any contractual interest clause."
      },
      {
        "question": "Where does an MSME file a delayed-payment claim?",
        "answer": "The supplier refers the dispute to the Micro and Small Enterprises Facilitation Council under Section 18 of the MSMED Act, 2006, often through the Government's MSME Samadhaan portal. The Council first attempts conciliation and, if that fails, takes up the matter for arbitration or refers it for arbitration, with the Arbitration and Conciliation Act, 1996 applying to that arbitration and the resulting award enforceable under it."
      },
      {
        "question": "Can a buyer easily challenge an MSME Facilitation Council award?",
        "answer": "Not easily. Under Section 19 of the MSMED Act, 2006, a buyer's application to set aside the Council's award cannot be entertained unless the buyer first deposits seventy-five per cent of the awarded amount. This pre-deposit requirement is a strong deterrent to delay tactics, and the court may direct that part of the deposit be released to the supplier pending the challenge."
      }
    ]
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
