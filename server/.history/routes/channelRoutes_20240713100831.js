import express from "express";
import { getChannel, storeChannel } from "../controller/ChannelController.js";

const route = express.Router();

route.post("/create", storeChannel);

route.get("/getChannel", getChannel);

export default route;
