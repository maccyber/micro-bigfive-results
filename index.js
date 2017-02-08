'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')

module.exports = async (req, res) => {
  const {query, pathname} = await parse(req.url, true)
  const data = req.method === 'POST' ? await json(req) : query
  let result = {}
  if (pathname === '/getResults') {
    console.log(data)
    result = 'something'
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    result = marked(readme)
  }
  const status = result.error ? 500 : 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, status, result)
}
