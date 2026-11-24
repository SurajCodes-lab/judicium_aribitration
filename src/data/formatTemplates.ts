/**
 * Format and template pages — Appendix A of the SEO Implementation Plan (16).
 *
 * The plan calls these "the fastest-ranking pages on the site, reaching people
 * at the moment they start looking", and the search data supports it: "legal
 * notice format", "cheque bounce notice format" and "reply to DRC-01 format"
 * are high-volume, low-competition queries where the searcher is already
 * drafting something.
 *
 * DELIBERATE EDITORIAL DECISION. These pages publish the *anatomy* of each
 * document — what every section must contain and what makes one defective —
 * not a fill-in-the-blanks template to copy. Three reasons:
 *
 *   1. A copy-paste template is duplicate content. Every competitor publishes
 *      the same boilerplate, so it cannot rank on merit and adds nothing a
 *      thousand other pages do not already say.
 *   2. A defective notice destroys the remedy. A Section 138 demand that asks
 *      for more than the cheque amount, or a reply that admits a debt and
 *      restarts limitation, costs the client the case. Publishing a template
 *      that does either is a professional risk the firm should not take.
 *   3. Explaining why each clause exists is what a firm can offer that a
 *      template site cannot — and it is what converts a reader into a client.
 *
 * Each page therefore ends on the drafting CTA rather than a download.
 */

export interface FormatSection {
  /** The part of the document, in the order it appears. */
  heading: string;
  /** What this part must contain to be effective. */
  mustContain: string[];
}

export interface FormatFAQ {
  question: string;
  answer: string;
}

export interface FormatTemplate {
  slug: string;
  /** Service pillar this belongs to — must match a ServiceLine slug. */
  parentServiceSlug: string;
  /** Notice page this is the reply to, where one exists. */
  relatedNoticeSlug?: string;
  title: string;
  /** The <title>. Keep short — layout.tsx appends " | Judicium Arbitration". */
  seoTitle: string;
  h1: string;
  shortTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Shown as a badge: what kind of document this is. */
  documentType: string;
  /** Statutory hook, where there is one. */
  provision: string;
  whatItIs: string;
  whoSends: string;
  sentTo: string;
  /** The deadline governing it, or how long you have. */
  timeLimit: string;
  /** The document's anatomy, section by section. */
  structure: FormatSection[];
  /** Requirements that come from statute rather than convention. */
  mandatory: string[];
  /** Errors that make the document defective or counter-productive. */
  mistakes: string[];
  faqs: FormatFAQ[];
  order: number;
}

