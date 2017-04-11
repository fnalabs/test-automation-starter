import { GOOGLE_FRAGMENT } from '../constants';

import { Sequence } from 'js-auto-test';

import GoogleFragment from '../fragments/GoogleFragment';


export default class GoogleSequence extends Sequence {

    constructor() {
        super();

        this.setFragment(GOOGLE_FRAGMENT, new GoogleFragment());

        this.setStep(() => this.getUrl('/'));
        this.setStep(this.getFragment(GOOGLE_FRAGMENT).testElements);
    }

}
