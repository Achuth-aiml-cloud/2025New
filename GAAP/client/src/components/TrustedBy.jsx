import React from 'react';

const TrustedBy = () => {
  return (
    <section className="bg-gray-900 py-12 border-t border-b border-green-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-base text-green-500 font-medium">
            Trusted by leading enterprises worldwide
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {/* Using placeholder logos with company names in SVG format */}
          {/* In a real implementation, these would be actual company logos */}
          
          <div className="flex items-center justify-center h-12">
            <svg className="h-8 text-gray-400" viewBox="0 0 120 30" fill="currentColor">
              <rect width="120" height="30" fill="none" />
              <text x="60" y="20" fontSize="14" fontWeight="bold" textAnchor="middle">ACME Corp</text>
            </svg>
          </div>
          
          <div className="flex items-center justify-center h-12">
            <svg className="h-8 text-gray-400" viewBox="0 0 120 30" fill="currentColor">
              <rect width="120" height="30" fill="none" />
              <text x="60" y="20" fontSize="14" fontWeight="bold" textAnchor="middle">TechGiant</text>
            </svg>
          </div>
          
          <div className="flex items-center justify-center h-12">
            <svg className="h-8 text-gray-400" viewBox="0 0 120 30" fill="currentColor">
              <rect width="120" height="30" fill="none" />
              <text x="60" y="20" fontSize="14" fontWeight="bold" textAnchor="middle">FinanceHub</text>
            </svg>
          </div>
          
          <div className="flex items-center justify-center h-12">
            <svg className="h-8 text-gray-400" viewBox="0 0 120 30" fill="currentColor">
              <rect width="120" height="30" fill="none" />
              <text x="60" y="20" fontSize="14" fontWeight="bold" textAnchor="middle">MediCorp</text>
            </svg>
          </div>
          
          <div className="flex items-center justify-center h-12">
            <svg className="h-8 text-gray-400" viewBox="0 0 120 30" fill="currentColor">
              <rect width="120" height="30" fill="none" />
              <text x="60" y="20" fontSize="14" fontWeight="bold" textAnchor="middle">RetailPro</text>
            </svg>
          </div>
          
          <div className="flex items-center justify-center h-12">
            <svg className="h-8 text-gray-400" viewBox="0 0 120 30" fill="currentColor">
              <rect width="120" height="30" fill="none" />
              <text x="60" y="20" fontSize="14" fontWeight="bold" textAnchor="middle">EnergyX</text>
            </svg>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <div className="inline-flex items-center rounded-full px-6 py-2 border border-green-900/40 bg-black/30">
            <svg 
              className="h-5 w-5 text-green-500 mr-2" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-300">
              <span className="font-bold text-white">500+</span> enterprises rely on GAAP for AI governance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;