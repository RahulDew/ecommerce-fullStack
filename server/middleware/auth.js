import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";

const verification = async (req, res, next) => {
  const tokenData = req.header("auth-access-token");

  if (tokenData.startsWith("Wall ")) {
    const token = tokenData.slice(5, tokenData.Length).trimLeft();
  }
  const verifyToken = jwt.verify(token, "748MERN&&KEY");
  if (verifyToken) {
    req.user = verifyToken;
    next();
  } else {
    res.status(500).json({ message: "token is not verified!", user });
  }
};

export default verification;
