# Launch checklist

## Waiting on the client or manager

- [ ] NameHero access: host, SFTP user, key and web root path
- [ ] GitHub organization repository
- [ ] Final production domain, then update **Production site URL** in Site settings (it currently holds the reference site's URL)
- [ ] Final Login URL, set as `NEXT_PUBLIC_LOGIN_URL`
- [ ] Form provider chosen, endpoint set as `NEXT_PUBLIC_FORM_ENDPOINT`
- [ ] Verified security claims ([checklist](SECURITY-CLAIMS-CHECKLIST.md))
- [ ] Contact details and social links in Site settings
- [ ] Approved logo and product screenshots ([IMAGE-REVIEW.md](../IMAGE-REVIEW.md))
- [ ] Legal review of Privacy Policy and Terms (the on-page draft notices were removed at the developer's request, so the text is live without one)
- [ ] Approval of all website copy, and of "other approved sectors" on Industries

## Before go-live

- [ ] Add NameHero secrets and build variables in GitHub
- [ ] Connect Pages CMS to the final repository and test one edit end to end
- [ ] Confirm `npm run lint` and `npm run build` pass in CI
- [ ] Submit a real test through the Contact form and confirm delivery
- [ ] Confirm the Login button reaches the correct URL
- [ ] Decide whether the sample blog posts stay

## After deployment

- [ ] Confirm HTTPS works and HTTP redirects to HTTPS (configured in cPanel)
- [ ] Confirm the security headers are returned, including on the 404 page
- [ ] Confirm `.htaccess` was uploaded
- [ ] Confirm no CSP errors in the browser console
- [ ] Open `/sitemap.xml`, `/robots.txt` and `/blog/rss.xml`
- [ ] Confirm canonical URLs use the production domain
- [ ] Test social previews on LinkedIn and X
- [ ] Check pages at 375, 768 and 1440px
- [ ] Keyboard-test the menu, gallery lightbox and form
- [ ] Submit the sitemap to search engines
