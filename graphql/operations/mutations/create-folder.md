# createFolder

Create a virtual folder in the workspace.

```graphql
createFolder(
  name: String!
  parentId: ID
): Folder!
```

### Arguments

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">createFolder</code>.<code class="gqlmd-mdx-entity-name">name</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/graphql/types/scalars/string.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The name of the new folder.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">createFolder</code>.<code class="gqlmd-mdx-entity-name">parentId</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/graphql/types/scalars/id.md) <span class="gqlmd-badge">scalar</span>

The optional parent folder identifier.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Folder</code></span>](/graphql/types/objects/folder.md) <span class="gqlmd-badge">object</span>

A virtual folder used to organize workspace resources.

### Example

```graphql
mutation CreateFolder($name: String!, $parentId: ID) {
  createFolder(name: $name, parentId: $parentId) {
    id
    name
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/operations/mutations/create-folder.md)
