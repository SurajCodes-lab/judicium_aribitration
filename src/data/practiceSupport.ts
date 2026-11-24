/**
 * Practice-area supporting pages — Appendix A, "new depth beneath the
 * highest-demand practice areas" (6 in Month 2).
 *
 * CANNIBALISATION CONTROL. The firm already publishes on several of these
 * subjects, and a third page on the same ground would split link equity rather
 * than add reach. Each page here is therefore strictly TRANSACTIONAL, and the
 * separation is deliberate:
 *
 *   /glossary/section-9-arbitration-act     definitional  "what is Section 9"
 *   /insights/section-9-vs-section-17...    analytical    "which route, and why"
 *   this page                               transactional "we file these, here is
 *                                                          what it takes"
 *
 * These pages therefore carry scope of work, what we need from the client,
 * timeline and cost drivers — and almost no legal exposition. They link out to
 * the glossary term and the article for the law, which also funnels those
 * informational pages toward an instruction.
 */

export interface SupportStep {
  title: string;
  detail: string;
}

export interface SupportFAQ {
  question: string;
  answer: string;
}

export interface PracticeSupport {
  slug: string;
  /** Practice-area slug this sits beneath. */
  parentSlug: string;
  title: string;
  seoTitle: string;
  h1: string;
  shortTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Statutory hook shown as a badge. */
  provision: string;
  /** Short, transactional opener — what the work is, not what the law says. */
  intro: string;
  /** When a client should be instructing us. */
  whenToAct: string;
  whatWeDo: string[];
  /** What the client has to provide for us to start. */
  weNeedFromYou: string[];
  process: SupportStep[];
  /** Where it is heard. */
  forum: string[];
  timeline: string;
  /** What actually drives the cost — stated honestly. */
  costDrivers: string[];
  faqs: SupportFAQ[];
  /** Informational pages this links out to, so the three layers connect. */
  readAlso: { label: string; href: string }[];
  order: number;
}

