import { combineReducers } from "redux";
import studentReducer from "./slices/students";
import reportReducer from "./slices/reports";
import NavReducer from "./slices/nav"

const rootReducer = combineReducers({
  students: studentReducer,
  reports: reportReducer,
  navlinks: NavReducer
});

export default rootReducer;
