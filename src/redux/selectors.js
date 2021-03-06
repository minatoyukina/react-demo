import {VISIBILITY_FILTERS} from "./constants";

export const getTodosState = store => {
    console.log(store);
    return store.todoReducer;
};
export const getTodoList = store => getTodosState(store) ? getTodosState(store).allIds : [];
export const getTodoById = (store, id) => getTodosState ? {...getTodosState(store).byIds[id], id} : {};

export const getTodos = store => getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByFilter = (store, filter) => {
    const allTodos = getTodos(store);
    switch (filter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
};