export const practiceSupport: PracticeSupport[] = [
  // --------------------------------------------------- Arbitration (3)
  {
    slug: "section-9-interim-relief",
    parentSlug: "arbitration-alternative-dispute-resolution",
    title: "Section 9 Interim Relief Applications",
    seoTitle: "Section 9 Interim Relief Lawyers",
    h1: "Section 9 Interim Relief Applications",
    shortTitle: "Section 9 relief",
    metaDescription:
      "Urgent court relief before or during arbitration — asset freezing, injunctions, security for the claim. Delhi NCR. Call +91-9899686394.",
    keywords: [
      "Section 9 arbitration lawyer Delhi",
      "interim relief arbitration India",
      "Section 9 application filing",
      "asset freezing arbitration",
    ],
    provision: "Section 9, Arbitration and Conciliation Act, 1996",
    intro:
      "Section 9 applications are urgent work. They are brought when assets are about to move, a bank guarantee is about to be invoked, or property is about to be disposed of — and they are won or lost on how quickly and how completely the application is put together.",
    whenToAct:
      "The moment you have reason to believe the other side will dissipate assets, encash a guarantee or alter the status quo. Delay is the single most common reason these applications fail.",
    whatWeDo: [
      "Urgent applications before the Commercial Court or High Court",
      "Securing the amount in dispute, and attachment before judgment",
      "Injunctions restraining invocation or encashment of bank guarantees",
      "Appointment of a receiver and preservation of property",
      "Opposing Section 9 applications brought against clients",
    ],
    weNeedFromYou: [
      "The contract containing the arbitration clause",
      "Correspondence showing the dispute and the threatened action",
      "Evidence of the apprehended dissipation — asset transfers, notices, bank communications",
      "Details of the assets sought to be secured",
      "Your own financial position, since an undertaking as to damages is usually required",
    ],
    process: [
      {
        title: "Assess urgency and forum",
        detail:
          "Whether the matter is urgent enough for an ex parte order, and which court has jurisdiction, determined by the seat of arbitration.",
      },
      {
        title: "File and move",
        detail:
          "The application is filed with an affidavit and the documentary record, and moved for urgent hearing. Interim protection is often granted the same day where the case is made out.",
      },
      {
        title: "Commence arbitration",
        detail:
          "Where relief is granted before arbitration begins, Section 9(2) requires arbitration to be commenced within ninety days of the order or such further time as the court allows.",
      },
    ],
    forum: [
      "Commercial Court having jurisdiction over the seat",
      "High Court, where the pecuniary or subject-matter jurisdiction lies there",
    ],
    timeline:
      "Urgent applications are commonly listed within days. Ad interim protection can follow at the first hearing; final disposal takes weeks to months.",
    costDrivers: [
      "Whether ex parte relief is sought, which requires a fuller disclosure obligation",
      "The number of assets and jurisdictions involved",
      "Whether the other side contests and files a reply",
      "Whether the matter requires a court-appointed receiver or local commissioner",
    ],
    faqs: [
      {
        question: "Can I get Section 9 relief before arbitration has started?",
        answer:
          "Yes. Section 9 relief is available before arbitral proceedings commence, during them, and after the award but before enforcement. Where relief is granted before commencement, Section 9(2) requires the arbitration to be commenced within ninety days of the order, or such further time as the court allows.",
      },
      {
        question: "Should I go to court under Section 9 or to the tribunal under Section 17?",
        answer:
          "Once the tribunal is constituted, Section 9(3) bars the court from entertaining an application unless it finds that the Section 17 remedy would not be efficacious. Before constitution, Section 9 is the only route. Where relief is needed against a third party the court is generally the better forum, since a tribunal's authority runs only between the parties.",
      },
    ],
    readAlso: [
      {
        label: "Section 9 vs Section 17 — which route to take",
        href: "/insights/section-9-vs-section-17-arbitration-act",
      },
      { label: "What is Section 9?", href: "/glossary/section-9-arbitration-act" },
    ],
    order: 1,
  },
  {
    slug: "section-11-arbitrator-appointment",
    parentSlug: "arbitration-alternative-dispute-resolution",
    title: "Section 11 Arbitrator Appointment",
    seoTitle: "Section 11 Arbitrator Appointment",
    h1: "Section 11 Arbitrator Appointment Applications",
    shortTitle: "Section 11 appointment",
    metaDescription:
      "Where the other side will not appoint, we file the Section 11 application and get the tribunal constituted. Call +91-9899686394.",
    keywords: [
      "Section 11 arbitration application",
      "arbitrator appointment lawyer",
      "Section 11 High Court petition",
      "appointment of arbitrator India",
    ],
    provision: "Section 11, Arbitration and Conciliation Act, 1996",
    intro:
      "When the contract's appointment mechanism fails — usually because the other side simply does not respond to the invocation notice — the tribunal has to be constituted by the court. This is the application that does it.",
    whenToAct:
      "Thirty days after serving the Section 21 notice invoking arbitration, if the other side has not agreed on an arbitrator. Before that the application is premature.",
    whatWeDo: [
      "Section 21 notice invoking arbitration and calling for appointment",
      "Section 11 applications before the High Court or Supreme Court",
      "Opposing appointment where no valid arbitration agreement exists",
      "Applications on independence and impartiality under the Fifth and Seventh Schedules",
      "Challenges to an arbitrator's mandate under Section 14",
    ],
    weNeedFromYou: [
      "The contract and the arbitration clause",
      "The Section 21 notice and proof of service",
      "Any reply received, or evidence that none was",
      "A short note on the dispute and the amount claimed",
      "Your preference on the arbitrator's background, if any",
    ],
    process: [
      {
        title: "Invoke properly first",
        detail:
          "A valid Section 21 notice setting out the dispute and proposing an arbitrator is the foundation. A defective invocation is the most common reason a Section 11 application is resisted.",
      },
      {
        title: "Wait the thirty days",
        detail:
          "The right to apply arises once the other side fails to act within thirty days of the request. Applying earlier is premature.",
      },
      {
        title: "File before the right court",
        detail:
          "The Supreme Court for international commercial arbitration; the High Court for domestic. The court's examination is confined to whether, prima facie, an arbitration agreement exists.",
      },
    ],
    forum: [
      "High Court — domestic arbitration",
      "Supreme Court of India — international commercial arbitration",
    ],
    timeline:
      "Commonly three to nine months from filing to appointment, varying considerably by High Court.",
    costDrivers: [
      "Whether the existence of the arbitration agreement is contested",
      "Whether objections on limitation or arbitrability are raised",
      "The number of hearings before the application is disposed of",
    ],
    faqs: [
      {
        question: "When can a Section 11 application be filed?",
        answer:
          "Once the agreed appointment procedure has failed — typically thirty days after a valid Section 21 notice requesting appointment, where the other party has not acted. Filing before that period expires is premature and invites dismissal.",
      },
      {
        question: "What will the court examine?",
        answer:
          "Following the seven-judge ruling in In Re Interplay (2023), the court's scrutiny at the appointment stage is confined to a prima facie examination of whether an arbitration agreement exists. Questions of validity, including stamping, are left to the tribunal under the kompetenz-kompetenz principle.",
      },
    ],
    readAlso: [
      {
        label: "Section 11 after In Re Interplay",
        href: "/insights/section-11-arbitrator-appointment-in-re-interplay",
      },
      { label: "What is Section 11?", href: "/glossary/section-11-arbitration-act" },
    ],
    order: 2,
  },
  {
    slug: "section-34-setting-aside-award",
    parentSlug: "arbitration-alternative-dispute-resolution",
    title: "Section 34 — Setting Aside an Arbitral Award",
    seoTitle: "Section 34 Petition Lawyers Delhi",
    h1: "Section 34 — Setting Aside an Arbitral Award",
    shortTitle: "Section 34 petition",
    metaDescription:
      "Challenging or defending an arbitral award under Section 34 — the three-month limit, the narrow grounds, and stay of enforcement.",
    keywords: [
      "Section 34 petition lawyer Delhi",
      "set aside arbitral award",
      "challenge arbitration award India",
      "Section 34 time limit",
    ],
    provision: "Section 34, Arbitration and Conciliation Act, 1996",
    intro:
      "A Section 34 petition is not an appeal and the court will not re-examine the merits. The grounds are narrow and the time limit is hard: three months, extendable by thirty days on sufficient cause, and not a day beyond.",
    whenToAct:
      "Immediately on receipt of the award. Three months runs from the date you received it, and the only extension available is a further thirty days on sufficient cause.",
    whatWeDo: [
      "Section 34 petitions to set aside domestic awards",
      "Defending awards against challenge, on behalf of award holders",
      "Applications for stay of enforcement under Section 36(3)",
      "Section 37 appeals against orders under Section 34",
      "Section 33 applications for correction or interpretation before the clock runs",
    ],
    weNeedFromYou: [
      "The award, with the date you received it",
      "The arbitration agreement and the pleadings filed in the arbitration",
      "The record of proceedings and the evidence led",
      "Any Section 33 application already made",
      "Correspondence on the arbitrator's appointment and disclosures",
    ],
    process: [
      {
        title: "Fix the limitation on day one",
        detail:
          "Three months from receipt of the award, plus thirty days on sufficient cause. Courts have consistently held there is no power to condone beyond that, so the date of receipt is established first.",
      },
      {
        title: "Identify a ground that exists",
        detail:
          "Incapacity, invalidity of the agreement, lack of proper notice, the award exceeding the scope of submission, improper tribunal composition, or conflict with the public policy of India including patent illegality in domestic awards. Dissatisfaction with the outcome is not a ground.",
      },
      {
        title: "Deal with enforcement separately",
        detail:
          "Since 2015, filing a Section 34 petition does not automatically stay enforcement. A separate application under Section 36(3) is required and the court may impose conditions, commonly a deposit.",
      },
    ],
    forum: [
      "Commercial Court or the Commercial Division of the High Court, depending on the Specified Value",
    ],
    timeline:
      "Petition filed within three months of receipt. Disposal commonly takes one to three years; a Section 37 appeal adds further time.",
    costDrivers: [
      "The size of the arbitral record that must be examined",
      "Whether a stay of enforcement is contested",
      "Whether the matter proceeds to a Section 37 appeal",
    ],
    faqs: [
      {
        question: "What is the time limit to challenge an arbitral award?",
        answer:
          "Three months from the date on which the party making the application received the award, extendable by a further thirty days on sufficient cause shown. Beyond that the court has no power to condone, and the award becomes enforceable.",
      },
      {
        question: "Does filing a Section 34 petition stop enforcement?",
        answer:
          "No, not since the 2015 amendments. Enforcement is not automatically stayed by filing a challenge; a separate application under Section 36(3) must be made, and the court may grant stay subject to conditions such as depositing part or all of the awarded amount.",
      },
      {
        question: "Can the court review the merits of the award?",
        answer:
          "No. Section 34 is not an appeal. The court does not reappreciate evidence or substitute its own view. For domestic awards the patent illegality ground allows limited scrutiny, but an error of fact or a view the court might not have taken is not sufficient.",
      },
    ],
    readAlso: [
      {
        label: "Section 34 challenge — the grounds explained",
        href: "/insights/section-34-challenge-arbitral-award",
      },
      { label: "What is Section 34?", href: "/glossary/section-34-arbitration-act" },
    ],
    order: 3,
  },

  // --------------------------------------------------- Insolvency (3)
  {
    slug: "cirp-process-representation",
    parentSlug: "insolvency-bankruptcy",
    title: "CIRP Process Representation",
    seoTitle: "CIRP Representation Lawyers Delhi",
    h1: "CIRP Process Representation",
    shortTitle: "CIRP representation",
    metaDescription:
      "Representation through the corporate insolvency resolution process — claims, the committee of creditors, and resolution plans.",
    keywords: [
      "CIRP lawyer Delhi",
      "corporate insolvency resolution process",
      "committee of creditors representation",
      "resolution plan NCLT",
    ],
    provision: "Insolvency and Bankruptcy Code, 2016",
    intro:
      "Once CIRP is admitted the clock is fixed and the decisions are commercial as much as legal. We act for creditors protecting a claim, for corporate debtors resisting admission, and for resolution applicants bidding for the business.",
    whenToAct:
      "Before admission if you are the corporate debtor, and within the claim window if you are a creditor. Claims filed late are admitted only at the resolution professional's discretion.",
    whatWeDo: [
      "Filing and proving claims before the resolution professional",
      "Representation in the committee of creditors and on voting",
      "Resisting admission of Section 7 and Section 9 applications",
      "Advising resolution applicants on plan structure and eligibility under Section 29A",
      "Applications before the NCLT during the process, and appeals to the NCLAT",
    ],
    weNeedFromYou: [
      "The debt documents — agreements, invoices, ledgers and default record",
      "The admission order and the public announcement",
      "Correspondence with the resolution professional",
      "For a resolution applicant, the financial and eligibility documents",
    ],
    process: [
      {
        title: "Secure the position at admission",
        detail:
          "On admission a moratorium under Section 14 bars suits, recovery and enforcement. What you can and cannot do changes immediately, and acting in breach of the moratorium has consequences.",
      },
      {
        title: "File and prove the claim",
        detail:
          "Claims are filed in the prescribed form with proof. Whether a claim is financial or operational determines voting rights on the committee, and that classification is frequently contested.",
      },
      {
        title: "Work the commercial decisions",
        detail:
          "The committee's commercial wisdom is given primacy and is subject to limited judicial review, so the outcome is usually shaped in the committee rather than in litigation afterwards.",
      },
    ],
    forum: [
      "National Company Law Tribunal",
      "National Company Law Appellate Tribunal",
    ],
    timeline:
      "CIRP is to be completed within 330 days including extensions and litigation time, though in practice many processes run longer.",
    costDrivers: [
      "Whether the claim classification is contested",
      "The number of applications filed during the process",
      "Whether the matter proceeds to the NCLAT",
    ],
    faqs: [
      {
        question: "What happens when CIRP is admitted?",
        answer:
          "A moratorium under Section 14 comes into force, barring institution or continuation of suits, transfer of assets, and enforcement of security interests. An interim resolution professional takes over management, claims are invited by public announcement, and the committee of creditors is constituted.",
      },
      {
        question: "Does an operational creditor get a vote?",
        answer:
          "Generally not. The committee of creditors comprises financial creditors, who vote in proportion to the debt owed to them. Operational creditors are represented only where the prescribed proportions are met, which is why the financial-versus-operational classification of a claim matters so much.",
      },
    ],
    readAlso: [
      { label: "What is CIRP?", href: "/glossary/cirp" },
      {
        label: "What is the Committee of Creditors?",
        href: "/glossary/committee-of-creditors",
      },
    ],
    order: 4,
  },
  {
    slug: "operational-creditor-petition",
    parentSlug: "insolvency-bankruptcy",
    title: "Operational Creditor Petition before the NCLT",
    seoTitle: "Operational Creditor NCLT Petition",
    h1: "Operational Creditor Petition before the NCLT",
    shortTitle: "Operational creditor petition",
    metaDescription:
      "Section 8 demand notice and Section 9 petition for unpaid operational debt above the one crore threshold. Call +91-9899686394.",
    keywords: [
      "Section 9 IBC petition",
      "operational creditor NCLT",
      "Section 8 demand notice IBC",
      "insolvency petition for unpaid dues",
    ],
    provision: "Insolvency and Bankruptcy Code, 2016 — Sections 8 and 9",
    intro:
      "An operational creditor with an undisputed debt above the threshold can petition to put the debtor into insolvency. It is a powerful lever, but the tribunals have discouraged its use purely as a debt-collection tactic, and an existing dispute will defeat the petition.",
    whenToAct:
      "After the Section 8 demand notice has been served and ten days have passed without payment or a notice of dispute.",
    whatWeDo: [
      "Section 8 demand notices in the prescribed form",
      "Section 9 petitions before the NCLT",
      "Defending Section 9 petitions by establishing a pre-existing dispute",
      "Advising on whether insolvency is the right route at all, against recovery alternatives",
      "Appeals to the NCLAT",
    ],
    weNeedFromYou: [
      "Invoices, purchase orders and proof of delivery or completion",
      "Ledger and statement of account showing the default",
      "Any correspondence from the debtor — particularly anything disputing the debt",
      "Proof that the debt exceeds the statutory threshold",
    ],
    process: [
      {
        title: "Test for a pre-existing dispute first",
        detail:
          "If the debtor raised a quality, delay or counter-claim dispute before the demand notice, the petition will be rejected. This is the single most common reason Section 9 petitions fail, and it is assessed before anything is filed.",
      },
      {
        title: "Serve the Section 8 notice",
        detail:
          "In the prescribed form, giving ten days to pay or to bring an existing dispute to notice.",
      },
      {
        title: "File the petition",
        detail:
          "With the invoices, proof of delivery, the demand notice and an affidavit that no notice of dispute was received.",
      },
    ],
    forum: [
      "National Company Law Tribunal",
      "National Company Law Appellate Tribunal",
    ],
    timeline:
      "Ten days after the Section 8 notice before filing. Admission commonly takes three to twelve months depending on bench load and whether a dispute is alleged.",
    costDrivers: [
      "Whether a pre-existing dispute is raised, which converts the matter into a contested hearing",
      "The number of adjournments before admission",
      "Whether the debtor settles, which happens in a material proportion of cases",
    ],
    faqs: [
      {
        question: "What is the minimum amount for an IBC petition?",
        answer:
          "The threshold for initiating a corporate insolvency resolution process is one crore rupees. Below that the Code is not available and the remedy lies in a civil or summary suit, arbitration, or the MSMED route if you are a registered micro or small enterprise.",
      },
      {
        question: "What defeats a Section 9 petition?",
        answer:
          "A pre-existing dispute. If the corporate debtor can show that a genuine dispute over the debt existed before the Section 8 demand notice was received — on quality, delay, or a counter-claim — the petition must be rejected. The dispute need not be proved, only shown to be genuine and not spurious.",
      },
    ],
    readAlso: [
      { label: "What is an operational creditor?", href: "/glossary/operational-creditor" },
      { label: "What is CIRP?", href: "/glossary/cirp" },
    ],
    order: 5,
  },
  {
    slug: "nclt-filing-and-representation",
    parentSlug: "insolvency-bankruptcy",
    title: "NCLT Filing and Representation",
    seoTitle: "NCLT Lawyers in Delhi",
    h1: "NCLT Filing & Representation",
    shortTitle: "NCLT representation",
    metaDescription:
      "Filing and appearing before the NCLT — insolvency, oppression and mismanagement, compromises and company petitions. Call +91-9899686394.",
    keywords: [
      "NCLT lawyer Delhi",
      "NCLT filing procedure",
      "oppression and mismanagement petition",
      "NCLT representation India",
    ],
    provision: "Companies Act, 2013; Insolvency and Bankruptcy Code, 2016",
    intro:
      "The NCLT hears more than insolvency: oppression and mismanagement, compromises and arrangements, revival of struck-off companies, and a range of company petitions. We file and appear across that jurisdiction.",
    whenToAct:
      "As soon as the cause of action arises. Several NCLT remedies carry their own limitation, and delay is routinely taken as a ground of objection.",
    whatWeDo: [
      "Insolvency applications under Sections 7, 9 and 10",
      "Oppression and mismanagement petitions under Sections 241 and 242",
      "Schemes of compromise, arrangement and amalgamation",
      "Restoration of struck-off companies under Section 252",
      "Appeals to the NCLAT",
    ],
    weNeedFromYou: [
      "The company's incorporation and filing record",
      "Board and shareholder resolutions relevant to the dispute",
      "Shareholding pattern and share transfer records",
      "The documents underlying the claim or grievance",
    ],
    process: [
      {
        title: "Establish standing and threshold",
        detail:
          "Oppression petitions require the prescribed shareholding or members, or a waiver from the Tribunal. Insolvency applications require the debt threshold. Standing is settled before filing.",
      },
      {
        title: "File in the prescribed form",
        detail:
          "Each remedy has its own form, fee and annexure requirements under the NCLT Rules. Defective filings are returned and cost weeks.",
      },
      {
        title: "Appear and prosecute",
        detail:
          "Matters proceed through admission, replies, rejoinders and hearing, with interim applications as the facts require.",
      },
    ],
    forum: [
      "National Company Law Tribunal, New Delhi and other benches",
      "National Company Law Appellate Tribunal",
    ],
    timeline:
      "Varies widely by remedy. Restoration petitions commonly six to twelve months; oppression petitions often considerably longer.",
    costDrivers: [
      "The nature of the remedy and the number of parties",
      "Whether interim relief is sought and contested",
      "The volume of corporate records to be examined",
    ],
    faqs: [
      {
        question: "What matters does the NCLT hear?",
        answer:
          "Corporate insolvency under the IBC, oppression and mismanagement under Sections 241 and 242 of the Companies Act, schemes of compromise and arrangement, restoration of struck-off companies under Section 252, class actions, and a range of other company petitions.",
      },
      {
        question: "Who can file an oppression and mismanagement petition?",
        answer:
          "Members holding not less than one-tenth of the issued share capital, or not less than one hundred members or one-tenth of the total number of members, whichever is less, in a company having share capital. The Tribunal has power to waive these requirements in appropriate cases.",
      },
    ],
    readAlso: [
      { label: "What is CIRP?", href: "/glossary/cirp" },
      { label: "Strike-off and revival before the NCLT", href: "/services/company-registration-roc-compliance/company-strike-off-revival-nclt" },
    ],
    order: 6,
  },
];

export const getPracticeSupport = (): PracticeSupport[] =>
  [...practiceSupport].sort((a, b) => a.order - b.order);

export const getSupportBySlug = (
  parentSlug: string,
  slug: string
): PracticeSupport | undefined =>
  practiceSupport.find((s) => s.parentSlug === parentSlug && s.slug === slug);

export const getSupportFor = (parentSlug: string): PracticeSupport[] =>
  getPracticeSupport().filter((s) => s.parentSlug === parentSlug);

export const getAllSupportPairs = (): { slug: string; topic: string }[] =>
  practiceSupport.map((s) => ({ slug: s.parentSlug, topic: s.slug }));

export const getRelatedSupport = (
  parentSlug: string,
  slug: string,
  limit = 3
): PracticeSupport[] =>
  getSupportFor(parentSlug)
    .filter((s) => s.slug !== slug)
    .slice(0, limit);
