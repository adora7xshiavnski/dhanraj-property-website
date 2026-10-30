import emailjs from '@emailjs/browser';

// IDs from the EmailJS dashboard, set as environment variables (see .env.example).
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function sendEnquiryEmail(params) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return Promise.reject(new Error('EmailJS is not configured.'));
  }
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY });
}
