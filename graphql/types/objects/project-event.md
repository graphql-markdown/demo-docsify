# ProjectEvent

A change delivered to subscribers watching a project.

```graphql
type ProjectEvent {
  type: ProjectEventType!
  project: Project!
  actor: User
  occurredAt: DateTime!
}
```

### Fields

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectEvent</code>.<code class="gqlmd-mdx-entity-name">type</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProjectEventType!</code></span>](/graphql/types/enums/project-event-type.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">enum</span>

The kind of change that occurred.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectEvent</code>.<code class="gqlmd-mdx-entity-name">project</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Project!</code></span>](/graphql/types/objects/project.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">object</span>

The project in its state after the change.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectEvent</code>.<code class="gqlmd-mdx-entity-name">actor</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/graphql/types/objects/user.md) <span class="gqlmd-badge">object</span>

The user who triggered the change, when known.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectEvent</code>.<code class="gqlmd-mdx-entity-name">occurredAt</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/graphql/types/scalars/date-time.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

When the change occurred.

### Example

```graphql
{
  "type": "UPDATED",
  "project": {
    "id": "project_01",
    "name": "Mobile Refresh",
    "status": "ACTIVE"
  },
  "occurredAt": "2026-09-05T10:15:00Z"
}
```

### Returned By

[`projectChanged`](/graphql/operations/subscriptions/project-changed.md)  <span class="gqlmd-badge">subscription</span>

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/types/objects/project-event.md)
