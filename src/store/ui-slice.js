import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { sidebarIsVisible: false },
  reducers: {
    toggleSidebar(state) {
      state.sidebarIsVisible = !state.sidebarIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
