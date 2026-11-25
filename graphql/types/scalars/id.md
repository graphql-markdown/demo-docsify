# ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

```graphql
scalar ID
```

### Member Of

[`archiveProject`](/graphql/operations/mutations/archive-project.md)  <span class="gqlmd-badge">mutation</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`createFolder`](/graphql/operations/mutations/create-folder.md)  <span class="gqlmd-badge">mutation</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CreateProjectInput`](/graphql/types/inputs/create-project-input.md)  <span class="gqlmd-badge">input</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`folder`](/graphql/operations/queries/folder.md)  <span class="gqlmd-badge">query</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Folder`](/graphql/types/objects/folder.md)  <span class="gqlmd-badge">object</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`folderCreated`](/graphql/operations/subscriptions/folder-created.md)  <span class="gqlmd-badge">subscription</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`LegacyProject`](/graphql/types/objects/legacy-project.md)  <span class="gqlmd-badge">object</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Node`](/graphql/types/interfaces/node.md)  <span class="gqlmd-badge">interface</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Project`](/graphql/types/objects/project.md)  <span class="gqlmd-badge">object</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`projectChanged`](/graphql/operations/subscriptions/project-changed.md)  <span class="gqlmd-badge">subscription</span><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`User`](/graphql/types/objects/user.md)  <span class="gqlmd-badge">object</span>

[View as Markdown](https://graphql-markdown.dev/demo-docsify/graphql/types/scalars/id.md)
