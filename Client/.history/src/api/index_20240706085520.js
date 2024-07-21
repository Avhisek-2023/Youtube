import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";
export const fetchUser = createAsyncThunk("fetchUser", async () => {
  const response = await axiosClient.get("/");
});
