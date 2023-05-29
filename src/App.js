import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/General/Navbar'
import Home from './components/Home'
import AllCars from './components/Cars/AllCars'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<AllCars />} />
      </Routes>
    </>
  )
}

export default App
