import jwt from "jsonwebtoken";
import User from "../model/user.js";
export const login = async (req, res) => {
  const { email } = req.body;
  const existingUser = await User.findOne({ email });
};
