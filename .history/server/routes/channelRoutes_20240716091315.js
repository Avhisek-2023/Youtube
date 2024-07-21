import express from "express";
import {
  deleteChannel,
  getChannel,
  getSubscribers,
  storeChannel,
  subscribe,
  unsubscribe,
  updateChannel,
} from "../controller/ChannelController.js";

const route = express.Router();

route.post("/create", storeChannel);

route.get("/getChannel", getChannel);

route.put("/updateChannel/:id", updateChannel);

route.delete("/delete/:id", deleteChannel);

route.get("/getSubscribers/:id", getSubscribers);

route.post("/subscribe/:id", subscribe);

route.post("/unsubscribe/:id", unsubscribe);

export default route;
