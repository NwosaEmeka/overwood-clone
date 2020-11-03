import React from 'react'
import Cards from '../cards/Cards'
import {
  CredentialsWrapper,
  CardWrapper,
  CredentialTitle,
  CredentialHeader
} from './CredentialsStyles'
import { IoIosUmbrella,IoIosCube, IoIosPodium,IoMdListBox, IoMdCash, IoMdWallet} from "react-icons/io"

function Credentials() {
  return (
    <CredentialsWrapper>
      <CredentialTitle>Our credentials </CredentialTitle>
      <CredentialHeader>6 Things You should know about us </CredentialHeader>
      <CardWrapper>
        <Cards
          bkstyle="primary"
          header="How it Works"
          text="We select the best and safest instruments in our market, diversify and adjust as needed, and distribute daily dividends."
          links="Read more"
        >
          <IoIosUmbrella size={40} style={{fill:"#23d3d3"}}/>
        </Cards>
        <Cards
          bkstyle="primary"
          header="Our Investment Model"
          text="We are focused primarily on the safety of the funds under our management. We are conservative and risk-averse."
          links="Read more"
        >
          <IoIosCube size={40} style={{fill:"#23d3d3"}}/>
        </Cards>
        <Cards
          bkstyle="primary"
          header="Our Process"
          text="The step-by-step process for starting, monitoring, and withdrawing your investment."
          links="Read more"
        >
          <IoIosPodium size={40} style={{fill:"#23d3d3"}}/>
        </Cards>
        <Cards
          bkstyle="primary"
          header="Investment Calculator"
          text="Our investment calculator simulates the daily growth of your funds."
          links="Read more"
        >
          <IoMdListBox size={40} style={{fill:"#23d3d3"}}/>
        </Cards>
        <Cards
          bkstyle="primary"
          header="Our Board of Directors"
          text="Meet our board whose mandate is to ensure that we put our clients first."
          links="Read more"
        >
          <IoMdCash size={40} style={{fill:"#23d3d3"}}/>
        </Cards>
        <Cards
          bkstyle="primary"
          header="Our Management Team"
          text="Meet our vibrant team that is focused on delivering value to you."
          links="Read more"
        >
          <IoMdWallet size={40} style={{fill:"#23d3d3"}}/>
        </Cards>
      </CardWrapper>
    </CredentialsWrapper>
  )
}

export default Credentials
