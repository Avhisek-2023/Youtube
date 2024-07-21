import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axios_client";

export const userLogin = createAsyncThunk(
  "userLogin",
  async (payLoad, { rejectWithValue }) => {
    try {
      // console.log(email);
      const request = await axiosClient.post("/user/login", payLoad);
      const response = await request.data;
      return response;
      // console.log(response);
    } catch (error) {
      console.log("IN");
      return rejectWithValue(error.response);
    }
  }
);

export const createChannel = createAsyncThunk(
  "createChannel",
  async (payLoad, { rejectWithValue }) => {
    try {
      const request = await axiosClient.post("/channel/create", payLoad, {
        headers,
      });
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const uploadVideo = createAsyncThunk(
  "uploadVideo",
  async (payLoad, { rejectWithValue }) => {
    // console.log(payLoad);
    const request = await axiosClient.post("/video/upload", payLoad);
    const response = await request.data;
    console.log(response);
    return;
    try {
      const request = await axiosClient.post("/video/upload", payLoad);
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
