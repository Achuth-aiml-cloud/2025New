import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Services from '../components/Services'
import PopularCourses from '../components/PopularCourses'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <PopularCourses />
        <Footer />
    </div>
  )
}

export default LandingPage