// Single source of truth for business details used across the site.
export const SITE = {
  name: 'Dhanraj Property',
  tagline: 'Your Dream Home Our Priority',
  phoneDisplay: '+91 98260 66082',
  phoneHref: 'tel:+919826066082',
  whatsappNumber: '919826066082',
  email: 'propertydhanraj@gmail.com',
  address: {
    line1: '206, Rajendra Nagar',
    line2: 'Dhanwantri Nagar',
    city: 'Indore',
    state: 'Madhya Pradesh',
    pin: '452012',
  },
};

export const fullAddress = `${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.pin}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export const whatsappLink = (text = 'Hello Dhanraj Property, I would like to know more about your properties.') =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
