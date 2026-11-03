// Thin wrapper around the Meta Pixel loaded in index.html.
// Never pass personal data or anything the visitor typed in params; the privacy policy promises we don't.

const newEventId = () =>
  window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export function trackEvent(name, params = {}) {
  if (typeof window.fbq === 'function') {
    // eventID lets Meta deduplicate this with the same event from the Conversions API.
    window.fbq('track', name, params, { eventID: newEventId() });
  }
}