export const formatTemplates: FormatTemplate[] = [
  // ------------------------------------------------------------- GST (4)
  {
    slug: "gst-drc-01a-reply-format",
    parentServiceSlug: "gst-notice-reply",
    relatedNoticeSlug: "drc-01a-intimation",
    title: "Reply to GST DRC-01A — Format and Structure",
    seoTitle: "GST DRC-01A Reply Format",
    h1: "Reply to a GST DRC-01A — Format and Structure",
    shortTitle: "DRC-01A reply format",
    metaDescription:
      "How a DRC-01A reply is structured in Part B: what each section must contain, the mandatory contents, and the mistakes that invite a DRC-01.",
    keywords: [
      "DRC-01A reply format",
      "Part B DRC-01A format",
      "GST intimation reply format",
      "how to reply DRC-01A",
    ],
    documentType: "Reply you file",
    provision: "Rule 142(1A), CGST Rules — Form DRC-01A Part B",
    whatItIs:
      "A reply to Form DRC-01A is filed in Part B of the same form on the GST portal. It is your opportunity to pay what is genuinely due, dispute what is not, and stop a formal show cause notice from being issued at all.",
    whoSends: "The taxpayer who received the intimation",
    sentTo: "The proper officer, through the GST portal",
    timeLimit:
      "Ordinarily 15 days from the intimation, or the period stated on it.",
    structure: [
      {
        heading: "1. Reference and acknowledgement",
        mustContain: [
          "The DRC-01A reference number and date of the intimation",
          "GSTIN, legal name and trade name",
          "The tax period and the Act invoked (CGST / SGST / IGST)",
          "A line acknowledging receipt within the stated period",
        ],
      },
      {
        heading: "2. Summary of the liability intimated",
        mustContain: [
          "The amount of tax, interest and penalty as stated by the officer",
          "The ground on which each head is proposed",
          "A clear split between the part accepted and the part disputed",
        ],
      },
      {
        heading: "3. Amount accepted and discharged",
        mustContain: [
          "The head-wise amount admitted, if any",
          "The DRC-03 payment reference and date",
          "A statement that interest under Section 50 has been discharged on the admitted sum",
        ],
      },
      {
        heading: "4. Grounds of dispute",
        mustContain: [
          "Each discrepancy answered separately, in the officer's own numbering",
          "The reconciliation that explains the difference",
          "The legal position relied on, with the provision cited",
          "A cross-reference to the annexure proving each point",
        ],
      },
      {
        heading: "5. Annexures",
        mustContain: [
          "GSTR-1, GSTR-3B and GSTR-2A/2B for the period",
          "Reconciliation statement tying returns to books",
          "Invoices, e-way bills and proof of payment for the transactions questioned",
          "Each annexure indexed and cross-referenced to a paragraph",
        ],
      },
      {
        heading: "6. Prayer and verification",
        mustContain: [
          "A request that proceedings be dropped under Section 73(5) or 74(5)",
          "A request to be heard before any adverse view is taken",
          "Verification signed by an authorised signatory with DSC or EVC",
        ],
      },
    ],
    mandatory: [
      "Filed in Part B of Form DRC-01A on the portal — an email reply does not discharge the requirement",
      "Any admitted liability must be paid through DRC-03 and the reference quoted",
      "Verification must be signed by a person authorised on the GST registration",
    ],
    mistakes: [
      "Replying in general terms instead of answering each discrepancy separately",
      "Disputing everything, including amounts plainly payable — it undermines the credible parts",
      "Omitting the reconciliation, which is the document the officer actually reads",
      "Missing the 15-day window, which effectively guarantees a DRC-01 follows",
      "Admitting a liability loosely in correspondence and then disputing it in the reply",
    ],
    faqs: [
      {
        question: "Is there a prescribed format for a DRC-01A reply?",
        answer:
          "Part B of Form DRC-01A is the prescribed vehicle, but it is a free-text field — the statute does not prescribe the wording. The structure above is what adjudicating officers expect to see, and a reply that follows it is far more likely to close the matter without a show cause notice.",
      },
      {
        question: "Can I accept part and dispute the rest?",
        answer:
          "Yes, and it is usually the right approach. Paying the genuinely due portion through DRC-03 stops interest running on it and demonstrates good faith, while the disputed portion is argued on the merits. The reply must be explicit about which amounts fall into which category.",
      },
      {
        question: "What happens if the reply is not accepted?",
        answer:
          "The officer issues a DRC-01 show cause notice and formal adjudication begins under Section 73 or 74. Everything said in the DRC-01A reply remains on record, which is why it should be drafted as carefully as a reply to the show cause notice itself.",
      },
    ],
    order: 1,
  },
  {
    slug: "gst-drc-01-reply-format",
    parentServiceSlug: "gst-notice-reply",
    relatedNoticeSlug: "drc-01-show-cause-notice",
    title: "Reply to GST DRC-01 Show Cause Notice — Format",
    seoTitle: "GST DRC-01 Reply Format",
    h1: "Reply to a GST DRC-01 Show Cause Notice — Format",
    shortTitle: "DRC-01 reply format",
    metaDescription:
      "The structure of a DRC-01 reply: how to answer each allegation, what the annexures must prove, and the errors that cost the case at appeal.",
    keywords: [
      "DRC-01 reply format",
      "GST show cause notice reply format",
      "reply to show cause notice GST sample",
      "DRC-06 format",
    ],
    documentType: "Reply you file",
    provision: "Section 73 / 74, CGST Act — filed in Form DRC-06",
    whatItIs:
      "A reply to a DRC-01 show cause notice is filed in Form DRC-06. It is the document the adjudication order will be written against, and the record an appellate authority will read if the demand is confirmed.",
    whoSends: "The taxpayer on whom the notice was served",
    sentTo: "The adjudicating authority, through the GST portal",
    timeLimit:
      "The period stated in the notice, ordinarily 30 days from service.",
    structure: [
      {
        heading: "1. Preliminary objections",
        mustContain: [
          "Whether the notice is barred by limitation under Section 73(10) or 74(10)",
          "Whether Section 74 has been invoked without any allegation of fraud or suppression made out",
          "Whether the notice is vague, or fails to state the grounds relied on",
          "Whether relied-upon documents were supplied with the notice",
        ],
      },
      {
        heading: "2. Facts and background",
        mustContain: [
          "The nature of the business and the transactions in question",
          "A chronology of the returns filed and payments made for the period",
          "Any earlier correspondence, DRC-01A, or audit on the same issue",
        ],
      },
      {
        heading: "3. Allegation-by-allegation reply",
        mustContain: [
          "Each allegation reproduced, then answered — never a consolidated denial",
          "The factual answer first, then the legal position",
          "Authorities cited with citation, and the relevant proposition quoted",
          "The annexure number proving each factual assertion",
        ],
      },
      {
        heading: "4. On penalty and interest",
        mustContain: [
          "Why penalty is not attracted where the issue is interpretational",
          "That Section 74 penalty requires fraud, wilful misstatement or suppression to be established, not merely alleged",
          "Any amount paid, with the DRC-03 reference",
        ],
      },
      {
        heading: "5. Annexures and index",
        mustContain: [
          "A numbered index of every document relied on",
          "Returns, reconciliation, invoices, e-way bills, ledgers, bank statements",
          "Supplier GSTR-1 extracts where input credit is in issue",
        ],
      },
      {
        heading: "6. Prayer, hearing request and verification",
        mustContain: [
          "A request that the notice be dropped",
          "An express request for personal hearing under Section 75(4)",
          "Verification signed by an authorised signatory",
        ],
      },
    ],
    mandatory: [
      "Filed in Form DRC-06 on the portal within the period stated",
      "Section 75(4) entitles you to a personal hearing if requested, or before any adverse order — ask for it in writing",
      "Every document relied on must be annexed; it cannot be produced for the first time at appeal as of right",
    ],
    mistakes: [
      "Answering the notice as a whole instead of allegation by allegation",
      "Not taking limitation and jurisdiction points at the outset — raising them late weakens them",
      "Failing to request a personal hearing, then complaining of natural justice at appeal",
      "Treating a Section 74 allegation as though it were Section 73; the penalty exposure differs several-fold",
      "Submitting annexures without an index, so the officer cannot locate the proof",
    ],
    faqs: [
      {
        question: "Which form is used to reply to a DRC-01?",
        answer:
          "Form DRC-06, filed on the GST portal. The substantive reply is uploaded as an attachment to it, with the annexures indexed.",
      },
      {
        question: "Can I ask for more time to reply?",
        answer:
          "An extension can be requested, and is commonly granted once where the request is made in writing before the period expires and gives a reason. Requesting after the deadline has passed is a materially weaker position.",
      },
      {
        question: "Do I have a right to a personal hearing?",
        answer:
          "Section 75(4) requires an opportunity of hearing where a request is received in writing, or where an adverse decision is contemplated. Orders passed without that opportunity are regularly set aside, so the request should be made expressly in the reply rather than assumed.",
      },
    ],
    order: 2,
  },
  {
    slug: "asmt-10-reply-format",
    parentServiceSlug: "gst-notice-reply",
    relatedNoticeSlug: "asmt-10-scrutiny-notice",
    title: "Reply to ASMT-10 Scrutiny Notice — Format",
    seoTitle: "ASMT-10 Reply Format (ASMT-11)",
    h1: "Reply to an ASMT-10 Scrutiny Notice — Format",
    shortTitle: "ASMT-11 format",
    metaDescription:
      "How to structure an ASMT-11 reply: classifying each discrepancy, the reconciliation that closes it, and the 30-day window.",
    keywords: [
      "ASMT-11 format",
      "ASMT-10 reply format",
      "GST scrutiny notice reply format",
      "GSTR-1 3B mismatch reply",
    ],
    documentType: "Reply you file",
    provision: "Section 61, CGST Act — filed in Form ASMT-11",
    whatItIs:
      "A reply to ASMT-10 is filed in Form ASMT-11. Most of these notices arise from an automated comparison of returns, so the reply is primarily a reconciliation exercise supported by a short legal explanation.",
    whoSends: "The registered taxpayer",
    sentTo: "The proper officer, through the GST portal",
    timeLimit: "30 days from service, or such longer period as permitted.",
    structure: [
      {
        heading: "1. Reference and period",
        mustContain: [
          "ASMT-10 reference number and date",
          "GSTIN and the financial year or tax period scrutinised",
        ],
      },
      {
        heading: "2. Discrepancy table",
        mustContain: [
          "Each discrepancy as numbered by the officer, in a table",
          "The amount as per the department against the amount as per your books",
          "The difference, and its classification: timing, clerical, or genuine shortfall",
        ],
      },
      {
        heading: "3. Explanation for each class of difference",
        mustContain: [
          "Timing differences — the period in which the entry was actually reported",
          "Credit notes, amendments and amendments in later returns",
          "Supplier delay where credit appears in a later GSTR-2A period",
          "RCM, exempt and non-GST supplies wrongly compared",
        ],
      },
      {
        heading: "4. Amounts paid",
        mustContain: [
          "Any genuine shortfall discharged, with DRC-03 reference and date",
          "Interest computed under Section 50 and paid",
        ],
      },
      {
        heading: "5. Annexures",
        mustContain: [
          "Reconciliation statement for the period",
          "GSTR-1, 3B, 9 and 2A/2B extracts",
          "Ledger extracts for the heads questioned",
        ],
      },
      {
        heading: "6. Prayer and verification",
        mustContain: [
          "A request that the explanation be accepted and ASMT-12 issued",
          "Verification by an authorised signatory",
        ],
      },
    ],
    mandatory: [
      "Filed in Form ASMT-11 on the portal within 30 days",
      "Where the explanation is accepted, the officer issues an order in Form ASMT-12 closing the matter",
      "Any tax accepted must be paid via DRC-03 with interest",
    ],
    mistakes: [
      "Explaining the total difference rather than reconciling it line by line",
      "Ignoring the notice because the mismatch looks like a system error — it still escalates to a DRC-01",
      "Paying the difference without explaining it, which leaves the underlying mismatch unresolved for later years",
      "Omitting GSTR-2A/2B extracts where input credit is the issue",
    ],
    faqs: [
      {
        question: "What is the reply form for ASMT-10?",
        answer:
          "Form ASMT-11, filed on the portal within 30 days. If the officer accepts the explanation, an order in Form ASMT-12 is issued and the scrutiny closes there.",
      },
      {
        question: "Most of my mismatches are timing differences. Is that a defence?",
        answer:
          "Yes, and it is the most common and most readily accepted explanation. An invoice reported in GSTR-1 in one month and the tax discharged in GSTR-3B in another produces a mismatch without any short payment. The reply needs to show the period in which each entry was actually reported.",
      },
      {
        question: "What happens if I do not reply?",
        answer:
          "The officer may proceed under Section 65, 66 or 67, or determine the tax under Section 73 or 74 — which means a DRC-01 show cause notice, formal adjudication, and a 10 per cent pre-deposit if you later need to appeal.",
      },
    ],
    order: 3,
  },
  {
    slug: "gst-registration-cancellation-reply-format",
    parentServiceSlug: "gst-notice-reply",
    relatedNoticeSlug: "reg-17-cancellation-notice",
    title: "Reply to a GST Registration Cancellation Notice — Format",
    seoTitle: "REG-18 Reply Format",
    h1: "Reply to a GST Registration Cancellation Notice — Format",
    shortTitle: "REG-18 format",
    metaDescription:
      "How to structure a REG-18 reply to a REG-17 cancellation notice within seven working days, and what to file if cancellation is already ordered.",
    keywords: [
      "REG-18 format",
      "GST cancellation notice reply format",
      "REG-17 reply",
      "GST revocation application format",
    ],
    documentType: "Reply you file",
    provision: "Section 29, CGST Act — filed in Form REG-18",
    whatItIs:
      "A reply to Form REG-17 is filed in Form REG-18. The window is short — seven working days — and the reply must answer the specific ground stated rather than make a general case for the business.",
    whoSends: "The registered person whose registration is proposed for cancellation",
    sentTo: "The proper officer, through the GST portal",
    timeLimit:
      "Seven working days from service of REG-17. If cancellation is already ordered, revocation is sought in Form REG-21.",
    structure: [
      {
        heading: "1. Reference and ground addressed",
        mustContain: [
          "REG-17 reference number and date",
          "The exact ground stated in the notice, reproduced",
        ],
      },
      {
        heading: "2. Answer to the ground",
        mustContain: [
          "Where non-filing is alleged: confirmation that all returns are now filed, with dates",
          "Where non-commencement is alleged: evidence the business is operating",
          "Where the registration is alleged to be wrongly obtained: the documents establishing eligibility",
        ],
      },
      {
        heading: "3. Compliance already made good",
        mustContain: [
          "A table of returns filed, with ARN and date for each",
          "Tax, interest and late fee paid, with challan references",
        ],
      },
      {
        heading: "4. Evidence of genuine business",
        mustContain: [
          "Proof of principal place of business — lease, electricity bill, photographs",
          "Recent purchase and sales invoices",
          "Bank statements showing operations",
        ],
      },
      {
        heading: "5. Prayer and verification",
        mustContain: [
          "A request that the notice be dropped and registration continued",
          "A request for hearing before cancellation is ordered",
          "Verification by an authorised signatory",
        ],
      },
    ],
    mandatory: [
      "Filed in Form REG-18 within seven working days",
      "All outstanding returns must actually be filed — a promise to file is not an answer",
      "If cancellation is ordered, Form REG-21 for revocation is ordinarily filed within 30 days of the order",
    ],
    mistakes: [
      "Replying without first filing the outstanding returns",
      "Answering a different ground from the one the notice states",
      "Letting the seven days lapse and then having to pursue revocation instead",
      "Continuing to issue tax invoices after cancellation is ordered",
      "Overlooking a retrospective cancellation date, which disturbs credit already passed to customers",
    ],
    faqs: [
      {
        question: "How long do I have to reply to REG-17?",
        answer:
          "Seven working days from service. The window is materially shorter than for other GST notices, which is why outstanding returns should be filed immediately rather than after drafting the reply.",
      },
      {
        question: "My registration is already cancelled. What now?",
        answer:
          "File an application for revocation in Form REG-21, ordinarily within 30 days of service of the cancellation order, with all outstanding returns filed and dues paid. That period has been extended by notification on several occasions, so a delay is not always fatal.",
      },
      {
        question: "Can cancellation be backdated?",
        answer:
          "It can, and the consequences are serious because customers lose credit for the intervening period. Courts have required officers to give reasons for a retrospective date and have set orders aside where the effect on third parties was not considered, so it is a ground worth taking in the reply.",
      },
    ],
    order: 4,
  },

  // ------------------------------------------------------ Income tax (3)
  {
    slug: "section-143-2-reply-format",
    parentServiceSlug: "income-tax-notice-reply",
    relatedNoticeSlug: "section-143-2-scrutiny-notice",
    title: "Reply to Section 143(2) Scrutiny Notice — Format",
    seoTitle: "Section 143(2) Reply Format",
    h1: "Reply to a Section 143(2) Scrutiny Notice — Format",
    shortTitle: "143(2) reply format",
    metaDescription:
      "How a scrutiny reply is structured for faceless assessment: answering the specific query, indexing evidence, and requesting a hearing.",
    keywords: [
      "Section 143(2) reply format",
      "scrutiny notice reply format",
      "faceless assessment reply format",
      "income tax notice reply letter format",
    ],
    documentType: "Reply you upload",
    provision: "Section 143(2) read with Section 144B, Income-tax Act",
    whatItIs:
      "Under faceless assessment the reply is uploaded to the portal, and it is substantially the whole of your case. There is no later opportunity to explain a thin response, so the submission has to carry the evidence as well as the argument.",
    whoSends: "The assessee",
    sentTo: "The National Faceless Assessment Centre, through the e-filing portal",
    timeLimit:
      "By the date specified in each notice, commonly 15 days. The notice itself must be served within three months from the end of the financial year in which the return was filed.",
    structure: [
      {
        heading: "1. Reference and jurisdiction",
        mustContain: [
          "DIN, notice date and assessment year",
          "PAN and the return filing acknowledgement number",
          "Where applicable, an objection that the notice was served beyond the three-month limit",
        ],
      },
      {
        heading: "2. Query-wise reply",
        mustContain: [
          "Each query reproduced, then answered separately",
          "The accounting treatment explained, not only the figure",
          "The annexure number proving each answer",
        ],
      },
      {
        heading: "3. Supporting computation",
        mustContain: [
          "Reconciliation of income declared with Form 26AS and AIS",
          "Working for any deduction or exemption claimed",
          "Basis of valuation or allocation where the query concerns an estimate",
        ],
      },
      {
        heading: "4. Annexures",
        mustContain: [
          "Audited financial statements and tax audit report",
          "Bank statements for the accounts in question",
          "Contracts, invoices and confirmations from counterparties",
          "A numbered index tying each annexure to a query",
        ],
      },
      {
        heading: "5. Request for hearing and verification",
        mustContain: [
          "A written request for a video hearing where the issue is complex",
          "Verification in the prescribed manner",
        ],
      },
    ],
    mandatory: [
      "Submitted through the e-filing portal within the window stated on each notice",
      "Where a variation adverse to you is proposed, a show cause notice and draft order must precede the final order",
      "A hearing request should be made in writing; it is not assumed",
    ],
    mistakes: [
      "Uploading documents without explaining what they prove",
      "Answering only some of the queries and leaving others unaddressed",
      "Missing a portal deadline, which invites best judgment assessment under Section 144",
      "Not checking the three-month service limit, which is a jurisdictional point",
      "Treating each notice in a sequence as a fresh matter rather than building one coherent record",
    ],
    faqs: [
      {
        question: "Is there a prescribed format for a scrutiny reply?",
        answer:
          "No form is prescribed; the reply is uploaded as a submission with attachments. What matters is that it answers each query separately and that every factual assertion is tied to an indexed annexure, because under faceless assessment the uploaded record is what the officer decides on.",
      },
      {
        question: "Can I request a hearing under faceless assessment?",
        answer:
          "Yes, through video conferencing, and the request should be made in writing on the portal. Where a variation prejudicial to you is proposed, the scheme contemplates an opportunity being given, and refusal of a request in such a case is itself a ground of challenge.",
      },
      {
        question: "What if I cannot gather the documents in 15 days?",
        answer:
          "Request an adjournment on the portal before the deadline, stating what is outstanding and why. Partial submission with a request for time is materially better than silence, because the record then shows you engaged.",
      },
    ],
    order: 5,
  },
  {
    slug: "section-148a-b-reply-format",
    parentServiceSlug: "income-tax-notice-reply",
    relatedNoticeSlug: "section-148a-b-show-cause",
    title: "Reply to Section 148A(b) Notice — Format",
    seoTitle: "Section 148A(b) Reply Format",
    h1: "Reply to a Section 148A(b) Notice — Format",
    shortTitle: "148A(b) reply format",
    metaDescription:
      "The structure of a 148A(b) reply — the stage at which reassessment can be stopped. Limitation, sanction, and answering the information cited.",
    keywords: [
      "148A(b) reply format",
      "Section 148A reply format",
      "reply to reassessment notice format",
      "148A(b) objection format",
    ],
    documentType: "Reply you upload",
    provision: "Section 148A(b), Income-tax Act",
    whatItIs:
      "This is the reply that can prevent reassessment rather than defend it. The officer must consider it and pass a reasoned order under Section 148A(d) before any Section 148 notice can issue, so a reply that answers the information squarely frequently ends the matter.",
    whoSends: "The assessee",
    sentTo: "The assessing officer, through the e-filing portal",
    timeLimit:
      "Not less than 7 and not more than 30 days from service, extendable on application.",
    structure: [
      {
        heading: "1. Threshold objections",
        mustContain: [
          "Whether the period under Section 149 has expired for the year in question",
          "Whether the extended ten-year period is available at all — it requires escaped income of fifty lakh rupees or more, represented as an asset, expenditure or entry",
          "Whether sanction under Section 151 was obtained from the correct authority",
          "Whether the information relied on was supplied with the notice",
        ],
      },
      {
        heading: "2. The information cited, answered",
        mustContain: [
          "The specific transaction or entry reproduced as described by the officer",
          "What the transaction actually was, with dates and counterparty",
          "Why it does not represent escaped income",
        ],
      },
      {
        heading: "3. Source and treatment",
        mustContain: [
          "The source of funds, traced through bank records",
          "Where and how it was disclosed in the original return",
          "The computation showing the amount was already offered to tax, if it was",
        ],
      },
      {
        heading: "4. Annexures",
        mustContain: [
          "Return and computation for the year",
          "Bank statements covering the transaction",
          "Agreements, invoices, registry or confirmations",
          "Prior assessment order for the year, if one exists",
        ],
      },
      {
        heading: "5. Prayer and verification",
        mustContain: [
          "A request for an order under Section 148A(d) holding it is not a fit case",
          "A request for a copy of the sanction and the reasons recorded",
          "Verification in the prescribed manner",
        ],
      },
    ],
    mandatory: [
      "The officer must supply the information relied upon — ask for it if it was not annexed",
      "A reasoned order under Section 148A(d) must follow before any Section 148 notice",
      "Limitation under Section 149 is jurisdictional and is not waived by participating",
    ],
    mistakes: [
      "Arguing the merits while skipping limitation and sanction, which are the strongest points",
      "Accepting a notice at face value where the information was never supplied",
      "Letting the window lapse, so the 148A(d) order is passed on the department's material alone",
      "Conceding that a receipt was income when the real answer is that it was capital or already taxed",
    ],
    faqs: [
      {
        question: "Why is the 148A(b) stage so important?",
        answer:
          "Because it is the only stage at which reassessment can be prevented rather than fought. The officer must consider your reply and record reasons in a Section 148A(d) order before a Section 148 notice can issue. A documented explanation here frequently results in an order holding that it is not a fit case, which ends the matter entirely.",
      },
      {
        question: "The notice did not attach the information relied on.",
        answer:
          "Section 148A(b) requires the information to be furnished, since you cannot meaningfully show cause against material you have not seen. Ask for it in writing immediately and ask that time run from the date it is supplied. Orders passed without furnishing it have been set aside on that ground.",
      },
      {
        question: "How far back can the department go?",
        answer:
          "Ordinarily three years from the end of the relevant assessment year. The extended ten-year period applies only where the officer has evidence that escaped income of fifty lakh rupees or more is represented in the form of an asset, expenditure in respect of a transaction, or an entry in the books. Whether that threshold is met is often the decisive question.",
      },
    ],
    order: 6,
  },
  {
    slug: "section-139-9-response-format",
    parentServiceSlug: "income-tax-notice-reply",
    relatedNoticeSlug: "section-139-9-defective-return",
    title: "Response to a Section 139(9) Defective Return — Format",
    seoTitle: "Section 139(9) Response Format",
    h1: "Responding to a Section 139(9) Defective Return — Format",
    shortTitle: "139(9) response format",
    metaDescription:
      "How to respond to a defective return notice within 15 days: identifying the defect code, correcting only that defect, and avoiding invalidation.",
    keywords: [
      "Section 139(9) response format",
      "defective return reply format",
      "how to rectify defective return",
      "139(9) error code",
    ],
    documentType: "Response you file",
    provision: "Section 139(9), Income-tax Act",
    whatItIs:
      "A defective return response corrects a specific technical fault in a return already filed. It is not a revised return, and treating it as one creates problems of its own.",
    whoSends: "The assessee",
    sentTo: "The Centralised Processing Centre, through the e-filing portal",
    timeLimit:
      "15 days from intimation, extendable on application to the assessing officer.",
    structure: [
      {
        heading: "1. Identify the defect precisely",
        mustContain: [
          "The intimation reference, date and the error code quoted",
          "The description of the defect as stated by CPC",
          "Which part of the return it relates to",
        ],
      },
      {
        heading: "2. Correct that defect only",
        mustContain: [
          "The corrected schedule or figure",
          "Where tax was unpaid: the challan details for the payment now made",
          "Where the audit report was missing: the filing acknowledgement",
        ],
      },
      {
        heading: "3. Confirm nothing else changed",
        mustContain: [
          "A statement that the rest of the return stands as originally filed",
          "The original acknowledgement number and filing date",
        ],
      },
      {
        heading: "4. Submit under the correct route",
        mustContain: [
          "Filed as a response to the defective notice, not as a fresh or revised return",
          "The response acknowledgement retained",
        ],
      },
    ],
    mandatory: [
      "Responded to within 15 days, or the return may be treated as invalid",
      "Self-assessment tax shown as payable must actually be paid — non-payment is itself a defect",
      "Where an audit report was required, it must be filed before the return can be valid",
    ],
    mistakes: [
      "Filing a fresh return instead of responding to the notice, which loses the original filing date",
      "Correcting unrelated items, which invites questions that were not being asked",
      "Ignoring the notice because the defect looks trivial — the consequence is an invalid return",
      "Missing the carry-forward of losses, which is lost if the return becomes invalid",
    ],
    faqs: [
      {
        question: "What happens if I do not respond in 15 days?",
        answer:
          "The return is treated as invalid — in law, as though no return was filed. The practical consequences are loss of carry-forward of losses, interest under Section 234A, late filing fee under Section 234F, and exposure to best judgment assessment.",
      },
      {
        question: "Should I file a revised return instead?",
        answer:
          "No. Respond to the defective notice through the designated route. Filing a revised or fresh return does not answer the notice and can forfeit the benefit of the original filing date, which matters for carry-forward of losses and for limitation.",
      },
      {
        question: "Can the 15 days be extended?",
        answer:
          "Yes. The assessing officer may condone the delay and treat the return as valid where the application is made before assessment is completed. The request should state the reason and be made before the period expires rather than after.",
      },
    ],
    order: 7,
  },

  // ---------------------------------------------------------- Labour (2)
  {
    slug: "employee-reply-termination-letter-format",
    parentServiceSlug: "labour-court-employment-disputes",
    relatedNoticeSlug: "termination-show-cause-reply",
    title: "Employee Reply to a Termination or Show Cause Letter — Format",
    seoTitle: "Termination Letter Reply Format",
    h1: "Employee Reply to a Termination or Show Cause Letter — Format",
    shortTitle: "Termination reply format",
    metaDescription:
      "How an employee's reply should be structured: specific denial, procedural objections on record, and what not to concede.",
    keywords: [
      "reply to show cause notice format employee",
      "termination letter reply format",
      "charge sheet reply format employee",
      "explanation letter format employee",
    ],
    documentType: "Reply you send",
    provision: "Industrial Disputes Act, 1947; applicable Standing Orders",
    whatItIs:
      "This reply becomes the foundation of any later claim before the Labour Court. What is denied, what is admitted and which procedural failures are recorded at this stage largely determine what can be argued afterwards.",
    whoSends: "The employee",
    sentTo: "The employer, with a copy retained and proof of delivery",
    timeLimit:
      "The period stated in the letter, commonly 48 hours to 7 days. A reference under Section 2A must ordinarily be raised within three years of discharge.",
    structure: [
      {
        heading: "1. Reference and reservation of rights",
        mustContain: [
          "The letter being replied to, by date and reference",
          "A statement that the reply is without prejudice to all rights and remedies",
          "That nothing in the reply is to be read as admission",
        ],
      },
      {
        heading: "2. Request for particulars, if they are missing",
        mustContain: [
          "The documents relied on, if not supplied with the charge",
          "The names of witnesses and copies of their statements",
          "A request for time to reply after the material is supplied",
        ],
      },
      {
        heading: "3. Specific denial, allegation by allegation",
        mustContain: [
          "Each allegation reproduced and answered separately",
          "Dates, places and persons, so the denial is not generic",
          "Your version of what actually occurred",
        ],
      },
      {
        heading: "4. Procedural objections, recorded now",
        mustContain: [
          "No charge sheet issued, or charges not specific",
          "No domestic inquiry held, or inquiry conducted without notice",
          "No opportunity to cross-examine witnesses",
          "Where retrenchment: notice and compensation under Section 25F not tendered",
        ],
      },
      {
        heading: "5. Service record relied on",
        mustContain: [
          "Length of service and designation",
          "Appraisals, increments, promotions and commendations",
          "Absence of any prior warning or disciplinary history",
        ],
      },
      {
        heading: "6. Relief sought and signature",
        mustContain: [
          "That the charges be dropped, or the termination withdrawn",
          "Payment of wages and dues withheld",
          "Signature, date, and proof of delivery retained",
        ],
      },
    ],
    mandatory: [
      "Reply in writing and keep proof of delivery — email with a read receipt, or registered post",
      "For a workman, dismissal for misconduct ordinarily requires a charge sheet and a domestic inquiry meeting natural justice",
      "Section 25F requires notice or pay in lieu plus 15 days' average pay per completed year on retrenchment",
    ],
    mistakes: [
      "A general denial, which is treated as no denial at all",
      "Resigning under pressure — it removes the foundation of a wrongful termination claim",
      "Signing a full and final settlement without reservation while the dispute is live",
      "Not recording procedural failures at the time, which makes them look like afterthoughts",
      "Replying only verbally, leaving no record of what was said",
    ],
    faqs: [
      {
        question: "Should I reply if I intend to challenge the termination anyway?",
        answer:
          "Yes. The reply is the contemporaneous record of your version and of the employer's procedural failures. An employee who said nothing when given the opportunity is in a materially weaker position before the Labour Court than one whose denial is on file from the outset.",
      },
      {
        question: "My employer is asking me to resign instead. Should I?",
        answer:
          "Be very careful. A voluntary resignation is generally treated as ending the employment by your own act, which removes the basis for a wrongful termination claim. Resignation obtained by coercion can be challenged but is hard to prove. If you are under pressure, say in writing that you do not wish to resign before signing anything.",
      },
      {
        question: "Can I be dismissed without an inquiry?",
        answer:
          "For a workman alleged to have committed misconduct, a domestic inquiry complying with natural justice is ordinarily required. Dismissal without one is frequently set aside, although the employer may be permitted to justify the dismissal by evidence before the Labour Court. Section 11A also allows the court to reduce a punishment it finds disproportionate.",
      },
    ],
    order: 8,
  },
  {
    slug: "legal-notice-employer-unpaid-dues-format",
    parentServiceSlug: "labour-court-employment-disputes",
    title: "Legal Notice to an Employer for Unpaid Dues — Format",
    seoTitle: "Legal Notice for Unpaid Salary Format",
    h1: "Legal Notice to an Employer for Unpaid Dues — Format",
    shortTitle: "Unpaid salary notice",
    metaDescription:
      "How to structure a legal notice for unpaid salary, gratuity or full and final settlement — the computation, the demand, and the forum named.",
    keywords: [
      "legal notice for unpaid salary format",
      "notice to employer for salary format",
      "full and final settlement legal notice",
      "gratuity legal notice format",
    ],
    documentType: "Notice you send",
    provision: "Payment of Wages Act, 1936; Payment of Gratuity Act, 1972",
    whatItIs:
      "A demand for wages, gratuity or settlement dues that have not been paid. It is usually the step that produces payment, and where it does not, it establishes the record for the claim that follows.",
    whoSends: "The employee or former employee, usually through an advocate",
    sentTo: "The employer at its registered and operating addresses",
    timeLimit:
      "No statutory period for the notice itself. The underlying claim is subject to limitation, and gratuity becomes payable within 30 days of becoming due.",
    structure: [
      {
        heading: "1. Parties and engagement",
        mustContain: [
          "Your full name, address and employee code",
          "Employer name and registered office address",
          "Date of joining, designation, last drawn salary and date of separation",
        ],
      },
      {
        heading: "2. The terms relied on",
        mustContain: [
          "The appointment letter clause governing salary and notice",
          "Any policy or standing order on settlement timelines",
          "The statutory entitlement relied on — wages, gratuity, bonus, leave encashment",
        ],
      },
      {
        heading: "3. Head-wise computation",
        mustContain: [
          "Each head claimed separately with the period and amount",
          "Gratuity worked out as 15 days' wages per completed year on the prescribed formula",
          "Interest claimed, with the rate and the date from which it runs",
          "A clear total",
        ],
      },
      {
        heading: "4. Demands already made",
        mustContain: [
          "Dates of earlier emails, letters or meetings about the dues",
          "What the employer said in response, or that it did not respond",
        ],
      },
      {
        heading: "5. The demand",
        mustContain: [
          "The total sum demanded, in figures and words",
          "A period to comply, usually 15 days",
          "Bank details for payment",
        ],
      },
      {
        heading: "6. Consequence and signature",
        mustContain: [
          "The forum that will be approached — the authority under the Payment of Wages Act, the Controlling Authority for gratuity, or the Labour Court",
          "That costs and interest will be claimed",
          "Signature, date, and dispatch by registered post with acknowledgement",
        ],
      },
    ],
    mandatory: [
      "Served by a method that can be proved — registered post with acknowledgement due",
      "Gratuity is payable within 30 days of becoming due, after which interest runs",
      "The amount demanded must be computed, not asserted as a round figure",
    ],
    mistakes: [
      "Demanding a lump sum without showing how it was computed",
      "Naming no forum, which removes the consequence that makes a notice work",
      "Sending it only by email where the contract does not provide for email service",
      "Overstating the claim, which is cross-examined later and damages credibility",
      "Waiting until the limitation period is nearly exhausted before sending it",
    ],
    faqs: [
      {
        question: "Do I need a lawyer to send this notice?",
        answer:
          "No, there is no requirement. The practical risk in sending it yourself is misstating the entitlement or the computation, both of which are put to you later. A notice is a document that will be read back to you if the matter reaches a tribunal.",
      },
      {
        question: "What if the employer ignores the notice?",
        answer:
          "Unpaid wages can be pursued before the authority under the Payment of Wages Act, and gratuity before the Controlling Authority under the Payment of Gratuity Act, which can award interest on delayed payment. Where the sum is substantial or you fall outside those statutes, a civil suit or summary suit may be appropriate.",
      },
      {
        question: "How is gratuity calculated?",
        answer:
          "Under the Payment of Gratuity Act, broadly 15 days' wages for every completed year of service, based on last drawn wages and the prescribed formula, subject to the statutory ceiling. Eligibility ordinarily requires five years of continuous service, with exceptions for death and disablement.",
      },
    ],
    order: 9,
  },

  // ----------------------------------------------------- Arbitration (1)
  {
    slug: "section-8-arbitration-application-format",
    parentServiceSlug: "money-recovery-msme-samadhaan",
    title: "Section 8 Application to Refer a Dispute to Arbitration — Format",
    seoTitle: "Section 8 Arbitration Application",
    h1: "Section 8 Application to Refer a Dispute to Arbitration — Format",
    shortTitle: "Section 8 application",
    metaDescription:
      "How a Section 8 application is structured, and why it must be filed before submitting your first statement on the substance of the dispute.",
    keywords: [
      "Section 8 arbitration application format",
      "application to refer to arbitration format",
      "Section 8 Arbitration Act application",
      "reference to arbitration application",
    ],
    documentType: "Application you file",
    provision: "Section 8, Arbitration and Conciliation Act, 1996",
    whatItIs:
      "An application asking a court to refer the parties to arbitration because the dispute is covered by an arbitration agreement. Timing is everything: the right is lost once you file your first statement on the substance of the dispute.",
    whoSends: "A party to the arbitration agreement who has been sued in court",
    sentTo: "The judicial authority before which the suit is pending",
    timeLimit:
      "Not later than the date of submitting your first statement on the substance of the dispute — in practice, before or along with the written statement.",
    structure: [
      {
        heading: "1. Cause title and court",
        mustContain: [
          "The suit number, parties and the court in which it is pending",
          "The applicant's position in the suit",
        ],
      },
      {
        heading: "2. The arbitration agreement",
        mustContain: [
          "The contract, its date and the clause number",
          "The clause reproduced verbatim",
          "That the original or a certified copy is filed with the application",
        ],
      },
      {
        heading: "3. That the dispute falls within the clause",
        mustContain: [
          "The reliefs claimed in the suit, listed",
          "Why each falls within the scope of the arbitration agreement",
          "That the parties to the suit are parties to the agreement",
        ],
      },
      {
        heading: "4. That the right has not been waived",
        mustContain: [
          "That no statement on the substance of the dispute has been filed",
          "The procedural history and dates showing this",
        ],
      },
      {
        heading: "5. Prayer and verification",
        mustContain: [
          "That the parties be referred to arbitration",
          "That proceedings in the suit be stayed or the plaint returned",
          "Affidavit in support, and the original agreement or a certified copy annexed",
        ],
      },
    ],
    mandatory: [
      "Must be filed not later than submission of the first statement on the substance of the dispute",
      "The original arbitration agreement or a duly certified copy must accompany the application",
      "Where the original is with the other side, an application seeking its production must be filed",
    ],
    mistakes: [
      "Filing the written statement first, which waives the right under Section 8",
      "Filing without the original or a certified copy of the agreement",
      "Relying on a clause that does not in fact cover the reliefs claimed",
      "Overlooking whether the subject matter is arbitrable at all",
    ],
    faqs: [
      {
        question: "When must a Section 8 application be filed?",
        answer:
          "Not later than the date of submitting your first statement on the substance of the dispute. Filing a written statement answering the claim on the merits is generally treated as that statement, and the right to refer is then lost — which is why the application is made at the earliest appearance.",
      },
      {
        question: "What does the court examine?",
        answer:
          "Following the amendments and the current line of authority, the court's examination is confined to whether prima facie a valid arbitration agreement exists. Questions of validity, including stamping, are ordinarily left to the tribunal under the kompetenz-kompetenz principle.",
      },
      {
        question: "What is the difference between Section 8 and Section 11?",
        answer:
          "Section 8 asks a court before which a suit is pending to refer the parties to arbitration. Section 11 asks the High Court or Supreme Court to appoint an arbitrator where the agreed appointment mechanism has failed. They address different problems and are not alternatives.",
      },
    ],
    order: 10,
  },

  // --------------------------------------------------- Cheque bounce (2)
  {
    slug: "cheque-bounce-legal-notice-format",
    parentServiceSlug: "cheque-bounce-section-138",
    relatedNoticeSlug: "section-138-demand-notice",
    title: "Legal Notice for Cheque Bounce under Section 138 — Format",
    seoTitle: "Cheque Bounce Legal Notice Format",
    h1: "Legal Notice for Cheque Bounce under Section 138 — Format",
    shortTitle: "Cheque bounce notice",
    metaDescription:
      "The format of a Section 138 demand notice — the mandatory contents, the 30-day window, and the drafting errors that destroy the case.",
    keywords: [
      "cheque bounce legal notice format",
      "Section 138 notice format",
      "legal notice for dishonour of cheque",
      "cheque bounce notice draft",
    ],
    documentType: "Notice you send",
    provision: "Section 138(b), Negotiable Instruments Act, 1881",
    whatItIs:
      "The statutory demand that converts a dishonoured cheque into a prosecutable offence. Without a valid notice served within 30 days of the bank's return memo there is no Section 138 case at all, however clear the debt.",
    whoSends: "The payee or holder in due course, through an advocate",
    sentTo: "The drawer, at every known address",
    timeLimit:
      "Within 30 days of receiving the bank's return memo. The drawer then has 15 days to pay; the complaint must be filed within one month of that period expiring.",
    structure: [
      {
        heading: "1. Parties and authority",
        mustContain: [
          "The payee's full name and address",
          "The drawer's full name and address",
          "That the notice is issued under instructions from the payee",
        ],
      },
      {
        heading: "2. The underlying liability",
        mustContain: [
          "The transaction giving rise to the debt — supply, loan or services",
          "Invoice or agreement references and dates",
          "That the debt is legally enforceable and subsisting",
        ],
      },
      {
        heading: "3. The cheque",
        mustContain: [
          "Cheque number, date, amount in figures and words",
          "Drawee bank and branch",
          "That it was issued in discharge of the liability described",
        ],
      },
      {
        heading: "4. Presentation and dishonour",
        mustContain: [
          "Date of presentation and the bank through which it was presented",
          "The date of the return memo and the reason stated on it",
          "That the return memo is annexed",
        ],
      },
      {
        heading: "5. The demand",
        mustContain: [
          "A demand for the cheque amount — stated as that amount and nothing more",
          "Payment within 15 days of receipt",
          "That any further claim for interest or costs is reserved separately, not bundled into the demand",
        ],
      },
      {
        heading: "6. Consequence, signature and dispatch",
        mustContain: [
          "That a complaint under Section 138 will be filed on non-payment",
          "Advocate's signature, date and enrolment details",
          "Dispatch by registered post with acknowledgement due, receipt retained",
        ],
      },
    ],
    mandatory: [
      "Served within 30 days of receipt of the return memo — this period cannot be extended",
      "In writing; an oral demand does not satisfy Section 138(b)",
      "The demand must be for the cheque amount",
      "Proof of dispatch must be preserved — it is what proves service if the drawer refuses the notice",
    ],
    mistakes: [
      "Demanding interest, damages or legal costs together with the cheque amount, which has been held to render the notice defective in several decisions",
      "Calculating 30 days from the cheque date rather than from the bank's return memo",
      "Sending it to only one address when others are known",
      "Filing the complaint before the 15-day period expires, which makes it premature",
      "Losing the return memo, which is the document the whole case is dated from",
    ],
    faqs: [
      {
        question: "What is the time limit for a cheque bounce notice?",
        answer:
          "Thirty days from receiving the bank's return memo. The drawer then has 15 days from receipt of the notice to pay, and the complaint must be filed within one month of that 15-day period expiring. The first of these is the one most often missed and it cannot be extended.",
      },
      {
        question: "Can I claim interest in the notice?",
        answer:
          "The safer course is not to bundle it into the statutory demand. The demand must be for the cheque amount, and notices demanding tax, interest or legal costs as part of the sum demanded have been held defective in a number of decisions. Interest and costs can be claimed separately in the complaint or in a civil suit.",
      },
      {
        question: "What if the drawer refuses to accept the notice?",
        answer:
          "Service is generally presumed where a notice is correctly addressed and sent by registered post, even if the addressee refuses it or does not collect it. Retain the postal receipt and the tracking record, because those are what prove dispatch.",
      },
      {
        question: "Can I present the cheque again if I missed the 30 days?",
        answer:
          "Yes. A cheque may be presented repeatedly within its validity of three months from its date, and each dishonour creates a fresh cause of action with a fresh 30-day notice window. This is the practical remedy where the first window was missed, provided the cheque has not expired.",
      },
    ],
    order: 11,
  },
  {
    slug: "reply-to-section-138-notice-format",
    parentServiceSlug: "cheque-bounce-section-138",
    relatedNoticeSlug: "section-138-demand-notice",
    title: "Reply to a Section 138 Demand Notice — Format",
    seoTitle: "Reply to Cheque Bounce Notice Format",
    h1: "Reply to a Section 138 Demand Notice — Format",
    shortTitle: "S.138 reply format",
    metaDescription:
      "How a drawer should reply to a cheque bounce notice: the defences to take now, and the admissions that cannot be withdrawn later.",
    keywords: [
      "reply to cheque bounce notice format",
      "reply to Section 138 notice",
      "cheque bounce notice reply draft",
      "how to answer cheque bounce notice",
    ],
    documentType: "Reply you send",
    provision: "Section 138, Negotiable Instruments Act, 1881",
    whatItIs:
      "The drawer's answer to a statutory demand. The presumptions under Sections 118 and 139 operate against the drawer, so the reply is the first opportunity to put a defence on record — and anything conceded in it is very difficult to withdraw.",
    whoSends: "The drawer of the cheque",
    sentTo: "The payee and the advocate who issued the notice",
    timeLimit:
      "Within 15 days of receiving the notice — the same period in which payment would discharge the liability.",
    structure: [
      {
        heading: "1. Reference and denial",
        mustContain: [
          "The notice being replied to, by date",
          "A denial of each allegation, paragraph by paragraph",
          "That nothing not expressly admitted is admitted",
        ],
      },
      {
        heading: "2. Defects in the notice itself",
        mustContain: [
          "Whether it was issued within 30 days of the return memo",
          "Whether it demands more than the cheque amount",
          "Whether the return memo is annexed and matches the cheque described",
        ],
      },
      {
        heading: "3. The true position on the cheque",
        mustContain: [
          "The circumstances in which the cheque was issued",
          "Whether it was security rather than discharge of a debt",
          "Whether it was blank or undated when handed over, and how it was filled",
          "Any material alteration",
        ],
      },
      {
        heading: "4. The underlying debt",
        mustContain: [
          "Whether a legally enforceable debt existed on the date of the cheque",
          "Payments already made, with dates and references",
          "Whether the claim is time-barred",
          "Any counter-claim or set-off",
        ],
      },
      {
        heading: "5. Annexures and signature",
        mustContain: [
          "Payment proof, ledger and correspondence relied on",
          "Signature, date, and dispatch by registered post with proof retained",
        ],
      },
    ],
    mandatory: [
      "Reply in writing and retain proof of dispatch",
      "If the debt is genuine, payment within 15 days of receipt discharges the liability and no offence is made out",
      "Do not admit the debt in correspondence while intending to dispute it — Section 18 of the Limitation Act can revive a time-barred claim on an acknowledgement",
    ],
    mistakes: [
      "Ignoring the notice, which completes the offence once 15 days pass",
      "A bare denial with no explanation, which does nothing to displace the statutory presumption",
      "Admitting part of the debt casually while disputing the rest",
      "Raising a defence for the first time at trial that was never mentioned in the reply",
      "Failing to check whether the notice itself is defective, which is often the strongest point",
    ],
    faqs: [
      {
        question: "What happens if I ignore a cheque bounce notice?",
        answer:
          "Failure to pay within 15 days of receipt completes the offence under Section 138, and the payee may file a complaint within the following month. Silence also leaves the allegations unanswered on the record, which is put to you at trial.",
      },
      {
        question: "What defences are available?",
        answer:
          "The presumption that the cheque was issued for a legally enforceable debt is rebuttable. Common defences are that the cheque was security rather than discharge of a debt, that no legally enforceable debt existed or it was time-barred, material alteration, that the demand notice was defective or out of time, and that the complaint itself was filed beyond limitation.",
      },
      {
        question: "If I pay within 15 days, does the case end?",
        answer:
          "Yes. Payment of the cheque amount within 15 days of receipt of the notice means no offence under Section 138 is made out. This is the cleanest outcome where the debt is genuine, and it is considerably cheaper than defending a trial.",
      },
    ],
    order: 12,
  },

  // ------------------------------------------- Legal notice / recovery (4)
  {
    slug: "legal-notice-money-recovery-format",
    parentServiceSlug: "money-recovery-msme-samadhaan",
    title: "Legal Notice for Recovery of Money — Format",
    seoTitle: "Legal Notice for Money Recovery Format",
    h1: "Legal Notice for Recovery of Money — Format",
    shortTitle: "Recovery notice",
    metaDescription:
      "How a money recovery notice is structured: the computation, the limitation position, and naming the forum that gives the demand force.",
    keywords: [
      "legal notice for recovery of money format",
      "money recovery notice format",
      "legal notice for payment of dues",
      "outstanding payment legal notice",
    ],
    documentType: "Notice you send",
    provision: "Indian Contract Act, 1872; Limitation Act, 1963",
    whatItIs:
      "A pre-litigation demand for an unpaid sum. Beyond prompting payment, it fixes the claim on the record and can constitute the demand that later proceedings are built on.",
    whoSends: "The creditor, usually through an advocate",
    sentTo: "The debtor at its registered and last known addresses",
    timeLimit:
      "No prescribed period for the notice. The underlying claim is ordinarily barred three years from when it fell due, so the notice should be sent well within that.",
    structure: [
      {
        heading: "1. Parties and relationship",
        mustContain: [
          "Full names, addresses and constitution of both parties",
          "How the parties came to deal with each other",
        ],
      },
      {
        heading: "2. The contract or arrangement",
        mustContain: [
          "The agreement, purchase orders or work orders with dates",
          "The payment terms, including the agreed credit period",
          "The interest clause, if the contract has one",
        ],
      },
      {
        heading: "3. Performance by you",
        mustContain: [
          "Goods supplied or services rendered, with dates",
          "Delivery challans, acceptance or completion certificates",
          "That no complaint on quality or delay was raised at the time",
        ],
      },
      {
        heading: "4. The outstanding amount",
        mustContain: [
          "An invoice-wise table: number, date, amount, due date, amount outstanding",
          "Payments received and adjusted",
          "Interest computed with the rate and period shown",
          "The total in figures and words",
        ],
      },
      {
        heading: "5. Acknowledgement and limitation",
        mustContain: [
          "Any written acknowledgement of the debt, with its date",
          "Part payments, which reset limitation under Section 18 of the Limitation Act",
          "A statement that the claim is within limitation",
        ],
      },
      {
        heading: "6. Demand, consequence and signature",
        mustContain: [
          "The sum demanded and a period to pay, usually 15 days",
          "The remedy that will follow — summary suit under Order XXXVII, arbitration under the contract, MSME Samadhaan reference, or a Section 8 notice under the Insolvency and Bankruptcy Code",
          "Advocate's signature and dispatch by registered post with acknowledgement",
        ],
      },
    ],
    mandatory: [
      "The amount must be computed invoice by invoice, not asserted as a lump sum",
      "Where the contract contains an arbitration clause, the notice should invoke it rather than threaten a civil suit",
      "Served by a method that can be proved",
    ],
    mistakes: [
      "Threatening criminal proceedings for what is a civil debt",
      "Naming the wrong remedy — threatening a suit where the contract mandates arbitration",
      "Overlooking that the claim is already time-barred",
      "Omitting the interest computation and then claiming interest in the plaint",
      "Sending it to a trading address only, when the registered office is where service counts",
    ],
    faqs: [
      {
        question: "Is a legal notice mandatory before filing a recovery suit?",
        answer:
          "Not generally, but there are exceptions. Section 80 of the Code of Civil Procedure requires two months' notice before suing the government. The Insolvency and Bankruptcy Code requires a Section 8 demand notice. The Commercial Courts Act requires pre-institution mediation for suits not seeking urgent interim relief. Even where not required, a notice frequently produces payment without proceedings.",
      },
      {
        question: "What interest can I claim?",
        answer:
          "The contractual rate where the contract provides one. A registered micro or small enterprise can claim compound interest at three times the RBI bank rate under Section 16 of the MSMED Act, which overrides any contrary agreement. Otherwise interest is claimed at a reasonable rate and ultimately in the court's discretion.",
      },
      {
        question: "How long do I have to recover a debt?",
        answer:
          "Ordinarily three years from the date the payment fell due. A written acknowledgement of the debt or a part payment restarts that period under Sections 18 and 19 of the Limitation Act, which is why acknowledgements and part payments should be documented and dated.",
      },
    ],
    order: 13,
  },
  {
    slug: "reply-to-legal-notice-format",
    parentServiceSlug: "legal-notice-drafting-reply",
    relatedNoticeSlug: "reply-to-legal-notice",
    title: "Reply to a Legal Notice — Format",
    seoTitle: "Reply to Legal Notice Format",
    h1: "Reply to a Legal Notice — Format",
    shortTitle: "Notice reply format",
    metaDescription:
      "How to structure a reply to a legal notice: specific denial, limitation, counter-claim, and the admissions to avoid making.",
    keywords: [
      "reply to legal notice format",
      "legal notice reply draft",
      "how to draft reply to legal notice",
      "answer to legal notice format",
    ],
    documentType: "Reply you send",
    provision: "Pre-litigation correspondence",
    whatItIs:
      "Your answer to a claim made before proceedings begin. It fixes your position on the record and will be read back to you if the matter reaches a court or tribunal, so what it concedes matters as much as what it denies.",
    whoSends: "The recipient of the notice, usually through an advocate",
    sentTo: "The sender and the advocate who issued the notice",
    timeLimit:
      "The period stated in the notice, commonly 15 to 30 days. Statutory notices carry fixed periods that cannot be extended.",
    structure: [
      {
        heading: "1. Reference and general denial",
        mustContain: [
          "The notice being replied to, by date and the advocate's reference",
          "That the contents are denied save as expressly admitted",
          "That the reply is without prejudice to all rights and remedies",
        ],
      },
      {
        heading: "2. Paragraph-wise reply",
        mustContain: [
          "Each paragraph of the notice answered in its own numbering",
          "Admissions limited strictly to what is true and verifiable",
          "Your version of the facts where it differs",
        ],
      },
      {
        heading: "3. Preliminary objections",
        mustContain: [
          "Limitation, if the claim is out of time",
          "Jurisdiction, and any exclusive jurisdiction clause",
          "An arbitration clause requiring the dispute to go to arbitration",
          "Non-joinder of a necessary party",
        ],
      },
      {
        heading: "4. The true position",
        mustContain: [
          "The contract and the clauses actually governing the dispute",
          "Performance rendered, and any breach by the sender",
          "Payments made, with references",
        ],
      },
      {
        heading: "5. Counter-claim, if any",
        mustContain: [
          "Amounts due to you, computed",
          "Losses caused by the sender's breach",
          "A demand that these be settled",
        ],
      },
      {
        heading: "6. Signature and dispatch",
        mustContain: [
          "Advocate's signature, date and reference",
          "Registered post with acknowledgement, dispatch proof retained",
          "A copy kept with the annexures as sent",
        ],
      },
    ],
    mandatory: [
      "Reply within the period stated, and keep proof of dispatch",
      "Statutory notices carry fixed periods — a Section 138 demand gives 15 days, a Section 8 IBC notice 10 days",
      "Do not acknowledge a debt loosely: Section 18 of the Limitation Act can revive a time-barred claim",
    ],
    mistakes: [
      "A bare denial with no explanation, which carries little weight",
      "Admitting facts that have not been checked against your own records",
      "Omitting a counter-claim, which can be treated as abandoning it",
      "Replying by email only where the contract requires another mode",
      "Silence, which is routinely pleaded as acquiescence",
    ],
    faqs: [
      {
        question: "What happens if I do not reply to a legal notice?",
        answer:
          "For an ordinary notice, nothing automatic — but the sender is free to proceed and your silence will be put to you as acquiescence. For statutory notices the consequences are concrete: failure to pay within 15 days of a Section 138 demand completes the offence, and failure to respond to a Section 8 notice under the Insolvency and Bankruptcy Code within 10 days allows a petition to be filed.",
      },
      {
        question: "Does replying mean I accept the claim?",
        answer:
          "No, provided the reply is drafted as a denial. The danger lies in careless admissions — acknowledging part of a debt, for instance, can restart the limitation period under Section 18 of the Limitation Act. A properly drafted reply denies the claim while recording your position and any counter-claim.",
      },
      {
        question: "Should I reply myself or through an advocate?",
        answer:
          "There is no requirement to reply through an advocate. The risk in replying yourself is admitting facts, acknowledging a debt in a way that revives limitation, or conceding a legal position without realising it. The reply is a document that will be read back to you in court.",
      },
    ],
    order: 14,
  },
  {
    slug: "legal-notice-builder-delayed-possession-format",
    parentServiceSlug: "legal-notice-drafting-reply",
    title: "Legal Notice to a Builder for Delayed Possession — Format",
    seoTitle: "Builder Delay Legal Notice Format",
    h1: "Legal Notice to a Builder for Delayed Possession — Format",
    shortTitle: "Builder delay notice",
    metaDescription:
      "How to structure a notice to a developer for delayed possession under RERA — the promised date, interest claimed, and the remedy named.",
    keywords: [
      "legal notice to builder format",
      "delayed possession legal notice",
      "RERA complaint notice format",
      "builder delay notice draft",
    ],
    documentType: "Notice you send",
    provision: "Real Estate (Regulation and Development) Act, 2016 — Sections 18, 19",
    whatItIs:
      "A demand to a developer who has failed to hand over possession by the date committed in the agreement. Section 18 gives the allottee a choice: withdraw and claim a refund with interest, or stay in the project and claim interest for every month of delay.",
    whoSends: "The allottee or homebuyer",
    sentTo: "The promoter at its registered office and the project site office",
    timeLimit:
      "No prescribed period for the notice. The right under Section 18 arises on failure to give possession by the agreed date.",
    structure: [
      {
        heading: "1. Parties and the unit",
        mustContain: [
          "Allottee's name and address",
          "Promoter's name, registered office and RERA registration number",
          "Project name, tower, unit number and area",
        ],
      },
      {
        heading: "2. The agreement and the promised date",
        mustContain: [
          "Date of the builder-buyer agreement and its registration particulars",
          "The clause committing possession, quoted, with the date",
          "Any grace period the agreement allows, and that it has also expired",
        ],
      },
      {
        heading: "3. Payments made",
        mustContain: [
          "A payment schedule: date, amount, mode and receipt reference",
          "Total consideration paid as a percentage of the agreed price",
          "Home loan details, and EMIs being serviced on an undelivered unit",
        ],
      },
      {
        heading: "4. The default",
        mustContain: [
          "That possession was not offered by the committed date",
          "The period of delay as at the date of the notice",
          "That no valid offer of possession with occupation certificate has been made",
          "Deviations from the sanctioned plan or promised specifications, if any",
        ],
      },
      {
        heading: "5. The election under Section 18",
        mustContain: [
          "Either: withdrawal from the project, with refund of the entire amount plus interest",
          "Or: continuing in the project, with interest for every month of delay until possession",
          "The interest rate claimed, being the rate prescribed under the State RERA rules",
          "The computation of the amount claimed",
        ],
      },
      {
        heading: "6. Demand, forum and signature",
        mustContain: [
          "A period to comply, usually 15 to 30 days",
          "That a complaint will be filed before the State Real Estate Regulatory Authority",
          "Signature, date and dispatch by registered post with acknowledgement",
        ],
      },
    ],
    mandatory: [
      "The promised date must be taken from the agreement, not from a brochure or advertisement",
      "An offer of possession without a valid occupation certificate is generally not a valid offer",
      "Interest under Section 18 runs at the rate prescribed by the State RERA rules, not at a rate chosen by either party",
    ],
    mistakes: [
      "Claiming both refund and delay interest — Section 18 requires an election between them",
      "Relying on the brochure date rather than the agreement date",
      "Accepting possession without protest and then claiming delay interest",
      "Signing a fresh addendum extending the date without reserving the accrued claim",
      "Naming a consumer forum where the State RERA Authority is the appropriate remedy",
    ],
    faqs: [
      {
        question: "Can I claim both a refund and delay interest?",
        answer:
          "No. Section 18 requires an election. If you withdraw from the project you are entitled to a refund of the entire amount paid, with interest and compensation. If you choose to remain, you are entitled to interest for every month of delay until possession is handed over. The notice must state clearly which you elect.",
      },
      {
        question: "What interest rate applies?",
        answer:
          "The rate prescribed under the State RERA rules, which is commonly the State Bank of India's highest marginal cost of lending rate plus two per cent. It is not a matter of agreement, and a clause in the builder-buyer agreement providing a lower rate does not displace it.",
      },
      {
        question: "The builder offered possession without an occupation certificate.",
        answer:
          "An offer of possession is generally not valid without a valid occupation certificate, because the unit cannot lawfully be occupied. Authorities have repeatedly held that delay interest continues to run until a lawful offer is made, so taking possession in those circumstances should be done under written protest.",
      },
    ],
    order: 15,
  },
  {
    slug: "msme-samadhaan-application-format",
    parentServiceSlug: "money-recovery-msme-samadhaan",
    relatedNoticeSlug: "msme-samadhaan-reference",
    title: "MSME Samadhaan Application — Format",
    seoTitle: "MSME Samadhaan Application Format",
    h1: "MSME Samadhaan Application — Format",
    shortTitle: "Samadhaan application",
    metaDescription:
      "What a Samadhaan reference must contain: the appointed day, the Section 16 interest computation, and the documents the Council expects.",
    keywords: [
      "MSME Samadhaan application format",
      "Samadhaan reference format",
      "delayed payment application MSME",
      "Section 18 MSMED application",
    ],
    documentType: "Application you file",
    provision: "Section 18, MSMED Act, 2006",
    whatItIs:
      "An online reference to the Micro and Small Enterprises Facilitation Council for a payment overdue beyond the statutory period. The Council first attempts conciliation and, failing that, arbitrates — a faster and cheaper route than a civil suit.",
    whoSends: "A supplier holding Udyam registration as a micro or small enterprise",
    sentTo: "The Facilitation Council, through the MSME Samadhaan portal",
    timeLimit:
      "Once payment is overdue beyond the appointed day. The Council is required to conclude within 90 days of the reference. The underlying claim remains subject to three-year limitation.",
    structure: [
      {
        heading: "1. Supplier particulars",
        mustContain: [
          "Udyam registration number and date of registration",
          "Classification as micro or small enterprise",
          "Constitution, address and the district determining which Council has jurisdiction",
        ],
      },
      {
        heading: "2. Buyer particulars",
        mustContain: [
          "Buyer's legal name, registered office and GSTIN",
          "The nature of the buyer — company, firm, government department or PSU",
        ],
      },
      {
        heading: "3. The supply",
        mustContain: [
          "Purchase order number and date",
          "Invoice-wise details: number, date, amount, description",
          "Proof of delivery or completion, and acceptance by the buyer",
        ],
      },
      {
        heading: "4. The appointed day",
        mustContain: [
          "The date of acceptance or deemed acceptance of the goods or services",
          "The agreed credit period, if any — capped at 45 days by Section 15",
          "Where no period was agreed, that the appointed day is the 15th day from acceptance",
          "The resulting appointed day for each invoice",
        ],
      },
      {
        heading: "5. Interest computation under Section 16",
        mustContain: [
          "Principal outstanding, invoice by invoice",
          "Compound interest with monthly rests at three times the RBI notified bank rate",
          "Interest computed from the appointed day to the date of the reference",
          "The total claimed",
        ],
      },
      {
        heading: "6. Annexures and declaration",
        mustContain: [
          "Udyam certificate, purchase orders, invoices, delivery proof, ledger",
          "Correspondence demanding payment",
          "A declaration that the same dispute is not pending before any other forum",
        ],
      },
    ],
    mandatory: [
      "Udyam registration is the gateway — the remedy is unavailable without it",
      "Section 15 caps any agreed credit period at 45 days; a longer contractual term does not displace it",
      "Section 16 interest is compound with monthly rests at three times the bank rate, and Section 15 overrides any agreement to the contrary",
    ],
    mistakes: [
      "Filing where Udyam registration post-dates the supply — several decisions hold the registration must pre-date the transaction",
      "Computing simple interest instead of compound interest with monthly rests",
      "Taking the appointed day from the invoice date rather than from acceptance",
      "Filing before the appointed day has passed",
      "Pursuing the same claim in parallel before a civil court",
    ],
    faqs: [
      {
        question: "Who can file on MSME Samadhaan?",
        answer:
          "A supplier holding Udyam registration as a micro or small enterprise, where payment is overdue beyond the appointed day — 45 days where a period was agreed, 15 days where none was. Medium enterprises are outside the Section 18 remedy.",
      },
      {
        question: "What interest can be claimed?",
        answer:
          "Section 16 provides compound interest with monthly rests at three times the bank rate notified by the Reserve Bank of India, running from the appointed day. Section 15 overrides any agreement to the contrary, so a contractual rate or a longer credit period does not reduce it.",
      },
      {
        question: "Does the buyer have to participate?",
        answer:
          "The Council proceeds whether or not the buyer engages, and an award can be made in its absence. The buyer's real difficulty comes afterwards: Section 19 requires a deposit of seventy-five per cent of the awarded amount before any application to set aside the award will be entertained.",
      },
      {
        question: "What if I registered on Udyam after the invoices?",
        answer:
          "This is contested and the position is not uniform. Several decisions have held that the supplier must have been registered at the time the contract was entered into or the supply made for the MSMED benefits to attach to that transaction. The dates should be checked before filing, because it is the first point a buyer will take.",
      },
    ],
    order: 16,
  },
];

