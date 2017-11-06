const initialState = {
    personalInfo: {},
    hobby: '',
    quote: '',
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.ABOUTMEPAGE.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.ABOUTMEPAGE.DATA':
            newState = {
                ...action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.ABOUTMEPAGE.DATA':
            newState = initialState;
            break;
        default:
            // no default
    }
    return newState;
}