import React from 'react'
import {
  Cardwrapper,
  Card,
  SectionWrapper,
  Sectionheader,
  SectionInfo,
  Prytxt,
  Sectxt,
} from '../cards/ColorCardStyle'
import {NextCardHeader, NextCardLink } from "./NextstepStyle"

function NextStep() {
  return (
    <SectionWrapper>
      <SectionInfo>Ready to take the next step?</SectionInfo>
      <Sectionheader>Next Steps</Sectionheader>
      <Cardwrapper>
        <Card>
          <NextCardHeader>Invest Now</NextCardHeader>
          <NextCardLink to="/">Click here to start your <Prytxt>OVER</Prytxt><Sectxt>wOODs</Sectxt> investment.</NextCardLink>
        </Card>
        <Card>
          <NextCardHeader>Request Details</NextCardHeader>
          <NextCardLink to="/">Click here to request <Prytxt>OVER</Prytxt><Sectxt>wOODs</Sectxt> prospectus.</NextCardLink>
        </Card>
        <Card>
          <NextCardHeader>Contact us</NextCardHeader>
          <NextCardLink to="/">Get in touch with <Prytxt>OVER</Prytxt><Sectxt>wOODs</Sectxt></NextCardLink>
        </Card>
      </Cardwrapper>
    </SectionWrapper>
  )
}

export default NextStep
