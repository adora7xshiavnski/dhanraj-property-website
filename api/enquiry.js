// Vercel serverless function: emails website enquiries to Dhanraj Property via Gmail.
//
// Required environment variables (Vercel → Project → Settings → Environment Variables):
//   GMAIL_USER          the Gmail address that sends the mail, e.g. propertydhanraj@gmail.com
//   GMAIL_APP_PASSWORD  a 16-character Google App Password for that account (not the normal password)
// Optional:
//   ENQUIRY_TO          where enquiries are delivered (defaults to propertydhanraj@gmail.com)
import nodemailer from 'nodemailer';

const DEFAULT_TO = 'propertydhanraj@gmail.com';
const INTERESTS = ['Buy a Property', 'Sell a Property', 'Rent a Property', 'Invest in Property', 'Other'];

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function validate({ name, phone, interest, message }) {
  if (typeof name !== 'string' || !name.trim() || name.length > 100) return 'Please enter your full name.';
  if (typeof phone !== 'string' || !/^[0-9+\-\s]{10,15}$/.test(phone.trim())) return 'Please enter a valid phone number.';
  if (!INTERESTS.includes(interest)) return 'Please choose what you are looking for.';
  if (typeof message !== 'string' || message.length > 2000) return 'Your message is too long.';
  return null;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name = '', phone = '', interest = '', message = '', company = '' } = req.body || {};

  // Hidden "company" field is a honeypot: real visitors never fill it, spam bots usually do.
  if (company) return res.status(200).json({ ok: true });

  const error = validate({ name, phone, interest, message });
  if (error) return res.status(400).json({ error });

  const { GMAIL_USER, GMAIL_APP_PASSWORD, ENQUIRY_TO } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('Enquiry email not sent: GMAIL_USER or GMAIL_APP_PASSWORD is not set.');
    return res.status(500).json({ error: 'Email is not configured on the server.' });
  }

  const clean = { name: name.trim(), phone: phone.trim(), interest, message: message.trim() };
  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  const rows = [
    ['Name', clean.name],
    ['Phone', clean.phone],
    ['Looking to', clean.interest],
    ['Requirement', clean.message || '(not provided)'],
    ['Received', `${submittedAt} IST`],
  ];

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Dhanraj Property Website" <${GMAIL_USER}>`,
      to: ENQUIRY_TO || DEFAULT_TO,
      subject: `New enquiry: ${clean.interest} - ${clean.name}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;color:#24324a">
          <h2 style="color:#0a2a5c;margin:0 0 4px">New website enquiry</h2>
          <p style="margin:0 0 16px;color:#5e6b80">Someone sent an enquiry from the Dhanraj Property website.</p>
          <table style="border-collapse:collapse;width:100%">
            ${rows
              .map(
                ([k, v]) => `<tr>
                  <td style="padding:10px;border:1px solid #eaecf2;background:#f8f9fc;font-weight:bold;width:130px">${k}</td>
                  <td style="padding:10px;border:1px solid #eaecf2;white-space:pre-wrap">${escapeHtml(v)}</td>
                </tr>`
              )
              .join('')}
          </table>
          <p style="margin-top:16px">
            <a href="tel:${escapeHtml(clean.phone.replace(/[^0-9+]/g, ''))}" style="color:#9a6a10;font-weight:bold">Call ${escapeHtml(clean.phone)}</a>
          </p>
        </div>`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Enquiry email failed:', err);
    return res.status(502).json({ error: 'Could not send your enquiry right now.' });
  }
}
