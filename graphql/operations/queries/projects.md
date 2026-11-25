# projects

List projects, optionally filtered by lifecycle status.

```graphql
projects(
  status: ProjectStatus
  limit: Int
): ProjectConnection!
```

### Arguments

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">projects</code>.<code class="gqlmd-mdx-entity-name">status</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProjectStatus</code></span>](/graphql/types/enums/project-status.md) <span class="gqlmd-badge">enum</span>

Limit results to projects in this lifecycle stage.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">projects</code>.<code class="gqlmd-mdx-entity-name">limit</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/graphql/types/scalars/int.md) <span class="gqlmd-badge">scalar</span>

Maximum number of projects to return. Defaults to 20.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProjectConnection</code></span>](/graphql/types/objects/project-connection.md) <span class="gqlmd-badge">object</span>

A paginated project result set.

### Example

```graphql
query ListActiveProjects($status: ProjectStatus) {
  projects(status: $status) {
    totalCount
    nodes {
      id
      name
      status
      owner {
        name
      }
    }
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/operations/queries/projects.md)
