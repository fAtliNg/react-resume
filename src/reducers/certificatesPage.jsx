const initialState = {
    certificates: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.CERTIFICATESPAGE.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.CERTIFICATESPAGE.DATA':
            newState = {
                ...action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.CERTIFICATESPAGE.DATA':
            newState = initialState;
            break;
        default:
            // no default
    }
    return newState;
}