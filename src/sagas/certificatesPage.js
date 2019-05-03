import { put } from 'redux-saga/effects';

import { setCertificatesPageData } from '../actions';
import { ROUTES } from '../constants/routes';

export function* fetchCertificatesPageData() {
    try {
        yield put(setCertificatesPageData({
            certificates: [
                `${ROUTES.STATIC}/img/cert1.jpg`,
                `${ROUTES.STATIC}/img/cert2.jpg`,
                `${ROUTES.STATIC}/img/cert3.jpg`,
                `${ROUTES.STATIC}/img/cert4.jpg`,
                `${ROUTES.STATIC}/img/cert5.jpg`,
            ]
        }));
    } catch (e) {
        console.log(e);
    }
};
