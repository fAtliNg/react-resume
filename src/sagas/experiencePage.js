import { put } from 'redux-saga/effects';

import { setExperiencePageData } from '../actions';

export function* fetchExperiencePageData() {
    try {
        yield put(setExperiencePageData({
            firms: [{
                period: '2015 – present',
                company: 'ФГАНУ НИИ "СПЕЦВУЗАВТОМАТИКА"',
                position: 'Software Developer',
            }]
        }));
    } catch (e) {
        console.log(e);
    }
};
