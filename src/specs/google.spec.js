/* eslint-env mocha */
/* global browser */
import GoogleSequence from '../sequences/GoogleSequence'

browser.waitForAngularEnabled(false)

describe('google homepage search test', () => {
  let googleSequence

  before(() => {
    googleSequence = new GoogleSequence()
  })

  it('expects search to work on the google homepage', async () => {
    await googleSequence.runSequence()
  })

  after(() => {
    googleSequence = null
  })
})
