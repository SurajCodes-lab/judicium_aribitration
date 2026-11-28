/**
 * Per-city authorities with jurisdiction over each service line.
 *
 * Appendix A, Month 3: "Each page names the actual authority with jurisdiction
 * in that city: the GST Commissionerate, ward office, labour court, magistrate
 * court and Registrar of Companies."
 *
 * This file is the reason the service x city pages are not 48 thin duplicates.
 * Everything that differs between "GST notice reply in Noida" and "GST notice
 * reply in Jaipur" lives here: a UP business appeals to a different RoC, a
 * different NCLT bench and a different High Court than a Rajasthan one, and
 * saying so is the whole value of a city page.
 *
 * ACCURACY NOTE — read before editing.
 * Only authorities that could be stated with confidence are recorded. Specific
 * CGST Commissionerate names and ITAT bench allocations were deliberately left
 * out for most cities rather than guessed, because a wrong jurisdictional fact
 * on a public page is a professional risk, not an SEO one. Where a field is an
 * empty string the page simply omits that line. The firm should fill the gaps
 * on review — see 2.0/week2/W2-06-SERVICE-CITY-RATIONALE.md.
 */

export interface CityAuthorities {
  /** Must match a cityOffices slug. */
  citySlug: string;
  city: string;
  state: string;
  /** Supervising High Court. */
  highCourt: string;
  /** District / sessions court complex where civil and s.138 matters are filed. */
  districtCourt: string;
  /** NCLT bench with jurisdiction — insolvency and company petitions. */
  nclt: string;
  /** Registrar of Companies for incorporation and ROC filings. */
  roc: string;
  /** State or UT GST administration. */
  gstAuthority: string;
  /** State RERA authority. */
  rera: string;
  /** MSE Facilitation Council for Samadhaan references. */
  msmeCouncil: string;
  /** Labour court / conciliation authority. */
  labourForum: string;
  /** Municipal body issuing trade licences. */
  municipal: string;
  /** State pollution control board or committee. */
  pollutionBoard: string;
  /** One line on what the local economy actually generates in disputes. */
  economicNote: string;
}

export const cityAuthorities: CityAuthorities[] = [
  {
    citySlug: "delhi",
    city: "New Delhi",
    state: "Delhi",
    highCourt: "Delhi High Court",
    districtCourt:
      "District Courts at Tis Hazari, Karkardooma, Saket, Patiala House, Dwarka and Rohini",
    nclt: "NCLT, New Delhi Bench",
    roc: "Registrar of Companies, Delhi",
    gstAuthority: "Department of Trade and Taxes, GNCTD, and the CGST Delhi Zone",
    rera: "Delhi Real Estate Regulatory Authority",
    msmeCouncil: "Delhi MSE Facilitation Council",
    labourForum:
      "Labour Department, Government of NCT of Delhi, and the Labour Courts at Karkardooma and Rouse Avenue",
    municipal: "Municipal Corporation of Delhi and the New Delhi Municipal Council",
    pollutionBoard: "Delhi Pollution Control Committee",
    economicNote:
      "Delhi's dispute volume comes from trading houses, professional services and the head offices of businesses operating across North India, which is why so many matters are filed and heard here even where the underlying transaction happened elsewhere.",
  },
  {
    citySlug: "gurgaon",
    city: "Gurgaon",
    state: "Haryana",
    highCourt: "Punjab and Haryana High Court at Chandigarh",
    districtCourt: "District Courts, Gurugram",
    nclt: "NCLT, Chandigarh Bench",
    roc: "Registrar of Companies, Delhi",
    gstAuthority:
      "Excise and Taxation Department, Haryana, and the CGST Gurugram Zone",
    rera: "Haryana RERA, Gurugram",
    msmeCouncil: "Haryana MSE Facilitation Council",
    labourForum: "Labour Department, Haryana, and the Labour Court at Gurugram",
    municipal: "Municipal Corporation of Gurugram",
    pollutionBoard: "Haryana State Pollution Control Board",
    economicNote:
      "Gurgaon's disputes are shaped by corporate occupiers, IT and outsourcing businesses and a large commercial real estate market, so employment, lease and vendor-contract matters dominate.",
  },
  {
    citySlug: "noida",
    city: "Noida",
    state: "Uttar Pradesh",
    highCourt: "Allahabad High Court",
    districtCourt: "District Court, Gautam Buddh Nagar at Surajpur",
    nclt: "NCLT, Allahabad Bench",
    roc: "Registrar of Companies, Uttar Pradesh at Kanpur",
    gstAuthority:
      "State Tax Department, Uttar Pradesh, and the CGST Noida Zone",
    rera: "Uttar Pradesh RERA, with a bench at Greater Noida",
    msmeCouncil: "Uttar Pradesh MSE Facilitation Council",
    labourForum:
      "Labour Department, Uttar Pradesh, and the Labour Court at Gautam Buddh Nagar",
    municipal: "New Okhla Industrial Development Authority",
    pollutionBoard: "Uttar Pradesh Pollution Control Board",
    economicNote:
      "Noida combines manufacturing, IT and one of the country's most litigated residential real estate markets, so RERA, supplier payment and employment matters arise in volume.",
  },
  {
    citySlug: "chandigarh",
    city: "Chandigarh",
    state: "Chandigarh",
    highCourt: "Punjab and Haryana High Court",
    districtCourt: "District Courts, Chandigarh",
    nclt: "NCLT, Chandigarh Bench",
    roc: "Registrar of Companies, Chandigarh",
    gstAuthority:
      "Excise and Taxation Department, Chandigarh, and the CGST Chandigarh Zone",
    rera: "Chandigarh Real Estate Regulatory Authority",
    msmeCouncil: "Chandigarh MSE Facilitation Council",
    labourForum: "Labour Department, Chandigarh, and the Labour Court at Chandigarh",
    municipal: "Municipal Corporation, Chandigarh",
    pollutionBoard: "Chandigarh Pollution Control Committee",
    economicNote:
      "Chandigarh is the seat of both the High Court and the NCLT bench covering Punjab and Haryana, so matters from across the region are heard here even when the business sits elsewhere.",
  },
  {
    citySlug: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    highCourt: "Rajasthan High Court, Jaipur Bench",
    districtCourt: "District and Sessions Court, Jaipur",
    nclt: "NCLT, Jaipur Bench",
    roc: "Registrar of Companies, Rajasthan at Jaipur",
    gstAuthority:
      "Commercial Taxes Department, Rajasthan, and the CGST Jaipur Zone",
    rera: "Rajasthan RERA at Jaipur",
    msmeCouncil: "Rajasthan MSE Facilitation Council",
    labourForum: "Labour Department, Rajasthan, and the Labour Court at Jaipur",
    municipal: "Jaipur Municipal Corporation",
    pollutionBoard: "Rajasthan State Pollution Control Board",
    economicNote:
      "Jaipur's dispute profile runs through handicraft and textile exports, tourism and hospitality, and a growing infrastructure and real estate sector, with its own NCLT and High Court bench in the city.",
  },
  {
    citySlug: "panipat",
    city: "Panipat",
    state: "Haryana",
    highCourt: "Punjab and Haryana High Court at Chandigarh",
    districtCourt: "District and Sessions Court, Panipat",
    nclt: "NCLT, Chandigarh Bench",
    roc: "Registrar of Companies, Delhi",
    gstAuthority: "Excise and Taxation Department, Haryana",
    rera: "Haryana RERA, Panchkula",
    msmeCouncil: "Haryana MSE Facilitation Council",
    labourForum: "Labour Department, Haryana, and the Labour Court at Panipat",
    municipal: "Municipal Corporation, Panipat",
    pollutionBoard: "Haryana State Pollution Control Board",
    economicNote:
      "Panipat is a textile and handloom manufacturing centre built on small and medium enterprises, which makes delayed payment, supplier recovery and MSME Samadhaan references the characteristic dispute here.",
  },
];

