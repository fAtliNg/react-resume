import { ACTION_NAMES } from '../constants/actionNames';

export const fetchAboutMePageData = () => ({
    type: ACTION_NAMES.FETCH_ABOUT_ME_PAGE_DATA,
});

export const setAboutMePageData = payload => ({
    type: ACTION_NAMES.SET_ABOUT_ME_PAGE_DATA,
    payload: payload
});

export const clearAboutMePageData = () => ({
    type: ACTION_NAMES.CLEAR_ABOUT_ME_PAGE_DATA,
});
