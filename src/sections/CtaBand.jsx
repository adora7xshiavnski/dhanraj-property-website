import { SITE, whatsappLink } from '../data/site.js';
import Reveal from '../components/Reveal.jsx';
import { PhoneIcon, WhatsAppIcon } from '../components/Icons.jsx';
import heroPhoto from '../assets/hero-photo.jpg';

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta__card" style={{ '--cta-img': `url(${heroPhoto})` }}>
          <div className="cta__text">
            <span className="eyebrow">Ready When You Are</span>
            <h2>Let's find the right property for you</h2>
            <p>Talk to us today. Tell us what you are looking for and we will do the searching.</p>
          </div>
          <div className="cta__actions">
            <a href={SITE.phoneHref} className="btn btn--gold btn--lg">
              <PhoneIcon width={20} height={20} /> Call {SITE.phoneDisplay}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--lg">
              <WhatsAppIcon width={20} height={20} /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
