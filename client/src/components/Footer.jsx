import React from "react";
import logo from "../assets/logo.png";


const Footer = () => {
  return (
    <footer className=" bg-gray-200 w-full rounded-t-3xl py-5 bottom-0">
      <div className="flex gap-2 items-center justify-center">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <p className="text-green-800 font-bold text-2xl my-auto">SHOPCART</p>
      </div>
      <div className="flex justify-center items-center flex-wrap lg:justify-evenly my-5 gap-10">
        <div className="flex flex-col w-32">
          <p className="font-semibold text-lg">Who We Are</p>
          <ul>
            <li>About Us</li>
            <li>T & C</li>
            <li>Our Works</li>
          </ul>
        </div>
        <div className="flex flex-col w-32">
          <p className="font-semibold text-lg">Follow Us</p>
          <ul>
            <li>Facebook</li>
            <li>Instgram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="flex flex-col w-32">
          <p className="font-semibold text-lg">Vision</p>
          <ul>
            <li>Make Simplicity</li>
            <li>Better Experiance</li>
            <li>Be Updated</li>
          </ul>
        </div>
        <div className="flex flex-col w-32">
          <p className="font-semibold text-lg">Contact Us</p>
          <ul>
            <li>+91-9432598933</li>
            <li>shopcart@duck.com</li>
            <li>insta-shopcart223</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center flex-wrap text-center gap-3">
        <p className="font-bold text-lg">Stay Up to Date With Us</p>
        <div className="flex gap-3 flex-wrap justify-center">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-64 p-2 rounded-full px-6 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-green-800 rounded-full px-6 py-1.5 text-white"
          >
            Connect
          </button>
        </div>
      </div>
      <div className="bg-gray-300 w-full h-[2px] my-4"></div>
      <div className="text-center">Shopcart &copy; All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
