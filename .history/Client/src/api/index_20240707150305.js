import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";
export const userLogin = createAsyncThunk(
  "userLogin",
  async (email, { rejectWithValue }) => {
    try {
      console.log(email);
      const response = await axiosClient.post("/user/login", email);
      console.log(response);
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
