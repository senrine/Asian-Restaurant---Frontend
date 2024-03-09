import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import userPage from "../assets/userPage.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import UserDetails from "./UserDetails";

export default function UserPage() {
  var users = useSelector((state: RootState) => state.user);
  const [signup, setSignup] = useState(true);
  const [login, setLogin] = useState(false);

  const user = users.user;

  return (
    <>
      {!user && (
        <div className="py-2 h-full w-full font-Poppins text-primary-white flex flex-col lg:flex-row items-center relative md:justify-between">
          <div className="w-full mx-auto flex flex-col items-center max-lg:py-10 max-lg:px-10">
            <div className="flex flex-row items-center xl:text-[28px] md:text-[26px] text-[24px] md:mt-10 mb-20 font-Bellefair">
              <div className="mr-10">
                <button
                  onClick={() => {
                    setSignup(true);
                    setLogin(false);
                  }}
                  className={`${
                    signup ? "font-semibold" : ""
                  }hover:font-semibold`}
                >
                  Sign Up
                </button>
                {signup && <hr className="border-primary-red"></hr>}
              </div>
              <div>
                <button
                  onClick={() => {
                    setSignup(false);
                    setLogin(true);
                  }}
                  className={`${
                    login ? "font-semibold" : ""
                  } hover:font-semibold`}
                >
                  Log In
                </button>
                {login && <hr className="border-primary-red"></hr>}
              </div>
            </div>
            <div className="lg:hidden w-[40%] flex items-center relative">
              <div className="min-w-full h-[80%] bg-primary-red rounded-full absolute -z-10 blur-[80px] md:blur-[100px]"></div>
              <img src={userPage} alt="" />
            </div>
            {signup && <Signup />}
            {login && <Login />}
          </div>
          <div className="max-lg:hidden w-[50%] flex items-center relative">
            <div className="min-w-[80%] min-h-[60%] bg-primary-red rounded-full absolute -z-10 blur-[100px] md:blur-[180px]"></div>
            <img
              className="min-w-full flex-shrink-0 h-full"
              src={userPage}
              alt=""
            />
          </div>
        </div>
      )}
      <UserDetails />
    </>
  );
}
