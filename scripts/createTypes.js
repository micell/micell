#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const yargsParser = require('yargs-parser')

const argv = yargsParser(process.argv.slice(2))
const rootDir = path.resolve(__dirname, '..')
const sourceDir = path.resolve(rootDir, 'src')
const typesDir = path.resolve(rootDir, 'types')
const ns = argv.ns || argv.namespace

;(async () => {
  const files = await fs.promises.readdir(path.join(sourceDir, ns))
  const nsTypesDir = path.join(typesDir, ns)

  try {
    await fs.promises.mkdir(nsTypesDir)
  } catch (err) {}

  for (const file of files) {
    if (path.extname(file) !== '.js') continue

    const filename = path.basename(file, '.js')
    let content = ''

    if (filename === 'index') {
      content += 'import micell from "../index";\n'
      content += `export default micell.${ns};\n`
    } else {
      content += `import ${ns} from "./index";\n`
      content += `export default ${ns}.${filename};\n`
    }

    const typeFile = path.join(nsTypesDir, `${filename}.d.ts`)

    await fs.promises.writeFile(typeFile, content, 'utf8')
  }
})()
