import 'babel-polyfill';

import GoogleSequence from '../sequences/GoogleSequence';

browser.ignoreSynchronization = true;


describe('google homepage img test', () => {
    let googleSequence;

    before(() => {
        googleSequence = new GoogleSequence();
    });

    it('expects img to exist on the google homepage', async () => {
        await googleSequence.runSequence();
    });

    after(() => {
        googleSequence = null;
    });
});
