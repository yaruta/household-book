import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing UI-related state(modals, notifications, themes, and loading states).
 */
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    sidebarIsVisible: true, // Controls the visibility of the sidebar
    theme: "dark", // Stores the current theme
    formIsVisible: false, // Controls the visibility of the form modal
    imageIsLoading: false, // Tracks the loading state of images
  },
  reducers: {
    /**
     * Toggles the visibility of the sidebar.
     * @param {Object} state - The current state.
     */
    toggleSidebar(state) {
      state.sidebarIsVisible = !state.sidebarIsVisible;
    },
    /**
     * Sets the theme of the application.
     * @param {Object} state - The current state.
     * @param {Object} action - The action containing the selected theme.
     */
    setTheme(state, action) {
      if (action.payload.toLowerCase() === "dark") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
    /**
     * Toggles the visibility of the form modal.
     * @param {Object} state - The current state.
     */
    toggleForm(state) {
      state.formIsVisible = !state.formIsVisible;
    },
    /**
     * Sets the image loading state to true.
     * @param {Object} state - The current state.
     */
    setImageIsLoading(state) {
      state.imageIsLoading = true;
    },
    /**
     * Sets the image loading state to false.
     * @param {Object} state - The current state.
     */
    setImageIsNotLoading(state) {
      state.imageIsLoading = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
