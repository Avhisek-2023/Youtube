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
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.users.push(action.payload);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
  },
});
export default userSlice.reducer;
