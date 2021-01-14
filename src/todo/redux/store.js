import { createStore } from "redux";
import * as todoReducer from "./reducers";

export default createStore(todoReducer);
