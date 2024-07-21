import mongoose from "mongoose";
const videoSchema = new mongoose.Schema({
  video_title: {
    type: String,
    required: true,
  },
});
