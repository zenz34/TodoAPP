import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/action";

const Todo = ({ todo, toggleTodo }) => (
    <li onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "Completed  " : "TODO -- "}{" "}
        <span>
            {todo.content}
        </span>
    </li>
);

export default connect(null, { toggleTodo })(Todo);
