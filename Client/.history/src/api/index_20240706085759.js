import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";
export const userLogin = createAsyncThunk("userLogin", async () => {
  const response = await axiosClient.post("/user/login");
});
