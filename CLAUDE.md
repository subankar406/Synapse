@AGENTS.md

## Ship status

After every change to the project, end your reply with a ship status line based on `git status` and `git log origin/main..HEAD`:

- **Ship status: Uncommitted.** There are local changes that haven't been committed. List the changed files briefly.
- **Ship status: Committed, not pushed.** The changes are committed locally but not on GitHub yet. Give the commit hash.
- **Ship status: Pushed.** The changes are committed and pushed to `origin/main`. Give the commit hash. This is when the Cloudflare deploy starts.

Commit or push only when the user asks.
