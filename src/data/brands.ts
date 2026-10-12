// Brands shown in the moving strip on the home page.
// Add client or partner brands here. For a logo, put the file in public/images/brands/
// (SVG or transparent PNG works best) and set `logo: '/images/brands/name.svg'`.
// Without a logo the name is shown as text.
export interface Brand {
  name: string;
  logo?: string;
}

export const brands: Brand[] = [
  { name: 'Somfy' },
  { name: 'Lutron' },
  { name: 'Uni-Soleil' },
];
