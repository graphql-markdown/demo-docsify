# Project

A unit of work tracked in the workspace.

```graphql
type Project implements Node {
  id: ID!
  name: String!
  status: ProjectStatus!
  owner: User!
  folder: Folder
  updatedAt: DateTime!
  state: String @deprecated
}
```

### Fields

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Project</code>.<code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/graphql/types/scalars/id.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The unique identifier of the project.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Project</code>.<code class="gqlmd-mdx-entity-name">name</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/graphql/types/scalars/string.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The project name shown to collaborators.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Project</code>.<code class="gqlmd-mdx-entity-name">status</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProjectStatus!</code></span>](/graphql/types/enums/project-status.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">enum</span>

The current lifecycle stage of the project.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Project</code>.<code class="gqlmd-mdx-entity-name">owner</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User!</code></span>](/graphql/types/objects/user.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">object</span>

The user responsible for the project.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Project</code>.<code class="gqlmd-mdx-entity-name">folder</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Folder</code></span>](/graphql/types/objects/folder.md) <span class="gqlmd-badge">object</span>

The folder containing this project, when assigned.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Project</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/graphql/types/scalars/date-time.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

When the project was last updated.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Project</code>.<code class="gqlmd-mdx-entity-name">state</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/graphql/types/scalars/string.md) <span class="gqlmd-badge">deprecated</span> <span class="gqlmd-badge">scalar</span>

> [!WARNING]
> **DEPRECATED**
>
>
> Replaced by the [`ProjectStatus`](/graphql/types/enums/project-status.md) enum on status.
>
>

The project's lifecycle stage.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/graphql/types/interfaces/node.md) <span class="gqlmd-badge">interface</span>

A globally unique entity identifier.

### Example

```graphql
{
  "id": "project_01",
  "name": "Mobile Refresh",
  "status": "ACTIVE",
  "owner": {
    "id": "user_01",
    "name": "Avery Chen"
  },
  "updatedAt": "2026-09-05T10:15:00Z"
}
```

### Returned By

[`archiveProject`](/graphql/operations/mutations/archive-project.md)  <span class="gqlmd-badge">mutation</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`createProject`](/graphql/operations/mutations/create-project.md)  <span class="gqlmd-badge">mutation</span>

### Member Of

[`ProjectConnection`](/graphql/types/objects/project-connection.md)  <span class="gqlmd-badge">object</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProjectEvent`](/graphql/types/objects/project-event.md)  <span class="gqlmd-badge">object</span>

### Implemented By

[`SearchResult`](/graphql/types/unions/search-result.md)  <span class="gqlmd-badge">union</span>

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/types/objects/project.md)
