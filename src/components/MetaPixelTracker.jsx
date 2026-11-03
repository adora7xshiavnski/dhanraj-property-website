import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '../lib/pixel.js';

// Link types that count as someone contacting the business.
const CONTACT_LINKS = [
  { selector: 'a[href^="tel:"]', method: 'phone' },
  { selector: 'a[href*="wa.me/"]', method: 'whatsapp' },
  { selector: 'a[href^="mailto:"]', method: 'email' },
];

// The Meta Pixel is initialised once in index.html, which also tracks the first PageView.
export default function MetaPixelTracker() {
  const { pathname } = useLocation();
  const lastTracked = useRef(pathname);

  // Client-side route changes don't reload the page, so track a PageView for each new path.
  useEffect(() => {
    if (pathname === lastTracked.current) return;
    lastTracked.current = pathname;
    trackEvent('PageView');
  }, [pathname]);

  // One delegated listener covers every call, WhatsApp and email link on the site.
  useEffect(() => {
    const onClick = (e) => {
      for (const { selector, method } of CONTACT_LINKS) {
        if (e.target.closest?.(selector)) {
          trackEvent('Contact', { method });
          return;
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
