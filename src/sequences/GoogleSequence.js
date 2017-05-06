import { GOOGLE_FRAGMENT } from '../constants';

import { Sequence } from 'js-auto-test';

import GoogleFragment from '../fragments/GoogleFragment';
import PageFragment from '../fragments/PageFragment';


export default class GoogleSequence extends Sequence {

    constructor() {
        super();

        this.setFragment(GOOGLE_FRAGMENT, new PageFragment([new GoogleFragment()]));

        this.setStep(() => this.getUrl('/'));
        this.setStep(this.getFragment(GOOGLE_FRAGMENT).testElements);
    }

}
