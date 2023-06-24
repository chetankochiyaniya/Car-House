import React from 'react'
import AboutUS from '../Home/AboutUs'
import Blogs from '../Home/Blogs'
import Contact from '../Home/Contact'
import FeaturedCar from '../Home/FeaturedCar'
import MainBanner from '../Home/MainBanner'
import Footer from '../General/Footer'

function Home() {
  return (
    <>
      <MainBanner />
      <FeaturedCar />
      <AboutUS />
      <Blogs />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
