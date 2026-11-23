import { NextRequest, NextResponse } from "next/server";

/**
 * Contact-form submission endpoint.
 *
 * Replaces the previous `window.location.href = mailto:…` handoff, which sent
 * nothing to the firm: on desktop without a configured mail client the enquiry
 * was silently lost, and on mobile the visitor had to press Send a second time.
 * Either way the firm kept no record of the lead.
 *
 * The flow is now:
 *
 *   browser → POST /api/contact → Google Apps Script web app → Google Sheet
 *
 * The Apps Script URL stays server-side in `SHEETS_WEBHOOK_URL` so it is never
 * in the client bundle, and validation runs here rather than being trusted from
 * the browser. See docs/GOOGLE-SHEETS-LEADS.md for the script and deploy steps.
 */

export const runtime = "nodejs";

/** Keep a stray paste or a bot from writing huge rows into the sheet. */
const LIMITS = {
  name: 120,
  email: 160,
  phone: 40,
  practiceArea: 80,
  message: 4000,
} as const;

interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
  /** Honeypot — a real person never sees or fills this. */
  company?: string;
  /** Which page the enquiry came from, for attribution in the sheet. */
  sourcePage?: string;
}

/** Deliberately permissive: enough to catch typos, not to reject valid addresses. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: NextRequest) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot: respond 200 so a bot sees success and does not retry, but write
  // nothing. Never reveal that the submission was discarded.
  if (clean(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    phone: clean(body.phone, LIMITS.phone),
    practiceArea: clean(body.practiceArea, LIMITS.practiceArea),
    message: clean(body.message, LIMITS.message),
    sourcePage: clean(body.sourcePage, 200),
  };

  const errors: Record<string, string> = {};
  if (!lead.name) errors.name = "Please tell us your name.";
  if (!lead.email) errors.email = "Please give us an email address.";
  else if (!EMAIL_RE.test(lead.email))
    errors.email = "That email address does not look right.";
  if (!lead.phone) errors.phone = "Please give us a phone number.";
  if (!lead.message) errors.message = "Please describe your matter.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const endpoint = process.env.SHEETS_WEBHOOK_URL;
  if (!endpoint) {
    // Misconfiguration must be loud in the logs and honest to the visitor —
    // never a fake success, which would lose the lead exactly as the old
    // mailto: handoff did.
    console.error(
      "[contact] SHEETS_WEBHOOK_URL is not set — the enquiry was NOT recorded."
    );
    return NextResponse.json(
      { ok: false, error: "unconfigured" },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        submittedAt: new Date().toISOString(),
      }),
      // Apps Script answers the POST with a 302 to script.googleusercontent.com;
      // following it is what actually completes the write.
      redirect: "follow",
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error("[contact] Apps Script responded", res.status);
      return NextResponse.json(
        { ok: false, error: "upstream" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to reach the sheet endpoint:", err);
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}
