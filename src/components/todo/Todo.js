import {connect} from "react-redux";
import React from "react"
import {toggleTodo} from "../../redux/actions";

const Todo = ({todo, toggleTodo}) => (
    <li onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "〇" : "×"}{" "}
        <span>
            {todo.content}
        </span>
    </li>
);

export default connect(null, {toggleTodo})(Todo)
