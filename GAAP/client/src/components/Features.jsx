import React from 'react';

const Features = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">Advanced Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            A Complete AI Governance Platform
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            GAAP provides a comprehensive suite of features designed to ensure your AI systems are secure, ethical, and compliant.
          </p>
        </div>

        <div className="relative">
          {/* Feature grid with animated lines connecting them */}
          <div className="relative z-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-900 border border-green-900/50 rounded-lg p-6 shadow-xl">
              <div className="w-12 h-12 rounded-md bg-green-900/50 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Advanced Security Controls</h3>
              <p className="text-gray-400">
                Enterprise-grade security controls to protect AI models and data from unauthorized access and vulnerabilities.
              </p>
            </div>

            <div className="bg-gray-900 border border-green-900/50 rounded-lg p-6 shadow-xl">
              <div className="w-12 h-12 rounded-md bg-green-900/50 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Regulatory Compliance</h3>
              <p className="text-gray-400">
                Built-in compliance frameworks for global AI regulations, with customizable templates for industry-specific requirements.
              </p>
            </div>

            <div className="bg-gray-900 border border-green-900/50 rounded-lg p-6 shadow-xl">
              <div className="w-12 h-12 rounded-md bg-green-900/50 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Performance Monitoring</h3>
              <p className="text-gray-400">
                Real-time monitoring of AI model performance, with drift detection and automatic alerts for potential issues.
              </p>
            </div>

            <div className="bg-gray-900 border border-green-900/50 rounded-lg p-6 shadow-xl">
              <div className="w-12 h-12 rounded-md bg-green-900/50 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Transparency & Explainability</h3>
              <p className="text-gray-400">
                Tools to make AI decision-making transparent and explainable to stakeholders, regulators, and end-users.
              </p>
            </div>

            <div className="bg-gray-900 border border-green-900/50 rounded-lg p-6 shadow-xl">
              <div className="w-12 h-12 rounded-md bg-green-900/50 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-400">
                Bring together data scientists, compliance experts, and business stakeholders with collaborative tools and workflows.
              </p>
            </div>

            <div className="bg-gray-900 border border-green-900/50 rounded-lg p-6 shadow-xl">
              <div className="w-12 h-12 rounded-md bg-green-900/50 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Automated Workflows</h3>
              <p className="text-gray-400">
                Automate compliance checks, model validation, and other critical governance processes with customizable workflows.
              </p>
            </div>
          </div>

          {/* Background grid with glow effect */}
          <div className="absolute inset-0 bg-grid-green-900/10 bg-[length:20px_20px] z-0 opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;