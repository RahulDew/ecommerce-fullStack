import React from "react";
import Navbar from "../components/Navbar";

import p5 from "../assets/asset 26.png";
import p6 from "../assets/asset 29.png";
import p7 from "../assets/asset 32.png";
import p8 from "../assets/asset 33.png";
import p9 from "../assets/asset 42.png";
import p10 from "../assets/asset 52.png";
import p11 from "../assets/asset 53.png";
import p12 from "../assets/asset 54.png";
import p13 from "../assets/asset 60.png";

const bestSellerProducts = [
  {
    name: "Hang Speaker",
    img: p5,
  },
  {
    name: "Camera",
    img: p6,
  },
  {
    name: "Razor Head 1",
    img: p7,
  },
  {
    name: "Noise Watch",
    img: p8,
  },
  {
    name: "Gizga Lappy Bag ",
    img: p10,
  },
  {
    name: "Beak Sneakers",
    img: p13,
  },
  {
    name: "Apple Macbook",
    img: p11,
  },
  {
    name: "Apple I Pad Air",
    img: p12,
  },
  {
    name: "Beak Sneakers",
    img: p13,
  },
  {
    name: "Hang Speaker",
    img: p5,
  },
];

const ProductsPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-col my-10">
        <p className="text-2xl font-bold text-left px-24">New Producs For You</p>
        <div className="flex my-10 flex-wrap justify-center gap-5">
          {bestSellerProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-2 cursor-pointer"
            >
              <div className="w-52 h-52 bg-gray-200 rounded-2xl shop-cat-container ">
                <img src={product.img} className="bg-cover  duration-700" />
              </div>
              <p className="text-center text-lg font-semibold">
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>


      <div className="flex flex-col my-10">
        <p className="text-2xl font-bold text-left px-24">Similer Items You Might Like</p>
        <div className="flex my-10 flex-wrap justify-center gap-5">
          {bestSellerProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-2 cursor-pointer"
            >
              <div className="w-52 h-52 bg-gray-200 rounded-2xl shop-cat-container ">
                <img src={product.img} className="bg-cover  duration-700" />
              </div>
              <p className="text-center text-lg font-semibold">
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col my-10">
        <p className="text-2xl font-bold text-left px-24">Recently Viewed</p>
        <div className="flex my-10 flex-wrap justify-center gap-5">
          {bestSellerProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-2 cursor-pointer"
            >
              <div className="w-52 h-52 bg-gray-200 rounded-2xl shop-cat-container ">
                <img src={product.img} className="bg-cover  duration-700" />
              </div>
              <p className="text-center text-lg font-semibold">
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default ProductsPage;
