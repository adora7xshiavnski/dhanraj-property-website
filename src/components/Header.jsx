import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { SITE, fullAddress, mapsLinkUrl } from '../data/site.js';
import { CloseIcon, MailIcon, MenuIcon, PhoneIcon, PinIcon } from './Icons.jsx';

const NAV = [
  { label: 'Home', to: '/', section: 'home' },
  { label: 'Services', to: '/#services', section: 'services' },
  { label: 'Why Us', to: '/#why-us', section: 'why-us' },
  { label: 'About', to: '/#about', section: 'about' },
  { label: 'Contact', to: '/#contact', section: 'contact' },
];

// Tracks which home-page section is currently in view, for nav highlighting.
function useActiveSection(enabled) {
  const [active, setActive] = useState('home');

  useEffect(() => {
    if (!enabled) return;
    const els = NAV.map((n) => document.getElementById(n.section)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const active = useActiveSection(location.pathname === '/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <a href={mapsLinkUrl} target="_blank" rel="noopener noreferrer">
            <PinIcon width={15} height={15} /> {fullAddress}
          </a>
          <div className="topbar__right">
            <a href={`mailto:${SITE.email}`}><MailIcon width={15} height={15} /> {SITE.email}</a>
            <a href={SITE.phoneHref}><PhoneIcon width={15} height={15} /> {SITE.phoneDisplay}</a>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="header__brand" aria-label={`${SITE.name} home`}>
            <img src={logo} alt="" className="header__logo" width="56" height="56" />
            <span className="header__name">
              <span className="header__name-main">DHANRAJ</span>
              <span className="header__name-sub">PROPERTY</span>
            </span>
          </Link>

          <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`nav__link ${active === item.section ? 'nav__link--active' : ''}`}
                aria-current={active === item.section ? 'true' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="btn btn--gold nav__cta">
              <PhoneIcon width={18} height={18} /> Call Now
            </a>
          </nav>

          <button
            className="header__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  );
}
