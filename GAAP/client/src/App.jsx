import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LandingPage from './pages/LandingPage'
import RequestingPage from './pages/RequestingPage'
import PricingPage from './pages/PricingPage'
import DocumentationPage from './pages/DocumentationPage'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/requesting' element={<RequestingPage />} />
        <Route path='/docs' element={<DocumentationPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App