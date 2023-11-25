/* eslint-env node */
const path = require("path")

const lintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`

const formatCommand = "prettier --write --ignore-path .gitignore ."

module.exports = {
  "*.{js,jsx,ts,tsx}": [formatCommand, lintCommand],
}
