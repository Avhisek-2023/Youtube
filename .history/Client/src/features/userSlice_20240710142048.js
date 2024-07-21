import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";
// import { userLogin } from "../api/index.js";
const userLogin = createAsyncThunk("userLogin", async (email) => {
  userLoginAPI(email);
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      console.log(state, action);
      console.log(action.payload);
      state.data.push(action.payload);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
  },
});

const userLoginAPI = async (email) => {
  await axiosClient.post("/user/login", email).then(({ response }) => {
    return response.result;
  });
};
export default userSlice.reducer;
