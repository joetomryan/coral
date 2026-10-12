// Single source of truth for business details. ⚠ items still need the owner's confirmation
// (see docs/01-site-audit.md §7).
export const site = {
  name: 'Coral Interiors',
  legalName: 'Coral Interiors',
  url: 'https://www.coralblinds.in',
  since: 2002,
  tagline: 'Made to measure blinds and curtains for homes and workplaces in Bengaluru.',
  phones: {
    office: { display: '+91 63629 04441', tel: '+916362904441' },
    mobile: { display: '+91 98866 72792', tel: '+919886672792' },
  },
  // ⚠ Assumed to be the WhatsApp line — confirm.
  whatsapp: '919886672792',
  // ⚠ Real address is obfuscated in search indexes — fill in from the owner.
  email: '',
  address: {
    line1: '12/2, 2nd Floor, Hennur Bagalur Main Road',
    line2: 'Opp. Uttam Sagar Gardenia, Kothanur',
    city: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560077',
    country: 'IN',
  },
  // ⚠ Confirm Saturday hours.
  hours: [{ days: 'Monday to Friday', time: '9:30 am to 6:30 pm' }],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Coral+Blinds+Hennur+Bagalur+Road+Kothanur+Bengaluru',
  // Google listing "Coral Window Blinds" (from the Maps link the owner shared).
  google: {
    placeId: 'ChIJF6cg9FUXrjsRhoLrpFOav9E',
    reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJF6cg9FUXrjsRhoLrpFOav9E',
    writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJF6cg9FUXrjsRhoLrpFOav9E',
  },
  social: {
    facebook: 'https://www.facebook.com/Coralblinds/',
  },
  proof: [
    { value: `${new Date().getFullYear() - 2002}+`, label: 'Years making blinds' },
    { value: '1,000+', label: 'Homes fitted' },
    { value: '5 days', label: 'Typical delivery' },
  ],
} as const;

export const whatsappLink = (text = 'Hi Coral Interiors, I would like to book a free visit.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '/products', label: 'Products' },
  { href: '/collections', label: 'Collections' },
  { href: '/projects', label: 'Projects' },
  { href: '/inspiration', label: 'Inspiration' },
  { href: '/about', label: 'About us' },
] as const;
