"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import { trackContact } from "@/lib/analytics";
import { PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from "@/data/contactInfo";

const FIRM_EMAIL = "Judiciumarbitration@gmail.com";

/**
 * Consultation enquiry form.
 *
 * Previously this built a `mailto:` and did `window.location.href = mailto`,
 * which sent nothing to the firm — on desktop with no mail client the lead was
 * silently lost, and on mobile the visitor had to press Send a second time. The
 * firm kept no record either way.
 *
 * It now POSTs to /api/contact, which validates server-side and writes the row
 * to the firm's Google Sheet. If that fails the form does NOT pretend to have
 * succeeded: it says so and surfaces call / WhatsApp / email so the enquiry is
 * still recoverable.
 */

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

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "message", string>
>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function fieldClass(hasError: boolean) {
  return [
    "w-full px-4 py-3 bg-bg-alt-dark rounded-lg text-foreground transition-all",
    "focus:outline-none focus:ring-2",
    hasError
      ? "border border-red-400/70 focus:ring-red-400/50"
      : "border border-gold-primary/20 focus:ring-gold-primary/50 focus:border-gold-primary/50",
  ].join(" ");
}

function ErrorText({ id, children }: { id: string; children: string }) {
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-300">
      {children}
    </p>
  );
}

export default function ContactForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "failed"
  >("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const validate = (data: FormData): FieldErrors => {
    const next: FieldErrors = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) next.name = "Please tell us your name.";
    if (!email) next.email = "Please give us an email address.";
    else if (!EMAIL_RE.test(email))
      next.email = "That email address does not look right.";
    if (!phone) next.phone = "Please give us a phone number.";
    else if (phone.replace(/\D/g, "").length < 8)
      next.phone = "That phone number looks too short.";
    if (!message) next.message = "Please describe your matter briefly.";

    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move the visitor to the first problem rather than leaving them to hunt.
      const firstKey = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    const practiceArea = (data.get("practice-area") as string)?.trim() ?? "";
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: (data.get("name") as string)?.trim(),
          email: (data.get("email") as string)?.trim(),
          phone: (data.get("phone") as string)?.trim(),
          practiceArea,
          message: (data.get("message") as string)?.trim(),
          company: (data.get("company") as string) ?? "",
          sourcePage: pathname,
        }),
      });

      if (!res.ok) {
        setStatus("failed");
        return;
      }

      // Only count the lead once it has actually been recorded.
      trackContact("form", "contact_form", {
        practice_area: practiceArea || "unspecified",
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="bg-bg-alt-dark border border-gold-primary/30 rounded-2xl p-8 text-center"
      >
        <div className="w-14 h-14 mx-auto mb-4 bg-linear-to-br from-gold-primary to-gold-secondary rounded-full flex items-center justify-center">
          <svg
            className="w-7 h-7 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-gold-primary mb-2">
          Enquiry received
        </h3>
        <p className="text-foreground/75 text-sm leading-relaxed">
          Thank you — your enquiry has reached our team and we typically respond
          within 24 hours. If it is urgent, call{" "}
          <a
            href={TEL_LINK}
            className="text-gold-primary hover:underline font-semibold"
          >
            {PHONE_DISPLAY}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-gold-primary hover:underline font-semibold"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from people, irresistible to bots */}
      <div className="absolute w-px h-px -m-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "failed" && (
        <div
          role="alert"
          className="rounded-xl border border-red-400/40 bg-red-500/10 p-4"
        >
          <p className="text-sm text-red-200 font-semibold mb-1">
            We could not send that just now.
          </p>
          <p className="text-xs text-red-100/80 leading-relaxed">
            Please try again, or reach us directly —{" "}
            <a href={TEL_LINK} className="underline font-semibold">
              {PHONE_DISPLAY}
            </a>
            ,{" "}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              WhatsApp
            </a>{" "}
            or{" "}
            <a href={`mailto:${FIRM_EMAIL}`} className="underline font-semibold">
              {FIRM_EMAIL}
            </a>
            .
          </p>
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gold-secondary mb-2"
        >
          Full name <span className="text-red-300">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass(Boolean(errors.name))}
        />
        {errors.name && <ErrorText id="name-error">{errors.name}</ErrorText>}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gold-secondary mb-2"
        >
          Email <span className="text-red-300">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@company.com"
          aria-required="true"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass(Boolean(errors.email))}
        />
        {errors.email && <ErrorText id="email-error">{errors.email}</ErrorText>}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-gold-secondary mb-2"
        >
          Phone <span className="text-red-300">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 00000 00000"
          aria-required="true"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={fieldClass(Boolean(errors.phone))}
        />
        {errors.phone && <ErrorText id="phone-error">{errors.phone}</ErrorText>}
      </div>

      <div>
        <label
          htmlFor="practice-area"
          className="block text-sm font-semibold text-gold-secondary mb-2"
        >
          Practice area
        </label>
        <div className="relative">
          <select
            id="practice-area"
            name="practice-area"
            defaultValue=""
            aria-label="Select a practice area of interest"
            className={`${fieldClass(false)} appearance-none cursor-pointer pr-10`}
          >
            {practiceAreaOptions.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-primary/70"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gold-secondary mb-2"
        >
          How can we help? <span className="text-red-300">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Briefly describe your matter — the parties, the dispute and what you need."
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass(Boolean(errors.message))} resize-y`}
        />
        {errors.message && (
          <ErrorText id="message-error">{errors.message}</ErrorText>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        loading={status === "sending"}
        className="w-full"
      >
        {status === "sending" ? "Sending…" : "Request a consultation"}
      </Button>

      <p className="text-xs text-foreground/50 leading-relaxed text-center">
        Your enquiry is confidential. Submitting this form does not create a
        lawyer–client relationship. See our{" "}
        <Link href="/privacy-policy" className="text-gold-primary/80 hover:underline">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
