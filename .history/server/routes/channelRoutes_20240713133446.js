import express from "express";
import { getChannel, storeChannel } from "../controller/ChannelController.js";

const route = express.Router();

route.post("/create", storeChannel);

route.get("/getChannel/:id", getChannel);

route.patch("/updateChannel/:id", updat);
export default route;
