# ProjectEventType

The kind of change that occurred on a project.

```graphql
enum ProjectEventType {
  CREATED
  UPDATED
  ARCHIVED
}
```

### Values

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectEventType</code>.<code class="gqlmd-mdx-entity-name">CREATED</code></span>

The project was created.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectEventType</code>.<code class="gqlmd-mdx-entity-name">UPDATED</code></span>

One or more project fields were updated.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProjectEventType</code>.<code class="gqlmd-mdx-entity-name">ARCHIVED</code></span>

The project was archived.

### Member Of

[`projectChanged`](/graphql/operations/subscriptions/project-changed.md)  <span class="gqlmd-badge">subscription</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProjectEvent`](/graphql/types/objects/project-event.md)  <span class="gqlmd-badge">object</span>

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/types/enums/project-event-type.md)
