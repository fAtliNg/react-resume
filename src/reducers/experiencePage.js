import { ACTION_NAMES } from '../constants';

const initialState = {
    firms: [],
    state: 'initial',
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case ACTION_NAMES.FETCH_EXPERIENCE_PAGE_DATA:
            newState = {
                ...state,
                state: 'receiving',
            };
            break;
        case ACTION_NAMES.SET_EXPERIENCE_PAGE_DATA:
            newState = {
                ...action.payload,
                state: 'is_established',
            };
            break;
        case ACTION_NAMES.CLEAR_EXPERIENCE_PAGE_DATA:
            newState = initialState;
            break;
        default:
            // no default
    }
    return newState;
};
