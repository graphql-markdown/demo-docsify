# ProjectConnection

A paginated project result set.

```graphql
type ProjectConnection {
  nodes: [Project!]!
  totalCount: Int!
}
```

### Fields

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectConnection</code>.<code class="gqlmd-mdx-entity-name">nodes</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Project!]!</code></span>](/graphql/types/objects/project.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">object</span>

Projects in the current result page.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectConnection</code>.<code class="gqlmd-mdx-entity-name">totalCount</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/graphql/types/scalars/int.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The total number of projects matching the query.

### Example

```graphql
{
  "nodes": [
    {
      "id": "project_01",
      "name": "Mobile Refresh",
      "status": "ACTIVE",
      "owner": {
        "id": "user_01",
        "name": "Avery Chen"
      },
      "updatedAt": "2026-09-05T10:15:00Z"
    }
  ]
}
```

### Returned By

[`projects`](/graphql/operations/queries/projects.md)  <span class="gqlmd-badge">query</span>

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/types/objects/project-connection.md)