export const getFormatTemplates = (): FormatTemplate[] =>
  [...formatTemplates].sort((a, b) => a.order - b.order);

export const getFormatBySlug = (slug: string): FormatTemplate | undefined =>
  formatTemplates.find((f) => f.slug === slug);

export const getAllFormatSlugs = (): string[] =>
  formatTemplates.map((f) => f.slug);

/** Formats belonging to a service pillar — powers the cross-link on that page. */
export const getFormatsForService = (serviceSlug: string): FormatTemplate[] =>
  getFormatTemplates().filter((f) => f.parentServiceSlug === serviceSlug);

/** The format page for a given notice, where one exists. */
export const getFormatForNotice = (
  noticeSlug: string
): FormatTemplate | undefined =>
  formatTemplates.find((f) => f.relatedNoticeSlug === noticeSlug);

/** Sibling formats for cross-linking, preferring the same service line. */
export const getRelatedFormats = (
  slug: string,
  limit = 4
): FormatTemplate[] => {
  const current = getFormatBySlug(slug);
  if (!current) return [];
  const all = getFormatTemplates().filter((f) => f.slug !== slug);
  const same = all.filter(
    (f) => f.parentServiceSlug === current.parentServiceSlug
  );
  const rest = all.filter(
    (f) => f.parentServiceSlug !== current.parentServiceSlug
  );
  return [...same, ...rest].slice(0, limit);
};
