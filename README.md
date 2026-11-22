# GraphQL-Markdown + Docsify demo

This project demonstrates how to generate GraphQL documentation with GraphQL-Markdown for a [Docsify](https://docsify.js.org) v5 site.

**Live demo:** [graphql-markdown.github.io/demo-docsify](https://graphql-markdown.github.io/demo-docsify/)

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
│   ├── _sidebar.md             # Generated sidebar (built by scripts/build-sidebar.mjs)
│   └── graphql/                # Generated GraphQL documentation (one .md per type, operation, directive)
├── scripts/
│   ├── custom-docsify-mdx.mjs  # Custom formatter: extends the Hugo preset for Docsify
│   ├── generate-docs.mjs       # GraphQL-Markdown runner
│   └── build-sidebar.mjs       # Writes _sidebar.md and the category README.md indexes
├── tests/visual/
│   └── site.spec.ts            # Playwright + Argos screenshots (hash routes)
├── playwright.config.ts        # Visual test configuration (serves docs/)
└── package.json
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run generate` | Runs `generate-docs.mjs` (regenerates `docs/graphql`) and `build-sidebar.mjs` (writes `_sidebar.md`). |
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

## How the custom formatter differs from the Hugo preset

`scripts/custom-docsify-mdx.mjs` starts from `@graphql-markdown/formatters/hugo` and changes what Docsify cannot use:

- **No front matter.** Docsify would print the Hugo YAML as text. Each page starts with a single `# Title` heading instead, which is also the title the sidebar uses.
- **Root-absolute links.** Internal links are rewritten to `/graphql/…md` paths, which Docsify resolves to its routes. External links are left unchanged.
- **Generated `_sidebar.md`.** Docsify reads its navigation from `docs/_sidebar.md`. `build-sidebar.mjs` builds it from the generated pages, and also writes a `README.md` index for each category.
- **`generated.md` cleanup.** The built-in homepage is emitted as `generated.md` with Docusaurus front matter. `generate-docs.mjs` deletes it because `docs/README.md` is the homepage here.

## Notes

- The documented schema is the [shared GraphQL-Markdown demo schema](https://github.com/graphql-markdown/graphql-markdown/blob/main/tests/e2e/__data__/demo_schema.graphql) used by all GraphQL-Markdown demos, loaded from its raw URL at generation time. Generation needs network access.
- Deployment runs in `.github/workflows/deploy.yml`. It builds the site and publishes `docs/` to the `gh-pages` branch with `ghp-import`.
