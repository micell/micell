const path = require('path')
const { exec, exit, rm, mkdir, cp } = require('shelljs')
const { flowRight: compose } = require('lodash')
const chalk = require('chalk')

const consoleLog = console.log.bind(console)
const log = compose(consoleLog, chalk.bold)
const logSuccess = compose(consoleLog, chalk.green.bold)
const logError = compose(consoleLog, chalk.red.bold)

const root = path.resolve(__dirname, '..')
const outDir = path.resolve(root, 'build')

try {
  if (exec('git diff-files --quiet').code !== 0) {
    logError(
      `You have unsaved changes in the working tree. Commit or stash changes before releaseing.`,
    )
    exit(1)
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
    'LICENSE',
    'package.json',
  ]
  files.forEach((filename) => {
    const src = path.resolve(root, filename)
    cp('-Rf', src, outDir)
  })

  logSuccess('Prepare done.')
} catch (error) {
  logError('Prepare failed due to an error', error)
}
