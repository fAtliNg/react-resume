import {call, put, select, takeLatest, takeEvery, throttle} from 'redux-saga/effects';
import {delay} from 'redux-saga';

export function* test() {
}

export default function* root() {
    yield [
        takeLatest('Test', test),
    ]
}