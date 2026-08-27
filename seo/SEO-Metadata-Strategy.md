# Aekant Villa — SEO Metadata Strategy

**Canonical domain:** `https://surekhajagtap.github.io/aekantVilla/`
**Primary goal:** direct WhatsApp bookings (+91 86683 31054)
**Target geos:** Mumbai, Thane, Pune, Nashik
**Last updated:** 13 August 2026

---

## 1. Keyword Architecture

### Primary keywords (money terms — must rank)

| Keyword | Intent | Target page |
|---|---|---|
| villa in nashik with pool | Transactional | Home |
| private villa near mumbai for weekend | Transactional | Mumbai landing page |
| trimbakeshwar weekend getaway | Commercial | Trimbakeshwar landing page |
| vaitarna backwaters resort | Commercial | Vaitarna landing page |
| villa near trimbakeshwar with swimming pool | Transactional | Home |
| 3bhk villa nashik booking | Transactional | Home |

### Secondary keywords (supporting — build topical depth)

**Location cluster**
alwand trimbakeshwar villa · villa near vaitarna dam · nashik villa near temple · trimbakeshwar stay near jyotirlinga · pahine waterfall nearby stay · villa near nashik city 45 minutes

**Audience cluster**
family villa nashik · corporate offsite villa near mumbai · team outing villa nashik · friends group villa maharashtra · couple stay near nashik · romantic villa near trimbakeshwar

**Feature cluster**
villa with private pool maharashtra · bonfire villa near nashik · villa with mountain view nashik · villa with complimentary breakfast nashik · pet-free private villa nashik · villa with terrace and lake view

**Seasonal / long-tail (high conversion, low competition)**
monsoon getaway near mumbai villa · misty weekend stay near nashik · diwali weekend villa nashik · new year villa booking nashik · one night stay near trimbakeshwar temple · villa 3 hours from mumbai with pool

### Keyword mapping rule
One primary keyword per page. Never target the same primary term on two pages — it splits ranking authority.

---

## 2. Title Tags & Meta Descriptions

All titles ≤ 60 characters. All descriptions ≤ 155 characters. Character counts verified.

### Live pages

**Home — `/`**

- **Title (48):** `Villa in Nashik With Private Pool | Aekant Villa`
- **Meta (149):** `Private 3BHK villa with pool near Trimbakeshwar, Nashik. Mountain & Vaitarna backwater views, 3.5 hrs from Mumbai. Book on WhatsApp: +91 86683 31054.`
- **Primary keyword:** villa in nashik with pool
- **Secondary:** villa near trimbakeshwar with swimming pool, 3bhk villa nashik

**Gallery — `/gallery.html`**

- **Title (46):** `Aekant Villa Photos | Pool, Rooms & Lake Views`
- **Meta (141):** `See inside Aekant Villa — private pool, 3 bedrooms, terrace and Vaitarna backwater views near Trimbakeshwar, Nashik. Book direct on WhatsApp.`
- **Primary keyword:** aekant villa photos
- **Secondary:** nashik pool villa pictures, trimbakeshwar villa interior

### Recommended new landing pages

These capture city-intent searches the single-page site currently can't. Each should be a real page of 600–900 words with its own H1, drive-time table, 4–6 photos and a WhatsApp CTA above the fold.

**`/villa-near-mumbai-weekend.html`**

- **Title (52):** `Private Villa Near Mumbai for Weekend | Aekant Villa`
- **Meta (141):** `Escape Mumbai in 3.5 hrs. Private pool villa on the Vaitarna backwaters near Trimbakeshwar. Weekends ₹12,000/night. WhatsApp +91 86683 31054.`
- **H1:** Private Villa Near Mumbai for a Weekend Getaway — Pool, Mountains, Backwaters

**`/trimbakeshwar-weekend-getaway.html`**

- **Title (47):** `Trimbakeshwar Weekend Getaway | Pool Villa Stay`
- **Meta (144):** `Stay minutes from the Trimbakeshwar Jyotirlinga in a private 3BHK villa with pool, bonfire and mountain views. Free breakfast. Book on WhatsApp.`
- **H1:** Trimbakeshwar Weekend Getaway — Private Villa Near the Jyotirlinga Temple

**`/vaitarna-backwaters-stay.html`**

- **Title (46):** `Vaitarna Backwaters Resort Stay | Aekant Villa`
- **Meta (138):** `Wake up to the Vaitarna Dam backwaters. Private villa with pool, terrace and bonfire at Alwand, Trimbakeshwar. Direct booking on WhatsApp.`
- **H1:** Vaitarna Dam Backwaters Stay — A Private Villa on the Water's Edge

**`/couple-package.html`**

- **Title (46):** `Couple Villa Near Nashik ₹3,000/Night | Aekant`
- **Meta (149):** `Romantic couple package at Aekant Villa near Trimbakeshwar — private room, pool access, bonfire and free breakfast at ₹3,000/night. WhatsApp to book.`
- **H1:** Couple Package Near Nashik — ₹3,000 a Night With Breakfast

**`/corporate-offsite.html`**

