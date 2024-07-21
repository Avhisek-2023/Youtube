import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";
// import { userLogin } from "../api/index.js";

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

export const userLogin = createAsyncThunk(
  "userLogin",
  async (email, { rejectWithValue }) => {
    try {
      // console.log(email);
      await axiosClient.post("/user/login", email).then(({ data }) => {
        return data;
      });
    } catch (error) {
      console.log("IN");
      return rejectWithValue(error.response);
    }
  }
);
export default userSlice.reducer;
