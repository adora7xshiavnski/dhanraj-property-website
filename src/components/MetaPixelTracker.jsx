import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// The Meta Pixel is initialised once in index.html, which also tracks the first PageView.
// Client-side route changes don't reload the page, so track a PageView for each new path here.
export default function MetaPixelTracker() {
  const { pathname } = useLocation();
  const lastTracked = useRef(pathname);

  useEffect(() => {
    if (pathname === lastTracked.current) return;
    lastTracked.current = pathname;
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
}
