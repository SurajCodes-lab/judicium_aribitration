/**
 * Sub-service pages — Appendix A of the SEO Implementation Plan (39 planned).
 *
 * A service pillar answers "we handle GST notices". A sub-service answers the
 * narrower, higher-intent query beneath it: "ITC mismatch GSTR-2A vs 3B",
 * "e-way bill detention", "DIR-3 KYC". Those are the terms a business actually
 * types, and they are far less contested than the pillar term.
 *
 * THIRTY-ONE OF THE THIRTY-NINE ARE BUILT HERE. Eight were deliberately not
 * created, because they duplicate pages built in Week 1 and would compete with
 * them for the same query:
 *
 *   Reassessment under Section 148      -> /services/income-tax-notice-reply/section-148-reassessment-notice
 *   Replying to a legal notice received -> /services/legal-notice-drafting-reply/reply-to-legal-notice
 *   Legal notice for recovery of dues   -> /formats/legal-notice-money-recovery-format
 *   MSME Samadhaan delayed payment      -> /services/money-recovery-msme-samadhaan/msme-samadhaan-reference
 *   Summary suit under Order XXXVII     -> /services/money-recovery-msme-samadhaan/order-37-summary-suit
 *
 * The three arbitration sub-services (Section 9, 11 and 34) are also not here.
 * The firm already has cornerstone insight articles on each of those sections,
 * and the plan separately provides for "practice area supporting pages", which
 * is their correct home — beneath the arbitration practice area rather than in
 * the service layer. See the W2-02 implementation log entry.
 */

export interface SubServiceStep {
  title: string;
  detail: string;
}

export interface SubServiceFAQ {
  question: string;
  answer: string;
}

export interface SubService {
  slug: string;
  /** Service pillar this sits beneath — must match a ServiceLine slug. */
  parentSlug: string;
  title: string;
  /** The <title>. Keep short — layout.tsx appends " | Judicium Arbitration". */
  seoTitle: string;
  h1: string;
  shortTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  whoFor: string[];
  whatWeDo: string[];
  process: SubServiceStep[];
  statutes: string[];
  timeline: string;
  faqs: SubServiceFAQ[];
  order: number;
}

