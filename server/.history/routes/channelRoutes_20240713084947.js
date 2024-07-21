import express from "express";
import { storeChannel } from "../controller/ChannelController.js";

const route = express.Router();

route.post("/create", storeChannel);
export default route;
