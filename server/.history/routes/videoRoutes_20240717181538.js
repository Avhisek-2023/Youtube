import express from "express";
import { uploadVideo } from "../controller/VideoController.js";
import upload from "../helper/filehelper.js";

const route = express.Router();

route.post("/upload", upload.single("file"), uploadVideo);

export default route;
