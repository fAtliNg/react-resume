const initialState = {};

function test(state = initialState, action) {
    switch (action.type) {
        case 'qwe':
            return state;
        default:
            return state;
    }
}