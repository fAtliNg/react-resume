import { put } from 'redux-saga/effects';

import { setAboutMePageData } from '../actions';
import { ROUTES } from '../constants/routes';

export function* fetchAboutMePageData() {
    try {
        yield put(setAboutMePageData({
            personalInfo: {
                Name: 'Denisenko Sergey',
                Age: '20 years',
                City: 'Rostov-on-Don',
                Job: 'Developer',
                Phone: '+7(918)-503-65-50',
                Email: 'korgeflus@mail.ru',
            },
            hobby: 'I love to play football.',
            quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
            photo: `${ROUTES.STATIC}/img/photo.jpg`,
        }));
    } catch (e) {
        console.log(e);
    }
};
