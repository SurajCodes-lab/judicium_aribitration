/**
 * Service pillar pages — Appendix A of the SEO Implementation Plan.
 *
 * These sit alongside, not inside, the 20 practice areas. A practice area
 * describes a field of law the firm works in; a service line is the thing a
 * client arrives searching for after something has happened to them — a notice
 * in the post, a cheque returned unpaid, an unpaid invoice. The search intent is
 * different and so is the page.
 *
 * Naming follows W1-06: `title` is the canonical service name used by schema and
 * navigation; `seoTitle` and `h1` carry the demand term people actually type.
 *
 * NOTE ON THE NINTH LINE. The plan lists "Arbitration and Commercial Dispute
 * Resolution" as a ninth pillar. It is deliberately NOT duplicated here — the
 * firm already has a fully optimised page at
 * /practice-areas/arbitration-alternative-dispute-resolution targeting the same
 * terms. A second page on the same intent would split internal links and compete
 * with itself for the same query. The services hub links to the existing page
 * instead. See the W1-09 implementation log entry.
 */

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceStep {
  title: string;
  detail: string;
}

export interface ServiceLine {
  slug: string;
  /** Canonical service name — schema, nav, breadcrumbs. */
  title: string;
  /** The <title>. Demand-led; layout.tsx appends " | Judicium Arbitration". */
  seoTitle: string;
  /** Visible H1. */
  h1: string;
  /** Short label for cards and nav. */
  shortTitle: string;
  /**
   * Compact label for city-page titles. "{cityLabel} Lawyers in {City}" plus
   * the " | Judicium Arbitration" suffix must clear ~62 characters, and the
   * longer shortTitles overflow on the longer city names.
   */
  cityLabel: string;
  metaDescription: string;
  keywords: string[];
  icon: string;
  /** Opening paragraph — what this is and who it is for. */
  intro: string;
  /** The urgency line shown in the hero: what happens if they do nothing. */
  urgency: string;
  whoFor: string[];
  whatWeDo: string[];
  process: ServiceStep[];
  /** Governing statutes, named precisely. */
  statutes: string[];
  /** Forums where these matters are heard. */
  forums: string[];
  /** Typical timeline, stated honestly. */
  timeline: string;
  faqs: ServiceFAQ[];
  /** Practice-area slugs this service draws on — internal linking. */
  relatedPracticeSlugs: string[];
  order: number;
}

