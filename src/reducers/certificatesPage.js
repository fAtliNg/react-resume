import { ACTION_NAMES } from '../constants';

const initialState = {
    certificates: [],
    state: 'initial',
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case ACTION_NAMES.FETCH_CERTIFICATES_PAGE_DATA:
            newState = {
                ...state,
                state: 'receiving',
            };
            break;
        case ACTION_NAMES.SET_CERTIFICATES_PAGE_DATA:
            newState = {
                ...action.payload,
                state: 'is_established',
            };
            break;
        case ACTION_NAMES.CLEAR_CERTIFICATES_PAGE_DATA:
            newState = initialState;
            break;
        default:
            // no default
    }
    return newState;
};
