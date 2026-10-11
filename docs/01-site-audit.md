# Coral Blinds — Website Audit & Redesign Brief

_Audit date: 11 Oct 2026 · Current site: https://www.coralblinds.in · Design reference: https://bandalux.com/en/_

> **How this audit was done.** The cloud environment's network policy blocked direct
> access to `coralblinds.in` and `bandalux.com`, so the content below was gathered from
> search-engine indexes of the live pages and third-party listings (Facebook, IndiaMART,
> Justdial, YellowPages, IndiaInfo). Everything marked **⚠ verify** needs a check against
> the live site or with the owner. A second pass (raw HTML, images, page speed, exact email)
> needs those two domains allowed in the environment's network settings.

---

## 1. Business facts (source of truth for the new site)

| Item | Value | Notes |
|---|---|---|
| Brand | **CORAL Blinds** | Trades as **Coral Interiors** on IndiaMART / Justdial / contact page |
| Tagline (current) | "Since 2002, specialises in custom made, affordable quality blinds, awnings and shutters for commercial and domestic" | About page |
| Claim | "One of India's largest providers of window blind solutions" | ⚠ verify — risky claim, consider softening |
| Founded | 2002 (own site) | Justdial says 2016, IndiaMART GST reg. 2017 — likely when Coral Interiors was registered. ⚠ confirm |
| Legal | Sole proprietorship, up to 10 staff | IndiaMART |
| Address | 12/2, 2nd Floor, Hennur–Bagalur Main Road, Opp. Uttam Sagar Gardenia, Kothanur, Bengaluru 560077 | Current site spells it "Bangaore" / "Baglur" |
| Phone (office) | +91 63629 04441 | |
| Phone (mobile) | +91 98866 72792 | Also on YellowPages |
| Other number seen | +91 74833 11222 | On a third-party listing ⚠ confirm or remove |
| Email | Present on contact page but obfuscated in indexes | ⚠ get from owner |
| Hours | Mon–Fri, 9:30 AM – 6:30 PM | ⚠ confirm Saturday (most customers visit weekends) |
| Facebook | facebook.com/Coralblinds (~449 likes) | Instagram not found ⚠ |
| Ratings | 4.7★ from 27 reviews (IndiaInfo aggregate) | Google Business Profile not confirmed ⚠ |
| Hardware partners | Uni-Soleil (Taiwan) mechanisms; Somfy (France) & Lutron (USA) motors | From vertical page + IndiaMART listing |
| Home-page claims | "Satisfaction guarantee", "Blinds delivered in 5 days", "1,000+ homes serviced" | Good proof points — keep if true |
| Other business lines | Modular kitchens, UPVC windows, flush doors (Coral Interiors) | Decide: in or out of scope |

---

## 2. Current site inventory

Static `.html` template site (not a builder), on GoDaddy hosting.

| URL | Title tag | Content found |
|---|---|---|
| `/` | "Blinds" | Rotating banner ("SPCIAL offer on Vertical & PVC Roller blinds", contact button), service list, "Latest Blinds", "Roman Blinds" heading, testimonials |
| `/about.html` | "About Us - Blinds" | Since-2002 story, "one of India's largest" claim |
| `/contact.html` | "Contact Us - Blinds" | Address, 2 phones, email, hours |
| `/Vertical.html` | "Vertical - Blinds" | Blackout / dim-out / translucent / solar-reflective / FR fabrics from Europe & Asia; Uni-Soleil mechanism; 44×35 mm aluminium headrail; 2 mm bottom weight |
| `/Wooden.html` | "Blinds" | 6 weaves, 26 colours, anti-fungal/anti-termite coating, roll-up & Roman operation, widths up to 240 cm |
| `/Bamboo.html` | "Bamboo - Blinds" | Bamboo blinds |
| `/Roman.html` | "Roman - Blinds" | "Roman blinds with different fabric" |
| `/Skylight.html` | "Skylights - Blinds" | Motorised skylight systems; remote / wall switch / smartphone; odd shapes & sizes |
| `/printed.html` | "Printed - Blinds" | Fully customisable — print your own design |
| `/industrial.html` | "Industrial - Blinds" | PVC strip curtains for factory/commercial doorways; protects against heat, cold, noise, humidity, dust, insects, drafts |
| `/panel.html` | "Panel - Blinds" | Panel blinds |
| `coralblinds.com/motorized.html` | "Blinds" | Motorised blinds: switch/remote/voice; battery note |

