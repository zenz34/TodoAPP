import React from "react";
import AddTodo from "./addtodo";
import TodoList from "./todolist";

export default function TodoApp() {
  return (
    <div>
      <h1>My To-do List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
