import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    orderId: {
      type: String,
    },
    userId: {
      type: String,
    },
    items: [
      {
        productId: {
          type: String,
        },
        name: String,
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity can not be less then 1."],
        },
        price: Number,
      },
    ],
    bill: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
    },
    paymentStatus: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
