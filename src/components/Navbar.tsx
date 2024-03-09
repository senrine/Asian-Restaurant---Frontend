import { Link } from "react-router-dom";
import profile from "../assets/Group.svg";
import basket from "../assets/basket.svg";
import navbarBtn from "../assets/Navbar.svg";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full flex flex-col z-10 mb-8">
      <div className="w-full flex items-center justify-between mb-2">
        <button
          onClick={toggleNavbar}
          className="lg:hidden flex items-center justify-between px-2 py-1 rounded-full text-primary-white mr-1"
        >
          <img className="w-[14px]" src={navbarBtn} alt="" />
        </button>
        <Link
          to={"/"}
          className="max-lg:mr-auto text-primary-white font-Bellefair text-[24px] md:text-[28px] lg:text-[30px] xl:text-[34px]"
        >
          Rising
          <span className="text-primary-red">Sun</span>
        </Link>
        <div className="lg:flex lg:items-center lg:mx-auto hidden">
          <Link
            to="/"
            className="xl:text-[22px] md:text-[24px] text-[18px] font-Poppins text-primary-white80 hover:text-primary-white hover:font-semibold lg:mr-10 xl:mr-16"
          >
            Home
          </Link>
          <Link
            to="/Menu"
            className="xl:text-[22px] md:text-[24px] text-[18px] font-Poppins text-primary-white80 hover:text-primary-white hover:font-semibold lg:mr-10 xl:mr-16"
          >
            Menu
          </Link>
          <Link
            to="/About Us"
            className="xl:text-[22px] md:text-[24px] text-[18px] font-Poppins text-primary-white80 hover:text-primary-white hover:font-semibold md:mr-auto"
          >
            About us
          </Link>
        </div>

        <div
          className={`${
            isOpen
              ? "lg:hidden fixed left-0 top-0 w-[60%] h-full border-r border-primary-white15 bg-primary-black90 flex flex-col items-center py-20 z-10"
              : "hidden"
          }`}
        >
          <button
            onClick={toggleNavbar}
            className="border border-primary-white15 font-semibold rounded-xl h-6 w-6 flex items-center justify-center text-primary-white80  hover:text-primary-white ml-auto mr-10 mb-10 translate-"
          >
            X
          </button>
          <Link
            to="/"
            className="text-[14px] font-Poppins text-primary-white80 hover:text-primary-white font-semibold mb-4"
          >
            Home
          </Link>
          <Link
            to="/Menu"
            className="text-[14px] font-Poppins text-primary-white80 hover:text-primary-white font-semibold mb-4"
          >
            Menu
          </Link>
          <Link
            to="/About Us"
            className="text-[14px] font-Poppins text-primary-white80 hover:text-primary-white font-semibold mb-8"
          >
            About us
          </Link>

          <hr className="border border-primary-white15 w-[50%]" />
        </div>

        <Link
          to={"/signup"}
          className="bg-primary-red80 hover:bg-primary-red px-2 py-[6px] md:px-3 md:py-[10px] rounded-full mr-1 sm:mr-2 md:mr-3"
        >
          <img className=" w-[14px] md:w-[18px]" src={profile} alt="" />
        </Link>
        <button className="flex items-center justify-between bg-primary-red80 hover:bg-primary-red px-3 py-1 rounded-full text-primary-white md:text-[20px] text-[12px]">
          <img
            className="mr-1 w-[10px] md:w-[16px] relative bottom-1/2 -z-0"
            src={basket}
            alt="basket image"
          />
          Order
        </button>
      </div>
      <hr className="block w-full max-lg:hidden border border-primary-white15" />
    </div>
  );
}
