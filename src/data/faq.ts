// Questions customers ask most, answered only with facts we stand behind.
// No prices: every quote follows a free visit. Used by /faq and the home page,
// and turned into FAQPage structured data so search and AI tools can quote it.
import { site } from './site';

export interface Faq {
  q: string;
  a: string;
  /** Show on the home page. */
  home?: boolean;
}

export const faqs: Faq[] = [
  {
    q: 'Do you offer a free home visit in Bangalore?',
    a: `Yes. We visit homes and offices anywhere in Bangalore, measure every window and bring fabric samples so you can see them in your own light. The visit is free and there is no obligation. Book it through the form on our contact page or call ${site.phones.office.display}.`,
    home: true,
  },
  {
    q: 'How long does it take from measurement to installation?',
    a: 'About one week. We measure on the first visit, you choose fabrics and operation, your blinds or curtains are made to measure in about five days, and our own team fits them.',
    home: true,
  },
  {
    q: 'How do I get a quote?',
    a: 'After the free visit we send an itemised quote for your exact windows, fabrics and operation. Because everything is made to measure, we quote once we have measured.',
    home: true,
  },
  {
    q: 'Do you make motorised blinds and smart curtains?',
    a: 'Yes. We fit motorised blinds and curtains with motors from Somfy and Lutron. They can run from a remote, a wall switch, a phone app or a voice assistant, and can be set to open and close on a schedule.',
    home: true,
  },
  {
    q: 'Which areas of Bangalore do you cover?',
    a: 'All of Bangalore. Our studio is in Kothanur on Hennur Bagalur Main Road, and we regularly work across Hennur, Hebbal, Kalyan Nagar, Whitefield, Indiranagar, Koramangala, HSR Layout, Electronic City and beyond.',
    home: true,
  },
  {
    q: 'What is the difference between blackout, dim out and sunscreen fabric?',
    a: 'Blackout blocks almost all light and suits bedrooms and media rooms. Dim out softens light without making the room dark. Sunscreen cuts glare and heat while keeping the view outside, which suits living rooms and offices.',
  },
  {
    q: 'Should I choose zebra blinds or roller blinds?',
    a: 'Roller blinds are a single panel of fabric that rolls away to nothing, clean and simple. Zebra blinds have alternating sheer and solid bands, so you can let in soft light or close for privacy without raising the blind. Zebra suits rooms where light changes through the day.',
  },
  {
    q: 'Which blinds work in bathrooms and kitchens?',
    a: 'Venetian blinds with moisture resistant slats handle steam and splashes well and wipe clean in seconds, which makes them the usual choice for kitchens and bathrooms.',
  },
  {
    q: 'What can I use on a balcony during the monsoon?',
    a: 'Clear or tinted outdoor PVC blinds keep rain, wind and dust out so the balcony stays usable. For covered sit outs, bamboo blinds soften the sun while keeping air moving.',
  },
  {
    q: 'Do you take on office and commercial projects?',
    a: 'Yes. We work on offices, hotels, hospitals, schools, shops and factories, from a single cabin to whole floors, including fire retardant fabrics, printed blinds and PVC strip curtains.',
  },
  {
    q: 'Who installs the blinds?',
    a: 'Our own team. The people who measure are the people who fit, and we stay on call if anything needs adjusting after installation.',
  },
  {
    q: 'Where is your studio and when is it open?',
    a: `Our studio is at ${site.address.line1}, ${site.address.line2}, ${site.address.city} ${site.address.postalCode}. It is open ${site.hours.map((h) => `${h.days}, ${h.time}`).join('; ')}.`,
  },
];

export const faqSchema = (items: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
