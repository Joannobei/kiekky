import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";
import MidNav from "./MidNav";
import CustomRegister from "../../container/CustomButton";
// import CustomLogin from "../../container/CustomButton";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 bg-white pb-5">
        <nav className="hidden xl:block xl:mx-32">
          <div className="flex justify-between pt-10 ">
            <div className=" flex items-center ">
              <NavLink to="/">
                <img src={Logo} alt="Kiekky_Logo" />
              </NavLink>
            </div>
            <div className="flex justify-between items-center">
              {/* <CustomLogin type="button" loginDetails="Login" className="mx-8 px-10 text-lg border-radius" /> */}
              <button
                type="button"
                className="mx-8 px-10 text-lg border-radius"
              >
                <NavLink to="/login">Login</NavLink>
              </button>
              <CustomRegister type="button" buttonDetails="Register"  className="w-44 h-14 button text-base"/>
            </div>
          </div>
        </nav>
      </div>
      <MidNav />
    </>
  );
};

export default Navbar;
