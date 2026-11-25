# search

Search folders, projects, and users from a single endpoint.

```graphql
search(
  query: String!
): [SearchResult!]!
```

### Arguments

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">search</code>.<code class="gqlmd-mdx-entity-name">query</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/graphql/types/scalars/string.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

Text matched against folder, project, and user names.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SearchResult</code></span>](/graphql/types/unions/search-result.md) <span class="gqlmd-badge">union</span>

A result returned from global workspace search.

### Example

```graphql
query SearchWorkspace($query: String!) {
  search(query: $query) {
    __typename
    ... on Folder {
      id
      name
    }
    ... on Project {
      id
      name
      status
    }
    ... on User {
      id
      name
      email
    }
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/operations/queries/search.md)
