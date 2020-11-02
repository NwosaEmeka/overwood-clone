import React,{useState} from 'react'
import { FaBars, FaPlus, FaTimes } from 'react-icons/fa'
import { Button } from '../buttons/ButtonStyle'
import {
  MobileNavContainer,
  MobileNavUl,
  MobileNavItem,
  MobileLinks,
  NavContainer,
  LogoContainer,
  Logo,
  Toogler,
  SubNav,
  SubLinks,
  SubItem
} from './MobileNavStyle'

function MobileNav() {
  const [isActive, setIsActive] = useState(false)
  const [isclosed, setIsClosed] = useState(true)
  return (
    <MobileNavContainer>
      <LogoContainer>
        <Logo to="/">Overwood</Logo>
        <Toogler onClick= {() => setIsActive(!isActive)}>
          {isActive ? 
            <FaTimes size={30} /> :
            <FaBars size={30}/>
        }
        </Toogler>
      </LogoContainer>
      <NavContainer isActive={isActive}>
        <MobileNavUl>
          <MobileNavItem>
            <MobileLinks to="/">Home</MobileLinks>
          </MobileNavItem>
          <MobileNavItem>
            <MobileLinks to="#">Our Products
      <span onClick={() => setIsClosed(!isclosed)}> {isclosed ? <FaPlus /> : <FaTimes />}</span>
            </MobileLinks>
            <SubNav isclosed={isclosed}>
              <SubItem>
                <SubLinks to="/">Overwood prime</SubLinks>
              </SubItem>
              <SubItem>
                <SubLinks to="/">Overwood dollar</SubLinks>
              </SubItem>
              <SubItem>
                <SubLinks to="/">Overwood child</SubLinks>
              </SubItem>
            </SubNav>
          </MobileNavItem>
          <MobileNavItem>
            <MobileLinks to="/">FAQS</MobileLinks>
          </MobileNavItem>
          <MobileNavItem>
            <MobileLinks to="/">Contact</MobileLinks>
          </MobileNavItem>
          <MobileNavItem>
            <MobileLinks to="/">6 Things About Us</MobileLinks>
          </MobileNavItem>
        </MobileNavUl>
        <div>
        <Button navbtn>Log in</Button>
        <Button navbtn primary>Create Account</Button>
      </div>
      </NavContainer>
    </MobileNavContainer>
  )
}

export default MobileNav
