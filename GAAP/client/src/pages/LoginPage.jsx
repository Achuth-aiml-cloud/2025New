import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password, rememberMe });
    navigate('/home')
  };

  return (
    <div className="flex h-screen bg-black">
      {/* Left side with image/logo */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-900 to-black items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <svg 
              className="w-24 h-24 text-white" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
              <path d="M30 50L45 65L70 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">GAAP</h1>
          <p className="text-xl text-green-300">Generative AI Assurance Platform</p>
          <p className="mt-6 text-green-100 max-w-md mx-auto">
            Secure, reliable, and compliant AI solutions for your enterprise
          </p>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile logo (visible on small screens) */}
          <div className="lg:hidden text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">GAAP</h1>
            <p className="text-green-500">Generative AI Assurance Platform</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-green-900">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Sign in to your account</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-green-400 text-sm font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-green-400 text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <a href="#" className="text-sm text-green-500 hover:text-green-400">
                    Forgot password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center mb-6">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-600 rounded bg-gray-800"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-md bg-green-800 hover:bg-green-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
              >
                Sign in
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <a href="/register" className="text-green-500 hover:text-green-400 font-medium">
                  Sign up
                </a>
              </p>
            </div>
            
            <div className="mt-6 border-t border-gray-700 pt-6">
              <p className="text-xs text-gray-500 text-center">
                By signing in, you agree to our{' '}
                <a href="#" className="text-green-500 hover:underline">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-green-500 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;