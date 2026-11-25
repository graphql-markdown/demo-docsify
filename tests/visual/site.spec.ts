import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

// One page per GraphQL type kind the formatter renders differently.
// Docsify renders on the client, so routes are hash routes (`/#/...`).
const pages = [
  ["object", "graphql/types/objects/project", "Project"],
  ["enum", "graphql/types/enums/project-status", "ProjectStatus"],
  ["interface", "graphql/types/interfaces/node", "Node"],
  ["union", "graphql/types/unions/search-result", "SearchResult"],
  ["input", "graphql/types/inputs/create-project-input", "CreateProjectInput"],
  ["scalar", "graphql/types/scalars/date-time", "DateTime"],
  ["query", "graphql/operations/queries/projects", "projects"],
  ["mutation", "graphql/operations/mutations/create-project", "createProject"],
  [
    "subscription",
    "graphql/operations/subscriptions/project-changed",
    "projectChanged",
  ],
  ["directive", "graphql/types/directives/deprecated", "deprecated"],
] as const;

// Docsify only paints the content once its router has rendered the page, so
// wait for the heading and the sidebar links before taking any screenshot.
// The sidebar is off-canvas on mobile, so check it is rendered, not visible.
const waitForRender = async (page: Page) => {
  await expect(page.locator(".markdown-section h1").first()).toBeVisible();
  await expect(page.locator(".sidebar-nav a").first()).toBeAttached();
};

// Element screenshots are stitched while scrolling; hide the sticky mobile
// top bar so it is not painted over the content.
const hideChrome = ".sidebar-toggle { display: none !important; }";

const content = (page: Page) => page.locator(".markdown-section");

test("home", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await waitForRender(page);
  await expect(page.locator(".markdown-section h1")).toHaveText(
    "Your API, mapped with intent.",
  );
  await argosScreenshot(page, "home", { argosCSS: hideChrome });
});

for (const [kind, path, title] of pages) {
  test(`page: ${kind}`, async ({ page }) => {
    const response = await page.goto(`/#/${path}`);
    expect(response?.status()).toBe(200);
    await waitForRender(page);
    await expect(page.locator(".markdown-section h1").first()).toHaveText(
      title,
    );
    await argosScreenshot(page, `page-${kind}`, {
      element: content(page),
      argosCSS: hideChrome,
    });
  });
}

// The source Markdown of a page is served next to it, unchanged.
test("markdown source", async ({ request }) => {
  const response = await request.get("/graphql/types/objects/project.md");
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain("Replaced by the");
});

// Backticked type names in deprecation reasons link to their page (hash route).
test("deprecation reason links to a type page", async ({ page }) => {
  await page.goto("/#/graphql/types/objects/project");
  await waitForRender(page);
  const admonition = page
    .locator(".markdown-section .callout", { hasText: "Replaced by" })
    .first();
  await expect(admonition).toBeAttached();
  const link = admonition.locator("a", { hasText: "ProjectStatus" });
  await expect(link).toHaveAttribute(
    "href",
    /#\/graphql\/types\/enums\/project-status/,
  );
});

// A type-level `@deprecatedType` renders the "Deprecated" notice, with the
// replacement type linked from its reason.
test("deprecated type notice links to the replacement", async ({ page }) => {
  await page.goto("/#/graphql/types/objects/legacy-project");
  await waitForRender(page);
  const notice = page
    .locator(".markdown-section .callout", { hasText: "Replaced by" })
    .first();
  await expect(notice).toContainText("Deprecated");
  await expect(notice.locator("a", { hasText: /^Project$/ })).toHaveAttribute(
    "href",
    /\/graphql\/types\/objects\/project/,
  );
});

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("home", async ({ page }) => {
    await page.goto("/");
    await waitForRender(page);
    await argosScreenshot(page, "home-dark", { argosCSS: hideChrome });
  });

  test("page: object", async ({ page }) => {
    await page.goto("/#/graphql/types/objects/project");
    await waitForRender(page);
    await argosScreenshot(page, "page-object-dark", {
      element: content(page),
      argosCSS: hideChrome,
    });
  });
});
