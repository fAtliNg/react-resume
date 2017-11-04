const initialState = {
    personalInfo: {},
    hobby: '',
    quote: '',
    state: 'initial'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH.ABOUTMEPAGE.DATA':
            return {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.ABOUTMEPAGE.DATA':
            return {
                ...action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.ABOUTMEPAGE.DATA':
            return {
                ...initialState,
                state: 'initial'
            };
            break;
        default:
            return state;
    }
}