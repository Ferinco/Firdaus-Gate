import { combineReducers } from "redux";
import studentReducer from "./slices/students";

const rootReducer = combineReducers({
  students: studentReducer,
});

export default rootReducer;
