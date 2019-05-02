import { ACTION_NAMES } from '../constants';

const initialState = {
    header: '',
    typists: [],
    state: 'initial',
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case ACTION_NAMES.FETCH_HOME_PAGE_DATA:
            newState = {
                ...state,
                state: 'receiving',
            };
            break;
        case ACTION_NAMES.SET_HOME_PAGE_DATA:
            newState = {
                ...action.payload,
                state: 'is_established',
            };
            break;
        case ACTION_NAMES.CLEAR_HOME_PAGE_DATA:
            newState = initialState;
            break;
        default:
            // no default
    }
    return newState;
};
