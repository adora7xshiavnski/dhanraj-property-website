import { SITE, whatsappLink } from '../data/site.js';
import Reveal from '../components/Reveal.jsx';
import { PhoneIcon, WhatsAppIcon } from '../components/Icons.jsx';
import heroPhoto from '../assets/hero-photo.jpg';

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta__card">
          <div className="cta__text">
            <span className="eyebrow eyebrow--lined">Ready When You Are</span>
            <h2>Let's find the right property for you</h2>
            <p>Talk to us today. Tell us what you are looking for and we will do the searching.</p>
            <div className="cta__actions">
              <a href={SITE.phoneHref} className="btn btn--gold btn--lg">
                <PhoneIcon width={20} height={20} /> Call {SITE.phoneDisplay}
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">
                <WhatsAppIcon width={20} height={20} /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="cta__media">
            <img src={heroPhoto} alt="" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
