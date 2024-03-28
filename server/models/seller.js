import mongoose from "mongoose";

const sellerSchema = mongoose.Schema(
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
    contact: {
      type: Number,
    },
    products: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Seller = mongoose.model("Seller", sellerSchema);

export default Seller;
