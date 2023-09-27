import { combineReducers } from "redux";
import studentReducer from "./slices/students";
import reportReducer from "./slices/reports";

const rootReducer = combineReducers({
  students: studentReducer,
  reports: reportReducer,
});

export default rootReducer;
