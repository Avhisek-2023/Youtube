import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice.js";
import channelSlice from "../features/channelSlice.js";
export const store = configureStore({
  reducer: {
    user: userSlice,
    channel: channelSlice,
  },
});
