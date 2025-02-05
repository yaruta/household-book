import { createSlice } from "@reduxjs/toolkit";
import { getWeekNumber } from "../util/date";

const currentDate = new Date();
/**
 * Default initial state for the date slice.
 */
const defaultValue = {
  year: currentDate.getFullYear().toString(), // Current year as a String
  month: (currentDate.getMonth() + 1).toString(), // Current month (1-12) as a String
  week: getWeekNumber(currentDate), // Current week number
};

/**
 * Redux slice for managing selected date state, including year, month, and week.
 */
const dateSlice = createSlice({
  name: "date",
  initialState: defaultValue,
  reducers: {
    /**
     * Sets selected year.
     * @param {Object} state - The current state.
     * @param {Object} action - The action containing the year data.
     */
    setSelectedYear(state, action) {
      state.year = action.payload.toString();
    },
    /**
     * Sets selected month.
     * @param {Object} state - The current state.
     * @param {Object} action - The action containing the month data.
     */
    setSelectedMonth(state, action) {
      state.month = action.payload;
    },
    /**
     * Sets selected month.
     * @param {Object} state - The current state.
     * @param {Object} action - The action containing the week data.
     */
    setSelectedWeek(state, action) {
      state.week = action.payload;
    },
  },
});

export const dateActions = dateSlice.actions;

export default dateSlice.reducer;
