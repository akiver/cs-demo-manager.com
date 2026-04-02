---
name: generate-changelog
description: Generates a new changelog entry in src/pages/changelog.mdx from commits made after the latest GitHub release of akiver/cs-demo-manager. Use this when asked to generate or update the changelog.
---

## Goal

Fetch all commits to `akiver/cs-demo-manager` that are newer than the latest release and prepend a new changelog entry to `src/pages/changelog.mdx`.

## Steps

### 1. Get the latest release

Run:

```sh
gh release view --repo akiver/cs-demo-manager --json tagName,publishedAt
```

Note the `tagName` (e.g. `v3.18.4`) and `publishedAt` ISO timestamp.

### 2. Fetch commits since that release

Run:

```sh
gh api "repos/akiver/cs-demo-manager/commits?since=<publishedAt>&per_page=100" --paginate
```

Parse each item's `.commit.message` and `.commit.author.date`.

### 3. Filter and classify commits

- **Skip** any commit whose message starts with `chore`, `ci`, or similar maintenance prefixes. Also skip merge commits.
- Classify remaining commits by their conventional-commit prefix and scope:
  - `feat(...)` or `feat:` → **New features and improvements**
  - `fix(...)` or `fix:` → **Fixes**
- Extract the scope (the part in parentheses, e.g. `video`, `ui`, `demos`, `playback`, `analyze`, `match`, `download`, `cli`) as the **category** heading. Capitalize the first letter. If no scope, use a suitable category inferred from the message.
- Strip the prefix/scope from the message to get the human-readable description. Capitalize the first letter.
- Preserve any `closes #NNN` or `ref #NNN` issue references if present, but do not add them as links in the changelog — omit them from the final text.

### 4. Determine the next version number

Look at the top-level `## vX.Y.Z` heading in `src/pages/changelog.mdx` to find the current latest version in the changelog.

- If there are only `fix:` commits → increment the **patch** number (X.Y.**Z+1**).
- If there are at least 4 `feat:` commits → increment the **minor** number (X.**Y+1**.0).

### 5. Write the changelog entry

Prepend the following block immediately after the HTML comment on line 1 of `src/pages/changelog.mdx` (before the existing first `## v...` heading).

**Important:** The previous version section already contains the `:::info` open source notice — do **not** duplicate it. After inserting the new entry, find the old `## vX.Y.Z` heading that immediately follows and delete its `:::info ... :::` block (including the surrounding blank lines) if present.

```mdx
## v<NEXT_VERSION>

:::info
CS Demo Manager is a free and open-source software not backed by any corporate entity.  
You can support the project by [contributing](/docs/contributing) or [donating](/download#donate).
:::

### New features and improvements

#### <Category>

- <description>

### Fixes

#### <Category>

- <description>
```

Rules:
- Only include `### New features and improvements` if there are feature commits; only include `### Fixes` if there are fix commits.
- Group bullets under `#### <Category>` headings. Use one heading per unique category; list all bullets for that category under it.
- Use sentence case for bullet descriptions.
- Keep bullets concise — one line each unless a multi-line body adds essential context.
- Do **not** include issue/PR numbers or links in the text.
- Match the style of existing entries in the file exactly.
