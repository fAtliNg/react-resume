import {put, takeLatest} from 'redux-saga/effects';

// HOME PAGE
export function* fetchHomePageData() {
    try {
        yield put({
            type: 'SET.HOMEPAGE.DATA',
            payload: {
                header: 'HELLO',
                typists: [
                    'I am Denisenko Sergey',
                    'I am a developer',
                    'I am a football player'
                ]
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default function* root() {
    yield [
        takeLatest('FETCH.HOMEPAGE.DATA', fetchHomePageData),
    ]
}