import jwt from "jsonwebtoken";
import User from "../model/user.js";
import dotenv from "dotenv";
export const login = async (req, res) => {
  const { email } = req.body;
  // console.log(email);

  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
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
        res.status(200).json({ result: newUser, token });
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

export const authenticate = (req, res, next) => {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];
  if (token == null) {
    return res.status(401);
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
    if (err) {
      return res.status(401);
    }
    req.users = User.users;
    next();
  });
};
