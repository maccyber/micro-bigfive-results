'use strict'

const findDomain = require('./lib/find-domain')
const getTest = require('./lib/get-test')
const testData = {
  O: { score: 33, count: 10, result: 'positive', facet: {'1': {'score': 3, 'count': 1, result: 'neutral'}, '2': {'score': 3, 'count': 1, result: 'neutral'}} },
  N: { score: 21, count: 10, result: 'negative', facet: {'1': {'score': 3, 'count': 1, result: 'neutral'}, '2': {'score': 3, 'count': 1, result: 'neutral'}} },
  E: { score: 31, count: 10, result: 'positive', facet: {'1': {'score': 3, 'count': 1, result: 'neutral'}, '2': {'score': 3, 'count': 1, result: 'neutral'}} },
  C: { score: 31, count: 10, result: 'positive', facet: {'1': {'score': 3, 'count': 1, result: 'neutral'}, '2': {'score': 3, 'count': 1, result: 'neutral'}} },
  A: { score: 30, count: 10, result: 'neutral', facet: {'1': {'score': 3, 'count': 1, result: 'neutral'}, '2': {'score': 3, 'count': 1, result: 'neutral'}} }
}

const template = getTest({testType: 'personality', langCode: 'no'})
const domains = findDomain(testData, template)
console.log(JSON.stringify(domains, null, 2))
