import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AllCars from './components/Cars/AllCars'
import CardDetails from './components/Cars/CarDetails'
import About from './components/About'
import Contact from './components/Contact'
import Team from './components/Team'
import { ToastContainer } from 'react-toastify'
import AdminRoute from './routes/AdminRoute'
import WishList from './components/Wishlist'
import PrivateRoute from './routes/PrivateRoute'
import General from './components/General'

const Dashboard = lazy(() => import('./Dashboard/AdminHome'))
const AdminUser = lazy(() => import('./Dashboard/AdminUsers'))
const AdminCars = lazy(() => import('./Dashboard/AdminCars'))
const AdminChatSupport = lazy(() => import('./Dashboard/AdminChatSupport'))

function App() {
  return (
    <>
      <General />
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
        <Route path="/wishlist" element={<PrivateRoute component={WishList} />} />
        <Route path="/dashboard" element={<AdminRoute component={Dashboard} />} />
        <Route path="/dashboard/live-chat" element={<AdminRoute component={AdminChatSupport} />} />
        <Route path="/dashboard/users" element={<AdminRoute component={AdminUser} />} />
        <Route path="/dashboard/cars" element={<AdminRoute component={AdminCars} />} />
      </Routes>
    </>
  )
}

export default App
