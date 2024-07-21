import express from "express";
import { uploadVideo } from "../controller/VideoController";
import upload from "../helper/filehelper";

const route = express.Router();

route.post("/upload", uploadVideo);
