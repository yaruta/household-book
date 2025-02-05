import { createSlice } from "@reduxjs/toolkit";

/**
 * Default initial state for the balance slice.
 */
const defaultValue = {
  balance: 0, // Total balance amount
  income: 0, // Total income amount
  expenses: 0, // Total expenses amount
};

/**
 * Redux slice for managing balance-related state, including income and expenses calculations.
 */
const balanceSlice = createSlice({
  name: "balance",
  initialState: defaultValue,
  reducers: {
    /**
     * Calculates the total balance, income, and expenses based on multiple months of transactions.
     * @param {Object} state - The current state.
     * @param {Object} action - The action containing the months data.
     */
    calculateBalance(state, action) {
      const months = action.payload;
      months.forEach((month) => {
        Object.values(month).forEach((item) => {
          const amount = parseFloat(item.amount);
          if (item.type === "expenses") {
            state.expenses = state.expenses + amount;
            state.balance = state.balance - amount;
          } else {
            state.income = state.income + amount;
            state.balance = state.balance + amount;
          }
        });
      });
    },
    /**
     * Calculates the balance for a single month based on provided transactions.
     * @param {Object} state - The current state.
     * @param {Object} action - The action containing the items data.
     */
    calculateMonthlyBalance(state, action) {
      const items = action.payload;
      items.forEach((item) => {
        const amount = parseFloat(item.amount);
        if (item.type === "expenses") {
          state.expenses = state.expenses + amount;
          state.balance = state.balance - amount;
        } else {
          state.income = state.income + amount;
          state.balance = state.balance + amount;
        }
      });
    },
    /**
     * Resets the balance, income, and expenses to zero.
     * @param {Object} state - The current state.
     */
    clearBalance(state) {
      state.balance = 0;
      state.income = 0;
      state.expenses = 0;
    },
  },
});

export const balanceActions = balanceSlice.actions;

export default balanceSlice.reducer;
