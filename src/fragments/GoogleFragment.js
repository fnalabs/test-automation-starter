import { IMG_SELECTOR } from '../constants'

import { Fragment } from 'test-automation'

export default class GoogleFragment extends Fragment {
  constructor (fragments) {
    super(fragments)

    this.setElement(IMG_SELECTOR)
  }
}
