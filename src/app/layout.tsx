import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Judicium Arbitration | Leading Arbitration Services in North India",
  description: "Premier arbitration and alternative dispute resolution services serving Delhi, Gurgaon, Noida, Ghaziabad, NCR, Chandigarh, Jaipur, and Panipat. Expert legal solutions in commercial disputes, banking, real estate, and more.",
  keywords: ["arbitration", "ADR", "Delhi", "Gurgaon", "Noida", "Ghaziabad", "NCR", "Chandigarh", "Jaipur", "Panipat", "legal services", "dispute resolution", "commercial arbitration"],
  openGraph: {
    title: "Judicium Arbitration",
    description: "Leading Arbitration Services in North India - Delhi, Gurgaon, Noida, Chandigarh, Jaipur",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
