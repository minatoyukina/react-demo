const userReducer = (state, action) => {
    if (state === undefined) {
        state = [];
    }
    if (action.type === 'ADD_USER') {
        return state.concat([action.user])
    }
    return state;
};

export default userReducer