#!/usr/bin/env zx
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { compose } from 'ramda'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')
const outDir = path.resolve(root, 'build')

const consoleLog = console.log.bind(console)
const log = compose(consoleLog, chalk.bold)
const logSuccess = compose(consoleLog, chalk.green.bold)
const logError = compose(consoleLog, chalk.red.bold)

try {
  await $`git diff-files --quiet`
} catch (p) {
  logError(`You have unsaved changes in the working tree. Commit or stash changes before releaseing.`)
  process.exit(p.exitCode)
}

log('Running tests...')

try {
  await $`pnpm run lint && pnpm run test:ci`
} catch (p) {
  logError('The test command did not exit cleanly.')
  process.exit(p.exitCode)
}

logSuccess('Tests were successful.')

log('Cleaning destination directory...')
await fs.remove(outDir)

log('Create the destination directory...')
await fs.mkdirp(outDir)

log('Compiling source files...')

await $`pnpm run build`

log('Copying files...')
const files = await glob([
  'dist/**/*',
  'lib/**/*',
  'types/**/*',
  'README.md',
  'LICENSE',
  'package.json',
])
for (const filename of files) {
  await fs.copy(path.resolve(root, filename), path.join(outDir, filename))
}

logSuccess('Prepare done.')
