import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Solutions from '../components/Solutions';
import Features from '../components/Features'; 
import Testimonials from '../components/Testimonals';
import CTASection from '../components/CTASection';
import TrustedBy from '../components/TrustedBy';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Solutions />
      <Features />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;