export const serviceLines: ServiceLine[] = [
  {
    slug: "gst-notice-reply",
    title: "GST Notice Reply and Litigation",
    seoTitle: "GST Notice Reply Lawyers in Delhi",
    h1: "GST Notice Reply & Litigation Lawyers in Delhi",
    shortTitle: "GST Notices",
    cityLabel: "GST Notice",
    metaDescription:
      "Received a GST notice? We draft replies to DRC-01, DRC-01A, ASMT-10 and REG-17 and appear in GST appeals. Delhi NCR. Call +91-9899686318.",
    keywords: [
      "GST notice reply lawyer",
      "DRC-01 reply",
      "ASMT-10 scrutiny notice",
      "GST show cause notice reply",
      "GST appeal lawyer Delhi",
      "GST registration cancellation notice",
    ],
    icon: "📄",
    intro:
      "A GST notice is a time-bound demand for an explanation. Most carry a reply window of 15 to 30 days, and the department is entitled to proceed on the material it has if that window closes without a response. We draft the reply, assemble the supporting reconciliation, and carry the matter through adjudication and appeal where the demand is not dropped.",
    urgency:
      "A GST notice that goes unanswered becomes an ex parte order, and the demand then has to be challenged on appeal with a pre-deposit instead of answered on the merits.",
    whoFor: [
      "Businesses that have received a show cause notice under Section 73 or 74",
      "Taxpayers facing a scrutiny notice on return mismatches",
      "Registrations proposed for cancellation under Rule 21",
      "Exporters facing refund rejection or withheld IGST",
      "Businesses with input tax credit blocked or reversed",
      "Anyone whose reply window is close to expiring",
    ],
    whatWeDo: [
      "Reply to DRC-01 show cause notices under Sections 73 and 74",
      "Reply to DRC-01A intimation of liability before formal proceedings",
      "Reply to ASMT-10 scrutiny notices on GSTR-1, 3B and 2A/2B mismatches",
      "Reply to REG-17 registration cancellation notices and file revocation",
      "Input tax credit defence, including Section 16(2)(c) supplier-default cases",
      "Personal hearing representation before the adjudicating authority",
      "First appeal in Form APL-01 before the Appellate Authority",
      "Writ petitions before the High Court where no alternate remedy is efficacious",
    ],
    process: [
      {
        title: "Read the notice and fix the deadline",
        detail:
          "Identify the provision invoked, the exact reply window and the adjudication timeline under Section 73(10) or 74(10). The deadline governs everything that follows.",
      },
      {
        title: "Reconcile before arguing",
        detail:
          "Most notices are raised on a data mismatch. We reconcile GSTR-1, GSTR-3B, GSTR-2A/2B and the books before forming a legal position, because a reconciliation often closes the matter without argument.",
      },
      {
        title: "Draft the reply with its annexures",
        detail:
          "A reply is decided on its annexures as much as its text. Invoices, e-way bills, ledgers, payment proof and supplier filings are indexed to each paragraph.",
      },
      {
        title: "Attend the personal hearing",
        detail:
          "We appear before the adjudicating authority, address the points actually troubling the officer, and file written submissions on anything raised orally.",
      },
      {
        title: "Appeal if the demand survives",
        detail:
          "Appeal in Form APL-01 within three months, with the statutory pre-deposit of 10 per cent of the disputed tax. We advise on whether appeal or writ is the better route.",
      },
    ],
    statutes: [
      "Central Goods and Services Tax Act, 2017",
      "Central Goods and Services Tax Rules, 2017",
      "Integrated Goods and Services Tax Act, 2017",
      "Delhi Goods and Services Tax Act, 2017",
    ],
    forums: [
      "Office of the Adjudicating Authority, GST",
      "Appellate Authority (Appeals), GST",
      "Delhi High Court — writ jurisdiction",
    ],
    timeline:
      "A reply is usually due within 15 to 30 days of the notice. Adjudication ordinarily follows within three to nine months. A first appeal takes a further six to eighteen months depending on the bench.",
    faqs: [
      {
        question: "What happens if I do not reply to a GST show cause notice?",
        answer:
          "The proper officer may proceed to adjudicate on the material already on record and pass an ex parte order under Section 73 or 74 confirming the demand with interest and penalty. The order is then recoverable, and your remedy narrows to an appeal that requires a 10 per cent pre-deposit of the disputed tax. Replying within the window is almost always cheaper than appealing afterwards.",
      },
      {
        question: "What is the difference between DRC-01 and DRC-01A?",
        answer:
          "DRC-01A is a pre-notice intimation of ascertained liability served under Rule 142(1A), giving you an opportunity to pay or explain before formal proceedings begin. DRC-01 is the formal show cause notice that commences adjudication under Section 73 or 74. A well-handled DRC-01A reply can prevent a DRC-01 being issued at all.",
      },
      {
        question: "How much time do I have to file a GST appeal?",
        answer:
          "An appeal to the Appellate Authority must be filed in Form APL-01 within three months of communication of the order, extendable by one further month on sufficient cause under Section 107. A pre-deposit of 10 per cent of the disputed tax is mandatory for the appeal to be entertained.",
      },
      {
        question: "Can input tax credit be denied because my supplier did not pay?",
        answer:
          "Section 16(2)(c) conditions credit on tax having been actually paid to the government, and departments routinely invoke it when a supplier defaults. The position is contested, and several High Courts have read the provision down where the recipient acted bona fide and holds valid invoices and proof of payment. The defence turns heavily on documentation.",
      },
      {
        question: "My GST registration is proposed for cancellation. What do I do?",
        answer:
          "Reply to the REG-17 notice within seven working days, addressing the specific ground stated. If cancellation has already been ordered, an application for revocation lies in Form REG-21, generally within thirty days of the order, and that period has been extended by notification in several instances. Do not let the business trade on a cancelled registration in the meantime.",
      },
    ],
    relatedPracticeSlugs: ["corporate-commercial", "dispute-resolution-litigation"],
    order: 1,
  },
  {
    slug: "income-tax-notice-reply",
    title: "Income Tax Notice Reply and Representation",
    seoTitle: "Income Tax Notice Reply, Delhi",
    h1: "Income Tax Notice Reply & Representation, Delhi",
    shortTitle: "Income Tax Notices",
    cityLabel: "Income Tax",
    metaDescription:
      "Replies to income tax notices under Sections 143(2), 148, 148A(b), 139(9), 245 and 156, plus CIT(A) and ITAT representation. Call +91-9899686318.",
    keywords: [
      "income tax notice reply lawyer",
      "Section 148 notice reply",
      "Section 143(2) scrutiny notice",
      "148A(b) show cause reply",
      "CIT Appeals lawyer Delhi",
      "ITAT lawyer Delhi",
    ],
    icon: "🧾",
    intro:
      "Income tax notices arrive with short, strict windows and an electronic record of whether you answered. Faceless assessment means the reply you upload is substantially the case you will be judged on, so the drafting and the evidence attached to it matter more than they once did. We handle the reply, the assessment and the appeal.",
    urgency:
      "Under faceless assessment the reply you upload is largely the case on record — there is no later hearing at which to repair a thin response.",
    whoFor: [
      "Individuals and businesses under scrutiny assessment",
      "Anyone served a reassessment notice under Section 148",
      "Recipients of a Section 148A(b) show cause before reassessment",
      "Taxpayers whose return has been treated as defective",
      "Anyone whose refund has been adjusted against an old demand",
      "Taxpayers facing penalty proceedings",
    ],
    whatWeDo: [
      "Reply to Section 143(2) scrutiny notices and conduct the assessment",
      "Reply to Section 148A(b) show cause notices before reassessment is ordered",
      "Challenge Section 148 reassessment notices on jurisdiction and limitation",
      "Rectify defective returns under Section 139(9)",
      "Respond to Section 245 intimations adjusting a refund against demand",
      "Contest demand notices under Section 156 and seek stay of recovery",
      "Defend penalty proceedings under Sections 270A and 271",
      "Appeals before CIT(A) and the Income Tax Appellate Tribunal",
    ],
    process: [
      {
        title: "Check jurisdiction and limitation first",
        detail:
          "Reassessment notices frequently fail on threshold points — the sanction obtained, the time limit under Section 149, or whether the Section 148A procedure was followed. These are checked before the merits.",
      },
      {
        title: "Assemble the evidentiary record",
        detail:
          "Bank statements, contracts, confirmations and audit records are indexed to each addition proposed, because faceless assessment decides on the uploaded record.",
      },
      {
        title: "Draft and upload the response",
        detail:
          "Submissions are drafted to the specific query raised, with the law applied to the facts rather than cited generally, and filed within the portal window.",
      },
      {
        title: "Seek stay where recovery is threatened",
        detail:
          "Where a demand is raised, we apply for stay of recovery pending appeal, ordinarily on the standard deposit, and press for a lower figure where the case warrants it.",
      },
      {
        title: "Appeal to CIT(A), then ITAT",
        detail:
          "First appeal lies to the Commissioner (Appeals) within thirty days. A further appeal lies to the Income Tax Appellate Tribunal, which is the final fact-finding authority.",
      },
    ],
    statutes: [
      "Income-tax Act, 1961",
      "Income-tax Rules, 1962",
      "Finance Act amendments to Sections 147 to 151",
    ],
    forums: [
      "Faceless Assessment Centre",
      "Commissioner of Income Tax (Appeals)",
      "Income Tax Appellate Tribunal, Delhi Benches",
      "Delhi High Court — writ jurisdiction",
    ],
    timeline:
      "Notice replies are generally due in 15 to 30 days. An assessment concludes within the statutory period for the relevant year. A CIT(A) appeal commonly takes one to three years, and an ITAT appeal a further one to two.",
    faqs: [
      {
        question: "What is a Section 148A(b) notice and why does it matter?",
        answer:
          "Section 148A(b) requires the assessing officer to give you an opportunity to show cause, with the information relied on, before issuing a reassessment notice under Section 148. It is the stage at which a reassessment can be stopped before it starts. A careful reply here, addressing the specific information cited, is often decisive, because the officer must then pass a reasoned order under Section 148A(d) before proceeding.",
      },
      {
        question: "How far back can my assessment be reopened?",
        answer:
          "Under the current Section 149 regime, reassessment is ordinarily barred after three years from the end of the relevant assessment year. That extends to ten years where the officer has evidence that income represented in the form of an asset, expenditure or entry exceeding fifty lakh rupees has escaped assessment. Limitation is a jurisdictional point and is worth checking before anything else.",
      },
      {
        question: "My refund was adjusted against an old demand without notice.",
        answer:
          "Section 245 requires prior intimation and an opportunity to respond before a refund is set off against an outstanding demand. Adjustments made without that intimation, or despite a response disputing the demand, are regularly set aside. The remedy is to respond on the portal disputing the demand and, if the adjustment stands, to pursue it in appeal or by writ.",
      },
      {
        question: "Can I get recovery stayed while my appeal is pending?",
        answer:
          "Yes. An application for stay can be made to the assessing officer and to the appellate authority. Administrative instructions contemplate stay on payment of twenty per cent of the disputed demand, but that figure is not a floor — where the assessment is prima facie unsustainable or recovery would cause genuine hardship, a lower deposit or full stay can be sought and has been granted.",
      },
      {
        question: "What happens if my return is treated as defective?",
        answer:
          "A notice under Section 139(9) gives you fifteen days, extendable on application, to rectify the defect. If it is not rectified the return is treated as invalid, which means it is as though no return was filed — with the consequences that follow for carry-forward of losses and for penalty. The defects are usually technical and fixable, so the main risk is ignoring the notice.",
      },
    ],
    relatedPracticeSlugs: ["corporate-commercial", "white-collar-crime"],
    order: 2,
  },
  {
    slug: "cheque-bounce-section-138",
    title: "Cheque Bounce and Section 138 Proceedings",
    seoTitle: "Cheque Bounce Lawyers in Delhi",
    h1: "Cheque Bounce & Section 138 Lawyers in Delhi",
    shortTitle: "Cheque Bounce",
    cityLabel: "Cheque Bounce",
    metaDescription:
      "Cheque bounce cases under Section 138 of the NI Act — demand notice, complaint, trial and interim compensation. Delhi NCR. Call +91-9899686318.",
    keywords: [
      "cheque bounce lawyer Delhi",
      "Section 138 NI Act lawyer",
      "cheque bounce notice format",
      "cheque dishonour case",
      "Section 138 complaint filing",
      "cheque bounce defence lawyer",
    ],
    icon: "🏦",
    intro:
      "Section 138 of the Negotiable Instruments Act turns a dishonoured cheque into a criminal offence, but only if two deadlines are met exactly. The demand notice must go within thirty days of the bank's return memo, and the complaint within one month of the cause of action arising. Miss either and the remedy is gone. We act for payees enforcing cheques and for drawers defending them.",
    urgency:
      "The thirty-day notice window runs from the bank return memo, not from when you noticed. It cannot be extended, and once it closes the Section 138 remedy is lost for that cheque.",
    whoFor: [
      "Businesses holding cheques returned for insufficient funds",
      "Suppliers whose post-dated cheques have been dishonoured",
      "Lenders enforcing security cheques",
      "Individuals who have received a Section 138 demand notice",
      "Drawers facing summons in a cheque bounce complaint",
      "Anyone facing a Section 143A or 148 interim compensation order",
    ],
    whatWeDo: [
      "Draft and serve the statutory demand notice within the thirty-day window",
      "File the Section 138 complaint before the Magistrate having jurisdiction",
      "Conduct the trial, including evidence by affidavit under Section 145",
      "Defend drawers on consideration, material alteration and notice defects",
      "Contest or seek interim compensation under Section 143A",
      "Appeals and deposit applications under Section 148",
      "Proceedings against company officers under Section 141",
      "Parallel civil recovery under Order XXXVII where the sum justifies it",
    ],
    process: [
      {
        title: "Secure the return memo",
        detail:
          "The bank's return memo fixes the date from which the thirty-day notice period runs. Everything in a Section 138 case is calculated from it, so it is obtained and dated first.",
      },
      {
        title: "Serve the demand notice",
        detail:
          "A written demand for the cheque amount must be served within thirty days of the return. The notice must demand the cheque amount itself — a notice demanding more has been held defective.",
      },
      {
        title: "Wait out the fifteen days",
        detail:
          "The drawer has fifteen days from receipt to pay. The cause of action arises only on that period expiring without payment, and a complaint filed earlier is premature.",
      },
      {
        title: "File within one month",
        detail:
          "The complaint must be filed within one month of the cause of action arising, before the court where the payee's bank branch is situated, under Section 142(2).",
      },
      {
        title: "Trial and enforcement",
        detail:
          "Evidence proceeds largely on affidavit. The statutory presumptions under Sections 118 and 139 operate in the payee's favour, and the drawer must raise a probable defence to displace them.",
      },
    ],
    statutes: [
      "Negotiable Instruments Act, 1881 — Sections 138, 139, 141, 142, 143A, 145, 148",
      "Bharatiya Nagarik Suraksha Sanhita, 2023",
      "Code of Civil Procedure, 1908 — Order XXXVII",
    ],
    forums: [
      "Court of the Judicial Magistrate / Metropolitan Magistrate",
      "Sessions Court — appeals and revisions",
      "Delhi High Court",
    ],
    timeline:
      "Notice within 30 days of the return memo, then 15 days for payment, then the complaint within one month. Trial commonly runs one to three years, though summary procedure and settlement at the pre-summoning stage can shorten it considerably.",
    faqs: [
      {
        question: "What is the time limit for a cheque bounce case?",
        answer:
          "Three deadlines run in sequence. The demand notice must be served within thirty days of receiving the bank's return memo. The drawer then has fifteen days to pay. If payment is not made, the complaint must be filed within one month of that fifteen-day period expiring. The first deadline is the one most often missed, and it cannot be extended.",
      },
      {
        question: "Can I file a cheque bounce case if the notice period has lapsed?",
        answer:
          "Not under Section 138 for that presentation. However, a cheque can generally be presented again within its validity period of three months from its date, and a fresh dishonour gives rise to a fresh cause of action and a fresh thirty-day notice window. The civil remedy for recovery of the underlying debt also remains available independently.",
      },
      {
        question: "Can a director be prosecuted for a company's bounced cheque?",
        answer:
          "Section 141 extends liability to persons who were in charge of and responsible to the company for the conduct of its business at the relevant time. The complaint must contain specific averments to that effect — a bare assertion that someone was a director is not enough, and complaints lacking those averments are regularly quashed.",
      },
      {
        question: "What is interim compensation under Section 143A?",
        answer:
          "The court may direct the drawer to pay the complainant up to twenty per cent of the cheque amount as interim compensation during the trial. The power is discretionary and must be exercised with reasons. At the appellate stage, Section 148 allows the appellate court to require a deposit of at least twenty per cent of the fine or compensation awarded.",
      },
      {
        question: "What defences are available to the drawer?",
        answer:
          "The statutory presumption that the cheque was issued for a legally enforceable debt is rebuttable. Common defences include that the cheque was given as security and not in discharge of a debt, that the underlying debt was not legally enforceable or was time-barred, material alteration, that the demand notice was defective or not served, and that the complaint was filed outside limitation.",
      },
    ],
    relatedPracticeSlugs: ["dispute-resolution-litigation", "banking-finance"],
    order: 3,
  },
  {
    slug: "money-recovery-msme-samadhaan",
    title: "Money Recovery and MSME Samadhaan",
    seoTitle: "MSME Samadhaan & Money Recovery",
    h1: "Money Recovery & MSME Samadhaan Lawyers in Delhi",
    shortTitle: "Money Recovery",
    cityLabel: "Money Recovery",
    metaDescription:
      "Recover unpaid invoices through MSME Samadhaan, summary suits under Order XXXVII, and arbitration. Delhi NCR. Call +91-9899686318.",
    keywords: [
      "money recovery lawyer Delhi",
      "MSME Samadhaan lawyer",
      "Section 18 MSMED Act",
      "unpaid invoice recovery India",
      "summary suit Order XXXVII",
      "delayed payment MSME",
    ],
    icon: "💰",
    intro:
      "There is rarely only one way to recover an unpaid invoice, and the route chosen usually matters more than the drafting. A registered micro or small enterprise has a statutory remedy under the MSMED Act that is faster and cheaper than a civil suit. Where that does not apply, a summary suit, an arbitration clause or an insolvency notice may each be available. We advise on the route first, then pursue it.",
    urgency:
      "Recovery claims are subject to a three-year limitation period. Part payments and written acknowledgements reset it, but silence does not — and a time-barred claim cannot be revived.",
    whoFor: [
      "Registered micro and small enterprises with payments overdue beyond 45 days",
      "Suppliers holding undisputed invoices and delivery proof",
      "Businesses with a contract containing an arbitration clause",
      "Creditors considering insolvency proceedings against a defaulter",
      "Service providers facing repeated part-payments and delay",
      "Anyone approaching the end of the limitation period",
    ],
    whatWeDo: [
      "Assess which recovery route is fastest and cheapest on your facts",
      "File and conduct references before the MSE Facilitation Council",
      "Conciliation and arbitration arising from a Section 18 reference",
      "Summary suits under Order XXXVII of the Code of Civil Procedure",
      "Pre-litigation demand notices and settlement negotiation",
      "Commercial suits before the Commercial Courts where the value qualifies",
      "Section 8 demand notices and petitions under the Insolvency and Bankruptcy Code",
      "Execution of decrees and enforcement of awards",
    ],
    process: [
      {
        title: "Confirm the claim and the clock",
        detail:
          "We establish the debt, the due date, the last acknowledgement or part payment, and the limitation position before advising on any route.",
      },
      {
        title: "Choose the forum deliberately",
        detail:
          "Udyam registration opens the Facilitation Council route with its statutory interest. An arbitration clause may compel arbitration. A clean documentary claim may suit Order XXXVII. The choice is made on the facts, not by habit.",
      },
      {
        title: "Send the demand",
        detail:
          "A properly drafted demand frequently produces payment or a settlement without proceedings, and it preserves the record if proceedings follow.",
      },
      {
        title: "Commence proceedings",
        detail:
          "The reference, plaint or notice is filed with the invoices, purchase orders, delivery proof and ledger that the forum will want to see.",
      },
      {
        title: "Enforce",
        detail:
          "An order or award is only as good as its execution. We pursue attachment, garnishee and other execution remedies against identified assets.",
      },
    ],
    statutes: [
      "Micro, Small and Medium Enterprises Development Act, 2006 — Sections 15 to 19",
      "Code of Civil Procedure, 1908 — Order XXXVII",
      "Commercial Courts Act, 2015",
      "Arbitration and Conciliation Act, 1996",
      "Insolvency and Bankruptcy Code, 2016 — Sections 8 and 9",
    ],
    forums: [
      "Micro and Small Enterprises Facilitation Council",
      "Commercial Courts and Commercial Divisions",
      "District Courts — summary suit jurisdiction",
      "National Company Law Tribunal",
    ],
    timeline:
      "A Facilitation Council reference is intended to conclude within ninety days of the reference, though in practice it often runs longer. A summary suit can produce a decree within one to two years where no leave to defend is granted.",
    faqs: [
      {
        question: "What is MSME Samadhaan and who can use it?",
        answer:
          "Samadhaan is the online portal through which a registered micro or small enterprise refers a delayed payment dispute to the Micro and Small Enterprises Facilitation Council under Section 18 of the MSMED Act. The supplier must hold Udyam registration, and the reference concerns payments outstanding beyond the statutory period — forty-five days where a period is agreed, fifteen days where none is.",
      },
      {
        question: "What interest can an MSME claim on a delayed payment?",
        answer:
          "Section 16 provides for compound interest with monthly rests at three times the bank rate notified by the Reserve Bank of India, running from the appointed day. This is substantially higher than ordinary contractual interest and is not subject to a contrary agreement, because Section 15 overrides any agreement to the contrary.",
      },
      {
        question: "The buyer wants to challenge the Facilitation Council award.",
        answer:
          "An application to set aside lies under Section 34 of the Arbitration and Conciliation Act, but Section 19 of the MSMED Act requires the buyer to deposit seventy-five per cent of the awarded amount before the application will be entertained. That pre-deposit is a significant practical deterrent and is one of the main attractions of the route for suppliers.",
      },
      {
        question: "When is a summary suit under Order XXXVII the better option?",
        answer:
          "Where the claim arises on a written contract, a bill of exchange or an enforceable debt and the documents are clean, Order XXXVII is attractive because the defendant must obtain leave to defend. If leave is refused, judgment follows without a full trial. It suits documented invoice claims where no genuine dispute exists, and it is available regardless of MSME status.",
      },
      {
        question: "Should I use the Insolvency Code to recover a debt?",
        answer:
          "An operational creditor can issue a demand notice under Section 8 and, if the debt is undisputed, petition under Section 9. The threshold is one crore rupees. It is a powerful lever, but it is a resolution process rather than a recovery mechanism, and the tribunals have discouraged its use purely as a debt-collection tactic. It is best reserved for genuine default.",
      },
    ],
    relatedPracticeSlugs: [
      "dispute-resolution-litigation",
      "arbitration-alternative-dispute-resolution",
      "insolvency-bankruptcy",
    ],
    order: 4,
  },
  {
    slug: "legal-notice-drafting-reply",
    title: "Legal Notice — Drafting and Reply",
    seoTitle: "Legal Notice Drafting & Reply",
    h1: "Legal Notice Drafting & Reply, Delhi",
    shortTitle: "Legal Notices",
    cityLabel: "Legal Notice",
    metaDescription:
      "Drafting and replying to legal notices — demand, contractual, employment and statutory. Delhi NCR. Call +91-9899686318.",
    keywords: [
      "legal notice lawyer Delhi",
      "legal notice format",
      "reply to legal notice",
      "demand notice drafting",
      "send legal notice India",
      "legal notice reply time limit",
    ],
    icon: "✉️",
    intro:
      "A legal notice is the last inexpensive step before litigation, and it is read twice: once by the person who receives it and again by a judge if the matter proceeds. A notice that overstates the claim weakens the case it is meant to open. A reply that admits too much narrows the defence. Both are worth drafting properly.",
    urgency:
      "A reply is not optional in substance. Silence is routinely pleaded as acquiescence, and an unanswered allegation is harder to dispute later than one denied at the time.",
    whoFor: [
      "Businesses pursuing payment, delivery or performance under a contract",
      "Anyone who has received a legal notice and must respond",
      "Parties terminating or disputing termination of a contract",
      "Employees and employers in a dispute over dues or conduct",
      "Landlords and tenants on possession, rent or deposit",
      "Parties required to issue notice before suing a public authority",
    ],
    whatWeDo: [
      "Demand notices for payment, delivery or specific performance",
      "Breach and termination notices under commercial contracts",
      "Replies denying, admitting in part, or raising counter-claims",
      "Section 138 statutory demand notices for dishonoured cheques",
      "Section 8 demand notices under the Insolvency and Bankruptcy Code",
      "Notices under Section 80 of the Code of Civil Procedure to public authorities",
      "Employment notices — show cause, termination and unpaid dues",
      "Cease and desist notices for trademark and copyright infringement",
    ],
    process: [
      {
        title: "Establish the claim before writing",
        detail:
          "We read the contract, the correspondence and the payment record first. A notice is only as strong as the documents behind it.",
      },
      {
        title: "Decide what to assert",
        detail:
          "A notice fixes your position on the record. We assert what can be proved and leave out what cannot, because an overstated notice is cross-examined later.",
      },
      {
        title: "Draft with the statutory requirements met",
        detail:
          "Where the notice is statutory — Section 138, Section 8 IBC, Section 80 CPC — the prescribed content and timing are followed exactly, since defects at this stage are fatal.",
      },
      {
        title: "Serve provably",
        detail:
          "Service is served by a method that can be proved: registered post with acknowledgement, courier with tracking, and email where the contract permits. Proof of dispatch is retained.",
      },
      {
        title: "Act on the response",
        detail:
          "A reply, a settlement approach or silence each point to a different next step. We advise on which, and on the limitation position before proceeding.",
      },
    ],
    statutes: [
      "Indian Contract Act, 1872",
      "Code of Civil Procedure, 1908 — Section 80",
      "Negotiable Instruments Act, 1881 — Section 138",
      "Insolvency and Bankruptcy Code, 2016 — Section 8",
      "Limitation Act, 1963",
    ],
    forums: [
      "Pre-litigation — no forum",
      "Civil and Commercial Courts if the matter proceeds",
      "Arbitral tribunals where the contract so provides",
    ],
    timeline:
      "A notice is ordinarily drafted within two to five working days of instructions and complete documents. Notices commonly allow fifteen to thirty days to comply, except where a statute fixes the period.",
    faqs: [
      {
        question: "Is a legal notice mandatory before filing a case?",
        answer:
          "Usually not, but there are important exceptions. Section 80 of the Code of Civil Procedure requires two months' notice before suing the government or a public officer in their official capacity. Section 138 of the Negotiable Instruments Act requires a demand notice within thirty days. The Insolvency and Bankruptcy Code requires a Section 8 demand notice. The Commercial Courts Act requires pre-institution mediation for suits that do not seek urgent interim relief.",
      },
      {
        question: "How long do I have to reply to a legal notice?",
        answer:
          "There is generally no statutory period for replying to an ordinary legal notice — the period stated in the notice itself, commonly fifteen or thirty days, is what applies. Statutory notices are different: a Section 138 demand gives the drawer fifteen days from receipt to pay. Even where no period binds you, replying promptly is advisable, since silence is often characterised as admission.",
      },
      {
        question: "What happens if I ignore a legal notice?",
        answer:
          "Nothing happens automatically, but the sender is free to proceed, and the fact that you did not deny the allegations will be put to you. In a Section 138 matter, failure to pay within fifteen days of the demand completes the offence and lets the complaint be filed. Ignoring a notice almost never improves your position.",
      },
      {
        question: "Can I send a legal notice myself?",
        answer:
          "Yes — there is no requirement that a notice be sent through an advocate. The risks are practical rather than formal: a notice that misstates the claim, demands the wrong amount, or misses a statutory requirement can damage the case it was meant to start. In Section 138 matters in particular, a notice demanding more than the cheque amount has been held defective.",
      },
      {
        question: "How should a legal notice be served?",
        answer:
          "By a method you can prove. Registered post with acknowledgement due is the standard, and courts presume service when a notice is correctly addressed and dispatched even if the addressee refuses or does not collect it. Courier with tracking and email are useful supplements, and email is sufficient on its own where the contract provides for it.",
      },
    ],
    relatedPracticeSlugs: ["dispute-resolution-litigation", "corporate-commercial"],
    order: 5,
  },
  {
    slug: "labour-court-employment-disputes",
    title: "Labour Court and Employment Disputes",
    seoTitle: "Labour Court Lawyers in Delhi",
    h1: "Labour Court & Employment Dispute Lawyers in Delhi",
    shortTitle: "Labour & Employment",
    cityLabel: "Labour Court",
    metaDescription:
      "Labour court and employment disputes — termination, unpaid dues, conciliation and POSH. Delhi NCR. Call +91-9899686318.",
    keywords: [
      "labour court lawyer Delhi",
      "wrongful termination lawyer India",
      "employment dispute lawyer Delhi",
      "unpaid salary legal notice",
      "labour commissioner conciliation",
      "POSH complaint lawyer",
    ],
    icon: "⚖️",
    intro:
      "Employment disputes turn on classification before they turn on merits. Whether a person is a workman under the Industrial Disputes Act decides which forum hears the matter, what relief is available, and how long it takes. We act for both employers and employees, and we address that question first.",
    urgency:
      "A reference of an individual termination under Section 2A must ordinarily be made within three years of the date of discharge. Conciliation should be initiated well before that.",
    whoFor: [
      "Employees dismissed without inquiry, notice or compensation",
      "Employers defending a termination or retrenchment",
      "Workers with unpaid wages, overtime, gratuity or bonus",
      "Businesses facing a Labour Commissioner conciliation notice",
      "Employees issued a show cause or charge sheet",
      "Organisations handling a complaint under the POSH Act",
    ],
    whatWeDo: [
      "Reply to show cause notices, charge sheets and termination letters",
      "Represent parties in conciliation before the Labour Commissioner",
      "Conduct references before the Labour Court and Industrial Tribunal",
      "Claims for wages, overtime, gratuity, bonus and provident fund",
      "Defend and conduct domestic inquiries, and challenge defective ones",
      "Retrenchment, layoff and closure compliance under Chapter VA and VB",
      "Internal Committee proceedings and appeals under the POSH Act",
      "Employment contracts, standing orders and HR policy review",
    ],
    process: [
      {
        title: "Classify the employment",
        detail:
          "Whether the person is a workman under Section 2(s) determines the forum and the remedy. A managerial or supervisory employee above the wage threshold is outside the Industrial Disputes Act and must sue in civil court or under contract.",
      },
      {
        title: "Test the procedure followed",
        detail:
          "Most terminations fail on procedure rather than substance — no charge sheet, no inquiry, no opportunity to be heard, or retrenchment compensation not tendered as required by Section 25F.",
      },
      {
        title: "Conciliate",
        detail:
          "Proceedings before the Conciliation Officer are the statutory first step for an industrial dispute and frequently resolve the matter. A settlement recorded under Section 12(3) binds both parties.",
      },
      {
        title: "Refer to the Labour Court",
        detail:
          "If conciliation fails, an individual dispute over discharge can be raised directly under Section 2A. The reference is conducted with evidence and argument on both validity and relief.",
      },
      {
        title: "Relief and enforcement",
        detail:
          "Relief ranges from reinstatement with back wages to compensation in lieu. We pursue enforcement of the award where it is not complied with.",
      },
    ],
    statutes: [
      "Industrial Disputes Act, 1947 — Sections 2A, 11A, 12, 25F",
      "Payment of Wages Act, 1936",
      "Payment of Gratuity Act, 1972",
      "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013",
      "Industrial Employment (Standing Orders) Act, 1946",
      "Shops and Establishments legislation of the relevant State",
    ],
    forums: [
      "Office of the Labour Commissioner — conciliation",
      "Labour Court and Industrial Tribunal",
      "Controlling Authority under the Payment of Gratuity Act",
      "Internal Committee under the POSH Act",
      "Delhi High Court — writ jurisdiction",
    ],
    timeline:
      "Conciliation usually runs one to three months. A Labour Court reference commonly takes two to five years, though settlement at conciliation resolves a substantial proportion of matters far sooner.",
    faqs: [
      {
        question: "Was my termination legal if there was no inquiry?",
        answer:
          "For a workman dismissed on grounds of misconduct, a domestic inquiry complying with natural justice is ordinarily required — a charge sheet, an opportunity to respond, and a hearing. Dismissal without one is frequently set aside, although the employer may be permitted to justify the dismissal by leading evidence before the Labour Court. Section 11A also allows the court to interfere with the punishment where it is disproportionate.",
      },
      {
        question: "Who counts as a workman?",
        answer:
          "Section 2(s) of the Industrial Disputes Act covers persons doing manual, unskilled, skilled, technical, operational, clerical or supervisory work. It excludes those employed mainly in a managerial or administrative capacity, and supervisory staff drawing wages above the prescribed threshold. Classification turns on the actual duties performed, not on the designation in the appointment letter.",
      },
      {
        question: "How do I recover unpaid salary or gratuity?",
        answer:
          "Unpaid wages can be claimed before the authority under the Payment of Wages Act, and gratuity before the Controlling Authority under the Payment of Gratuity Act, which can award interest on delayed payment. Where the sum is substantial or the employee falls outside those statutes, a civil suit or a summary suit may be appropriate. A legal notice is usually the first step and frequently resolves it.",
      },
      {
        question: "What is a Labour Commissioner conciliation notice?",
        answer:
          "It is a notice requiring the employer to attend conciliation proceedings after a dispute has been raised. Attendance is expected and non-appearance is recorded. Conciliation is not adjudication — the officer cannot impose an outcome — but a settlement recorded under Section 12(3) is binding on the parties, so it should not be treated as a formality.",
      },
      {
        question: "What are an employer's obligations under the POSH Act?",
        answer:
          "Every workplace with ten or more employees must constitute an Internal Committee with a presiding officer who is a woman, a prescribed composition including an external member, and a written policy. Complaints must be inquired into within ninety days and the inquiry report acted on within sixty days. Failure to constitute a committee carries a penalty and, on repetition, can affect licences and registrations.",
      },
    ],
    relatedPracticeSlugs: ["labour-employment", "dispute-resolution-litigation"],
    order: 6,
  },
  {
    slug: "company-registration-roc-compliance",
    title: "Company Registration and ROC Compliance",
    seoTitle: "Company Registration & ROC, Delhi",
    h1: "Company Registration & ROC Compliance Lawyers in Delhi",
    shortTitle: "Company & ROC",
    cityLabel: "Company & ROC",
    metaDescription:
      "Company and LLP incorporation, annual ROC filings, director compliance and strike-off. Delhi NCR. Call +91-9899686318.",
    keywords: [
      "company registration Delhi",
      "ROC compliance lawyer",
      "private limited company registration",
      "LLP registration India",
      "annual filing AOC-4 MGT-7",
      "company strike off",
    ],
    icon: "🏢",
    intro:
      "Incorporation is the straightforward part. What follows it — annual filings, director disclosures, resolutions and registers — is where most small companies fall behind, and the consequences escalate quietly: late fees that accrue per day, directors disqualified, and companies struck off. We handle incorporation and the compliance that keeps it in good standing.",
    urgency:
      "Late filing fees under Section 403 accrue at a fixed amount per day with no cap, and continued default can disqualify directors under Section 164(2) for five years across every company they hold office in.",
    whoFor: [
      "Founders incorporating a private limited company or LLP",
      "Companies behind on annual filings",
      "Directors facing disqualification under Section 164(2)",
      "Companies that have been struck off and need restoration",
      "Businesses changing their name, objects or registered office",
      "Companies issuing shares or altering their capital structure",
    ],
    whatWeDo: [
      "Private limited, OPC and LLP incorporation through SPICe+ and FiLLiP",
      "Annual filings — AOC-4, MGT-7 and MGT-7A",
      "Director appointments, resignations, DIN and DIR-3 KYC",
      "Statutory registers, board and general meeting resolutions",
      "Share allotment, transfer and alteration of capital",
      "Changes to name, registered office and objects clause",
      "Strike-off under Section 248 and restoration applications before the NCLT",
      "Response to ROC show cause notices and compounding of offences",
    ],
    process: [
      {
        title: "Name and structure",
        detail:
          "We check name availability against existing companies and registered trademarks, and advise on whether a private limited company, OPC or LLP actually suits the plan.",
      },
      {
        title: "Documentation and digital signatures",
        detail:
          "Digital signature certificates, identity and address proof, registered office proof and the subscriber documents are assembled before filing.",
      },
      {
        title: "File and incorporate",
        detail:
          "SPICe+ is filed with the memorandum and articles, which issues the certificate of incorporation together with PAN, TAN and the statutory registrations bundled into the form.",
      },
      {
        title: "Set up the compliance calendar",
        detail:
          "First board meeting, auditor appointment within thirty days, registers opened, and the filing calendar fixed so deadlines are not discovered late.",
      },
      {
        title: "Maintain it",
        detail:
          "Annual filings, KYC, resolutions and event-based forms are filed as they fall due, because arrears are far more expensive to fix than to avoid.",
      },
    ],
    statutes: [
      "Companies Act, 2013",
      "Companies (Incorporation) Rules, 2014",
      "Limited Liability Partnership Act, 2008",
      "Companies (Appointment and Qualification of Directors) Rules, 2014",
    ],
    forums: [
      "Registrar of Companies, Delhi",
      "Regional Director",
      "National Company Law Tribunal",
    ],
    timeline:
      "Incorporation typically completes in seven to fifteen working days once documents and digital signatures are ready. Restoration of a struck-off company before the NCLT generally takes six to twelve months.",
    faqs: [
      {
        question: "How long does company registration take in Delhi?",
        answer:
          "Ordinarily seven to fifteen working days from the point at which documents and digital signature certificates are in hand. The variables are name approval, which can require a second attempt if the first choice conflicts with an existing company or trademark, and any queries raised by the Registrar on the filed form.",
      },
      {
        question: "What are the annual compliances for a private limited company?",
        answer:
          "The principal filings are AOC-4 for financial statements within thirty days of the annual general meeting and MGT-7 or MGT-7A for the annual return within sixty days. Alongside those sit the appointment of an auditor, at least four board meetings in a year, an annual general meeting, DIR-3 KYC for every director, and maintenance of the statutory registers.",
      },
      {
        question: "What happens if annual filings are missed?",
        answer:
          "Additional fees accrue under Section 403 at a fixed amount per day of delay, without a ceiling, so the cost grows steadily. Continued default for three consecutive financial years disqualifies the directors under Section 164(2) for five years, and that disqualification attaches to them in every company. The Registrar may also strike the company off the register.",
      },
      {
        question: "Can a struck-off company be restored?",
        answer:
          "Yes. An appeal to the National Company Law Tribunal lies under Section 252, ordinarily within three years of the strike-off order, and within twenty years where the application is made by the company or a member or creditor on the ground that the company was carrying on business. Restoration is usually conditional on filing all outstanding returns and paying the fees due.",
      },
      {
        question: "Should I register a private limited company or an LLP?",
        answer:
          "A private limited company suits businesses that intend to raise external investment, since shares and instruments such as CCPS are familiar to investors. An LLP has lighter ongoing compliance and no dividend distribution considerations, which suits professional firms and closely held ventures not seeking outside capital. The decision is better made on the funding plan than on registration cost.",
      },
    ],
    relatedPracticeSlugs: ["corporate-commercial", "corporate-mergers-acquisitions"],
    order: 7,
  },
  {
    slug: "trade-licence-business-registration",
    title: "Trade Licence and Business Registrations",
    seoTitle: "Trade Licence & Registration, Delhi",
    h1: "Trade Licence & Business Registration Lawyers in Delhi",
    shortTitle: "Licences & Registrations",
    cityLabel: "Trade Licence",
    metaDescription:
      "Trade licence, shops and establishment, FSSAI, Udyam and GST registration, plus licence renewal and notices. Call +91-9899686318.",
    keywords: [
      "trade licence Delhi",
      "shop establishment registration Delhi",
      "FSSAI licence lawyer",
      "Udyam registration",
      "GST registration lawyer Delhi",
      "trade licence renewal notice",
    ],
    icon: "📋",
    intro:
      "Most businesses need several registrations at once, from several authorities, each with its own renewal cycle. The practical difficulty is rarely obtaining any one of them — it is knowing which apply, keeping them current, and answering the authority when a notice arrives. We handle the applications, the renewals and the notices.",
    urgency:
      "Operating without a required licence, or on a lapsed one, exposes the business to sealing, penalty and prosecution under the relevant municipal or sectoral statute.",
    whoFor: [
      "New businesses establishing premises in Delhi NCR",
      "Restaurants, cloud kitchens and food businesses",
      "Shops, offices and commercial establishments",
      "Manufacturers requiring factory or pollution consents",
      "Enterprises seeking Udyam registration for MSME benefits",
      "Businesses served a notice over a lapsed or disputed licence",
    ],
    whatWeDo: [
      "Municipal trade licence applications and renewals",
      "Shops and Establishments registration",
      "FSSAI registration and State or Central food licences",
      "Udyam registration for micro, small and medium enterprises",
      "GST registration and amendment of registration particulars",
      "Professional tax, EPF and ESI registrations",
      "Pollution control consents to establish and to operate",
      "Replies to licence suspension, cancellation and show cause notices",
    ],
    process: [
      {
        title: "Map what actually applies",
        detail:
          "Requirements turn on activity, premises, headcount and turnover. We identify the registrations the business genuinely needs rather than applying for everything.",
      },
      {
        title: "Check the premises first",
        detail:
          "Municipal licences depend on permitted land use, the lease and occupancy. Problems here are the most common cause of rejection and are better found before filing.",
      },
      {
        title: "File with complete documents",
        detail:
          "Applications are filed with the ownership or lease proof, identity documents, layout and the activity-specific attachments each authority expects.",
      },
      {
        title: "Answer queries and inspections",
        detail:
          "Authorities commonly raise queries or inspect. We respond and attend so the file does not stall.",
      },
      {
        title: "Diarise the renewals",
        detail:
          "Each licence carries its own cycle. We set the calendar so renewals are filed before expiry rather than after a notice.",
      },
    ],
    statutes: [
      "Delhi Municipal Corporation Act, 1957",
      "Delhi Shops and Establishments Act, 1954",
      "Food Safety and Standards Act, 2006",
      "Micro, Small and Medium Enterprises Development Act, 2006",
      "Central Goods and Services Tax Act, 2017",
      "Water and Air Acts — pollution control consents",
    ],
    forums: [
      "Municipal Corporation licensing department",
      "Labour Department, Government of NCT of Delhi",
      "Food Safety and Standards Authority of India",
      "Delhi Pollution Control Committee",
    ],
    timeline:
      "Udyam and GST registration are generally completed within three to seven working days. Municipal trade licences and FSSAI State licences commonly take three to eight weeks depending on inspection.",
    faqs: [
      {
        question: "Which registrations does a new business in Delhi need?",
        answer:
          "Almost every commercial establishment needs registration under the Delhi Shops and Establishments Act. GST registration is required once turnover crosses the threshold or where it is compulsory regardless of turnover, as for inter-state supply. A municipal trade licence is required for specified trades. Food businesses need FSSAI registration or a licence. EPF and ESI follow from headcount, and Udyam registration is optional but unlocks MSME remedies including Samadhaan.",
      },
      {
        question: "Is a trade licence required for every business?",
        answer:
          "No. The municipal trade licence requirement attaches to trades specified under the Delhi Municipal Corporation Act — typically food, hazardous or nuisance-prone activities and certain commercial uses. Ordinary offices frequently do not require one, though they do require Shops and Establishments registration. It is worth confirming by activity rather than assuming either way.",
      },
      {
        question: "What is Udyam registration and is it worth doing?",
        answer:
          "Udyam is the government registration for micro, small and medium enterprises, based on self-declaration of investment and turnover. It is free and generally completed the same day. Beyond scheme eligibility and priority sector lending, its practical value is access to the Section 18 MSMED remedy for delayed payments, including the Facilitation Council route and compound interest at three times the bank rate.",
      },
      {
        question: "My trade licence has lapsed and I have received a notice.",
        answer:
          "Reply within the period stated, explaining the lapse and enclosing the renewal application and fee. Continuing to operate on a lapsed licence risks sealing of the premises and penalty. Where the notice alleges a substantive breach rather than mere delay, the reply needs to address that ground specifically, since a renewal application alone will not answer it.",
      },
      {
        question: "Can GST registration be obtained voluntarily?",
        answer:
          "Yes. A business below the threshold may register voluntarily under Section 25(3), and many do so to claim input tax credit and to supply registered buyers who prefer it. The trade-off is that voluntary registration brings the full compliance burden — returns remain due whether or not there is turnover, and non-filing attracts late fees and can lead to cancellation.",
      },
    ],
    relatedPracticeSlugs: ["corporate-commercial", "real-estate-urban-development"],
    order: 8,
  },
];

export const getServiceLines = (): ServiceLine[] =>
  [...serviceLines].sort((a, b) => a.order - b.order);

export const getServiceLineBySlug = (slug: string): ServiceLine | undefined =>
  serviceLines.find((s) => s.slug === slug);

export const getAllServiceSlugs = (): string[] =>
  serviceLines.map((s) => s.slug);

/** Sibling services for cross-linking, so no pillar page is a crawl dead end. */
export const getRelatedServices = (slug: string, limit = 3): ServiceLine[] =>
  getServiceLines()
    .filter((s) => s.slug !== slug)
    .slice(0, limit);
