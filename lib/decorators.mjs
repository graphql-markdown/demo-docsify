// lib/decorators.mjs
// Decorators for the Docsify pages (generate-docs.mjs).
import {
  directiveOccurrence,
  hasDirectiveNamed,
} from "@graphql-markdown/graphql";

export const decorators = {
  // Mirrors the built-in `@deprecated` treatment (badge + callout) for the
  // type-level `@deprecatedType` directive, which the spec doesn't allow
  // `@deprecated` to target.
  deprecatedTypeTag: {
    predicate: hasDirectiveNamed("deprecatedType"),
    position: { into: "tags" },
    render: (_values, options) =>
      options.formatMDXBadge({ text: "deprecated" }),
  },
  deprecatedTypeNotice: {
    predicate: hasDirectiveNamed("deprecatedType"),
    position: { into: "description" },
    resolve: directiveOccurrence("deprecatedType"),
    render: ([value], options) =>
      options.formatMDXAdmonition(
        { text: String(value.reason), title: "Deprecated", type: "warning" },
        options.meta,
      ),
  },
};

export default decorators;
