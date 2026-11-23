/**
 * Notice-type pages — Appendix A of the SEO Implementation Plan (18 pages).
 *
 * These are the fastest-ranking pages available to the firm and, per the plan,
 * they carry the first two quarters of enquiries. The reason is intent: someone
 * searching "DRC-01 reply" or "what is a 148A(b) notice" is holding the document
 * in their hand and has a deadline running. That is as close to the point of
 * instruction as search gets.
 *
 * Each notice nests beneath its service pillar at
 * /services/{parentSlug}/{slug}, so the hierarchy reads pillar -> notice for
 * both visitors and crawlers, and link equity flows down from the pillar rather
 * than sideways across a flat layer.
 *
 * Titles follow W1-06: `seoTitle` is kept short because layout.tsx appends
 * " | Judicium Arbitration" (23 chars) and the rendered title must clear ~62.
 */

export interface NoticeFAQ {
  question: string;
  answer: string;
}

export interface NoticeType {
  slug: string;
  /** Service pillar this sits beneath — must match a ServiceLine slug. */
  parentSlug: string;
  /** Canonical name of the notice — schema and breadcrumbs. */
  title: string;
  /** The <title>. Keep under ~39 chars. */
  seoTitle: string;
  h1: string;
  shortTitle: string;
  metaDescription: string;
  keywords: string[];
  /** The statutory provision or form number, shown as a badge. */
  provision: string;
  /** What the notice actually is, in plain terms. */
  whatItIs: string;
  /** What triggers it being issued. */
  issuedWhen: string;
  /** The deadline — the single most important fact on the page. */
  deadline: string;
  /** What happens if it is ignored. */
  ifIgnored: string;
  /** How a reply is put together. */
  howToReply: string[];
  /** What the client should gather. */
  documents: string[];
  statutes: string[];
  faqs: NoticeFAQ[];
  order: number;
}

