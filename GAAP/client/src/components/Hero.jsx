import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent"></div>
        {/* Glowing orb effect */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-green-900/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-green-900/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-900/30 text-green-400">
                <svg className="mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
                Now Available: GAAP v3.5
              </span>
            </div>
            
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-green-500 sm:text-base lg:text-sm xl:text-base">
                Introducing
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-white">Generative AI</span>
                <span className="block text-green-600">Assurance Platform</span>
              </span>
            </h1>
            
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Secure, reliable, and compliant AI solutions for enterprises. GAAP helps you implement generative AI with confidence through comprehensive risk management and governance.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/requesting"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/docs"
                    className="w-full flex items-center justify-center px-8 py-3 border border-green-800 text-base font-medium rounded-md text-green-500 bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              
              {/* Added feature list */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Compliance Ready</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Enterprise Grade</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            {/* Enhanced graphic representing AI/ML */}
            <div className="relative mx-auto w-full rounded-lg shadow-2xl lg:max-w-md">
              <div className="relative block w-full bg-gray-800 rounded-lg overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black"></div>
                
                {/* Abstract circuit pattern */}
                <svg 
                  className="w-full h-72 text-green-800 opacity-30" 
                  viewBox="0 0 600 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M300 0 L600 200 L300 400 L0 200 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="300" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="300" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="300" cy="200" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="150" y1="100" x2="450" y2="300" stroke="currentColor" strokeWidth="2" />
                  <line x1="450" y1="100" x2="150" y2="300" stroke="currentColor" strokeWidth="2" />
                  <line x1="300" y1="0" x2="300" y2="400" stroke="currentColor" strokeWidth="2" />
                  <line x1="0" y1="200" x2="600" y2="200" stroke="currentColor" strokeWidth="2" />
                  
                  {/* Connection dots */}
                  <circle cx="300" cy="200" r="5" fill="currentColor" />
                  <circle cx="150" cy="100" r="5" fill="currentColor" />
                  <circle cx="450" cy="100" r="5" fill="currentColor" />
                  <circle cx="150" cy="300" r="5" fill="currentColor" />
                  <circle cx="450" cy="300" r="5" fill="currentColor" />
                  <circle cx="0" cy="200" r="5" fill="currentColor" />
                  <circle cx="600" cy="200" r="5" fill="currentColor" />
                  <circle cx="300" cy="0" r="5" fill="currentColor" />
                  <circle cx="300" cy="400" r="5" fill="currentColor" />
                </svg>
                
                {/* Overlay with text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
                    <h3 className="text-white font-bold text-xl mb-2">Secure AI For Enterprise</h3>
                    <p className="text-green-300 text-sm">Complete governance and risk management for generative AI systems</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Enterprise Ready
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="relative z-10 border-t border-green-900/30 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
            <div className="border-l-2 border-green-800 pl-6">
              <dt className="text-sm font-medium text-gray-400">Enterprises</dt>
              <dd className="mt-1 text-3xl font-extrabold text-white">500+</dd>
            </div>
            <div className="border-l-2 border-green-800 pl-6">
              <dt className="text-sm font-medium text-gray-400">AI Models Secured</dt>
              <dd className="mt-1 text-3xl font-extrabold text-white">2,000+</dd>
            </div>
            <div className="border-l-2 border-green-800 pl-6">
              <dt className="text-sm font-medium text-gray-400">Compliance Rate</dt>
              <dd className="mt-1 text-3xl font-extrabold text-white">99.9%</dd>
            </div>
            <div className="border-l-2 border-green-800 pl-6">
              <dt className="text-sm font-medium text-gray-400">Risk Reduction</dt>
              <dd className="mt-1 text-3xl font-extrabold text-white">85%</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Hero;