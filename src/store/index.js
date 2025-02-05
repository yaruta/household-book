import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice.js";
import userReducer from "./user-slice.js";
import itemReducer from "./item-slice.js";
import dateReducer from "./date-slice.js";
import balanceReducer from "./balance-slice.js";
import statisticsReducer from "./statistics-slice.js";

/**
 * Configures and creates the Redux store for global state management.
 * Combines multiple reducers to manage different parts of the application's state.
 */
const store = configureStore({
  reducer: {
    ui: uiReducer, // Manages UI-related state (e.g., modals, notifications)
    user: userReducer, // Manages user profile data
    item: itemReducer, // Manages item-related state (e.g., date, type, amount etc.)
    date: dateReducer, // Stores and manages selected date values
    balance: balanceReducer, // Handles financial balance and calculations
    statistics: statisticsReducer, // Handles statistical data
  },
});

export default store;
