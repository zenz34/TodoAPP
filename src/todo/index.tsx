import { React, ReactSubApp } from "@xarc/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoApp from "./component/todoapp";

const Todo = () => (
  <div>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </div>
);

export const subapp: ReactSubApp = {
  Component: Todo
};
