import express from "express";
import {
  getChannel,
  storeChannel,
  updateChannel,
} from "../controller/ChannelController.js";

const route = express.Router();

route.post("/create", storeChannel);

route.get("/getChannel/:id", getChannel);

route.patch("/updateChannel/:id", updateChannel);
export default route;
