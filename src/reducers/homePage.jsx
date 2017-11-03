const initialState = {
    header: '',
    typists: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH.HOMEPAGE.DATA':
            return {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.HOMEPAGE.DATA':
            return {
                ...action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.HOMEPAGE.DATA':
            return {
                ...initialState,
                state: 'initial'
            };
            break;
        default:
            return state;
    }
}