export const subServices: SubService[] = [
  // ============================================================== GST (6)
  {
    slug: "gst-registration-cancellation-revocation",
    parentSlug: "gst-notice-reply",
    title: "GST Registration Cancellation and Revocation",
    seoTitle: "GST Registration Revocation Lawyers",
    h1: "GST Registration Cancellation & Revocation",
    shortTitle: "Cancellation & revocation",
    metaDescription:
      "Cancelled GST registration? We file REG-21 revocation, clear the return backlog, and contest retrospective cancellation. Call +91-9899686318.",
    keywords: [
      "GST registration revocation",
      "GST cancellation revocation lawyer",
      "REG-21 application",
      "restore cancelled GST registration",
      "retrospective GST cancellation",
    ],
    intro:
      "A cancelled registration stops the business trading on credit: you cannot issue tax invoices and customers lose input credit. Revocation is possible, but it requires the entire return backlog cleared and the dues paid first, and the window is short.",
    whoFor: [
      "Businesses whose registration was cancelled for non-filing",
      "Registrations cancelled with retrospective effect, disturbing customer credit",
      "Taxpayers whose revocation application has been rejected",
      "Businesses that voluntarily surrendered and now need to restart",
    ],
    whatWeDo: [
      "Revocation applications in Form REG-21, with the return backlog regularised",
      "Replies to REG-23 notices seeking further information on a revocation application",
      "Appeals under Section 107 where revocation is refused",
      "Writ petitions challenging retrospective cancellation dates",
      "Fresh registration where revocation is time-barred",
    ],
    process: [
      {
        title: "Clear the backlog first",
        detail:
          "Every outstanding return must be filed and the tax, interest and late fee paid. A revocation application filed before this is refused as a matter of course.",
      },
      {
        title: "File REG-21 within the window",
        detail:
          "Ordinarily within 30 days of service of the cancellation order, with the filings and challans annexed. That period has been extended by notification on several occasions, so a delay is not always fatal.",
      },
      {
        title: "Contest the retrospective date",
        detail:
          "Where cancellation is backdated, customers lose credit for the intervening period. Courts have required officers to give reasons for a retrospective date and have set orders aside where that consequence was not considered.",
      },
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017 — Sections 29, 30, 107",
      "Central Goods and Services Tax Rules, 2017 — Rules 22, 23",
    ],
    timeline:
      "Revocation ordinarily applied for within 30 days of the cancellation order; the officer must decide within 30 days of a complete application. An appeal adds six to eighteen months.",
    faqs: [
      {
        question: "Can a cancelled GST registration be restored?",
        answer:
          "Yes, by an application for revocation in Form REG-21, ordinarily within 30 days of service of the cancellation order. All outstanding returns must be filed and the tax, interest and late fee paid before the application will succeed. Where that period has lapsed, extensions have been granted by notification and an appeal under Section 107 remains available.",
      },
      {
        question: "My registration was cancelled with retrospective effect.",
        answer:
          "That is a serious consequence, because customers lose the input credit they claimed for the intervening period and may seek recovery from you. Courts have held that the officer must apply his mind to the retrospective date and give reasons, and orders have been set aside where the effect on third parties was not considered.",
      },
    ],
    order: 1,
  },
  {
    slug: "gst-appeal-filing-representation",
    parentSlug: "gst-notice-reply",
    title: "GST Appeal Filing and Representation",
    seoTitle: "GST Appeal Lawyers in Delhi",
    h1: "GST Appeal Filing & Representation",
    shortTitle: "GST appeals",
    metaDescription:
      "First appeals under Section 107 and writ petitions where no appellate remedy is efficacious. Pre-deposit, limitation and grounds. Call +91-9899686318.",
    keywords: [
      "GST appeal lawyer Delhi",
      "Section 107 GST appeal",
      "GST appellate authority",
      "GST appeal pre-deposit",
      "GST tribunal appeal",
    ],
    intro:
      "An appeal against a GST demand must be filed within three months, with a pre-deposit of ten per cent of the disputed tax. The limitation is strict and the Supreme Court has held it cannot be extended beyond one further month, so the first question in any appeal is whether time still runs.",
    whoFor: [
      "Businesses with a confirmed demand under Section 73 or 74",
      "Taxpayers whose refund claim has been rejected",
      "Registrations cancelled where revocation has been refused",
      "Anyone facing recovery under Section 79 while a challenge is contemplated",
    ],
    whatWeDo: [
      "First appeals in Form APL-01 before the Appellate Authority",
      "Grounds drafted on both the merits and the procedure followed below",
      "Applications for stay of recovery pending appeal",
      "Writ petitions where the Appellate Tribunal is not constituted or natural justice was denied",
      "Representation at hearing and written submissions",
    ],
    process: [
      {
        title: "Fix the limitation from communication",
        detail:
          "Three months runs from communication of the order, not its date. One further month can be condoned on sufficient cause; beyond that the authority has no power.",
      },
      {
        title: "Pay the pre-deposit",
        detail:
          "Ten per cent of the tax in dispute, in addition to the admitted liability. The appeal is not entertained without it.",
      },
      {
        title: "Draft on procedure as well as merits",
        detail:
          "Many orders fall on procedure — no hearing granted, grounds not put to the taxpayer, or an order travelling beyond the show cause notice. These are often stronger than the merits.",
      },
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017 — Sections 107, 112, 75(4), 79",
      "Central Goods and Services Tax Rules, 2017 — Rule 108",
    ],
    timeline:
      "Appeal filed within three months of communication. Disposal commonly takes six to eighteen months depending on the bench.",
    faqs: [
      {
        question: "What is the pre-deposit for a GST appeal?",
        answer:
          "Ten per cent of the tax in dispute, besides the admitted liability in full. Without it the appeal will not be entertained. A further deposit applies for a second appeal to the Appellate Tribunal under Section 112.",
      },
      {
        question: "Can I file a writ instead of an appeal?",
        answer:
          "Only in limited circumstances — where the order was passed without jurisdiction, in breach of natural justice, or where the appellate remedy is not efficacious, such as where the Appellate Tribunal has not been constituted for the relevant period. Courts generally decline writs where an appeal was available and was not taken.",
      },
    ],
    order: 2,
  },
  {
    slug: "itc-mismatch-gstr-2a-3b",
    parentSlug: "gst-notice-reply",
    title: "Input Tax Credit Mismatch between GSTR-2A and 3B",
    seoTitle: "ITC Mismatch GSTR-2A vs 3B",
    h1: "Input Tax Credit Mismatch — GSTR-2A and 3B",
    shortTitle: "ITC mismatch",
    metaDescription:
      "Credit claimed in 3B but not reflected in 2A or 2B? We reconcile, defend Section 16(2)(c) supplier-default cases and reply to the notice. Call +91-9899686318.",
    keywords: [
      "ITC mismatch GSTR-2A 3B",
      "input tax credit mismatch notice",
      "Section 16(2)(c) ITC",
      "GSTR-2B reconciliation notice",
      "ITC reversal notice reply",
    ],
    intro:
      "The most common GST dispute in India. Credit claimed in GSTR-3B that does not appear in GSTR-2A or 2B triggers an automated notice, and the department's position is usually that the credit must be reversed with interest regardless of why the supplier defaulted.",
    whoFor: [
      "Businesses served an ASMT-10 or DRC-01 over credit mismatch",
      "Recipients whose suppliers filed late, filed wrongly, or did not file at all",
      "Taxpayers facing credit reversal with interest under Section 50",
      "Businesses where credit was blocked under Rule 86A",
    ],
    whatWeDo: [
      "Period-wise reconciliation of GSTR-3B, 2A and 2B against the purchase register",
      "Defence under Section 16(2)(c) where the supplier defaulted but you acted bona fide",
      "Replies to ASMT-10 and DRC-01 on credit mismatch",
      "Challenges to blocking of credit under Rule 86A",
      "Recovery action against defaulting suppliers under the contract",
    ],
    process: [
      {
        title: "Reconcile before arguing",
        detail:
          "Classify each difference: supplier filed late so credit appears in a later period, invoice reported under a wrong GSTIN, credit note not accounted, or genuine ineligible credit. Most of the gap usually resolves here.",
      },
      {
        title: "Build the bona fide case",
        detail:
          "Valid tax invoice, proof of receipt of goods or services, and proof of payment to the supplier including the tax. Several High Courts have read Section 16(2)(c) down where the recipient holds all of these.",
      },
      {
        title: "Reply and preserve the record",
        detail:
          "The reply annexes the reconciliation and supplier filings, and reserves the right to recover from the supplier if the credit is ultimately denied.",
      },
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017 — Sections 16, 41, 50, 73, 74",
      "Central Goods and Services Tax Rules, 2017 — Rules 36(4), 86A",
    ],
    timeline:
      "Reconciliation ordinarily takes one to three weeks depending on volume. Adjudication follows the notice timeline.",
    faqs: [
      {
        question: "Can credit be denied because my supplier did not pay the tax?",
        answer:
          "Section 16(2)(c) conditions credit on the tax having been actually paid to the government, and departments invoke it routinely. The position is contested: several High Courts have read the provision down where the recipient acted bona fide, holds a valid invoice, received the goods or services and paid the supplier including the tax. The defence turns heavily on that documentation.",
      },
      {
        question: "My credit has been blocked under Rule 86A.",
        answer:
          "Rule 86A allows the Commissioner to block the electronic credit ledger where there is reason to believe credit was fraudulently availed. The power requires recorded reasons and cannot exceed one year. Blocking without reasons, or in excess of the credit alleged to be wrongly availed, has been set aside repeatedly.",
      },
    ],
    order: 3,
  },
  {
    slug: "gst-audit-representation",
    parentSlug: "gst-notice-reply",
    title: "GST Audit Representation",
    seoTitle: "GST Audit Representation Lawyers",
    h1: "GST Audit Representation",
    shortTitle: "GST audit",
    metaDescription:
      "Representation through departmental audit under Section 65 and special audit under Section 66, from ADT-01 to the ADT-02 findings. Call +91-9899686318.",
    keywords: [
      "GST audit representation",
      "Section 65 GST audit",
      "ADT-01 notice",
      "GST special audit Section 66",
      "departmental audit GST",
    ],
    intro:
      "A departmental audit examines records for a financial year and commonly ends in a demand. What is conceded during the audit is very difficult to retract afterwards, so the representation matters as much as the paperwork.",
    whoFor: [
      "Businesses served Form ADT-01 commencing an audit",
      "Taxpayers directed to a special audit under Section 66",
      "Businesses facing audit findings in Form ADT-02",
      "Entities with multiple registrations audited in parallel",
    ],
    whatWeDo: [
      "Preparation of the record before the audit team attends",
      "Attendance and representation through the audit",
      "Written responses to each observation before findings are finalised",
      "Replies to the show cause notice that follows the audit",
      "Appeals against demands arising from audit findings",
    ],
    process: [
      {
        title: "Prepare the record",
        detail:
          "Returns, books, reconciliations, agreements and ITC registers assembled and checked for internal consistency before the audit begins. Inconsistencies found by the team are far more expensive than those found by you.",
      },
      {
        title: "Answer observations as they arise",
        detail:
          "Each observation is answered in writing during the audit rather than after. An observation left unanswered hardens into a finding.",
      },
      {
        title: "Contest the findings",
        detail:
          "ADT-02 findings are not a demand. The demand follows in a show cause notice, and that is where the findings are contested on the merits.",
      },
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017 — Sections 65, 66, 73, 74",
      "Central Goods and Services Tax Rules, 2017 — Rules 101, 102",
    ],
    timeline:
      "An audit under Section 65 must ordinarily be completed within three months of commencement, extendable by six months. The notice period must be at least fifteen working days.",
    faqs: [
      {
        question: "How much notice must the department give before an audit?",
        answer:
          "At least fifteen working days, by notice in Form ADT-01. The audit is to be completed within three months of commencement, extendable by a further six months by the Commissioner for recorded reasons.",
      },
      {
        question: "Are audit findings a demand?",
        answer:
          "No. Findings are communicated in Form ADT-02. If the department proposes to recover tax it must issue a show cause notice under Section 73 or 74, and the findings are then contested on the merits in reply to that notice.",
      },
    ],
    order: 4,
  },
  {
    slug: "gst-refund-rejection-appeal",
    parentSlug: "gst-notice-reply",
    title: "GST Refund Rejection and Appeal",
    seoTitle: "GST Refund Rejection Appeal",
    h1: "GST Refund Rejection & Appeal",
    shortTitle: "Refund rejection",
    metaDescription:
      "Refund rejected or withheld? Replies to RFD-08 show cause, appeals against RFD-06 rejection, and interest on delayed refund. Call +91-9899686318.",
    keywords: [
      "GST refund rejection appeal",
      "RFD-08 reply",
      "GST refund rejected",
      "inverted duty refund",
      "export refund GST lawyer",
    ],
    intro:
      "Exporters and businesses in an inverted duty structure carry refunds as working capital. A rejection, or a refund simply not processed, is a cash-flow problem before it is a legal one — and interest runs against the department once the statutory period passes.",
    whoFor: [
      "Exporters with IGST refund or LUT refund withheld",
      "Businesses in an inverted duty structure claiming accumulated credit",
      "Taxpayers served Form RFD-08 proposing rejection",
      "Anyone whose refund has been sanctioned but not paid",
    ],
    whatWeDo: [
      "Replies to RFD-08 show cause notices within the fifteen-day window",
      "Appeals under Section 107 against rejection in Form RFD-06",
      "Claims for interest under Section 56 on delayed refund",
      "Writ petitions where refund is withheld without an order",
      "Re-filing where rejection was on a curable deficiency",
    ],
    process: [
      {
        title: "Identify why it was rejected",
        detail:
          "A deficiency memo in RFD-03 is curable by re-filing. A rejection in RFD-06 after RFD-08 is an appealable order. The two require entirely different responses.",
      },
      {
        title: "Reply within fifteen days",
        detail:
          "RFD-08 allows fifteen days to reply in Form RFD-09. Missing it produces a rejection that must then be appealed with the attendant delay.",
      },
      {
        title: "Claim the interest",
        detail:
          "Section 56 provides interest where refund is not made within sixty days of a complete application. It is frequently overlooked and should be claimed expressly.",
      },
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017 — Sections 54, 56, 107",
      "Central Goods and Services Tax Rules, 2017 — Rules 89 to 96",
    ],
    timeline:
      "Refund is to be sanctioned within sixty days of a complete application, after which interest runs. An appeal against rejection adds six to eighteen months.",
    faqs: [
      {
        question: "What is the time limit to claim a GST refund?",
        answer:
          "Ordinarily two years from the relevant date as defined in the explanation to Section 54, which varies by the type of refund. For exports it generally runs from the date the goods leave India or the date of receipt of payment for services.",
      },
      {
        question: "Can I claim interest if my refund is delayed?",
        answer:
          "Yes. Section 56 provides interest where refund is not made within sixty days of receipt of a complete application, at the notified rate, and at a higher rate where the refund arises from an order in appeal. It should be claimed expressly rather than assumed.",
      },
    ],
    order: 5,
  },
  {
    slug: "eway-bill-penalty-detention",
    parentSlug: "gst-notice-reply",
    title: "E-Way Bill Penalty and Goods Detention",
    seoTitle: "E-Way Bill Detention & Penalty",
    h1: "E-Way Bill Penalty & Goods Detention",
    shortTitle: "E-way bill detention",
    metaDescription:
      "Goods detained in transit? We handle MOV-07 replies, Section 129 penalty, release of goods and vehicle, and appeals. Call +91-9899686318.",
    keywords: [
      "e-way bill penalty",
      "goods detention GST",
      "Section 129 GST penalty",
      "MOV-07 reply",
      "vehicle detention GST lawyer",
    ],
    intro:
      "Detention stops a consignment and a vehicle, and the cost compounds daily. The statutory scheme moves quickly — notice in MOV-07 within seven days and an order in MOV-09 within seven days of that — so the response has to be immediate.",
    whoFor: [
      "Consignors and consignees whose goods have been detained in transit",
      "Transporters whose vehicle has been seized",
      "Businesses penalised for an expired or incorrect e-way bill",
      "Anyone facing confiscation proceedings under Section 130",
    ],
    whatWeDo: [
      "Immediate action for release of goods and vehicle",
      "Replies to MOV-07 notices within the statutory window",
      "Contesting penalty under Section 129 where the error was clerical",
      "Appeals against MOV-09 penalty orders",
      "Writ petitions where detention continues without an order",
    ],
    process: [
      {
        title: "Act the same day",
        detail:
          "Obtain the MOV-01 statement, MOV-02 inspection order and the physical verification report. Detention costs accrue daily and the statutory clock is short.",
      },
      {
        title: "Characterise the defect",
        detail:
          "A typographical error in the vehicle number or a bill expiring in transit through no fault of the transporter is treated very differently from goods moving without any e-way bill. Courts have repeatedly held minor discrepancies do not justify Section 129 penalty.",
      },
      {
        title: "Secure release, then contest",
        detail:
          "Goods can be released on payment or on furnishing security, and the penalty contested afterwards. Keeping the consignment detained while arguing is usually the costlier course.",
      },
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017 — Sections 68, 129, 130",
      "Central Goods and Services Tax Rules, 2017 — Rule 138 and 138A",
    ],
    timeline:
      "Notice in MOV-07 within seven days of detention; order in MOV-09 within seven days of the notice. Release on payment or security is usually achievable within days.",
    faqs: [
      {
        question: "Can goods be detained for a minor e-way bill error?",
        answer:
          "They are, frequently — but courts have repeatedly held that a typographical error in the vehicle number, or a bill that expired in transit due to a breakdown, does not reflect an intention to evade tax and does not justify penalty under Section 129. Circulars also direct that minor discrepancies attract only a nominal penalty.",
      },
      {
        question: "How do I get the goods released quickly?",
        answer:
          "Goods and the conveyance can be released on payment of the penalty, or on furnishing security in the prescribed form. Securing release first and contesting the penalty afterwards is almost always cheaper than leaving the consignment detained while the dispute runs.",
      },
    ],
    order: 6,
  },

  // ======================================================= Income tax (5)
  {
    slug: "income-tax-scrutiny-representation",
    parentSlug: "income-tax-notice-reply",
    title: "Scrutiny Assessment Representation",
    seoTitle: "Income Tax Scrutiny Representation",
    h1: "Scrutiny Assessment Representation",
    shortTitle: "Scrutiny representation",
    metaDescription:
      "Representation through faceless scrutiny assessment — building the record, answering every query, and responding to the draft order. Call +91-9899686318.",
    keywords: [
      "income tax scrutiny representation",
      "faceless assessment lawyer",
      "scrutiny assessment India",
      "draft assessment order response",
      "Section 144B assessment",
    ],
    intro:
      "Scrutiny under faceless assessment is conducted entirely on the record you upload. Conducting the assessment well is a different exercise from replying to the first notice: it runs over months, across several notices, and ends with a draft order you have one chance to answer.",
    whoFor: [
      "Businesses and individuals selected for scrutiny",
      "Assessees facing additions proposed in a draft order",
      "Taxpayers whose earlier submissions were not considered",
      "Anyone where a substantial variation to returned income is proposed",
    ],
    whatWeDo: [
      "Managing the full sequence of notices through to assessment",
      "Building an indexed evidentiary record tied to each query",
      "Responses to show cause notices and draft assessment orders",
      "Requests for video hearing where a variation is proposed",
      "Rectification under Section 154 for arithmetical and credit errors",
    ],
    process: [
      {
        title: "Check jurisdiction first",
        detail:
          "The Section 143(2) notice must be served within three months from the end of the financial year in which the return was filed. Service outside that window is a jurisdictional defect.",
      },
      {
        title: "Build one coherent record",
        detail:
          "Each notice in the sequence is answered as part of a single case, not as an isolated query, so the record reads consistently to an officer who has not met you.",
      },
      {
        title: "Answer the draft order properly",
        detail:
          "Where a variation prejudicial to you is proposed, a show cause and draft order must precede the final order. That response is the last opportunity before an appeal becomes necessary.",
      },
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 143(2), 143(3), 144, 144B, 154",
    ],
    timeline:
      "An assessment runs from the Section 143(2) notice to the statutory completion deadline for the year, commonly nine to eighteen months in total.",
    faqs: [
      {
        question: "Can I get a hearing under faceless assessment?",
        answer:
          "Yes, by video conferencing, on a written request made through the portal. Where a variation prejudicial to you is proposed, the scheme contemplates an opportunity being given, and refusing a request in such a case is itself a ground of challenge.",
      },
      {
        question: "What happens if I miss a portal deadline?",
        answer:
          "The officer may proceed to best judgment assessment under Section 144 on the material available, and penalty under Section 272A can follow for non-compliance. An adjournment requested before the deadline, with a reason, is almost always granted and is far better than silence.",
      },
    ],
    order: 7,
  },
  {
    slug: "capital-gains-scrutiny",
    parentSlug: "income-tax-notice-reply",
    title: "Capital Gains Scrutiny",
    seoTitle: "Capital Gains Scrutiny Lawyers",
    h1: "Capital Gains Scrutiny",
    shortTitle: "Capital gains",
    metaDescription:
      "Property sale under scrutiny? Section 50C valuation, cost of improvement, and exemptions under Sections 54, 54F and 54EC. Call +91-9899686318.",
    keywords: [
      "capital gains scrutiny notice",
      "Section 50C valuation dispute",
      "Section 54 exemption denied",
      "property sale income tax notice",
      "capital gains lawyer Delhi",
    ],
    intro:
      "Property transactions are a standard trigger for scrutiny, because the department compares the sale consideration against the stamp duty value automatically. Most disputes turn on three things: valuation under Section 50C, what counts as cost of improvement, and whether an exemption claim was properly made.",
    whoFor: [
      "Sellers whose sale consideration is below the circle rate",
      "Taxpayers whose Section 54, 54F or 54EC exemption has been questioned",
      "Assessees disputing cost of acquisition or indexation",
      "Inherited or gifted property where the prior holding period is in issue",
    ],
    whatWeDo: [
      "Section 50C disputes, including reference to the Valuation Officer",
      "Defending exemption claims under Sections 54, 54B, 54EC and 54F",
      "Cost of acquisition, improvement and indexation disputes",
      "Joint ownership and apportionment of gains",
      "Appeals before CIT(A) and the Tribunal",
    ],
    process: [
      {
        title: "Test the Section 50C substitution",
        detail:
          "Where the consideration is below the stamp duty value, the latter is deemed the consideration — but a tolerance band applies, and on objection the officer must refer the valuation to the Departmental Valuation Officer.",
      },
      {
        title: "Evidence the cost side",
        detail:
          "Cost of acquisition, improvement and transfer expenses are frequently disallowed for want of proof. Registry, bank records, contractor bills and brokerage receipts carry the claim.",
      },
      {
        title: "Secure the exemption",
        detail:
          "Section 54 and 54F turn on timelines and on deposit in the Capital Gains Account Scheme where reinvestment is not completed before the return is due. Both are commonly missed.",
      },
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 45, 48, 50C, 54, 54EC, 54F, 55",
    ],
    timeline:
      "Follows the scrutiny assessment timeline. A Valuation Officer reference typically adds three to six months.",
    faqs: [
      {
        question: "The sale price was below the circle rate. What happens?",
        answer:
          "Section 50C deems the stamp duty value to be the full value of consideration, subject to a tolerance band under which a modest difference is ignored. If you dispute the stamp duty value, the officer is required to refer the valuation to the Departmental Valuation Officer, and the lower of the two is adopted.",
      },
      {
        question: "My Section 54 exemption was denied for a timing issue.",
        answer:
          "This is common and often reversible. Where reinvestment is not completed before the due date for filing the return, the unutilised amount must be deposited in the Capital Gains Account Scheme to preserve the exemption. Courts have also taken a liberal view where the investment was in fact made within the statutory period even if the deposit formality was missed.",
      },
    ],
    order: 8,
  },
  {
    slug: "cash-deposit-unexplained-credit-scrutiny",
    parentSlug: "income-tax-notice-reply",
    title: "Cash Deposit and Unexplained Credit Scrutiny",
    seoTitle: "Unexplained Cash Credit Scrutiny",
    h1: "Cash Deposit & Unexplained Credit Scrutiny",
    shortTitle: "Unexplained credits",
    metaDescription:
      "Section 68 and 69A additions carry tax at 60% plus surcharge. Establishing identity, creditworthiness and genuineness. Call +91-9899686318.",
    keywords: [
      "Section 68 unexplained cash credit",
      "cash deposit notice income tax",
      "Section 69A addition",
      "unsecured loan scrutiny",
      "Section 115BBE tax rate",
    ],
    intro:
      "Additions under Sections 68 to 69D are taxed under Section 115BBE at sixty per cent plus surcharge and cess, with no deduction allowed. The rate is what makes these the most expensive additions in an assessment, and the defence turns on a well-established three-part test.",
    whoFor: [
      "Businesses questioned on cash deposits, including demonetisation-period deposits",
      "Assessees whose unsecured loans or share capital are in issue",
      "Taxpayers facing additions on sundry creditors or sales",
      "Anyone facing Section 115BBE rates on an addition",
    ],
    whatWeDo: [
      "Establishing identity, creditworthiness and genuineness for each credit",
      "Cash book and sales reconciliation to explain deposits",
      "Defending share application and unsecured loan credits",
      "Contesting the application of Section 115BBE to business income",
      "Appeals where additions are sustained",
    ],
    process: [
      {
        title: "Satisfy the three-part test",
        detail:
          "For each credit: the identity of the creditor, the creditworthiness of the creditor, and the genuineness of the transaction. All three must be established; proving only identity is the most common failure.",
      },
      {
        title: "Trace the source",
        detail:
          "Bank statements of the creditor, their return of income, confirmations on letterhead, and the mode of transfer. Cash transactions attract far closer scrutiny than banking channel transfers.",
      },
      {
        title: "Contest the rate",
        detail:
          "Where the amount is in truth business receipt already recorded in the books, the application of Section 115BBE is arguable, and the distinction is worth a great deal given the rate.",
      },
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 68, 69, 69A, 69B, 69C, 115BBE",
    ],
    timeline: "Follows the scrutiny assessment timeline for the year.",
    faqs: [
      {
        question: "What must I prove for an unsecured loan to be accepted?",
        answer:
          "Three things, cumulatively: the identity of the lender, their creditworthiness to advance that sum, and the genuineness of the transaction. Identity alone — a PAN and a confirmation — is not enough; the lender's own financial capacity and the trail of funds must also be shown.",
      },
      {
        question: "Why is the tax rate so high on these additions?",
        answer:
          "Section 115BBE taxes income referred to in Sections 68 to 69D at sixty per cent plus surcharge and cess, and no deduction or set-off of losses is allowed against it. That is why characterising the receipt correctly — as recorded business income rather than an unexplained credit — is often worth more than any other argument in the case.",
      },
    ],
    order: 9,
  },
  {
    slug: "tds-default-notices",
    parentSlug: "income-tax-notice-reply",
    title: "TDS Default Notices",
    seoTitle: "TDS Default Notice Lawyers",
    h1: "TDS Default Notices & Representation",
    shortTitle: "TDS defaults",
    metaDescription:
      "Short deduction, late deposit and Section 201 demands. Defending assessee-in-default findings and Section 40(a)(ia) disallowance. Call +91-9899686318.",
    keywords: [
      "TDS default notice",
      "Section 201 assessee in default",
      "TDS short deduction notice",
      "Section 40(a)(ia) disallowance",
      "TRACES default notice reply",
    ],
    intro:
      "A TDS default has two consequences that run in parallel: a demand on the deductor under Section 201, and disallowance of the expenditure in the deductor's own assessment under Section 40(a)(ia). Both must be addressed, and the defences differ.",
    whoFor: [
      "Deductors with TRACES default intimations",
      "Businesses facing short deduction or wrong-section deduction demands",
      "Assessees facing Section 40(a)(ia) disallowance of expenditure",
      "Deductors treated as assessee in default under Section 201",
    ],
    whatWeDo: [
      "Reconciliation of TDS returns against the books and Form 26AS",
      "Correction statements for PAN errors and challan mismatches",
      "The first proviso defence where the payee has paid tax on the income",
      "Contesting interest under Section 201(1A) and fee under Section 234E",
      "Appeals against Section 201 orders",
    ],
    process: [
      {
        title: "Identify the default type",
        detail:
          "Short deduction, non-deduction, late deposit, PAN error and challan mismatch each have different remedies. A large proportion of TRACES defaults are mismatches rather than real defaults.",
      },
      {
        title: "Use the payee's position",
        detail:
          "Under the first proviso to Section 201(1), a deductor is not treated as in default where the payee has filed a return, included the income and paid the tax. A certificate in Form 26A from the payee's accountant establishes it.",
      },
      {
        title: "Address the disallowance separately",
        detail:
          "Section 40(a)(ia) disallowance is dealt with in the deductor's own assessment and is restored in the year the tax is ultimately paid.",
      },
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 192 to 195, 200A, 201, 234E, 40(a)(ia)",
    ],
    timeline:
      "Correction statements process within weeks. A Section 201 order and appeal follows the ordinary assessment and appellate timeline.",
    faqs: [
      {
        question: "The payee has already paid tax. Am I still in default?",
        answer:
          "No, provided the conditions in the first proviso to Section 201(1) are met — the payee has furnished a return, taken the income into account and paid the tax due, certified by an accountant in Form 26A. Interest under Section 201(1A) still runs until the date the payee filed the return.",
      },
      {
        question: "Can the Section 234E fee be contested?",
        answer:
          "The fee for late filing of a TDS statement has been upheld in principle, but its levy for periods before the enabling machinery provision came into force has been successfully challenged. Whether it is contestable depends on the period involved, so the dates are the first thing to check.",
      },
    ],
    order: 10,
  },
  {
    slug: "appeal-before-cit-appeals",
    parentSlug: "income-tax-notice-reply",
    title: "Appeal before the Commissioner (Appeals)",
    seoTitle: "CIT Appeals Lawyers in Delhi",
    h1: "Appeal before the Commissioner (Appeals)",
    shortTitle: "CIT(A) appeals",
    metaDescription:
      "First appeals under Section 246A — grounds, stay of demand under Section 220(6), additional evidence and faceless appeal hearings. Call +91-9899686318.",
    keywords: [
      "CIT Appeals lawyer Delhi",
      "Section 246A appeal",
      "income tax first appeal",
      "stay of demand income tax",
      "faceless appeal",
    ],
    intro:
      "The first appeal is where the factual record is settled, and the Commissioner (Appeals) has power to enhance as well as reduce an assessment. Filing it also unlocks the application for stay of recovery, which is usually the more urgent problem.",
    whoFor: [
      "Assessees with additions confirmed in an assessment order",
      "Taxpayers facing recovery while a challenge is contemplated",
      "Assessees whose evidence was not admitted during assessment",
      "Anyone facing penalty alongside a quantum addition",
    ],
    whatWeDo: [
      "Appeals in Form 35 within thirty days of the order",
      "Grounds drafted on merits, on procedure, and on jurisdiction",
      "Stay applications under Section 220(6), pressing for less than twenty per cent where warranted",
      "Applications to admit additional evidence under Rule 46A",
      "Onward appeals to the Income Tax Appellate Tribunal",
    ],
    process: [
      {
        title: "File within thirty days",
        detail:
          "Form 35 within thirty days of service of the order, with the appeal fee. Delay can be condoned on sufficient cause but should not be relied on.",
      },
      {
        title: "Deal with recovery immediately",
        detail:
          "Filing an appeal does not stay the demand. A separate application under Section 220(6) is required, and recovery can begin thirty days after the demand notice.",
      },
      {
        title: "Get the evidence admitted",
        detail:
          "Evidence not produced during assessment requires an application under Rule 46A, with the reason it could not be produced earlier. It is not automatic.",
      },
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 246A, 250, 251, 220(6)",
      "Income-tax Rules, 1962 — Rule 46A",
    ],
    timeline:
      "Appeal filed within thirty days. Disposal commonly takes one to three years.",
    faqs: [
      {
        question: "Does filing an appeal stop recovery?",
        answer:
          "No. An appeal does not operate as a stay. A separate application under Section 220(6) must be made to the assessing officer, and recovery under Section 226 can begin thirty days after the demand notice if nothing is done.",
      },
      {
        question: "Is the twenty per cent deposit mandatory for a stay?",
        answer:
          "It is the figure in the administrative instructions, not a statutory floor. Where the assessment is prima facie unsustainable, the issue is covered by a binding decision in your favour, or recovery would cause genuine hardship, a lower deposit or an unconditional stay can be sought — and both have been granted.",
      },
      {
        question: "Can the Commissioner increase my assessment?",
        answer:
          "Yes. Section 251 gives the Commissioner (Appeals) power to confirm, reduce, enhance or annul an assessment. Enhancement requires a reasonable opportunity of being heard first, but the power is real and is a factor in deciding whether to appeal at all.",
      },
    ],
    order: 11,
  },

  // =================================================== Company & ROC (6)
  {
    slug: "private-limited-company-registration",
    parentSlug: "company-registration-roc-compliance",
    title: "Private Limited Company Registration",
    seoTitle: "Private Limited Company Registration",
    h1: "Private Limited Company Registration in Delhi",
    shortTitle: "Pvt Ltd registration",
    metaDescription:
      "Incorporation through SPICe+ — name approval, MOA and AOA, DSC and the first-year compliance calendar. Delhi NCR. Call +91-9899686318.",
    keywords: [
      "private limited company registration Delhi",
      "SPICe+ filing",
      "company incorporation lawyer",
      "pvt ltd registration process",
    ],
    intro:
      "Incorporation is a single integrated filing, but the decisions made in it — authorised capital, objects clause, shareholding and the articles — are the ones that matter when investment or a dispute arrives. Getting them wrong is expensive to fix later.",
    whoFor: [
      "Founders incorporating their first company",
      "Businesses converting from a proprietorship or partnership",
      "Ventures that intend to raise external investment",
      "Foreign promoters incorporating an Indian subsidiary",
    ],
    whatWeDo: [
      "Name reservation and conflict check against companies and trademarks",
      "SPICe+ filing with MOA, AOA, AGILE-PRO and INC-9",
      "Articles drafted for the actual shareholding, not a template",
      "Digital signatures, DIN, PAN, TAN, EPFO, ESIC and bank account opening",
      "First board meeting, auditor appointment and statutory registers",
    ],
    process: [
      {
        title: "Name and structure",
        detail:
          "Name availability is checked against existing companies and registered trademarks, and the choice between a private limited company, LLP or OPC is made on the funding plan rather than on registration cost.",
      },
      {
        title: "File SPICe+",
        detail:
          "The integrated form issues the certificate of incorporation together with PAN, TAN and the statutory registrations in one filing.",
      },
      {
        title: "Set up compliance from day one",
        detail:
          "Auditor appointed within thirty days, registers opened, and the filing calendar fixed — arrears are far more expensive to fix than to avoid.",
      },
    ],
    statutes: [
      "Companies Act, 2013",
      "Companies (Incorporation) Rules, 2014",
    ],
    timeline:
      "Seven to fifteen working days from the point documents and digital signatures are ready.",
    faqs: [
      {
        question: "How many directors and shareholders are needed?",
        answer:
          "A private limited company requires a minimum of two directors and two shareholders, with at least one director resident in India for the prescribed period. The same persons may be both directors and shareholders.",
      },
      {
        question: "Is there a minimum capital requirement?",
        answer:
          "No. The minimum paid-up capital requirement was removed by amendment. Authorised capital should nevertheless be set with the funding plan in mind, since increasing it later attracts fees and a further filing.",
      },
    ],
    order: 12,
  },
  {
    slug: "llp-registration",
    parentSlug: "company-registration-roc-compliance",
    title: "LLP Registration",
    seoTitle: "LLP Registration in Delhi",
    h1: "Limited Liability Partnership Registration",
    shortTitle: "LLP registration",
    metaDescription:
      "LLP incorporation through FiLLiP, the LLP agreement within 30 days, and annual Form 8 and Form 11 compliance. Call +91-9899686318.",
    keywords: [
      "LLP registration Delhi",
      "FiLLiP form filing",
      "LLP agreement drafting",
      "LLP vs private limited",
    ],
    intro:
      "An LLP suits professional firms and closely held ventures not seeking outside capital: lighter ongoing compliance, no dividend distribution considerations, and partners insulated from each other's acts. The LLP agreement does the work the articles would do in a company.",
    whoFor: [
      "Professional firms and consultancies",
      "Family or closely held businesses",
      "Ventures not intending to raise equity investment",
      "Partnerships converting to limited liability",
    ],
    whatWeDo: [
      "Name reservation and FiLLiP incorporation filing",
      "LLP agreement drafted for the actual profit-sharing and management terms",
      "Form 3 filing of the agreement within thirty days of incorporation",
      "Designated partner DIN and digital signatures",
      "Annual Form 8 and Form 11 compliance",
    ],
    process: [
      {
        title: "Reserve the name",
        detail:
          "Checked against existing LLPs, companies and registered trademarks.",
      },
      {
        title: "File FiLLiP",
        detail:
          "The integrated incorporation form, which also allots DIN to designated partners who do not hold one.",
      },
      {
        title: "File the agreement within 30 days",
        detail:
          "The LLP agreement must be filed in Form 3 within thirty days of incorporation. Missing it attracts a daily additional fee with no cap.",
      },
    ],
    statutes: [
      "Limited Liability Partnership Act, 2008",
      "Limited Liability Partnership Rules, 2009",
    ],
    timeline: "Ten to twenty working days including name approval.",
    faqs: [
      {
        question: "Should I register an LLP or a private limited company?",
        answer:
          "A private limited company suits businesses intending to raise external investment, because shares and instruments such as CCPS are familiar to investors. An LLP has lighter compliance and suits professional firms and closely held ventures. Decide on the funding plan rather than on registration cost.",
      },
      {
        question: "What happens if the LLP agreement is filed late?",
        answer:
          "Form 3 must be filed within thirty days of incorporation. Late filing attracts an additional fee that accrues per day without a ceiling, so a delay of months becomes materially expensive.",
      },
    ],
    order: 13,
  },
  {
    slug: "one-person-company-registration",
    parentSlug: "company-registration-roc-compliance",
    title: "One Person Company Registration",
    seoTitle: "One Person Company Registration",
    h1: "One Person Company (OPC) Registration",
    shortTitle: "OPC registration",
    metaDescription:
      "OPC incorporation for a single founder — nominee consent in INC-3, and the thresholds that force conversion to a private limited company.",
    keywords: [
      "one person company registration",
      "OPC registration India",
      "OPC nominee INC-3",
      "OPC conversion to private limited",
    ],
    intro:
      "An OPC gives a single founder the limited liability and separate legal personality of a company without needing a second shareholder. The trade-off is a mandatory nominee and restrictions that make it unsuitable for a venture expecting investment.",
    whoFor: [
      "Sole founders wanting limited liability",
      "Consultants and professionals trading in their own name",
      "Proprietorships converting to a corporate structure",
      "Founders who do not intend to raise equity in the near term",
    ],
    whatWeDo: [
      "SPICe+ incorporation with nominee consent in Form INC-3",
      "Articles suited to single-member governance",
      "Nominee changes and consequential filings",
      "Conversion to a private limited company on crossing the thresholds",
      "Annual compliance, which is lighter than for a private limited company",
    ],
    process: [
      {
        title: "Appoint the nominee",
        detail:
          "An OPC must name a nominee who becomes the member on the sole member's death or incapacity. Written consent in Form INC-3 is filed with incorporation.",
      },
      {
        title: "Incorporate through SPICe+",
        detail:
          "The same integrated route as a private limited company, with OPC-specific articles.",
      },
      {
        title: "Watch the conversion thresholds",
        detail:
          "Crossing the prescribed paid-up capital or turnover thresholds requires conversion to a private or public limited company within the prescribed period.",
      },
    ],
    statutes: [
      "Companies Act, 2013 — Section 2(62), Section 3",
      "Companies (Incorporation) Rules, 2014 — Rules 3 to 7",
    ],
    timeline: "Seven to fifteen working days, as for a private limited company.",
    faqs: [
      {
        question: "Who can be a nominee in an OPC?",
        answer:
          "A natural person who is an Indian citizen, and who gives written consent in Form INC-3. The nominee becomes the member on the death or incapacity of the sole member, which is the mechanism giving the OPC perpetual succession.",
      },
      {
        question: "When must an OPC convert?",
        answer:
          "On crossing the paid-up capital or average annual turnover thresholds prescribed under the Rules, conversion to a private or public limited company is required within the prescribed period. Voluntary conversion is also permitted.",
      },
    ],
    order: 14,
  },
  {
    slug: "section-8-company-registration",
    parentSlug: "company-registration-roc-compliance",
    title: "Section 8 Company Registration",
    seoTitle: "Section 8 Company Registration",
    h1: "Section 8 Company Registration (Non-Profit)",
    shortTitle: "Section 8 company",
    metaDescription:
      "Non-profit incorporation under Section 8 — INC-12 licence, 12A and 80G registration, and FCRA where foreign contribution is received.",
    keywords: [
      "Section 8 company registration",
      "non profit company registration India",
      "INC-12 licence",
      "12A 80G registration",
    ],
    intro:
      "A Section 8 company is the corporate form for a non-profit: charitable objects, no dividend to members, and a licence from the Central Government before incorporation. It is generally preferred over a trust or society where institutional funding is expected, because governance is more transparent.",
    whoFor: [
      "Founders establishing a charitable or educational institution",
      "NGOs seeking a corporate structure for credibility with funders",
      "Entities applying for 12A and 80G registration",
      "Organisations expecting foreign contribution",
    ],
    whatWeDo: [
      "Licence application in Form INC-12 with the draft MOA and AOA",
      "Incorporation following grant of the licence",
      "Registration under Sections 12A and 80G of the Income-tax Act",
      "FCRA registration or prior permission where applicable",
      "Annual compliance, including the additional reporting a Section 8 company carries",
    ],
    process: [
      {
        title: "Obtain the licence first",
        detail:
          "Unlike other companies, a Section 8 company requires a licence under Form INC-12 before incorporation, with the objects, projected income and application of funds set out.",
      },
      {
        title: "Incorporate",
        detail:
          "Once the licence issues, incorporation proceeds with articles reflecting the non-profit restrictions — no dividend, and assets applied only to the objects.",
      },
      {
        title: "Secure the tax registrations",
        detail:
          "12A for exemption and 80G for donor deduction are separate applications under the Income-tax Act and are what make the entity fundable.",
      },
    ],
    statutes: [
      "Companies Act, 2013 — Section 8",
      "Income-tax Act, 1961 — Sections 12A, 12AB, 80G",
      "Foreign Contribution (Regulation) Act, 2010",
    ],
    timeline:
      "Licence and incorporation commonly take four to eight weeks. 12A and 80G registration adds a further one to three months.",
    faqs: [
      {
        question: "Can a Section 8 company distribute profits?",
        answer:
          "No. Profits and income must be applied only to promoting the objects, and no dividend may be paid to members. The articles must say so, and breach can lead to revocation of the licence.",
      },
      {
        question: "Is 12A and 80G registration automatic?",
        answer:
          "No. They are separate applications under the Income-tax Act with their own scrutiny. Section 8 status under the Companies Act does not by itself confer tax exemption or donor deduction.",
      },
    ],
    order: 15,
  },
  {
    slug: "annual-roc-filing-dir-3-kyc",
    parentSlug: "company-registration-roc-compliance",
    title: "Annual ROC Filing and DIR-3 KYC",
    seoTitle: "Annual ROC Filing & DIR-3 KYC",
    h1: "Annual ROC Filing & DIR-3 KYC",
    shortTitle: "Annual ROC filing",
    metaDescription:
      "AOC-4, MGT-7 and DIR-3 KYC on time. Late fees accrue per day with no cap and three years of default disqualifies directors. Call +91-9899686318.",
    keywords: [
      "annual ROC filing",
      "AOC-4 MGT-7 filing",
      "DIR-3 KYC",
      "ROC late filing fee",
      "director disqualification Section 164",
    ],
    intro:
      "Annual compliance is where most small companies fall behind, and the consequences escalate quietly: late fees that accrue per day without a ceiling, directors disqualified for five years across every company they hold office in, and ultimately strike-off.",
    whoFor: [
      "Companies behind on annual filings",
      "Directors facing disqualification under Section 164(2)",
      "Companies whose DIN has been deactivated for KYC non-compliance",
      "Businesses regularising before a funding round or due diligence",
    ],
    whatWeDo: [
      "AOC-4 for financial statements and MGT-7 or MGT-7A for the annual return",
      "DIR-3 KYC for every director, and DIN reactivation where deactivated",
      "Board and general meeting minutes and statutory registers brought up to date",
      "Event-based filings — DIR-12, PAS-3, MGT-14, SH-7",
      "Compounding of offences and replies to ROC show cause notices",
    ],
    process: [
      {
        title: "Quantify the arrears",
        detail:
          "Every pending form is listed with the additional fee computed to date, so the cost of regularising is known before starting rather than discovered during.",
      },
      {
        title: "File in the correct sequence",
        detail:
          "Financial statements and the annual return are filed year by year in order; filing out of sequence is rejected.",
      },
      {
        title: "Restore the directors",
        detail:
          "Where DIN is deactivated for KYC default, it is reactivated on filing with the prescribed fee. Disqualification under Section 164(2) is a separate and harder problem.",
      },
    ],
    statutes: [
      "Companies Act, 2013 — Sections 92, 137, 164, 403",
      "Companies (Appointment and Qualification of Directors) Rules, 2014 — Rule 12A",
    ],
    timeline:
      "AOC-4 within thirty days of the AGM; MGT-7 within sixty days. DIR-3 KYC annually by the prescribed date.",
    faqs: [
      {
        question: "What is the penalty for late ROC filing?",
        answer:
          "Additional fees accrue under Section 403 at a fixed amount per day of delay, without a ceiling, so the cost grows steadily rather than being capped. Separate penalties also apply to the company and its officers in default.",
      },
      {
        question: "Can a disqualified director be restored?",
        answer:
          "Disqualification under Section 164(2) runs for five years from the default and attaches to the individual in every company. Relief has been obtained by writ in appropriate cases, particularly where the company was struck off and the director had no opportunity to regularise, but it is not automatic.",
      },
    ],
    order: 16,
  },
  {
    slug: "company-strike-off-revival-nclt",
    parentSlug: "company-registration-roc-compliance",
    title: "Strike-Off and Revival before the NCLT",
    seoTitle: "Company Strike-Off & NCLT Revival",
    h1: "Company Strike-Off & Revival before the NCLT",
    shortTitle: "Strike-off & revival",
    metaDescription:
      "Voluntary strike-off under Section 248 and restoration appeals under Section 252 before the NCLT. Call +91-9899686318.",
    keywords: [
      "company strike off",
      "NCLT restoration of company",
      "Section 252 appeal",
      "STK-2 filing",
      "revive struck off company",
    ],
    intro:
      "Strike-off runs both ways: a dormant company can be closed voluntarily under Section 248, and a company struck off by the Registrar can be restored by appeal to the NCLT under Section 252. The second is the more common instruction, and it is usually driven by a bank account or an asset that cannot be dealt with.",
    whoFor: [
      "Dormant companies seeking a clean voluntary closure",
      "Companies struck off for non-filing that need restoration",
      "Directors disqualified as a consequence of strike-off",
      "Members or creditors of a struck-off company with assets to recover",
    ],
    whatWeDo: [
      "Voluntary strike-off in Form STK-2 with the required affidavits and indemnity",
      "Restoration appeals under Section 252 before the NCLT",
      "Regularisation of all outstanding filings as a condition of restoration",
      "Consequential relief from director disqualification",
      "Representation at NCLT hearings",
    ],
    process: [
      {
        title: "Establish standing and ground",
        detail:
          "A restoration appeal may be brought by the company, a member, a creditor or a workman, on the ground that the company was carrying on business or that restoration is otherwise just.",
      },
      {
        title: "File within the period",
        detail:
          "An appeal against the Registrar's order ordinarily lies within three years. Where the applicant is the company, member or creditor on the carrying-on-business ground, the period extends to twenty years.",
      },
      {
        title: "Regularise everything",
        detail:
          "Restoration is almost always made conditional on filing every outstanding return and paying the fees and costs ordered.",
      },
    ],
    statutes: [
      "Companies Act, 2013 — Sections 248, 252",
      "Companies (Removal of Names of Companies) Rules, 2016",
    ],
    timeline:
      "Voluntary strike-off commonly three to six months. NCLT restoration typically six to twelve months.",
    faqs: [
      {
        question: "How long do I have to restore a struck-off company?",
        answer:
          "An appeal against the Registrar's strike-off order ordinarily lies within three years of the order. Where the application is made by the company, a member or a creditor on the ground that the company was in fact carrying on business, the period is twenty years from publication in the Official Gazette.",
      },
      {
        question: "Does restoration remove director disqualification?",
        answer:
          "Not automatically, but restoration removes the foundation of a disqualification that arose from the strike-off, and consequential relief is commonly sought in the same proceedings or by writ. The outcome depends on the facts and the period of default.",
      },
    ],
    order: 17,
  },

  // =================================================== Trade licence (5)
  {
    slug: "mcd-ndmc-trade-licence",
    parentSlug: "trade-licence-business-registration",
    title: "MCD and NDMC Trade Licence",
    seoTitle: "MCD Trade Licence in Delhi",
    h1: "MCD & NDMC Trade Licence",
    shortTitle: "Trade licence",
    metaDescription:
      "Municipal trade licence applications and renewals in Delhi, plus replies to suspension and sealing notices. Call +91-9899686318.",
    keywords: [
      "MCD trade licence Delhi",
      "NDMC trade licence",
      "trade licence renewal Delhi",
      "trade licence notice reply",
    ],
    intro:
      "A municipal trade licence attaches to specified trades rather than to every business, and whether yours needs one turns on the activity and the premises. Operating without one, or on a lapsed one, exposes the premises to sealing.",
    whoFor: [
      "Restaurants, food businesses and cloud kitchens",
      "Businesses in trades notified as requiring a licence",
      "Premises served a suspension, cancellation or sealing notice",
      "Businesses renewing a lapsed licence",
    ],
    whatWeDo: [
      "Determining whether the activity in fact requires a licence",
      "Applications and renewals before the MCD or NDMC",
      "Land-use and occupancy issues that cause rejection",
      "Replies to show cause, suspension and sealing notices",
      "Appeals and representations against cancellation",
    ],
    process: [
      {
        title: "Check the premises before applying",
        detail:
          "Permitted land use, the lease and occupancy are the most common cause of rejection, and they are better resolved before filing than after.",
      },
      {
        title: "Apply with the complete set",
        detail:
          "Ownership or lease proof, identity documents, site layout and the activity-specific attachments the department expects.",
      },
      {
        title: "Diarise the renewal",
        detail:
          "Trade licences run on their own cycle. A renewal filed before expiry is routine; one filed after a notice is not.",
      },
    ],
    statutes: [
      "Delhi Municipal Corporation Act, 1957",
      "New Delhi Municipal Council Act, 1994",
    ],
    timeline:
      "Three to eight weeks depending on inspection and on whether land-use queries arise.",
    faqs: [
      {
        question: "Does every business in Delhi need a trade licence?",
        answer:
          "No. The requirement attaches to trades specified under the municipal legislation — typically food, hazardous or nuisance-prone activities and certain commercial uses. Ordinary offices frequently do not require one, though they do require Shops and Establishments registration. It is worth confirming by activity rather than assuming either way.",
      },
      {
        question: "My premises have been sealed. What can be done?",
        answer:
          "De-sealing is sought from the authority that ordered it, on rectification of the breach alleged, and in appropriate cases before the appellate forum or by writ. The first step is obtaining the sealing order itself, because the ground stated determines what has to be cured.",
      },
    ],
    order: 18,
  },
  {
    slug: "shops-establishment-registration",
    parentSlug: "trade-licence-business-registration",
    title: "Shops and Establishment Registration",
    seoTitle: "Shops & Establishment Registration",
    h1: "Shops and Establishment Registration",
    shortTitle: "Shops & Establishment",
    metaDescription:
      "Registration under the Delhi Shops and Establishments Act — who must register, the records to maintain, and renewal. Call +91-9899686318.",
    keywords: [
      "shops and establishment registration Delhi",
      "shop act licence",
      "labour department registration Delhi",
      "establishment registration certificate",
    ],
    intro:
      "Almost every commercial establishment in Delhi requires registration under the Shops and Establishments Act. It is routine to obtain and routinely overlooked, and it is the first document a labour inspector asks for.",
    whoFor: [
      "New offices, shops and commercial establishments",
      "Businesses opening an additional branch or location",
      "Employers needing proof of establishment for bank or statutory purposes",
      "Establishments facing an inspection or notice",
    ],
    whatWeDo: [
      "Registration applications with the Labour Department",
      "Amendments on change of name, address or employee strength",
      "Statutory registers and records required to be maintained",
      "Compliance on working hours, leave and holidays",
      "Responses to inspection notices",
    ],
    process: [
      {
        title: "Register on commencement",
        detail:
          "Application is made within the period prescribed after the establishment commences work, with ownership or lease proof and employee details.",
      },
      {
        title: "Maintain the records",
        detail:
          "Registers of employment, wages, leave and holidays are required to be kept and produced on inspection.",
      },
      {
        title: "Keep it current",
        detail:
          "Changes in name, address, nature of business or employee strength require the registration to be amended.",
      },
    ],
    statutes: [
      "Delhi Shops and Establishments Act, 1954",
      "Corresponding State legislation where the establishment is outside Delhi",
    ],
    timeline: "Commonly one to three weeks.",
    faqs: [
      {
        question: "Who must register under the Shops and Establishments Act?",
        answer:
          "Broadly every shop and commercial establishment within the local area to which the Act applies, including offices. Factories registered under the Factories Act are governed by that statute instead. Requirements and thresholds vary by State, so the applicable State Act governs.",
      },
      {
        question: "Do I need separate registration for each branch?",
        answer:
          "Generally yes. Registration is establishment-specific, so each premises ordinarily requires its own registration, and a new branch requires a fresh application rather than an amendment to the existing one.",
      },
    ],
    order: 19,
  },
  {
    slug: "fssai-licence",
    parentSlug: "trade-licence-business-registration",
    title: "FSSAI Licence and Registration",
    seoTitle: "FSSAI Licence Registration Delhi",
    h1: "FSSAI Licence & Registration",
    shortTitle: "FSSAI licence",
    metaDescription:
      "Basic registration, State and Central FSSAI licences by turnover, plus improvement notices and prosecutions. Call +91-9899686318.",
    keywords: [
      "FSSAI licence Delhi",
      "food licence registration",
      "FSSAI State licence",
      "FSSAI improvement notice",
    ],
    intro:
      "Every food business operator needs an FSSAI registration or licence, and which one depends on turnover and the nature of the operation. The category matters: operating on a basic registration when a State licence was required is itself a contravention.",
    whoFor: [
      "Restaurants, cloud kitchens and caterers",
      "Manufacturers, packers and repackers of food",
      "Importers, distributors and e-commerce food sellers",
      "Businesses served an improvement notice or facing prosecution",
    ],
    whatWeDo: [
      "Determining the correct category — basic registration, State or Central licence",
      "Applications, renewals and modifications",
      "Replies to improvement notices under Section 32",
      "Representation in adjudication and prosecution under the Act",
      "Labelling and advertising compliance",
    ],
    process: [
      {
        title: "Establish the category",
        detail:
          "Turnover thresholds and activity determine whether basic registration, a State licence or a Central licence applies. Importers and certain manufacturers require a Central licence regardless of turnover.",
      },
      {
        title: "Apply with the technical documents",
        detail:
          "Layout plan, equipment list, water test report, food safety management plan and proof of premises, as applicable to the category.",
      },
      {
        title: "Respond to improvement notices promptly",
        detail:
          "An improvement notice under Section 32 fixes a period to comply, and failure can lead to suspension or cancellation of the licence.",
      },
    ],
    statutes: [
      "Food Safety and Standards Act, 2006 — Sections 31, 32, 63",
      "Food Safety and Standards (Licensing and Registration) Regulations, 2011",
    ],
    timeline:
      "Basic registration often within days. State and Central licences commonly three to eight weeks including inspection.",
    faqs: [
      {
        question: "Which FSSAI category applies to my business?",
        answer:
          "It turns on annual turnover and the nature of the operation. Very small operators take basic registration; mid-sized businesses within a State take a State licence; large operators, importers and certain manufacturers require a Central licence. Operating on the wrong category is itself a contravention, so it should be confirmed before applying.",
      },
      {
        question: "What happens if I operate without an FSSAI licence?",
        answer:
          "Carrying on a food business without a licence is an offence under Section 63, punishable with imprisonment and fine. Premises can also be sealed and the business stopped, so operating while an application is pending is not advisable.",
      },
    ],
    order: 20,
  },
  {
    slug: "factory-licence-fire-noc",
    parentSlug: "trade-licence-business-registration",
    title: "Factory Licence and Fire NOC",
    seoTitle: "Factory Licence & Fire NOC Delhi",
    h1: "Factory Licence & Fire NOC",
    shortTitle: "Factory licence",
    metaDescription:
      "Factory registration and licensing under the Factories Act, plus fire safety clearance and renewal. Delhi NCR. Call +91-9899686318.",
    keywords: [
      "factory licence Delhi",
      "Factories Act registration",
      "fire NOC Delhi",
      "factory plan approval",
    ],
    intro:
      "A manufacturing unit needs approval of plans before construction and a licence before it operates, and separately a fire safety clearance. Sequencing matters — plan approval precedes the licence, and retrofitting a building that was never approved is far costlier than approving it first.",
    whoFor: [
      "Manufacturing units within the Factories Act thresholds",
      "Units expanding capacity or altering the premises",
      "Businesses requiring fire safety clearance for the building",
      "Occupiers facing notices from the Chief Inspector of Factories",
    ],
    whatWeDo: [
      "Approval of plans and registration under the Factories Act",
      "Factory licence applications and annual renewal",
      "Fire safety clearance and renewal with the fire service",
      "Occupier and manager notifications under Section 7",
      "Representation on inspection notices and prosecutions",
    ],
    process: [
      {
        title: "Get the plans approved first",
        detail:
          "Approval of the site plan and building plans by the Chief Inspector precedes construction and licensing.",
      },
      {
        title: "Apply for the licence",
        detail:
          "With the occupier and manager details, worker strength, power load and the process description.",
      },
      {
        title: "Obtain the fire clearance",
        detail:
          "A separate clearance from the fire service, based on the building height, occupancy and the fire safety installations provided.",
      },
    ],
    statutes: [
      "Factories Act, 1948 — Sections 6, 7",
      "Delhi Factories Rules",
      "Delhi Fire Service Act, 2007",
    ],
    timeline:
      "Plan approval commonly four to eight weeks; licence two to six weeks thereafter; fire clearance in parallel.",
    faqs: [
      {
        question: "When does the Factories Act apply?",
        answer:
          "Broadly where ten or more workers are employed with power, or twenty or more without power, in a manufacturing process. State rules may extend it further, so the applicable State rules should be checked alongside the Act.",
      },
      {
        question: "Is a fire NOC separate from the factory licence?",
        answer:
          "Yes. They are issued by different authorities under different statutes, and both are required. The fire clearance depends on the building and its installations, while the factory licence depends on the process and the workforce.",
      },
    ],
    order: 21,
  },
  {
    slug: "dpcc-pollution-consent",
    parentSlug: "trade-licence-business-registration",
    title: "DPCC Pollution Consent",
    seoTitle: "DPCC Consent to Operate Delhi",
    h1: "DPCC Pollution Consent — Establish & Operate",
    shortTitle: "Pollution consent",
    metaDescription:
      "Consent to Establish and Consent to Operate from the DPCC, by red, orange, green or white category. Call +91-9899686318.",
    keywords: [
      "DPCC consent to operate",
      "consent to establish Delhi",
      "pollution NOC Delhi",
      "DPCC category red orange green",
    ],
    intro:
      "Consent to Establish is required before a unit is set up and Consent to Operate before it runs. Which applies, and how onerous it is, depends on the category — red, orange, green or white — assigned to the activity.",
    whoFor: [
      "Manufacturing and processing units",
      "Hotels, hospitals and larger commercial establishments",
      "Units renewing an expiring consent",
      "Businesses served a closure or show cause notice",
    ],
    whatWeDo: [
      "Category determination and consent applications",
      "Consent to Establish and Consent to Operate, and renewals",
      "Effluent and emission compliance documentation",
      "Replies to show cause and closure notices",
      "Appeals before the Appellate Authority and the National Green Tribunal",
    ],
    process: [
      {
        title: "Establish the category",
        detail:
          "Red, orange, green or white, based on the pollution potential of the activity. It determines the documentation, the fee and the consent validity period.",
      },
      {
        title: "Consent to Establish, then Operate",
        detail:
          "CTE precedes setting up the unit; CTO precedes commencing operations and is renewed periodically.",
      },
      {
        title: "Maintain the compliance record",
        detail:
          "Effluent and emission monitoring, hazardous waste authorisation where applicable, and the returns the consent conditions require.",
      },
    ],
    statutes: [
      "Water (Prevention and Control of Pollution) Act, 1974",
      "Air (Prevention and Control of Pollution) Act, 1981",
      "Environment (Protection) Act, 1986",
    ],
    timeline:
      "Commonly four to ten weeks depending on category and inspection.",
    faqs: [
      {
        question: "Does my business need DPCC consent?",
        answer:
          "It depends on the category assigned to the activity. White category activities are largely exempt from consent, while red, orange and green category units require Consent to Establish and Consent to Operate. The category list is published and should be checked against the specific activity.",
      },
      {
        question: "What happens if I operate without consent?",
        answer:
          "Closure directions can be issued under the Water and Air Acts, along with disconnection of electricity and water supply, and prosecution. Proceedings before the National Green Tribunal can also follow on a complaint.",
      },
    ],
    order: 22,
  },

  // ========================================================== Labour (4)
  {
    slug: "wrongful-termination-claim",
    parentSlug: "labour-court-employment-disputes",
    title: "Wrongful Termination Claim",
    seoTitle: "Wrongful Termination Lawyers Delhi",
    h1: "Wrongful Termination Claims",
    shortTitle: "Wrongful termination",
    metaDescription:
      "Dismissed without inquiry, notice or compensation? Section 2A references, Section 11A relief and reinstatement with back wages.",
    keywords: [
      "wrongful termination lawyer Delhi",
      "illegal termination claim India",
      "Section 2A industrial dispute",
      "reinstatement back wages",
    ],
    intro:
      "Most terminations fail on procedure rather than on substance — no charge sheet, no inquiry, no opportunity to be heard, or retrenchment compensation not tendered as the statute requires. Whether the person is a workman decides the forum and the remedy, so that is settled first.",
    whoFor: [
      "Employees dismissed without a domestic inquiry",
      "Workmen retrenched without notice or Section 25F compensation",
      "Employees forced to resign under threat of dismissal",
      "Employers defending a termination already challenged",
    ],
    whatWeDo: [
      "Classification — whether the employee is a workman under Section 2(s)",
      "Conciliation before the Labour Commissioner",
      "References to the Labour Court under Section 2A",
      "Challenges to defective domestic inquiries",
      "Claims for reinstatement, back wages or compensation in lieu",
    ],
    process: [
      {
        title: "Classify the employment",
        detail:
          "A workman under Section 2(s) goes to the Labour Court. A managerial or supervisory employee above the wage threshold is outside the Industrial Disputes Act and must sue in civil court or on the contract. Classification turns on actual duties, not on designation.",
      },
      {
        title: "Test the procedure",
        detail:
          "Charge sheet, inquiry, opportunity to cross-examine, and for retrenchment the Section 25F notice and compensation. Failure at any of these is usually the strongest ground.",
      },
      {
        title: "Conciliate, then refer",
        detail:
          "Conciliation is the statutory first step and resolves a substantial share of matters. Where it fails, an individual discharge dispute can be raised directly under Section 2A.",
      },
    ],
    statutes: [
      "Industrial Disputes Act, 1947 — Sections 2(s), 2A, 10, 11A, 12, 25F",
      "Industrial Employment (Standing Orders) Act, 1946",
    ],
    timeline:
      "Conciliation one to three months. A Labour Court reference commonly two to five years.",
    faqs: [
      {
        question: "Can I be dismissed without an inquiry?",
        answer:
          "For a workman alleged to have committed misconduct, a domestic inquiry complying with natural justice is ordinarily required. Dismissal without one is frequently set aside, though the employer may be permitted to justify the dismissal by leading evidence before the Labour Court. Section 11A also allows the court to interfere where the punishment is disproportionate.",
      },
      {
        question: "How long do I have to raise a termination dispute?",
        answer:
          "A reference of an individual discharge, dismissal, retrenchment or termination under Section 2A must ordinarily be made within three years of the date of discharge. Conciliation should be initiated well before that.",
      },
    ],
    order: 23,
  },
  {
    slug: "unpaid-salary-full-final-settlement",
    parentSlug: "labour-court-employment-disputes",
    title: "Unpaid Salary and Full and Final Settlement",
    seoTitle: "Unpaid Salary Claim Lawyers",
    h1: "Unpaid Salary & Full and Final Settlement",
    shortTitle: "Unpaid salary",
    metaDescription:
      "Recovering unpaid wages, notice pay, leave encashment and withheld settlement — the forum, the computation and the limitation.",
    keywords: [
      "unpaid salary legal action India",
      "full and final settlement not paid",
      "Payment of Wages Act claim",
      "salary recovery lawyer Delhi",
    ],
    intro:
      "Withheld salary and a settlement that never arrives are among the most common employment complaints and among the most straightforward to pursue, provided the right forum is chosen and the claim is computed rather than asserted.",
    whoFor: [
      "Employees whose salary has been withheld or partially paid",
      "Former employees whose full and final settlement is outstanding",
      "Employees owed notice pay, leave encashment or bonus",
      "Those pressured to sign a settlement for less than is due",
    ],
    whatWeDo: [
      "Legal notice with a head-wise computation of dues",
      "Claims before the authority under the Payment of Wages Act",
      "Civil or summary suits where the sum or the employee falls outside the Act",
      "Conciliation and Labour Court references where it forms part of a dispute",
      "Advice before signing a settlement or release",
    ],
    process: [
      {
        title: "Compute, do not assert",
        detail:
          "Each head set out separately — salary, notice pay, leave encashment, bonus, reimbursements — against the contract and the salary records.",
      },
      {
        title: "Choose the forum",
        detail:
          "The Payment of Wages Act authority is fast and inexpensive within its scope. Larger claims or employees outside the Act may suit a summary suit under Order XXXVII.",
      },
      {
        title: "Send the notice",
        detail:
          "A properly computed notice resolves a significant share of these matters, and preserves the record where it does not.",
      },
    ],
    statutes: [
      "Payment of Wages Act, 1936",
      "Code of Civil Procedure, 1908 — Order XXXVII",
      "Industrial Disputes Act, 1947",
      "Limitation Act, 1963",
    ],
    timeline:
      "A Payment of Wages claim commonly resolves within six to twelve months. A notice alone often produces payment within weeks.",
    faqs: [
      {
        question: "Can my employer withhold my full and final settlement?",
        answer:
          "Not indefinitely, and not as leverage. Where the employer claims a set-off — for notice shortfall, unreturned property or a bond — it must be quantified and justified; a blanket withholding without computation is not sustainable, and the undisputed portion remains payable.",
      },
      {
        question: "I was asked to sign a release to get my dues. Should I?",
        answer:
          "Read what it gives up. A release commonly extinguishes every claim including gratuity, bonus and any claim arising from the termination itself. If the amount offered is less than what is due, signing it generally forecloses the balance. Take advice before signing rather than after.",
      },
    ],
    order: 24,
  },
  {
    slug: "gratuity-pf-esi-disputes",
    parentSlug: "labour-court-employment-disputes",
    title: "Gratuity, PF and ESI Disputes",
    seoTitle: "Gratuity, PF & ESI Dispute Lawyers",
    h1: "Gratuity, Provident Fund & ESI Disputes",
    shortTitle: "Gratuity, PF & ESI",
    metaDescription:
      "Gratuity claims before the Controlling Authority, PF Section 7A proceedings and ESI contribution disputes. Call +91-9899686318.",
    keywords: [
      "gratuity claim lawyer",
      "PF Section 7A proceedings",
      "ESI contribution dispute",
      "gratuity not paid remedy",
      "EPF damages Section 14B",
    ],
    intro:
      "These are statutory entitlements with their own forums, their own limitation and their own interest consequences. Gratuity is payable within thirty days of becoming due, after which interest runs, and PF liability can be determined retrospectively against the employer under Section 7A.",
    whoFor: [
      "Employees whose gratuity has not been paid after separation",
      "Employers facing Section 7A determination or Section 14B damages",
      "Establishments in dispute over PF applicability or wage definition",
      "Employees whose PF or ESI was deducted but not deposited",
    ],
    whatWeDo: [
      "Gratuity applications in Form I and claims before the Controlling Authority",
      "Appeals to the Appellate Authority under the Gratuity Act",
      "Representation in PF Section 7A inquiries and Section 14B damages proceedings",
      "Appeals before the Central Government Industrial Tribunal",
      "ESI contribution and coverage disputes",
    ],
    process: [
      {
        title: "Establish the entitlement",
        detail:
          "Continuous service, last drawn wages and the statutory formula for gratuity; wage components and headcount for PF and ESI coverage.",
      },
      {
        title: "Apply to the correct authority",
        detail:
          "Gratuity to the Controlling Authority under the Act; PF determination before the Regional PF Commissioner under Section 7A; ESI before the Employees' Insurance Court.",
      },
      {
        title: "Press the interest and damages points",
        detail:
          "Interest runs on delayed gratuity. On the employer side, Section 14B damages are discretionary and can be reduced where the delay was not wilful.",
      },
    ],
    statutes: [
      "Payment of Gratuity Act, 1972 — Sections 4, 7, 8",
      "Employees' Provident Funds and Miscellaneous Provisions Act, 1952 — Sections 7A, 7Q, 14B",
      "Employees' State Insurance Act, 1948",
    ],
    timeline:
      "Gratuity before the Controlling Authority commonly six to eighteen months. A Section 7A inquiry runs several months to over a year.",
    faqs: [
      {
        question: "When is gratuity payable and what if it is delayed?",
        answer:
          "Within thirty days of it becoming payable. Beyond that, simple interest runs at the notified rate from the due date until payment. The employer cannot withhold it except to the limited extent the Act permits, such as for damage caused by the employee's wilful act.",
      },
      {
        question: "Can PF liability be determined for past years?",
        answer:
          "Yes. A Section 7A inquiry can determine dues for past periods, and damages under Section 14B and interest under Section 7Q follow. Common disputes concern which wage components attract contribution and whether contract workers were covered.",
      },
    ],
    order: 25,
  },
  {
    slug: "posh-complaints-industrial-disputes",
    parentSlug: "labour-court-employment-disputes",
    title: "POSH Complaints and Industrial Disputes",
    seoTitle: "POSH Act Compliance & Complaints",
    h1: "POSH Complaints & Industrial Disputes",
    shortTitle: "POSH & industrial disputes",
    metaDescription:
      "Internal Committee constitution, inquiry conduct and appeals under the POSH Act, plus collective industrial disputes. Call +91-9899686318.",
    keywords: [
      "POSH Act compliance lawyer",
      "internal committee POSH",
      "POSH inquiry procedure",
      "industrial dispute lawyer Delhi",
    ],
    intro:
      "POSH proceedings have a fixed timetable and a prescribed committee composition, and departures from either are the usual ground on which findings are set aside. Industrial disputes raised collectively follow a different track from individual claims.",
    whoFor: [
      "Employers constituting or reconstituting an Internal Committee",
      "Organisations conducting an inquiry into a complaint",
      "Complainants or respondents in POSH proceedings",
      "Employers facing a collective dispute, strike or union demand",
    ],
    whatWeDo: [
      "Internal Committee constitution, policy and mandatory training",
      "Conducting or advising on POSH inquiries within the statutory timetable",
      "Appeals under Section 18 against committee findings",
      "Annual reporting obligations under the Act",
      "Conciliation and adjudication in collective industrial disputes",
    ],
    process: [
      {
        title: "Get the committee right",
        detail:
          "A presiding officer who is a woman at a senior level, the prescribed number of members, and an external member from an NGO or familiar with the issues. A defectively constituted committee taints the inquiry.",
      },
      {
        title: "Keep to the timetable",
        detail:
          "The inquiry is to be completed within ninety days, and the employer must act on the report within sixty days of receiving it.",
      },
      {
        title: "Observe natural justice throughout",
        detail:
          "Both parties get the material, an opportunity to respond and the right to be heard. Most successful appeals turn on a failure here rather than on the merits.",
      },
    ],
    statutes: [
      "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 — Sections 4, 11, 13, 18, 26",
      "Industrial Disputes Act, 1947 — Sections 10, 12, 22",
    ],
    timeline:
      "A POSH inquiry must conclude within ninety days, with action within sixty days of the report. An appeal lies within ninety days.",
    faqs: [
      {
        question: "When must an Internal Committee be constituted?",
        answer:
          "Every workplace employing ten or more persons must constitute one, with a presiding officer who is a woman employed at a senior level, at least two members from amongst employees, and one external member. Failure to constitute attracts a penalty and, on repetition, can affect licences and registrations.",
      },
      {
        question: "Can a POSH finding be challenged?",
        answer:
          "Yes. Section 18 provides an appeal against the recommendations or non-implementation, ordinarily within ninety days. In practice most successful challenges turn on defects in the committee's constitution or on natural justice rather than on the factual findings.",
      },
    ],
    order: 26,
  },

  // =================================================== Cheque bounce (3)
  {
    slug: "section-138-complaint-filing-trial",
    parentSlug: "cheque-bounce-section-138",
    title: "Section 138 Complaint Filing and Trial",
    seoTitle: "Section 138 Complaint Filing",
    h1: "Section 138 Complaint Filing & Trial",
    shortTitle: "S.138 complaint",
    metaDescription:
      "Filing and conducting a cheque bounce complaint — jurisdiction, evidence by affidavit, the statutory presumptions and enforcement.",
    keywords: [
      "Section 138 complaint filing",
      "cheque bounce case procedure",
      "cheque bounce trial",
      "Section 142 jurisdiction",
    ],
    intro:
      "Once the demand notice has done its work, the complaint must be filed within one month of the cause of action arising, before the court where the payee's bank branch is situated. The statutory presumptions then operate in the payee's favour, and the drawer must raise a probable defence to displace them.",
    whoFor: [
      "Payees whose 15-day notice period has expired without payment",
      "Businesses enforcing multiple dishonoured cheques",
      "Complainants whose case has stalled at the summoning stage",
      "Payees seeking interim compensation during trial",
    ],
    whatWeDo: [
      "Drafting and filing the complaint with the statutory averments",
      "Pre-summoning evidence and securing process against the drawer",
      "Proceedings against company officers under Section 141",
      "Evidence by affidavit under Section 145 and conduct of trial",
      "Applications for interim compensation under Section 143A",
    ],
    process: [
      {
        title: "File within one month",
        detail:
          "Within one month of the 15-day payment period expiring. Delay can be condoned on sufficient cause shown under the proviso to Section 142, but it must be applied for.",
      },
      {
        title: "File in the right court",
        detail:
          "Section 142(2) fixes jurisdiction at the branch of the bank where the payee maintains the account into which the cheque was presented.",
      },
      {
        title: "Use the presumptions",
        detail:
          "Sections 118 and 139 presume consideration and that the cheque was issued for a legally enforceable debt. The burden sits on the drawer to displace them.",
      },
    ],
    statutes: [
      "Negotiable Instruments Act, 1881 — Sections 138, 139, 141, 142, 143, 143A, 145",
      "Bharatiya Nagarik Suraksha Sanhita, 2023",
    ],
    timeline:
      "Summoning within weeks to a few months. Trial commonly one to three years, shorter where the matter settles at the summoning stage.",
    faqs: [
      {
        question: "Where should a cheque bounce complaint be filed?",
        answer:
          "Section 142(2) fixes jurisdiction at the court within whose territorial jurisdiction the branch of the bank where the payee maintains the account is situated — that is, the payee's bank branch where the cheque was presented for collection.",
      },
      {
        question: "Can a company's directors be prosecuted?",
        answer:
          "Section 141 extends liability to persons in charge of and responsible to the company for the conduct of its business at the relevant time. The complaint must contain specific averments to that effect; a bare assertion that someone was a director is not enough, and such complaints are regularly quashed.",
      },
    ],
    order: 27,
  },
  {
    slug: "interim-compensation-section-143a",
    parentSlug: "cheque-bounce-section-138",
    title: "Interim Compensation under Section 143A",
    seoTitle: "Section 143A Interim Compensation",
    h1: "Interim Compensation under Section 143A",
    shortTitle: "Interim compensation",
    metaDescription:
      "Up to 20% of the cheque amount during trial, and the Section 148 appellate deposit. Seeking it, and resisting it. Call +91-9899686318.",
    keywords: [
      "Section 143A interim compensation",
      "cheque bounce interim compensation",
      "Section 148 deposit appeal",
      "20 percent cheque bounce",
    ],
    intro:
      "Section 143A allows the trial court to order the drawer to pay the complainant up to twenty per cent of the cheque amount while the trial runs. Section 148 goes further at the appellate stage, where a deposit of at least twenty per cent can be required as a condition of the appeal.",
    whoFor: [
      "Complainants seeking payment during a long trial",
      "Drawers facing an interim compensation application",
      "Appellants required to deposit under Section 148",
      "Parties negotiating settlement against the backdrop of a deposit order",
    ],
    whatWeDo: [
      "Applications for interim compensation under Section 143A",
      "Opposing such applications where discretion was not properly exercised",
      "Section 148 deposit applications and resistance at the appellate stage",
      "Recovery of interim compensation as if it were a fine",
      "Refund with interest where the drawer is ultimately acquitted",
    ],
    process: [
      {
        title: "Establish the basis",
        detail:
          "The power is discretionary and must be exercised with reasons. A mechanical order directing twenty per cent without considering the facts is open to challenge.",
      },
      {
        title: "Fix the stage",
        detail:
          "Section 143A applies during trial; Section 148 applies at the appellate stage once conviction has followed. The two are often confused and the tests differ.",
      },
      {
        title: "Deal with the consequences",
        detail:
          "Interim compensation is recoverable as a fine. If the drawer is acquitted, it is repayable with interest.",
      },
    ],
    statutes: [
      "Negotiable Instruments Act, 1881 — Sections 143A, 148",
    ],
    timeline:
      "An application is usually decided within weeks of being moved. Payment is ordinarily directed within sixty days, extendable by thirty.",
    faqs: [
      {
        question: "Is interim compensation automatic?",
        answer:
          "No. The power under Section 143A is discretionary and must be exercised judicially with reasons recorded. Courts have set aside orders granting the maximum twenty per cent mechanically without considering the nature of the defence or the drawer's circumstances.",
      },
      {
        question: "What if the drawer is ultimately acquitted?",
        answer:
          "The complainant must repay the interim compensation with interest at the notified rate, within the period the court directs. The same applies to a Section 148 deposit where the appeal succeeds.",
      },
    ],
    order: 28,
  },
  {
    slug: "cheque-bounce-defence-quashing",
    parentSlug: "cheque-bounce-section-138",
    title: "Defence and Quashing in Section 138 Matters",
    seoTitle: "Cheque Bounce Defence & Quashing",
    h1: "Defence & Quashing in Section 138 Matters",
    shortTitle: "S.138 defence",
    metaDescription:
      "Defending a cheque bounce prosecution — rebutting the presumption, defective notice, and quashing under Section 482. Call +91-9899686318.",
    keywords: [
      "cheque bounce defence lawyer",
      "quash 138 complaint",
      "Section 482 quashing cheque bounce",
      "cheque bounce acquittal grounds",
    ],
    intro:
      "The presumptions under Sections 118 and 139 mean the drawer begins on the back foot, but they are rebuttable on a standard of preponderance of probabilities, not beyond reasonable doubt. Many complaints also fail on their own defects rather than on the merits.",
    whoFor: [
      "Drawers summoned in a cheque bounce complaint",
      "Directors arrayed as accused without specific averments",
      "Drawers where the cheque was security rather than payment",
      "Accused in complaints filed beyond limitation",
    ],
    whatWeDo: [
      "Defence at trial, including rebutting the statutory presumptions",
      "Challenges to defective demand notices and premature complaints",
      "Quashing petitions under Section 482 of the CrPC equivalent",
      "Discharge of directors lacking specific Section 141 averments",
      "Appeals and revisions against conviction",
    ],
    process: [
      {
        title: "Attack the threshold points first",
        detail:
          "Notice served outside thirty days of the return memo, a notice demanding more than the cheque amount, a complaint filed before the fifteen days expired or after the one month, and missing Section 141 averments.",
      },
      {
        title: "Rebut the presumption",
        detail:
          "The drawer need only raise a probable defence on preponderance of probabilities — that the cheque was security, that no legally enforceable debt existed, or that the debt was time-barred.",
      },
      {
        title: "Consider quashing",
        detail:
          "Where the complaint is defective on its face or discloses no offence against a particular accused, quashing is available, though courts are reluctant to examine disputed facts at that stage.",
      },
    ],
    statutes: [
      "Negotiable Instruments Act, 1881 — Sections 138, 139, 141, 142",
      "Bharatiya Nagarik Suraksha Sanhita, 2023 — inherent powers",
    ],
    timeline:
      "A quashing petition commonly takes six to eighteen months. Trial defence runs with the trial.",
    faqs: [
      {
        question: "What is the standard for rebutting the presumption?",
        answer:
          "Preponderance of probabilities, not proof beyond reasonable doubt. The drawer must raise a probable defence that makes the non-existence of a legally enforceable debt plausible; the burden then shifts back to the complainant.",
      },
      {
        question: "Can a cheque bounce complaint be quashed?",
        answer:
          "Yes, where the complaint is defective on its face — the notice was out of time, the complaint was premature or time-barred, or there are no specific averments against a particular accused under Section 141. Courts will not, however, assess disputed questions of fact at the quashing stage; those are for trial.",
      },
    ],
    order: 29,
  },

  // ================================================ Legal notice (1 new)
  {
    slug: "legal-notice-breach-of-contract",
    parentSlug: "legal-notice-drafting-reply",
    title: "Legal Notice for Breach of Contract",
    seoTitle: "Breach of Contract Legal Notice",
    h1: "Legal Notice for Breach of Contract",
    shortTitle: "Breach of contract",
    metaDescription:
      "Notices for breach, non-performance and termination — the clause relied on, the remedy elected, and the forum named. Call +91-9899686318.",
    keywords: [
      "legal notice for breach of contract",
      "breach of contract notice India",
      "contract termination notice",
      "specific performance notice",
    ],
    intro:
      "A breach notice has to do three things at once: establish the breach against the clause relied on, elect a remedy, and preserve your own position. Electing the wrong remedy — terminating where the contract did not permit it — turns the innocent party into the party in breach.",
    whoFor: [
      "Parties facing non-performance or defective performance",
      "Businesses terminating a contract for cause",
      "Parties who have received a termination notice they dispute",
      "Buyers seeking specific performance of an agreement to sell",
    ],
    whatWeDo: [
      "Breach, cure and termination notices under the contract",
      "Notices invoking an arbitration clause where one exists",
      "Claims for damages, specific performance or injunctive relief",
      "Replies defending an alleged breach and asserting counter-claims",
      "Advice on whether to terminate, affirm or sue on the contract",
    ],
    process: [
      {
        title: "Read the contract first",
        detail:
          "The clause breached, the cure period it allows, the notice provisions for service, and the dispute resolution clause all govern what the notice can say and how it must be sent.",
      },
      {
        title: "Elect the remedy carefully",
        detail:
          "Damages, specific performance, or termination. Wrongful termination converts the innocent party into the party in breach, so the right to terminate must actually exist.",
      },
      {
        title: "Invoke the right forum",
        detail:
          "Where the contract contains an arbitration clause, the notice should invoke arbitration rather than threaten a civil suit, since the suit would be met with a Section 8 application.",
      },
    ],
    statutes: [
      "Indian Contract Act, 1872 — Sections 39, 73, 74",
      "Specific Relief Act, 1963",
      "Arbitration and Conciliation Act, 1996 — Sections 8, 21",
      "Limitation Act, 1963",
    ],
    timeline:
      "Notices ordinarily allow fifteen to thirty days to cure, unless the contract specifies otherwise.",
    faqs: [
      {
        question: "Can I terminate immediately for breach?",
        answer:
          "Only if the contract allows it or the breach goes to the root of the agreement. Most commercial contracts require written notice and a cure period first. Terminating without following the clause exposes you to a claim for wrongful termination, so the clause governs.",
      },
      {
        question: "The contract has an arbitration clause. Does the notice change?",
        answer:
          "Yes. The notice should invoke arbitration, and where you intend to commence it, a notice under Section 21 of the Arbitration and Conciliation Act is what starts the arbitration and stops limitation running. Threatening a civil suit instead simply invites a Section 8 application referring the matter to arbitration anyway.",
      },
    ],
    order: 30,
  },

  // ============================================== Money recovery (1 new)
  {
    slug: "execution-enforcement-of-decrees",
    parentSlug: "money-recovery-msme-samadhaan",
    title: "Execution and Enforcement of Decrees",
    seoTitle: "Execution of Decree Lawyers Delhi",
    h1: "Execution & Enforcement of Decrees and Awards",
    shortTitle: "Execution",
    metaDescription:
      "A decree is only worth what you can recover. Attachment, garnishee, asset discovery and enforcement of arbitral awards. Call +91-9899686318.",
    keywords: [
      "execution of decree lawyer",
      "Order XXI execution petition",
      "garnishee order India",
      "enforcement of arbitral award",
      "attachment of property decree",
    ],
    intro:
      "Winning is not recovering. Execution is where most money judgments stall, because the judgment debtor has moved assets, disputes the computation, or simply does not pay. The work is investigative as much as legal.",
    whoFor: [
      "Decree holders whose judgment remains unsatisfied",
      "Award holders enforcing an arbitral award under Section 36",
      "Creditors needing to identify a debtor's attachable assets",
      "Parties facing objections raised in execution",
    ],
    whatWeDo: [
      "Execution petitions under Order XXI of the Code of Civil Procedure",
      "Enforcement of arbitral awards as decrees under Section 36",
      "Attachment of movable and immovable property and bank accounts",
      "Garnishee proceedings against the debtor's own debtors",
      "Disclosure of assets and examination of the judgment debtor",
    ],
    process: [
      {
        title: "Find the assets",
        detail:
          "Bank accounts, receivables, immovable property, shares and vehicles. An execution petition without identified assets rarely recovers anything.",
      },
      {
        title: "Choose the mode",
        detail:
          "Attachment, garnishee, sale, or arrest and detention in the limited cases where it is available. Garnishee against a solvent debtor of the judgment debtor is frequently the fastest route.",
      },
      {
        title: "Meet the objections",
        detail:
          "Third-party claims and objections under Order XXI are the usual delaying tactic and must be answered on the record of title.",
      },
    ],
    statutes: [
      "Code of Civil Procedure, 1908 — Order XXI, Sections 51 to 54",
      "Arbitration and Conciliation Act, 1996 — Sections 36, 9",
      "Limitation Act, 1963 — Article 136",
    ],
    timeline:
      "Execution is subject to a twelve-year limitation under Article 136. In practice recovery takes six months to several years depending on asset identification and objections.",
    faqs: [
      {
        question: "How long do I have to execute a decree?",
        answer:
          "Twelve years from the date the decree becomes enforceable, under Article 136 of the Limitation Act. That is a long period, but assets dissipate quickly, so delay usually costs recovery rather than the right to execute.",
      },
      {
        question: "Can an arbitral award be executed like a decree?",
        answer:
          "Yes. Under Section 36 of the Arbitration and Conciliation Act an award is enforceable as a decree of the court once the time for challenge has expired. Since the 2015 amendments, merely filing a Section 34 challenge does not automatically stay enforcement — a separate stay application is required and the court may impose conditions.",
      },
    ],
    order: 31,
  },
];

export const getSubServices = (): SubService[] =>
  [...subServices].sort((a, b) => a.order - b.order);

export const getSubServiceBySlug = (
  parentSlug: string,
  slug: string
): SubService | undefined =>
  subServices.find((s) => s.parentSlug === parentSlug && s.slug === slug);

export const getSubServicesFor = (parentSlug: string): SubService[] =>
  getSubServices().filter((s) => s.parentSlug === parentSlug);

export const getAllSubServicePairs = (): { slug: string; topic: string }[] =>
  subServices.map((s) => ({ slug: s.parentSlug, topic: s.slug }));

export const getRelatedSubServices = (
  parentSlug: string,
  slug: string,
  limit = 4
): SubService[] =>
  getSubServicesFor(parentSlug)
    .filter((s) => s.slug !== slug)
    .slice(0, limit);
