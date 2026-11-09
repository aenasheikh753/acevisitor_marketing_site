# AceVisitor website: developer guide

The public AceVisitor marketing site. It is a static export: there is no backend, authentication, database or product API.

## Commands

```bash
npm ci
```

```bash
npm run dev
```

```bash
npm run lint
```

```bash
npm run build
```

`npm run build` writes the finished site to `out/` and then generates `out/.htaccess` and `out/_headers`. `npm start` serves `out/` locally.

## Environment variables

Copy `.env.example` to `.env.local`. Both values are public and are compiled into the page, so never put a secret in them.

| Variable | Purpose | When empty |
| --- | --- | --- |
| `NEXT_PUBLIC_LOGIN_URL` | Target of the Login button | Login button is shown disabled |
| `NEXT_PUBLIC_FORM_ENDPOINT` | URL the Contact form posts JSON to | Form shows its failure message |

In GitHub Actions, set them as repository **Variables**.

## Project layout

| Path | Contents |
| --- | --- |
| `app/` | Routes, metadata, sitemap, robots, RSS feed |
| `app/globals.css` | All design tokens: colors, fonts, radii, shadows |
| `components/` | Layout, UI, section modules, JSX product visuals, form |
| `content/` | All copy and media references (JSON and Markdown) |
| `lib/types.ts` | Types for every content collection |
| `lib/content/` | Build-time content loaders |
| `.pages.yml` | Pages CMS configuration |
| `security-headers.json` | Source of the CSP and security headers |
| `scripts/write-headers.mjs` | Writes host header files into `out/` |

## How pages are assembled

Each file in `content/pages/` holds a slug, hero fields, SEO fields and a list of `sections`. `components/sections/SectionRenderer.tsx` renders each section according to its `type` and alternates background tones automatically, so neighbouring sections always differ.

A new file in `content/pages/` becomes a new route at the next build. Blog, category, author and legal pages have their own routes.

## Theming

Change a value in the `@theme` block of `app/globals.css` and it updates everywhere. Tailwind's default palette is cleared, so a component cannot use a color that is not a token. The 10px button radius is `--radius-button`.

## Security headers

`security-headers.json` is the single source. `scripts/write-headers.mjs` turns it into `.htaccess` (Apache or LiteSpeed, used by NameHero) and `_headers` (Netlify or Cloudflare Pages). For another host, translate the same values into its config. The form endpoint's origin is added to `connect-src` and `form-action` automatically.

`script-src` includes `'unsafe-inline'` because Next.js static export writes inline bootstrap scripts and nonces need a server. Tightening it would require per-page hashes or a server.

## Deployment

`.github/workflows/build-deploy.yml` runs lint and build, then uploads `out/` as an artifact. Pushes to `main` also deploy over SFTP, but only when the `NAMEHERO_HOST`, `NAMEHERO_USER`, `NAMEHERO_KEY` and `NAMEHERO_PATH` secrets all exist; otherwise the job skips cleanly. The upload adds and replaces files but never deletes, so remove stale files on the server by hand if a page is retired.

## Analytics

No analytics or third-party scripts are included. `lib/analytics.ts` is a no-op placeholder that reports no consent. To add a provider later:

1. Get approval and choose a provider.
2. Add a consent banner, and make `hasAnalyticsConsent()` reflect the visitor's choice.
3. Load the provider's script only after consent.
4. Add its origins to `security-headers.json`.
5. Update the Privacy Policy, which currently says no analytics cookies are set.
