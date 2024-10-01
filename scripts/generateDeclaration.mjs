#!/usr/bin/env zx

const files = await glob([
  'src/**/*.ts'
], {
  ignore: [
    'src/_internal/**'
  ],
})

await $`tsc --rootDir src --declaration --emitDeclarationOnly --declarationDir types ${files}`

echo('Declaration files generated successfully')
