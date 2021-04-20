import { EXAMPLE_FRAGMENT } from '../constants'

import { Sequence } from 'test-automation'

import ExampleFragment from '../fragments/ExampleFragment'

export default class GoogleSequence extends Sequence {
  constructor () {
    super()

    const example = this.setFragment(EXAMPLE_FRAGMENT, new ExampleFragment())

    this.setStep([
      () => this.getUrl('/'),
      () => example.testElements()
    ])
  }
}
