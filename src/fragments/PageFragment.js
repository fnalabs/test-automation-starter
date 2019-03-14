import { FORM_SELECTOR, INPUT_SELECTOR } from '../constants'

import { Fragment } from 'test-automation'

export default class PageFragment extends Fragment {
  constructor (fragments) {
    super(fragments)

    this.setElement(FORM_SELECTOR)
    this.setElement(INPUT_SELECTOR)
  }

  async testElements () {
    await super.testElements()

    await this.testAttribute(INPUT_SELECTOR, 'type', 'text')
    await this.testState(INPUT_SELECTOR, ['displayed', 'enabled'])
  }
}