export const noticeTypes: NoticeType[] = [
  // ---------------------------------------------------------------- GST (5)
  {
    slug: "drc-01-show-cause-notice",
    parentSlug: "gst-notice-reply",
    title: "GST DRC-01 Show Cause Notice",
    seoTitle: "GST DRC-01 Show Cause Notice Reply",
    h1: "Reply to a GST DRC-01 Show Cause Notice",
    shortTitle: "DRC-01",
    metaDescription:
      "Received Form DRC-01? It is the formal GST show cause notice under Section 73 or 74. Reply window, consequences and how we respond. Call +91-9899686394.",
    keywords: [
      "DRC-01 reply",
      "GST show cause notice reply",
      "Form DRC-01 format",
      "Section 73 GST notice",
      "Section 74 GST notice",
    ],
    provision: "Form DRC-01 · Section 73 / 74, CGST Act",
    whatItIs:
      "DRC-01 is the formal show cause notice that commences GST adjudication. It sets out the tax the department says is short-paid, the interest and penalty proposed, and the grounds relied on. Everything that follows — the order, the recovery, the appeal — proceeds from this notice.",
    issuedWhen:
      "After the proper officer forms a view that tax has not been paid, has been short-paid, or that input tax credit has been wrongly availed. Section 73 is invoked where there is no allegation of fraud; Section 74 where fraud, wilful misstatement or suppression is alleged, and it carries a far higher penalty.",
    deadline:
      "The reply is due within the period stated in the notice, ordinarily 30 days. The adjudication order must then be passed within three years of the annual return due date under Section 73, or five years under Section 74.",
    ifIgnored:
      "The officer may adjudicate on the material already on record and pass an ex parte order confirming the entire demand with interest and penalty. The demand becomes recoverable, and the only remedy left is an appeal requiring a pre-deposit of 10 per cent of the disputed tax.",
    howToReply: [
      "Identify whether Section 73 or 74 is invoked — the penalty exposure differs sharply",
      "Reconcile GSTR-1, GSTR-3B and GSTR-2A/2B against the books for the period",
      "Address each allegation separately rather than replying in general terms",
      "Annex invoices, e-way bills, ledgers and payment proof indexed to each point",
      "Request a personal hearing and attend it",
      "File written submissions on anything raised orally at the hearing",
    ],
    documents: [
      "The DRC-01 notice and any preceding DRC-01A",
      "GSTR-1, GSTR-3B and GSTR-9 for the period",
      "GSTR-2A / 2B download for the period",
      "Purchase and sales registers",
      "Invoices and e-way bills for the transactions questioned",
      "Proof of payment to suppliers",
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017 — Sections 73, 74, 75",
      "Central Goods and Services Tax Rules, 2017 — Rule 142",
    ],
    faqs: [
      {
        question: "How long do I have to reply to a DRC-01?",
        answer:
          "The notice states the period, which is ordinarily 30 days from service. An extension can be requested but is not guaranteed, and the request itself should be made in writing before the period expires rather than after.",
      },
      {
        question: "What is the difference between Section 73 and Section 74?",
        answer:
          "Section 73 applies where tax is short-paid for reasons other than fraud, and penalty is limited — nil if tax and interest are paid before the notice, and 10 per cent of tax or ten thousand rupees in the order. Section 74 applies where fraud, wilful misstatement or suppression of facts is alleged, carries penalty equal to the tax, and extends the limitation period from three years to five. Whether the department can sustain the Section 74 allegation is frequently the central issue.",
      },
      {
        question: "Can I pay and close the matter?",
        answer:
          "Yes. Under Section 73(8), paying the tax with interest within 30 days of the notice means no penalty is payable and proceedings are deemed concluded. Under Section 74(8), payment within 30 days with a penalty of 25 per cent of tax concludes the matter. Whether that is wiser than contesting depends on the strength of the department's case.",
      },
    ],
    order: 1,
  },
  {
    slug: "drc-01a-intimation",
    parentSlug: "gst-notice-reply",
    title: "GST DRC-01A Intimation of Liability",
    seoTitle: "GST DRC-01A Reply",
    h1: "Reply to a GST DRC-01A Intimation",
    shortTitle: "DRC-01A",
    metaDescription:
      "Form DRC-01A is a pre-notice intimation under Rule 142(1A). A proper reply can stop a DRC-01 being issued at all. Call +91-9899686394.",
    keywords: [
      "DRC-01A reply",
      "DRC-01A format",
      "Rule 142(1A) intimation",
      "GST pre notice intimation",
      "Part B DRC-01A",
    ],
    provision: "Form DRC-01A · Rule 142(1A), CGST Rules",
    whatItIs:
      "DRC-01A is an intimation of ascertained liability served before formal proceedings begin. It tells you what the officer believes is payable and invites you to pay or explain. It is not yet a show cause notice, and that distinction is the opportunity it represents.",
    issuedWhen:
      "Before issuing a DRC-01, where the proper officer has ascertained a liability and considers it appropriate to communicate it first. It frequently follows a return scrutiny or a mismatch flagged by the system.",
    deadline:
      "Part B of Form DRC-01A — the reply — is ordinarily due within 15 days, or such period as the intimation states.",
    ifIgnored:
      "The officer proceeds to issue a DRC-01 show cause notice and formal adjudication begins, with the longer timelines, higher penalty exposure and appeal pre-deposit that follow from it.",
    howToReply: [
      "Reply in Part B of Form DRC-01A on the portal within the stated period",
      "Accept what is genuinely payable and pay it, to limit interest and penalty",
      "Dispute the rest with the reconciliation and documents that support it",
      "Where the liability arises from a supplier default, say so and evidence it",
      "Keep the reply precise — this is the cheapest stage at which to close the matter",
    ],
    documents: [
      "The DRC-01A intimation",
      "Returns for the period intimated",
      "GSTR-2A / 2B reconciliation",
      "Supplier invoices and payment proof",
      "Any earlier correspondence with the department",
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017 — Sections 73(5), 74(5)",
      "Central Goods and Services Tax Rules, 2017 — Rule 142(1A)",
    ],
    faqs: [
      {
        question: "Is DRC-01A a show cause notice?",
        answer:
          "No. It is a pre-notice intimation under Rule 142(1A) of ascertained liability. The formal show cause notice is DRC-01. The practical significance is that a well-made reply at the DRC-01A stage can prevent DRC-01 being issued, which avoids adjudication, the penalty exposure and the appeal pre-deposit entirely.",
      },
      {
        question: "Must I reply to a DRC-01A?",
        answer:
          "There is no penalty for not replying as such, but failing to reply effectively guarantees a DRC-01 will follow. Since the intimation is the cheapest opportunity to resolve the matter, ignoring it trades a 15-day drafting exercise for a full adjudication.",
      },
      {
        question: "Can I pay part and dispute the rest?",
        answer:
          "Yes, and it is often the right approach. Paying the portion genuinely payable stops interest running on it and demonstrates good faith, while the disputed portion is addressed on the merits in Part B. The reply should be explicit about which is which.",
      },
    ],
    order: 2,
  },
  {
    slug: "asmt-10-scrutiny-notice",
    parentSlug: "gst-notice-reply",
    title: "GST ASMT-10 Scrutiny Notice",
    seoTitle: "GST ASMT-10 Scrutiny Notice Reply",
    h1: "Reply to a GST ASMT-10 Scrutiny Notice",
    shortTitle: "ASMT-10",
    metaDescription:
      "Form ASMT-10 flags discrepancies in your GST returns. Reply in ASMT-11 within 30 days or face a DRC-01. Call +91-9899686394.",
    keywords: [
      "ASMT-10 reply",
      "ASMT-11 format",
      "GST scrutiny notice",
      "GSTR-1 3B mismatch notice",
      "GSTR-2A mismatch reply",
    ],
    provision: "Form ASMT-10 · Section 61, CGST Act",
    whatItIs:
      "ASMT-10 is issued when return scrutiny throws up a discrepancy — typically between GSTR-1 and GSTR-3B, or between credit claimed in GSTR-3B and credit reflected in GSTR-2A or 2B. It asks you to explain the difference.",
    issuedWhen:
      "On scrutiny of returns under Section 61, usually generated from system-flagged mismatches rather than from a physical audit.",
    deadline:
      "The explanation is due in Form ASMT-11 within 30 days of service, or such further period as the officer permits.",
    ifIgnored:
      "Where no satisfactory explanation is furnished within the period, the officer may initiate proceedings under Section 65, 66 or 67, or proceed to determine the tax under Section 73 or 74 — which means a DRC-01.",
    howToReply: [
      "Download GSTR-1, 3B, 9 and 2A/2B for the period and reconcile line by line",
      "Classify each discrepancy: timing difference, clerical error, or genuine short payment",
      "Explain timing differences with the period in which the entry was actually reported",
      "Pay any genuine shortfall with interest and say so in the reply",
      "File the explanation in Form ASMT-11 within the window",
    ],
    documents: [
      "The ASMT-10 notice and the annexure of discrepancies",
      "GSTR-1, GSTR-3B and GSTR-9 for the period",
      "GSTR-2A / 2B download",
      "Sales and purchase registers",
      "Credit and debit notes issued",
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017 — Sections 61, 73, 74",
      "Central Goods and Services Tax Rules, 2017 — Rule 99",
    ],
    faqs: [
      {
        question: "What is the reply form for ASMT-10?",
        answer:
          "Form ASMT-11, filed on the portal within 30 days. If the officer is satisfied with the explanation, an order in Form ASMT-12 is issued accepting it and the matter closes there.",
      },
      {
        question: "Most ASMT-10 notices are mismatches. Is that serious?",
        answer:
          "Often not, in substance. A large proportion of these notices arise from timing differences — an invoice reported in GSTR-1 in one month and the tax discharged in GSTR-3B in another — or from a supplier filing late so the credit appears in 2A in a later period. They are serious only in that ignoring them escalates them to a DRC-01.",
      },
      {
        question: "Can ASMT-10 lead to a demand?",
        answer:
          "Not directly. ASMT-10 is a scrutiny notice, not a demand. But if the explanation is not furnished or is not accepted, the officer proceeds under Section 73 or 74, and that is where a demand with interest and penalty is raised.",
      },
    ],
    order: 3,
  },
  {
    slug: "reg-17-cancellation-notice",
    parentSlug: "gst-notice-reply",
    title: "GST REG-17 Registration Cancellation Notice",
    seoTitle: "GST REG-17 Cancellation Notice",
    h1: "Reply to a GST REG-17 Cancellation Notice",
    shortTitle: "REG-17",
    metaDescription:
      "Form REG-17 proposes cancelling your GST registration. Reply in REG-18 within 7 working days, or apply for revocation in REG-21. Call +91-9899686394.",
    keywords: [
      "REG-17 reply",
      "GST registration cancellation notice",
      "REG-18 format",
      "GST revocation REG-21",
      "GST registration restore",
    ],
    provision: "Form REG-17 · Section 29, CGST Act",
    whatItIs:
      "REG-17 is a show cause notice proposing to cancel your GST registration. The usual grounds are continuous non-filing of returns, non-commencement of business, or registration obtained by fraud.",
    issuedWhen:
      "Where the proper officer has reason to believe the registration is liable to be cancelled under Section 29, most commonly after six months of non-filing for a regular taxpayer or three consecutive tax periods for a composition taxpayer.",
    deadline:
      "The reply in Form REG-18 is due within seven working days of service. If cancellation has already been ordered, revocation is applied for in Form REG-21, ordinarily within 30 days of the order.",
    ifIgnored:
      "The registration is cancelled. The business can no longer issue tax invoices or pass on credit, customers who require a registered supplier fall away, and continuing to trade on a cancelled registration carries penalty exposure.",
    howToReply: [
      "Read the ground stated — the reply must answer that ground specifically",
      "Where non-filing is alleged, file every outstanding return before replying",
      "Pay the tax, interest and late fee due on those returns",
      "Reply in Form REG-18 within seven working days, annexing proof of filing",
      "If cancellation is already ordered, file REG-21 for revocation promptly",
    ],
    documents: [
      "The REG-17 notice",
      "List of returns outstanding and proof of filing",
      "Challans for tax, interest and late fee paid",
      "Proof of business premises and ongoing activity",
      "Bank statements showing business operations",
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017 — Sections 29, 30",
      "Central Goods and Services Tax Rules, 2017 — Rules 22, 23",
    ],
    faqs: [
      {
        question: "My registration is already cancelled. Can it be restored?",
        answer:
          "Yes. An application for revocation is made in Form REG-21, ordinarily within 30 days of service of the cancellation order, and that period has been extended by notification on several occasions. Revocation requires all outstanding returns to be filed and the tax, interest and late fee paid.",
      },
      {
        question: "Can I keep trading while cancellation is pending?",
        answer:
          "Until the cancellation order is passed the registration remains valid and you should continue to comply. Once cancelled, you cannot collect tax or issue tax invoices, and doing so attracts penalty. Supplies made in the interim still carry liability, so this is not a period to trade through casually.",
      },
      {
        question: "The cancellation is backdated. Does that matter?",
        answer:
          "It can matter a great deal, because a retrospective cancellation disturbs credit already passed to customers for the intervening period. Courts have required officers to give reasons for a retrospective date and have set aside orders where the consequence was not considered. It is a ground worth taking.",
      },
    ],
    order: 4,
  },
  {
    slug: "apl-01-gst-appeal",
    parentSlug: "gst-notice-reply",
    title: "GST Appeal in Form APL-01",
    seoTitle: "GST Appeal in Form APL-01",
    h1: "GST Appeal Against a Demand Order (APL-01)",
    shortTitle: "APL-01 appeal",
    metaDescription:
      "Appeal a GST demand order in Form APL-01 within 3 months, with a 10% pre-deposit of the disputed tax. Call +91-9899686394.",
    keywords: [
      "GST appeal APL-01",
      "GST appeal time limit",
      "GST appeal pre-deposit",
      "appeal against GST demand order",
      "Section 107 GST appeal",
    ],
    provision: "Form APL-01 · Section 107, CGST Act",
    whatItIs:
      "APL-01 is the first appeal against an order passed by an adjudicating authority. It goes to the Appellate Authority and is the ordinary route once a demand has been confirmed.",
    issuedWhen:
      "Filed by the taxpayer after an adverse order — typically a demand confirmed under Section 73 or 74, a rejected refund, or a cancellation of registration.",
    deadline:
      "Three months from communication of the order, extendable by one further month on sufficient cause shown. The limitation is strict and the Supreme Court has held that the Limitation Act does not extend it beyond that further month.",
    ifIgnored:
      "The order becomes final and recoverable. Recovery proceedings follow, including attachment of bank accounts under Section 79, and the merits can no longer be argued.",
    howToReply: [
      "Diarise the three-month limitation from the date of communication, not the order date",
      "Pay the mandatory pre-deposit of 10 per cent of the disputed tax",
      "Draft grounds of appeal addressing both the findings and the procedure followed",
      "Annex the order appealed against and the record relied on below",
      "Consider in parallel whether a writ lies — for instance where natural justice was denied",
    ],
    documents: [
      "The order appealed against, with the date of communication",
      "The original show cause notice and your reply",
      "Proof of pre-deposit",
      "All documents filed before the adjudicating authority",
      "Any hearing record or written submissions",
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017 — Sections 107, 112",
      "Central Goods and Services Tax Rules, 2017 — Rule 108",
    ],
    faqs: [
      {
        question: "What is the pre-deposit for a GST appeal?",
        answer:
          "Ten per cent of the tax in dispute, in addition to the admitted liability in full. Without it the appeal is not entertained. For a second appeal before the Appellate Tribunal a further deposit applies under Section 112.",
      },
      {
        question: "I missed the three-month deadline. Is anything available?",
        answer:
          "The Appellate Authority can condone a delay of up to one further month on sufficient cause. Beyond four months in total, the Supreme Court has held that the authority has no power to condone, because Section 107 is a complete code on limitation. The remaining option is a writ petition, which is discretionary and succeeds only on limited grounds such as a breach of natural justice.",
      },
      {
        question: "Should I appeal or file a writ petition?",
        answer:
          "Appeal is the ordinary remedy and should normally be pursued. A writ is appropriate where the order was passed without jurisdiction, in breach of natural justice, or where the appellate remedy is not efficacious — for instance where the Appellate Tribunal has not been constituted for the relevant period. Courts generally decline writs where an appeal was available and not taken.",
      },
    ],
    order: 5,
  },

  // -------------------------------------------------------- Income tax (7)
  {
    slug: "section-143-2-scrutiny-notice",
    parentSlug: "income-tax-notice-reply",
    title: "Income Tax Notice under Section 143(2)",
    seoTitle: "Section 143(2) Scrutiny Notice",
    h1: "Reply to a Section 143(2) Scrutiny Notice",
    shortTitle: "Section 143(2)",
    metaDescription:
      "A Section 143(2) notice means your return is under scrutiny. Faceless assessment decides on what you upload. Call +91-9899686394.",
    keywords: [
      "Section 143(2) notice",
      "income tax scrutiny notice reply",
      "faceless assessment reply",
      "scrutiny assessment India",
      "143(2) time limit",
    ],
    provision: "Section 143(2), Income-tax Act",
    whatItIs:
      "A Section 143(2) notice tells you your return has been selected for scrutiny. The assessing officer is not accepting the return as filed and intends to examine it. Under faceless assessment this happens on the portal, and the record you upload is substantially the case you will be judged on.",
    issuedWhen:
      "Where the return is selected for scrutiny, whether by risk-based computer selection or on specified criteria. Selection is not an allegation of wrongdoing in itself.",
    deadline:
      "The notice must be served within three months from the end of the financial year in which the return was filed. Your responses are due by the dates specified on the portal, usually 15 days per notice.",
    ifIgnored:
      "Best judgment assessment under Section 144, where the officer assesses on the material available. Penalty under Section 272A for non-compliance is also attracted, and the resulting assessment is far harder to dislodge on appeal.",
    howToReply: [
      "Check first that the notice was served within the statutory three-month window",
      "Read exactly which items are under examination and answer those",
      "Upload a complete, indexed evidentiary record — faceless assessment decides on it",
      "Explain the accounting treatment, not just the figure",
      "Request a video hearing where the issue is complex or the record is being misread",
      "Respond to every subsequent notice in the sequence within its window",
    ],
    documents: [
      "The notice and the return filed for the year",
      "Computation of income and tax audit report",
      "Books of account and bank statements",
      "Contracts and invoices for transactions questioned",
      "Confirmations from parties where loans or creditors are examined",
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 143(2), 143(3), 144",
      "Faceless Assessment Scheme provisions under Section 144B",
    ],
    faqs: [
      {
        question: "What is the time limit for a Section 143(2) notice?",
        answer:
          "It must be served within three months from the end of the financial year in which the return was furnished. Service outside that period is a jurisdictional defect, and assessments founded on a late notice have been quashed on that ground alone — so the date of service is worth verifying before anything else.",
      },
      {
        question: "Does scrutiny mean I have done something wrong?",
        answer:
          "No. Most cases are picked by risk-based computer-aided selection on parameters such as high-value transactions or mismatches with third-party information. It means the return is being examined, not that an adverse view has been taken. How the examination is answered is what determines the outcome.",
      },
      {
        question: "Can I get a hearing under faceless assessment?",
        answer:
          "Yes. A request for a personal hearing through video conferencing can be made and, where a variation is proposed to your prejudice, the scheme contemplates an opportunity being given. Requests should be made in writing on the portal, and a refusal to grant one where a substantial variation is proposed is itself a ground of challenge.",
      },
    ],
    order: 6,
  },
  {
    slug: "section-148-reassessment-notice",
    parentSlug: "income-tax-notice-reply",
    title: "Income Tax Notice under Section 148",
    seoTitle: "Section 148 Reassessment Notice",
    h1: "Reply to a Section 148 Reassessment Notice",
    shortTitle: "Section 148",
    metaDescription:
      "A Section 148 notice reopens a past assessment. Limitation under Section 149 and the 148A procedure are the first things to check. Call +91-9899686394.",
    keywords: [
      "Section 148 notice reply",
      "income tax reassessment notice",
      "Section 149 time limit",
      "reopening of assessment",
      "148 notice validity",
    ],
    provision: "Section 148, Income-tax Act",
    whatItIs:
      "A Section 148 notice reopens an assessment for an earlier year because the officer has information suggesting income has escaped assessment. It requires you to file a return for that year, and reassessment then proceeds.",
    issuedWhen:
      "After the Section 148A procedure has been followed — information, a show cause under 148A(b), your reply, and a reasoned order under 148A(d) — and with the sanction of the specified authority under Section 151.",
    deadline:
      "The return in response is due within the period stated in the notice. More importantly, the notice itself must be within the Section 149 limitation: ordinarily three years from the end of the relevant assessment year, extending to ten where escaped income represented as an asset or expenditure exceeds fifty lakh rupees.",
    ifIgnored:
      "The officer proceeds to best judgment reassessment under Section 144 and may also initiate penalty. The jurisdictional objections available at the outset become harder to press once you have participated without taking them.",
    howToReply: [
      "Check limitation under Section 149 before anything on the merits",
      "Check that the Section 148A procedure was actually followed",
      "Check that sanction under Section 151 was obtained from the correct authority",
      "File the return in response, without conceding the validity of the notice",
      "Ask for the reasons recorded and the information relied on, and object to them",
      "Preserve jurisdictional objections in writing at every stage",
    ],
    documents: [
      "The Section 148 notice and the Section 148A(d) order",
      "The original return and computation for the year reopened",
      "The information or material cited by the department",
      "Bank statements and documents for the transaction alleged",
      "Any earlier assessment order for that year",
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 147, 148, 148A, 149, 151",
    ],
    faqs: [
      {
        question: "How far back can my assessment be reopened?",
        answer:
          "Ordinarily three years from the end of the relevant assessment year. That extends to ten years only where the assessing officer has books, documents or evidence revealing that income represented in the form of an asset, expenditure in respect of a transaction, or an entry in the books, amounting to fifty lakh rupees or more, has escaped assessment. Limitation is jurisdictional and cannot be waived by participation.",
      },
      {
        question: "Can a Section 148 notice be challenged?",
        answer:
          "Yes, and reassessment notices are challenged successfully with some regularity. The common grounds are that limitation had expired, that the Section 148A procedure was not followed, that sanction was obtained from the wrong authority, that the reasons recorded disclose no live link to escaped income, or that the notice proceeds on a mere change of opinion. A writ petition is the usual vehicle.",
      },
      {
        question: "Should I file the return asked for if I dispute the notice?",
        answer:
          "Generally yes, and under protest. Filing preserves your position on the merits and avoids a best judgment assessment, while a clear written reservation of your jurisdictional objections keeps those arguments alive. Refusing to file rarely improves the position and usually worsens it.",
      },
    ],
    order: 7,
  },
  {
    slug: "section-148a-b-show-cause",
    parentSlug: "income-tax-notice-reply",
    title: "Income Tax Notice under Section 148A(b)",
    seoTitle: "Section 148A(b) Notice Reply",
    h1: "Reply to a Section 148A(b) Show Cause Notice",
    shortTitle: "Section 148A(b)",
    metaDescription:
      "Section 148A(b) is the stage at which reassessment can be stopped before it starts. Reply with the information cited addressed. Call +91-9899686394.",
    keywords: [
      "Section 148A(b) notice reply",
      "148A(b) show cause",
      "148A(d) order",
      "reassessment show cause reply",
      "income tax 148A procedure",
    ],
    provision: "Section 148A(b), Income-tax Act",
    whatItIs:
      "Section 148A(b) requires the assessing officer to give you an opportunity to show cause, along with the information relied upon, before issuing a reassessment notice. It is the gate in front of Section 148 — and the best opportunity to close the matter.",
    issuedWhen:
      "Before any Section 148 notice can issue, where the officer has information suggesting income has escaped assessment for the relevant year.",
    deadline:
      "Not less than seven days and not more than thirty days from service, or such further period as allowed on application. The officer must then pass an order under Section 148A(d) deciding whether it is a fit case to issue a notice.",
    ifIgnored:
      "The officer passes the 148A(d) order on the material available, almost invariably holding it a fit case, and a Section 148 notice follows with full reassessment proceedings behind it.",
    howToReply: [
      "Demand the information relied on if it was not supplied with the notice",
      "Address the specific transaction cited — generic denials achieve nothing here",
      "Produce the documentary explanation now rather than saving it for reassessment",
      "Where the amount is below the Section 149 threshold for the extended period, say so",
      "Take every limitation and sanction point expressly, in writing",
    ],
    documents: [
      "The 148A(b) notice and any annexed information",
      "The return and computation for the year in question",
      "Bank statements covering the transaction cited",
      "Purchase or sale documents, agreements and confirmations",
      "Source-of-funds evidence where an asset is alleged",
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 148A, 148, 149, 151",
    ],
    faqs: [
      {
        question: "Why does the 148A(b) stage matter so much?",
        answer:
          "Because it is the only stage at which reassessment can be prevented rather than defended. The officer must consider your reply and pass a reasoned order under Section 148A(d) before a Section 148 notice can issue. A reply that explains the transaction with documents frequently results in an order holding it is not a fit case, which ends the matter without reassessment.",
      },
      {
        question: "The notice does not attach the information relied on.",
        answer:
          "Section 148A(b) requires the information to be supplied with the notice, because you cannot meaningfully show cause against material you have not seen. Ask for it in writing immediately and ask for time to run from the date it is supplied. Orders passed without furnishing the information have been set aside on that ground.",
      },
      {
        question: "How much time do I get to reply?",
        answer:
          "The notice must allow not less than seven days and not more than thirty. Where the information is voluminous or was supplied late, an extension should be sought in writing before the period expires, and the request itself becomes part of the record if the matter is later challenged.",
      },
    ],
    order: 8,
  },
  {
    slug: "section-139-9-defective-return",
    parentSlug: "income-tax-notice-reply",
    title: "Income Tax Notice under Section 139(9)",
    seoTitle: "Section 139(9) Defective Return",
    h1: "Responding to a Section 139(9) Defective Return Notice",
    shortTitle: "Section 139(9)",
    metaDescription:
      "A defective return notice gives you 15 days to rectify. If you do not, the return is treated as never filed. Call +91-9899686394.",
    keywords: [
      "Section 139(9) notice",
      "defective return notice reply",
      "how to rectify defective return",
      "139(9) time limit",
      "invalid return income tax",
    ],
    provision: "Section 139(9), Income-tax Act",
    whatItIs:
      "A notice under Section 139(9) says your return is defective — usually something technical such as a missing audit report, incomplete schedules, or tax payable not discharged before filing. It asks you to fix it.",
    issuedWhen:
      "On processing, where the return does not comply with the requirements in the Explanation to Section 139(9).",
    deadline:
      "Fifteen days from intimation, extendable on application to the assessing officer.",
    ifIgnored:
      "The return is treated as invalid — in law, as though it was never filed. That forfeits carry-forward of losses, exposes you to interest under Section 234A and to penalty, and can lead to best judgment assessment.",
    howToReply: [
      "Identify the specific defect code stated in the intimation",
      "Correct exactly that defect — a full revision is usually not required",
      "Pay any self-assessment tax outstanding, since non-payment is itself a defect",
      "File the response on the portal within fifteen days",
      "Apply for an extension in writing if the audit report or records are not ready",
    ],
    documents: [
      "The 139(9) intimation with the defect description",
      "The return as originally filed",
      "Tax audit report where applicable",
      "Challans for self-assessment tax",
      "Financial statements for the year",
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 139(9), 234A, 234F",
    ],
    faqs: [
      {
        question: "What happens if I do not rectify a defective return?",
        answer:
          "The return is treated as invalid, which in law means no return was filed for that year. The practical consequences are losing the right to carry forward losses, interest under Section 234A on any tax due, late filing fee under Section 234F, and exposure to best judgment assessment. The defects are almost always technical, so the real risk is simply ignoring the notice.",
      },
      {
        question: "Can the fifteen days be extended?",
        answer:
          "Yes. The assessing officer may condone the delay and treat the return as valid where the application is made before the assessment is completed. The request should be in writing with the reason, and should be made before the period expires rather than after.",
      },
      {
        question: "What are the most common defects?",
        answer:
          "Tax payable shown in the return but not paid before filing; the tax audit report not being filed where it was required; incomplete profit and loss or balance sheet schedules; a mismatch between income declared and the TDS schedule; and presumptive scheme returns filed in the wrong form. Most are corrected in a single response.",
      },
    ],
    order: 9,
  },
  {
    slug: "section-245-refund-adjustment",
    parentSlug: "income-tax-notice-reply",
    title: "Income Tax Intimation under Section 245",
    seoTitle: "Section 245 Refund Adjustment",
    h1: "Responding to a Section 245 Refund Adjustment Intimation",
    shortTitle: "Section 245",
    metaDescription:
      "Section 245 requires prior intimation before your refund is set off against an old demand. Respond on the portal disputing it. Call +91-9899686394.",
    keywords: [
      "Section 245 intimation",
      "refund adjusted against demand",
      "income tax refund set off",
      "disagree with demand portal",
      "outstanding demand response",
    ],
    provision: "Section 245, Income-tax Act",
    whatItIs:
      "An intimation under Section 245 proposes to adjust a refund due to you against an outstanding demand for an earlier year. It is a proposal requiring your response, not a completed adjustment.",
    issuedWhen:
      "Where a refund is determined for one year while a demand stands outstanding for another, whether or not that demand is disputed.",
    deadline:
      "Ordinarily thirty days from the intimation to respond on the portal, agreeing or disagreeing with the demand and stating reasons.",
    ifIgnored:
      "Silence is treated as agreement and the refund is adjusted. Recovering it afterwards is considerably harder than objecting within the window.",
    howToReply: [
      "Check what the old demand actually relates to — many are stale or already paid",
      "Respond on the portal selecting disagree, with the reason",
      "Where the demand was already paid, attach the challan and reconcile it",
      "Where an appeal or stay is pending against that demand, say so and attach proof",
      "Where the demand arises from a TDS mismatch, reconcile Form 26AS and AIS",
    ],
    documents: [
      "The Section 245 intimation",
      "The demand notice for the earlier year",
      "Challans evidencing payment of that demand",
      "Appeal memo and any stay order",
      "Form 26AS and AIS for the relevant year",
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 245, 220(6), 237",
    ],
    faqs: [
      {
        question: "Can my refund be adjusted without telling me?",
        answer:
          "No. Section 245 requires prior intimation in writing of the proposed action and an opportunity to respond. Adjustments made without that intimation, or made despite a response disputing the demand, have been set aside repeatedly by the courts and by the appellate authorities.",
      },
      {
        question: "The demand it refers to is from years ago and I thought it was paid.",
        answer:
          "This is common. Old demands frequently persist on the system because a challan was not matched, a rectification was never given effect, or an appellate order was not implemented. Respond on the portal disputing the demand and attach the challan or the order. The demand should then be corrected at source rather than merely set off.",
      },
      {
        question: "My appeal against that demand is pending. Can it still be adjusted?",
        answer:
          "A pending appeal does not by itself bar adjustment, but where a stay has been granted under Section 220(6) or by the appellate authority, adjustment during the stay is improper. Where no stay has been sought, applying for one is the practical step, alongside the portal response.",
      },
    ],
    order: 10,
  },
  {
    slug: "section-156-demand-notice",
    parentSlug: "income-tax-notice-reply",
    title: "Income Tax Demand Notice under Section 156",
    seoTitle: "Section 156 Demand Notice",
    h1: "Responding to a Section 156 Income Tax Demand Notice",
    shortTitle: "Section 156",
    metaDescription:
      "A Section 156 notice demands tax within 30 days. Appeal and apply for stay under Section 220(6) before recovery starts. Call +91-9899686394.",
    keywords: [
      "Section 156 demand notice",
      "income tax demand notice reply",
      "stay of demand Section 220(6)",
      "20 percent deposit stay",
      "income tax recovery proceedings",
    ],
    provision: "Section 156, Income-tax Act",
    whatItIs:
      "A Section 156 notice is the formal demand that follows an assessment, reassessment or penalty order. It states the sum payable and the period within which to pay.",
    issuedWhen:
      "On completion of any order under the Act determining tax, interest, penalty or any other sum payable.",
    deadline:
      "Thirty days from service, unless a shorter period is permitted. An appeal to the Commissioner (Appeals) must be filed within thirty days of the order.",
    ifIgnored:
      "You are treated as an assessee in default under Section 220(4). Interest runs at one per cent per month under Section 220(2), and recovery under Section 226 follows — attachment of bank accounts, garnishee notices to debtors, and attachment of property.",
    howToReply: [
      "File the appeal within thirty days — the appeal is what makes a stay possible",
      "Apply for stay under Section 220(6) to the assessing officer, with reasons",
      "Press for a deposit lower than twenty per cent where the assessment is weak",
      "If the officer refuses or ignores the application, approach the senior authority",
      "Check the computation — demands frequently include arithmetical and credit errors",
    ],
    documents: [
      "The demand notice and the underlying assessment order",
      "The appeal memo and proof of filing",
      "Computation of the disputed portion",
      "Evidence of financial hardship if relied on",
      "Form 26AS and challans showing credits not given",
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 156, 220, 221, 226, 246A",
    ],
    faqs: [
      {
        question: "Do I have to pay twenty per cent to get a stay?",
        answer:
          "Twenty per cent is the figure in the administrative instructions, but it is not a statutory floor. Where the assessment is prima facie unsustainable, where the issue is covered by a binding decision in your favour, or where recovery would cause genuine hardship, a lower deposit or an unconditional stay can be sought, and both have been granted. The application must make that case on the facts.",
      },
      {
        question: "What happens if I do not pay within thirty days?",
        answer:
          "You become an assessee in default. Interest accrues at one per cent per month under Section 220(2) and the department may proceed under Section 226 — attaching bank accounts, issuing garnishee notices to your debtors, and attaching movable and immovable property. Recovery can begin quickly once the period lapses, so the stay application should not wait.",
      },
      {
        question: "Can I challenge the demand itself?",
        answer:
          "Not through the demand notice, which merely gives effect to the order. The order is challenged by appeal to the Commissioner (Appeals) within thirty days. Separately, arithmetical mistakes and unallowed credits in the computation are corrected by a rectification application under Section 154, which is often faster for those limited issues.",
      },
    ],
    order: 11,
  },
  {
    slug: "section-271-penalty-notice",
    parentSlug: "income-tax-notice-reply",
    title: "Income Tax Penalty Notice under Section 271",
    seoTitle: "Section 271 Penalty Notice",
    h1: "Reply to an Income Tax Penalty Notice",
    shortTitle: "Penalty notice",
    metaDescription:
      "Penalty notices under Sections 270A and 271 are separate proceedings with their own defences. Reply before the order. Call +91-9899686394.",
    keywords: [
      "Section 271 penalty notice",
      "Section 270A under reporting",
      "penalty notice reply income tax",
      "misreporting of income penalty",
      "271(1)(c) notice",
    ],
    provision: "Sections 270A / 271, Income-tax Act",
    whatItIs:
      "A penalty notice begins proceedings separate from the assessment. Penalty does not follow automatically from an addition to income — it requires its own finding, and it carries its own defences.",
    issuedWhen:
      "Usually alongside or after an assessment order making an addition. Section 270A applies to under-reporting and misreporting for assessment years from 2017-18; Section 271(1)(c) applies to earlier years.",
    deadline:
      "The reply is due within the period stated, commonly 15 to 30 days. The penalty order itself is subject to limitation under Section 275.",
    ifIgnored:
      "Penalty is imposed on the material available — fifty per cent of tax on under-reported income, or two hundred per cent where misreporting is found. The order is then separately appealable, but the opportunity to prevent it has gone.",
    howToReply: [
      "Establish whether under-reporting or misreporting is alleged — the rates differ fourfold",
      "Show that the claim was bona fide and that all material facts were disclosed",
      "Rely on Section 270A(6) exclusions where the addition is an estimate or a legal view",
      "Point to the absence of a specific finding in the assessment order where there is none",
      "Consider immunity under Section 270AA where the conditions are met",
    ],
    documents: [
      "The penalty notice and the assessment order",
      "The return, computation and disclosures made",
      "Correspondence and submissions filed during assessment",
      "Authority supporting the position taken",
      "Appeal status against the quantum addition",
    ],
    statutes: [
      "Income-tax Act, 1961 — Sections 270A, 270AA, 271(1)(c), 273B, 275",
    ],
    faqs: [
      {
        question: "Does an addition to my income automatically mean penalty?",
        answer:
          "No. Penalty proceedings are separate and require their own satisfaction and finding. Where the addition rests on an estimate, a difference of opinion on a legal question, or a bona fide claim with full disclosure of material facts, penalty is not sustainable. Section 270A(6) specifically excludes several such situations from under-reported income.",
      },
      {
        question: "What is the difference between under-reporting and misreporting?",
        answer:
          "Under-reporting attracts penalty at fifty per cent of the tax on the under-reported income. Misreporting — which covers misrepresentation or suppression of facts, false entries, and failure to record receipts — attracts two hundred per cent. Because the difference is fourfold, whether the department has established misreporting as opposed to under-reporting is usually the central issue in the reply.",
      },
      {
        question: "What is immunity under Section 270AA?",
        answer:
          "Where penalty is initiated for under-reporting, and the tax and interest on the assessment have been paid and no appeal filed against it, an application can be made within one month from the end of the month in which the order was received. If granted, immunity bars penalty under Section 270A and prosecution. It is not available where misreporting is alleged, and it requires giving up the appeal, so it is a trade-off to weigh carefully.",
      },
    ],
    order: 12,
  },

  // ------------------------------------------------------------ Labour (2)
  {
    slug: "termination-show-cause-reply",
    parentSlug: "labour-court-employment-disputes",
    title: "Employer Show Cause and Termination Letter — Reply",
    seoTitle: "Termination Letter Reply",
    h1: "Replying to a Show Cause or Termination Letter",
    shortTitle: "Termination reply",
    metaDescription:
      "Received a show cause notice or termination letter? What you write now shapes the case. Reply before the inquiry. Call +91-9899686394.",
    keywords: [
      "show cause notice reply employee",
      "termination letter reply format",
      "charge sheet reply employee",
      "domestic inquiry reply",
      "wrongful termination India",
    ],
    provision: "Industrial Disputes Act, 1947",
    whatItIs:
      "A show cause notice or charge sheet begins the disciplinary process. A termination letter ends it. Both call for a written reply, and what is said at this stage frames every argument available later before the Labour Court.",
    issuedWhen:
      "Where an employer alleges misconduct, unsatisfactory performance, or seeks to terminate employment. For a workman, misconduct ordinarily requires a charge sheet and a domestic inquiry before dismissal.",
    deadline:
      "The period stated in the notice, commonly 48 hours to 7 days. A reference of an individual termination under Section 2A must ordinarily be raised within three years of discharge.",
    ifIgnored:
      "The inquiry proceeds ex parte and the findings stand largely unanswered. An employee who did not deny the allegations when given the chance is in a materially weaker position before the Labour Court.",
    howToReply: [
      "Ask for the documents and witness statements relied on before replying",
      "Deny specifically — a general denial is treated as no denial at all",
      "Record procedural defects at the time: no charge sheet, no inquiry, no hearing",
      "Do not resign under pressure; a resignation undercuts a wrongful termination claim",
      "Preserve the appointment letter, salary records, emails and the full correspondence",
    ],
    documents: [
      "The show cause notice, charge sheet or termination letter",
      "Appointment letter and any standing orders or HR policy",
      "Salary slips, bank credits and Form 16",
      "Performance appraisals and internal correspondence",
      "Full and final settlement statement if issued",
    ],
    statutes: [
      "Industrial Disputes Act, 1947 — Sections 2(s), 2A, 11A, 25F",
      "Industrial Employment (Standing Orders) Act, 1946",
      "Shops and Establishments legislation of the relevant State",
    ],
    faqs: [
      {
        question: "Can I be dismissed without an inquiry?",
        answer:
          "For a workman alleged to have committed misconduct, a domestic inquiry complying with natural justice is ordinarily required — a charge sheet, disclosure of the material relied on, an opportunity to respond and to cross-examine. Dismissal without one is frequently set aside, though the employer may be permitted to justify the dismissal by leading evidence before the Labour Court. Section 11A also allows the court to reduce a punishment it finds disproportionate.",
      },
      {
        question: "I was asked to resign instead of being terminated. Should I?",
        answer:
          "Be very careful. A voluntary resignation is generally treated as ending the employment by your own act, which removes the foundation of a wrongful termination claim. Resignation obtained by coercion can be challenged, but proving coercion is difficult. If you are under pressure to resign, say in writing that you do not wish to resign before signing anything.",
      },
      {
        question: "What compensation applies on retrenchment?",
        answer:
          "Section 25F requires, for a workman with at least one year of continuous service, one month's notice or wages in lieu, and compensation equal to fifteen days' average pay for every completed year of service, with notice to the appropriate government. Non-compliance renders the retrenchment void, and reinstatement is the ordinary consequence.",
      },
    ],
    order: 13,
  },
  {
    slug: "labour-commissioner-conciliation-notice",
    parentSlug: "labour-court-employment-disputes",
    title: "Labour Commissioner Conciliation Notice",
    seoTitle: "Labour Conciliation Notice",
    h1: "Responding to a Labour Commissioner Conciliation Notice",
    shortTitle: "Conciliation notice",
    metaDescription:
      "A conciliation notice requires attendance before the Labour Commissioner. A settlement under Section 12(3) binds both parties. Call +91-9899686394.",
    keywords: [
      "labour commissioner notice reply",
      "conciliation proceedings labour",
      "Section 12(3) settlement",
      "industrial dispute conciliation",
      "labour court reference",
    ],
    provision: "Section 12, Industrial Disputes Act",
    whatItIs:
      "A conciliation notice calls the parties before the Conciliation Officer after an industrial dispute has been raised. The officer cannot impose an outcome, but a settlement arrived at is binding and the officer's failure report determines what happens next.",
    issuedWhen:
      "After a workman or union raises a dispute — commonly over termination, unpaid wages, or conditions of service — and the officer takes it up under Section 12.",
    deadline:
      "The date fixed in the notice. Conciliation proceedings are expected to conclude within fourteen days of commencement, though extensions are common in practice.",
    ifIgnored:
      "Non-appearance is recorded and the officer submits a failure report, which may lead to a reference to the Labour Court. For the employer, absence forfeits the cheapest opportunity to settle and leaves the workman's version unanswered on the record.",
    howToReply: [
      "Attend — or send someone properly authorised, with authority to settle",
      "Take the complete employment record: contract, salary, correspondence, inquiry file",
      "Understand that a settlement recorded under Section 12(3) binds both sides",
      "Do not sign a settlement without understanding what is being given up",
      "Where no settlement is reached, ensure your position is recorded accurately",
    ],
    documents: [
      "The conciliation notice and the statement of claim",
      "Appointment letter and service record",
      "Salary records, attendance and leave record",
      "Charge sheet, inquiry proceedings and termination letter",
      "Full and final settlement and statutory dues records",
    ],
    statutes: [
      "Industrial Disputes Act, 1947 — Sections 2A, 10, 12, 18",
    ],
    faqs: [
      {
        question: "Is attendance at conciliation compulsory?",
        answer:
          "The officer has power to require attendance and non-appearance is recorded against the absent party. More practically, conciliation is the least expensive stage at which the dispute can end, and declining to engage simply moves the matter to the Labour Court with your position unstated.",
      },
      {
        question: "Is a settlement in conciliation binding?",
        answer:
          "A settlement arrived at in the course of conciliation proceedings and recorded under Section 12(3) is binding under Section 18(3) — not only on the parties present but, in a collective dispute, on all workmen of the establishment. That is why it should not be signed without understanding exactly what is being settled and what is being given up.",
      },
      {
        question: "What happens if conciliation fails?",
        answer:
          "The officer submits a failure report to the appropriate government, which may refer the dispute for adjudication under Section 10. Separately, an individual workman whose dispute concerns discharge, dismissal, retrenchment or termination may approach the Labour Court directly under Section 2A, without waiting for a government reference.",
      },
    ],
    order: 14,
  },

  // ----------------------------------------------------- Cheque bounce (1)
  {
    slug: "section-138-demand-notice",
    parentSlug: "cheque-bounce-section-138",
    title: "Section 138 Demand Notice",
    seoTitle: "Section 138 Demand Notice",
    h1: "Section 138 Demand Notice — Sending or Receiving",
    shortTitle: "S.138 demand notice",
    metaDescription:
      "The Section 138 demand notice must go within 30 days of the bank return memo. Miss it and the remedy is gone. Call +91-9899686394.",
    keywords: [
      "Section 138 demand notice",
      "cheque bounce notice format",
      "cheque bounce notice time limit",
      "reply to cheque bounce notice",
      "legal notice for cheque dishonour",
    ],
    provision: "Section 138(b), Negotiable Instruments Act",
    whatItIs:
      "The demand notice is the step that converts a dishonoured cheque into a prosecutable offence. Without a valid notice served in time, there is no Section 138 case at all, however clear the debt.",
    issuedWhen:
      "By the payee, after the cheque is returned unpaid for insufficiency of funds or because it exceeds the arrangement with the bank.",
    deadline:
      "Within thirty days of receiving the bank's return memo. The drawer then has fifteen days from receipt to pay. The complaint must be filed within one month of that fifteen-day period expiring.",
    ifIgnored:
      "For the payee: the Section 138 remedy is lost for that presentation, though the cheque may be re-presented within its validity and the civil claim survives. For the drawer: failure to pay within fifteen days completes the offence and the complaint follows.",
    howToReply: [
      "Payee — get the return memo and calculate the thirty days from its date",
      "Payee — demand the cheque amount itself, not interest or costs on top of it",
      "Payee — serve by registered post with acknowledgement and keep the receipt",
      "Drawer — check whether the notice was served within thirty days of the memo",
      "Drawer — check whether it demands more than the cheque amount",
      "Drawer — if the debt is genuine, paying within fifteen days ends the matter",
    ],
    documents: [
      "The original cheque and the bank return memo",
      "The invoice, agreement or loan record behind the cheque",
      "Ledger showing the outstanding amount",
      "Proof of dispatch and delivery of the notice",
      "Any correspondence about the debt or the cheque",
    ],
    statutes: [
      "Negotiable Instruments Act, 1881 — Sections 138, 139, 142",
    ],
    faqs: [
      {
        question: "What if the notice demands more than the cheque amount?",
        answer:
          "It is a recognised line of defence. The statutory demand must be for the cheque amount; a notice that bundles interest, damages or legal costs into the sum demanded has been held defective in a number of decisions, though some courts take the view that a notice remains valid if the cheque amount is separately and clearly identified. The safer course is to demand the cheque amount and claim the rest separately.",
      },
      {
        question: "The drawer refused to accept the notice. Is it served?",
        answer:
          "Generally yes. Where a notice is correctly addressed and sent by registered post, service is presumed even if the addressee refuses it or does not collect it, and the presumption under Section 27 of the General Clauses Act applies. Retain the postal receipt and the tracking record, since they are what prove dispatch.",
      },
      {
        question: "Can I present the cheque again?",
        answer:
          "Yes. A cheque may be presented repeatedly within its validity period of three months from its date, and each dishonour gives a fresh cause of action with a fresh thirty-day notice window. This is the practical remedy where the first notice period was missed, provided the cheque has not expired.",
      },
    ],
    order: 15,
  },

  // ----------------------------------------------------- Legal notice (1)
  {
    slug: "reply-to-legal-notice",
    parentSlug: "legal-notice-drafting-reply",
    title: "Reply to a Legal Notice Received",
    seoTitle: "Reply to a Legal Notice",
    h1: "How to Reply to a Legal Notice",
    shortTitle: "Notice reply",
    metaDescription:
      "Received a legal notice? Silence is pleaded as admission. What to check, what to deny, and what not to concede. Call +91-9899686394.",
    keywords: [
      "reply to legal notice",
      "legal notice reply format",
      "legal notice reply time limit",
      "how to respond to legal notice",
      "ignore legal notice consequences",
    ],
    provision: "Pre-litigation correspondence",
    whatItIs:
      "A legal notice sets out a claim and demands something before proceedings begin. Your reply fixes your position on the record, and it will be read back to you if the matter reaches a court or tribunal.",
    issuedWhen:
      "Before litigation, by a party asserting breach of contract, non-payment, infringement, employment dues, or any other civil claim.",
    deadline:
      "The period stated in the notice, commonly fifteen to thirty days. Statutory notices have fixed periods — a Section 138 demand gives fifteen days to pay, a Section 8 IBC notice ten days to respond.",
    ifIgnored:
      "The sender proceeds, and your silence is pleaded as acquiescence. Courts routinely treat an unanswered allegation as less credibly disputed than one denied at the time. For statutory notices the consequences are automatic rather than evidential.",
    howToReply: [
      "Identify whether the notice is statutory — if so, the period is fixed and strict",
      "Check limitation: a claim out of time is answered on that ground alone",
      "Deny specifically, paragraph by paragraph; a bare general denial carries little weight",
      "Do not admit facts you have not verified against your own records",
      "Set out your own counter-claim if one exists, to preserve it",
      "Reply within the period, by a method that proves service",
    ],
    documents: [
      "The notice received, with the envelope showing the date",
      "The contract or correspondence it relies on",
      "Payment records and ledger for the transaction",
      "Any earlier communication between the parties",
      "Evidence supporting your version of events",
    ],
    statutes: [
      "Indian Contract Act, 1872",
      "Limitation Act, 1963",
      "Code of Civil Procedure, 1908 — Section 80",
      "Commercial Courts Act, 2015 — pre-institution mediation",
    ],
    faqs: [
      {
        question: "What happens if I ignore a legal notice?",
        answer:
          "Nothing automatic for an ordinary notice, but the sender is free to sue and your silence will be put to you as acquiescence. For statutory notices the consequences are concrete: failure to pay within fifteen days of a Section 138 demand completes the offence, and failure to respond to a Section 8 notice under the Insolvency and Bankruptcy Code within ten days allows a petition to be filed.",
      },
      {
        question: "Should I reply myself or through an advocate?",
        answer:
          "There is no legal requirement to reply through an advocate. The risk in replying yourself is admitting facts, acknowledging a debt in a way that revives limitation, or conceding a legal position without realising it. A reply is a document that will be read back to you in court, which is the reason it is usually worth having drafted.",
      },
      {
        question: "Does replying mean I accept the claim?",
        answer:
          "No, provided the reply is drafted as a denial. The danger lies in careless admissions — acknowledging part of a debt, for instance, can restart the limitation period under Section 18 of the Limitation Act. A properly drafted reply denies the claim while recording your own position and any counter-claim.",
      },
    ],
    order: 16,
  },

  // --------------------------------------------------- Money recovery (2)
  {
    slug: "msme-samadhaan-reference",
    parentSlug: "money-recovery-msme-samadhaan",
    title: "MSME Samadhaan Reference — Delayed Payment",
    seoTitle: "MSME Samadhaan Reference",
    h1: "Filing an MSME Samadhaan Delayed Payment Reference",
    shortTitle: "Samadhaan reference",
    metaDescription:
      "Registered MSMEs can refer delayed payments to the Facilitation Council with compound interest at 3x the bank rate. Call +91-9899686394.",
    keywords: [
      "MSME Samadhaan reference",
      "Section 18 MSMED Act",
      "delayed payment MSME",
      "MSE Facilitation Council",
      "MSME interest on delayed payment",
    ],
    provision: "Section 18, MSMED Act, 2006",
    whatItIs:
      "A Samadhaan reference takes a delayed payment dispute to the Micro and Small Enterprises Facilitation Council. The Council first attempts conciliation and, failing that, arbitrates or refers the matter to an institution. It is faster and cheaper than a civil suit.",
    issuedWhen:
      "By a supplier holding Udyam registration as a micro or small enterprise, where the buyer has not paid within the statutory period — forty-five days where a period is agreed, fifteen days where none is.",
    deadline:
      "The reference may be filed once payment is overdue beyond the appointed day. The Council is required to conclude within ninety days of the reference, though in practice it often runs longer. The underlying claim remains subject to the three-year limitation period.",
    ifIgnored:
      "For the supplier, nothing is lost except time and the accrual of a remedy. For the buyer, non-participation does not stop the Council proceeding, and an award carries the seventy-five per cent pre-deposit requirement on any challenge.",
    howToReply: [
      "Confirm Udyam registration was in place — it is the gateway to the remedy",
      "Establish the appointed day and compute interest from it",
      "File the reference on the Samadhaan portal with invoices and acceptance proof",
      "Engage with conciliation — a substantial proportion settle at that stage",
      "If conciliation fails, the matter proceeds to arbitration before the Council",
    ],
    documents: [
      "Udyam registration certificate",
      "Purchase orders and accepted invoices",
      "Proof of delivery or completion of service",
      "Ledger and account statement showing the outstanding sum",
      "Correspondence demanding payment",
    ],
    statutes: [
      "Micro, Small and Medium Enterprises Development Act, 2006 — Sections 15 to 19",
      "Arbitration and Conciliation Act, 1996",
    ],
    faqs: [
      {
        question: "What interest can I claim on a delayed payment?",
        answer:
          "Section 16 provides compound interest with monthly rests at three times the bank rate notified by the Reserve Bank of India, running from the appointed day. Section 15 overrides any agreement to the contrary, so a contractual term fixing a lower rate or a longer credit period does not displace it.",
      },
      {
        question: "Does my buyer have to participate?",
        answer:
          "The Council proceeds whether or not the buyer engages. Non-participation is not a defence, and an award can be made in the buyer's absence. The buyer's real difficulty arises afterwards: Section 19 requires a deposit of seventy-five per cent of the awarded amount before any application to set aside the award will be entertained.",
      },
      {
        question: "Can I use Samadhaan if I registered on Udyam after the invoice?",
        answer:
          "This is contested and the position is not uniform. Several decisions have held that the supplier must have been registered as a micro or small enterprise at the time the contract was entered into or the supply was made, for the MSMED benefits to attach to that transaction. Registration obtained after the fact may not bring earlier supplies within the Act, so the dates matter and should be checked before filing.",
      },
    ],
    order: 17,
  },
  {
    slug: "order-37-summary-suit",
    parentSlug: "money-recovery-msme-samadhaan",
    title: "Summary Suit Demand under Order XXXVII",
    seoTitle: "Order XXXVII Summary Suit",
    h1: "Summary Suit for Recovery under Order XXXVII",
    shortTitle: "Summary suit",
    metaDescription:
      "Order XXXVII lets a documented debt claim proceed without full trial — the defendant must obtain leave to defend. Call +91-9899686394.",
    keywords: [
      "Order XXXVII summary suit",
      "summary suit for recovery",
      "leave to defend summary suit",
      "Order 37 CPC procedure",
      "recovery suit on invoices",
    ],
    provision: "Order XXXVII, Code of Civil Procedure",
    whatItIs:
      "A summary suit is a recovery procedure for claims on written contracts, bills of exchange, promissory notes and enforceable debts. Its advantage is that the defendant cannot defend as of right — leave to defend must be sought, and if refused, judgment follows without a trial.",
    issuedWhen:
      "Where the claim arises on a written contract or an enforceable debt or liquidated demand, and the documents are clean enough that no genuine triable dispute exists.",
    deadline:
      "The defendant has ten days from service of summons to enter appearance, and then ten days from service of the summons for judgment to apply for leave to defend. Missing either is decisive. The claim itself is subject to the three-year limitation.",
    ifIgnored:
      "If the defendant does not enter appearance, the plaintiff's allegations are deemed admitted and a decree may be passed straight away. This is the sharpest consequence in ordinary civil procedure.",
    howToReply: [
      "Plaintiff — confirm the claim falls within Order XXXVII before filing",
      "Plaintiff — plead that the suit is filed under Order XXXVII and that no relief outside it is claimed",
      "Defendant — enter appearance within ten days, without fail",
      "Defendant — apply for leave to defend disclosing a substantial defence, not a bare denial",
      "Both — be aware leave may be granted conditionally on depositing the claimed sum",
    ],
    documents: [
      "The written contract, purchase orders or acknowledged invoices",
      "Delivery challans or proof of performance",
      "Statement of account and ledger",
      "Any written acknowledgement of the debt",
      "Correspondence and demand notices",
    ],
    statutes: [
      "Code of Civil Procedure, 1908 — Order XXXVII",
      "Commercial Courts Act, 2015",
      "Limitation Act, 1963",
    ],
    faqs: [
      {
        question: "What claims can be brought as a summary suit?",
        answer:
          "Suits on bills of exchange, hundis and promissory notes, and suits to recover a debt or liquidated demand in money arising on a written contract, an enactment where the sum sought is a fixed sum, or a guarantee where the claim is in respect of a debt or liquidated demand. Unliquidated damages claims fall outside it.",
      },
      {
        question: "What is leave to defend and when is it granted?",
        answer:
          "It is the court's permission for the defendant to contest the suit. The settled approach is that unconditional leave is granted where a substantial defence is disclosed; conditional leave, usually on a deposit, where the defence is plausible but improbable; and leave is refused where the defence is frivolous or vexatious. The defendant must show a triable issue — a bare denial does not suffice.",
      },
      {
        question: "How is this different from an ordinary recovery suit?",
        answer:
          "In an ordinary suit the defendant files a written statement and the matter goes to trial as of right. Under Order XXXVII the burden shifts: the defendant must first persuade the court that there is something worth trying. Where the documents are clean and the debt acknowledged, that is a high bar, which is why a decree can follow far sooner than in a conventional suit.",
      },
    ],
    order: 18,
  },
];

export const getNoticeTypes = (): NoticeType[] =>
  [...noticeTypes].sort((a, b) => a.order - b.order);

export const getNoticeBySlug = (
  parentSlug: string,
  slug: string
): NoticeType | undefined =>
  noticeTypes.find((n) => n.parentSlug === parentSlug && n.slug === slug);

export const getNoticesForService = (parentSlug: string): NoticeType[] =>
  getNoticeTypes().filter((n) => n.parentSlug === parentSlug);

/** Every parent/notice pair — drives generateStaticParams and the sitemap. */
export const getAllNoticePairs = (): { slug: string; notice: string }[] =>
  noticeTypes.map((n) => ({ slug: n.parentSlug, notice: n.slug }));

/** Sibling notices under the same pillar, for cross-linking. */
export const getRelatedNotices = (
  parentSlug: string,
  slug: string,
  limit = 4
): NoticeType[] =>
  getNoticesForService(parentSlug)
    .filter((n) => n.slug !== slug)
    .slice(0, limit);
