import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPracticeAreaBySlug, getAllPracticeAreaSlugs } from "@/data/practiceAreas";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { LawIcons } from "@/components/Icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPracticeAreaSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const practiceArea = getPracticeAreaBySlug(slug);

  if (!practiceArea) {
    return {
      title: "Practice Area Not Found | Judicium Arbitration",
    };
  }

  return {
    title: `${practiceArea.title} | Judicium Arbitration`,
    description: practiceArea.metaDescription,
    keywords: practiceArea.keywords.join(", "),
    openGraph: {
      title: `${practiceArea.title} | Judicium Arbitration`,
      description: practiceArea.metaDescription,
      type: "website",
      url: `https://judicium-arbitration.com/practice-areas/${slug}`,
    },
    alternates: {
      canonical: `https://judicium-arbitration.com/practice-areas/${slug}`,
    },
  };
}

export default async function PracticeAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const practiceArea = getPracticeAreaBySlug(slug);

  if (!practiceArea) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20 sm:pt-22 md:pt-24">
      {/* Hero Section */}
      <section className="relative bg-[#0D1117] py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Premium gradient overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(240,194,70,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(229,179,42,0.10),transparent_50%)]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #F0C246 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          ></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute left-[5%] top-[20%] opacity-[0.12]">
          <LawIcons.Gavel className="w-20 h-20 text-gold-primary" />
        </div>
        <div className="absolute right-[8%] bottom-[25%] opacity-[0.10]">
          <LawIcons.Document className="w-16 h-16 text-gold-primary" />
        </div>

        {/* Corner frames */}
        <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-gold-primary/30" />
        <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-gold-primary/30" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-gold-primary/30" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-gold-primary/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 sm:mb-8 text-sm">
            <ol className="flex items-center gap-2 text-foreground/60">
              <li>
                <Link href="/" className="hover:text-gold-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gold-primary/50">/</li>
              <li>
                <Link href="/practice-areas" className="hover:text-gold-primary transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li className="text-gold-primary/50">/</li>
              <li className="text-gold-primary font-medium">{practiceArea.shortTitle}</li>
            </ol>
          </nav>

          {/* Title */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-gold-primary/30">
                <span className="text-3xl sm:text-4xl">{practiceArea.icon}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold-primary">
                {practiceArea.title}
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed">
              {practiceArea.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary mb-6">
            Overview
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            {practiceArea.content.overview}
          </p>
        </div>
      </Section>

      {/* Services Section */}
      <Section variant="dark">
        <div className="absolute right-[5%] top-[15%] opacity-[0.08]">
          <LawIcons.Shield className="w-24 h-24 text-gold-primary" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-6">
              <LawIcons.Document className="w-4 h-4 text-gold-primary" />
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              What We <span className="text-gold-primary">Offer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {practiceArea.content.services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-[#161B22] p-5 sm:p-6 rounded-xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-lg flex items-center justify-center mt-0.5 shadow-lg shadow-gold-primary/20">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Expertise Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Our Expertise
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
              Areas of Specialization
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {practiceArea.content.expertise.map((item, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 rounded-xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gold-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{practiceArea.icon}</span>
                  </div>
                  <p className="text-sm sm:text-base text-foreground/80 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section variant="dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary mb-4">
              Why Judicium for {practiceArea.shortTitle}?
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
              Our strategic positioning and deep expertise make us the preferred choice for legal services
              in North India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {practiceArea.content.whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 sm:p-6 bg-linear-to-br from-bg-alt-dark to-bg-dark rounded-xl border border-gold-primary/10 hover:border-gold-primary/30 transition-all duration-300"
              >
                <div className="shrink-0">
                  <div className="w-8 h-8 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Related Acts Section (if available) */}
      {practiceArea.content.relatedActs && practiceArea.content.relatedActs.length > 0 && (
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
                <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                  Legal Framework
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
                Relevant Laws & Regulations
              </h2>
            </div>

            <div className="bg-linear-to-br from-gold-primary/5 to-transparent p-6 sm:p-8 md:p-10 rounded-2xl border border-gold-primary/20">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {practiceArea.content.relatedActs.map((act, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gold-primary shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base text-foreground/80">{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      )}

      {/* FAQs Section (if available) */}
      {practiceArea.content.faqs && practiceArea.content.faqs.length > 0 && (
        <Section variant="dark">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
                <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                  FAQs
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {practiceArea.content.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 sm:p-8 rounded-xl border border-gold-primary/20"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gold-secondary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section variant="gold">
        {/* Floating decorative icons */}
        <div className="absolute left-[5%] top-[25%] opacity-[0.12]">
          <LawIcons.Scales className="w-16 h-16 text-gold-primary" />
        </div>
        <div className="absolute right-[8%] bottom-[25%] opacity-[0.10]">
          <LawIcons.Handshake className="w-20 h-20 text-gold-primary" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/30 via-gold-primary/20 to-gold-secondary/30 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-gold-primary/20 to-gold-secondary/20 p-8 sm:p-10 md:p-12 rounded-3xl border border-gold-primary/40 overflow-hidden text-center">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, #F0C246 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              ></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-gold-primary/40">
                  <LawIcons.Handshake className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Need Expert <span className="text-gold-primary">Legal Assistance</span>?
                </h2>
                <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8">
                  Our experienced team is ready to help you with your {practiceArea.shortTitle.toLowerCase()} matters.
                  Contact us today for a consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" href="/contact">
                    Schedule Consultation
                  </Button>
                  <Button variant="secondary" size="lg" href="/practice-areas">
                    View All Practice Areas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
