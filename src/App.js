import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/General/Navbar'
import Home from './components/Home'
import AllCars from './components/Cars/AllCars'
import CardDetails from './components/Cars/CarDetails'
import About from './components/About'
import Contact from './components/Contact'
import Team from './components/Team'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<AllCars />} />
        <Route path="/car-details" element={<CardDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  )
}

export default App
