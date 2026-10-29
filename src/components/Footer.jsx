import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { SITE, fullAddress, mapsLinkUrl } from '../data/site.js';
import { MailIcon, PhoneIcon, PinIcon } from './Icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt={SITE.name} className="footer__logo" width="96" height="96" />
          <p>
            {SITE.tagline}. Helping families and investors in Indore buy, sell, rent and invest in property with
            confidence.
          </p>
        </div>

        <div>
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#why-us">Why Choose Us</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Services</h4>
          <ul className="footer__links">
            <li><Link to="/#services">Buy Your Home</Link></li>
            <li><Link to="/#services">Sell With Confidence</Link></li>
            <li><Link to="/#services">Rent Hassle Free</Link></li>
            <li><Link to="/#services">Invest for a Better Future</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Get in Touch</h4>
          <ul className="footer__contact">
            <li>
              <PinIcon width={18} height={18} />
              <a href={mapsLinkUrl} target="_blank" rel="noopener noreferrer">{fullAddress}</a>
            </li>
            <li>
              <PhoneIcon width={18} height={18} />
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            </li>
            <li>
              <MailIcon width={18} height={18} />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
