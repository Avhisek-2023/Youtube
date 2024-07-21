import { createSlice } from "@reduxjs/toolkit";
import { createChannel } from "../api/index.js";
const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channel: [],
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      console.log("fulfilled : ", action.payload.data);
      state.loading = false;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default channelSlice.reducer;
