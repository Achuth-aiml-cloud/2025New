import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogo = () =>{
    navigate("/home")
  }


  return (
    <nav className="bg-black border-b border-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo */}
              <div className="flex items-center">
                <svg 
                  className="h-8 w-8 text-green-600" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
                  <path d="M30 50L45 65L70 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="ml-2 text-xl font-bold text-white cursor-pointer" onClick={handleLogo}>GAAP</span>
              </div>
            </div>
            
            {/* Desktop navigation links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a 
                href="/dashboard" 
                className="hover:border-green-400 border-transparent text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Dashboard
              </a>
              <a 
                href="/features" 
                className="border-transparent text-gray-300 hover:border-green-400 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Features
              </a>
              <a 
                href="/pricing" 
                className="border-transparent text-gray-300 hover:border-green-400 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Pricing
              </a>
              <a 
                href="/docs" 
                className="border-transparent text-gray-300 hover:border-green-400 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Documentation
              </a>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <a 
              href="/" 
              className="text-green-500 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg 
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg 
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <a 
            href="/dashboard" 
            className="bg-gray-900 text-white block pl-3 pr-4 py-2 border-l-4 border-green-500 text-base font-medium"
          >
            Dashboard
          </a>
          <a 
            href="/features" 
            className="border-transparent text-gray-300 hover:bg-gray-800 hover:border-green-400 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Features
          </a>
          <a 
            href="/pricing" 
            className="border-transparent text-gray-300 hover:bg-gray-800 hover:border-green-400 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Pricing
          </a>
          <a 
            href="/docs" 
            className="border-transparent text-gray-300 hover:bg-gray-800 hover:border-green-400 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Documentation 
          </a>
        </div>
        
        <div className="pt-4 pb-3 border-t border-gray-800">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center">
              <a 
                href="/" 
                className="text-green-500 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;