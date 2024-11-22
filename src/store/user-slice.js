import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  userId: localStorage.getItem("userId") ?? null,
  userImage: localStorage.getItem("userPhoto") ?? null,
  isImageAvailable: localStorage.getItem("userPhoto") ? true : false,
  isUpdated: false,
  userName: { firstName: "Unknown", lastName: "" },
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
    removeUserImage(state) {
      state.userImage = null;
      localStorage.removeItem("userPhoto");
    },
    setIsImageAvailable(state) {
      state.isImageAvailable = true;
    },
    removeIsImageAvailable(state) {
      state.isImageAvailable = false;
    },
    setIsUpdated(state) {
      state.isUpdated = true;
    },
    removeIsUpdated(state) {
      state.isUpdated = false;
    },
    setUserName(state, action) {
      state.userName.firstName = action.payload.firstName;
      state.userName.lastName = action.payload.lastName;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
