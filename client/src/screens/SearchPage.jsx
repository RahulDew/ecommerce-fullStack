import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { BiSearch } from "react-icons/bi";

import p6 from "../assets/asset 29.png";
import p7 from "../assets/asset 32.png";
import p8 from "../assets/asset 33.png";
import p12 from "../assets/asset 54.png";

const bestSellerProducts = [
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
    name: "Apple I Pad Air",
    img: p12,
  },
];

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-col gap-5 px-28">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-semibold">
            Search Your Fevorite Product
          </h3>
          <div className="flex gap-2 items-center border bg-gray-200 rounded-lg py-1 px-5 ">
            <span className="my-auto text-xl font-bold">
              <BiSearch />
            </span>
            <input
              type="text"
              placeholder="Ex.: AirPods Pro"
              className=" w-full focus:outline-none py-2 text-lg bg-gray-200"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </div>
        </div>

        <div className="flex my-10 flex-wrap justify-center gap-5 p-y">
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

export default SearchPage;
