import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";
export const userLogin = createAsyncThunk("userLogin", async (email) => {
  try {
    const response = await axiosClient.post("/user/login", email);
    console.log(respons);
  } catch (error) {
    console.log(error);
  }
});
