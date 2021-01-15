import { React, ReactSubApp, createDynamicComponent } from "@xarc/react";
import { Provider } from "react-redux";
import store from "./redux/store";

export const TodoApp = createDynamicComponent(
  {
    name: "todoapp",
    getModule: () => import("./component/todoapp")
  },
  { ssr: true }
);

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
