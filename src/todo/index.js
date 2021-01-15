import React from "react";
// import { React, ReactSubApp, createDynamicComponent, staticPropsFeature } from "@xarc/react";
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

export default Todo;

// export const subapp: ReactSubApp = {
//   Component: Todo
// };
