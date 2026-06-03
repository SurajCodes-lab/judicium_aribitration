/**
 * Per-city LocalBusiness JSON-LD schemas for Judicium Arbitration.
 * Each city office gets its own LocalBusiness entity so Google can rank
 * the firm in city-specific local pack queries (e.g. "arbitration lawyer Gurgaon").
 *
 * The Delhi entry is the registered HQ. Other offices are listed as branches
 * under the same legal entity (parentOrganization).
 */

const BASE_URL = "https://www.judiciumarbitration.com";

export interface CityOffice {
  slug: string;
  city: string;
  region: string;
  regionCode: string; // ISO-3166-2
  postalCode: string;
  streetAddress: string;
  latitude: number;
  longitude: number;
  telephone: string;
  isHeadquarters?: boolean;
  nearbyCourts: string[];
  intro: string;
  // Second, distinct local-landscape paragraph (do NOT duplicate `intro`)
  localOverview: string;
  // 5-7 city-specific practice strengths / how the firm helps locally
  localExpertise: string[];
  // 5 short FAQs unique to this city — answer-engine citation surface
  faqs: { question: string; answer: string }[];
}

export const cityOffices: CityOffice[] = [
  {
    slug: "delhi",
    city: "New Delhi",
    region: "Delhi",
    regionCode: "IN-DL",
    postalCode: "110001",
    streetAddress: "Connaught Place, New Delhi",
    latitude: 28.6328,
    longitude: 77.2197,
    telephone: "+91-9899686394",
    isHeadquarters: true,
    nearbyCourts: [
      "Supreme Court of India",
      "Delhi High Court",
      "Delhi International Arbitration Centre (DIAC)",
      "District Courts at Patiala House, Tis Hazari, Karkardooma, Saket, Rohini, Dwarka",
      "Debt Recovery Tribunal (DRT) — Delhi",
      "National Company Law Tribunal (NCLT) — Delhi Bench",
    ],
    intro:
      "Judicium Arbitration's New Delhi headquarters sits at Connaught Place, minutes from the Supreme Court of India, Delhi High Court, and the Delhi International Arbitration Centre (DIAC). As the firm's flagship office, the Delhi practice handles the highest-stakes commercial arbitration matters in India, including DIAC institutional proceedings, Section 9 and Section 17 interim relief at the Delhi High Court, and enforcement applications.",
    localOverview:
      "Delhi is the centre of gravity for Indian commercial arbitration, with the Delhi High Court running a dedicated Arbitration Court on its Original Side and the Delhi International Arbitration Centre (DIAC) administering institutional references. The capital concentrates disputes from infrastructure and construction (NHAI, DMRC and PSU contracts), telecom, power, banking and large corporate joint ventures. The Delhi High Court hears Section 9 interim-relief petitions, Section 11 arbitrator-appointment applications, Section 34 set-aside challenges and Section 37 appeals, while the Supreme Court sits at Tilak Marg for SLPs and constitutional questions on arbitration. From Connaught Place, Judicium Arbitration drafts arbitration clauses, runs institutional and ad-hoc references, secures urgent interim protection, and enforces both domestic awards and foreign awards under Part II of the Arbitration and Conciliation Act, 1996.",
    localExpertise: [
      "DIAC institutional arbitration — drafting references, appointing tribunals and conducting hearings at the Delhi International Arbitration Centre",
      "Urgent Section 9 interim-relief petitions before the Delhi High Court (asset freezes, injunctions, security for claims)",
      "Section 11 arbitrator-appointment applications before the Delhi High Court for stalled ad-hoc references",
      "Section 34 set-aside and Section 37 appeal proceedings in the Delhi High Court Arbitration Court",
      "Enforcement of foreign awards under Part II (New York Convention) for India-facing international parties",
      "PSU and infrastructure contract arbitration involving NHAI, DMRC, NTPC and central-government tenders",
    ],
    faqs: [
      {
        question: "Where is Judicium Arbitration's Delhi office located?",
        answer:
          "Judicium Arbitration's Delhi headquarters is at Connaught Place, New Delhi 110001 — within easy reach of the Supreme Court of India, Delhi High Court, and the Delhi International Arbitration Centre (DIAC). Office hours are Monday–Friday, 9:00 AM – 6:00 PM. Call +91-9899686394 to schedule a consultation.",
      },
      {
        question: "Which courts does the Delhi office regularly appear before?",
        answer:
          "The Delhi team regularly appears before the Supreme Court of India, the Delhi High Court (Original Side and Arbitration Court), DIAC, all six District Court complexes in Delhi (Patiala House, Tis Hazari, Karkardooma, Saket, Rohini, Dwarka), the Debt Recovery Tribunal Delhi, and the NCLT Delhi Bench.",
      },
      {
        question: "Does the Delhi office handle international arbitration?",
        answer:
          "Yes. Judicium Arbitration's Delhi office is a leading destination for India-seated international commercial arbitration under Part I of the Arbitration and Conciliation Act, 1996, and for enforcement of foreign awards under Part II (New York Convention). The team has represented Indian and foreign parties in DIAC, ICC, SIAC, LCIA, and HKIAC proceedings.",
      },
      {
        question: "How do I file a Section 9 interim relief application in Delhi?",
        answer:
          "A Section 9 application for interim measures is filed before the Delhi High Court on its Original Side (or the relevant District Court, depending on value), supported by the arbitration agreement and an affidavit showing urgency. Relief can include injunctions, asset preservation, and security for the claim amount before or during arbitration. Judicium Arbitration's Delhi team prepares and argues these urgent petitions, often at short notice.",
      },
      {
        question: "What is DIAC and how is it different from ad-hoc arbitration in Delhi?",
        answer:
          "The Delhi International Arbitration Centre (DIAC) is the institutional arbitration body attached to the Delhi High Court, with its own rules, panel of arbitrators, and administered fee schedule. Unlike ad-hoc arbitration, where the parties manage logistics themselves, DIAC supervises appointments, hearings, and timelines. We advise clients on whether a DIAC clause or ad-hoc reference better suits their contract.",
      },
    ],
  },
  {
    slug: "gurgaon",
    city: "Gurgaon",
    region: "Haryana",
    regionCode: "IN-HR",
    postalCode: "122002",
    streetAddress: "DLF Cyber City, Gurgaon",
    latitude: 28.4595,
    longitude: 77.0266,
    telephone: "+91-9899686394",
    nearbyCourts: [
      "Punjab and Haryana High Court (via Chandigarh)",
      "District Court Gurugram",
      "Commercial Court Gurugram",
      "NCLT — Chandigarh Bench (territorial jurisdiction)",
    ],
    intro:
      "The Gurgaon office serves India's largest concentration of Fortune-500 India HQs, IT/BPO majors, and real-estate developers. It is the firm's go-to office for corporate, commercial, and real-estate (RERA) disputes originating in the Millennium City — including builder-buyer arbitrations, IT services contract disputes, and shareholder matters.",
    localOverview:
      "Gurugram's economy is built on commercial real estate, IT and BPO services, automotive manufacturing along the NH-48 belt, and the India offices of multinational corporates. The most common disputes here are builder-buyer claims over delayed possession and refunds, governed by the Haryana Real Estate Regulatory Authority (Haryana RERA, with its Gurugram bench) and appealable to the Haryana Real Estate Appellate Tribunal. Commercial and contract matters are heard by the Commercial Court and District Court at Gurugram, insolvency goes to the NCLT Chandigarh Bench, and writs and Section 11 arbitrator appointments lie with the Punjab and Haryana High Court at Chandigarh. Judicium Arbitration helps developers, allottees, and corporates in this corridor with RERA filings, arbitration of construction and services contracts, and shareholder and JV disputes.",
    localExpertise: [
      "Builder-buyer arbitration and RERA claims under Haryana RERA for DLF, Sohna Road, Golf Course Extension and New Gurgaon (Dwarka Expressway) projects",
      "Possession-delay and refund-with-interest complaints before the Haryana RERA Gurugram bench and appeals to the Haryana REAT",
      "IT and BPO master-services-agreement disputes for multinationals headquartered in Cyber City and Udyog Vihar",
      "Shareholder, founder and joint-venture disputes for startups and corporates in the DLF/Cyber Hub ecosystem",
      "Automotive and manufacturing vendor-contract arbitration along the NH-48 (Manesar–IMT) industrial belt",
      "Section 11 arbitrator-appointment petitions before the Punjab and Haryana High Court for Gurugram-seated contracts",
    ],
    faqs: [
      {
        question: "Where is Judicium Arbitration's Gurgaon office?",
        answer:
          "Judicium Arbitration's Gurgaon office is at DLF Cyber City, Gurgaon 122002, Haryana — at the heart of the Millennium City's corporate hub. Office hours are Monday–Friday, 9:00 AM – 6:00 PM. Reach the team at +91-9899686394.",
      },
      {
        question: "What types of cases does the Gurgaon office handle?",
        answer:
          "The Gurgaon office specialises in corporate and commercial arbitration, real-estate and RERA disputes (especially builder-buyer matters under Haryana RERA), IT/BPO services contract disputes, and shareholder disputes involving Gurgaon-headquartered companies.",
      },
      {
        question: "Which courts cover Gurgaon disputes?",
        answer:
          "Gurgaon commercial disputes are heard by the Commercial Court Gurugram, the District Court Gurugram, the NCLT Chandigarh Bench (for insolvency), and the Punjab and Haryana High Court at Chandigarh (for writs and Section 11 arbitrator appointments).",
      },
      {
        question: "How do I file a RERA complaint against a builder in Gurgaon?",
        answer:
          "A complaint against a Gurgaon developer is filed with the Haryana Real Estate Regulatory Authority's Gurugram bench, online through the Haryana RERA portal or in person, with the builder-buyer agreement, payment receipts, and details of the delay or default. Common reliefs include possession, refund with interest, and compensation. If the order is unsatisfactory, an appeal lies to the Haryana Real Estate Appellate Tribunal within 60 days, and Judicium Arbitration handles both stages.",
      },
      {
        question: "Where is the NCLT for Gurgaon companies?",
        answer:
          "Companies registered in Gurugram fall under the territorial jurisdiction of the NCLT Chandigarh Bench, not a Gurgaon or Delhi bench. Insolvency petitions under the IBC, oppression-and-mismanagement claims under Sections 241–242 of the Companies Act, and other NCLT matters for Gurgaon entities are filed at Chandigarh, where our team appears regularly.",
      },
    ],
  },
  {
    slug: "noida",
    city: "Noida",
    region: "Uttar Pradesh",
    regionCode: "IN-UP",
    postalCode: "201301",
    streetAddress: "Sector 18, Noida",
    latitude: 28.5355,
    longitude: 77.391,
    telephone: "+91-9899686394",
    nearbyCourts: [
      "Allahabad High Court (via Prayagraj)",
      "District Court Gautam Buddh Nagar (Surajpur)",
      "Commercial Court Gautam Buddh Nagar",
      "NCLT — Allahabad Bench",
    ],
    intro:
      "Noida is a hub for IT services, e-commerce warehousing, and emerging tech businesses. Judicium Arbitration's Noida office handles technology-services arbitration, real-estate disputes under UP RERA, data-privacy and cybersecurity matters under the DPDP Act 2023, and corporate disputes for Noida-based businesses.",
    localOverview:
      "Noida and Greater Noida, in Gautam Buddh Nagar district, form one of the fastest-growing real-estate and technology corridors in the National Capital Region. The dominant disputes here are homebuyer claims against developers — delayed possession, refunds, and the contentious interplay between RERA, the IBC, and the Noida/Greater Noida Authorities over land dues — alongside IT/ITeS services contracts and e-commerce vendor disputes. These real-estate matters are filed before the UP Real Estate Regulatory Authority, with appeals to the UP Real Estate Appellate Tribunal at Lucknow. Commercial suits go to the Commercial Court at Gautam Buddh Nagar (Surajpur), insolvency to the NCLT Allahabad Bench, and writs and Section 11 applications to the Allahabad High Court. Judicium Arbitration represents allottees, developers, and tech companies across this jurisdiction.",
    localExpertise: [
      "UP RERA possession-delay and refund-with-interest claims for buyers in Noida, Greater Noida and the Yamuna Expressway projects",
      "Defending and prosecuting developer disputes involving Noida and Greater Noida Authority land-dues and the RERA–IBC overlap",
      "IT and ITeS services-agreement and SLA arbitration for technology companies in Sectors 62, 125 and 135",
      "E-commerce, logistics and warehousing vendor-contract disputes along the Noida–Greater Noida expressway",
      "Section 9 interim relief and Section 11 arbitrator appointments routed through the Allahabad High Court",
      "Data-protection and confidentiality disputes under the DPDP Act 2023 for Noida-based digital businesses",
    ],
    faqs: [
      {
        question: "Where is Judicium Arbitration's Noida office?",
        answer:
          "Judicium Arbitration's Noida office is in Sector 18, Noida 201301, Uttar Pradesh — Noida's primary commercial district. Office hours are Monday–Friday, 9:00 AM – 6:00 PM. Phone: +91-9899686394.",
      },
      {
        question: "Can the Noida office help with UP RERA disputes?",
        answer:
          "Yes. The Noida office regularly handles UP RERA matters — possession delays, refund claims with interest, structural defect disputes — before the UP Real Estate Regulatory Authority and the UP Real Estate Appellate Tribunal at Lucknow.",
      },
      {
        question: "Which courts have jurisdiction over Noida commercial disputes?",
        answer:
          "Noida (Gautam Buddh Nagar district) commercial disputes are heard at the Commercial Court Gautam Buddh Nagar (Surajpur), the District Court, the NCLT Allahabad Bench, and ultimately the Allahabad High Court for writs and arbitrator-appointment applications.",
      },
      {
        question: "Can I file a RERA complaint online in Noida?",
        answer:
          "Yes. Complaints against Noida and Greater Noida developers are filed online through the UP RERA portal (up-rera.in), with the registered project details, builder-buyer agreement, payment proof, and the relief sought. UP RERA can order possession, refund with interest, or compensation, and its orders are appealable to the UP Real Estate Appellate Tribunal at Lucknow. Judicium Arbitration drafts and files these complaints and represents clients at hearings.",
      },
      {
        question: "What happens to my Noida flat if the builder goes into IBC insolvency?",
        answer:
          "Homebuyers are treated as financial creditors under the IBC, so if a Noida developer is admitted into the corporate insolvency resolution process before the NCLT Allahabad Bench, allottees must file their claims with the resolution professional and can participate through the homebuyers' authorised representative on the Committee of Creditors. RERA proceedings are generally stayed by the moratorium. We advise buyers on protecting their claims across both the RERA and IBC tracks.",
      },
    ],
  },
  {
    slug: "chandigarh",
    city: "Chandigarh",
    region: "Chandigarh",
    regionCode: "IN-CH",
    postalCode: "160017",
    streetAddress: "Sector 17, Chandigarh",
    latitude: 30.7333,
    longitude: 76.7794,
    telephone: "+91-9899686394",
    nearbyCourts: [
      "Punjab and Haryana High Court",
      "District Court Chandigarh",
      "NCLT — Chandigarh Bench",
      "Debt Recovery Tribunal (DRT) — Chandigarh",
    ],
    intro:
      "The Chandigarh office is the firm's regional anchor for Punjab, Haryana, Himachal Pradesh, and J&K disputes. Located in Sector 17 — the city's commercial core — it sits within walking distance of the Punjab and Haryana High Court and the NCLT Chandigarh Bench, making it ideal for High Court arbitration matters, NCLT insolvency proceedings, and tri-state commercial disputes.",
    localOverview:
      "As the shared capital of Punjab and Haryana and the seat of the Punjab and Haryana High Court, Chandigarh is the legal nerve centre for the entire north-western region. The High Court hears writs, Section 11 arbitrator-appointment petitions, Section 34 and Section 37 arbitration matters, and appeals from across both states and the Union Territory. The NCLT Chandigarh Bench exercises jurisdiction over Punjab, Haryana, Himachal Pradesh, the erstwhile J&K region, and Chandigarh UT for IBC and Companies Act matters, while a Debt Recovery Tribunal serves banks and financial creditors. Disputes here span agro-processing, pharmaceuticals (the Baddi belt in HP), bicycle and auto-parts manufacturing in Ludhiana, real estate, and government contracts. Judicium Arbitration leverages its Sector 17 base to run High Court arbitration litigation, NCLT insolvency, and cross-state commercial references.",
    localExpertise: [
      "Section 11 arbitrator-appointment and Section 34/37 arbitration litigation before the Punjab and Haryana High Court",
      "IBC corporate insolvency (CIRP), liquidation and creditor representation before the NCLT Chandigarh Bench",
      "Debt-recovery and SARFAESI defence work before the Debt Recovery Tribunal, Chandigarh",
      "Cross-state commercial and contract arbitration spanning Punjab, Haryana and Himachal Pradesh",
      "Manufacturing and vendor disputes for the Ludhiana auto-parts and Baddi pharmaceutical clusters",
      "Government, PSU and PUDA/HSVP land and works-contract arbitration in the tri-state region",
    ],
    faqs: [
      {
        question: "Where is Judicium Arbitration's Chandigarh office?",
        answer:
          "Judicium Arbitration's Chandigarh office is at Sector 17, Chandigarh 160017 — at the heart of the city's commercial district and within walking distance of the Punjab and Haryana High Court. Office hours: Monday–Friday, 9:00 AM – 6:00 PM. Phone: +91-9899686394.",
      },
      {
        question: "Does the Chandigarh office cover Punjab and Haryana matters?",
        answer:
          "Yes. The Chandigarh office is the firm's regional hub for Punjab, Haryana, Himachal Pradesh, and Jammu & Kashmir disputes, with regular appearances before the Punjab and Haryana High Court at Chandigarh and the NCLT Chandigarh Bench.",
      },
      {
        question: "Can the Chandigarh office handle NCLT insolvency cases?",
        answer:
          "Yes. The NCLT Chandigarh Bench has territorial jurisdiction over Punjab, Haryana, Himachal Pradesh, J&K, and the Chandigarh UT — the Chandigarh office handles IBC corporate insolvency resolution process (CIRP), liquidation, and creditor representation before that Bench.",
      },
      {
        question: "How do I get an arbitrator appointed under Section 11 in Punjab or Haryana?",
        answer:
          "When the other side refuses to cooperate in appointing an arbitrator, you file a Section 11 application before the Punjab and Haryana High Court at Chandigarh, attaching the arbitration agreement and the notice invoking arbitration. The Chief Justice's designate then appoints an arbitrator. Judicium Arbitration's Chandigarh team drafts the invocation notice and the Section 11 petition to keep stalled references moving.",
      },
      {
        question: "Does the Chandigarh office handle Himachal Pradesh disputes?",
        answer:
          "Yes. Because the NCLT Chandigarh Bench covers Himachal Pradesh and many HP commercial and arbitration matters connect to the Chandigarh forums, the office regularly acts in disputes from the Baddi-Barotiwala-Nalagarh pharmaceutical belt and other HP businesses, coordinating with the Himachal Pradesh High Court at Shimla where required.",
      },
    ],
  },
  {
    slug: "jaipur",
    city: "Jaipur",
    region: "Rajasthan",
    regionCode: "IN-RJ",
    postalCode: "302001",
    streetAddress: "C-Scheme, Jaipur",
    latitude: 26.9124,
    longitude: 75.7873,
    telephone: "+91-9899686394",
    nearbyCourts: [
      "Rajasthan High Court — Jaipur Bench",
      "District Court Jaipur",
      "Commercial Court Jaipur",
      "NCLT — Jaipur Bench",
    ],
    intro:
      "The Jaipur office anchors the firm's Rajasthan practice. From C-Scheme — Jaipur's commercial and government district — the team handles arbitration and commercial litigation across Rajasthan, including mining and minerals disputes, hospitality industry contracts, and real-estate matters in Jaipur, Udaipur, Jodhpur, and Kota.",
    localOverview:
      "Rajasthan's economy leans heavily on mining and minerals (the state is India's leading producer of marble, sandstone, limestone, zinc and other minerals), tourism and hospitality, textiles, solar power, and a fast-growing real-estate market. This generates a distinctive mix of disputes: mining-lease and royalty disagreements under the Rajasthan Minor Mineral Concession Rules, hotel and tourism contracts, EPC and power-purchase disputes in the solar sector, and homebuyer claims under the Rajasthan Real Estate Regulatory Authority (RERA Rajasthan, headquartered in Jaipur). The Rajasthan High Court sits at Jodhpur as the principal seat with a Bench at Jaipur, and the NCLT Jaipur Bench covers insolvency for the whole state. Judicium Arbitration acts from C-Scheme in arbitration, RERA and commercial matters across Jaipur, Udaipur, Jodhpur and Kota.",
    localExpertise: [
      "Mining-lease, royalty and minor-mineral disputes under the Rajasthan Minor Mineral Concession Rules for marble, sandstone and limestone operators",
      "Hospitality and tourism contract arbitration for hotels, resorts and heritage properties across Rajasthan",
      "Solar EPC and power-purchase-agreement disputes in the Jodhpur–Jaisalmer renewable-energy belt",
      "RERA Rajasthan complaints and appeals for homebuyers and developers in Jaipur, Udaipur, Jodhpur and Kota",
      "IBC insolvency and creditor representation before the NCLT Jaipur Bench",
      "Arbitration and writ matters before the Rajasthan High Court Jaipur Bench, including Section 11 appointments",
    ],
    faqs: [
      {
        question: "Where is Judicium Arbitration's Jaipur office?",
        answer:
          "Judicium Arbitration's Jaipur office is at C-Scheme, Jaipur 302001, Rajasthan — Jaipur's commercial and government district. Office hours: Monday–Friday, 9:00 AM – 6:00 PM. Phone: +91-9899686394.",
      },
      {
        question: "What sectors does the Jaipur office focus on?",
        answer:
          "The Jaipur office handles Rajasthan-specific sectors heavily — mining and minerals disputes, hospitality and tourism industry contracts, real-estate (Jaipur, Udaipur, Jodhpur, Kota), and traditional commercial arbitration for Rajasthan-headquartered businesses.",
      },
      {
        question: "Which courts does the Jaipur team appear before?",
        answer:
          "The Jaipur team regularly appears before the Rajasthan High Court (Jaipur Bench), the Commercial Court Jaipur, the District Court, and the NCLT Jaipur Bench — the latter has territorial jurisdiction over all of Rajasthan.",
      },
      {
        question: "How much does an arbitration lawyer in Jaipur cost?",
        answer:
          "Fees depend on the complexity and value of the dispute and the stage of work — drafting and notices, full arbitration hearings, or High Court litigation each carry different costs, charged on an hourly, stage-wise, or matter-based basis. In institutional references there are also tribunal and administration fees set by a schedule. Judicium Arbitration's Jaipur office gives a clear fee estimate at the first consultation; call +91-9899686394 to discuss your matter.",
      },
      {
        question: "Where do I challenge a mining contract or royalty dispute in Rajasthan?",
        answer:
          "Mining and royalty disputes in Rajasthan turn on the lease terms and the Rajasthan Minor Mineral Concession Rules; if the contract contains an arbitration clause, the dispute goes to arbitration, otherwise to the appropriate civil or commercial court, with writs and Section 11 applications before the Rajasthan High Court. Our Jaipur team advises marble, sandstone and limestone operators on the right forum and runs the proceedings.",
      },
    ],
  },
  {
    slug: "panipat",
    city: "Panipat",
    region: "Haryana",
    regionCode: "IN-HR",
    postalCode: "132103",
    streetAddress: "GT Road, Panipat",
    latitude: 29.3909,
    longitude: 76.9635,
    telephone: "+91-9899686394",
    nearbyCourts: [
      "District Court Panipat",
      "Punjab and Haryana High Court (via Chandigarh)",
      "Commercial Court Panipat",
    ],
    intro:
      "Panipat is India's textile and handloom capital, home to thousands of MSMEs in textiles, oil refining, and petrochemicals. The Panipat office serves this industrial base with commercial dispute resolution, contract enforcement, MSME-specific arbitration (under the MSMED Act 2006), and labour matters.",
    localOverview:
      "Panipat's industrial economy is dominated by micro, small and medium enterprises — handloom and home-textile exporters, yarn and dyeing units, and the petrochemical ecosystem around the Indian Oil Panipat Refinery. The single most important legal tool for these businesses is the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006: under Section 18, a registered MSME that has not been paid within the statutory period can refer a delayed-payment dispute to the Haryana MSE Facilitation Council, which first attempts conciliation and then conducts arbitration, with compound interest at three times the bank rate. Other disputes run through the Commercial Court and District Court at Panipat, with writs and Section 11 matters before the Punjab and Haryana High Court at Chandigarh. Judicium Arbitration helps Panipat manufacturers and exporters recover dues, enforce supply contracts, and defend claims.",
    localExpertise: [
      "MSMED Act Section 18 delayed-payment claims before the Haryana MSE Facilitation Council, with statutory compound interest",
      "Conciliation and arbitration of buyer-supplier disputes for handloom and home-textile exporters",
      "Supply, job-work and dyeing-contract enforcement for Panipat yarn and textile units",
      "Vendor and works-contract disputes connected to the Indian Oil Panipat Refinery and petrochemical ancillaries",
      "Commercial recovery suits and Order XXXVII summary suits before the Commercial Court Panipat",
      "Section 11 arbitrator appointments and award enforcement routed through the Punjab and Haryana High Court",
    ],
    faqs: [
      {
        question: "Where is Judicium Arbitration's Panipat office?",
        answer:
          "Judicium Arbitration's Panipat office is on GT Road, Panipat 132103, Haryana — the city's main commercial corridor and near the District Court Panipat. Office hours: Monday–Friday, 9:00 AM – 6:00 PM. Phone: +91-9899686394.",
      },
      {
        question: "Does the Panipat office help MSMEs?",
        answer:
          "Yes. The Panipat office has deep expertise in the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — including delayed-payment proceedings before the MSME Facilitation Council, statutory interest claims, and conciliation-arbitration pathways under Section 18 of the MSMED Act.",
      },
      {
        question: "What industries does the Panipat office serve?",
        answer:
          "The Panipat office serves the city's textile and handloom industry, oil refining and petrochemicals sector (Indian Oil Panipat Refinery and ancillaries), commodity trading businesses, and the broader MSME base across north Haryana.",
      },
      {
        question: "How does an MSME recover delayed payments in Panipat?",
        answer:
          "A registered MSME (with Udyam registration) that has supplied goods or services and not been paid within the agreed period — capped at 45 days under the MSMED Act — can file a reference under Section 18 with the Haryana MSE Facilitation Council. The Council first attempts conciliation and, if that fails, arbitrates the claim, awarding the principal plus compound interest at three times the RBI bank rate. Judicium Arbitration prepares and argues these references for Panipat suppliers.",
      },
      {
        question: "What interest can a Panipat supplier claim for late payment?",
        answer:
          "Under Section 16 of the MSMED Act, a defaulting buyer is liable to pay compound interest, compounded monthly, at three times the bank rate notified by the Reserve Bank of India, calculated from the appointed day of payment. This is substantially higher than ordinary contractual interest, which makes the MSMED route powerful for Panipat's textile and manufacturing suppliers; we calculate and pursue the full statutory interest in each claim.",
      },
    ],
  },
  {
    slug: "prayagraj",
    city: "Prayagraj",
    region: "Uttar Pradesh",
    regionCode: "IN-UP",
    postalCode: "211001",
    streetAddress: "Civil Lines, Prayagraj",
    latitude: 25.4358,
    longitude: 81.8463,
    telephone: "+91-9899686394",
    nearbyCourts: [
      "Allahabad High Court (Principal Seat)",
      "District Court Prayagraj",
      "Commercial Court Prayagraj",
    ],
    intro:
      "Prayagraj (formerly Allahabad) is home to the Allahabad High Court — India's largest High Court by sanctioned strength, with jurisdiction over all of Uttar Pradesh. The Prayagraj office is the firm's High Court litigation anchor for UP commercial arbitration matters, Section 11 arbitrator-appointment applications, and writ petitions on arbitration awards.",
    localOverview:
      "Prayagraj is, above all, a court town: the Allahabad High Court's principal seat sits here and exercises jurisdiction over the whole of Uttar Pradesh except the twelve Awadh districts handled by its Lucknow Bench. For arbitration practitioners this matters enormously, because Section 11 arbitrator-appointment petitions, Section 34 award-challenge applications, Section 37 appeals, and writ petitions touching arbitration for the eastern and western UP regions are decided here. Beyond litigation, the local economy includes education and legal services, agriculture and agro-processing in the surrounding districts, and small-scale manufacturing. Judicium Arbitration's Civil Lines office acts as the firm's High Court counsel base — drafting and arguing arbitration-related petitions, coordinating enforcement of awards across UP, and supporting the firm's Noida and Lucknow matters that escalate to the High Court.",
    localExpertise: [
      "Section 11 arbitrator-appointment petitions before the Allahabad High Court for UP-seated contracts",
      "Section 34 set-aside and Section 37 appeal litigation against arbitral awards at the principal seat",
      "Writ petitions and constitutional challenges connected to arbitration and commercial disputes across UP",
      "Enforcement and execution of domestic arbitral awards for clients throughout Uttar Pradesh",
      "High Court support for escalated Noida (Gautam Buddh Nagar) commercial and RERA-linked matters",
      "Agriculture, agro-processing and small-manufacturing contract disputes in the eastern UP region",
    ],
    faqs: [
      {
        question: "Where is Judicium Arbitration's Prayagraj office?",
        answer:
          "Judicium Arbitration's Prayagraj office is at Civil Lines, Prayagraj 211001, Uttar Pradesh — close to the Allahabad High Court's Principal Seat. Office hours: Monday–Friday, 9:00 AM – 6:00 PM. Phone: +91-9899686394.",
      },
      {
        question: "Does the Prayagraj office appear at the Allahabad High Court?",
        answer:
          "Yes. The Prayagraj office is the firm's dedicated Allahabad High Court litigation anchor — handling Section 11 arbitrator-appointment petitions, Section 34 award-challenge applications, Section 37 appeals, and writ petitions involving arbitration disputes from across Uttar Pradesh.",
      },
      {
        question: "Can the Prayagraj office help with UP-wide commercial disputes?",
        answer:
          "Yes. The Allahabad High Court has jurisdiction over all of Uttar Pradesh (with a Bench at Lucknow for the Awadh region). The Prayagraj office handles UP-wide commercial arbitration, contract disputes, and enforcement proceedings for clients across the state.",
      },
      {
        question: "How long does a Section 34 challenge to an arbitral award take at the Allahabad High Court?",
        answer:
          "A Section 34 application to set aside an award must be filed within three months of receiving the award (extendable by a further 30 days for sufficient cause), and the hearing timeline then depends on the court's docket and the complexity of the grounds. Courts decide these on limited statutory grounds rather than re-trying the merits. Judicium Arbitration's Prayagraj team files within limitation and presses for early disposal.",
      },
      {
        question: "Should I file my UP arbitration matter in Prayagraj or Lucknow?",
        answer:
          "It depends on the seat of arbitration and the district from which the cause of action arises: matters from the twelve Awadh districts of central UP go to the Allahabad High Court Lucknow Bench, while the rest of Uttar Pradesh is handled at the principal seat in Prayagraj. We assess the correct forum for your contract before filing so the petition is not returned for want of jurisdiction.",
      },
    ],
  },
  {
    slug: "lucknow",
    city: "Lucknow",
    region: "Uttar Pradesh",
    regionCode: "IN-UP",
    postalCode: "226001",
    streetAddress: "Hazratganj, Lucknow",
    latitude: 26.8467,
    longitude: 80.9462,
    telephone: "+91-9899686394",
    nearbyCourts: [
      "Allahabad High Court — Lucknow Bench",
      "District Court Lucknow",
      "Commercial Court Lucknow",
      "UP Real Estate Appellate Tribunal — Lucknow",
    ],
    intro:
      "The Lucknow office anchors the firm's Awadh-region practice and represents clients before the Allahabad High Court Lucknow Bench. It also handles UP Real Estate Appellate Tribunal matters (the appellate forum above UP RERA), state-government contract disputes, and commercial arbitration for businesses across central and eastern UP.",
    localOverview:
      "As the capital of Uttar Pradesh, Lucknow combines a heavy concentration of state-government departments and PSUs with a growing private economy in real estate, IT, and services. Two features define its legal landscape. First, the Allahabad High Court Lucknow Bench exercises jurisdiction over the twelve Awadh districts, hearing writs, Section 11 applications, and arbitration appeals for central UP. Second, Lucknow hosts the UP Real Estate Appellate Tribunal (UP REAT), the second-tier forum that hears appeals against orders of the UP Real Estate Regulatory Authority for the entire state — making the city the appellate destination for every UP homebuyer-developer dispute. Add a steady flow of state-government works and supply-contract arbitrations, and Judicium Arbitration's Hazratganj office is positioned for High Court litigation, REAT appeals, and public-contract disputes.",
    localExpertise: [
      "UP REAT appeals (the appellate forum above UP RERA) for homebuyers and developers from across Uttar Pradesh",
      "Writs and Section 11 arbitrator-appointment petitions before the Allahabad High Court Lucknow Bench for the Awadh region",
      "State-government and PSU works- and supply-contract arbitration for departments headquartered in Lucknow",
      "Section 34 and Section 37 arbitration litigation at the Lucknow Bench for central-UP awards",
      "Commercial and real-estate disputes for businesses across Lucknow and the twelve Awadh districts",
      "Award enforcement and execution proceedings before the Lucknow commercial and district courts",
    ],
    faqs: [
      {
        question: "Where is Judicium Arbitration's Lucknow office?",
        answer:
          "Judicium Arbitration's Lucknow office is at Hazratganj, Lucknow 226001, Uttar Pradesh — Lucknow's central commercial district and close to the Allahabad High Court Lucknow Bench. Office hours: Monday–Friday, 9:00 AM – 6:00 PM. Phone: +91-9899686394.",
      },
      {
        question: "Does the Lucknow office cover the Awadh region of UP?",
        answer:
          "Yes. The Lucknow office is the firm's anchor for the Awadh region (12 districts of central UP). The Allahabad High Court Lucknow Bench has territorial jurisdiction over Awadh, and the Lucknow team handles arbitration, commercial disputes, and writ petitions in that jurisdiction.",
      },
      {
        question: "Can the Lucknow office handle UP RERA appellate matters?",
        answer:
          "Yes. The UP Real Estate Appellate Tribunal (UP REAT) — the second-tier appellate forum above UP RERA — sits in Lucknow. The Lucknow office regularly represents homebuyers and developers in REAT appeals on possession delays, refund interest, and structural defect claims.",
      },
      {
        question: "How do I appeal a UP RERA order in Lucknow?",
        answer:
          "An appeal against a UP RERA order is filed before the UP Real Estate Appellate Tribunal (UP REAT) at Lucknow within 60 days of the order, and a developer-appellant must first deposit the amount the Authority directed before the appeal is entertained. The Tribunal can confirm, modify, or set aside the RERA order. Judicium Arbitration's Lucknow office drafts the appeal and represents both buyers and developers before UP REAT.",
      },
      {
        question: "Does the Lucknow office handle UP government contract disputes?",
        answer:
          "Yes. With most state departments and PSUs headquartered in the capital, the Lucknow office regularly handles works-contract and supply-contract arbitration against and on behalf of UP government bodies, including invocation of arbitration clauses, the arbitration itself, and enforcement of the resulting award through the Lucknow courts.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityOffice | undefined {
  return cityOffices.find((o) => o.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cityOffices.map((o) => o.slug);
}

export function buildCityLocalBusinessSchema(office: CityOffice) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LegalService", "AttorneyService"],
    "@id": `${BASE_URL}/#localbusiness-${office.slug}`,
    name: `Judicium Arbitration — ${office.city}`,
    legalName: "Judicium Arbitration",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.jpeg`,
    image: `${BASE_URL}/logo.jpeg`,
    description: `Arbitration, ADR and commercial dispute resolution lawyers serving ${office.city} and surrounding areas. Expert legal services under the Arbitration and Conciliation Act, 1996.`,
    telephone: office.telephone,
    email: "Judiciumarbitration@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: office.streetAddress,
      addressLocality: office.city,
      addressRegion: office.region,
      postalCode: office.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: office.latitude,
      longitude: office.longitude,
    },
    areaServed: {
      "@type": "City",
      name: office.city,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    parentOrganization: {
      "@type": "LegalService",
      name: "Judicium Arbitration",
      url: BASE_URL,
    },
    ...(office.isHeadquarters
      ? { branchOf: undefined }
      : {
          branchOf: {
            "@type": "LegalService",
            name: "Judicium Arbitration",
            url: BASE_URL,
          },
        }),
  };
}

export function buildAllCitySchemas() {
  return cityOffices.map(buildCityLocalBusinessSchema);
}
