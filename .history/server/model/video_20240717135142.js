import mongoose from "mongoose";
const videoSchema = new mongoose.Schema({
  video_title: {
    type: String,
    required: true,
  },
  file_name: {
    type: String,
    required: true,
  },
  file_type: {
    type: String,
    required: true,
  },
  file_path: {
    type: String,
    required: true,
  },
  file_size: {
    type: String,
    required: true,
  },
  video_channel: {
    type: String,
    required: true,
  },
});
