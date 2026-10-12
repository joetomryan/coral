// Real photographs, with their true dimensions. Every place a photo is shown reads
// the ratio from here so nothing is ever cropped. Add new photos to this list.
export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export const photos = {
  bambooCafe: {
    src: '/images/reviews/bamboo-cafe.webp',
    alt: 'Bamboo blinds along the windows of a café, with afternoon light coming through the weave',
    width: 1360,
    height: 1020,
    caption: 'Bamboo blinds, café',
  },
  rollerCourtyard: {
    src: '/images/reviews/roller-courtyard.webp',
    alt: 'Beige roller blinds over a tall courtyard window, with plants and a stone Buddha below',
    width: 765,
    height: 1020,
    caption: 'Roller blinds, home courtyard',
  },
  rollerOffice: {
    src: '/images/reviews/roller-office.webp',
    alt: 'Grey roller blinds half lowered in a conference room',
    width: 1359,
    height: 1020,
    caption: 'Roller blinds, conference room',
  },
  rollerLiving: {
    src: '/images/reviews/roller-living.webp',
    alt: 'Orange roller blinds in a living room with cane armchairs',
    width: 1020,
    height: 1020,
    caption: 'Roller blinds, living room',
  },
  zebraOffice: {
    src: '/images/reviews/zebra-office.webp',
    alt: 'Black and white zebra blinds across the windows of a meeting room',
    width: 1360,
    height: 765,
    caption: 'Zebra blinds, meeting room',
  },
} satisfies Record<string, Photo>;
