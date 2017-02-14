'use strict'

const resolvePath = require('path').resolve
const fs = require('fs')

module.exports = opts => {
  const path = resolvePath(`./data/${opts.testType}/${opts.langCode}/index.js`)
  const file = fs.existsSync(path) ? require(path) : false
  if (!fs.existsSync(path)) {
    throw Error(`Path does not exist`)
  }
  return file
}
