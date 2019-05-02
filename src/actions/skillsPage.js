import { ACTION_NAMES } from '../constants/actionNames';

export const fetchSkillsPageData = () => ({
    type: ACTION_NAMES.FETCH_SKILLS_PAGE_DATA,
});

export const setSkillsPageData = payload => ({
    type: ACTION_NAMES.SET_SKILLS_PAGE_DATA,
    payload: payload,
});

export const clearSkillsPageData = () => ({
    type: ACTION_NAMES.CLEAR_SKILLS_PAGE_DATA,
});
