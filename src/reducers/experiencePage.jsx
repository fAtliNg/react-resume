const initialState = {
    firms: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH.EXPERIENCEPAGE.DATA':
            return {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.EXPERIENCEPAGE.DATA':
            return {
                ...action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.EXPERIENCEPAGE.DATA':
            return initialState;
            break;
        default:
            return state;
    }
}