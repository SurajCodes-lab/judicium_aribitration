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
  city: string;
  region: string;
  postalCode: string;
  streetAddress: string;
  latitude: number;
  longitude: number;
  telephone: string;
  isHeadquarters?: boolean;
}

export const cityOffices: CityOffice[] = [
  {
    city: "New Delhi",
    region: "Delhi",
    postalCode: "110001",
    streetAddress: "Connaught Place, New Delhi",
    latitude: 28.6328,
    longitude: 77.2197,
    telephone: "+91-9899686394",
    isHeadquarters: true,
  },
  {
    city: "Gurgaon",
    region: "Haryana",
    postalCode: "122002",
    streetAddress: "DLF Cyber City, Gurgaon",
    latitude: 28.4595,
    longitude: 77.0266,
    telephone: "+91-9899686394",
  },
  {
    city: "Noida",
    region: "Uttar Pradesh",
    postalCode: "201301",
    streetAddress: "Sector 18, Noida",
    latitude: 28.5355,
    longitude: 77.391,
    telephone: "+91-9899686394",
  },
  {
    city: "Chandigarh",
    region: "Chandigarh",
    postalCode: "160017",
    streetAddress: "Sector 17, Chandigarh",
    latitude: 30.7333,
    longitude: 76.7794,
    telephone: "+91-9899686394",
  },
  {
    city: "Jaipur",
    region: "Rajasthan",
    postalCode: "302001",
    streetAddress: "C-Scheme, Jaipur",
    latitude: 26.9124,
    longitude: 75.7873,
    telephone: "+91-9899686394",
  },
  {
    city: "Panipat",
    region: "Haryana",
    postalCode: "132103",
    streetAddress: "GT Road, Panipat",
    latitude: 29.3909,
    longitude: 76.9635,
    telephone: "+91-9899686394",
  },
  {
    city: "Prayagraj",
    region: "Uttar Pradesh",
    postalCode: "211001",
    streetAddress: "Civil Lines, Prayagraj",
    latitude: 25.4358,
    longitude: 81.8463,
    telephone: "+91-9899686394",
  },
  {
    city: "Lucknow",
    region: "Uttar Pradesh",
    postalCode: "226001",
    streetAddress: "Hazratganj, Lucknow",
    latitude: 26.8467,
    longitude: 80.9462,
    telephone: "+91-9899686394",
  },
];

export function buildCityLocalBusinessSchema(office: CityOffice) {
  const cityId = office.city.toLowerCase().replace(/\s+/g, "-");
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LegalService", "AttorneyService"],
    "@id": `${BASE_URL}/#localbusiness-${cityId}`,
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
