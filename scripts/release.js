const fs = require('fs')
const path = require('path')
const yargsParser = require('yargs-parser')
const { exec, exit, rm, mkdir, cp } = require('shelljs')
const { flowRight: compose } = require('lodash')
const chalk = require('chalk')
const readline = require('readline-sync')
const semver = require('semver')
const pkg = require('../package.json')

const consoleLog = console.log.bind(console)
const log = compose(consoleLog, chalk.bold)
const logSuccess = compose(consoleLog, chalk.green.bold)
const logError = compose(consoleLog, chalk.red.bold)

const argv = yargsParser(process.argv.slice(2))
const { pkgOnly = false } = argv
const root = path.resolve(__dirname, '..')
const outDir = path.resolve(root, 'build')

const writeFile = (filepath, string) =>
  fs.writeFileSync(filepath, string, 'utf8')

try {
  if (!pkgOnly && exec('git diff-files --quiet').code !== 0) {
    logError(`You have unsaved changes in the working tree. Commit or stash changes before releaseing.`)
    exit(1)
  }

  let nextVersion = readline.question(
    `Next version of ${pkg.name} (current version is ${pkg.version}):`
  )

  while (!((semver.valid(nextVersion) && semver.gt(nextVersion, pkg.version)))) {
    nextVersion = readline.question(
      `Must provide a valid version that is greater than ${pkg.version}:`
    )
  }

  log('Running tests...')

  if (exec('yarn run lint && yarn test:ci').code !== 0) {
    logError('The test command did not exit cleanly.')
    exit(1)
  }

  logSuccess('Tests were successful.')

  log('Cleaning destination directory...')
  rm('-rf', outDir)

  log('Create the destination directory...')
  mkdir(outDir)

  log('Compiling source files...')

  exec('yarn run build')

  log('Copying files...')
  const files = [
    'dist',
    'lib/*',
    'types/*',
    'README.md',
    'LICENSE'
  ]
  files.forEach(filename => {
    const src = path.resolve(root, filename)
    cp('-Rf', src, outDir)
  })

  log('Generating package.json...')
  const pkgConfig = Object.assign(pkg, { version: nextVersion })

  writeFile(path.resolve(outDir, 'package.json'), JSON.stringify(pkgConfig, null, 2))

  if (pkgOnly) {
    log('Prepublish done!')
    exit(0)
  }

  log('Publishing...')
  if (exec(`cd ${outDir} && npm publish`).code !== 0) {
    logError('Publish failed.')
    exit(1)
  }

  logSuccess(`${pkg.name}@${nextVersion} was successfully published.`)

  log('Bump version...')
  exec(`npm version --no-git-tag-version ${nextVersion}`)

  log('Committing changes...')
  exec('git add package.json')
  exec(`git commit -m "Release ${nextVersion}"`)
  exec(`git tag ${nextVersion}`)

  log('Pushing to Github...')
  exec('git push')
  exec('git push --tags')

  logSuccess('Done.')
} catch (error) {
  logError('Release failed due to an error', error)
}
