# Coral Interiors — website

The new www.coralblinds.in: a static [Astro](https://astro.build) site. No server and no
database. It builds to plain HTML/CSS in `dist/`, so it can be hosted anywhere for free.

Background and decisions: [`docs/01-site-audit.md`](docs/01-site-audit.md).

## Run it locally

```bash
npm install
npm run dev       # http://localhost:4321, live reload
npm run build     # outputs dist/
npm run preview   # serve the built dist/
```

Requires Node 22.12+.

## Where things live

| What | File |
|---|---|
| Phone number (one, for calls and WhatsApp), address, hours, map location | `src/data/site.ts` |
| Photos (file, alt text, real width and height) | `src/data/photos.ts` |
| Products (names, copy, specs, rooms, old URLs) | `src/data/products.ts` |
| FAQ (shown on /faq and the home page, with FAQ structured data) | `src/data/faq.ts` |
| Buying guides (/guides) | `src/data/guides.ts` |
| Areas we serve (/areas, and the business structured data) | `src/data/areas.ts` |
| Colours, font (Inter Tight), spacing | `src/styles/global.css` (`:root` tokens) |
| Pages | `src/pages/` (one file per URL; products come from `products/[slug].astro`) |
| Header / footer / shared blocks | `src/components/` |
| Redirects from old site URLs | `vercel.json` **and** `public/_redirects` (keep both in sync) |

## Adding real photos

Photos are never cropped: every one is shown at its own ratio, so the site needs each
photo's real width and height. To add one:

1. Put the original file in `public/images/…` (no re-encoding).
2. Add it to `src/data/photos.ts` with its `width` and `height`.
3. Point a product at it (`image: photos.<name>` in `src/data/products.ts`) or pass
   `photo={photos.<name>}` to the `<Photo>` component on a page.

Products without a photo show a typographic entry instead of a fake image. The one
exception to "never cropped" is the home page: the hero is a wide band (about 3:1) and the
product slider uses uniform 4:5 cards, so photos there are framed to fit. Product pages
always show the full photo.

## Pages

Products, Collections, Projects, Inspiration and About us are the main menu (`nav` in
`src/data/site.ts`). Motorisation and Commercial are linked from the footer and from the
pages that mention them. Projects shows the photos in `src/data/photos.ts`; add new
installations there and to the `work` list in `src/pages/projects.astro`.
What's still needed is in [`docs/02-photo-shotlist.md`](docs/02-photo-shotlist.md).

## Motion helpers

- `.reveal` fades a block in on scroll; `.reveal-stagger` does the same for each child in turn.
- `<Photo>` wipes in from the bottom (`.reveal--wipe`).
- `<span data-countup="1000" data-suffix="+">1,000+</span>` counts up when it scrolls into view
  (`src/scripts/countup.ts`). Keep the final text inside so it reads correctly without JS.
- The home page "How it works" (`src/components/Process.astro`) plays as a workflow while
  scrolling and ends on the one week turnaround.
- Everything respects the visitor's "reduce motion" setting.

## Brands strip

Edit `src/data/brands.ts`. Put logo files in `public/images/brands/` (SVG or transparent PNG)
and set `logo` on each entry. Brands without a logo show as text.

## Google reviews (live)

The home page shows your Google rating, top reviews and customer photos. Today these are
copied into `src/data/reviews.ts` and rotate on their own. Optionally they can load live from
Google instead, so new reviews appear without editing the site:

1. In [Google Cloud Console](https://console.cloud.google.com), create a project, turn on
   billing, and enable **Maps JavaScript API** and **Places API (New)**.
2. Create an API key. Restrict it to **Websites**: `https://www.coralblinds.in/*`,
   `https://coralblinds.in/*` and your `*.vercel.app` preview URL, and to those two APIs.
3. Find your Place ID with Google's
   [Place ID finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder).
4. On the host, set:
   ```
   PUBLIC_GOOGLE_MAPS_API_KEY=<the key>
   PUBLIC_GOOGLE_PLACE_ID=<optional; defaults to the listing in src/data/site.ts>
   ```
   and redeploy.

Google returns up to 5 reviews (its "most relevant") plus photos from your Business Profile.
The section only calls Google when a visitor scrolls near it, which keeps usage low. Reviews
are a paid field once you go past Google's monthly free allowance, so check current pricing
and set a budget alert in the Cloud Console.

## Search and AI visibility (SEO, AEO, GEO)

- Every page carries structured data for the business (address, map location, hours, phone,
  areas served, the list of services). Product pages add a Service, guides an Article, the
  FAQ a FAQPage. All of it is built from the data files above, so keep those accurate.
- `public/robots.txt` welcomes search engines and AI assistants and points to the sitemap.
- `/llms.txt` is a plain summary of the business for AI tools, generated from the same data.
- `public/og.jpg` is the preview image when the site is shared on WhatsApp or Facebook.
- No prices anywhere on the site, on purpose: every quote follows a free visit.

Off the site, these matter as much:
1. Google Search Console and Bing Webmaster Tools: verify the site, submit
   `https://www.coralblinds.in/sitemap-index.xml`.
2. Google Business Profile: website link set, categories (window treatment store, blinds
   shop, curtain store), weekly photos, reply to every review.
3. Cloudflare: Security / AI Crawl Control should allow GPTBot, OAI-SearchBot,
   ChatGPT-User, PerplexityBot, ClaudeBot and Google-Extended.
4. The same name, address and phone (+91 63629 04441) on Justdial, Sulekha, IndiaMART,
   Bing Places, Apple Business Connect, Facebook and Instagram.

## WhatsApp enquiries

Every WhatsApp button on the site opens the booking form (`/contact#book`). The form needs
every field filled, then opens WhatsApp to +91 63629 04441 with the full request, plus a
line saying where the visitor first found the site (Google, ChatGPT, Facebook and so on).

## Contact form

The form composes a WhatsApp message by default, so it needs no backend. To also receive
enquiries by email, create a free form at [Web3Forms](https://web3forms.com) (or Formspree)
and set these environment variables on the host:

```
PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
PUBLIC_FORM_KEY=<your access key>
```

## Deploying

### Vercel (live)
The site is the `coral-blinds` project in the **Runklub** Vercel team, connected to this repo.
Every push to the production branch redeploys it: https://coral-blinds.vercel.app

To set it up again from scratch:
1. Import this GitHub repo at vercel.com/new. Vercel detects Astro automatically.
2. Add the domain `www.coralblinds.in` (and `coralblinds.in` → redirect to www) under Project → Domains.
3. At the domain registrar (GoDaddy), set the DNS records Vercel shows. **Leave the MX records
   untouched** so email keeps working.

`vercel.json` provides clean URLs (`/about` instead of `/about.html`) and the 301 redirects
from the old site.

### Cloudflare Workers (static assets)
`wrangler.jsonc` serves `dist/` as a Worker named `coral`. In the Cloudflare dashboard:
Workers & Pages → Create → import `joetomryan/coral`, build command `npm run build`,
deploy command `npx wrangler deploy`, variable `NODE_VERSION=22`. Then add
`www.coralblinds.in` and `coralblinds.in` under the Worker's Settings → Domains & Routes.
`public/_redirects` handles the old-site redirects.

### Cloudflare Pages (alternative, same repo, no code changes)
1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect this repo.
2. Build command `npm run build`, output directory `dist`, environment variable `NODE_VERSION=22`.
3. Add the custom domain and update DNS as above.

Cloudflare reads `public/_redirects` and serves clean URLs automatically.

## Still needed from the owner

See §7 of the audit. In short: real photos, logo files, email address, Saturday hours,
confirmation of the product list (Venetian? awnings? shutters?), and the main domain choice.