export const getCityAuthorities = (
  citySlug: string
): CityAuthorities | undefined =>
  cityAuthorities.find((c) => c.citySlug === citySlug);

export const getAllAuthorityCitySlugs = (): string[] =>
  cityAuthorities.map((c) => c.citySlug);

/**
 * Which authorities a given service line actually engages in a city.
 *
 * Only the relevant ones are listed per service — a cheque bounce page has no
 * business naming the pollution board, and padding every page with every
 * authority is exactly what makes a city layer read as templated.
 */
export const authoritiesForService = (
  serviceSlug: string,
  a: CityAuthorities
): { label: string; value: string }[] => {
  const pick = (
    pairs: [string, string][]
  ): { label: string; value: string }[] =>
    pairs
      .filter(([, v]) => Boolean(v))
      .map(([label, value]) => ({ label, value }));

  switch (serviceSlug) {
    case "gst-notice-reply":
      return pick([
        ["GST administration", a.gstAuthority],
        ["Appeals and writs", a.highCourt],
      ]);
    case "income-tax-notice-reply":
      return pick([
        ["Writ jurisdiction", a.highCourt],
        ["Registrar of Companies", a.roc],
      ]);
    case "cheque-bounce-section-138":
      return pick([
        ["Magistrate courts", a.districtCourt],
        ["Appeals and revisions", a.highCourt],
      ]);
    case "money-recovery-msme-samadhaan":
      return pick([
        ["Facilitation Council", a.msmeCouncil],
        ["Civil and commercial courts", a.districtCourt],
        ["Insolvency", a.nclt],
      ]);
    case "legal-notice-drafting-reply":
      return pick([
        ["Civil and commercial courts", a.districtCourt],
        ["Supervising High Court", a.highCourt],
      ]);
    case "labour-court-employment-disputes":
      return pick([
        ["Conciliation and adjudication", a.labourForum],
        ["Writ jurisdiction", a.highCourt],
      ]);
    case "company-registration-roc-compliance":
      return pick([
        ["Registrar of Companies", a.roc],
        ["Company petitions and insolvency", a.nclt],
      ]);
    case "trade-licence-business-registration":
      return pick([
        ["Trade licensing", a.municipal],
        ["Pollution consent", a.pollutionBoard],
        ["Real estate regulator", a.rera],
      ]);
    default:
      return pick([
        ["Supervising High Court", a.highCourt],
        ["District courts", a.districtCourt],
      ]);
  }
};
