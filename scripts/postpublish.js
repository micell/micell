const path = require('path')
const replace = require('replace')
const { cp } = require('shelljs')
const pkg = require('./package.json')

function replaceVersion() {
  replace({
    regex: /micell@\d+\.\d+\.\d+/g,
    replacement: `micell@${pkg.version}`,
    paths: [
      path.resolve(__dirname, '../README.md'),
      path.resolve(__dirname, '../docs/README.md'),
      path.resolve(__dirname, '../docs/cn/README.md'),
    ],
  })
}

function copyPkg() {
  cp('-f', './package.json', '../package.json')
}

function main() {
  copyPkg()
  replaceVersion()
}

main()
