# BlackCat Marketing

Marketing site for **BlackCat Marketing** — a construction-only marketing agency running Google
LSA ads, websites, local SEO and Google Business Profile optimization.

Built on Next.js 14 (App Router), no CSS framework — the whole design system lives in
`app/globals.css`.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:4399.

## The offer, in one place

Every price and promise on the site is driven by a small number of files. Change them here and
the whole site updates:

| What | Where |
|------|-------|
| Both plans, prices, feature lists, guarantee lines | `components/plans.jsx` (`PLANS`) |
| Guarantee terms and conditions | `components/pages/Guarantee.jsx` (`GUARANTEES`) |
| Phone, email, location, social links | `components/shared.jsx` (`CONTACT`, `SOCIALS`) |
| Nav links and dropdowns | `components/shared.jsx` (`NAV_LINKS`) |
| Brand colors / dark mode default | `components/shared.jsx` (`ACCENT_PRESETS`, `TWEAK_DEFAULTS_SHARED`) |

Current offer as built:

- **LSA Ads** — $500/month management + ad spend, $50/day standard ceiling (~$1,500/mo).
  Guarantee: **5 leads in the first 30 days**, or BlackCat covers the ad spend until you get there.
- **Website, SEO & GMB** — $5,000/month all in, no setup fee.
  Guarantee: **top 3 of the map pack within 90 days** for the agreed keywords and service area,
  or the work continues free until it lands.
- **Both** — $5,500/month plus LSA ad spend.

## ⚠️ Replace before you go live

The site is complete, but these placeholders will embarrass you if they ship:

| # | What | Where |
|---|------|-------|
| 1 | **Phone & email** — `(555) 000-0000`, `hello@blackcatmarketing.com` | `components/shared.jsx` → `CONTACT` |
| 2 | **Location** — currently just "United States" | `components/shared.jsx` → `CONTACT.location` |
| 3 | **Social links** — all point at bare instagram.com / linkedin.com etc. | `components/shared.jsx` → `SOCIALS` |
| 4 | **Booking widget** — `YOUR_BOOKING_WIDGET_ID` and the `api.blackcatmarketing.com` embed domain | `components/pages/BookACall.jsx` → `BOOKING` |
| 5 | **Testimonials** — four entries labelled "Placeholder Client" | `components/sections3.jsx` → `TESTIMONIALS` |
| 6 | **Case studies** — every field is `[Company name]` / `[X]` style placeholder | `components/pages/Results.jsx` → `CASES` |
| 7 | **Portfolio** — the `CLIENTS` array is empty; the page shows an empty state until you fill it | `components/pages/Work.jsx` → `CLIENTS` |
| 8 | **Legal pages** — `[YOUR CITY, STATE]` and `[YOUR STATE]` placeholders, plus governing law | `components/pages/Privacy.jsx`, `components/pages/Terms.jsx` |
| 9 | **Domain** — `blackcatmarketing.com` appears in metadata and SEO files | `app/layout.jsx`, `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt` |
| 10 | **Logo** — the brand mark is an inline SVG (amber tile + black cat) in `shared.jsx`. Swap in a real logo file if you have one | `components/shared.jsx` → `BrandLogo`, `public/assets/favicon.svg` |

### On items 5, 6 and 7 specifically

Testimonials, case studies and the portfolio are deliberately left as obvious placeholders rather
than filled with plausible-looking invented numbers. Publishing fabricated results is dishonest,
and for an agency making performance claims it's also an FTC endorsement-rules problem. Fill them
in with real, evidenced clients — or delete those sections until you have some.

### On the guarantees

The guarantee wording on `/guarantee` and `/pricing` needs to match the service agreement your
clients actually sign, word for word. Have a lawyer read both together before you publish. The
conditions listed on the page (agreed keywords and service area, admin access, verified profile,
budget maintained, calls answered) are the ones that make the promises enforceable — don't drop
them to make the page read cleaner.

## Pages

| Route | File |
|-------|------|
| `/` | `components/pages/Home.jsx` |
| `/services` | `components/pages/Services.jsx` |
| `/lsa-ads` | `components/pages/LsaAds.jsx` |
| `/pricing` | `components/pages/Pricing.jsx` |
| `/guarantee` | `components/pages/Guarantee.jsx` |
| `/how-it-works` | `components/pages/HowItWorks.jsx` |
| `/results` | `components/pages/Results.jsx` |
| `/faq` | `components/pages/Faq.jsx` |
| `/book-a-call` | `components/pages/BookACall.jsx` |
| `/work` | `components/pages/Work.jsx` — unlisted, `noindex` |
| `/privacy`, `/terms` | `components/pages/Privacy.jsx`, `Terms.jsx` |

Shared building blocks live in `components/sections1.jsx` (hero, trades strip),
`sections2.jsx` (features, why-construction, 90-day plan), `sections3.jsx` (live demo,
testimonials, guarantees, FAQ) and `mocks.jsx` (the illustrated UI screenshots).

## Theming

Dark mode is on by default and the accent is hi-vis amber. Both are controlled by
`TWEAK_DEFAULTS_SHARED` in `components/shared.jsx`, and a floating "Tweaks" panel lets you try
the other presets in the browser. The hero and page heroes are always dark regardless of theme —
that's a brand decision, set in `app/globals.css` (`.cc-hero--sky`, `.cc-section--hero`).

## Deploy

Configured for Vercel (`vercel.json`, Next.js preset). Push to the repo and import it into Vercel.
Set your custom domain there, then update the domain in the four files listed in row 9 above.
