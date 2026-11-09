# CMS editor guide

Edit the site at [pagescms.org](https://pagescms.org) by signing in with GitHub and opening this repository. Each save creates a commit. The live site updates after the next successful build and deployment.

## Change a headline

1. Open **Pages** and choose the page.
2. Edit **Title** for the main headline, or **Subtitle** for the line beneath it.
3. To change a headline further down, open **Sections**, expand the section and edit its **Title**.
4. Save.

## Change a photo

1. Open **Media** and upload the new image into the right folder. Use WebP, ideally about 1600px wide in an 8:5 shape. Blog covers should be 16:9.
2. Open the item that uses it, such as a **Gallery** entry, and select the new image.
3. Update the **Alt text** to describe the new image. Update the **Caption** if there is one.
4. Save.

To replace a code-built product visual with a photo, open the **Text and visual** section and fill in **Image** and **Image alt text**. The image takes priority over the visual.

## Change a card

- **Cards on a page**: open **Pages**, the page, then **Sections**, and edit the item under the **Cards** section.
- **Features, solutions and modules**: open **Features and solutions**. These appear wherever a list uses them, so one edit updates every place.
- **Industries**: open **Industries**.

**Sort order** sets the position. Lower numbers appear first.

## Add or change a page

1. Open **Pages** and choose **Add entry**, or open an existing page.
2. Set **Slug**. A slug of `partners` creates `/partners/`.
3. Fill in the hero fields, then add sections and put them in order.
4. Fill in every **SEO** field. Set **Canonical URL** to the path with a trailing slash, for example `/partners/`.
5. Save, then add a link to the page under **Site settings** so visitors can find it.

## Add or change a blog post

1. Open **Blog posts** and choose **Add entry**.
2. Fill in title, slug, date, summary, cover image, cover alt text, category and author.
3. Write the article in the body.
4. Fill in **SEO**. Set **Canonical URL** to `/blog/your-slug/`.
5. Leave **Status** as `draft` until it is ready. Drafts are never built. Set it to `published` to go live.

## Rules for security claims

The Security page shows a control only when its **Verification status** is `verified`. Never change a status to `verified` without completing [SECURITY-CLAIMS-CHECKLIST.md](SECURITY-CLAIMS-CHECKLIST.md). Owner, review date and status are never shown publicly.

Do not add security or compliance claims such as certifications, encryption or MFA to other pages, cards, FAQs or blog posts unless the checklist confirms them.

## Legal pages

Open **Legal pages**. Change the **Revision date** whenever the text changes, and clear **Draft notice** once the text has been approved.
