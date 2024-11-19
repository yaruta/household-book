import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date();
const defaultValue = {
  year: currentDate.getFullYear().toString(),
  month: (currentDate.getMonth()+1).toString(),
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
  },
});

export const dateActions = dateSlice.actions;

export default dateSlice.reducer;
