// HOME PAGE
export const fetchHomePageData = payload => {
    return{
        type: 'FETCH.HOMEPAGE.DATA',
        payload: payload
    }};

export const clearHomePageData = () => ({
    type: 'CLEAR.HOMEPAGE.DATA'
});

// ABOUT ME PAGE
export const fetchAboutMePageData = payload => {
    return{
        type: 'FETCH.ABOUTMEPAGE.DATA',
        payload: payload
    }};

export const clearAboutMePageData = () => ({
    type: 'CLEAR.ABOUTMEPAGE.DATA'
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