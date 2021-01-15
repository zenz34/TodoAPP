import { React, ReactSubApp } from "@xarc/react";
import TodoInput from "./todo-input";
import TodoList from "./todolist";

function TodoApp() {
  return (
    <div>
      <h1>My To-do List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}


export const subapp: ReactSubApp = {
  Component: TodoApp
};
