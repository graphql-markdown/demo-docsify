# SearchResult

A result returned from global workspace search.

```graphql
union SearchResult = Folder | Project | User
```

### Possible types

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SearchResult</code>.<code class="gqlmd-mdx-entity-name">Folder</code></span>](/graphql/types/objects/folder.md) <span class="gqlmd-badge">object</span>

A virtual folder used to organize workspace resources.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SearchResult</code>.<code class="gqlmd-mdx-entity-name">Project</code></span>](/graphql/types/objects/project.md) <span class="gqlmd-badge">object</span>

A unit of work tracked in the workspace.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SearchResult</code>.<code class="gqlmd-mdx-entity-name">User</code></span>](/graphql/types/objects/user.md) <span class="gqlmd-badge">object</span>

A workspace member who owns and collaborates on projects.

### Returned By

[`search`](/graphql/operations/queries/search.md)  <span class="gqlmd-badge">query</span>

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/types/unions/search-result.md)
