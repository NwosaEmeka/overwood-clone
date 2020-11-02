import styled from "styled-components"
import {Link} from "react-router-dom"

export const HeroWrapper = styled.div`
  display: flex;
  padding-top: 10rem;
  min-height: 100vh;

  @media (max-width: 37em){
    padding-top: 6rem;
  }
`
export const HeroContent = styled.div`
  max-width: 30rem;
  margin-right: 7rem;
`
export const HeroPara = styled.p`
  font-weight: ${props => props.colored? 800: 500};
  color: ${props => props.colored ? props.theme.links_clr : props.theme.dark};
  margin-bottom: ${props => props.colored ? "0px" : "1.5rem"};
  
  @media (max-width: 42em){
     font-size: ${props => props.colored? "0.7rem": "0.65rem"};;
  }
`
export const HeroHeader = styled.h1`
  font-size: clamp(1.6rem, 4.5vw, 2.5rem);
  line-height: 1.2;
  color: ${props => props.theme.links_clr};
  margin: 1rem 0;
`
export const HeroLink = styled(Link)`
  text-transform: uppercase;
  color: ${props => props.theme.blue};
  transition: color 0.25s linear;
  &:hover{
    color: ${props => props.theme.light_green};
  }
`
export const HeroImage = styled.div`
  flex:1; 
  background: url("/images/homeimg_1.jpg") center center/cover no-repeat ;
  height: 500px;
  width: 550px;
  @media (max-width: 62rem){
    display: none;
  }
`
