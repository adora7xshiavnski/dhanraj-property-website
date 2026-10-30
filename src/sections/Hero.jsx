import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroPhoto from '../assets/hero-photo.jpg';
import { SITE, whatsappLink } from '../data/site.js';
import { useToast } from '../components/Toast.jsx';
import { trackEvent } from '../lib/pixel.js';
import { CheckIcon, PhoneIcon, ShieldIcon, WhatsAppIcon } from '../components/Icons.jsx';

const HIGHLIGHTS = ['Verified Properties', 'Expert Guidance', 'Best Deals', 'Trusted Support'];
const MODES = ['Buy', 'Rent', 'Sell', 'Invest'];
const PROPERTY_TYPES = ['Any Type', 'Flat / Apartment', 'Independent House', 'Villa / Duplex', 'Plot', 'Commercial'];
const BUDGETS = ['Any Budget', 'Under ₹25 Lakh', '₹25 – 50 Lakh', '₹50 Lakh – 1 Cr', 'Above ₹1 Cr'];

function QuickSearch() {
  const [mode, setMode] = useState(MODES[0]);
  const [type, setType] = useState(PROPERTY_TYPES[0]);
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState(BUDGETS[0]);
  const toast = useToast();

  const submit = (e) => {
    e.preventDefault();
    const text = [
      `Hello ${SITE.name}, I want to ${mode.toLowerCase()} a property.`,
      type !== PROPERTY_TYPES[0] && `Type: ${type}`,
      location.trim() && `Preferred area: ${location.trim()}`,
      budget !== BUDGETS[0] && `Budget: ${budget}`,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(whatsappLink(text), '_blank', 'noopener');
    trackEvent('Search', {
      search_string: [mode, type, location.trim(), budget].filter(Boolean).join(' | '),
      content_category: mode,
    });
    toast({ title: 'Opening WhatsApp', message: 'Your requirement is ready to send. We will share matching properties.' });
  };

  return (
    <form className="qsearch" onSubmit={submit} aria-label="Quick property search">
      <div className="qsearch__tabs" role="tablist">
        {MODES.map((m) => (
          <button
            type="button"
            role="tab"
            key={m}
            aria-selected={mode === m}
            className={`qsearch__tab ${mode === m ? 'qsearch__tab--active' : ''}`}
            onClick={() => setMode(m)}
          >
            {m}
          </button>
        ))}
      </div>
      <div className="qsearch__fields">
        <label className="qsearch__field">
          <span>Property Type</span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="qsearch__field">
          <span>Location</span>
          <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Area in Indore" />
        </label>
        <label className="qsearch__field">
          <span>Budget</span>
          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            {BUDGETS.map((b) => <option key={b}>{b}</option>)}
          </select>
        </label>
        <button type="submit" className="btn btn--gold qsearch__submit">
          <WhatsAppIcon width={20} height={20} /> Find Properties
        </button>
      </div>
    </form>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__shape hero__shape--one" aria-hidden="true" />
      <div className="hero__shape hero__shape--two" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" /> Trusted Real Estate Partner in Indore
          </span>
          <h1>
            Your Dream Home, <span className="text-gold">Our Priority</span>
          </h1>
          <p className="hero__lead">
            Whether you are buying your first home, selling a property, looking for a rental or planning an
            investment, {SITE.name} guides you at every step with honest advice and verified options.
          </p>

          <div className="hero__actions">
            <Link to="/#contact" className="btn btn--navy btn--lg">Book a Consultation</Link>
            <a href={SITE.phoneHref} className="btn btn--outline btn--lg">
              <PhoneIcon width={20} height={20} /> {SITE.phoneDisplay}
            </a>
          </div>

          <ul className="hero__highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>
                <span className="check"><CheckIcon width={14} height={14} /></span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__image">
            <img src={heroPhoto} alt="A family looking at their new modern home" />
          </div>
          <div className="hero__float hero__float--top">
            <span className="hero__float-icon"><ShieldIcon width={22} height={22} /></span>
            <span>
              <strong>Verified Properties</strong>
              <small>Documents checked before every visit</small>
            </span>
          </div>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hero__float hero__float--bottom">
            <span className="hero__float-icon hero__float-icon--wa"><WhatsAppIcon width={22} height={22} /></span>
            <span>
              <strong>Chat on WhatsApp</strong>
              <small>Share your requirement instantly</small>
            </span>
          </a>
        </div>
      </div>

      <div className="container hero__search">
        <QuickSearch />
      </div>
    </section>
  );
}
