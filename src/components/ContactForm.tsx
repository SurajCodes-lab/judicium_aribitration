"use client";

import Link from "next/link";
import { useState } from "react";

const FIRM_EMAIL = "Judiciumarbitration@gmail.com";

const practiceAreaOptions = [
  { value: "", label: "Select a practice area" },
  { value: "Arbitration & ADR", label: "Arbitration & ADR" },
  { value: "Banking & Finance", label: "Banking & Finance" },
  { value: "Corporate & Commercial", label: "Corporate & Commercial" },
  { value: "Real Estate", label: "Real Estate" },
  { value: "Intellectual Property", label: "Intellectual Property" },
  { value: "Litigation", label: "Litigation" },
  { value: "Other", label: "Other" },
];

const inputClass =
  "w-full px-4 py-3 bg-bg-alt-dark border border-gold-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-gold-primary/50 text-foreground transition-all";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const practiceArea = (data.get("practice-area") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const subject = `Consultation enquiry${
      practiceArea ? ` — ${practiceArea}` : ""
    } — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      practiceArea ? `Practice Area: ${practiceArea}` : null,
      "",
      "Message:",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailto = `mailto:${FIRM_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Opens the visitor's email client with the enquiry pre-filled.
    window.location.href = mailto;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="bg-bg-alt-dark border border-gold-primary/30 rounded-2xl p-8 text-center"
      >
        <div className="w-14 h-14 mx-auto mb-4 bg-linear-to-br from-gold-primary to-gold-secondary rounded-full flex items-center justify-center">
          <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gold-primary mb-2">Almost there!</h3>
        <p className="text-foreground/75 text-sm leading-relaxed">
          Your email app should have opened with your enquiry ready to send. If it
          didn&apos;t, please email us directly at{" "}
          <a href={`mailto:${FIRM_EMAIL}`} className="text-gold-primary hover:underline font-semibold">
            {FIRM_EMAIL}
          </a>{" "}
          or call{" "}
          <a href="tel:+919899686394" className="text-gold-primary hover:underline font-semibold">
            +91-9899686394
          </a>
          . We typically respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-gold-primary hover:underline font-semibold"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gold-secondary mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
          className={inputClass}
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gold-secondary mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          className={inputClass}
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gold-secondary mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          aria-required="true"
          pattern="[+]?[0-9\s\-]{10,15}"
          className={inputClass}
          placeholder="+91-XXXXXXXXXX"
        />
      </div>

      <div>
        <label htmlFor="practice-area" className="block text-sm font-semibold text-gold-secondary mb-2">
          Practice Area of Interest
        </label>
        <select
          id="practice-area"
          name="practice-area"
          aria-label="Select a practice area of interest"
          className={`${inputClass} appearance-none cursor-pointer`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23F0C246' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 16px center",
          }}
        >
          {practiceAreaOptions.map((opt) => (
            <option key={opt.label} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gold-secondary mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={6}
          className={`${inputClass} resize-none`}
          placeholder="Please describe your legal matter and how we can assist you..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-linear-to-r from-gold-primary to-gold-secondary text-bg-dark font-semibold rounded-lg hover:shadow-xl hover:shadow-gold-primary/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:ring-offset-2 focus:ring-offset-bg-dark uppercase tracking-wider text-sm"
      >
        Send Message
      </button>

      <p className="text-xs text-foreground/50 text-center">
        By submitting this form, you agree to our{" "}
        <Link href="/privacy-policy" className="text-gold-primary/80 hover:underline">
          privacy policy
        </Link>{" "}
        and{" "}
        <Link href="/terms-of-service" className="text-gold-primary/80 hover:underline">
          terms of service
        </Link>
        .
      </p>
    </form>
  );
}
