import React from 'react';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-lg w-full">
        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
          <img 
            src="./src/assets/logodaily.png" 
            alt="Dailymotion Logo" 
            className="h-8 mr-4 md:mr-8 lg:mr-32" 
          />
          <div className="relative w-full md:w-96 lg:w-[32rem]">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch className="h-5 w-5" />
            </span>
            <input
              type="text"
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Log in</button>
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Sign up</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
