import { combineReducers } from "redux";
import userReducer from "./slices/users";
import reportReducer from "./slices/reports";
import termReducer from "./slices/term";
import admissionReducer from "./slices/admission";
import subjectReducer from "./slices/subjects"

const rootReducer = combineReducers({
  users: userReducer,
  reports: reportReducer,
  term: termReducer,
  admission: admissionReducer,
  subjects: subjectReducer
});

export default rootReducer;
