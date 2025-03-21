import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050A30] bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-3xl font-bold text-white">Questor</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition duration-300">Home</a>
              <a href="#" className="text-blue-200 hover:text-white px-3 py-2 text-sm font-medium transition duration-300">Courses</a>
              <a href="#" className="text-blue-200 hover:text-white px-3 py-2 text-sm font-medium transition duration-300">About Us</a>
              <a href="#" className="text-blue-200 hover:text-white px-3 py-2 text-sm font-medium transition duration-300">Testimonials</a>
              <a href="#" className="text-blue-200 hover:text-white px-3 py-2 text-sm font-medium transition duration-300">Contact</a>
            </div>
          </div>
          
          {/* Sign in and Register buttons */}
          <div className="hidden md:flex items-center">
            <a href="#" className="text-white underline hover:text-blue-200 px-4 py-2 text-sm font-medium transition duration-300">
              Sign In
            </a>
            <a href="#" className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition duration-300">
              Register
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 bg-opacity-90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Courses</a>
            <a href="#" className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <a href="#" className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
            <a href="#" className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-blue-800">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <a href="#" className="block w-full text-center px-4 py-2 text-sm font-medium text-white underline">
                  Sign In
                </a>
              </div>
              <div className="mt-3 w-full">
                <a href="#" className="block w-full text-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium text-white">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;