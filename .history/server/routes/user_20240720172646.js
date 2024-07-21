import express from "express";
import { authenticate, login } from "../controller/auth.js";
import User from "../model/user.js";

const route = express.Router();
route.post("/login", login);

route.get("/getAllUser", async (req, res) => {
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
