const initialState = {
    firms: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.EXPERIENCEPAGE.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.EXPERIENCEPAGE.DATA':
            newState = {
                ...action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.EXPERIENCEPAGE.DATA':
            newState = initialState;
            break;
        default:
            // no default
    }
    return newState;
}