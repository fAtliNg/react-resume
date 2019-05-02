import { ACTION_NAMES } from '../constants';

export const fetchExperiencePageData = () => ({
    type: ACTION_NAMES.FETCH_EXPERIENCE_PAGE_DATA,
});

export const setExperiencePageData = payload => ({
    type: ACTION_NAMES.SET_EXPERIENCE_PAGE_DATA,
    payload: payload,
});

export const clearExperiencePageData = () => ({
    type: ACTION_NAMES.CLEAR_EXPERIENCE_PAGE_DATA,
});
