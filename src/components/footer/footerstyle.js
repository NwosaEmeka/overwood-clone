import styled from 'styled-components'
import {Link} from "react-router-dom"


// Main footer style

export const MainfooterWraper = styled.footer`
  background-color: ${props => props.theme.blue};
  color: #fff;
  padding:  ${props => props.theme.pd_xl};
`

export const FooterWraper = styled.section`
  background-color: ${props => props.theme.links_clr};
  padding: 1.2rem ${props => props.theme.pd_xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;
  color: rgba(255,255,255,0.6);;
  font-size: 0.8rem;
  font-weight:500;

  @media (max-width: 40em){
    flex-direction:column;
    padding: 1.2rem 0;

    & * + *{
      margin-top:0.3rem;
    }
  }
`
export const Copyright = styled.p`
  text-transform: uppercase;
`
export const FooterLinks = styled.div`
  & * + *{
    margin-left: 1.2rem;
  }
`
export const FooterLink = styled(Link)`
  display: inline-block;
  color: rgba(255,255,255,0.6);
  &:hover{
    color: #fff;
  }
`