import Todo from './Todo'
import React from 'react'
import {getTodosByFilter} from "../../redux/selectors";
import {connect} from "react-redux";

const TodoList = ({todos}) => (
    <ul>
        {todos && todos.length ? todos.map((todo) => {
            return <Todo key={`todo-${todo.id}`} todo={todo}/>
        }) : "No todos,yay!"}
    </ul>
);

const mapStateToProps = state => {
    //aka: const filterReducer=state.filterReducer
    const {filterReducer} = state;
    const todos = getTodosByFilter(state, filterReducer);
    return {todos}
};

export default connect(mapStateToProps)(TodoList)
