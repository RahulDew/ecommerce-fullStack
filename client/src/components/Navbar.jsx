import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { BsChevronDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 980
  );
  // console.log(isMobileScreen);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobileScreen(window.innerWidth <= 980);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobileScreen(window.innerWidth <= 980);
      });
    };
  }, []);

  return (
    <nav className="flex w-full justify-between">
      <div className="flex w-full justify-between p-6 xl:px-24">
        <Link to={"/"} className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <p className="text-green-800 font-bold text-2xl my-auto">ShopCart</p>
        </Link>
        {!isMobileScreen ? (
          <ul className="flex gap-4 my-auto items-center">
            <li className="flex gap-2 items-center">
              <select id="Category">
                <option defaultValue={true}>Category</option>
                <option>Furniture</option>
                <option>Hand Bag</option>
                <option>Books</option>
                <option>Tech</option>
                <option>Sneakers</option>
                <option>Travel</option>
              </select>
              {/* <BsChevronDown /> */}
            </li>
            <li>Deals</li>
            <li>What&apos;s New</li>
            <li>Delivery</li>
            <ul className="flex items-center gap-3 ml-9">
              {/* <li className="flex gap-2 items-center border bg-gray-200 rounded-full px-4 py-1 my-auto">
                <span className="my-auto text-xl font-bold">
                  <BiSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search Product"
                  className="focus:outline-none py-1 bg-gray-200"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
              </li> */}

              <Link
                to={"/search"}
                className=" bg-gray-200 p-2 rounded-full text-2xl cursor-pointer"
              >
                <BiSearch />
              </Link>
              <Link to={"/cart"} className=" bg-gray-200 p-2 rounded-full text-2xl cursor-pointer">
                <BiCart />
              </Link>
              <li className=" bg-gray-200 p-2 lg:px-3 rounded-full text-2xl cursor-pointer flex gap-2">
                <p className="  hidden lg:block text-base font-semibold text-gray-600">
                  Hi Rahul
                </p>
                <BsFillPersonFill />
              </li>
            </ul>
          </ul>
        ) : (
          <div
            onClick={() => setToggleSidebar(!toggleSidebar)}
            className=" p-2 text-3xl cursor-pointer"
          >
            <HiOutlineBars3BottomRight />
          </div>
        )}
      </div>

      {toggleSidebar && isMobileScreen && (
        <div className="flex flex-col justify-between bg-gray-50/60 backdrop-blur-lg top-0 right-0 bottom-0 fixed h-full w-48 z-20 rounded-2xl m-auto transition duration-300 ease-out">
          <ul className="flex gap-4 flex-col mx-auto my-7 justify-start">
            <div
              onClick={() => setToggleSidebar(!toggleSidebar)}
              className=" right-0 mr-1 text-3xl flex items-center gap-4 cursor-pointer "
            >
              <MdOutlineClose />
              <p className="text-2xl font-semibold text-gray-700">Menu</p>
            </div>
            <li className=" flex gap-2 border items-center bg-gray-200 rounded-full px-4 py-1">
              <span className="text-xl font-bold">
                <BiSearch />
              </span>
              <input
                type="text"
                placeholder="Product"
                className="focus:outline-none py-1 bg-gray-200 w-20"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
            </li>
            <li className="flex gap-2 items-center px-4 ">
              <p>Categories</p>
              <BsChevronDown />
            </li>
            <li className="px-4 ">Deals</li>
            <li className="px-4 ">What&apos;s New</li>
            <li className="px-4 ">Delivery</li>
          </ul>
          <ul className="flex gap-4 flex-col mx-auto my-7 justify-start">
            <li className=" flex gap-2 border items-center bg-gray-200 rounded-full px-4 py-1">
              <span className="text-xl font-bold">
                <BsFillPersonFill />
              </span>
              <p>Account</p>
            </li>
            <Link to={'/cart'} className=" flex gap-2 border items-center bg-gray-200 rounded-full px-4 py-1">
              <span className="text-xl font-bold">
                <BiCart />
              </span>
              <p>Cart</p>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
