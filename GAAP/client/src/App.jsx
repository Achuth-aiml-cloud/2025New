import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LandingPage from './pages/LandingPage'
import RequestingPage from './pages/RequestingPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/requesting' element={<RequestingPage />} />
      </Routes>
    </div>
  )
}

export default App