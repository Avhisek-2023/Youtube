import { createSlice } from "@reduxjs/toolkit";
// import axiosClient from "../axios_client";
import { userLogin } from "../api";

const userSlice = createSlice({
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
      // console.log("fulfilled : ", action.payload.data);
      state.loading = false;
      state.users.push(action.payload);
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.data.token)
      );
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

// const userLogin = createAsyncThunk("userLogin", async (email) => {
//   const res = await axiosClient.post("/user/login", email);
//   return res.data;
// });

export default userSlice.reducer;
