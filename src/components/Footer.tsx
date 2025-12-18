import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Contact", href: "/contact" },
  ];

  const practiceAreas = [
    "Arbitration & ADR",
    "Corporate Law",
    "Banking & Finance",
    "Intellectual Property",
    "Real Estate",
    "Labour & Employment",
  ];

  const locations = [
    { city: "New Delhi", address: "Headquarters" },
    { city: "Gurgaon", address: "Corporate Hub" },
    { city: "Noida", address: "Commercial Center" },
    { city: "Chandigarh", address: "Regional Office" },
  ];

  return (
    <footer className="bg-bg-alt-dark border-t border-gold-primary/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="/logo.jpeg"
                  alt="Judicium Arbitration"
                  width={48}
                  height={48}
                  className="object-contain rounded-full border border-gold-primary/30"
                />
              </div>
              <div>
                <div className="text-gold-primary font-bold text-base sm:text-lg tracking-tight">JUDICIUM</div>
                <div className="text-gold-secondary text-[10px] sm:text-xs tracking-widest">ARBITRATION</div>
              </div>
            </div>
            <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Leading Arbitration & Alternative Dispute Resolution services in North India.
              Committed to excellence and professional dispute resolution.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold-primary/10 hover:bg-gold-primary/20 flex items-center justify-center text-gold-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold-primary/10 hover:bg-gold-primary/20 flex items-center justify-center text-gold-primary transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-primary font-semibold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-gold-primary transition-colors duration-300 text-xs sm:text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-gold-primary transition-all duration-300 group-hover:w-3 sm:group-hover:w-4"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-gold-primary font-semibold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-wider">Practice Areas</h3>
            <ul className="space-y-2 sm:space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <Link
                    href="/practice-areas"
                    className="text-foreground/60 hover:text-gold-primary transition-colors duration-300 text-xs sm:text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-gold-primary transition-all duration-300 group-hover:w-3 sm:group-hover:w-4"></span>
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold-primary font-semibold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              {locations.map((location) => (
                <div key={location.city} className="group">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gold-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <div className="text-gold-secondary text-xs sm:text-sm font-semibold">{location.city}</div>
                      <div className="text-foreground/60 text-[10px] sm:text-xs">{location.address}</div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-3 sm:pt-4 border-t border-gold-primary/10">
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gold-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:Judiciumarbitration@gmail.com" className="text-foreground/60 hover:text-gold-primary transition-colors text-xs sm:text-sm break-all">
                    Judiciumarbitration@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gold-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-foreground/60 text-xs sm:text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-primary/10 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-5 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <p className="text-foreground/50 text-center md:text-left">
              &copy; {currentYear} Judicium Arbitration. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy-policy" className="text-foreground/50 hover:text-gold-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-foreground/50 hover:text-gold-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-foreground/50 hover:text-gold-primary transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
