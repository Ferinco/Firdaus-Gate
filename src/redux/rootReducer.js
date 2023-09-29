import { combineReducers } from "redux";
import userReducer from "./slices/users";
import reportReducer from "./slices/reports";
import termReducer from "./slices/term";

const rootReducer = combineReducers({
  users: userReducer,
  reports: reportReducer,
  term: termReducer,
});

export default rootReducer;
