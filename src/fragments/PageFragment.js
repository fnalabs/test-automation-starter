import { MAIN_SELECTOR, FORM_SELECTOR } from '../constants';

import { Fragment } from 'js-auto-test';


export default class PageFragment extends Fragment {

    constructor(fragments) {
        super(fragments);

        this.setElement(MAIN_SELECTOR);
        this.setElement(FORM_SELECTOR);
    }

}
