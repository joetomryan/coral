// /llms.txt: a plain summary of the business for AI assistants, built from the same
// data as the site so it never goes out of date. No prices.
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { products, categories } from '../data/products';
import { allAreas } from '../data/areas';
import { faqs } from '../data/faq';
import { guides } from '../data/guides';

export const GET: APIRoute = () => {
  const u = (path: string) => `${site.url}${path}`;
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.name} makes and fits made to measure blinds, curtains, smart curtains and shades for homes and workplaces in Bangalore (Bengaluru), India, since ${site.since}. Free home visit and measurement anywhere in Bangalore; about one week from measurement to installation, fitted by our own team.`,
    '',
    '## Contact',
    `- Phone and WhatsApp: ${site.phones.office.display}`,
    `- Studio: ${site.address.line1}, ${site.address.line2}, ${site.address.city} ${site.address.postalCode}, Karnataka, India`,
    `- Hours: ${site.hours.map((h) => `${h.days}, ${h.time}`).join('; ')}`,
    `- Book a free visit: ${u('/contact')}`,
    `- Google Maps: ${site.google.mapsPlaceUrl}`,
    '',
    '## Products',
    ...categories.flatMap((c) => [
      `### ${c.label}`,
      ...products.filter((p) => p.category === c.id).map((p) => `- [${p.name}](${u(`/products/${p.slug}`)}): ${p.summary}`),
    ]),
    '',
    '## Motorisation',
    `- Motorised blinds and smart curtains with Somfy and Lutron motors; remote, wall switch, app and voice control: ${u('/motorisation')}`,
    '',
    '## Areas served',
    `All of Bangalore, including ${allAreas.join(', ')}. Details: ${u('/areas')}`,
    '',
    '## Guides',
    ...guides.map((g) => `- [${g.title}](${u(`/guides/${g.slug}`)}): ${g.description}`),
    '',
    '## Frequently asked questions',
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, '']),
    '## More',
    `- [Projects](${u('/projects')})`,
    `- [Commercial](${u('/commercial')})`,
    `- [About us](${u('/about')})`,
    `- [All questions](${u('/faq')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
