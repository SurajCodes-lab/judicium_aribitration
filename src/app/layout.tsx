import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const playfair = Playfair_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://judicium-arbitration.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Judicium Arbitration | Leading Arbitration Services in North India",
    template: "%s | Judicium Arbitration",
  },
  description:
    "Premier arbitration and alternative dispute resolution services serving New Delhi, Gurgaon, Noida, Chandigarh, Jaipur, Panipat, Prayagraj, and Lucknow. Expert legal solutions in commercial disputes, banking, real estate, and more.",
  keywords: [
    "arbitration",
    "ADR",
    "alternative dispute resolution",
    "arbitration India",
    "arbitration lawyers Delhi",
    "commercial arbitration",
    "international arbitration",
    "dispute resolution",
    "legal services Delhi",
    "law firm North India",
    "Delhi",
    "Gurgaon",
    "Noida",
    "Chandigarh",
    "Jaipur",
    "Panipat",
    "Prayagraj",
    "Lucknow",
  ],
  authors: [{ name: "Judicium Arbitration" }],
  creator: "Judicium Arbitration",
  publisher: "Judicium Arbitration",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Judicium Arbitration",
    title: "Judicium Arbitration | Leading Arbitration Services in North India",
    description:
      "Premier arbitration and ADR services across Delhi, Gurgaon, Noida, Chandigarh, Jaipur, Panipat, Prayagraj, and Lucknow. 20+ years experience, 500+ cases resolved.",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Judicium Arbitration - Leading Arbitration Services in North India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Judicium Arbitration | Leading Arbitration Services in North India",
    description:
      "Premier arbitration and ADR services across North India. 20+ years experience, 500+ cases resolved.",
    images: ["/logo.jpeg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

// JSON-LD structured data for the organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Judicium Arbitration",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.jpeg`,
  image: `${BASE_URL}/logo.jpeg`,
  description:
    "Premier arbitration and alternative dispute resolution services in North India with 20+ years of experience across Delhi, Gurgaon, Noida, Chandigarh, Jaipur, Panipat, Prayagraj, and Lucknow.",
  telephone: "+91-9899686394",
  email: "Judiciumarbitration@gmail.com",
  foundingDate: "2004",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 8,
  },
  areaServed: [
    { "@type": "City", name: "New Delhi" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Chandigarh" },
    { "@type": "City", name: "Jaipur" },
    { "@type": "City", name: "Panipat" },
    { "@type": "City", name: "Prayagraj" },
    { "@type": "City", name: "Lucknow" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6139,
    longitude: 77.209,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Arbitration & Alternative Dispute Resolution",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Banking & Finance Law",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate & Commercial Law",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Real Estate & Urban Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Intellectual Property Rights",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Insolvency & Bankruptcy",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
