import React from 'react'
import Cards from './Cards'
import {IoIosMedal,IoIosBulb,IoIosCash,IoIosHeadset} from "react-icons/io"
import {HeaderCardWrapper} from './HeaderCardStyles'


function HeaderCards() {
  return (
    <HeaderCardWrapper>
      <Cards
        header="Safety First."
        text="Fund safety is our most important principle."
      >
        <IoIosMedal size={40} style={{fill:"#23d3d3"}}/>
      </Cards>
      <Cards
        header="Good Returns."
        text="We achieve industry leading returns for our members."
      >
        <IoIosBulb size={40} style={{fill:"#23d3d3"}}/>
      </Cards>
      <Cards
        header="Daily Dividends."
        text="You accrue dividends and gains on a daily basis."
      >
        <IoIosCash size={40} style={{fill:"#23d3d3"}}/>
      </Cards>
      <Cards
        header="Compound Gains."
        text="Compound interest model increases your yield."
      >
        <IoIosHeadset size={40} style={{fill:"#23d3d3"}}/>
      </Cards>
      
    </HeaderCardWrapper>
  )
}

export default HeaderCards
