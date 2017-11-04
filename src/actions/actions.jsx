// HOME PAGE
export const fetchHomePageData = payload => ({
    type: 'FETCH.HOMEPAGE.DATA',
    payload: payload
});

export const clearHomePageData = () => ({
    type: 'CLEAR.HOMEPAGE.DATA'
});

// ABOUT ME PAGE
export const fetchAboutMePageData = payload => ({
    type: 'FETCH.ABOUTMEPAGE.DATA',
    payload: payload
});

export const clearAboutMePageData = () => ({
    type: 'CLEAR.ABOUTMEPAGE.DATA'
});

// SKILLS PAGE
export const fetchSkillsPageData = payload => ({
        type: 'FETCH.SKILLSPAGE.DATA',
        payload: payload
});

export const clearSkillsPageData = () => ({
    type: 'CLEAR.SKILLSPAGE.DATA'
});