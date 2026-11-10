# AceVisitor website

Public marketing frontend for AceVisitor, built with Next.js, TypeScript and Tailwind CSS.

```bash
npm install
```

```bash
npm run dev
```

- Pages and routes are in `app/`.
- Theme colors, fonts, radii and shadows are in `app/globals.css`.
- Copy `.env.example` to `.env.local` to set environment values.

## How content works

Nothing the visitor reads is written into a component. All text, images, icons, SEO fields, menus and page layouts come from the functions in `lib/content/`, which all go through `lib/content/client.ts`.

- With `CONTENT_API_URL` empty, the site shows the sample data in `lib/content/seed/`.
- With `CONTENT_API_URL` set, the site reads everything from the admin API. Published changes appear within 60 seconds, and new pages and blog posts work without a rebuild.

## Admin API contract

Each endpoint returns JSON matching the type in `lib/types.ts`.

| GET `{CONTENT_API_URL}/...` | Returns | Admin can manage |
| --- | --- | --- |
| `site` | `SiteSettings` | Brand name, tagline, logo, menu, footer, CTA, contact info, interface wording |
| `pages` | `Page[]` | Slug, hero, ordered sections, SEO; add or delete whole pages |
| `posts` | `BlogPost[]` | Articles, status, cover, category, author, SEO |
| `categories` | `Category[]` | Blog categories |
| `authors` | `Author[]` | Blog authors |
| `features` | `Feature[]` | Platform modules and solutions |
| `industries` | `Industry[]` | Industry cards and images |
| `media` | `MediaItem[]` | Images with alt text, caption, category and usage; `usage: "gallery"` appears in the Gallery |

Rules the frontend follows:

- **Icons:** a name from `iconNames` in `components/ui/Icon.tsx`, an uploaded image URL, or an empty string for no icon.
- **Images:** every picture on the site is an ordinary image file with alt text, so an admin uploads, replaces or deletes it with no code. Set `MEDIA_HOST` to the host that serves uploads.
- **Hero images:** `heroImages` on a page takes none (text-only hero), one (shown in full at its own shape) or two to three (overlapping).
- **Optional parts:** leave out a button, image, icon or section and the layout closes up around it.
- **Sections:** a page shows its `sections` in array order, so reordering or deleting one changes the page. Section types are listed in `lib/types.ts`.
- **Forms:** fields are defined in the page data. Each submission is POSTed to `NEXT_PUBLIC_FORM_ENDPOINT` as JSON and includes `form`, the form's name.
