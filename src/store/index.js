import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice.js";
import userReducer from "./user-slice.js";
import itemReducer from "./item-slice.js";
import dateReducer from "./date-slice.js";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    item: itemReducer,
    date: dateReducer,
  },
});

export default store;
