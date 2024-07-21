import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../axios_client";
export const fetchUser = createAsyncThunk();
