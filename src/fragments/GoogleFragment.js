import { IMG_SELECTOR } from '../constants';

import { Fragment } from 'js-auto-test';


export default class GoogleFragment extends Fragment {

    constructor(fragments) {
        super(fragments);

        this.setElement(IMG_SELECTOR);
    }

}
