import jwt from "jsonwebtoken";
import User from "../model/user.js";
export const login = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      try {
        const newUser = await User.create({ email });
      } catch (error) {}
    }
  } catch (error) {}
};
