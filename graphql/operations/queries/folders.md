# folders

List folders available in the current workspace.

```graphql
folders(
  limit: Int
  offset: Int
): [Folder!]!
```

### Arguments

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">folders</code>.<code class="gqlmd-mdx-entity-name">limit</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/graphql/types/scalars/int.md) <span class="gqlmd-badge">scalar</span>

Maximum number of folders to return.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">folders</code>.<code class="gqlmd-mdx-entity-name">offset</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/graphql/types/scalars/int.md) <span class="gqlmd-badge">scalar</span>

Number of folders to skip before returning results.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Folder</code></span>](/graphql/types/objects/folder.md) <span class="gqlmd-badge">object</span>

A virtual folder used to organize workspace resources.

### Example

```graphql
query ListFolders {
  folders {
    id
    name
    parent
    createdAt
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/operations/queries/folders.md)
