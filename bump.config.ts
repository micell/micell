import { execSync } from 'node:child_process'
import { defineConfig } from 'bumpp'

/**
 * Release flow (driven by `pnpm release`):
 *   1. bumpp bumps the version (interactive semver prompt)
 *   2. `execute` regenerates CHANGELOG.md for the new version and stages it
 *   3. bumpp commits `chore(release): <version>` on `release/v<version>`,
 *      pushes the branch and opens a pull request
 *
 * No tag is created here: a squash or rebase merge rewrites the release commit,
 * so the tag is made on the merge result by `pnpm release:tag`.
 */
export default defineConfig({
  all: true,
  pr: {
    base: 'main',
    branch: 'release/v{version}',
    title: 'chore(release): {version}',
    body: '{oldVersion} → {version}',
  },
  execute(operation) {
    execSync(`changelogen --output CHANGELOG.md -r ${operation.state.newVersion}`, {
      stdio: 'inherit',
    })
    // A brand-new CHANGELOG.md is untracked, and the release commit uses
    // `git commit -a`, which skips untracked files — stage it explicitly.
    execSync('git add CHANGELOG.md', { stdio: 'inherit' })
  },
})
