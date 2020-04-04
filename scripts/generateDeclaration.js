const { find, exec, exit } = require('shelljs')

const files = find('src').filter(f => f.match(/\.ts$/) && f.indexOf('src/_internal') === -1)

const result = exec(`tsc --rootDir src --declaration --emitDeclarationOnly --declarationDir types ${files.join(' ')}`)

if (result.code !== 0) {
  exit(1)
}
