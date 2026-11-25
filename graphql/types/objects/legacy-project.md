# LegacyProject

<span class="gqlmd-badge">deprecated</span>

Use Project instead for active workspace work.

> [!WARNING]
> **Deprecated**
> Replaced by [`Project`](/graphql/types/objects/project.md) to support ownership and lifecycle status.

```graphql
type LegacyProject {
  id: ID!
  name: String!
}
```

### Fields

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">LegacyProject</code>.<code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/graphql/types/scalars/id.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The unique identifier of the legacy project.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">LegacyProject</code>.<code class="gqlmd-mdx-entity-name">name</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/graphql/types/scalars/string.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The legacy project name.

### Example

```graphql
{}
```

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/types/objects/legacy-project.md)
