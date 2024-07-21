import express from "express";
import { login } from "../controller/auth.js";

const route = express.Router();

route.post("/login", login);
route.get("/getAllUser", async (req, res) => {});

export default route;
