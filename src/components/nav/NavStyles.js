import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBarContainer = styled.div`
  width:100%;
  height:3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: ${props => props.theme.links_clr};

  @media (max-width: 62em){
    display: none;
  }
`

export const LogoContainer = styled(Link)`
  font-family:'Raleway', sans-serif;
  text-transform:uppercase;
  font-size:1.8rem;
  font-weight:600;
  color: ${props => props.theme.links_clr};
`
export const ColoredLogo = styled.span`
  color: ${props => props.theme.light_green}
`

export const Nav = styled.ul`
  display: flex;
  align-items:center;
`
export const InnerNav = styled.ul`
  position: absolute;
  top: 3rem;
  width: 15rem;
  height: auto;
  list-style:none;
  border-top: 2px solid ${props => props.theme.light_green};
  box-shadow: 1px 2px 20px rgba(0,0,0,0.1);
  visibility: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s ease;
`
export const NavItem = styled.li`
  list-style: none;
  padding: 0.5rem 0;
  &:hover{
    ${InnerNav}{
      visibility: visible;
      transform: translateY(0);
      opacity: 1;
    }
  }
`
export const NavLink = styled(Link)`
  padding: 0 1.2rem 0.1rem;
  color: ${props => props.theme.links_clr};
  text-decoration:none;
  font-weight: 500;
  transition: border 0.4s linear;
  position: relative;
  
  &:after{
    content: "";
    height: 2px;
    width:0;
    position: absolute;
    bottom: -0.15rem;
    left:0;
    background-color:${props => props.theme.light_green};
    transition: all 0.4s ease;
  }

  &:hover{
    &:after{
      width: 100%;
    }
    &.inner{
      &:after{
        width:0;
      }
    }
  }
`
export const InnerItem = styled.li`
`
export const InnerLink = styled(Link)`
  text-transform: uppercase;
  text-decoration:none;
  font-weight:800;
  font-size: 0.7rem;
  display: inline-block;
  padding: 0.8rem;
  width: 100%;
  color: ${props => props.theme.dark};
  transition: all 0.5s ease;

  &:hover{
    background-color: ${props => props.theme.light_green};
    color: #fff;
  }
`