Listed in nav / Facebook but **no indexed page found**: Roller, Zebra, PVC (outdoor), Venetian, Awnings, Shutters.

---

## 3. Problems with the current site

### Credibility (the biggest issue)
- **Template leftovers**: banner shows *Los Angeles, Chicago, New York* — a Bengaluru business looks fake instantly.
- **Typos**: "SPCIAL", "everythink", "Bangaore", "Baglur".
- Unverifiable superlative ("one of India's largest").
- Inconsistent founding year and brand name across the web (Coral Blinds vs Coral Interiors; 2002 vs 2016).
- Testimonials with no names/photos/source.

### SEO
- Title tags are just "Blinds" / "X - Blinds" — no brand, no city. Should be e.g. *"Motorised Roller Blinds in Bengaluru | Coral Blinds"*.
- Two domains (`coralblinds.in` and `coralblinds.com`) serving overlapping content → duplicate content, split ranking. Pick one canonical, 301 the other.
- Mixed-case file names (`Vertical.html` vs `printed.html`) → fragile URLs.
- Missing pages for high-search products (Roller, Zebra, Venetian, Motorised, Outdoor/PVC) and no "blinds in [area]" local content.
- No evidence of `LocalBusiness` schema, sitemap, or Google Business Profile link.

### UX / conversion
- No single, obvious action. The business needs **one CTA everywhere: "Book a free home measurement"** (+ WhatsApp).
- Product pages are thin specs with no photos-in-context, no "which blind is right for my room" guidance.
- Hours Mon–Fri only shown; weekend visitors bounce.

### Technical (to confirm on second pass)
- Image weight, mobile layout, Core Web Vitals, HTTPS/redirects, broken links — need direct access.

---

## 4. What to borrow from Bandalux

Bandalux is a Spanish manufacturer; their site works because it sells **the room, not the mechanism**.

| Bandalux pattern | Coral adaptation |
|---|---|
| Hero: one line ("Transform your spaces") + full-bleed interior photo + one button ("View all products") | "Light, shaped for your home." + photo of a Bengaluru interior + "Book free measurement" |
| Nav: Products · Collections · Projects · Inspiration (+ About, Contact in a slim top bar) | Products · Motorisation · Projects · About · Contact |
| Audience split: Homeowners / Contract (professionals) / Distributors | **Homes** / **Offices & Commercial** (architects, builders, hotels, factories) |
| Product grid by system (roller, banded, Roman, pleated, venetian, vertical, awnings, zip screens) | Roller · Zebra · Roman · Vertical · Wooden · Bamboo · Venetian · Skylight · Panel · Printed · Outdoor PVC · Industrial strip |
| Collections = fabric families (blackout, screen, wooden venetian…) | Fabric families: Blackout · Dim-out · Sheer/Translucent · Sunscreen · FR-rated |
| Room-based browsing ("Private" configurator) | "Shop by room": Living · Bedroom · Kids · Kitchen · Office · Balcony |
| Inspiration / Projects gallery | Real Coral installs (need 15–30 good photos) |
| Footer groups: Discover · About · Help | Products · Company · Help + address/map/WhatsApp |

**Visual language**: lots of white/warm-off-white space, one neutral serif or refined sans for headings, small uppercase labels, large photography, almost no colour except a single accent (a muted coral works naturally for the brand name), no carousels, no stock icons.

---

## 5. Proposed sitemap (v1)

```
/                         Home
/products                 All products (grid)
/products/roller-blinds   … one page per product (12)
/motorisation             Somfy / Lutron, smart home, voice
/commercial               Offices, hotels, hospitals, factories (+ industrial strip curtains)
/projects                 Gallery of real installs
/about                    Story since 2002, process, partners
/contact                  Form, WhatsApp, map, hours
```

