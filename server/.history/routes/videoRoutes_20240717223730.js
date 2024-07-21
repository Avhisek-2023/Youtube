import express from "express";
import { getAllVideo, uploadVideo } from "../controller/VideoController.js";
import upload from "../helper/filehelper.js";

const route = express.Router();

route.post("/upload", upload.single("file"), uploadVideo);

route.get("/fetchAllChannel", getAllVideo);
export default route;
