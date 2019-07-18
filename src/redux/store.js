import {createStore} from 'redux'

const userReducer = function (state, action) {
    if (state === undefined) {
        state = [];
    }
    if (action.type === 'ADD_USER') {
        return state.concat([action.user])
    }
    return state;
};

const store = createStore(userReducer);

export default store
