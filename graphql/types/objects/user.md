# User

A workspace member who owns and collaborates on projects.

```graphql
type User implements Node {
  id: ID!
  name: String!
  email: String!
  role: String!
}
```

### Fields

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/graphql/types/scalars/id.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The unique identifier of the user.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">name</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/graphql/types/scalars/string.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The user's display name.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">email</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/graphql/types/scalars/string.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The user's primary email address.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">role</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/graphql/types/scalars/string.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The user's role in the workspace.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/graphql/types/interfaces/node.md) <span class="gqlmd-badge">interface</span>

A globally unique entity identifier.

### Example

```graphql
{
  "id": "user_01",
  "name": "Avery Chen",
  "email": "avery@example.com",
  "role": "Product Lead"
}
```

### Member Of

[`Project`](/graphql/types/objects/project.md)  <span class="gqlmd-badge">object</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProjectEvent`](/graphql/types/objects/project-event.md)  <span class="gqlmd-badge">object</span>

### Implemented By

[`SearchResult`](/graphql/types/unions/search-result.md)  <span class="gqlmd-badge">union</span>

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/types/objects/user.md)
