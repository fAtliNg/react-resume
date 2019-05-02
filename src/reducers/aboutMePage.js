import { ACTION_NAMES, LIFE_CYCLES } from '../constants';

const initialState = {
    personalInfo: {},
    hobby: '',
    quote: '',
    state: LIFE_CYCLES.INITIAL,
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case ACTION_NAMES.FETCH_ABOUT_ME_PAGE_DATA:
            newState = {
                ...state,
                state: LIFE_CYCLES.RECEIVING,
            };
            break;
        case ACTION_NAMES.SET_ABOUT_ME_PAGE_DATA:
            newState = {
                ...action.payload,
                state: LIFE_CYCLES.IS_ESTABLISHED,
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
