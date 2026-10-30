import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { useToast } from '../components/Toast.jsx';
import Reveal from '../components/Reveal.jsx';
import { trackEvent } from '../lib/pixel.js';
import { sendEnquiryEmail } from '../lib/email.js';
import { SITE, fullAddress, mapsEmbedUrl, mapsLinkUrl, whatsappLink } from '../data/site.js';
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '../components/Icons.jsx';

const INTERESTS = ['Buy a Property', 'Sell a Property', 'Rent a Property', 'Invest in Property', 'Other'];

// Digits with the India country code, used for the call and WhatsApp buttons in the enquiry email.
const toIntlNumber = (phone) => {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10 ? `91${digits}` : digits;
};

const EMPTY = { name: '', phone: '', email: '', interest: INTERESTS[0], message: '', consent: false, company: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [invalid, setInvalid] = useState('');
  const [sending, setSending] = useState(false);
  const toast = useToast();

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    if (name === invalid) setInvalid('');
  };

  // Returns the first invalid field and its message, or null when the form is valid.
  const validate = () => {
    if (!form.name.trim()) return { field: 'name', message: 'Please enter your full name.' };
    if (!/^[0-9+\-\s]{10,15}$/.test(form.phone.trim()))
      return { field: 'phone', message: 'Please enter a valid 10-digit mobile number.' };
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      return { field: 'email', message: 'Please enter a valid email address, or leave it empty.' };
    if (!form.consent) return { field: 'consent', message: 'Please agree to the Privacy Policy to continue.' };
    return null;
  };

  // Shows the validation error and returns false when the form isn't ready to send.
  const checkForm = () => {
    const err = validate();
    if (err) {
      setInvalid(err.field);
      document.getElementById(err.field)?.focus();
      toast({ type: 'error', title: 'Please check your details', message: err.message });
      return false;
    }
    setInvalid('');
    return true;
  };

  const firstName = () => form.name.trim().split(' ')[0];

  const composeMessage = () =>
    [
      `Hello ${SITE.name},`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.email.trim() && `Email: ${form.email.trim()}`,
      `Interested in: ${form.interest}`,
      form.message.trim() && `Message: ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n');

  // Emails the enquiry to the business through EmailJS.
  const sendEmail = async () => {
    if (sending || !checkForm()) return;
    // Bots fill the hidden honeypot field; pretend it worked without sending anything.
    if (form.company) {
      setForm(EMPTY);
      return;
    }
    setSending(true);
    try {
      await sendEnquiryEmail({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || 'Not provided',
        reply_to: form.email.trim(),
        interest: form.interest,
        message: form.message.trim() || '(No message)',
        phone_intl: toIntlNumber(form.phone),
        to_email: SITE.email,
        submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      });

      trackEvent('Lead', { content_name: 'Contact form', content_category: form.interest, method: 'email' });
      toast({
        type: 'success',
        title: `Thank you, ${firstName()}!`,
        message: 'Your enquiry has been sent. We will call you back shortly.',
      });
      setForm(EMPTY);
    } catch {
      toast({
        type: 'error',
        title: 'Enquiry not sent',
        message: `Could not send your enquiry right now. Please try WhatsApp or call ${SITE.phoneDisplay}.`,
      });
    } finally {
      setSending(false);
    }
  };

  const sendWhatsApp = () => {
    if (!checkForm()) return;
    window.open(whatsappLink(composeMessage()), '_blank', 'noopener');
    trackEvent('Lead', { content_name: 'Contact form', content_category: form.interest, method: 'whatsapp' });
    toast({
      type: 'success',
      title: `Thank you, ${firstName()}!`,
      message: 'Your enquiry is ready in WhatsApp. Just press send and we will get back to you shortly.',
    });
    setForm(EMPTY);
  };

  return (
    <section className="section section--soft" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Find Your Dream Property"
          text="Send us your requirement and we will get back to you quickly. You can also call or visit our office."
        />

        <Reveal className="contact">
          <form
            className="contact__form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              sendEmail();
            }}
          >
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" value={form.name} onChange={update} autoComplete="name" required aria-invalid={invalid === 'name'} />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" required aria-invalid={invalid === 'phone'} />
            </div>
            <div className="field">
              <label htmlFor="email">Email Address (optional)</label>
              <input id="email" name="email" type="email" value={form.email} onChange={update} autoComplete="email" aria-invalid={invalid === 'email'} />
            </div>
            <div className="field">
              <label htmlFor="interest">I am looking to</label>
              <select id="interest" name="interest" value={form.interest} onChange={update}>
                {INTERESTS.map((i) => <option key={i}>{i}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Your Requirement (optional)</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                maxLength={2000}
                value={form.message}
                onChange={update}
                placeholder="E.g. 2 BHK flat near Rajendra Nagar, budget 40-50 lakh"
              />
            </div>

            {/* Honeypot: hidden from people, filled in by spam bots, rejected by the server. */}
            <div className="hp" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" value={form.company} onChange={update} tabIndex={-1} autoComplete="off" />
            </div>

            <label className={`consent ${invalid === 'consent' ? 'consent--invalid' : ''}`}>
              <input id="consent" type="checkbox" name="consent" checked={form.consent} onChange={update} />
              <span>
                I agree that {SITE.name} may contact me about my enquiry, as described in the{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </span>
            </label>

            <div className="contact__buttons">
              <button type="submit" className="btn btn--gold" disabled={sending} aria-busy={sending}>
                {sending ? <span className="spinner" aria-hidden="true" /> : <MailIcon width={20} height={20} />}
                {sending ? 'Sending…' : 'Send Enquiry'}
              </button>
              <button type="button" className="btn btn--outline" onClick={sendWhatsApp} disabled={sending}>
                <WhatsAppIcon width={20} height={20} /> Send on WhatsApp
              </button>
            </div>
          </form>

          <div className="contact__info">
            <a className="info-card" href={SITE.phoneHref}>
              <span className="info-card__icon"><PhoneIcon /></span>
              <span><small>Call Us</small><strong>{SITE.phoneDisplay}</strong></span>
            </a>
            <a className="info-card" href={`mailto:${SITE.email}`}>
              <span className="info-card__icon"><MailIcon /></span>
              <span><small>Email Us</small><strong>{SITE.email}</strong></span>
            </a>
            <a className="info-card" href={mapsLinkUrl} target="_blank" rel="noopener noreferrer">
              <span className="info-card__icon"><PinIcon /></span>
              <span><small>Visit Our Office</small><strong>{fullAddress}</strong></span>
            </a>
            <div className="map">
              <iframe
                title={`${SITE.name} office location`}
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
