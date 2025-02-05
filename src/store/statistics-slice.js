import { createSlice } from "@reduxjs/toolkit";

/**
 * Default initial state of the year.
 */
const yearDefaultValue = [
  { name: "Jan", revenue: 0, expenses: 0, balance: 0 },
  { name: "Feb", revenue: 0, expenses: 0, balance: 0 },
  { name: "Mar", revenue: 0, expenses: 0, balance: 0 },
  { name: "Apr", revenue: 0, expenses: 0, balance: 0 },
  { name: "May", revenue: 0, expenses: 0, balance: 0 },
  { name: "Jun", revenue: 0, expenses: 0, balance: 0 },
  { name: "Jul", revenue: 0, expenses: 0, balance: 0 },
  { name: "Aug", revenue: 0, expenses: 0, balance: 0 },
  { name: "Sep", revenue: 0, expenses: 0, balance: 0 },
  { name: "Oct", revenue: 0, expenses: 0, balance: 0 },
  { name: "Nov", revenue: 0, expenses: 0, balance: 0 },
  { name: "Dec", revenue: 0, expenses: 0, balance: 0 },
];

/**
 * Default initial state of the month.
 */
const monthDefaultValue = [];
for (let i = 0; i < 31; i++) {
  monthDefaultValue.push({
    name: i + 1,
    expenses: 0,
    revenue: 0,
    balance: 0,
  });
}

/**
 * Default initial state of the week.
 */
const weekDefaultValue = [
  { name: "Mon", revenue: 0, expenses: 0, balance: 0 },
  { name: "Tue", revenue: 0, expenses: 0, balance: 0 },
  { name: "Wed", revenue: 0, expenses: 0, balance: 0 },
  { name: "Thu", revenue: 0, expenses: 0, balance: 0 },
  { name: "Fri", revenue: 0, expenses: 0, balance: 0 },
  { name: "Sat", revenue: 0, expenses: 0, balance: 0 },
  { name: "Sun", revenue: 0, expenses: 0, balance: 0 },
];

/**
 * Default initial state for the statistics slice.
 */
const defaultValue = {
  type: "year",
  value: yearDefaultValue,
};

/**
 * Redux slice for managing statistical data.
 */
const statisticsSlice = createSlice({
  name: "statistics",
  initialState: defaultValue,
  reducers: {
  /**
   * Sets the statistics type (year, month, or week) and updates the state accordingly.
   * @param {Object} state - The current state.
   * @param {Object} action - The action containing the selected type.
*/
    setStatisticsType(state, action) {
      const type = action.payload.type;
      state.type = type;
      if (type === "month") {
        state.value = monthDefaultValue;
      } else if (type === "year") {
        state.value = yearDefaultValue;
      } else if (type === "week") {
        state.value = weekDefaultValue;
      }
    },
    /**
     * Updates the balance, revenue, and expenses based on the selected type and date.
     * @param {Object} state - The current state.
     * @param {Object} action - The action containing transaction data.
     */
    setBalance(state, action) {
      let index;
      if (state.type === "year") {
        index = parseInt(action.payload.date.substring(4, 6), 10) - 1;
      } else if (state.type === "month") {
        index = parseInt(action.payload.item.date.substring(8, 10), 10);
      } else if (state.type === "week") {
        index = parseInt(action.payload.weekDay);
      }
      const amount = parseFloat(action.payload.item.amount);
      const selectedElement = state.value[index];

      if (action.payload.item.type === "expenses") {
        selectedElement.expenses += amount;
        selectedElement.balance -= amount;
      } else {
        selectedElement.revenue += amount;
        selectedElement.balance += amount;
      }
    },
    /**
     * Resets the balance, revenue, and expenses to their default values.
     * @param {Object} state - The current state.
     */
    clearBalance(state) {
      if (state.type === "month") {
        state.value = monthDefaultValue;
      } else if (state.type === "year") {
        state.value = yearDefaultValue;
      } else if (state.type === "week") {
        state.value = weekDefaultValue;
      }
    },
  },
});

export const statisticsActions = statisticsSlice.actions;

export default statisticsSlice.reducer;
