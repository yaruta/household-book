import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { sidebarIsVisible: true, theme: "dark", formIsVisible: false },
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
    toggleForm(state) {
      state.formIsVisible = !state.formIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
