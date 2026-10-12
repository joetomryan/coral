# Coral Blinds — website

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
| Phone numbers, address, hours, WhatsApp, email | `src/data/site.ts` |
| Products (names, copy, specs, rooms, old URLs) | `src/data/products.ts` |
| Colours, fonts, spacing | `src/styles/global.css` (`:root` tokens) |
| Pages | `src/pages/` (one file per URL; products come from `products/[slug].astro`) |
| Header / footer / shared blocks | `src/components/` |
| Redirects from old site URLs | `vercel.json` **and** `public/_redirects` (keep both in sync) |

## Adding real photos

Every grey striped panel says which shot belongs there, for example "Photo · Hero — living room".
To use a real photo:

1. Put the image in `public/images/…` (JPG/WebP, about 2400px on the long side for the hero and
   about 1600px elsewhere).
2. Pass `src="/images/…"` to that `<Photo>` component. The placeholder disappears.

## Contact form

The form composes a WhatsApp message by default, so it needs no backend. To also receive
enquiries by email, create a free form at [Web3Forms](https://web3forms.com) (or Formspree)
and set these environment variables on the host:

```
PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
PUBLIC_FORM_KEY=<your access key>
```

## Deploying

### Vercel (current plan)
1. Import this GitHub repo at vercel.com/new. Vercel detects Astro automatically.
2. Add the domain `www.coralblinds.in` (and `coralblinds.in` → redirect to www) under Project → Domains.
3. At the domain registrar (GoDaddy), set the DNS records Vercel shows. **Leave the MX records
   untouched** so email keeps working.

`vercel.json` provides clean URLs (`/about` instead of `/about.html`) and the 301 redirects
from the old site.

### Cloudflare Pages (fallback, same repo, no code changes)
1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect this repo.
2. Build command `npm run build`, output directory `dist`, environment variable `NODE_VERSION=22`.
3. Add the custom domain and update DNS as above.

Cloudflare reads `public/_redirects` and serves clean URLs automatically.

## Still needed from the owner

See §7 of the audit. In short: real photos, logo files, email address, Saturday hours,
confirmation of the product list (Venetian? awnings? shutters?), and the main domain choice.
