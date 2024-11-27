import { createSlice } from "@reduxjs/toolkit";

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

const monthDefaultValue = [];
for (let i = 0; i < 30; i++) {
  monthDefaultValue.push({
    name: i + 1,
    expenses: 0,
    revenue: 0,
    balance: 0,
  });
}

const weekDefaultValue = [
  { name: "Mon", revenue: 0, expenses: 0, balance: 0 },
  { name: "Tue", revenue: 0, expenses: 0, balance: 0 },
  { name: "Wed", revenue: 0, expenses: 0, balance: 0 },
  { name: "Thu", revenue: 0, expenses: 0, balance: 0 },
  { name: "Fri", revenue: 0, expenses: 0, balance: 0 },
  { name: "Sat", revenue: 0, expenses: 0, balance: 0 },
  { name: "Sun", revenue: 0, expenses: 0, balance: 0 },
];

const defaultValue = {
  type: "year",
  value: yearDefaultValue,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: defaultValue,
  reducers: {
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
    setBalance(state, action) {
      let index;
      if (state.type === "year") {
        index = parseInt(action.payload.date.substring(4, 6)) - 1;
      } else if (state.type === "month") {
        index = parseInt(action.payload.item.date.substring(8, 10));
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
