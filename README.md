# Dorcas & Oluwatobi Wedding Website

A responsive, single-page wedding experience built with React, TypeScript, Vite,
and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

Run the production build and lint checks with:

```sh
npm run build
npm run lint
```

## Wedding photos

The browser-ready photo files live in `public/images/wedding/`:

- `/images/wedding/IMG_3398.webp` — hero image and gallery
- `/images/wedding/IMG_3446.webp` — “A favourite kind of day” gallery image
- `/images/wedding/IMG_3396.webp`
- `/images/wedding/IMG_3431.webp`
- `/images/wedding/IMG_3435.webp`
- `/images/wedding/IMG_3406.webp`

The six original HEIC files remain in `public/`. The optimized WebP copies are
used by the site. Gallery sources, alt text, and captions are listed together in
`src/config/wedding.ts`. To change the hero photograph, update its image path in
`src/components/WeddingHero.tsx` as well.

The Open Graph and Twitter share image is
`/images/wedding/social-preview.jpg` (1200 × 630). For absolute canonical and
social image URLs in production builds, set `VITE_SITE_URL` to the site's
deployed URL. Vercel and Netlify deployment URL variables are also detected.

## RSVP

The RSVP form stores guest names, attendance responses, and optional notes in
Supabase. Copy `.env.example` to `.env` and set `VITE_SUPABASE_URL` and
`VITE_SUPABASE_ANON_KEY` to the Supabase project URL and publishable/anon key.
These are public browser credentials; never put a Supabase `service_role` key
in a `VITE_` variable.

Before accepting RSVPs, run the SQL in
`supabase/migrations/20261023000000_create_rsvps.sql` in the Supabase SQL Editor.
It creates the `public."tobi-rsvps"` table, applies row-level security, and permits
anonymous inserts only; guests cannot read submitted responses through the
website.

If you already ran the earlier version of this SQL and have a `public.rsvps`
table, rename it in the SQL Editor with:

```sql
alter table public.rsvps rename to "tobi-rsvps";
```
