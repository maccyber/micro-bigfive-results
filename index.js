'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')
const getTest = require('./lib/get-test')
const findDomain = require('./lib/find-domain')

module.exports = async (req, res) => {
  const {query} = await parse(req.url, true)
  const data = req.method === 'POST' ? await json(req) : query
  let result = {}
  if (req.method === 'POST') {
    const opts = {
      langCode: data.langCode || 'en',
      testType: data.testType || 'personality'
    }
    const template = getTest(opts)
    result = findDomain(data.data, template)
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    result = marked(readme)
  }
  const status = result.error ? 500 : 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, status, result)
}
