import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/General/Navbar'
import Home from './components/Home'
import AllCars from './components/Cars/AllCars'
import CardDetails from './components/Cars/CarDetails'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<AllCars />} />
        <Route path="/car-details" element={<CardDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
