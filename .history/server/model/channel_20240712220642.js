import mongoose from "mongoose";

const channelSchema = mongoose.Schema({
  user_id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  profile_picture: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
