import React from 'react';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ openForm }) => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-lg w-full">
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <Link to="/Herohome">
        <img
          src="./src/assets/logodaily.png"
          alt="Dailymotion Logo"
          className="h-8 mr-4 md:mr-8 lg:mr-32"
        />
        </Link>
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
        <Link to="/login">
        <button onClick={() => openForm('login')} className="flex items-center border border-gray-400 px-4 py-2 rounded">
          <FaSignInAlt className="mr-2 font-semibold" />
          Login
        </button>
        </Link>
        <Link to="/signup">
        <button onClick={() => openForm('signup')} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          Signup
        </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
