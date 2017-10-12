import { ABOUT_SELECTOR, FORM_SELECTOR, INPUT_SELECTOR } from '../constants'

import { Fragment } from 'js-auto-test'

export default class PageFragment extends Fragment {
  constructor (fragments) {
    super(fragments)

    this.setElement(ABOUT_SELECTOR)
    this.setElement(FORM_SELECTOR)
    this.setElement(INPUT_SELECTOR)
  }

  async testElements () {
    console.log(typeof this)
    await super.testElements()

    this.testText(ABOUT_SELECTOR, 'About')
    await this.testAttribute(INPUT_SELECTOR, 'type', 'text')
    await this.testState(INPUT_SELECTOR, ['displayed', 'enabled'])
  }
}
