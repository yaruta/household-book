
import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {item: null},
  reducers: {
    setTemporaryItem(state, action) {
      state.item = action.payload;
      console.log("Item " + state.item);
    },
    removeTemporaryItem(state) {
      state.item = null;
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice.reducer;
