# folder

Fetch a single folder by its unique identifier.

```graphql
folder(
  id: ID!
): Folder
```

### Arguments

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">folder</code>.<code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/graphql/types/scalars/id.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The unique identifier of the folder to retrieve.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Folder</code></span>](/graphql/types/objects/folder.md) <span class="gqlmd-badge">object</span>

A virtual folder used to organize workspace resources.

### Example

```graphql
query GetFolder($id: ID!) {
  folder(id: $id) {
    id
    name
    parent
    createdAt
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/operations/queries/folder.md)
