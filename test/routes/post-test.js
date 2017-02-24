'use strict'

const test = require('ava')
const listen = require('test-listen')
const axios = require('axios')
const micro = require('micro')
const srv = require('../../index')
const expectedResults = require('../lib/data/results.json')
const payload = {
  'testType': 'personality',
  'langCode': 'en',
  'data': {
    'O': { 'score': 33, 'count': 10, 'result': 'high', 'facet': {} },
    'N': { 'score': 21, 'count': 10, 'result': 'low', 'facet': {} },
    'E': { 'score': 31, 'count': 10, 'result': 'high', 'facet': {} },
    'C': { 'score': 31, 'count': 10, 'result': 'high', 'facet': {} },
    'A': { 'score': 30, 'count': 10, 'result': 'neutral', 'facet': {} }
  }
}

const getUrl = fn => {
  const srv = micro(fn)
  return listen(srv)
}

test('it returns expected tests from POST', async t => {
  const url = await getUrl(srv)
  const result = await axios.post(`${url}`, payload)
  t.deepEqual(result.data, expectedResults, 'POST ok')
})
