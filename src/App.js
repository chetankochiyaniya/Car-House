import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/General/Navbar'
import Home from './components/Home'
import AllCars from './components/Cars/AllCars'
import CardDetails from './components/Cars/CarDetails'
import About from './components/About'
import Contact from './components/Contact'
import Team from './components/Team'
import { ToastContainer } from 'react-toastify'
import AdminRoute from './routes/AdminRoute'
import WishList from './components/Wishlist'

const AdminDashbord = lazy(() => import('./components/Dashboard'))

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<AllCars />} />
        <Route path="/car-details/:id" element={<CardDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/dashboard" element={<AdminRoute component={AdminDashbord} />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </>
  )
}

export default App
