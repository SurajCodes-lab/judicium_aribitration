/**
 * Per-practice-area HowTo schemas — emitted on practice-area detail pages where the
 * engagement process is procedure-specific. HowTo rich results render as a numbered
 * carousel in mobile SERPs and are highly weighted by voice assistants and AI Overviews
 * for "how to X" queries.
 *
 * Only practice areas with a clear, generalisable client-facing procedure are listed
 * here — the homepage HowTo covers the firm-level engagement flow.
 */

interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface PracticeHowTo {
  name: string;
  description: string;
  totalTime: string; // ISO-8601 duration
  steps: HowToStep[];
}

export const practiceAreaHowTos: Record<string, PracticeHowTo> = {
  "arbitration-alternative-dispute-resolution": {
    name: "How to File an Arbitration Case in India",
    description:
      "Step-by-step procedure for initiating commercial arbitration in India under the Arbitration and Conciliation Act, 1996.",
    totalTime: "PT72H",
    steps: [
      {
        name: "Audit the arbitration agreement",
        text: "Review the contract for an arbitration clause. Confirm the clause is in writing (Section 7), the instrument is properly stamped under the Indian Stamp Act, 1899 (NN Global), and the seat / venue are clearly identified.",
      },
      {
        name: "Issue the Section 21 notice",
        text: "Serve a written notice on the opposing party invoking arbitration under Section 21 of the Arbitration and Conciliation Act, 1996. The arbitral proceedings are deemed to have commenced on the date this notice is received.",
      },
      {
        name: "Constitute the tribunal",
        text: "If the agreement provides an appointment mechanism, follow it. If the parties fail to agree, apply to the High Court (or Supreme Court for international commercial arbitration) under Section 11 for arbitrator appointment.",
      },
      {
        name: "Apply for interim relief if needed",
        text: "Before tribunal constitution: file a Section 9 application before the appropriate court. After constitution: file a Section 17 application before the tribunal.",
      },
      {
        name: "Submit the statement of claim",
        text: "File the statement of claim before the tribunal within the tribunal-directed timeline, attaching contractual documents, prior correspondence, and computed damages.",
      },
      {
        name: "Complete pleadings, evidence and hearings",
        text: "Statement of defence, replication, evidence by affidavit, cross-examination, and final written submissions. Section 29A requires the award within 12 months of completion of pleadings (extendable by 6 months with consent).",
      },
      {
        name: "Enforce the award",
        text: "If the award is in your favour and unchallenged, enforce it as a decree under Section 36 read with the Code of Civil Procedure, 1908. If challenged under Section 34, defend the challenge before the supervising court.",
      },
    ],
  },
  "banking-finance": {
    name: "How a Lender Initiates SARFAESI Enforcement Against a Defaulting Borrower",
    description:
      "Step-by-step procedure for a secured creditor to enforce security interest under the SARFAESI Act, 2002.",
    totalTime: "PT2160H",
    steps: [
      {
        name: "Classify the account as NPA",
        text: "Identify the account as a Non-Performing Asset per RBI Income Recognition and Asset Classification (IRAC) norms — typically 90 days past due for term loans.",
      },
      {
        name: "Issue Section 13(2) notice",
        text: "Serve a 60-day demand notice under Section 13(2) of the SARFAESI Act, 2002 calling upon the borrower to repay the entire outstanding within 60 days, failing which the secured creditor will exercise rights under Section 13(4).",
      },
      {
        name: "Consider the borrower's representation",
        text: "If the borrower files a representation or objection under Section 13(3A), the secured creditor must respond within 15 days. The notice period continues to run.",
      },
      {
        name: "Take symbolic possession under Section 13(4)",
        text: "After 60 days, take symbolic possession of the secured asset. Issue the possession notice as prescribed under Rule 8 of the Security Interest (Enforcement) Rules, 2002 and publish in two newspapers.",
      },
      {
        name: "Obtain physical possession via the District Magistrate",
        text: "Where the borrower does not vacate, apply to the District Magistrate / Chief Metropolitan Magistrate under Section 14 for assistance in taking physical possession of the secured asset.",
      },
      {
        name: "Conduct the sale",
        text: "Issue a sale notice (30 days' notice in two newspapers including one vernacular), conduct an e-auction or public auction per Rule 8/9, and apply the sale proceeds to the secured debt in the priority order under Section 13(7).",
      },
      {
        name: "Pursue residual balance",
        text: "If the sale proceeds do not satisfy the entire dues, file a claim before the Debt Recovery Tribunal (DRT) under the RDDB Act, 1993 for the unsatisfied balance, supported by the SARFAESI sale account.",
      },
    ],
  },
  "insolvency-bankruptcy": {
    name: "How an Operational Creditor Files a CIRP Application Under IBC, 2016",
    description:
      "Step-by-step procedure for an operational creditor to initiate corporate insolvency resolution against a defaulting corporate debtor under the Insolvency and Bankruptcy Code, 2016.",
    totalTime: "PT1440H",
    steps: [
      {
        name: "Confirm the default threshold",
        text: "Confirm the unpaid operational debt exceeds the minimum default threshold under Section 4 of the IBC, 2016 (currently ₹1 crore) and the default is undisputed by the corporate debtor.",
      },
      {
        name: "Issue Section 8 demand notice",
        text: "Serve a Section 8 demand notice in Form 3 or invoice with notice in Form 4 on the corporate debtor, calling for payment within 10 days. Attach the unpaid invoice and relevant supporting documents.",
      },
      {
        name: "Assess the response window",
        text: "If the corporate debtor responds within 10 days with proof of payment, an existing pre-notice dispute, or evidence of repayment, IBC proceedings are not maintainable. Carefully assess any 'existence of dispute' defence (per Mobilox Innovations, 2017).",
      },
      {
        name: "File Section 9 application before NCLT",
        text: "Where there is no payment or genuine pre-existing dispute, file a Section 9 application in Form 5 before the NCLT having territorial jurisdiction over the corporate debtor's registered office, with prescribed fee and Insolvency Professional consent (Form 2).",
      },
      {
        name: "Admission and moratorium",
        text: "On satisfaction that the default is established and the application is complete, NCLT admits the application under Section 9(5). On admission, a moratorium under Section 14 takes effect immediately — all proceedings against the corporate debtor are stayed.",
      },
      {
        name: "CIRP process",
        text: "The appointed Resolution Professional takes over, constitutes the Committee of Creditors, invites and evaluates resolution plans, and presents the approved plan to NCLT for confirmation within 180 days (extendable by 90 days, with hard cap of 330 days).",
      },
      {
        name: "Resolution plan approval or liquidation",
        text: "If a resolution plan is approved by 66% of the CoC and confirmed by NCLT under Section 31, it binds all stakeholders. If no plan is approved within the timeline, NCLT orders liquidation under Section 33.",
      },
    ],
  },
  "real-estate-urban-development": {
    name: "How a Homebuyer Files a RERA Complaint in India",
    description:
      "Step-by-step procedure for an allottee to file a complaint against a developer under the Real Estate (Regulation and Development) Act, 2016.",
    totalTime: "PT720H",
    steps: [
      {
        name: "Verify RERA registration",
        text: "Confirm the project is registered with the state RERA Authority (e.g., UP RERA, Haryana RERA, Maharashtra RERA). Unregistered projects are themselves a Section 3 violation.",
      },
      {
        name: "Identify the relief sought",
        text: "Refund of consideration with statutory interest (Section 18), interest on possession delay, compensation for defects, or specific performance (delivery of possession). Each relief has a slightly different procedural track.",
      },
      {
        name: "Compile documentary evidence",
        text: "Allotment letter, builder-buyer agreement, payment receipts, statutory notices, possession-promise correspondence, and (where relevant) photographs of construction status.",
      },
      {
        name: "Draft and file the RERA complaint",
        text: "File the complaint in the prescribed form before the state RERA Authority (or designated Adjudicating Officer for compensation claims). Most states accept online filings. Pay the prescribed fee.",
      },
      {
        name: "Attend hearings",
        text: "Hearings are typically informal and time-bound (60 days for disposal, per Section 29). The RERA Authority can summon documents, examine the promoter, and grant relief.",
      },
      {
        name: "Receive the order",
        text: "The Authority's order is enforceable as a decree under Section 40. For interest and refund orders, the Authority can attach the promoter's property and bank accounts on non-compliance.",
      },
      {
        name: "Appeal if needed",
        text: "Either party may appeal to the state Real Estate Appellate Tribunal (REAT) within 60 days, with pre-deposit (typically 30% of the awarded amount for promoter appeals).",
      },
    ],
  },
  "corporate-mergers-acquisitions": {
    name: "How to Execute a Merger Scheme Under Sections 230-232 of the Companies Act, 2013",
    description:
      "Step-by-step procedure for a company to obtain approval for a scheme of merger or amalgamation under Sections 230 to 232 of the Companies Act, 2013 before the National Company Law Tribunal.",
    totalTime: "PT4320H",
    steps: [
      {
        name: "Obtain board approval and a registered valuation",
        text: "Convene board meetings of each transferor and transferee company to approve the draft scheme of arrangement, the share-exchange ratio, and the appointment of a Registered Valuer (under Section 247) to issue a valuation report. A merchant banker's fairness opinion is also obtained where shares are listed.",
      },
      {
        name: "File the first-motion application with NCLT",
        text: "File a joint or separate first-motion application in Form NCLT-1 under Section 230 before the National Company Law Tribunal having jurisdiction over the registered office, accompanied by an affidavit in Form NCLT-6, the scheme, the valuation report, and the disclosures required by Rule 6 of the Companies (Compromises, Arrangements and Amalgamations) Rules, 2016.",
      },
      {
        name: "Hold creditor and member meetings as directed",
        text: "On the first-motion order, convene the meetings of equity shareholders, secured creditors, and unsecured creditors as directed by NCLT, issuing notice in Form CAA-2 at least one month in advance with the explanatory statement. The scheme must be approved by a majority in number representing three-fourths in value of each class present and voting (Section 230(6)). Meetings may be dispensed with where 90% of creditors by value consent.",
      },
      {
        name: "Serve notice on statutory and sectoral regulators",
        text: "Serve notice of the application under Section 230(5) on the Central Government (Regional Director), the Registrar of Companies, the Income Tax Department, and sectoral regulators such as RBI, SEBI, or the stock exchanges as applicable, inviting representations within 30 days.",
      },
      {
        name: "Obtain CCI approval where thresholds are met",
        text: "Where the combination crosses the asset/turnover thresholds under Section 5 of the Competition Act, 2002 and is not exempt under the de minimis (small target) exemption, file a combination notice with the Competition Commission of India and obtain its approval before the scheme is sanctioned.",
      },
      {
        name: "File the second-motion petition for sanction",
        text: "After the meetings, file the second-motion petition in Form CAA-5 under Section 232 reporting the meeting results (chairperson's report in Form CAA-4) and the regulators' responses. NCLT hears objections and, if satisfied the scheme is fair, sanctions it by an order in Form CAA-7.",
      },
      {
        name: "File the order with the Registrar of Companies",
        text: "File the certified NCLT sanction order with the RoC in Form INC-28 within 30 days of receipt. The scheme becomes effective from the appointed date, the transferor company stands dissolved without winding up, and assets and liabilities vest in the transferee company.",
      },
    ],
  },
  "intellectual-property-rights": {
    name: "How to Register a Trademark in India",
    description:
      "Step-by-step procedure for registering a trademark in India under the Trade Marks Act, 1999 through the Office of the Controller General of Patents, Designs and Trade Marks.",
    totalTime: "PT13140H",
    steps: [
      {
        name: "Conduct a trademark search",
        text: "Run a public search on the IP India trademark portal (the Controller General's online database) across the relevant Nice Classification class to confirm the mark is not identical or deceptively similar to an existing registered or pending mark.",
      },
      {
        name: "File the application in Form TM-A",
        text: "File the application in Form TM-A on the IP India e-filing portal, specifying the applicant, the mark (word/device/logo), the goods or services and their class, and the date of first use (or 'proposed to be used'). Pay the prescribed fee — a reduced fee applies to individuals, startups, and small enterprises.",
      },
      {
        name: "Respond to the examination report",
        text: "The Registry examines the application under Sections 9 and 11 (absolute and relative grounds for refusal) and issues an examination report. File a reply within one month addressing any objections; attend a show-cause hearing before the Registrar if the objections are maintained.",
      },
      {
        name: "Publication in the Trade Marks Journal",
        text: "Once objections are overcome, the mark is advertised in the Trade Marks Journal under Section 20 to invite third-party opposition.",
      },
      {
        name: "Clear the opposition window",
        text: "Any person may file a notice of opposition in Form TM-O within four months of publication under Section 21. If opposed, the matter proceeds through counter-statement, evidence affidavits, and a hearing before the Registrar. If unopposed, the application proceeds to registration.",
      },
      {
        name: "Obtain registration and use the ® symbol",
        text: "The Registry issues the registration certificate under Section 23. The proprietor may then use the ® symbol; the registration is valid for 10 years from the date of application.",
      },
      {
        name: "Renew every 10 years",
        text: "Renew the registration in Form TM-R before expiry of each 10-year term under Section 25. A six-month grace period (with surcharge) applies, and a mark removed for non-renewal may be restored within one year.",
      },
    ],
  },
  "competition-antitrust": {
    name: "How to File a Combination (Merger) Notification with the CCI",
    description:
      "Step-by-step procedure for notifying a combination to the Competition Commission of India under the Competition Act, 2002 and the Combination Regulations.",
    totalTime: "PT2160H",
    steps: [
      {
        name: "Assess the jurisdictional thresholds",
        text: "Determine whether the transaction's combined assets or turnover cross the thresholds in Section 5 of the Competition Act, 2002 (including the Enterprise and Group tests). Also assess the deal-value threshold introduced by the 2023 amendment for transactions with substantial Indian business operations.",
      },
      {
        name: "Check exemptions, including de minimis",
        text: "Confirm whether the small-target (de minimis) exemption applies — where the target's Indian assets or turnover fall below the prescribed limits notified by the Central Government — or whether any other exemption removes the filing obligation.",
      },
      {
        name: "Select the correct form",
        text: "Choose between the short-form Form I (for transactions unlikely to raise competition concerns, such as low market shares) and the long-form Form II (for horizontal overlaps or vertical relationships above the indicative thresholds), as set out in the CCI (Combinations) Regulations.",
      },
      {
        name: "Hold a pre-filing consultation",
        text: "Engage in an informal, confidential pre-filing consultation with the CCI to clarify scope, market definition, and information requirements before formal submission.",
      },
      {
        name: "File the notice with the prescribed fee",
        text: "File the notification with the CCI together with the prescribed filing fee. Under the amended regime the obligation is triggered on execution of binding documents, and parties may not consummate the combination until approval (the standstill obligation under Section 6(2A)).",
      },
      {
        name: "Phase I review",
        text: "The CCI conducts a Phase I review and must form a prima facie opinion within 30 working days of a valid filing (the clock pauses for requests for further information). Most combinations are approved in Phase I under Section 31(1).",
      },
      {
        name: "Phase II review and final order",
        text: "Where the CCI forms a prima facie view of an appreciable adverse effect on competition, it initiates a detailed Phase II investigation, which may involve public comments and a show-cause notice. The CCI then approves the combination, approves it subject to modifications/remedies, or directs that it shall not take effect, within the overall statutory limit of 150 working days.",
      },
    ],
  },
  "dispute-resolution-litigation": {
    name: "How to File a Commercial Suit Under the Commercial Courts Act, 2015",
    description:
      "Step-by-step procedure for instituting a commercial suit before a Commercial Court under the Commercial Courts Act, 2015 and the amended Code of Civil Procedure, 1908.",
    totalTime: "PT8760H",
    steps: [
      {
        name: "Exhaust pre-institution mediation",
        text: "Where no urgent interim relief is sought, exhaust pre-institution mediation under Section 12A of the Commercial Courts Act, 2015 through the authority constituted under the Legal Services Authorities Act, 1987. A suit filed without this mandatory mediation is liable to be rejected (per Patil Automation, 2022).",
      },
      {
        name: "Confirm 'commercial dispute' and pecuniary threshold",
        text: "Verify the dispute qualifies as a 'commercial dispute' under Section 2(1)(c) and meets the specified value threshold (currently ₹3 lakh) so that it falls within the jurisdiction of the Commercial Court / Commercial Division.",
      },
      {
        name: "Draft the plaint with the statement of truth",
        text: "Draft the plaint setting out the cause of action and reliefs. The amended CPC (Order VI Rule 15A) requires every pleading to be verified by a Statement of Truth, and Order XI requires the plaintiff to file a list and disclosure of all documents in its power, possession, or control along with the plaint.",
      },
      {
        name: "Pay court fees and file before the correct forum",
        text: "Pay ad valorem court fees on the value of the relief and institute the plaint before the Commercial Court / Commercial Division having territorial and pecuniary jurisdiction, with the requisite copies and the disclosure affidavit of documents.",
      },
      {
        name: "Service and the written statement",
        text: "On service of summons, the defendant must file the written statement within 30 days, extendable up to a maximum of 120 days from the date of service (Order VIII Rule 1, as amended). The right to file is forfeited thereafter, and the defendant must likewise file disclosure of documents.",
      },
      {
        name: "Case management hearing",
        text: "The court holds a Case Management Hearing under Order XV-A to frame issues, fix timelines for inspection and admission/denial of documents, list witnesses, and schedule the trial — recording evidence within a fixed, time-bound calendar.",
      },
      {
        name: "Trial, arguments and judgment",
        text: "Evidence is led by affidavit with cross-examination, followed by oral and written arguments. The Commercial Court is required to pronounce judgment within 90 days of the conclusion of arguments. An appeal lies to the Commercial Appellate Division under Section 13 within 60 days.",
      },
    ],
  },
  "data-privacy-cybersecurity": {
    name: "How to Respond to a Data Breach Under Indian Law",
    description:
      "Step-by-step incident-response procedure for an organisation following a personal-data breach in India under the CERT-In Directions, 2022 and the Digital Personal Data Protection Act, 2023.",
    totalTime: "PT720H",
    steps: [
      {
        name: "Contain and assess the incident",
        text: "Activate the incident-response plan, isolate affected systems to contain the breach, and assess its nature, scope, the categories of personal data involved, and the number of affected data principals.",
      },
      {
        name: "Report to CERT-In within 6 hours",
        text: "Report the cyber security incident to the Indian Computer Emergency Response Team (CERT-In) within 6 hours of noticing or being notified of it, in the prescribed format, as mandated by the CERT-In Directions of 28 April 2022 issued under Section 70B(6) of the Information Technology Act, 2000.",
      },
      {
        name: "Notify the Data Protection Board and data principals",
        text: "Intimate the Data Protection Board of India and each affected data principal of the personal-data breach as required under Section 8(6) of the Digital Personal Data Protection Act, 2023, read with the prescribed rules, giving the nature and extent of the breach and the measures being taken.",
      },
      {
        name: "Preserve logs and forensic evidence",
        text: "Preserve and securely retain all relevant ICT system logs for the rolling 180-day period mandated by the CERT-In Directions, along with forensic images and a chain-of-custody record, to support investigation and any regulatory inquiry.",
      },
      {
        name: "Remediate and harden systems",
        text: "Eradicate the threat, patch the exploited vulnerabilities, rotate credentials and keys, restore from clean backups, and implement additional safeguards to prevent recurrence. Synchronise system clocks to the NIC/NPL NTP server as required.",
      },
      {
        name: "Document the breach for the regulator",
        text: "Maintain a complete written record of the incident timeline, root-cause analysis, notifications issued, and remediation taken, so the organisation can demonstrate compliance with its reasonable-security-safeguards and accountability obligations if the Data Protection Board commences an inquiry.",
      },
    ],
  },
  "labour-employment": {
    name: "How to Conduct a Lawful Employee Termination in India",
    description:
      "Step-by-step procedure for an employer to carry out a legally compliant termination of employment in India, including the special protections applicable to 'workmen' under the Industrial Disputes Act, 1947.",
    totalTime: "PT720H",
    steps: [
      {
        name: "Review the contract, policies and standing orders",
        text: "Examine the employment contract, HR policies, and the certified Standing Orders (under the Industrial Employment (Standing Orders) Act, 1946) to confirm the notice period, the disciplinary procedure, and whether the employee is a 'workman' under Section 2(s) of the Industrial Disputes Act, 1947.",
      },
      {
        name: "Establish and document the grounds",
        text: "Identify the lawful ground — misconduct, poor performance, redundancy/retrenchment, or end of fixed term — and build the supporting record (performance reviews, warning letters, or charge-sheet and domestic inquiry findings where the termination is for misconduct, observing principles of natural justice).",
      },
      {
        name: "Serve notice or pay in lieu",
        text: "Serve the contractual or statutory notice of termination, or pay salary in lieu of the notice period, in accordance with the contract and standing orders.",
      },
      {
        name: "Comply with Section 25F for workmen",
        text: "Where a workman with at least one year of continuous service is being retrenched, comply with Section 25F of the Industrial Disputes Act, 1947 — one month's written notice (or pay in lieu) and retrenchment compensation of 15 days' average pay per completed year of service paid at the time of retrenchment.",
      },
      {
        name: "Observe last-come-first-go and re-employment rules",
        text: "Follow the 'last come, first go' rule of Section 25G (the most recently hired workman in the category is retrenched first, absent recorded reasons) and the re-employment preference under Section 25H. Larger establishments must also obtain prior government permission under Chapter V-B where Section 25N applies.",
      },
      {
        name: "Settle statutory dues",
        text: "Process the full-and-final settlement covering the last drawn salary, gratuity under the Payment of Gratuity Act, 1972 (for employees with five or more years of service), the Provident Fund balance, bonus, and encashment of accrued leave.",
      },
      {
        name: "Issue documentation and close compliance",
        text: "Issue the relieving letter, experience certificate, and Form 16, file the requisite returns with the EPFO/ESIC, and retain the complete termination file to defend any industrial dispute reference or claim before the Labour Court.",
      },
    ],
  },
};

export function getHowToForPractice(slug: string): PracticeHowTo | undefined {
  return practiceAreaHowTos[slug];
}
