import { ACTION_NAMES } from '../constants';

const initialState = {
    personalInfo: {},
    hobby: '',
    quote: '',
    state: 'initial',
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case ACTION_NAMES.FETCH_ABOUT_ME_PAGE_DATA:
            newState = {
                ...state,
                state: 'receiving',
            };
            break;
        case ACTION_NAMES.SET_ABOUT_ME_PAGE_DATA:
            newState = {
                ...action.payload,
                state: 'is_established',
            };
            break;
        case ACTION_NAMES.CLEAR_ABOUT_ME_PAGE_DATA:
            newState = initialState;
            break;
        default:
            // no default
    }
    return newState;
};
