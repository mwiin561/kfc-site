import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
// import Logo from "../assets/logo (2).png";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex mt-45 w-full md:mt-54 bg-[#F73D27] justify-between items-center px-4 h-14 max-w-[1245px] mx-auto text-white rounded-md">
        {/* <img className="lg:w-[3%] w-[10%] " src={Logo} alt="logo" />{" "} */}
        <h1 className="w-full md:translate-x-[10%] px-3 font-bold text-xl md:text-3xl text-[#ffffff]">
          KFC MUKONO
        </h1>{" "}
        <ul className="hidden w-full md:flex space-x-20">
          
          
        
          
          <Link to={'/cart'} className="bg-[#ffffff] text-black rounded-md font-medium px-8 py-1">
            Cart
          </Link>
          <a href="#about" className="bg-[#ffffff] text-black rounded-md font-medium px-8 py-1">
            About
          </a>
          <Link to={'/Login'}className="bg-[#ffffff] text-black rounded-md font-medium px-8 py-1">
            Login
          </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed top-0 left-0 bg-[#F73D27] w-[100%] h-full border-r border-r-gray-900 ease-in-out duration-500 rounded-r-md"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full font-bold text-xl md:text-3xl m-4 text-white">KFC</h1>
          <ul className="md:hidden p-4 uppercase space-y-2">
            <li className="p-2 border-b border-gray-600">ABOUT US</li>
            <li className="p-2 border-b border-gray-600">FIND US</li>
            <li className="p-2 border-b border-gray-600">ALL CAMPAIGNS</li>
            <button className="bg-[#ffffff] text-black rounded-md w-full px-2 py-1">
              Contact
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
