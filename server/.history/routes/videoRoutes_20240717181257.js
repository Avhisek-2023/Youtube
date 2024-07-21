import express from "express";
import { uploadVideo } from "../controller/VideoController";
import upload from "../helper/filehelper";

const route = express.Router();

route.post("/upload", upload.single("file"), uploadVideo);

export default route;
