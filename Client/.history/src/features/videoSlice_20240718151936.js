import { createSlice } from "@reduxjs/toolkit";

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
      state.users.push(action.payload);
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.data.token)
      );
    });
    builder.addCase(uploadVideo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default userSlice.reducer;
