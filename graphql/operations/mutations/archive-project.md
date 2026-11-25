# archiveProject

Archive a project that is no longer active.

```graphql
archiveProject(
  id: ID!
): Project!
```

### Arguments

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">archiveProject</code>.<code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/graphql/types/scalars/id.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The unique identifier of the project to archive.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Project</code></span>](/graphql/types/objects/project.md) <span class="gqlmd-badge">object</span>

A unit of work tracked in the workspace.

### Example

```graphql
mutation ArchiveProject($id: ID!) {
  archiveProject(id: $id) {
    id
    name
    status
    updatedAt
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/operations/mutations/archive-project.md)
