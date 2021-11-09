import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { EmployeeReducer } from "./reducers/EmployeeReducer";

const rootReducer = combineReducers({
  employee: EmployeeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
