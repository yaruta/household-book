import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {userId: localStorage.getItem("userId")} ?? {
  userId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultValue,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
      localStorage.setItem("userId", state.userId);
      console.log("Set User Id to " + state.userId);
    },
    removeUserId(state) {
      state.userId = null;
      localStorage.removeItem("userId");
      console.log("Remove User Id");
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
