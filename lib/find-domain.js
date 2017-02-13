'use strict'

const template = require('../data/index')

module.exports = answers => {
  const domainResults = Object.keys(answers).map(key => {
    const answer = answers[key]
    const domain = template.find(r => key === r.domain)
    const result = domain.results.find(r => r.score === answer.result)
    return {
      domain: domain.domain,
      tilte: domain.title,
      shortDescripton: domain.shortDescripton,
      description: domain.description,
      scoreText: result.score,
      score: answer.score,
      text: result.text.replace('{{score}}', answer.score)
    }
  })
  return domainResults
}
