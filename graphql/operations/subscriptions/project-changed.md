# projectChanged

Receive an event whenever a project changes in the workspace.

```graphql
projectChanged(
  projectId: ID
  types: [ProjectEventType!]
): ProjectEvent!
```

### Arguments

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">projectChanged</code>.<code class="gqlmd-mdx-entity-name">projectId</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/graphql/types/scalars/id.md) <span class="gqlmd-badge">scalar</span>

Limit events to a single project.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">projectChanged</code>.<code class="gqlmd-mdx-entity-name">types</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProjectEventType!]</code></span>](/graphql/types/enums/project-event-type.md) <span class="gqlmd-badge">list</span> <span class="gqlmd-badge">enum</span>

Limit events to these change kinds.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProjectEvent</code></span>](/graphql/types/objects/project-event.md) <span class="gqlmd-badge">object</span>

A change delivered to subscribers watching a project.

### Example

```graphql
subscription WatchProject($projectId: ID, $types: [ProjectEventType!]) {
  projectChanged(projectId: $projectId, types: $types) {
    type
    occurredAt
    project {
      id
      name
      status
    }
    actor {
      name
    }
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/operations/subscriptions/project-changed.md)
