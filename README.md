# Website Template

A Next.js marketing-site template (originally the CleanerClicks site). Use it as a starting point and swap in your own brand, copy, and integrations.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you go live — fill in these placeholders

This template has been sanitized, so a few contact/integration values are placeholders you must replace with your own:

| What | Where | Replace |
|------|-------|---------|
| Contact phone & email | `components/shared.jsx` (the `CONTACT` object, ~line 289) | `(555) 000-0000`, `+15550000000`, `hello@example.com` |
| Booking calendar embed | `components/pages/BookACall.jsx` (~line 36) | `YOUR_BOOKING_WIDGET_ID` → your GoHighLevel (or other) booking widget ID, and the `api....` embed domain |
| Social links | `components/shared.jsx` (the `SOCIALS` array) | Instagram / YouTube URLs |
| Domain / canonical URLs & schema | `app/`, `sitemap.xml`, `robots.txt`, `llms.txt` | `cleanerclicks.com` → your domain |
| Branding, logos, copy | `public/`, `assets/`, `components/` | Your own |

The `_legacy/` folder is the previous static version, kept for reference — you can delete it.

## Deploy

Configured for Vercel (`vercel.json`, Next.js framework preset). Push to a repo and import it into Vercel.
