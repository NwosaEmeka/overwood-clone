import React from 'react'
import HeaderCards from '../components/cards/HeaderCards'
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
    </div>
  )
}

export default Mainpage
