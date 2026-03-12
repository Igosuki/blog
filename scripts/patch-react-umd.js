/**
 * React 19 removed UMD builds, but gatsby-plugin-decap-cms@4.x tries to copy
 * react/umd/react.production.min.js and react-dom/umd/react-dom.production.min.js
 * to the CMS admin output directory.
 *
 * decap-cms-app 3.10+ bundles React internally and does not depend on these
 * UMD globals at runtime, so empty stubs are safe.
 *
 * This script creates the stub files after every npm install.
 */

const fs = require('fs')
const path = require('path')

const stub =
  '// React 19 does not ship UMD builds.\n' +
  '// Stub for gatsby-plugin-decap-cms file copy compatibility.\n' +
  '// decap-cms-app 3.10+ bundles React internally.\n'

const files = [
  path.join(__dirname, '../node_modules/react/umd/react.production.min.js'),
  path.join(
    __dirname,
    '../node_modules/react-dom/umd/react-dom.production.min.js'
  ),
]

for (const file of files) {
  const dir = path.dirname(file)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, stub, 'utf8')
    console.log('Created UMD stub:', file)
  }
}
