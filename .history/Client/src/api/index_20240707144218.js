import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";
export const userLogin = createAsyncThunk("userLogin", async (email,()) => {
  try {
    const response = await axiosClient.post("/user/login", email);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
});
