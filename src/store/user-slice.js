import { createSlice } from "@reduxjs/toolkit";

/**
 * Default initial state for the user slice, retrieving values from locaStorage if available.
 */
const defaultValue = {
  userId: localStorage.getItem("userId") ?? null, // Stores the user's ID
  userImage: localStorage.getItem("userPhoto") ?? null, // Stores the user's profile image URL
  isImageAvailable: localStorage.getItem("userPhoto") ? true : false, // Checks if a user image is available
  isUpdated: false, // Tracks if the user profile has been updated
  userName: { firstName: "Unknown", lastName: "" }, // Stores the user's first and last name
};

/**
 * Redux slice for managing user-related state.
 */
const userSlice = createSlice({
  name: "user",
  initialState: defaultValue,
  reducers: {
    /**
     * Sets the user ID and saves it to localStorage.
     * @param {Object} state - The current state.
     * @param {Object} action - The action containing the new user ID.
     */
    setUserId(state, action) {
      state.userId = action.payload;
      localStorage.setItem("userId", state.userId);
    },
    /**
     * Removes the user ID from the state and localStorage.
     * @param {Object} state - The current state.
     */
    removeUserId(state) {
      state.userId = null;
      localStorage.removeItem("userId");
    },
    /**
     * Sets the user image and saves it to localStorage.
     * @param {Object} state - The current state.
     * @param {Object} action - The action containing the new user image URL.
     */
    setUserImage(state, action) {
      state.userImage = action.payload;
      localStorage.setItem("userPhoto", state.userImage);
    },
    /**
     * Removes the user image from the state and localStorage.
     * @param {Object} state - The current state.
     */
    removeUserImage(state) {
      state.userImage = null;
      localStorage.removeItem("userPhoto");
    },
    /**
     * Sets the image availability status to true.
     * @param {Object} state - The current state.
     */
    setIsImageAvailable(state) {
      state.isImageAvailable = true;
    },
    /**
     * Sets the image availability status to false.
     * @param {Object} state - The current state.
     */
    removeIsImageAvailable(state) {
      state.isImageAvailable = false;
    },
    /**
     * Marks the user profile as updated.
     * @param {Object} state - The current state.
     */
    setIsUpdated(state) {
      state.isUpdated = true;
    },
    /**
     * Marks the user profile as not updated.
     * @param {Object} state - The current state.
     */
    removeIsUpdated(state) {
      state.isUpdated = false;
    },
    /**
     * Sets the user's first and last name.
     * @param {Object} state - The current state.
     * @param {Object} action - The action containing the first and last name.
     */
    setUserName(state, action) {
      state.userName.firstName = action.payload.firstName;
      state.userName.lastName = action.payload.lastName;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
