/* eslint-env mocha */
/* global browser */
import ExampleSequence from '../sequences/ExampleSequence'

browser.waitForAngularEnabled(false)

describe('example domain test', () => {
  let exampleSequence

  before(() => {
    exampleSequence = new ExampleSequence()
  })

  it('expects example domain content to load', async () => {
    await exampleSequence.runSequence()
  })

  after(() => {
    exampleSequence = null
  })
})
