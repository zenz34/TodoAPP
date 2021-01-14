import React from "react";
import ReactDOM from "react-dom";
// import { React, ReactSubApp, createDynamicComponent, staticPropsFeature } from "@xarc/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoApp from "./component/todoapp";

export const Todo = () => (
  <div>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </div>
);


// export const subapp: ReactSubApp = {
//   Component: Todo
// };
