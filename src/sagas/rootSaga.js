// TODO:: место для ассинхронных действий, но пока что на заглушках
import { takeLatest } from 'redux-saga/effects';

import { fetchSkillsPageData } from './skillsPage';
import { fetchHomePageData } from './homePage';
import { fetchExperiencePageData } from './experiencePage';
import { fetchCertificatesPageData } from './certificatesPage';
import { fetchAboutMePageData } from './aboutMePage';

import { ACTION_NAMES } from '../constants';

export default function* root() {
    yield [
        takeLatest(ACTION_NAMES.FETCH_HOME_PAGE_DATA, fetchHomePageData),
        takeLatest(ACTION_NAMES.FETCH_ABOUT_ME_PAGE_DATA, fetchAboutMePageData),
        takeLatest(ACTION_NAMES.FETCH_SKILLS_PAGE_DATA, fetchSkillsPageData),
        takeLatest(ACTION_NAMES.FETCH_EXPERIENCE_PAGE_DATA, fetchExperiencePageData),
        takeLatest(ACTION_NAMES.FETCH_CERTIFICATES_PAGE_DATA, fetchCertificatesPageData),
    ]
};
