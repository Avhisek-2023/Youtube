import jwt from "jsonwebtoken";
import User from "../model/user.js";
export const login = (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const existingUser = User.findOne({ email });
    if (!existingUser) {
      try {
        const newUser = User.create({ email });
        const token = jwt.sign(
          {
            email: newUser.email,
            id: newUser._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({ result: existingUser, token });
      } catch (error) {
        res.status(500).json({ Message: error });
      }
    } else {
      const token = jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({ result: existingUser, token });
    }
  } catch (error) {
    res.status(500).json({ messge: error });
  }
};
