import React from "react";
import Navbar from "../components/Navbar";
import p6 from "../assets/asset 29.png";

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdAdd, MdOutlineRemove } from "react-icons/md";
import Footer from "../components/Footer";

import p5 from "../assets/asset 26.png";
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
];

const ProductPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="p-10 xl:px-32 ">
      <section className="flex flex-col md:flex-row gap-7 lg:gap-14 ">
        <div className="flex justify-center md:justify-start  items-center flex-col md:flex-row gap-3 ">
          <div className="w-96 h-96 bg-gray-200 rounded-3xl flex justify-center items-center mx-6">
            <img src={p6} className="scale-125" />
          </div>
          <div className="flex h-full md:flex-col justify-around gap-5">
            <div className="w-20 h-20 bg-gray-200 rounded-xl">
              <img src={p6} />
            </div>
            <div className="w-20 h-20 bg-gray-200 rounded-xl">
              <img src={p6} />
            </div>
            <div className="w-20 h-20 bg-gray-200 rounded-xl">
              <img src={p6} />
            </div>
            <div className="w-20 h-20 bg-gray-200 rounded-xl">
              <img src={p6} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 ">
          <ul className=" flex gap-3 flex-col ">
            <li className="text-3xl font-semibold">Tenki Camera</li>
            <li className="text-lg text-gray-600 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit corrupti sint similique ea eaque ipsa aliquid
              maiores
            </li>
            <li className="flex gap-1 items-center text-yellow-500">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <p className="text-xl font-semibold text-black">4.5</p>
            </li>
            <li className="text-2xl font-semibold">₹ 10,000</li>
          </ul>
          <div className="flex flex-col gap-5">
            <div className="w-36 flex items-center justify-between bg-gray-200 rounded-lg text-2xl">
              <button className="bg-gray-300 hover:bg-gray-400 duration-300 p-3  rounded-l-lg"><MdOutlineRemove/></button>
              <p className="text-xl">1</p>
              <button className="bg-gray-300 hover:bg-gray-400 duration-300 p-3 rounded-r-lg"><MdAdd/></button>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="bg-gray-200 hover:bg-gray-300 duration-300 font-semibold px-6 py-3 rounded-full">
                Add to Cart
              </button>
              <button className="bg-green-800 text-white font-semibold px-5 py-2 rounded-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Some more products */}
      <section className="my-16">
        <p className="text-2xl font-bold text-center">
          Find Some More Accessories
        </p>

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
      </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;
