// HOME PAGE
export const fetchHomePageData = payload => {
    return{
    type: 'FETCH.HOMEPAGE.DATA',
    payload: payload
}};

export const clearHomePageData = () => ({
    type: 'CLEAR.HOMEPAGE.DATA'
});