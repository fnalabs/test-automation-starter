import {
  HEADING_SELECTOR,
  HEADING_TEXT,
  CONTENT_SELECTOR,
  CONTENT_TEXT,
  LINK_SELECTOR,
  LINK_TEXT
} from '../constants'

import { Fragment } from 'test-automation'

export default class ExampleFragment extends Fragment {
  constructor (fragments) {
    super(fragments)

    this.setElement(HEADING_SELECTOR)
    this.setElement(CONTENT_SELECTOR)
    this.setElement(LINK_SELECTOR)
  }

  async testElements () {
    await super.testElements()

    await this.testText(HEADING_SELECTOR, HEADING_TEXT)
    await this.testText(CONTENT_SELECTOR, CONTENT_TEXT)
    await this.testText(LINK_SELECTOR, LINK_TEXT)
  }
}
