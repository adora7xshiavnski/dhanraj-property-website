// Thin wrapper around the Meta Pixel loaded in index.html.
// Never pass personal data (name, phone, email, message) in params; the privacy policy promises we don't.
export function trackEvent(name, params) {
  if (typeof window.fbq === 'function') {
    window.fbq('track', name, params);
  }
}
