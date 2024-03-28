import hero from "../assets/hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import {
  Autoplay,
  Parallax,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// using external css for custom navigator and pagination
import "../styles/shopcat.css";

const banners = [
  {
    img: "https://images.unsplash.com/photo-1525548002014-e18135d814d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Slim and Light Laptops",
    desc: "Laptops with Every Choices and Every Brand for Gmaing, Productivity",
  },
  {
    img: "https://images.unsplash.com/photo-1600262606148-dbe6a3f5dc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    title: "Smartphones",
    desc: "Premium and Stylish Phones from Budget to Flagship",
  },
  {
    img: "https://images.unsplash.com/photo-1551379334-353ab9740268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Books and Notes",
    desc: "Need of Student Books and Notes with Accessories",
  },
  {
    img: "https://images.unsplash.com/photo-1587725943749-3d475c15c983?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Cloths and Dresses",
    desc: "To Go with Fashion Every Style Cloths and Dress Match Your Design",
  },
  {
    img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Shoes and Snikers",
    desc: "Find Your Best Pair of Shoes and Snikers which Suits Your Personality",
  },
];

const Hero = () => {
  const bgStyle = (img) => {
    return {
      backgroundImage: `linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.817) 0%,
        rgba(49, 49, 49, 0.130) 43%,
        rgba(0, 0, 0, 0) 100%
      ), url(${img})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      transitionDuration: "1s ease",
      height: "35rem",
    };
  };

  return (
    <>
      <Swiper
        modules={[Autoplay, Parallax, Navigation, Pagination]}
        // spaceBetween={1}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
          reverseDirection: false,
        }}
        parallax={true}
        navigation={true}
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=" text-white  rounded-3xl mx-10 h-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} style={bgStyle(banner.img)} className="">
            <div className=" h-full pl-12 pt-12 2xl:pl-20 2xl:pt-20 flex flex-col gap-6 bg-gradient-dark">
              <h3 className="text-5xl font-semibold">{banner.title}</h3>
              <p className="text-2xl font-light w-96">
                {banner.desc} and More...
              </p>
              <button className="border-solid border-2 border-gray-200  w-36 rounded-3xl p-1 pb-2 text-gray-200  text-lg hover:bg-gray-200 hover:text-black transition ease-in-out duration-500 ">
                Explore Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
