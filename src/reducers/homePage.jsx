const initialState = {
    header: '',
    typists: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.HOMEPAGE.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.HOMEPAGE.DATA':
            newState = {
                ...action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.HOMEPAGE.DATA':
            newState = initialState;
            break;
        default:
            // no default
    }
    return newState;
}