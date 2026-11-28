/**
 * The local angle for each service x city combination — 48 entries.
 *
 * These exist so the city layer is not 48 variations of the same sentence with
 * the place name swapped. Each angle is grounded in something true about that
 * city: the authority with jurisdiction, the industry that generates the
 * dispute, or a procedural consequence of being in that state.
 *
 * Keyed `${citySlug}:${serviceSlug}`. A missing key means the page falls back
 * to the service pillar's own intro, so nothing breaks if a combination is
 * added without an angle.
 */

export const serviceCityAngles: Record<string, string> = {
  // ------------------------------------------------------------- Delhi
  "delhi:gst-notice-reply":
    "Delhi businesses are assessed by the Department of Trade and Taxes and the CGST Delhi Zone, and the writ route runs to the Delhi High Court — which has produced a substantial body of GST jurisprudence on blocked credit, retrospective cancellation and natural justice in adjudication.",
  "delhi:income-tax-notice-reply":
    "Delhi carries one of the heaviest scrutiny and reassessment loads in the country, and the Delhi High Court has decided much of the leading law on Section 148A and reassessment limitation — which matters when a threshold objection is the strongest point in the reply.",
  "delhi:cheque-bounce-section-138":
    "Section 138 complaints in Delhi are filed before the Metropolitan Magistrate at the court complex covering the payee's bank branch — Tis Hazari, Karkardooma, Saket, Patiala House, Dwarka or Rohini — and identifying the right complex at the outset avoids a return at filing.",
  "delhi:money-recovery-msme-samadhaan":
    "A Delhi-registered micro or small enterprise refers delayed payment to the Delhi MSE Facilitation Council, and the same debt can often be pursued more quickly as a summary suit in the district courts — the choice of route usually matters more than the drafting.",
  "delhi:legal-notice-drafting-reply":
    "Most commercial contracts in Delhi name Delhi courts or a Delhi-seated arbitration, so the notice has to invoke the right forum: threatening a civil suit where the contract mandates arbitration simply invites a Section 8 application.",
  "delhi:labour-court-employment-disputes":
    "Delhi disputes are conciliated before the Labour Department of the GNCTD and adjudicated in the Labour Courts at Karkardooma and Rouse Avenue, with the Delhi High Court exercising writ jurisdiction over the award.",
  "delhi:company-registration-roc-compliance":
    "Delhi companies file with the Registrar of Companies, Delhi, and company petitions and insolvency go to the NCLT New Delhi Bench — the busiest bench in the country, which affects listing timelines materially.",
  "delhi:trade-licence-business-registration":
    "Delhi premises are licensed by the MCD or the NDMC depending on the zone, with pollution consent from the Delhi Pollution Control Committee. Permitted land use under the Master Plan is the single most common reason an application is rejected.",

  // ----------------------------------------------------------- Gurgaon
  "gurgaon:gst-notice-reply":
    "Gurgaon businesses are administered by the Haryana Excise and Taxation Department and the CGST Gurugram Zone, with writs lying to the Punjab and Haryana High Court at Chandigarh rather than to Delhi — a distinction that catches out companies headquartered across the border.",
  "gurgaon:income-tax-notice-reply":
    "Gurgaon's concentration of corporate occupiers and outsourcing businesses makes transfer pricing, ESOP valuation and expatriate salary queries common in scrutiny, and the writ route runs to the Punjab and Haryana High Court.",
  "gurgaon:cheque-bounce-section-138":
    "Complaints are filed before the Magistrate at the District Courts, Gurugram, where the payee's bank branch is situated. Security cheques taken in Gurgaon's commercial leasing market are a frequent source of these matters.",
  "gurgaon:money-recovery-msme-samadhaan":
    "A Haryana-registered supplier refers delayed payment to the Haryana MSE Facilitation Council, and Gurgaon's vendor ecosystem — facilities, staffing, logistics and IT services supplying large corporates — generates most of these references.",
  "gurgaon:legal-notice-drafting-reply":
    "Gurgaon's commercial leases and vendor contracts almost always contain a cure period and a notice clause specifying the mode of service, and terminating without following it converts the innocent party into the party in breach.",
  "gurgaon:labour-court-employment-disputes":
    "Gurgaon generates a high volume of termination and settlement disputes from corporate and outsourcing employers. Conciliation is before the Haryana Labour Department, with adjudication in the Labour Court at Gurugram.",
  "gurgaon:company-registration-roc-compliance":
    "Haryana companies file with the Registrar of Companies, Delhi, but company petitions and insolvency go to the NCLT Chandigarh Bench — not Delhi — which surprises Gurgaon businesses that assume the NCR is one jurisdiction.",
  "gurgaon:trade-licence-business-registration":
    "Licensing runs through the Municipal Corporation of Gurugram, with consent from the Haryana State Pollution Control Board. Occupancy and permitted-use issues in commercial towers are the usual obstacle.",

  // ------------------------------------------------------------- Noida
  "noida:gst-notice-reply":
    "Noida businesses are assessed by the Uttar Pradesh State Tax Department and the CGST Noida Zone, and writs lie to the Allahabad High Court. Manufacturing units here see e-way bill detention and input credit mismatch disputes more than most.",
  "noida:income-tax-notice-reply":
    "Noida's mix of manufacturing and IT services produces scrutiny on capital subsidies, job-work treatment and unexplained credits, with writ jurisdiction in the Allahabad High Court rather than Delhi.",
  "noida:cheque-bounce-section-138":
    "Complaints are filed at the District Court, Gautam Buddh Nagar at Surajpur. Post-dated cheques issued against builder-buyer and supplier arrangements in Noida are a recurring source of Section 138 matters.",
  "noida:money-recovery-msme-samadhaan":
    "A UP-registered micro or small enterprise refers delayed payment to the Uttar Pradesh MSE Facilitation Council. Noida's component and job-work suppliers to larger manufacturers are the typical claimants.",
  "noida:legal-notice-drafting-reply":
    "Noida's builder-buyer and supply disputes frequently turn on whether a pre-existing dispute was raised before the demand — which is decided on the correspondence, making what the notice and the reply say decisive.",
  "noida:labour-court-employment-disputes":
    "Industrial employment in Noida brings the Industrial Disputes Act squarely into play, with conciliation before the UP Labour Department and adjudication in the Labour Court at Gautam Buddh Nagar.",
  "noida:company-registration-roc-compliance":
    "UP companies file with the Registrar of Companies at Kanpur, and insolvency and company petitions go to the NCLT Allahabad Bench — a different RoC and a different bench from neighbouring Delhi and Gurgaon.",
  "noida:trade-licence-business-registration":
    "Noida premises are regulated by the Noida Authority rather than a municipal corporation, with consent from the UP Pollution Control Board, and the Authority's own allotment and use conditions govern what can operate on a plot.",

  // -------------------------------------------------------- Chandigarh
  "chandigarh:gst-notice-reply":
    "Chandigarh businesses are administered by the UT Excise and Taxation Department and the CGST Chandigarh Zone, with the Punjab and Haryana High Court sitting in the same city — which makes the writ route unusually accessible.",
  "chandigarh:income-tax-notice-reply":
    "Chandigarh has its own ITAT benches and the High Court in the same city, so appeals and writs move without the travel and local-counsel cost that businesses in surrounding districts carry.",
  "chandigarh:cheque-bounce-section-138":
    "Complaints are filed before the Magistrate at the District Courts, Chandigarh, with appeals and revisions to the Sessions Court and the Punjab and Haryana High Court in the same city.",
  "chandigarh:money-recovery-msme-samadhaan":
    "References go to the Chandigarh MSE Facilitation Council, and because the NCLT Chandigarh Bench and the High Court both sit here, the escalation path from Samadhaan to insolvency is unusually short.",
  "chandigarh:legal-notice-drafting-reply":
    "Chandigarh is the seat of the High Court and the NCLT bench covering Punjab and Haryana, so a notice sent from here frequently concerns a dispute whose assets and operations are elsewhere in the region.",
  "chandigarh:labour-court-employment-disputes":
    "Conciliation is before the Chandigarh Labour Department with adjudication in the Labour Court at Chandigarh, and the Punjab and Haryana High Court hears writs against awards in the same city.",
  "chandigarh:company-registration-roc-compliance":
    "Chandigarh and Punjab companies file with the Registrar of Companies, Chandigarh, and the NCLT Chandigarh Bench hears insolvency and company petitions for Punjab, Haryana, Himachal Pradesh and the UT.",
  "chandigarh:trade-licence-business-registration":
    "Licensing is through the Municipal Corporation, Chandigarh, with consent from the Chandigarh Pollution Control Committee, and the city's planned-zoning rules on commercial use in residential sectors are strictly enforced.",

  // ------------------------------------------------------------ Jaipur
  "jaipur:gst-notice-reply":
    "Jaipur businesses are assessed by the Rajasthan Commercial Taxes Department and the CGST Jaipur Zone, with writs to the Rajasthan High Court Jaipur Bench. Exporters here commonly face refund and inverted duty disputes.",
  "jaipur:income-tax-notice-reply":
    "Jaipur has its own ITAT benches, and the city's handicraft, jewellery and tourism businesses see scrutiny on cash deposits, stock valuation and export incentives more often than most.",
  "jaipur:cheque-bounce-section-138":
    "Complaints are filed before the Magistrate at the District and Sessions Court, Jaipur, with the Rajasthan High Court Jaipur Bench hearing quashing petitions and appeals.",
  "jaipur:money-recovery-msme-samadhaan":
    "Rajasthan's handicraft and textile exporters are classic Samadhaan claimants, referring delayed payment to the Rajasthan MSE Facilitation Council, with the NCLT Jaipur Bench available where the debt crosses the insolvency threshold.",
  "jaipur:legal-notice-drafting-reply":
    "Jaipur's export and tourism contracts frequently involve counterparties outside Rajasthan, so the jurisdiction and arbitration clauses have to be read carefully before a notice names any forum.",
  "jaipur:labour-court-employment-disputes":
    "Conciliation is before the Rajasthan Labour Department with adjudication in the Labour Court at Jaipur, and the seasonal workforce in tourism and handicrafts raises continuous-service questions that decide many claims.",
  "jaipur:company-registration-roc-compliance":
    "Rajasthan companies file with the Registrar of Companies at Jaipur, and the NCLT Jaipur Bench hears insolvency and company petitions for the state — both in the city, which keeps cost and travel down.",
  "jaipur:trade-licence-business-registration":
    "Licensing runs through the Jaipur Municipal Corporation, with consent from the Rajasthan State Pollution Control Board. Heritage-zone restrictions apply to premises in the walled city.",

  // ----------------------------------------------------------- Panipat
  "panipat:gst-notice-reply":
    "Panipat's textile and handloom units are administered by the Haryana Excise and Taxation Department, and job-work transactions and e-way bill movements generate most of the scrutiny notices seen here.",
  "panipat:income-tax-notice-reply":
    "Panipat's manufacturing base is largely small and medium enterprises, where scrutiny tends to focus on cash transactions, stock valuation and unsecured loans — the heads taxed hardest under Section 115BBE.",
  "panipat:cheque-bounce-section-138":
    "Complaints are filed before the Magistrate at the District and Sessions Court, Panipat. Cheques issued against yarn, fabric and job-work supply are the typical subject.",
  "panipat:money-recovery-msme-samadhaan":
    "This is Panipat's characteristic dispute. The textile cluster runs on small suppliers extending credit to larger buyers, and a Udyam-registered supplier can refer delayed payment to the Haryana MSE Facilitation Council and claim compound interest at three times the bank rate.",
  "panipat:legal-notice-drafting-reply":
    "Panipat's supply arrangements are often documented only by purchase orders and invoices, so the notice has to build the contract from the course of dealing — which makes the documentary annexures decisive.",
  "panipat:labour-court-employment-disputes":
    "The textile units bring the Industrial Disputes Act into play for most of the workforce, with conciliation before the Haryana Labour Department and adjudication in the Labour Court at Panipat.",
  "panipat:company-registration-roc-compliance":
    "Haryana companies file with the Registrar of Companies, Delhi, while insolvency and company petitions go to the NCLT Chandigarh Bench — two different cities, neither of them Panipat.",
  "panipat:trade-licence-business-registration":
    "Licensing is through the Municipal Corporation, Panipat, with consent from the Haryana State Pollution Control Board. Dyeing and processing units fall in the higher pollution categories and face the fuller consent process.",
};

export const getServiceCityAngle = (
  citySlug: string,
  serviceSlug: string
): string | undefined => serviceCityAngles[`${citySlug}:${serviceSlug}`];
