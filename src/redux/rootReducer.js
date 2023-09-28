import { combineReducers } from "redux";
import studentReducer from "./slices/students";
import reportReducer from "./slices/reports";
import termReducer from "./slices/term";

const rootReducer = combineReducers({
  students: studentReducer,
  reports: reportReducer,
  term: termReducer,
});

export default rootReducer;
