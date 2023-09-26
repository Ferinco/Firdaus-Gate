import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
// import storage from "redux-persist"

// const persistConfig = {
//   key: 'root',
//   storage
// }

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
