import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";

const signup = async (req, res) => {
  try {
    const { fullName, email, password, avatar, phoneNumber } = req.body;
    console.log(fullName);

    const generatedSalt = await bcrypt.genSalt(16);
    const encryptedPassword = await bcrypt.hash(password, generatedSalt);

    const alreadyUser = User.findOne({ email });
    if (alreadyUser)
      return res.status(201).json({ message: "already have an account!" });

    const newUser = new User({
      fullName,
      email,
      password: encryptedPassword,
      avatar,
      phoneNumber,
    });

    const newUserDoc = await newUser.save();
    console.log(newUserDoc);

    res.status(201).json({ message: "new user created!" });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  //check user exists or not
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({ message: "user dosen't exist!" });
  }

  // check if password is verified
  const isVerifiedPassword = bcrypt.compare(password, user.password);
  if (!isVerifiedPassword) {
    res
      .status(400)
      .json({ message: "Please enter correct email or password!" });
  }

  const token = jwt.sign({ userId: user._id }, "748MERN&&KEY");

  const userData = {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    avatar: user.avatar,
    phoneNumber: user.phoneNumber,
  };

  res.status(200).json({ token, userData });
};

// const verify = async (req, res, next) => {
//   const tokenData = req.header("auth-access-token");

//   if (tokenData.startsWith("Wall ")) {
//     const token = tokenData.slice(5, tokenData.Length).trimLeft();
//   }
//   const verifyToken = jwt.verify(token, "748MERN&&KEY");
//   if (verifyToken) {
//     req.user = verifyToken;
//     next();
//   } else {
//     res.status(500).json({ message: "token is not verified!", user });
//   }
// };

const getUser = (req, res) => {};

export { signup, login, getUser };
