const initialState = {
    skills: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH.SKILLSPAGE.DATA':
            return {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.SKILLSPAGE.DATA':
            return {
                ...action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.SKILLSPAGE.DATA':
            return {
                ...initialState,
                state: 'initial'
            };
            break;
        default:
            return state;
    }
}