## Content / SEO Standards (blog posts)

The goal of this content pipeline is organic ranking traffic, not just a post existing. That goal governs every drafting decision below — when in doubt, optimize for it rather than for speed. A post is not ready for `draft: false` until all of these are true:

1. **Competitive depth research is mandatory, not optional, for every post.** Before drafting, search for the actual top-ranking pages for the target keyword and note their real word count and section structure in the PR body's "Research trail" (see PR #3 for the pattern to follow). Match or exceed the topical coverage of the strongest competitor found. There is no fixed minimum word count — the competitor benchmark sets the bar for that specific topic, and it can be 700 words or 2,500 depending on what's actually ranking.
2. **Target keyword integration.** The keyword tracked in the Notion "Content Pipeline" database's Target Keyword field (or a close natural variant, not an awkward exact-match insertion) must appear in the title, the H1, the meta description, and the first paragraph.
3. **At least one worked example or concrete number,** not just abstract mechanism explanations. Show the reader an actual scenario with numbers.
4. **Internal links to relevant service pages** (`/ppc-management/`, `/google-ads-management/`, `/meta-ads-management/`, `/revenue-attribution/`, `/account-audits/`) wherever the topic genuinely supports it, not just a generic `/contact/` link at the bottom. If a target page doesn't exist on `main` yet (still in an open PR), link anyway and call out the dependency in this PR's body so merge order gets coordinated — don't skip the link just because ordering is inconvenient.
5. **State the SEO checklist explicitly in the PR body** before asking for review: target keyword and where it appears, competitor benchmark word count vs. this post's word count, which internal links were added.

Structured data (`BlogPosting` JSON-LD) is generated automatically from post frontmatter in `src/pages/blog/[...slug].astro` — nothing to do per-post there.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
