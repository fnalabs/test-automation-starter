import { FORM_SELECTOR, INPUT_SELECTOR, LINK_SELECTOR, GOOGLE_FRAGMENT, RESULT_FRAGMENT } from '../constants'

import { Sequence } from 'test-automation'

import GoogleFragment from '../fragments/GoogleFragment'
import PageFragment from '../fragments/PageFragment'
import ResultFragment from '../fragments/ResultFragment'

export default class GoogleSequence extends Sequence {
  constructor () {
    super()

    const homepage = this.setFragment(GOOGLE_FRAGMENT, new PageFragment([new GoogleFragment()]))
    const resultpage = this.setFragment(RESULT_FRAGMENT, new ResultFragment())

    this.setStep([
      () => this.getUrl('/'),
      () => homepage.testElements(),
      () => homepage.elementSendKeys(INPUT_SELECTOR, 'something'),
      () => homepage.elementClear(INPUT_SELECTOR),
      () => homepage.elementSendKeys(INPUT_SELECTOR, 'www.google.com'),
      () => homepage.elementSubmit(FORM_SELECTOR),
      () => resultpage.testElements(),
      () => resultpage.elementClick(LINK_SELECTOR),
      () => homepage.testElements()
    ])
  }
}
