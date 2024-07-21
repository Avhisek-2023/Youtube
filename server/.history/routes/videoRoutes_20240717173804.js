import express from "express";
import { uploadVideo } from "../controller/VideoController";

const route = express.Router();

route.post("/upload", uploadVideo);
