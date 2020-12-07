import React from 'react'
import HeaderCards from '../components/cards/HeaderCards'
import Credentials from '../components/credentialsSection/Credentials'
import Footer from '../components/footer/Footer'
import Mainfooter from '../components/footer/Mainfooter'
import Hero from '../components/hero/Hero'
import MobileNav from '../components/mobileNav/MobileNav'
import Navbar from '../components/nav/Navbar'
import Products from '../components/products/Products'
import Scroll from '../components/scroll/Scroll'
import Showcase from '../components/showcase/Showcase'
import NextStep from '../components/step/NextStep'


function Mainpage() {
  return (
    <div>
      <MobileNav />
      <Navbar />
      <Hero />
      <Scroll />
      <HeaderCards />
      <Showcase />
      <Credentials />
      <Products />
      <NextStep />
      <Mainfooter />
      <Footer />
    </div>
  )
}

export default Mainpage
