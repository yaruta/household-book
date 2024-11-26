import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice.js";
import userReducer from "./user-slice.js";
import itemReducer from "./item-slice.js";
import dateReducer from "./date-slice.js";
import balanceReducer from "./balance-slice.js";
import statisticsReducer from "./statistics-slice.js";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    item: itemReducer,
    date: dateReducer,
    balance: balanceReducer,
    statistics: statisticsReducer,
  },
});

export default store;
