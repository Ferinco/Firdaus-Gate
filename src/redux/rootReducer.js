import { combineReducers } from "redux";
import userReducer from "./slices/users";
import reportReducer from "./slices/reports";
import termReducer from "./slices/term";
import admissionReducer from "./slices/admission";

const rootReducer = combineReducers({
  users: userReducer,
  reports: reportReducer,
  term: termReducer,
  admission: admissionReducer,
});

export default rootReducer;