Every page: sticky "Book free measurement" + floating WhatsApp button.
Each product page: hero photo → 3-line pitch → where it suits → fabric/colour options → operation (manual/motorised) → specs → photos → CTA.

---

## 6. Hosting: GoDaddy → free hosting

**Short answer: yes, you can stop paying for hosting — but Vercel's free tier isn't the right one for a business.**

- **Vercel Hobby (free) is for "non-commercial, personal use only."** A company website that generates leads counts as commercial, which requires Vercel Pro (~US$20/month ≈ ₹1,700/month) — more than you pay now.
- **Cloudflare Pages** or **Netlify** free tiers allow business sites, include HTTPS + global CDN, and are more than enough for a static brochure site like this. **Recommendation: Cloudflare Pages.**
- **You still pay for the domain.** Hosting goes to ₹0, but `coralblinds.in` renewal (roughly ₹700–1,000/yr) continues wherever it's registered. Check whether the ₹800 is hosting, domain, or both.
- **Email check before moving:** if `@coralblinds.in` email runs on GoDaddy, keep the MX records when changing DNS, or email breaks.
- **Contact form** on static hosting: a free form service (Web3Forms / Formspree) or just WhatsApp + `tel:` links.

Migration = build new site → deploy to Cloudflare Pages → point domain DNS → 301 old `.html` URLs to new URLs → cancel GoDaddy hosting (keep domain until transferred).

---

## 7. What I need from you

1. **Photos** — real installs, the showroom, the team. This makes or breaks a "premium" look.
2. **Logo** files (SVG/PNG) — or confirm we redesign the wordmark.
3. **Confirm**: email, Saturday hours, the 74833 11222 number, 2002 vs later, which products you actually sell (Venetian? Awnings? Shutters?).
4. **Scope**: blinds only, or also modular kitchens / UPVC (Coral Interiors)?
5. **Domain**: `.in` or `.com` as the main one? Who has the GoDaddy login?
6. **Network**: allow `coralblinds.in`, `coralblinds.com`, `bandalux.com` in this cloud environment so I can pull the existing images and full page text.

---

### Sources
- [coralblinds.in](https://coralblinds.in/) · [About](https://www.coralblinds.in/about.html) · [Contact](https://coralblinds.in/contact.html) · [Vertical](https://coralblinds.in/Vertical.html) · [Wooden](https://coralblinds.in/Wooden.html) · [Bamboo](https://coralblinds.in/Bamboo.html) · [Roman](https://www.coralblinds.in/Roman.html) · [Skylight](https://coralblinds.in/Skylight.html) · [Printed](https://coralblinds.in/printed.html) · [Industrial](https://www.coralblinds.in/industrial.html) · [Panel](https://coralblinds.in/panel.html) · [coralblinds.com/motorized](https://www.coralblinds.com/motorized.html)
- [Facebook – Coral Blinds](https://www.facebook.com/Coralblinds/) · [IndiaMART – Coral Interiors](https://www.indiamart.com/coralinteriors/aboutus.html) · [IndiaMART roller listing](https://www.indiamart.com/proddetail/roller-blinds-19375694597.html) · [Justdial](https://www.justdial.com/Bangalore/Coral-Interiors-Opposite-Uttam-Sagar-Gardenia-Kothanur/080PXX80-XX80-170313004503-S3F1_BZDET) · [YellowPages](https://www.yellowpages.net/phone-91-9886672792-blinds-shop-Bangalore-INEN311983.html) · [IndiaInfo](https://www.indiainfo.net/d/blinds-shop-in-bangalore)
- [Bandalux home](https://bandalux.com/en/) · [Products](https://bandalux.com/en/products/) · [Collections](https://bandalux.com/en/collections/) · [Roller shades](https://bandalux.com/en/product/roller-shades/) · [Private](https://bandalux.com/us/private/)
- [Vercel Hobby plan](https://vercel.com/docs/plans/hobby) · [Vercel fair use](https://vercel.com/docs/v2/platform/fair-use-policy) · [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/)
