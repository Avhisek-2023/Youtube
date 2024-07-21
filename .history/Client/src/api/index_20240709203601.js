import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";
export const userLogin = createAsyncThunk(
  "userLogin",
  async (email, { rejectWithValue }) => {
    try {
      // console.log(email);
      const response = await axiosClient.post("/user/login", email);

      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      console.log("IN");
      return rejectWithValue(error.response);
    }
  }
);
