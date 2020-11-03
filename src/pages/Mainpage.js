import React from 'react'
import HeaderCards from '../components/cards/HeaderCards'
import Credentials from '../components/credentialsSection/Credentials'
import Hero from '../components/hero/Hero'
import MobileNav from '../components/mobileNav/MobileNav'
import Navbar from '../components/nav/Navbar'
import Showcase from '../components/showcase/Showcase'


function Mainpage() {
  return (
    <div>
      <MobileNav />
        <Navbar />
        <Hero />
        <HeaderCards />
      <Showcase />
      <Credentials />
    </div>
  )
}

export default Mainpage
