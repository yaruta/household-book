
import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing item-related state.
 */
const itemSlice = createSlice({
  name: "item",
  initialState: { item: null },
  reducers: {
    /**
     * Sets temporary item data. Used for editing existing items.
     * @param {Object} state - The current state.
     * @param {Object} action - The action containing the item data(id, date, title, type, amount).
     */
    setTemporaryItem(state, action) {
      state.item = action.payload;
    },
    /**
     * Removes temporary item data.
     * @param {Object} state - The current state.
     */
    removeTemporaryItem(state) {
      state.item = null;
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice.reducer;
