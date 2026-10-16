// Single source of truth for business details. ⚠ items still need the owner's confirmation
// (see docs/01-site-audit.md §7).
export const site = {
  name: 'Coral Interiors',
  legalName: 'Coral Interiors',
  url: 'https://www.coralblinds.in',
  since: 2002,
  tagline: 'Made to measure blinds and curtains for homes and workplaces in Bengaluru.',
  // One business number for calls and WhatsApp.
  phones: {
    office: { display: '+91 63629 04441', tel: '+916362904441' },
  },
  whatsapp: '916362904441',
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
  // Studio location (from the Google Maps listing), for maps and structured data.
  geo: { latitude: 13.060018, longitude: 77.6463851 },
  google: {
    placeId: 'ChIJF6cg9FUXrjsRhoLrpFOav9E',
    reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJF6cg9FUXrjsRhoLrpFOav9E',
    writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJF6cg9FUXrjsRhoLrpFOav9E',
    mapsPlaceUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJF6cg9FUXrjsRhoLrpFOav9E',
  },
  social: {
    facebook: 'https://www.facebook.com/Coralblinds/',
  },
  proof: [
    { value: `${new Date().getFullYear() - 2002}+`, label: 'Years making blinds' },
    { value: '1,000+', label: 'Homes fitted' },
    { value: '1 week', label: 'Measure to fit' },
  ],
} as const;

// WhatsApp enquiries always go through the booking form, which builds the full message.
export const enquiryLink = (product?: string) => (product ? `/contact?product=${product}#book` : '/contact#book');

export const nav = [
  { href: '/products', label: 'Products' },
  { href: '/collections', label: 'Collections' },
  { href: '/projects', label: 'Projects' },
  { href: '/inspiration', label: 'Inspiration' },
  { href: '/about', label: 'About us' },
] as const;
