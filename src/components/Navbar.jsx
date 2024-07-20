import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const {bgColor = "bg-customColor"} = props;

  return (
    <>
      <div className={`w-screen h-[80px] z-10 ${bgColor} fixed drop-shadow-lg`}>
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <img src="fortress-putih.png" alt="Logo" className="h-12 ml-5" />
            <ul className="hidden md:flex text-white mx-8 space-x-6">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/mentor">Mentor</Link></li>
              <li><Link to="/career">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
           <Link to ="/register"> <button className="bg-transparent border-none text-white px-7 py-3 mr-2">
              Sign Up
            </button></Link>
            <Link to = "/login" ><button className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-white transition duration-300">
              Login
            </button></Link>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5 text-white" /> : <XIcon className="w-5 text-white" />}
          </div>
        </div>
        <ul className={!nav ? `hidden` : `absolute bg-zinc-200 w-full px-8 md:hidden`}>
          <li className="border-b-2 border-zinc-300 w-full py-2"><Link to="/">Home</Link></li>
         <li className="border-b-2 border-zinc-300 w-full py-2"> <Link to="/about">About</Link></li>
          <li className="border-b-2 border-zinc-300 w-full py-2"><Link to="/mentor">Mentor</Link></li>
          <li className="border-b-2 border-zinc-300 w-full py-2"><Link to="/career">Careers</Link></li>
          <li className="border-b-2 border-zinc-300 w-full py-2"><Link to="/contact">Contact</Link></li>
          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300"> 
              Sign In
            </button>
            <button className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
