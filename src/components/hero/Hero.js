import React from 'react'
import { Button } from '../buttons/ButtonStyle'
import {
  HeroWrapper,
  HeroContent,
  HeroPara,
  HeroHeader,
  HeroLink,
  HeroImage,
} from './HeroStyles'

function Hero() {
  return (
    <>
    <HeroWrapper id="hero">
      <HeroContent>
        <HeroPara colored>Earn 8 - 12% per annum</HeroPara>
        <HeroHeader>
          Safe, High-Yield Investments
        </HeroHeader>
        <HeroPara>
          We provide access to safe, high-yield investments for Africans (starting in Nigeria) with three products -
           <HeroLink to="/">Overwood Prime </HeroLink>
          <HeroLink to="/">Overwood Dollar </HeroLink>
          <HeroLink to="/">Overwood Child </HeroLink>
        </HeroPara>
        <Button primary>Invest now</Button>
      </HeroContent>
      <HeroImage/>
    </HeroWrapper>
    </>
  )
}

export default Hero
