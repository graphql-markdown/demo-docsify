# Folder

A virtual folder used to organize workspace resources.

```graphql
type Folder implements Node {
  id: ID!
  name: String!
  parent: String
  createdAt: DateTime!
}
```

### Fields

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Folder</code>.<code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/graphql/types/scalars/id.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The unique identifier of the folder.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Folder</code>.<code class="gqlmd-mdx-entity-name">name</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/graphql/types/scalars/string.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The human-readable folder name.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Folder</code>.<code class="gqlmd-mdx-entity-name">parent</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/graphql/types/scalars/string.md) <span class="gqlmd-badge">scalar</span>

The identifier of the parent folder, when nested.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Folder</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/graphql/types/scalars/date-time.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

When the folder was created.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/graphql/types/interfaces/node.md) <span class="gqlmd-badge">interface</span>

A globally unique entity identifier.

### Example

```graphql
{
  "id": "folder_01",
  "name": "Product Planning",
  "parent": "folder_root",
  "createdAt": "2026-09-05T09:30:00Z"
}
```

### Returned By

[`createFolder`](/graphql/operations/mutations/create-folder.md)  <span class="gqlmd-badge">mutation</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`folder`](/graphql/operations/queries/folder.md)  <span class="gqlmd-badge">query</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`folderCreated`](/graphql/operations/subscriptions/folder-created.md)  <span class="gqlmd-badge">subscription</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`folders`](/graphql/operations/queries/folders.md)  <span class="gqlmd-badge">query</span>

### Member Of

[`Project`](/graphql/types/objects/project.md)  <span class="gqlmd-badge">object</span>

### Implemented By

[`SearchResult`](/graphql/types/unions/search-result.md)  <span class="gqlmd-badge">union</span>

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/types/objects/folder.md)
