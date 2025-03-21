import React from 'react'
import {Route , Routes} from "react-router-dom"
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LandingPage from './pages/LandingPage'
import PayementPage from './pages/PayementPage'
import ProfilePage from './pages/UserProfile'
import CoursesPage from './pages/CoursesPage'
import ContactusPage from './pages/ContactusPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/payment' element={<PayementPage />} />
        <Route path='/userprofile' element={<ProfilePage />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/contact' element={<ContactusPage />} />
      </Routes>
    </div>
  )
}

export default App