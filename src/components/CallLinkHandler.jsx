import { useEffect } from 'react';
import { useToast } from './Toast.jsx';
import { SITE } from '../data/site.js';

// Devices with a mouse usually can't place calls, so the browser shows an "Open app?" prompt for tel: links.
const canCall = () => !window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// On computers, copy the phone number and show it in a toast instead of opening a tel: link.
export default function CallLinkHandler() {
  const toast = useToast();

  useEffect(() => {
    const onClick = (e) => {
      if (!e.target.closest?.('a[href^="tel:"]') || canCall()) return;
      e.preventDefault();
      const done = (copied) =>
        toast({
          title: `Call us on ${SITE.phoneDisplay}`,
          message: copied ? 'Number copied. You can also reach us on WhatsApp.' : 'Dial this number from your phone, or reach us on WhatsApp.',
        });
      navigator.clipboard?.writeText(SITE.phoneDisplay).then(() => done(true), () => done(false)) ?? done(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [toast]);

  return null;
}
