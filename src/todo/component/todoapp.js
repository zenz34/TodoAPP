import React from "react";
import AddTodo from "./components/addtodo";
import TodoList from "./components/todolist";
import "./styles.css";

export default function TodoApp() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
