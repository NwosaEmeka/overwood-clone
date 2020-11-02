import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { Button } from '../buttons/ButtonStyle';
import {
  NavBarContainer,
  LogoContainer,
  ColoredLogo,
  Nav,
  NavItem,
  NavLink,
  InnerNav,
  InnerItem,
  InnerLink
} from './NavStyles';


function Navbar() {
  return (
    <NavBarContainer>
      <LogoContainer to="/">
        <ColoredLogo>Over</ColoredLogo>
        Wood
      </LogoContainer>
      <Nav>
        <NavItem>
          <NavLink className="inner"  to="/">Our Products <FaCaretDown /></NavLink>
          <InnerNav>
            <InnerItem>
              <InnerLink to="/">Overwood Prime</InnerLink>
            </InnerItem>
            <InnerItem>
              <InnerLink to="/">Overwood Dollar</InnerLink>
            </InnerItem>
            <InnerItem>
              <InnerLink to="/">Overwood Child</InnerLink>
            </InnerItem>
          </InnerNav>
        </NavItem>
        <NavItem>
          <NavLink to="/">FAQs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">6 Things About Us</NavLink>
        </NavItem>
      </Nav>
      <div>
        <Button navbtn>Log in</Button>
        <Button navbtn primary>Create Account</Button>
      </div>
      
    </NavBarContainer>
  )
}

export default Navbar
