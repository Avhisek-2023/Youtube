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
});
