// Inline SVG icons (stroke-based, inherit currentColor).
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const HomeIcon = (p) => (
  <svg {...base} {...p}><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>
);
export const ChartIcon = (p) => (
  <svg {...base} {...p}><path d="M4 20V14M10 20V10M16 20V6" /><path d="M3 20h18" /><path d="m14 4 4-1 1 4" /><path d="M5 11l5-4 4 2 4-6" /></svg>
);
export const HandshakeIcon = (p) => (
  <svg {...base} {...p}><path d="m11 17 2 2a1.5 1.5 0 0 0 2-2" /><path d="m14 14 2.5 2.5a1.5 1.5 0 0 0 2-2L15 11" /><path d="m3 11 3-3 4 1 3-2 3 1 5 4-3 3" /><path d="M6 8 3 11l6 6 2-2" /><path d="M13 7 9.5 10.5a1.5 1.5 0 0 0 2 2L14 10" /></svg>
);
export const BuildingIcon = (p) => (
  <svg {...base} {...p}><rect x="4" y="3" width="10" height="18" rx="1" /><path d="M14 9h5a1 1 0 0 1 1 1v11" /><path d="M8 7h2M8 11h2M8 15h2M17 13h0M17 17h0" /><path d="M3 21h18" /></svg>
);
export const CheckIcon = (p) => (
  <svg {...base} strokeWidth={2.4} {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const ShieldIcon = (p) => (
  <svg {...base} {...p}><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const UserIcon = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg>
);
export const TagIcon = (p) => (
  <svg {...base} {...p}><path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z" /><circle cx="8" cy="8" r="1.5" /></svg>
);
export const HeadsetIcon = (p) => (
  <svg {...base} {...p}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /><path d="M19 20c0 1-2 2-5 2" /></svg>
);
export const PhoneIcon = (p) => (
  <svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
);
export const MailIcon = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const PinIcon = (p) => (
  <svg {...base} {...p}><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const MenuIcon = (p) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = (p) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const LandIcon = (p) => (
  <svg {...base} {...p}><path d="M3 20h18" /><path d="M5 20V9l7-5 7 5v11" /><path d="M9 20v-5h6v5" /><path d="M3 9h18" strokeDasharray="2 2" /></svg>
);
export const ShopIcon = (p) => (
  <svg {...base} {...p}><path d="M4 9 5.5 4h13L20 9" /><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9" /><path d="M5 11v9h14v-9" /><path d="M10 20v-5h4v5" /></svg>
);
export const VillaIcon = (p) => (
  <svg {...base} {...p}><path d="M2 20h20" /><path d="M4 20V11l5-4 5 4v9" /><path d="M14 20v-7h6v7" /><path d="M7 14h4M7 17h4" /><path d="M14 13l3-2.5 3 2.5" /></svg>
);
export const ArrowIcon = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const WhatsAppIcon = (p) => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M16.04 3C9.4 3 4 8.36 4 14.97c0 2.3.66 4.46 1.8 6.3L4 29l7.97-1.76A12.1 12.1 0 0 0 16.04 27C22.68 27 28 21.6 28 15S22.68 3 16.04 3zm0 21.8c-1.86 0-3.6-.5-5.1-1.38l-.36-.22-4.73 1.04 1.06-4.58-.24-.38a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.42-9.8 9.86-9.8 5.43 0 9.85 4.4 9.85 9.8 0 5.32-4.42 9.72-9.84 9.72zm5.4-7.3c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1-1.04 2.46 0 1.45 1.06 2.85 1.21 3.05.15.2 2.08 3.17 5.05 4.44.7.3 1.25.48 1.68.62.7.22 1.35.19 1.86.12.57-.09 1.75-.72 2-1.4.25-.7.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35z" />
  </svg>
);
