// Product catalogue. Copy is drawn from the old site where it had real detail
// (vertical, wooden, skylight, industrial); elsewhere it is deliberately general
// until the owner confirms fabrics, sizes and prices.

import { photos, type Photo } from './photos';

export type Room = 'living' | 'bedroom' | 'kids' | 'kitchen' | 'bathroom' | 'office' | 'balcony';

export const rooms: { id: Room; label: string }[] = [
  { id: 'living', label: 'Living room' },
  { id: 'bedroom', label: 'Bedroom' },
  { id: 'kids', label: 'Kids’ room' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bathroom', label: 'Bathroom' },
  { id: 'office', label: 'Office' },
  { id: 'balcony', label: 'Balcony' },
];

export type Category = 'fabric' | 'natural' | 'slatted' | 'outdoor';

export const categories: { id: Category; label: string; blurb: string }[] = [
  { id: 'fabric', label: 'Fabric blinds', blurb: 'Soft, tailored control over light and privacy.' },
  { id: 'natural', label: 'Natural textures', blurb: 'Woven wood and bamboo for warmth and grain.' },
  { id: 'slatted', label: 'Slatted blinds', blurb: 'Precise, tilting control for busy rooms.' },
  { id: 'outdoor', label: 'Outdoor & industrial', blurb: 'Built for balconies, weather and doorways.' },
];

export interface Product {
  slug: string;
  name: string;
  category: Category;
  summary: string;
  intro: string;
  rooms: Room[];
  features: string[];
  specs?: { label: string; value: string }[];
  motorised: boolean;
  /** Real photo of this blind type, from src/data/photos.ts. */
  image?: Photo;
  /** Old site URL(s) this page replaces — used for redirects. */
  legacy?: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: 'roller-blinds',
    image: photos.rollerLiving,
    name: 'Roller Blinds',
    category: 'fabric',
    summary: 'Clean, flat fabric that rolls away to nothing.',
    intro:
      'The quietest way to dress a window. A single panel of fabric on a slim roller. Choose blackout for bedrooms, or sunscreen for living spaces where you still want the view.',
    rooms: ['living', 'bedroom', 'kitchen', 'office'],
    features: [
      'Blackout, dim out and sunscreen fabrics',
      'Chain operated or motorised',
      'Optional cassette to hide the roller',
      'Fits inside or outside the window recess',
    ],
    motorised: true,
    featured: true,
  },
  {
    slug: 'zebra-blinds',
    image: photos.zebraOffice,
    name: 'Zebra Blinds',
    category: 'fabric',
    summary: 'Two layers of alternating bands for day and night control.',
    intro:
      'Alternating sheer and solid bands slide past each other, so one blind moves from soft filtered daylight to full privacy without ever lifting it.',
    rooms: ['living', 'bedroom', 'office'],
    features: [
      'Adjust light without raising the blind',
      'Sheer and opaque bands in one fabric',
      'Chain operated or motorised',
      'Compact headrail with matching cassette',
    ],
    motorised: true,
    featured: true,
  },
  {
    slug: 'roman-blinds',
    name: 'Roman Blinds',
    category: 'fabric',
    summary: 'Soft, tailored folds with the feel of a curtain.',
    intro:
      'Fabric that stacks into neat horizontal folds as it rises. Roman blinds bring the softness of curtains with a cleaner line, in the fabric of your choice.',
    rooms: ['living', 'bedroom', 'kids'],
    features: [
      'Wide choice of decorative fabrics',
      'Lined or unlined, with blackout lining available',
      'Flat or relaxed fold styles',
      'Cord or chain operation',
    ],
    motorised: true,
    legacy: ['/Roman.html'],
    featured: true,
  },
  {
    slug: 'vertical-blinds',
    name: 'Vertical Blinds',
    category: 'fabric',
    summary: 'Tall, turning louvres for wide windows and sliding doors.',
    intro:
      'Vertical louvres that rotate and draw to one side. The practical answer for large glazing, sliding doors and offices that need precise glare control.',
    rooms: ['office', 'living'],
    features: [
      'Blackout, dim out, translucent and solar reflective fabrics',
      'Fire retardant treatment available',
      'Fabrics sourced from Europe and Asia',
      'Mechanism and components by Uni-Soleil, Taiwan',
    ],
    specs: [
      { label: 'Headrail', value: '44 × 35 mm aluminium alloy box section' },
      { label: 'Bottom weight', value: '2 mm, to reduce sway' },
      { label: 'Mechanism', value: 'Uni-Soleil (Taiwan)' },
    ],
    motorised: true,
    legacy: ['/Vertical.html'],
    featured: true,
  },
  {
    slug: 'wooden-blinds',
    name: 'Wooden Blinds',
    category: 'natural',
    summary: 'Woven wood with real grain and warmth.',
    intro:
      'Natural woven wood that filters light into warm, textured patterns. Treated to resist fungus and termites, so it lasts through Bengaluru’s monsoon.',
    rooms: ['living', 'bedroom', 'balcony'],
    features: [
      'Six weaves and 26 colours',
      'Coating that resists fungus and termites',
      'Roll up or Roman style operation',
    ],
    specs: [
      { label: 'Weaves', value: '6' },
      { label: 'Colours', value: '26' },
      { label: 'Maximum width', value: '240 cm' },
      { label: 'Operation', value: 'Roll up or Roman style' },
    ],
    motorised: false,
    legacy: ['/Wooden.html'],
    featured: true,
  },
  {
    slug: 'bamboo-blinds',
    image: photos.bambooCafe,
    name: 'Bamboo Blinds',
    category: 'natural',
    summary: 'Light, natural and made for open air spaces.',
    intro:
      'Fine bamboo slats that soften harsh sun while keeping air moving. Just as good on balconies, verandas and sit outs as indoors.',
    rooms: ['balcony', 'living'],
    features: [
      'Natural and stained finishes',
      'Light filtering, breathable weave',
      'Roll up operation',
      'Indoor and covered outdoor use',
    ],
    motorised: false,
    legacy: ['/Bamboo.html'],
    featured: true,
  },
  {
    slug: 'venetian-blinds',
    name: 'Venetian Blinds',
    category: 'slatted',
    summary: 'Tilting slats for exact control of light.',
    intro:
      'Horizontal slats that tilt to direct light exactly where you want it. Easy to wipe clean, which makes them a natural fit for kitchens, bathrooms and offices.',
    rooms: ['kitchen', 'bathroom', 'office'],
    features: [
      'Tilt to angle light and privacy',
      'Moisture resistant slat options',
      'Easy to clean',
      'Cord or wand operation',
    ],
    motorised: false,
  },
  {
    slug: 'skylight-blinds',
    name: 'Skylight Blinds',
    category: 'fabric',
    summary: 'Motorised shading for glass you can’t reach.',
    intro:
      'Skylights come in unusual shapes and sit far out of reach. Our motorised skylight systems are made to fit them and run from a remote, a wall switch or your phone.',
    rooms: ['living', 'office'],
    features: [
      'Made for unusual shapes and sizes',
      'Remote, wall switch or smartphone control',
      'Blackout or light filtering fabrics',
    ],
    motorised: true,
    legacy: ['/Skylight.html'],
  },
  {
    slug: 'panel-blinds',
    name: 'Panel Blinds',
    category: 'fabric',
    summary: 'Wide sliding panels for big glass and room dividers.',
    intro:
      'Broad fabric panels that glide on a slim track. A calm, architectural choice for floor to ceiling glass, sliding doors and dividing open plan spaces.',
    rooms: ['living', 'office'],
    features: [
      'Wide panels on a multichannel track',
      'Ideal for sliding doors and partitions',
      'Mix sheer and solid panels',
    ],
    motorised: false,
    legacy: ['/panel.html'],
  },
  {
    slug: 'printed-blinds',
    name: 'Printed Blinds',
    category: 'fabric',
    summary: 'Your artwork, photograph or brand on a blind.',
    intro:
      'Fully customisable roller blinds printed with any design you choose: a family photograph, a pattern for a child’s room, or your brand for a shopfront or office.',
    rooms: ['kids', 'office', 'living'],
    features: [
      'Print any image or pattern',
      'Brand graphics for shops and offices',
      'Blackout or light filtering base fabric',
    ],
    motorised: true,
    legacy: ['/printed.html'],
  },
  {
    slug: 'outdoor-pvc-blinds',
    name: 'Outdoor PVC Blinds',
    category: 'outdoor',
    summary: 'Keep the rain out, keep the balcony.',
    intro:
      'Clear or tinted PVC roller blinds that close off a balcony or sit out against monsoon rain, wind and dust, so the space stays usable all year.',
    rooms: ['balcony'],
    features: [
      'Clear and tinted PVC',
      'Shields from rain, wind and dust',
      'Roll up neatly when not needed',
    ],
    motorised: false,
  },
  {
    slug: 'industrial-strip-curtains',
    name: 'Industrial Strip Curtains',
    category: 'outdoor',
    summary: 'PVC strip curtains for busy doorways.',
    intro:
      'Transparent, flexible PVC strips for factory and commercial doorways where people and goods need to pass freely. They let light through while holding back heat, cold, noise, humidity, dust, insects and draughts.',
    rooms: ['office'],
    features: [
      'Uninterrupted passage for people and forklifts',
      'Holds back heat, cold, dust, insects and draughts',
      'Transparent soft PVC lets light through and limits UV',
    ],
    motorised: false,
    legacy: ['/industrial.html'],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const roomLabel = (id: Room) => rooms.find((r) => r.id === id)?.label ?? id;
export const bestFor = (p: Product) => p.rooms.map(roomLabel).join(', ');
