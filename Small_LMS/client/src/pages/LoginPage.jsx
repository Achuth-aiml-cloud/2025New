import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempted with:', { email, password });
  };
  
  return (
    <div className="min-h-screen bg-[#050A30] relative pt-24">
      {/* Floating Navbar */}
      <div className="absolute top-8 left-0 right-0 mx-auto max-w-7xl">
        <div className="bg-blue-900 bg-opacity-30 rounded-xl shadow-lg px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Questor</h1>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition duration-300">
            Register
          </button>
        </div>
      </div>
      
      <div className="container mt-20 mx-auto px-4">
        <div className="flex flex-col md:flex-row rounded-xl max-w-7xl mx-auto">
          
          {/* Left Section - Information */}
          <div className="md:w-1/3 mt-4 p-8 md:p-12">
            <h1 className="text-5xl font-bold text-white mb-6">Welcome to Questor</h1>
            <p className="text-blue-200 mb-4 text-3xl">
              Start Your Journey to Expertise
            </p>
            
            <div className="mt-20">
              <p className="text-blue-300 text-sm">New to Questor?</p>
              <a href="#" className="text-white underline hover:text-blue-200 transition duration-300">
                Discover how we can help you learn
              </a>
            </div>
          </div>
          
          {/* Gap between sections */}
          <div className="md:w-4"></div>
          
          {/* Middle Section - Image */}
          <div className="md:w-1/3 flex items-center justify-center p-8 mb-2 md:p-12">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Replace with your actual image */}
              <img 
                src="https://cdni.iconscout.com/illustration/premium/thumb/man-reading-book-illustration-download-in-svg-png-gif-file-formats--male-read-pack-people-illustrations-4665130.png" 
                alt="Login illustration" 
                className="max-w-full max-h-80 object-contain"
              />
              <div className="absolute bottom-0 w-full text-center pb-4">
                <p className="text-blue-200 text-lg font-light italic">
                  "Education is the passport to the future"
                </p>
              </div>
            </div>
          </div>
          
          {/* Gap between sections */}
          <div className="md:w-4"></div>
          
          {/* Right Section - Login Form */}
          <div className="md:w-1/3 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Questor Login</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-blue-200 text-sm font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-blue-900 bg-opacity-30 border border-blue-800 focus:outline-none focus:border-blue-500 text-white placeholder-blue-300"
                  required
                />
              </div>
              
              <div className="mb-8">
                <label className="block text-blue-200 text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg bg-blue-900 bg-opacity-30 border border-blue-800 focus:outline-none focus:border-blue-500 text-white placeholder-blue-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 bg-blue-900 border-blue-800 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-blue-200">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-300 hover:text-white">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 text-white font-medium rounded-lg py-3 px-4 transition duration-300"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-blue-200">
                Don't have an account?{" "}
                <a href="#" className="text-white hover:underline">
                  Create Account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;