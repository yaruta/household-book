import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { sidebarIsVisible: false, theme: "dark" },
  reducers: {
    toggleSidebar(state) {
      state.sidebarIsVisible = !state.sidebarIsVisible;
    },
    setTheme(state, action) {
      if (action.payload.toLowerCase() === "dark") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
