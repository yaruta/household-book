import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  balance: 0,
  income: 0,
  expenses: 0,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: defaultValue,
  reducers: {
    calculateBalance(state, action) {
      const months = action.payload;
      months.map((month) => {
        Object.values(month).map((item) => {
          if (item.type === "expenses") {
            state.expenses = state.expenses + parseFloat(item.amount);
            state.balance = state.balance - parseFloat(item.amount);
          } else {
            state.income = state.income + parseFloat(item.amount);
            state.balance = state.balance + parseFloat(item.amount);
          }
        });
      });
    },
    calculateMonthlyBalance(state, action) {
      const items = action.payload;
      items.map((item) => {
        if (item.type === "expenses") {
          state.expenses = state.expenses + parseFloat(item.amount);
          state.balance = state.balance - parseFloat(item.amount);
        } else {
          state.income = state.income + parseFloat(item.amount);
          state.balance = state.balance + parseFloat(item.amount);
        }
      });
    },
    clearBalance(state) {
      state.balance = 0;
      state.income = 0;
      state.expenses = 0;
    },
  },
});

export const balanceActions = balanceSlice.actions;

export default balanceSlice.reducer;
