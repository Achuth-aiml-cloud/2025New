import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-green-900 to-black rounded-2xl shadow-2xl overflow-hidden">
          {/* Background pattern */}
          <svg
            className="absolute inset-0 h-full w-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 720 350"
          >
            <g strokeWidth="2" stroke="currentColor" fill="none">
              <path d="M0 0l9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9z"></path>
              <path d="M100 0l9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9z"></path>
              <path d="M200 0l9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9z"></path>
              <path d="M300 0l9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9z"></path>
              <path d="M400 0l9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9z"></path>
              <path d="M500 0l9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9z"></path>
              <path d="M600 0l9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9z"></path>
              <path d="M700 0l9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9 9 9-9 9z"></path>
            </g>
          </svg>

          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to secure your AI systems?
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Join hundreds of enterprises that trust GAAP to manage their AI governance, compliance, and risk.
              </p>
              
              <div className="mt-10 max-w-lg mx-auto">
                <form className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button 
                      type="submit" 
                      className="block w-full py-3 px-4 rounded-md shadow bg-green-800 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-gray-900"
                    >
                      Request Demo
                    </button>
                  </div>
                </form>
                
                <p className="mt-3 text-sm text-gray-400">
                  We care about your data. Read our{' '}
                  <a href="#" className="font-medium text-green-400 underline">
                    Privacy Policy
                  </a>
                  {' '}and{' '}
                  <a href="#" className="font-medium text-green-400 underline">
                    Terms of Service
                  </a>
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-extrabold text-white">99%</span>
                  <span className="mt-2 text-sm text-gray-400">Compliance Rate</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-extrabold text-white">500+</span>
                  <span className="mt-2 text-sm text-gray-400">Enterprise Clients</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-extrabold text-white">85%</span>
                  <span className="mt-2 text-sm text-gray-400">Risk Reduction</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-extrabold text-white">24/7</span>
                  <span className="mt-2 text-sm text-gray-400">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;