import React from "react";
import { connect } from "react-redux";
import Todo from "./todo";

const TodoList = ({ todos }) => (
    <ul>
        {todos && todos.length
            ? todos.map((todo, index) => {
                  return <Todo key={`todo-${todo.id}`} todo={todo} />;
              })
            : "No todo!"}
    </ul>
);


const mapStateToProps = (state) => {
    return { todos };
};

export default connect(mapStateToProps)(TodoList);
