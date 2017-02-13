'use strict'

const findDomain = require('./lib/find-domain')

const testData = {
  O: { score: 33, count: 10, result: 'positive', facet: {} },
  N: { score: 21, count: 10, result: 'negative', facet: {} },
  E: { score: 31, count: 10, result: 'positive', facet: {} },
  C: { score: 31, count: 10, result: 'positive', facet: {} },
  A: { score: 30, count: 10, result: 'neutral', facet: {} }
}

const domains = findDomain(testData)
console.log(JSON.stringify(domains, null, 2))
