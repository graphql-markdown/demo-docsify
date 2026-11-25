# CreateProjectInput

Input used to create a project.

```graphql
input CreateProjectInput {
  name: String!
  ownerId: ID!
  folderId: ID
  status: ProjectStatus
}
```

### Fields

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CreateProjectInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/graphql/types/scalars/string.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The name for the new project.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CreateProjectInput</code>.<code class="gqlmd-mdx-entity-name">ownerId</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/graphql/types/scalars/id.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">scalar</span>

The identifier of the user who will own the project.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CreateProjectInput</code>.<code class="gqlmd-mdx-entity-name">folderId</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/graphql/types/scalars/id.md) <span class="gqlmd-badge">scalar</span>

The optional folder that will contain the project.

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CreateProjectInput</code>.<code class="gqlmd-mdx-entity-name">status</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProjectStatus</code></span>](/graphql/types/enums/project-status.md) <span class="gqlmd-badge">enum</span>

The initial lifecycle stage for the project.

### Example

```graphql
{}
```

### Member Of

[`createProject`](/graphql/operations/mutations/create-project.md)  <span class="gqlmd-badge">mutation</span>

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/types/inputs/create-project-input.md)
