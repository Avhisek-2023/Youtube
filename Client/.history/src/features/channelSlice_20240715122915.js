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
    builder.addCase(createChannel.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createChannel.fulfilled, (state, action) => {
      console.log("fulfilled : ", action.payload.data);
      state.loading = false;
    });
    builder.addCase(createChannel.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default channelSlice.reducer;
