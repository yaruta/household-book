import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice.js";
import userReducer from "./user-slice.js";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
});

export default store;
