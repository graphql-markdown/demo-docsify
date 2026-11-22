import { mkdir } from "node:fs/promises";
import { join, posix } from "node:path";

import {
  MARKDOWN_EOL,
  saveFile,
  startCase,
} from "@graphql-markdown/utils";

import HugoFormatter from "@graphql-markdown/formatters/hugo";

const hugoFormatFunctions =
  typeof HugoFormatter.createMDXFormatter === "function"
    ? HugoFormatter.createMDXFormatter()
    : HugoFormatter;

export const mdxExtension = ".md";

/**
 * Docsify has no front matter support (it would print the YAML as text).
 * Only the page title is kept, rendered as a level 1 heading.
 */
export const formatMDXFrontmatter = (props, formatted) => {
  const lines = formatted ?? [];
  const titleLine = lines.find((line) => /^title:/.test(line));
  if (!titleLine) {
    return "";
  }

  const title = titleLine
    .replace(/^title:\s*/, "")
    .trim()
    .replace(/^["']|["']$/g, "");
  return `# ${title}${MARKDOWN_EOL}${MARKDOWN_EOL}`;
};

/**
 * Internal links become root-absolute paths (`/graphql/...md`), which Docsify
 * resolves to its routes. External links are returned unchanged.
 */
export const formatMDXLink = ({ text, url }) => {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) {
    return { text, url };
  }

  const [pathPart, ...anchor] = url.split("#");
  const normalized = posix.normalize(pathPart.replace(/\\/g, "/"));
  const path = normalized
    .replace(/^(\.\.\/|\.\/)+/, "")
    .replace(/^\/+/, "");
  const withBase = path.startsWith("graphql/") ? path : `graphql/${path}`;
  const withExt = /\.md$/.test(withBase) ? withBase : `${withBase}.md`;
  const hash = anchor.length > 0 ? `#${anchor.join("#")}` : "";
  return { text, url: `/${withExt}${hash}` };
};

/**
 * Creates each category directory and seeds its Docsify directory index (`README.md`).
 * The hook runs before the category pages are written, so the page links are
 * filled in afterwards by `build-sidebar.mjs`.
 */
export const beforeGenerateIndexMetafileHook = async (event) => {
  const { dirPath, category } = event.data;
  await mkdir(dirPath, { recursive: true });
  await saveFile(
    join(dirPath, "README.md"),
    `# ${startCase(category)}${MARKDOWN_EOL}${MARKDOWN_EOL}`,
  );
};

export default {
  ...hugoFormatFunctions,
  formatMDXFrontmatter,
  formatMDXLink,
  formatMDXAdmonition: HugoFormatter.formatMDXAdmonition,
  beforeGenerateIndexMetafileHook,
  mdxExtension,
};
