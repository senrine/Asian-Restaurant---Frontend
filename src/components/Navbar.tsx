import { Link } from "react-router-dom";
import profile from "../assets/Group.svg";
import basket from "../assets/basket.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Navbar() {
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <div className="w-full flex flex-col z-10">
      <div className="w-full flex items-center">
        <Link
          to={"/"}
          className="mr-auto text-primary-white font-Bellefair text-[24px] md:text-[28px] lg:text-[30px]"
        >
          Rising
          <span className="text-primary-red">Sun</span>
        </Link>

        <Link to={"/signup"}>
          <button className="flex items-center justify-between bg-primary-red80 hover:bg-primary-red px-3 py-1 rounded-full mr-1 sm:mr-2 md:mr-3 text-primary-white md:text-[16px] text-[12px]">
            <img className="w-[14px] md:w-[18px] mr-1" src={profile} alt="" />
            Hi {auth.userInfo ? auth.userInfo.name : "Sign In"}!
          </button>
        </Link>
        <Link to={"/order"}>
          <button className="flex items-center justify-between bg-primary-red80 hover:bg-primary-red px-3 py-1 rounded-full text-primary-white md:text-[16px] text-[12px]">
            <img
              className="mr-1 w-[10px] md:w-[16px] relative bottom-1/2 -z-0"
              src={basket}
              alt="basket image"
            />
            Order
          </button>
        </Link>
      </div>
    </div>
  );
}
