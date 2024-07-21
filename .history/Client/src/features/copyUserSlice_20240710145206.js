import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";

const copyuserSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

const userLogin = createAsyncThunk("userLogin", async (email) => {
  const res = await axiosClient.post("/user/login", email);
  return res.data;
});

export default copyuserSlice.reducer;
