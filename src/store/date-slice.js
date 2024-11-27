import { createSlice } from "@reduxjs/toolkit";
import { getWeekNumber } from "../util/date";

const currentDate = new Date();
const defaultValue = {
  year: currentDate.getFullYear().toString(),
  month: (currentDate.getMonth() + 1).toString(),
  week: getWeekNumber(currentDate),
};

const dateSlice = createSlice({
  name: "date",
  initialState: defaultValue,
  reducers: {
    setSelectedYear(state, action) {
      state.year = action.payload.toString();
    },
    setSelectedMonth(state, action) {
      state.month = action.payload;
    },
    setSelectedWeek(state, action) {
      state.week = action.payload;
    },
  },
});

export const dateActions = dateSlice.actions;

export default dateSlice.reducer;
