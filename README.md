# revenuedrivenmarketing.com

Static site (Astro), deployed via Cloudflare Pages from this git repo. PPC-focused blog + lead-gen site.

## Structure

- `src/pages/` — `index.astro` (home), `about/`, `contact/` (form + thank-you), `blog/` (index + post template)
- `src/content/blog/*.md` — blog posts. Frontmatter: `title`, `description`, `pubDate`, `pillar` (`google-ads` | `meta-ads` | `attribution` | `case-study` | `general`), `draft`
- `src/layouts/BaseLayout.astro` — GTM + Search Console verification wiring, reads `PUBLIC_GTM_ID` / `PUBLIC_GSC_VERIFICATION` env vars

## Before this goes live, still TODO

1. **Contact form**: create a free [Formspree](https://formspree.io) account, replace `FORM_ENDPOINT` in `src/pages/contact/index.astro` with your real endpoint.
2. **Analytics**: create a GTM container, set `PUBLIC_GTM_ID` in the Cloudflare Pages dashboard env vars. Configure GA4 as a tag *inside* GTM (don't add GA4's gtag.js directly — GTM is the only script loaded on-page, everything else routes through it). Set `/contact/thank-you/` as a GA4 conversion (pageview-based — simplest, no timing issues).
3. **Search Console**: verify the domain, put the verification meta value in `PUBLIC_GSC_VERIFICATION`.
4. **Copy**: `index.astro` and `about/index.astro` have `TODO(Kareem)` comments where placeholder copy needs your real bio/credentials — nothing fabricated was left in as if it were fact.

## Commands

| Command           | Action                                       |
| ------------------ | --------------------------------------------- |
| `npm run dev`       | local dev server at `localhost:4321`          |
| `npm run build`     | production build to `./dist/`                 |
| `npm run preview`   | preview the production build locally          |
