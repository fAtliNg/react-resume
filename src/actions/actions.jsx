// HOME PAGE
export const fetchHomePageData = payload => {
    return{
        type: 'FETCH.HOMEPAGE.DATA',
        payload: payload
    }};

export const clearHomePageData = () => ({
    type: 'CLEAR.HOMEPAGE.DATA'
});

// SKILLS PAGE
export const fetchSkillsPageData = payload => {
    return{
        type: 'FETCH.SKILLSPAGE.DATA',
        payload: payload
    }};

export const clearSkillsPageData = () => ({
    type: 'CLEAR.SKILLSPAGE.DATA'
});