import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channel: [],
    loading: true,
    error: null,
  },
});

export default channelSlice.reducer;
