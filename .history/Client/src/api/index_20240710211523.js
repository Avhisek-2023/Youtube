import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";
export const userLogin = createAsyncThunk(
  "userLogin",
  async (payLoad, { rejectWithValue }) => {
    try {
      // console.log(email);
      const request = await axiosClient.post("/user/login", payLoad);
      const response = request.data;
      console.log(response);
    } catch (error) {
      console.log("IN");
      return rejectWithValue(error.response);
    }
  }
);
