import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  userId: localStorage.getItem("userId") ?? null,
  userImage: localStorage.getItem("userPhoto") ?? null,
  isUpdated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultValue,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
      localStorage.setItem("userId", state.userId);
    },
    removeUserId(state) {
      state.userId = null;
      localStorage.removeItem("userId");
    },
    setUserImage(state, action) {
      state.userImage = action.payload;
      localStorage.setItem("userPhoto", state.userImage);
    },
    setIsUpdated(state) {
      state.isUpdated = true;
    },
    removeIsUpdated(state) {
      state.isUpdated = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
