import { put } from 'redux-saga/effects';

import { setExperiencePageData } from '../actions';

export function* fetchExperiencePageData() {
    try {
        yield put(setExperiencePageData({
            firms: [{
                period: 'March, 2015 – May, 2018',
                company: 'ФГАНУ НИИ "СПЕЦВУЗАВТОМАТИКА"',
                position: 'Software Developer',
            }, {
                period: 'May, 2018 – present',
                company: 'АО "СберТех"',
                position: 'Главный инженер',
            }]
        }));
    } catch (e) {
        console.log(e);
    }
};
