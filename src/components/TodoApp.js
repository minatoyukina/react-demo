import React from 'react'
import AddTodo from "./AddTodo";
import Filters from "./filters";
import TodoList from "./TodoList";

export default class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Todo list</h1>
                <AddTodo/>
                <TodoList/>
                <Filters/>
            </div>
        )
    }
}