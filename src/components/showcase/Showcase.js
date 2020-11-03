import React from 'react'
import {
  ShowcaseContainer,
  ShowcaseImge,
  ShowcaseContent,
  ShowcaseHeader,
  ShowcaseTitle,
  ShowcaseText,
  Signature,
  Name,
} from './ShowcaseStyle'


function Showcase() {
  return (
    <ShowcaseContainer id="showcase">
      <ShowcaseImge />
      <ShowcaseContent>
        <ShowcaseHeader>Who we are</ShowcaseHeader>
        <ShowcaseTitle>Our Mission & Values</ShowcaseTitle>
        <ShowcaseText>
          We started OVERWOOD with one goal - to make safe, high-yield investments accessible to regular people.
        </ShowcaseText>
        <ShowcaseText>
          We want to give everyone an opportunity to grow their money regardless of the value of their principal amount.
        </ShowcaseText>
        <ShowcaseText>
          We want to do it with integrity and a deep commitment that our client will never lose a dime of their hard-earned money.
        </ShowcaseText>
        <Signature>
          <Name>Mr. Nwosa Emeka </Name>
          <ShowcaseText position>Founder & CEO</ShowcaseText>
        </Signature>
      </ShowcaseContent>
    </ShowcaseContainer>
  )
}

export default Showcase
