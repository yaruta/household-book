import { createSlice } from "@reduxjs/toolkit";

const defaultValue = localStorage.getItem("userId") ?? {
  userId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultValue,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
      localStorage.setItem("userId", state.userId);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
