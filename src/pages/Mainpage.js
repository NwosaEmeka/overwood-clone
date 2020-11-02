import React from 'react'
import styled from 'styled-components'
import HeaderCards from '../components/cards/HeaderCards'
import Hero from '../components/hero/Hero'
import MobileNav from '../components/mobileNav/MobileNav'
import Navbar from '../components/nav/Navbar'

const MainWrapper = styled.div`
  max-width: 75rem;
  padding: 0 1.1rem;
  margin: 0 auto;
`
function Mainpage() {
  return (
    <div>
      <MobileNav />
      <MainWrapper>
        <Navbar />
        <Hero />
        <HeaderCards />
    </MainWrapper>
    </div>
  )
}

export default Mainpage
