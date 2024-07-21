import express from "express";
import {
  deleteChannel,
  getChannel,
  storeChannel,
  updateChannel,
} from "../controller/ChannelController.js";

const route = express.Router();

route.post("/create", storeChannel);

route.get("/getChannel/:id", getChannel);

route.put("/updateChannel/:id", updateChannel);

route.delete("/delete/:id", deleteChannel);
export default route;
