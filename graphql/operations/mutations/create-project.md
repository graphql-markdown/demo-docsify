# createProject

Create a project and assign its initial owner.

```graphql
createProject(
  input: CreateProjectInput!
): Project!
```

### Arguments

#### <span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">createProject</code>.<code class="gqlmd-mdx-entity-name">input</code></span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CreateProjectInput!</code></span>](/graphql/types/inputs/create-project-input.md) <span class="gqlmd-badge">non-null</span> <span class="gqlmd-badge">input</span>

The project attributes to create.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Project</code></span>](/graphql/types/objects/project.md) <span class="gqlmd-badge">object</span>

A unit of work tracked in the workspace.

### Example

```graphql
mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    name
    status
    folder {
      id
      name
    }
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/operations/mutations/create-project.md)
