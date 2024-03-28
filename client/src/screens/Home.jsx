import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ShopCat from "../components/ShopCat";
import Footer from "../components/Footer";

import { RiCustomerService2Line } from "react-icons/ri";
import { SiRazorpay } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";

// import p1 from "../assets/asset 3.png";
// import p2 from "../assets/asset 4.png";
// import p3 from "../assets/asset 8.png";
// import p4 from "../assets/asset 10.png";
// import p5 from "../assets/asset 12.png";
// import p5 from "../assets/asset 12.png";
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

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <main className=" px-10 sm:px-24">
        <ShopCat />
        <p className="text-2xl font-bold text-center">Best Seller Products</p>

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

        {/* Service section */}
        <section className="my-20">
          <p className="text-2xl font-bold text-center">Services We Provide</p>
          <div className="flex justify-center flex-wrap my-10 gap-5">
            <div className="flex flex-col justify-center items-center gap-3 bg-gray-200 p-5 rounded-2xl text-center w-72">
              <div className="text-6xl text-green-800">
                <RiCustomerService2Line />
              </div>
              <p className="font-semibold text-xl">24 x 7 Customer Service</p>
              <p>Easy to Contect and Clear any Issue to Our Customer Service</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 bg-gray-200 p-5 rounded-2xl text-center w-72">
              <div className="text-6xl text-green-800">
                <SiRazorpay />
              </div>
              <p className="font-semibold text-xl">Secure Razorpay Payment</p>
              <p>Easy to Contect and Clear any Issue to Our Customer Service</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 bg-gray-200 p-5 rounded-2xl text-center w-72">
              <div className="text-6xl text-green-800">
                <BiCategoryAlt />
              </div>
              <p className="font-semibold text-xl">Many Brands to Buy</p>
              <p>
                Many Brands and Different Brands to Choose from by Your Own
                Choice
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer section */}
      <Footer/>
    </>
  );
};

export default Home;
