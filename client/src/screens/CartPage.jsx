import React from "react";
import { Link } from "react-router-dom";
import Cart from "../components/cart";

const CartPage = () => {
  return (
    <section class="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center">
          <h1 class="text-2xl font-semibold text-gray-900">Your Cart</h1>
        </div>

        <Cart />
      </div>
    </section>
  );
};

export default CartPage;
