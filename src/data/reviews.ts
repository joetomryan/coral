// Reviews and photos copied from the Google listing "Coral Window Blinds".
// Shown on the home page when the live Google connection isn't set up.
// Photos go in public/images/reviews/ (JPG or WebP, about 1200px on the long side).

export interface Review {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** As Google shows it, e.g. "2 months ago" or "March 2026". */
  when: string;
  text: string;
  /** Optional photo the reviewer attached, e.g. '/images/reviews/anita-1.jpg'. */
  photo?: string;
}

/** Overall rating and count as shown on Google. Leave null until copied. */
export const googleSummary: { rating: number; count: number } | null = null;

export const reviews: Review[] = [];

/** Extra photos from the listing, e.g. '/images/reviews/photo-1.jpg'. */
export const reviewPhotos: string[] = [];
