import { ACTION_NAMES } from '../constants';

export const fetchHomePageData = () => ({
    type: ACTION_NAMES.FETCH_HOME_PAGE_DATA,
});

export const setHomePageData = payload => ({
    type: ACTION_NAMES.SET_HOME_PAGE_DATA,
    payload: payload,
});

export const clearHomePageData = () => ({
    type: ACTION_NAMES.CLEAR_HOME_PAGE_DATA,
});
