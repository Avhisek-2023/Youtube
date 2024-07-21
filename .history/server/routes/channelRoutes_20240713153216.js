import express from "express";
import {
  deleteChannel,
  getChannel,
  getSubscribers,
  storeChannel,
  updateChannel,
} from "../controller/ChannelController.js";

const route = express.Router();

route.post("/create", storeChannel);

route.get("/getChannel/:id", getChannel);

route.put("/updateChannel/:id", updateChannel);

route.delete("/delete/:id", deleteChannel);

route.get("/getSubscribers", getSubscribers);
export default route;
