#!/usr/bin/env zx
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import replace from 'replace'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const { version } = await fs.readJson(path.resolve(__dirname, '../package.json'))

replace({
  regex: /micell@\d+\.\d+\.\d+/g,
  replacement: `micell@${version}`,
  paths: [
    path.resolve(__dirname, '../README.md'),
    path.resolve(__dirname, '../docs/README.md'),
    path.resolve(__dirname, '../docs/cn/README.md'),
  ],
})

await fs.copy('./package.json', '../package.json')
