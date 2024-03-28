import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      min: 5,
      max: 80,
    },
    imageUrl: {
      type: String,
    },
    description: {
      type: String,
      min: 5,
      max: 300,
    },
    price: {
      type: Number,
    },
    availableQuantity: {
      type: Number,
    },
    brand: {
      type: String,
    },
    likes: {
        type: String
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
