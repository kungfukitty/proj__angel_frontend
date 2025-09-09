# Angel Kellogg – Clean Rebuild

Fresh, working repo using **Next.js 14 + Tailwind** with a **Vaul-powered `<Sheet />`** component to avoid the `@radix-ui/react-sheet` 404 that broke your prior build.

## Quick Start

```bash
# Node 18+ recommended
npm install
npm run dev   # http://localhost:3000
npm run build && npm start
```

## Why this fixes your previous issues

- **No `@radix-ui/react-sheet`** (that package doesn't exist). We use **`vaul`** and a shadcn-style wrapper in `src/components/ui/sheet.tsx`.
- Clean `package.json` (no stray backticks or invalid JSON).
- App Router structure in `src/app`, Tailwind wired up.
- Minimal, production-safe dependencies.

## Environment Variables

Create a `.env.local` (example below). Only expose public values via `NEXT_PUBLIC_*`:

```
# Public site URL
NEXT_PUBLIC_SITE_URL=https://www.angelkellogg.com

# Your backend base (Render, etc.) — used by vercel.json rewrites
BACKEND_API_URL=https://project-angel.onrender.com
```

> On Vercel, set **Environment Variables** with the same keys. Avoid mixing up front‑end and back‑end URLs.

## Vercel Deploy

This repo works on Vercel out of the box. If you proxy to a backend on Render, keep the `vercel.json` rewrite (below).

1. Push to GitHub.
2. Import the repo to Vercel.
3. Set env vars.
4. Build.

## File Map

- `src/app/page.tsx` – landing page + working mobile Sheet menu
- `src/components/ui/button.tsx` – shadcn-style Button
- `src/components/ui/sheet.tsx` – Vaul-based Sheet (shadcn-compatible API)
- `src/lib/utils.ts` – `cn()` util
- `tailwind.config.ts`, `postcss.config.js`, `next.config.mjs`

## Common Pitfalls (and how this repo avoids them)

- **Package not found (`E404`)**: Using only valid packages. If your old code imported `@radix-ui/react-sheet`, replace with `@/components/ui/sheet` in this repo.
- **Broken `package.json`**: Ensure no backticks or comments; this one is clean.
- **Wrong env vars**: Use `NEXT_PUBLIC_*` for browser, server-only for secrets. Don’t point `NEXT_APP_URL` to the wrong service.
- **Image optimization**: Defaults are fine; don’t enable `images.unoptimized` unless necessary.

## Brand Notes

Colors include a **metallic gold** ramp to match "luxury + street energy". Tweak in `tailwind.config.ts`.
