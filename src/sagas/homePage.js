import { put } from 'redux-saga/effects';

import { setHomePageData } from '../actions';

export function* fetchHomePageData() {
    try {
        yield put(setHomePageData({
            header: 'HELLO',
            typists: [
                'I am Denisenko Sergey',
                'I am a developer',
                'I am a football player',
            ]
        }));
    } catch (e) {
        console.log(e);
    }
};
