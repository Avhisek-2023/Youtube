import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";
export const userLogin = createAsyncThunk(
  "userLogin",
  async (email, { rejectWithValue }) => {
    try {
      // console.log(email);
      await axiosClient.post("/user/login", email).then(({ data }) => {});
    } catch (error) {
      console.log("IN");
      return rejectWithValue(error.response);
    }
  }
);
