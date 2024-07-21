import jwt from "jsonwebtoken";
import User from "../model/user.js";
export const login = async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  console.log(email);
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      try {
        const newUser = await User.create({ email });
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
    res.status(500).json({ messge: "Something went wrong.." });
  }
};
