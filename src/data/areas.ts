// Localities we visit. We cover all of Bangalore; these are named so people (and search
// and AI tools) can match their own area. Keep to places the team really travels to.
export const areaGroups = [
  {
    zone: 'North and East, near our studio',
    places: [
      'Hennur',
      'Kothanur',
      'Hebbal',
      'HRBR Layout',
      'Kalyan Nagar',
      'Banaswadi',
      'Kammanahalli',
      'RT Nagar',
      'Thanisandra',
      'Hegde Nagar',
      'Yelahanka',
    ],
  },
  {
    zone: 'East and South',
    places: [
      'Indiranagar',
      'Whitefield',
      'Marathahalli',
      'Sarjapur Road',
      'Koramangala',
      'HSR Layout',
      'Electronic City',
      'JP Nagar',
      'Jayanagar',
    ],
  },
  {
    zone: 'Central and West',
    places: ['MG Road', 'Frazer Town', 'Malleshwaram', 'Rajajinagar', 'Sadashivanagar', 'Yeshwanthpur'],
  },
];

export const allAreas = areaGroups.flatMap((g) => g.places);
