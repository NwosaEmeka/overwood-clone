import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const MobileNavContainer = styled.header`
  width: 100%;
  height:auto;
  background-color: ${props => props.theme.links_clr};
  color: #fff;
  display: none;

  @media(max-width: 62em){
    display: block;
  }
`

export const LogoContainer = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  @media (max-width: 42em){
    padding:0 1rem;
  }
`
export const Logo = styled(Link)`
  font-family: 'Raleway', sans-serif;
  color: #fff;
  font-weight: 500;
  font-size:1.7rem;
  text-transform: uppercase;
`
export const Toogler = styled.div`
  cursor: pointer;
`
export const NavContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  visibility: ${props => props.isActive? "visible": "hidden"};
  max-height: ${props => props.isActive ? "450px" : "0px"};
  transition: all 0.5s ease-in-out;
`
export const MobileNavUl = styled.ul`
  
`
export const MobileNavItem = styled.li`
  border-bottom: 1px solid rgba(255,255,255,0.2);
`
export const MobileLinks = styled(Link)`
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-block;
  padding: 0.6rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items:center;

  @media (max-width: 42em){
    padding:0.6rem 1rem;
  }
`
export const SubNav = styled.ul`
  height: auto;
  max-height: ${props => props.isclosed? "0px": "150px"};
  overflow:hidden;
  visibility: ${props => props.isclosed ? "hidden" : "visible"};
  transition: all 0.5s ease;
`
export const SubItem = styled.li`
   border-top: 1px solid rgba(255,255,255,0.2);
`
export const SubLinks = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 0.6rem 3rem;
  text-transform:uppercase;
  color: #fff;
  font-weight:600;
  font-size: 0.8rem;
  position: relative;
  transition: all 0.4s ease;

  &:before{
    content:"-";
    margin-right: 0.2rem;
  }
  &:hover{
    color:#f26522;
  }
`