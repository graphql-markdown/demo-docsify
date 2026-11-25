# GraphQL-Markdown + Docsify demo

This project demonstrates how to generate GraphQL documentation with GraphQL-Markdown for a [Docsify](https://docsify.js.org) v5 site.

**Live demo:** [graphql-markdown.dev/demo-docsify](https://graphql-markdown.dev/demo-docsify/)

## Quick start

```bash
npm install
npm run dev
```

`npm run dev` generates the GraphQL pages and serves `docs/` with `docsify serve`. Open the URL it prints and use the GraphQL API entry in the sidebar.

## Project structure

```text
.
├── docs/
│   ├── index.html              # Docsify entry point (loads Docsify v5 from the CDN)
│   ├── README.md               # Site homepage
│   ├── gqlmd.css               # Styling for the generated pages
│   ├── _sidebar.md             # Generated sidebar (written by the Docsify preset)
│   └── graphql/                # Generated GraphQL documentation (one .md per type, operation, directive)
├── scripts/
│   └── generate-docs.mjs       # GraphQL-Markdown runner (Docsify preset)
├── tests/visual/
│   └── site.spec.ts            # Playwright + Argos screenshots (hash routes)
├── playwright.config.ts        # Visual test configuration (serves docs/)
└── package.json
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run generate` | Runs `generate-docs.mjs`, which regenerates `docs/graphql` and writes `_sidebar.md`. |
| `npm run build` | Same as `generate`. The static site is `docs/`, so there is no separate bundle step. |
| `npm run dev` | Generates the docs, then serves `docs/` with `docsify serve`. |
| `npm run clean` | Deletes `docs/graphql` and `docs/_sidebar.md`. |
| `npm run test:visual` | Runs the Playwright suite (`playwright test`) against the served `docs/` folder. |

## Visual tests

```bash
npm run build
npx playwright install chromium
npm run test:visual
```

Playwright serves `docs/` on port 4173 (override with `VISUAL_PORT`). Docsify renders each page on the client, so the tests open hash routes such as `/#/graphql/types/objects/project` and wait for the rendered heading and sidebar before taking each screenshot. Screenshots are uploaded to Argos only in CI when `ARGOS_TOKEN` is set.

## Docsify formatter preset

`scripts/generate-docs.mjs` sets `formatter: "@graphql-markdown/formatters/docsify"`, the [Docsify preset](https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/formatters/src/docsify/README.md) of `@graphql-markdown/formatters`. It starts from the Hugo preset and changes what Docsify cannot use:

- **No front matter.** Docsify would print the Hugo YAML as text. Each page starts with a single `# Title` heading instead, which is also the title the sidebar uses.
- **Root-absolute links.** Internal links are rewritten to `/graphql/…md` paths, which Docsify resolves to its routes. External links are left unchanged.
- **Generated `_sidebar.md`.** Docsify reads its navigation from `docs/_sidebar.md`. The preset writes it once the pages are rendered, and also writes a `README.md` index for each category.
- **`generated.md` cleanup.** The built-in homepage is emitted as `generated.md` with Docusaurus front matter. `generate-docs.mjs` deletes it because `docs/README.md` is the homepage here.

## Deprecation links and Markdown source

`lib/formatter.mjs` extends the Docsify preset with two additions, loaded by `scripts/generate-docs.mjs`:

- **Linked deprecation reasons.** Type names in backticks inside a deprecation reason (for example "Replaced by the `ProjectStatus` enum") link to that type's page.
- **View as Markdown.** Each page ends with a `View as Markdown` link to its source `.md` file on the deployed site (`https://graphql-markdown.dev/demo-docsify/graphql/…md`). Docsify already serves that file, so no second copy is generated. The link is absolute, so Docsify leaves it alone instead of routing it as a page.
- **Type-level deprecation.** A `@deprecatedType` directive on a type renders a "Deprecated" badge and callout, defined in `lib/decorators.mjs` and loaded by `scripts/generate-docs.mjs`.

## Notes

- The documented schema is the [shared GraphQL-Markdown demo schema](https://github.com/graphql-markdown/graphql-markdown/blob/main/tests/e2e/__data__/demo_schema.graphql) used by all GraphQL-Markdown demos, loaded from its raw URL at generation time. Generation needs network access.
- Deployment runs in `.github/workflows/deploy.yml`. It builds the site and publishes `docs/` to the `gh-pages` branch with `ghp-import`.
