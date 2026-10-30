import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { useToast } from '../components/Toast.jsx';
import Reveal from '../components/Reveal.jsx';
import { SITE, fullAddress, mapsEmbedUrl, mapsLinkUrl, whatsappLink } from '../data/site.js';
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '../components/Icons.jsx';

const INTERESTS = ['Buy a Property', 'Sell a Property', 'Rent a Property', 'Invest in Property', 'Other'];

const EMPTY = { name: '', phone: '', interest: INTERESTS[0], message: '', consent: false };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [invalid, setInvalid] = useState('');
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
    if (!form.consent) return { field: 'consent', message: 'Please agree to the Privacy Policy to continue.' };
    return null;
  };

  const composeMessage = () =>
    [
      `Hello ${SITE.name},`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Interested in: ${form.interest}`,
      form.message.trim() && `Message: ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n');

  // The site has no backend, so enquiries are handed off to WhatsApp or the visitor's email app.
  const send = (channel) => {
    const err = validate();
    if (err) {
      setInvalid(err.field);
      document.getElementById(err.field)?.focus();
      toast({ type: 'error', title: 'Please check your details', message: err.message });
      return;
    }
    setInvalid('');
    const text = composeMessage();
    if (channel === 'whatsapp') {
      window.open(whatsappLink(text), '_blank', 'noopener');
    } else {
      const subject = `Property enquiry: ${form.interest}`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    }
    toast({
      type: 'success',
      title: `Thank you, ${form.name.trim().split(' ')[0]}!`,
      message:
        channel === 'whatsapp'
          ? 'Your enquiry is ready in WhatsApp. Just press send and we will get back to you shortly.'
          : 'Your enquiry is ready in your email app. Just press send and we will get back to you shortly.',
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
              send('whatsapp');
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
                value={form.message}
                onChange={update}
                placeholder="E.g. 2 BHK flat near Rajendra Nagar, budget 40-50 lakh"
              />
            </div>
            <label className={`consent ${invalid === 'consent' ? 'consent--invalid' : ''}`}>
              <input id="consent" type="checkbox" name="consent" checked={form.consent} onChange={update} />
              <span>
                I agree that {SITE.name} may contact me about my enquiry, as described in the{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </span>
            </label>

            <div className="contact__buttons">
              <button type="submit" className="btn btn--gold">
                <WhatsAppIcon width={20} height={20} /> Send on WhatsApp
              </button>
              <button type="button" className="btn btn--navy" onClick={() => send('email')}>
                <MailIcon width={20} height={20} /> Send by Email
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
