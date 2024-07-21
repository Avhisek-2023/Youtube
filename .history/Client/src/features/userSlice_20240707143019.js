import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../api/index.js";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
  },
  reducers: {},
});
export default userSlice.reducer;
