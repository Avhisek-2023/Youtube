import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../api/index.js";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  extraReducers: {
    [userLogin.pending]
  },
});
export default userSlice.reducer;
