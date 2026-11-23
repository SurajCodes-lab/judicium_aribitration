# Contact form → Google Sheet

The enquiry form posts to `/api/contact`, which forwards the lead to a Google
Apps Script web app bound to a Google Sheet. No third-party form service, no
monthly limit, and the firm owns the data.

```
visitor → POST /api/contact → Apps Script web app → Google Sheet
```

**Until step 5 is done the form returns a 503 and tells the visitor to call or
WhatsApp instead.** It never shows a fake success — the previous `mailto:`
behaviour silently lost leads and that is the bug being fixed.

---

## 1. Create the sheet

New Google Sheet, name it `Judicium — Website Enquiries`. Put these headers in
row 1, in this order:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Phone | Practice Area | Message | Source Page |

## 2. Open Apps Script

In the sheet: **Extensions → Apps Script**. Delete whatever is in `Code.gs`.

## 3. Paste this script

```javascript
/**
 * Receives enquiries from the Judicium Arbitration website and appends one row
 * per lead. Deployed as a web app; the site posts JSON to the /exec URL.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000); // serialise writes so two enquiries never collide

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.practiceArea || '',
      data.message || '',
      data.sourcePage || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

### Optional — email alert on every enquiry

Add this inside `doPost`, just before the `return`, so the firm is notified
rather than having to watch the sheet:

```javascript
    MailApp.sendEmail({
      to: 'Judiciumarbitration@gmail.com',
      subject: 'New website enquiry — ' + (data.name || 'unknown'),
      body: [
        'Name: ' + data.name,
        'Email: ' + data.email,
        'Phone: ' + data.phone,
        'Practice area: ' + data.practiceArea,
        'Page: ' + data.sourcePage,
        '',
        data.message
      ].join('\n')
    });
```

## 4. Deploy

**Deploy → New deployment → ⚙ → Web app**, then:

| Setting | Value |
|---|---|
| Description | `Website enquiries` |
| Execute as | **Me** |
| Who has access | **Anyone** |

Click **Deploy**, authorise when Google asks (it will warn the app is
unverified — that is expected for your own script; choose *Advanced → Go to
project*), then copy the **Web app URL**. It ends in `/exec`.

> "Anyone" means anyone can POST to the endpoint — it cannot read the sheet.
> That is why the URL is kept server-side and the API route carries a honeypot
> and length limits.

## 5. Add the URL to the site

**Local** — add to `.env.local`:

```
SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXXXX/exec
```

**Vercel** — Project → Settings → Environment Variables → add
`SHEETS_WEBHOOK_URL` for Production, Preview and Development, then redeploy.

No `NEXT_PUBLIC_` prefix. The variable is read only in
`src/app/api/contact/route.ts` and must never reach the browser bundle.

## 6. Test

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Lead","email":"test@example.com","phone":"9899686394","practiceArea":"Arbitration & ADR","message":"Testing the pipeline.","sourcePage":"/contact"}'
```

Expect `{"ok":true}` and a new row in the sheet. Delete the test row afterwards.

Then submit the real form once at `/contact` and confirm the row lands.

---

## What the API route already handles

| Concern | Handling |
|---|---|
| Spam bots | Hidden `company` honeypot — filled means discard, but still return 200 so the bot does not retry |
| Oversized input | Field length caps (message 4000 chars, name 120, etc.) |
| Invalid email | Server-side regex, returns 422 with per-field errors |
| Slow/!down Apps Script | 10-second timeout, returns 502 |
| Missing env var | Returns 503 and logs loudly — never a fake success |
| Double submit | Button enters `loading` state and disables |
| Lead attribution | `sourcePage` records which page the enquiry came from |

## Analytics

`trackContact("form", "contact_form")` fires **only after the row is written**,
so GA4 `generate_lead` counts real captured leads rather than attempts. Mark
`generate_lead` as a Key Event in GA4 → Admin → Events.
