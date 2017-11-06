const initialState = {
    skills: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.SKILLSPAGE.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.SKILLSPAGE.DATA':
            newState = {
                ...action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.SKILLSPAGE.DATA':
            newState = initialState;
            break;
        default:
            // no default
    }
    return newState;
}