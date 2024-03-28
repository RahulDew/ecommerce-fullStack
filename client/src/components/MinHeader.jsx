import { IoCall } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
const MinHeader = () => {
  return (
    <>
      <div className="bg-green-900 text-white font-normal">
        <div className=" flex justify-around gap-40 py-2 text-sm">
          <div className="flex">
            <IoCall className="my-auto" />
            <span>+00089274638</span>
          </div>
          <div>Get 50% Off on Selected Items | Shop Now</div>
          <ul className="flex gap-3">
            <li className="flex gap-2">
              Eng{" "}
              <span className="my-auto">
                <BsChevronDown />
              </span>
            </li>
            <li className="flex gap-2">
              Location{" "}
              <span className="my-auto">
                <BsChevronDown />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MinHeader;
