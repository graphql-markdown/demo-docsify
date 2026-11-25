# ProjectStatus

The lifecycle stage of a project.

```graphql
enum ProjectStatus {
  DRAFT
  ACTIVE
  ARCHIVED
}
```

### Values

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectStatus</code>.<code class="gqlmd-mdx-entity-name">DRAFT</code></span>

The project is being planned and is not yet active.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectStatus</code>.<code class="gqlmd-mdx-entity-name">ACTIVE</code></span>

The project is active and available to collaborators.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectStatus</code>.<code class="gqlmd-mdx-entity-name">ARCHIVED</code></span>

The project is retained for history and no longer active.

### Member Of

[`CreateProjectInput`](/graphql/types/inputs/create-project-input.md)  <span class="gqlmd-badge">input</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Project`](/graphql/types/objects/project.md)  <span class="gqlmd-badge">object</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`projects`](/graphql/operations/queries/projects.md)  <span class="gqlmd-badge">query</span>

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/types/enums/project-status.md)
