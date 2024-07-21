import { createSlice } from "@reduxjs/toolkit";
import { uploadVideo } from "../api/index.js";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(uploadVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadVideo.fulfilled, (state, action) => {
      // console.log("fulfilled : ", action.payload.data);
      state.loading = false;
      state.videos.push(action.payload);
    });
    builder.addCase(uploadVideo.rejected, (state, action) => {
      console.log("In");
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default videoSlice.reducer;
