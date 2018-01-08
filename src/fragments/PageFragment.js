import { TERMS_SELECTOR, FORM_SELECTOR, INPUT_SELECTOR } from '../constants'

import { Fragment } from 'test-automation'

export default class PageFragment extends Fragment {
  constructor (fragments) {
    super(fragments)

    this.setElement(TERMS_SELECTOR)
    this.setElement(FORM_SELECTOR)
    this.setElement(INPUT_SELECTOR)
  }

  async testElements () {
    console.log(typeof this)
    await super.testElements()

    await this.testText(TERMS_SELECTOR, 'Terms')
    await this.testAttribute(INPUT_SELECTOR, 'type', 'text')
    await this.testState(INPUT_SELECTOR, ['displayed', 'enabled'])
  }
}
