import React from 'react'
import {FooterWraper, Copyright, FooterLinks, FooterLink } from './footerstyle'

function Footer() {
  return (
    <FooterWraper>
      <Copyright>
        &copy; {new Date().getFullYear()} OverWood.
      </Copyright>
      <FooterLinks>
        <FooterLink>Terms and Conditions</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>FAQs</FooterLink>
      </FooterLinks>
    </FooterWraper>
  )
}

export default Footer
