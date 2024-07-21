import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../api/index.js";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payLoad);
    },
    [userLogin.rejected]: (state, action) => {
      state.loading = false;
      state.er;
    },
  },
});
export default userSlice.reducer;
