import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userId: null },
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
      console.log(state.userId);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
