import React from 'react'
import {
  Cardwrapper,
  Card, 
  SectionWrapper, 
  Sectionheader,
  Prytxt,
  Sectxt,
} from '../cards/ColorCardStyle'
import {CardHeader, CardText, CardLink }from "./ProductStyle"


function Products() {
  return (
    <SectionWrapper>
      <Sectionheader>Our Products</Sectionheader>
      <Cardwrapper>
        <Card>
          <CardHeader color="#4ba5fa">Overwood Prime</CardHeader>
          <CardText>
            <Prytxt>Over</Prytxt><Sectxt>Wood</Sectxt> PRIME suits investors who are looking for long-term growth and want to protect their investment against market fluctuations.OVERWOOD PRIME is focused on...
          </CardText>
          <CardLink to="/">Read More</CardLink>
        </Card>
        <Card>
          <CardHeader color="#23d3d3">Overwood Dollar</CardHeader>
          <CardText>
            <Prytxt>Over</Prytxt><Sectxt>Wood</Sectxt> DOLLAR Investors can choose to subscribe with Naira or US Dollar but the funds will always be held in US Dollars. At maturity, you can choose to withdraw in ...
          </CardText>
          <CardLink to="/">Read More</CardLink>
        </Card>
        <Card>
          <CardHeader color="#8950FC">Overwood Child</CardHeader>
          <CardText>
            <Prytxt>Over</Prytxt><Sectxt>Wood</Sectxt> CHILD was designed for investors who have young children and are looking to grow the funds earmarked for their children’s current or future school fees.
          </CardText>
          <CardLink to="/">Read More</CardLink>
        </Card>
      </Cardwrapper>
    </SectionWrapper>
  )
}

export default Products
