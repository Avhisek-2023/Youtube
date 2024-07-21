import { configureStore } from "@reduxjs/toolkit";
import userSli  ce from "../features/userSlice.js";
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
