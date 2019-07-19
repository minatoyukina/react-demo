import * as actionType from './actionTypes'

let nextTodoId = 0;
export const addTodo = content => ({
    type: actionType.ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});
export const toggleTodo = id => ({
    type: actionType.TOGGLE_TODO,
    payload: {id}
});
export const setFilter = filter => ({
    type: actionType.SET_FILTER,
    payload: {filter}
});