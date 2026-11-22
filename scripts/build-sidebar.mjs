import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsDir = path.join(rootDir, "docs");
const graphqlDir = path.join(docsDir, "graphql");

const toTitle = (name) =>
  name
    .replace(/\.md$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const categoryLabel = (name) => toTitle(name);

const isPage = (entry) =>
  entry.isFile() &&
  entry.name.endsWith(".md") &&
  entry.name.toLowerCase() !== "readme.md";

const pageTitle = async (filePath, fallback) => {
  const content = await readFile(filePath, "utf8");
  const heading = /^# (.+)$/m.exec(content);
  return heading ? heading[1].trim() : fallback;
};

// Walks one category directory: writes its README.md (Docsify directory index)
// and returns the sidebar lines for it (nested list, pages as links).
const walk = async (dir, relDir, depth, label) => {
  const entries = (await readdir(dir, { withFileTypes: true })).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const indent = "  ".repeat(depth);
  const lines = [];
  const indexLinks = [];

  const dirs = entries.filter((entry) => entry.isDirectory());
  for (const entry of dirs) {
    const childRel = `${relDir}/${entry.name}`;
    const childLabel = categoryLabel(entry.name);
    const children = await walk(
      path.join(dir, entry.name),
      childRel,
      depth + 1,
      childLabel,
    );
    if (children.length > 0) {
      lines.push(`${indent}* ${childLabel}`, ...children);
      indexLinks.push(`* [${childLabel}](${childRel}/README.md)`);
    }
  }

  const pages = entries.filter(isPage);
  for (const entry of pages) {
    const title = await pageTitle(path.join(dir, entry.name), toTitle(entry.name));
    lines.push(`${indent}* [${title}](${relDir}/${entry.name})`);
    indexLinks.push(`* [${title}](${relDir}/${entry.name})`);
  }

  if (indexLinks.length > 0) {
    const readme = [`# ${label}`, "", ...indexLinks, ""].join("\n");
    await writeFile(path.join(dir, "README.md"), readme, "utf8");
  }

  return lines;
};

const body = await walk(graphqlDir, "/graphql", 0, "GraphQL API");
const sidebar = ["* [Home](/)", "* [GraphQL API](/graphql/README.md)", ...body, ""].join("\n");

await writeFile(path.join(docsDir, "_sidebar.md"), sidebar, "utf8");
console.log("Generated docs/_sidebar.md and category README.md indexes");
