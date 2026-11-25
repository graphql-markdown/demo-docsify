# folderCreated

Receive folders as they are created in the workspace.

```graphql
folderCreated(
  parentId: ID
): Folder!
```

### Arguments

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">folderCreated</code>.<code class="gqlmd-mdx-entity-name">parentId</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/graphql/types/scalars/id.md) <span class="gqlmd-badge">scalar</span>

Limit events to folders created under this parent.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Folder</code></span>](/graphql/types/objects/folder.md) <span class="gqlmd-badge">object</span>

A virtual folder used to organize workspace resources.

### Example

```graphql
subscription WatchFolders($parentId: ID) {
  folderCreated(parentId: $parentId) {
    id
    name
    parent
    createdAt
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/operations/subscriptions/folder-created.md)
