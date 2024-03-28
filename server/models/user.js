import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      min: 5,
      max: 55,
    },
    email: {
      type: String,
      required: true,
      min: 5,
      max: 55,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    avatar: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
