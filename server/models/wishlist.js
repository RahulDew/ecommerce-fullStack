import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema(
  {
    products: {
      type: Object,
    },
    userId: {
      typeof: String,
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
    quantity: {
      type: Number,
    },
    brand: {
      type: String,
    },
    isLiked: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
