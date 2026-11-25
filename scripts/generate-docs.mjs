import { rmSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { runGraphQLMarkdown } from "@graphql-markdown/cli";

import { decorators } from "../lib/decorators.mjs";

rmSync(resolve("./docs/graphql"), { force: true, recursive: true });

await runGraphQLMarkdown(
  {
    // Shared schema documented by every GraphQL-Markdown demo.
    schema:
      "https://raw.githubusercontent.com/graphql-markdown/graphql-markdown/main/tests/e2e/__data__/demo_schema.graphql",
    rootPath: "./docs",
    baseURL: "graphql",
    // Docsify preset (links, callouts, folder `README.md` indexes and
    // `docs/_sidebar.md`) plus linked deprecation reasons and a "View as
    // Markdown" link. Absolute URL: relative formatter paths resolve against
    // the package, not the project.
    formatter: pathToFileURL(resolve("./lib/formatter.mjs")).href,
    loaders: {
      UrlLoader: "@graphql-tools/url-loader",
    },
    decorators,
    pretty: true,
    force: true,
    telemetry: false,
    docOptions: {
      sectionHeaderId: false,
    },
  },
  {},
);

// The built-in homepage is emitted as generated.md with Docusaurus front matter;
// docs/README.md is the homepage here, so drop it.
rmSync(resolve("./docs/graphql/generated.md"), { force: true });

console.log("GraphQL docs generated in docs/graphql");
