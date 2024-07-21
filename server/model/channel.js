import mongoose from "mongoose";

const channelSchema = mongoose.Schema({
  user_id: {
    type: String,
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
    default: null,
  },
  subscribers: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Channel", channelSchema);
