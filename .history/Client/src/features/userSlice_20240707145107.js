import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../api/index.js";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    [userLogin.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payLoad);
    },
    [userLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payLoad;
    },
  },
});
export default userSlice.reducer;
