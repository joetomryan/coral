// Short buying guides. Plain, factual advice that answers what people actually ask,
// which is what search and AI tools quote. No prices. Each guide links to products.

export interface Guide {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  products: string[];
  updated: string;
}

export const guides: Guide[] = [
  {
    slug: 'zebra-vs-roller-blinds',
    title: 'Zebra blinds or roller blinds: which suits your room?',
    description:
      'How zebra and roller blinds differ in light control, privacy and look, and which one to choose for living rooms, bedrooms and offices in Bangalore.',
    intro:
      'Zebra and roller blinds are the two most asked about blinds on our home visits. Both are fabric blinds on a slim roller, and both can be chain operated or motorised. The difference is in how they handle light.',
    sections: [
      {
        heading: 'Roller blinds: one clean panel',
        body: [
          'A roller blind is a single piece of fabric that rolls up into a compact tube or cassette. Lowered, it gives an even, uninterrupted surface. Raised, it almost disappears.',
          'Because the fabric is one panel, the light you get depends on the fabric you pick: blackout for darkness, dim out to soften, sunscreen to cut glare while keeping the view.',
        ],
      },
      {
        heading: 'Zebra blinds: light control without lifting',
        body: [
          'A zebra blind has two layers of fabric with alternating sheer and solid bands. Sliding the bands past each other moves the blind from soft, filtered daylight to full privacy, without raising it at all.',
          'This makes zebra blinds ideal for rooms where the light changes through the day, such as west facing living rooms and home offices.',
        ],
      },
      {
        heading: 'Which to choose',
        body: [
          'Choose roller blinds for a minimal look, for bedrooms with blackout fabric, and for wide windows where you want one calm surface.',
          'Choose zebra blinds when you want daylight and privacy at the same time, or when you adjust the light often.',
          'On a free visit we bring samples of both so you can see them on your own windows.',
        ],
      },
    ],
    products: ['roller-blinds', 'zebra-blinds'],
    updated: '2026-10-16',
  },
  {
    slug: 'blackout-dim-out-sunscreen',
    title: 'Blackout, dim out or sunscreen: choosing fabric by room',
    description:
      'What blackout, dim out and sunscreen blind fabrics do, and which one works best for bedrooms, living rooms, kitchens and offices.',
    intro:
      'The fabric decides how a blind feels in a room far more than the mechanism does. Most of our fabrics fall into three families, and each suits different rooms.',
    sections: [
      {
        heading: 'Blackout',
        body: [
          'Blackout fabric blocks almost all light. It is the right choice for bedrooms, nurseries and media rooms, and for anyone who works night shifts or wakes with the early sun.',
          'For the darkest result, pair a blackout roller or Roman blind with a cassette, or layer blackout curtains over a blind.',
        ],
      },
      {
        heading: 'Dim out',
        body: [
          'Dim out fabric softens light without making the room dark. It suits living rooms, guest rooms and dining areas where you want privacy and a gentle glow during the day.',
        ],
      },
      {
        heading: 'Sunscreen',
        body: [
          'Sunscreen fabric has a fine open weave that cuts glare and heat while keeping the view outside. It is the usual choice for offices, home studies and living rooms with screens.',
          'Darker sunscreen colours usually give a clearer view out; lighter colours reflect more heat.',
        ],
      },
      {
        heading: 'A simple rule by room',
        body: [
          'Bedrooms: blackout. Living rooms: dim out or sunscreen. Offices and studies: sunscreen. Kitchens and bathrooms: moisture resistant Venetian blinds. If a room needs two moods, use zebra blinds or layer a sheer curtain with a blackout blind.',
        ],
      },
    ],
    products: ['roller-blinds', 'roman-blinds', 'zebra-blinds', 'curtains'],
    updated: '2026-10-16',
  },
  {
    slug: 'blinds-for-bangalore-monsoon',
    title: 'Blinds that cope with the Bangalore monsoon',
    description:
      'Choosing blinds for balconies, sit outs and humid rooms in Bangalore: outdoor PVC, bamboo, fungus resistant wooden blinds and easy to clean fabrics.',
    intro:
      'Bangalore’s monsoon brings driving rain, damp air and weeks of humidity. The right blinds keep balconies usable and stop fabric and wood from spoiling.',
    sections: [
      {
        heading: 'Balconies and open sit outs',
        body: [
          'Clear or tinted outdoor PVC blinds close off a balcony against rain, wind and dust while letting light through. They roll up neatly when the weather clears, so the balcony stays a room you use all year.',
        ],
      },
      {
        heading: 'Covered verandas',
        body: [
          'Bamboo blinds soften harsh sun and keep air moving. They are best where they are sheltered from direct rain.',
        ],
      },
      {
        heading: 'Humid rooms indoors',
        body: [
          'Our wooden blinds are treated to resist fungus and termites, which matters through a long monsoon. In kitchens and bathrooms, moisture resistant Venetian blinds wipe clean easily.',
        ],
      },
      {
        heading: 'Plan before the rains',
        body: [
          'Measurement to installation takes about a week, so booking a visit a little before the monsoon sets in means your balcony is ready when the first heavy rain arrives.',
        ],
      },
    ],
    products: ['outdoor-pvc-blinds', 'bamboo-blinds', 'wooden-blinds', 'venetian-blinds'],
    updated: '2026-10-16',
  },
  {
    slug: 'motorised-blinds-and-smart-curtains',
    title: 'Motorised blinds and smart curtains: a simple guide',
    description:
      'How motorised blinds and smart curtains work, how you control them (remote, wall switch, app, voice) and what to plan before a home visit in Bangalore.',
    intro:
      'Motorised blinds and curtains move at the touch of a button, on a schedule, or by voice. They are a natural fit for tall windows, skylights and rooms where you want light to change on its own.',
    sections: [
      {
        heading: 'How they work',
        body: [
          'A quiet motor sits inside the blind’s roller or the curtain track. We use motors from Somfy and Lutron, two of the best known names in motorised shading.',
        ],
      },
      {
        heading: 'Ways to control them',
        body: [
          'A handheld remote, a wall switch, a phone app or a voice assistant. Many people set schedules, for example opening the bedroom curtains with the sunrise and closing the living room blinds at dusk.',
        ],
      },
      {
        heading: 'Where motorisation helps most',
        body: [
          'Skylights and windows that are hard to reach, double height living rooms, wide spans of glass with several blinds that should move together, and bedrooms where you want light to wake you gently.',
        ],
      },
      {
        heading: 'What to plan before the visit',
        body: [
          'Think about which windows you want to control together and how you would like to control them. We check power points and fitting space on the visit and recommend the right motor and control for each window.',
        ],
      },
    ],
    products: ['smart-curtains', 'roller-blinds', 'skylight-blinds', 'zebra-blinds'],
    updated: '2026-10-16',
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
