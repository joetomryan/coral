// Reviews and photos copied from the Google listing "Coral Window Blinds" (Coral Interiors).
// Shown on the home page when the live Google connection isn't set up.
// Photos go in public/images/reviews/ (JPG or WebP, about 1200px on the long side).

import { photos, type Photo } from './photos';

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
export const googleSummary: { rating: number; count: number } | null = { rating: 4.8, count: 323 };

export const reviews: Review[] = [
  {
    name: 'Shweta Kaul',
    rating: 5,
    when: '4 months ago',
    text: `I have got my study room wooden venettion blinds installed from them. The team was very professional and was always on time. They came with wonderful collection in terms of shades available and patiently understood my needs and provided the best solution.
The installation was done before time and without any follow-ups from my side; which is the biggest plus as a customer.

I am very happy with my decision to go with them.
Thank you again Rumi and team!`,
  },
  {
    // Name was partly cut off in the screenshot; confirm spelling.
    name: 'Liyakhat Shakeel',
    rating: 5,
    when: 'a year ago',
    text: `We tried natural bamboo blinds from several places in Bangalore, but we couldn't find the right quality. Finally, we came across Mr. Rumi, and he had a beautiful collection.

The order process took a bit of time, but the installation was done right on schedule. The end product is absolutely amazing, you won't find this type of quality bamboo blinds anywhere else in Bangalore.

A big appreciation to the installation team as well, the entire process was handled smoothly and professionally.`,
  },
  {
    name: 'Galla Mourya',
    rating: 5,
    when: '2 years ago',
    text: `Thank you for quick turn up and installation. Workmanship in installing the blinds were impressive. Post advance payment they have come took the measurements and installed within 4 days duration for the complete 3 floor house maintaining professionalism.`,
  },
  {
    name: 'Jyoti Siriyala',
    rating: 5,
    when: '2 years ago',
    text: `Wonderful work by coral interiors. Mr Rumi is very kind and polite person he came to our place took measurements & answered all our queries ...as he mentioned within 4 days they installed the blindes. The person who came to install the blindes too is very good at his work .Overall we are highly satisfied with service provided. Everything is perfect beyond our expectation ...good quality blindes at reasonable rate , polite staff ,owner & installation guy . Would highly recommend coral blinds!!`,
  },
  {
    name: 'Sandeep Kumar',
    rating: 5,
    when: '2 years ago',
    text: `Just installed windows blinds from these guys. Blinds quality is good. It provides good protection from Sun light however it doesn't block all lights. Looks cool as well. They provided very competitive rates. They installed on the day they committed, Good! Lots of players in the market but these guys are professional and genuine. Also they don't ask high advance amount which is again a good thing for customers.`,
  },
];

/** Photos from the listing, shown beside the reviews, in rotation order. */
export const reviewPhotos: Photo[] = [
  photos.rollerCourtyard,
  photos.bambooCafe,
  photos.zebraOffice,
  photos.rollerOffice,
  photos.rollerLiving,
];