- **Title (50):** `Corporate Offsite Villa Near Nashik | Aekant Villa`
- **Meta (149):** `Host your team offsite at a private 3BHK villa near Nashik — pool, large hall, terrace, indoor games and bonfire. 3 hrs from Thane. WhatsApp to book.`
- **H1:** Corporate Offsite & Team Outing Villa Near Nashik

**`/villa-near-pune-weekend.html`**

- **Title (48):** `Weekend Villa Near Pune With Pool | Aekant Villa`
- **Meta (145):** `A 4.5-hr drive from Pune to a private pool villa on the Vaitarna backwaters near Trimbakeshwar, Nashik. Free breakfast. WhatsApp +91 86683 31054.`
- **H1:** Weekend Villa Near Pune — Private Pool, Backwaters and Mountains

---

## 3. Supporting Meta Tags

Applied to every page:

```html
<link rel="canonical" href="[page URL]" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
<meta name="geo.region" content="IN-MH" />
<meta name="geo.placename" content="Trimbakeshwar, Nashik" />
<meta name="geo.position" content="19.8955;73.4791" />
<meta name="ICBM" content="19.8955, 73.4791" />
<meta property="og:locale" content="en_IN" />
<meta property="og:site_name" content="Aekant Villa" />
```

**Note on coordinates:** `19.8955, 73.4791` is an approximation for Alwand near the Vaitarna backwaters. Open Google Maps, drop a pin on the villa's exact gate, copy the true lat/long and replace it in both `index.html` and `seo/schema-lodging.json`. Accurate coordinates materially improve local-pack visibility.

**Open Graph images** must be absolute URLs, not relative paths. WhatsApp, Instagram and Facebook will not render a preview from `images/hero.jpg` — they need the full `https://…` path. This is fixed in the applied version and matters more than usual here, since WhatsApp link previews are a direct booking channel.

---

## 4. Structured Data (JSON-LD)

Full markup lives in `seo/schema-lodging.json` and is embedded in `index.html`. It uses an `@graph` with four connected nodes:

| Node | Type | What it earns |
|---|---|---|
| `#villa` | `LodgingBusiness` + `VacationRental` | Knowledge panel, price and amenity display, map placement |
| `#website` | `WebSite` | Sitelinks eligibility |
| `#faq` | `FAQPage` | Expandable Q&A in results — large SERP real estate |
| `#breadcrumb` | `BreadcrumbList` | Breadcrumb trail instead of raw URL |

Key properties populated: address, geo, telephone, `checkinTime` / `checkoutTime`, `numberOfBedrooms` (3), `numberOfBathroomsTotal` (4), 13 `amenityFeature` entries, three `Offer` nodes (₹9,000 weekday / ₹12,000 weekend / ₹3,000 couple), `areaServed` for Mumbai, Thane, Pune and Nashik, and a `ReserveAction` pointing at the WhatsApp booking link.

**Two things to verify before you rely on the review markup.** The five reviews carry real guest names taken from Google Reviews, so they're legitimate — but Google ignores self-serving review markup on a business's own site and will not show stars from it. The value is for Bing and AI answer engines. Keep it only as long as the reviews stay genuine and match what's visible on the page; update `reviewCount` as you add more. If you'd rather not carry the risk, delete the `aggregateRating` and `review` blocks — everything else stands on its own.

Validate at [validator.schema.org](https://validator.schema.org/) and Google's Rich Results Test after deploying.

---

## 5. On-Page Priorities

**Missing pieces to add**

1. **`robots.txt` and `sitemap.xml`** — neither exists. Both are created in this folder; move `robots.txt` and `sitemap.xml` to the site root and submit the sitemap in Google Search Console.
2. **Google Business Profile** — the single highest-return action for a property like this. Local-pack results outrank organic listings for "villa near me" style searches. Claim it, add all photos, and get the same guests who left Google reviews to keep leaving them.
3. **A visible FAQ section** on the homepage matching the six questions in the FAQ schema. Schema without matching on-page content is a guideline violation.
4. **Image alt text and filenames.** `villa1.jpg` through `villa6.jpg` carry no keyword signal. Rename to `aekant-villa-private-pool-nashik.jpg`, `vaitarna-backwater-view-terrace.jpg` and so on, and write descriptive alt text. Image search is a real traffic source for villa bookings.
5. **Drive-time content block** on the homepage: a small table of Mumbai 3.5 hrs / Thane 3 hrs / Pune 4.5 hrs / Nashik 45 min. This exact phrasing is what people search.

**Technical**

- Convert hero and gallery images to WebP; compress to under 200 KB each. Core Web Vitals are a ranking factor and this site is image-heavy.
- Add `loading="lazy"` to all below-fold images.
- Serve over the custom domain once DNS is pointed, then 301-redirect the GitHub Pages URL and update every canonical.

---

## 6. Measurement

Track in Google Search Console: impressions and average position for the six primary keywords, month over month. Track in WhatsApp: inbound message volume and the source page, by using distinct pre-filled messages per landing page (e.g. `?text=Hi, I'm enquiring from the Mumbai weekend page`). That gives you page-level attribution without any analytics tooling.

Realistic timeline: 6–10 weeks for indexation and early movement on long-tail terms; 4–6 months for competitive terms like "villa in nashik with pool," which is contested by aggregator sites with far more domain authority. The landing pages and Google Business Profile are what close that gap.
