import express from "express";
import { login } from "../controller/auth.js";
import User from "../model/user.js";
import jwt from "jsonwebtoken";
import dontenv from "dotenv";
const route = express.Router();
const authenticate = (req, res, next) => {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];
  if (token == null) {
    return res.status(401);
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
    if (err) {
      return res.status(401);
    }
  });
};
route.post("/login", login);
route.get("/getAllUser", authenticate, async (req, res) => {
  try {
    const users = await User.find();
    if (users.length == 0) {
      return res.status(404).json({ message: "Error! User Not Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
});

export default route;
